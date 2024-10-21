<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const formRef = ref(null);

const sendEmail = async () => {
  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAIL_USER_ID;

  const toastOptions = {
    autoClose: 2000,
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  };

  const response = await emailjs.sendForm(serviceID, templateID, formRef.value, userID);

  const { status } = response;

  if (status === 200) {
    toast.success('Email sent!', toastOptions);
  } else {
    toast.error('Something went wrong!', toastOptions);
  }

  formRef.value.reset();
};
</script>

<template>
  <form ref="formRef" @submit.prevent="sendEmail">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="first_name" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" id="first_name" name="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John" required />
      </div>
      <div>
        <label for="last_name" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last name</label>
        <input type="text" id="last_name" name="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe" required />
      </div>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email address</label>
      <input type="email" id="email" name="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@company.com" required />
    </div>
    <div class="mb-6">
      <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea id="message" name="message" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your message here..."></textarea>
    </div>
    <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</template>