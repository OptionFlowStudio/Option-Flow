// import * as THREE from "three";

// import { useEffect, useRef } from "react";
// import { render } from "@testing-library/react";

// function Sphere() {
//   const sceneRef = useRef(null);
//   const mountRef = useRef(null);
//   const cameraRef = useRef(null);
//   const renderRef = useRef(null);

//   useEffect(() => {
//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     window.innerHeight >= 1000
//       ? (camera.position.z = 4)
//       : (camera.position.z = 2);
//     if (window.innerHeight >= 1000 && window.innerHeight <= 2000) {
//       camera.position.z = 4.3;
//       console.log(window.innerWidth, "width");
//       console.log(window.innerHeight, "heigt");
//     } else if (window.innerHeight >= 2000) {
//       camera.position.z = 6;
//     } else {
//       camera.position.z = 2.1;
//     }
//     // console.log(window.innerWidth, "width");
//     // console.log(window.innerHeight, "heigt");
//     // camera.position.z = (window.innerWidth / window.innerHeight) * 1.2;
//     cameraRef.current = camera;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(width, height);
//     mountRef.current.appendChild(renderer.domElement);
//     renderRef.current = render;

//     const sphereContainer = new THREE.Group();

//     const numSpheres = 500;
//     const sphereRadius = 0.01;

//     for (let i = 0; i < numSpheres; i++) {
//       const geometry = new THREE.SphereGeometry(sphereRadius, 20, 20);
//       const material = new THREE.MeshBasicMaterial({ color: 0x5f51e3 });

//       const sphere = new THREE.Mesh(geometry, material);
//       const phi = Math.acos(-1 + (2 * i) / numSpheres);
//       const theta = Math.sqrt(numSpheres * Math.PI) * phi;

//       sphere.position.x = Math.cos(theta) * Math.sin(phi);
//       sphere.position.y = Math.sin(theta) * Math.sin(phi);
//       sphere.position.z = Math.cos(phi);
//       sphereContainer.add(sphere);
//     }

//     scene.add(sphereContainer);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       sphereContainer.rotation.x += 0.004;
//       sphereContainer.rotation.y += 0.006;
//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       const width = mountRef.current.clientWidth;
//       const height = mountRef.current.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (
//         renderRef.current &&
//         typeof renderRef.current.dispose === "function"
//       ) {
//         renderRef.current.dispose();
//       }
//       if (mountRef.current && renderRef.current.domElement) {
//         mountRef.current.removeChild(renderRef.current.domElement);
//       }
//       renderRef.current = null;
//     };
//   }, []);

//   return <div ref={mountRef} className="sphere"></div>;
// }

// export default Sphere;

import * as THREE from "three";
import { useEffect, useRef } from "react";

function Sphere() {
  const sceneRef = useRef(null);
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Детализируем расчет позиции камеры в зависимости от конкретных устройств
    const getCameraZPosition = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      if (screenHeight > 900 && screenHeight < 1180) {
        return 2.5;
      }

      if (screenHeight >= 1180 && screenHeight <= 1400) {
        return 3;
      }

      if (screenHeight >= 1400 && screenHeight <= 1600) {
        return 3.4;
      }

      if (screenHeight >= 1600 && screenHeight <= 2050) {
        return 4.3;
      }

      if (screenHeight >= 2050) {
        return 5;
      }

      if (screenHeight > 600 && screenHeight <= 900 && screenWidth > 1000) {
        return 2.1;
      } else {
        return 2.5;
      }
    };

    // Устанавливаем камеру с динамическим Z-положением
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = getCameraZPosition();
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);
    renderer.setPixelRatio(dpr); // Поддержка высокого DPI
    rendererRef.current = renderer;

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
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.position.z = getCameraZPosition(); // Обновляем положение камеры
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        mount.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="sphere"></div>;
}

export default Sphere;
