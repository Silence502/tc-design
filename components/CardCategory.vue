<script setup lang="ts">
import {X} from "lucide-vue-next";
</script>

<template>
  <div class="tc-card-category">
    <div class="tc-card-category_header">
      <button class="tc-cross">
        <X/>
      </button>
    </div>
    <div class="tc-card-category_content">
      <h6>
        <slot></slot>
      </h6>
    </div>
  </div>
</template>

<style scoped>

</style>