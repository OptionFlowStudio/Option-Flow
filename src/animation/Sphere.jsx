import * as THREE from "three";

import { useEffect, useRef, useState } from "react";
import { render } from "@testing-library/react";

function Sphere() {
  const sceneRef = useRef(null);
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const aspectRatio = width / height;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    window.innerHeight >= 1000
      ? (camera.position.z = 3)
      : (camera.position.z = 2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    renderRef.current = render;

    const sphereContainer = new THREE.Group();

    const numSpheres = 500;
    const sphereRadius = 0.01;

    for (let i = 0; i < numSpheres; i++) {
      const geometry = new THREE.SphereGeometry(sphereRadius, 20, 20);
      const material = new THREE.MeshBasicMaterial({ color: 0x5f51e3 });

      const sphere = new THREE.Mesh(geometry, material);
      const phi = Math.acos(-1 + (2 * i) / numSpheres);
      const theta = Math.sqrt(numSpheres * Math.PI) * phi;

      sphere.position.x = Math.cos(theta) * Math.sin(phi);
      sphere.position.y = Math.sin(theta) * Math.sin(phi);
      sphere.position.z = Math.cos(phi);
      sphereContainer.add(sphere);
    }

    scene.add(sphereContainer);

    const animate = () => {
      requestAnimationFrame(animate);
      sphereContainer.rotation.x += 0.004;
      sphereContainer.rotation.y += 0.006;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        renderRef.current &&
        typeof renderRef.current.dispose === "function"
      ) {
        renderRef.current.dispose();
      }
      if (mountRef.current && renderRef.current.domElement) {
        mountRef.current.removeChild(renderRef.current.domElement);
      }
      renderRef.current = null;
    };
  }, []);

  return <div ref={mountRef} className="sphere"></div>;
}

export default Sphere;
