<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, useAnimations, useGLTF } from '@tresjs/cientos'
import { Suspense } from 'vue'
import Button from './Button.vue'
const { scene, animations } = await useGLTF('models/chicken.glb');

const { actions, mixer } = useAnimations(animations, scene)

let currentAction = actions.Walk

const playAnimation = (action) => {
  currentAction.stop()
  currentAction = action
  currentAction.play()
}

playAnimation(actions.Idle)
</script>
<template>
<div class="flex h-full">
  <div class="flex flex-col gap-2">
    <Button @click="playAnimation(actions.Idle)">Idle</Button>
    <Button @click="playAnimation(actions.Walk)">Walk</Button>
    <Button @click="playAnimation(actions.Eating)">Eat</Button>
    <Button @click="playAnimation(actions.Dying)">Die</Button>
  </div>
  <TresCanvas alpha preset="realistic">
    <TresPerspectiveCamera :position="[30, 30, 30]" :look-at="[0, 0, 0]" />
    <OrbitControls />
  
    <Suspense>
      <primitive :object="scene"  />
    </Suspense>
  
    <TresGridHelper />
    <TresAmbientLight  />
    <TresDirectionalLight
    :position="[0, 100, 100]"
    />
  </TresCanvas>
</div>
</template>
  