<template>
   <div class=" text-center shadow-xl p-10 rounded-xl my-10 dark:bg-slate-700">
      <v-icon :name="name" scale="4" class=" text-teal-600 mx-auto "/>
      <h3 class=" text-lg font-medium pt-8 pb-2 dark:text-gray-50 ">
         {{ title }}
      </h3>
      <p class=" text-base py-2 leading-8 text-gray-800 dark:text-gray-300 ">
         {{ description }}
      </p>
      <h4 class=" py-4 text-teal-600 ">
         {{ subtitle }}
      </h4>
      <p class=" text-gray-800 py-1 dark:text-gray-300 ">
         {{ tool1 }}
      </p>
      <p class=" text-gray-800 py-1 dark:text-gray-300 ">
         {{ tool2 }}
      </p>
      <p class=" text-gray-800 py-1 dark:text-gray-300 ">
         {{ tool3 }}
      </p>
   </div>
</template>

<script setup>
 defineProps({
   name: {
    type: String,
   },
   title: {
      type: String,
   },
   description: {
      type: String,
   },
   subtitle: {
      type: String,
   },
   tool1: {
      type: String,
   },
   tool2: {
      type: String,
   },
   tool3: {
      type: String,
   },
 });
</script>