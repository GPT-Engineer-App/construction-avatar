import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Line } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import { toast } from "sonner";

const HistoricalDataAnalysis = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
      prepareChartData(jsonData);
    };
    reader.readAsBinaryString(uploadedFile);
  };

  const prepareChartData = (jsonData) => {
    const labels = jsonData.map(item => item.Date);
    const values = jsonData.map(item => item.Value);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Historical Data',
          data: values,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    });
  };

  const { data: predictionData, isLoading, error } = useQuery({
    queryKey: ['predictScheduleDeviations', data],
    queryFn: async () => {
      // Replace with actual API call to your machine learning model
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    enabled: data.length > 0,
  });

  return (
    <div className="space-y-8 p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Historical Data Analysis</h1>
        <p className="text-xl text-muted-foreground">Analyze past project data and predict potential schedule deviations.</p>
      </header>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Upload Historical Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Data Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            {chartData.labels ? (
              <Line data={chartData} />
            ) : (
              <p>No data to display</p>
            )}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Machine Learning Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading predictions...</p>
            ) : error ? (
              <p>Error loading predictions: {error.message}</p>
            ) : predictionData ? (
              <div>
                <h2 className="text-2xl font-bold">Predicted Deviations</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {predictionData.map((prediction, index) => (
                    <li key={index}>{prediction}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No predictions available</p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HistoricalDataAnalysis;