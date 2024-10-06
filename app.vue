<template>
  <div class="tc-modal">
    <button>
      <X />
    </button>
    <h3>New card</h3>
    <input class="tc-input-primary" placeholder="Front side*" type="text">
    <input class="tc-input-primary" placeholder="Back side*" type="text">
    <textarea class="tc-textarea-primary" placeholder="Note"></textarea>
    <input type="submit" class="tc-button-primary" value="Add">
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';
</script>
