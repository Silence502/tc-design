<script setup lang="ts">
import {PaintBucket, X} from "lucide-vue-next";

defineProps({
  title: String
})
</script>

<template>
  <div class="tc-modal">
    <div class="tc-modal_header">
      <button class="tc-cross">
        <X/>
      </button>
      <h3>{{title ? title : 'Title'}}</h3>
    </div>
    <div class="tc-modal_content">
      <input class="tc-input-primary" placeholder="Name*" type="text">
      <button class="tc-paint-bucket">
        <PaintBucket/>
      </button>
      <input type="submit" class="tc-button-primary" value="Create">
    </div>
  </div>
</template>

<style scoped>

</style>