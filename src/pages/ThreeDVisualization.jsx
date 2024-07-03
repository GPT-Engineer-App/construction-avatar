import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ThreeDVisualization = () => {
  const navigate = useNavigate();
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold">Visualização 3D</h1>
      <p className="text-xl text-muted-foreground">Visualize seu projeto em 3D e identifique possíveis problemas de cronograma.</p>
      <div ref={mountRef} className="w-full h-96"></div>
      <Button onClick={() => navigate("/")} className="mt-4">
        Voltar para Início
      </Button>
    </div>
  );
};

export default ThreeDVisualization;