/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Giuseppe (https://sketchfab.com/losko)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/zombie-c3601a06fc3345d29fe0bbd329fe7541
Title: Zombie
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube001_0: THREE.SkinnedMesh
    Plane_0: THREE.Mesh
    Armature_rootJoint: THREE.Bone
  }
  materials: {
    lowpoly_tex: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Take 01'
type GLTFActions = Record<ActionName, THREE.AnimationAction>
type ZombieProps={
    animated:boolean;
    setAnimated:React.Dispatch<React.SetStateAction<boolean>>;
}

const Zombie=({
    animated, setAnimated, ...props
}:ZombieProps &  JSX.IntrinsicElements['group'])=> {
  const group = useRef<THREE.Group>()
  const zombieRef=useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/assets/3d/zombie.glb') as GLTFResult
  const { actions } = useAnimations(animations, zombieRef)
  useEffect(()=>{
    const animation=actions['Take 01']
    if(animation){
        animation.play()
    }
  },[])
  return (
    <group ref={zombieRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.076, -0.039, 0.124]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.383}>
          <group name="Root">
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials.lowpoly_tex}
                skeleton={nodes.Cube001_0.skeleton}
              />
              <group name="Cube001" />
            </group>
            <group
              name="Plane"
              position={[-0.197, -0.207, 0]}
              rotation={[0, 0, 0.254]}
              scale={[1, 0.917, 1]}>
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials.lowpoly_tex}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3d/zombie.glb')
export default Zombie