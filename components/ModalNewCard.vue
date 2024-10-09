<script setup lang="ts">
import {X} from "lucide-vue-next";

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
      <input class="tc-input-primary" placeholder="Front side*" type="text">
      <input class="tc-input-primary" placeholder="Back side*" type="text">
      <textarea class="tc-textarea-primary" placeholder="Note"></textarea>
      <input type="submit" class="tc-button-primary" value="Add">
    </div>
  </div>
</template>

<style scoped>

</style>