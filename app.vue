<template>
  <div class="tc-modal">
    <button>
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
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';
</script>
