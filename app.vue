<template>
  <ModalNewCard title="New Card" />
  <br>
  <ModalNewCategory title="New Category" />
  <br>
  <CardCategory>Vocabulaire EN</CardCategory>
</template>

<script setup lang="ts">
import ModalNewCard from "~/components/ModalNewCard.vue";
import ModalNewCategory from "~/components/ModalNewCategory.vue";
import CardCategory from "~/components/CardCategory.vue";
</script>
