<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>
<template>
  <TresCanvas>
    <TresPerspectiveCamera :position="[0, 0, 5]" />
    <TresPointLight :position="[10, 10, 10]" />
    <TresMesh>
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshBasicMaterial :color="0x00ff00" />
    </TresMesh>
  </TresCanvas>
</template>
