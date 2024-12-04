<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from './project/ProjectCard.vue';

const evenProjects = ref([]);
const oddProjects = ref([]);

onMounted(async () => {
  const res = await fetch('/projectList.json');
  const data = await res.json();

  evenProjects.value = data.filter((_, index) => index % 2 === 0);
  oddProjects.value = data.filter((_, index) => index % 2 !== 0);
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="grid gap-4">
      <ProjectCard v-for="project in oddProjects" v-bind:key="project.title" v-bind="project" class="my-1.5" />
    </div>
    <div class="grid gap-4">
      <ProjectCard v-for="project in evenProjects" v-bind:key="project.title" v-bind="project" class="my-1.5" />
    </div>
  </div>
</template>