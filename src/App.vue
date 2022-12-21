<script setup>
import {useDark, useToggle} from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<script>
  import Card from "./components/Card.vue";
  import CardPortfolio from "./components/CardPortfolio.vue";

  export default {
    components:{
      Card,
      CardPortfolio,
    }
  }
</script>

<template>

  <main class=" bg-white px-5 sm:px-10 md:px-20 lg:px-60 xl:px-80 dark:bg-slate-800 ">
  <section class=" min-h-screen ">
      <nav class=" py-10 mb-12 flex justify-between ">
      <h1 class=" text-2xl font-extrabold font-mono text-gray-900 dark:text-gray-50 ">MrPetter</h1>
      <ul class=" flex items-center ">
        <li>
          <v-icon name="bi-moon-stars-fill" class=" text-gray-900 hover:text-gray-800 cursor-pointer dark:text-gray-50 dark:hover:text-gray-200 " scale="1.8" @click="toggleDark()"/>
        </li>
        <li>
          <a href="#" class=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8 ">Resume</a>
        </li>
      </ul>
    </nav>

    <div class=" text-center p-10 ">
      <h2 class=" text-5xl py-2 text-teal-500 font-medium md:text-6xl ">Mr Petter</h2>
      <h3 class=" text-2xl py-2 md:text-3xl dark:text-gray-50 ">Designer.</h3>
      <p class=" text-sm md:text-lg text-gray-800 max-w-xl mx-auto dark:text-gray-300 ">I am a designer specializing in Web. I love using my creativity and technical skills to create visually appealing and effective solutions for my clients. I feel very fortunate to be able to work in what I love every day and I hope to continue growing in my career as a designer.</p>
    </div>

    <div class=" text-5xl flex justify-center gap-16 py-3 ">
    <a href="#">
      <v-icon name="co-behance" class=" text-gray-600 hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-300 " scale="2.5"/>
    </a>
    <a href="#">
      <v-icon name="fa-instagram" class=" text-gray-600 hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-300 " scale="2.5"/>
    </a>
    <a href="#">
      <v-icon name="si-tiktok" class=" text-gray-600 hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-300 " scale="2.5"/>
    </a>
    </div>

    <div class=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
      <img src="./assets/img/persona.png" alt="me">
    </div>

    <section class=" pt-10 ">
      <div>
        <h2 class=" text-3xl capitalize py-1 dark:text-gray-50 ">
          service i offer
        </h2>
        <p class=" text-sm md:text-lg py-2 text-gray-800 dark:text-gray-300 ">In our web design services section, we offer personalized and professional solutions to help our clients create or enhance their online presence. From designing and developing visually appealing and user-friendly websites to search engine optimization and email and landing page design, our team of web designers is dedicated to helping our clients achieve their online goals.</p>
        
      </div>
      <div class=" xl:flex gap-10">

        <Card :name="'ri-code-box-fill'" title="Programing" description="Web development, app creation, data integration, and database management." subtitle="Programing Tools" tool1="Vue" tool2="Flutter" tool3="Databases" class="xl:w-1/3"/>
        <Card :name="'md-designservices'" title="Beautiful Designs" description="Designing visually appealing and user-friendly websites" subtitle="Design Tools" tool1="Photoshop" tool2="Illustraror" tool3="Figma" class="xl:w-1/3"/>
        <Card :name="'md-questionanswer-sharp'" title="Consulting" description="Site needs assessment, site structure planning, user interface design, search engine optimization." subtitle="Themes" tool1="Site Planning" tool2="Hosting" tool3="Design" class="xl:w-1/3"/>
        
      </div>
    </section>

    <section>
      <div>
        <h2 class=" text-3xl py-1 dark:text-gray-50 ">
          Portfolio
        </h2>
        <p class=" text-base py-2 leading-8 text-gray-800 dark:text-gray-300 ">
          Welcome to my web design portfolio. Here you will find a selection of my most recent and standout projects in the field of web design. From corporate websites to mobile apps and landing pages, I have worked on a wide variety of projects and am proud to showcase my work. I hope you enjoy exploring my portfolio and if you have any questions or are interested in working with me, please don't hesitate to get in touch. Thank you for visiting!
        </p>
      </div>

      <div class=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
        <div class=" basis-1/3 flex-1 ">
          <img src="./assets/img/web1.jpeg" alt="portfolio imaga" class=" rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300 " layout="responsive"/>
        </div>
        <div class=" basis-1/3 flex-1 ">
          <img src="./assets/img/web2.jpeg" alt="portfolio imaga" class=" rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300 " layout="responsive"/>
        </div>
        <div class=" basis-1/3 flex-1 ">
          <img src="./assets/img/web3.jpeg" alt="portfolio imaga" class=" rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300 " layout="responsive"/>
        </div>
        <div class=" basis-1/3 flex-1 ">
          <img src="./assets/img/web4.jpeg" alt="portfolio imaga" class=" rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300 " layout="responsive"/>
        </div>
        <div class=" basis-1/3 flex-1 ">
          <img src="./assets/img/web5.jpeg" alt="portfolio imaga" class=" rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300 " layout="responsive"/>
        </div>
        <div class=" basis-1/3 flex-1 ">
          <img src="./assets/img/web6.jpeg" alt="portfolio imaga" class=" rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300 " layout="responsive"/>
        </div>
      </div>
      <div class='pb-10'>
            <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center mx-auto py-2 px-4 text-white font-Poppins rounded-lg bg-gradient-to-r from-blue-500 to-teal-500">
                View More
            </button>
          </div>
    </section>

  </section>
 
  </main>
  <footer class="bg-white dark:bg-slate-800 py-4">
    <div class="flex items-center justify-evenly">
        <p class="text-center text-gray-800 dark:text-gray-50  my-2 mr-4"> <a href="https://www.devcave.icu" target="_blank" rel="noreferrer">DevCave</a> - All rights Reserved 2022</p>
        <div>
          <p class="text-center text-gray-800 dark:text-gray-50  my-2 mr-4">
          Image by <a href="https://www.freepik.com/free-psd/various-web-printable-templates-with-screen_6990247.htm#query=web%20page&position=0&from_view=search&track=sph">Freepik</a>
          </p>
        </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
