<script setup>
import ProfilePicture from './profile/ProfilePicture.vue';
import JobInfo from './profile/JobInfo.vue';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <ProfilePicture />

    <article class="col-span-2 mt-2 md:mt-0">
      <h1 class="text-4xl dark:text-white font-bold">Diego Pezet</h1>
      <span class="text-gray-500 dark:text-gray-400">Quality Engineer</span>
      <p class="dark:text-white italic">
        I believe in the power of technology to shape the future, inspire learning, and drive 
        meaningful change. Every project I contribute to is a chance to elevate standards 
        and empower others.
      </p>
      <JobInfo />
    </article>
  </div>
  

</template>