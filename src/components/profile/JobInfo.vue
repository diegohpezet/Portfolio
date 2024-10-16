<script setup>
import IconJob from '../../assets/icons/IconJob.vue';
import IconLinkedIn from '../../assets/icons/IconLinkedIn.vue';
import IconGithub from '../../assets/icons/IconGithub.vue';
</script>

<template>
  <ul class="flex flex-wrap justify-center">
    <li class="flex flex-wrap m-3">
      <IconJob class="w-5 h-5 me-2 fill-gray-600 dark:fill-gray-400" />
      <span class="text-gray-600 dark:text-gray-400">Available</span>
    </li>

    <li class="flex flex-wrap m-3">
      <IconLinkedIn class="w-5 h-5 me-2 fill-gray-600 dark:fill-gray-400" />
      <span class="text-gray-600 dark:text-gray-400">
        <a href="https://www.linkedin.com/in/diegohpezet/" class="hover:text-blue-500">LinkedIn</a>
      </span>
    </li>

    <li class="flex flex-wrap m-3">
      <IconGithub class="w-5 h-5 me-2 fill-gray-600 dark:fill-gray-400" />
      <span class="text-gray-600 dark:text-gray-400">
        <a href="https://github.com/diegohpezet" class="hover:text-blue-500">Github</a>
      </span>
    </li>
  </ul>
</template>