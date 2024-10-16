<script setup>
import MainNavbar from './components/MainNavbar.vue';
import ProfileSection from './components/ProfileSection.vue';
import ContentTabs from './components/ContentTabs.vue';
</script>

<template>
  <header>
    <MainNavbar />
  </header>

  <main>
    <div id="wrapper" class="max-w-screen-sm mx-auto">
      <section id="profile">
        <ProfileSection />
      </section>

      <section>
        <ContentTabs />
      </section>
    </div>
  </main>
</template>

<style></style>
