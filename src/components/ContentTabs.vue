<script setup>
import IconUser from '../assets/icons/IconUser.vue';
import IconProjects from '../assets/icons/IconProjects.vue';
import IconContact from '../assets/icons/IconContact.vue';

import AboutSection from './AboutSection.vue';
import ProjectSection from './ProjectSection.vue';
import ContactSection from './ContactSection.vue';

import { onMounted } from 'vue';
import { initTabs } from 'flowbite';

onMounted(() => { initTabs(); });
</script>

<template>
  <div class="my-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab"
      data-tabs-toggle="#default-styled-tab-content"
      data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
      data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
      role="tablist">
      <li class="me-2" role="presentation">
        <button class="flex flex-wrap p-3 border-b-2 rounded-t-lg" id="profile-styled-tab"
          data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
          <IconUser />
          <span class="mx-2">About</span>
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="flex flex-wrap p-3 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab"
          aria-controls="dashboard" aria-selected="false">
          <IconProjects />
          <span class="mx-2">Projects</span>
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="flex flex-wrap p-3 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings"
          aria-selected="false">
          <IconContact />
          <span class="mx-2">Contact me!</span>
        </button>
      </li>
    </ul>
  </div>
  <div id="default-styled-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel"
      aria-labelledby="profile-tab">
      <AboutSection />
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel"
      aria-labelledby="dashboard-tab">
      <ProjectSection />
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel"
      aria-labelledby="settings-tab">
      <ContactSection />
    </div>
  </div>
</template>