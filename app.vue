<template>
  <div class="tc-modal">
    <button class="tc-cross">
      <X />
    </button>
    <h3>New card</h3>
    <div class="tc-modal-content">
      <input class="tc-input-primary" placeholder="Front side*" type="text">
      <input class="tc-input-primary" placeholder="Back side*" type="text">
      <textarea class="tc-textarea-primary" placeholder="Note"></textarea>
      <input type="submit" class="tc-button-primary" value="Add">
    </div>
  </div>
  <br>
  <div class="tc-modal">
    <button class="tc-cross">
      <X />
    </button>
    <h3>New category</h3>
    <div class="tc-modal-content">
      <input class="tc-input-primary" placeholder="Name*" type="text">
      <button class="tc-paint-bucket">
        <PaintBucket />
      </button>
      <input type="submit" class="tc-button-primary" value="Create">
    </div>
  </div>
</template>

<script setup lang="ts">
import { X, PaintBucket  } from 'lucide-vue-next';
</script>
