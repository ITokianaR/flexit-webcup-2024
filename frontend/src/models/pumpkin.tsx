/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Roman Shapovalov (https://sketchfab.com/rzzs32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/halloween-diarama-b9c1ced10da949e7a72da571f23bb827
Title: Halloween Diarama
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame, useThree } from '@react-three/fiber'


type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_11: THREE.SkinnedMesh
    Object_33: THREE.SkinnedMesh
    Object_48: THREE.SkinnedMesh
    Object_53: THREE.Mesh
    Object_55: THREE.Mesh
    Object_60: THREE.SkinnedMesh
    Object_79: THREE.Mesh
    Object_84: THREE.SkinnedMesh
    Object_85: THREE.SkinnedMesh
    Object_98: THREE.Mesh
    Object_99: THREE.Mesh
    Object_101: THREE.Mesh
    Object_102: THREE.Mesh
    Object_104: THREE.Mesh
    Object_105: THREE.Mesh
    Object_107: THREE.Mesh
    Object_109: THREE.Mesh
    GLTF_created_0_rootJoint: THREE.Bone
    GLTF_created_1_rootJoint: THREE.Bone
    GLTF_created_2_rootJoint: THREE.Bone
    GLTF_created_3_rootJoint: THREE.Bone
    GLTF_created_4_rootJoint: THREE.Bone
  }
  materials: {
    Outline: THREE.MeshBasicMaterial
    Particles: THREE.MeshBasicMaterial
    material: THREE.MeshBasicMaterial
    World: THREE.MeshBasicMaterial
  }
}

type ActionName = 'Animation'
type GLTFActions = Record<ActionName, THREE.AnimationAction>
type PumpkinProps={
    isRotating:boolean;
    setIsRotating:React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentStage:React.Dispatch<React.SetStateAction<number>>;
    animated:boolean;
    setAnimated:React.Dispatch<React.SetStateAction<boolean>>;

}
const Pumpkin=({
    isRotating,
  setIsRotating,
  setCurrentStage,
  animated,
  setAnimated,
...props
}:PumpkinProps & JSX.IntrinsicElements['group'])=> {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/assets/3d/halloween_diarama.glb') as GLTFResult
  const pumpkinRef=useRef<THREE.Group>(null)
  const { gl, viewport } = useThree();
  const { actions } = useAnimations(animations,pumpkinRef)
    useEffect(()=>{
        const animation= actions["Animation"]
        if(animation){
            animation.play()
        }
    },[])


  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const handlePointerDown = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (event:any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

 
  const handlePointerMove = (event:any) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
 
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

     if(pumpkinRef.current){
        pumpkinRef.current.rotation.y += delta * 0.01 * Math.PI;
     }
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event:any) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      if(pumpkinRef.current){
        pumpkinRef.current.rotation.y += 0.005 * Math.PI;
      }
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      if(pumpkinRef.current){
        pumpkinRef.current.rotation.y -= 0.005 * Math.PI;
      }
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event:any) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  
  const handleTouchEnd = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      if(pumpkinRef.current){
        pumpkinRef.current.rotation.y += delta * 0.01 * Math.PI;
      }
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);


    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      if(pumpkinRef.current){
        pumpkinRef.current.rotation.y += rotationSpeed.current;
      }
    } else {
 
      if(pumpkinRef.current){
        const rotation = pumpkinRef.current.rotation.y;
        const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        switch (true) {
            case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
              setCurrentStage(4);
              break;
            case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
              setCurrentStage(3);
              break;
            case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
              setCurrentStage(2);
              break;
            case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
              setCurrentStage(1);
              break;
            default:
              setCurrentStage(0);
          }
      }

      

     
    }
  });
  return (
    <group ref={pumpkinRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.285}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Ground001_0" position={[0, -0.441, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Outline}
                />
              </group>
              <group
                name="Cross001_1"
                position={[1.051, -0.257, 1.678]}
                rotation={[0.174, -0.337, -0.24]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Hand001_20" position={[-0.005, -0.257, 1.295]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Outline}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="HandMesh001_19" />
                </group>
              </group>
              <group
                name="Pumpkin001_32"
                position={[-1.49, -0.094, -1.032]}
                rotation={[-0.23, 0.206, 0.01]}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.Outline}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <group name="PumpkinMesh001_31" />
                </group>
              </group>
              <group name="Lightning_37" position={[0, 0, 0.955]}>
                <group name="GLTF_created_2">
                  <primitive object={nodes.GLTF_created_2_rootJoint} />
                  <skinnedMesh
                    name="Object_48"
                    geometry={nodes.Object_48.geometry}
                    material={materials.Particles}
                    skeleton={nodes.Object_48.skeleton}
                  />
                  <group name="LightningMesh_36" />
                </group>
              </group>
              <group name="Ground_38" position={[0, -0.441, 0]}>
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cross_39"
                position={[1.051, -0.257, 1.678]}
                rotation={[0.174, -0.337, -0.24]}>
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Hand_58" position={[-0.005, -0.257, 1.295]}>
                <group name="GLTF_created_3">
                  <primitive object={nodes.GLTF_created_3_rootJoint} />
                  <skinnedMesh
                    name="Object_60"
                    geometry={nodes.Object_60.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_60.skeleton}
                  />
                  <group name="HandMesh_57" />
                </group>
              </group>
              <group name="Z_World_59" position={[0, 0.72, 0]}>
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.World}
                />
              </group>
              <group
                name="Pumpkin_72"
                position={[-1.49, -0.094, -1.032]}
                rotation={[-0.23, 0.206, 0.01]}>
                <group name="GLTF_created_4">
                  <primitive object={nodes.GLTF_created_4_rootJoint} />
                  <skinnedMesh
                    name="Object_84"
                    geometry={nodes.Object_84.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_84.skeleton}
                  />
                  <skinnedMesh
                    name="Object_85"
                    geometry={nodes.Object_85.geometry}
                    material={materials.Particles}
                    skeleton={nodes.Object_85.skeleton}
                  />
                  <group name="PumpkinMesh_71" />
                </group>
              </group>
              <group name="rock001_73" position={[-0.402, 0.076, 1.158]}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="rock002_74" position={[0.059, 0.076, 1.158]}>
                <mesh
                  name="Object_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.Outline}
                />
              </group>
              <group
                name="rock003_75"
                position={[-0.273, 0.097, 1.558]}
                rotation={[-1.4, -0.307, -1.052]}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105.geometry}
                  material={materials.Outline}
                />
              </group>
              <group name="Z_World001_76" position={[0, 0.72, 0]}>
                <mesh
                  name="Object_107"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Z_World002_77"
                position={[0, -1.293, 0]}
                rotation={[0, -1.316, 0]}
                scale={[1, 1.05, 1]}>
                <mesh
                  name="Object_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials.Particles}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d/halloween_diarama.glb')
export default Pumpkin