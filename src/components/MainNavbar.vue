<script setup>
import ThemeSwitcher from './ThemeSwitcher.vue';
</script>

<template>
  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/images/avatar.jpg" class="h-8 rounded-full" alt="My avatar" />
      </a>

      <ThemeSwitcher />
    </div>
  </nav>
</template>