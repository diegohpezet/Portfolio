<script setup>
import IconCode from '@/assets/icons/IconCode.vue';
import IconForward from '@/assets/icons/IconForward.vue';

const props = defineProps({
  title: String,
  description: String,
  image: String,
  githubUrl: String,
  liveUrl: String,
  tags: Array
});
</script>

<template>
  <figure class="relative h-fit transition-all duration-500 group">
    <img
      class="h-auto max-w-full rounded-lg group-hover:brightness-75 group-hover:-translate-y-3 transition-transform duration-500 ease-in-out"
      v-bind:srcset="`src/assets/images/projects/${props.image}`" alt="Project image">
    <div
      class="absolute top-0 right-0 flex flex-wrap px-3 gap-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-transform duration-500 ease-in-out ">
      <button class="rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 p-1">
        <IconCode />
      </button>
      <button class="rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 p-1">
        <IconForward />
      </button>
    </div>

    <figcaption
      class="text-sm p-2 bg-slate-100 dark:bg-gray-900 dark:text-white absolute overflow-hidden w-full h-24 rounded-lg bottom-0 left-0 opacity-0 translate-y-7 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
      <h2 class="font-bold text-md">
        <a href="" class="hover:underline">{{ props.title }}</a>
      </h2>
      <p>{{ props.description }}</p>
      <ul class="flex flex-wrap gap-2 mt-1">
        <li class="bg-orange-400 text-white px-3 py-1 rounded-lg font-semibold">HTML</li>
        <li class="bg-blue-400 text-white px-3 py-1 rounded-lg font-semibold">CSS</li>
        <li class="bg-yellow-300 text-white px-3 py-1 rounded-lg font-semibold">JavaScript</li>
      </ul>
    </figcaption>
  </figure>
</template>