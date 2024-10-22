<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from './project/ProjectCard.vue';

const projects = ref([]);

onMounted(async () => {
  const res = await fetch('src/assets/projectList.json');
  projects.value = await res.json();
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="grid gap-4">
      <ProjectCard v-for="project in projects" v-bind:key="project.title" v-bind="project" />
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
      </div>
    </div>
  </div>
</template>