<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, TorusKnot, Levioso } from '@tresjs/cientos'
import { ref } from 'vue'
import Button from './Button.vue'

const currentShape = ref("cube")
const setShape = (shape) => {
    currentShape.value = shape
}
</script>
<template>
<div class="flex h-full">
    <div class="flex flex-col gap-2">
        <Button @click="setShape('cube')">Kostka</Button>
        <Button @click="setShape('donut')">Donut</Button>
        <Button @click="setShape('sphere')">Sfera</Button>
        <Button @click="setShape('knot')">Pętla</Button>
    </div>
    <TresCanvas alpha preset="realistic">
        <TresPerspectiveCamera  />
        <OrbitControls />

        <Levioso :range="[-0.5, 0.5]">
            <TresMesh v-if="currentShape === 'cube'">
                <TresBoxGeometry />
                <MeshStandardMaterial :roughness="0.5" :metalness="0.5" color="green" />
            </TresMesh>
            <TresMesh v-if="currentShape === 'donut'">
                <TresTorusGeometry :args="[0.5, 0.25, 16, 32]" />
                <MeshStandardMaterial :roughness="0.5" :metalness="0.5" color="red" />
            </TresMesh>
            <TresMesh v-if="currentShape === 'sphere'">
                <TresSphereGeometry />
                <MeshStandardMaterial :roughness="0.5" :metalness="0.5" color="blue" />
            </TresMesh>
            <TorusKnot v-if="currentShape === 'knot'" :args="[0.6, 0.2, 64, 8]">
                <MeshStandardMaterial :roughness="0.5" :metalness="0.5" color="yellow" />
            </TorusKnot>
        </Levioso>

        <TresAmbientLight />
        <TresDirectionalLight
        :position="[0, 10, 40]"
        />
    </TresCanvas>
</div>
</template>
