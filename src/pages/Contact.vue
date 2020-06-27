<template>
  <Layout class="font-body">
    <section class="bg-gray-900">
      <div class="pt-10 w-full flex flex-col items-center">
        <h1 class="text-4xl text-white">Contact Us</h1>
        <hr class="w-24" />
      </div>
    </section>
    <section class="bg-gray-900 text-white">
      <div class="max-w-screen-lg mx-auto pt-10">
        <h2
          class="mx-6 text-center"
        >If you would like to book an appointment, or if you have any questions, here are our contact details.</h2>
      </div>
    </section>
    <section class="py-10 bg-gray-900 text-white flex items-center justify-center">
      <div class="flex flex-col mx-6">
        <a
          class="my-1 flex items-center hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
          href="tel:0151 605 0822"
        >
          <img
            class="inline h-4 sm:h-6 mr-2"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png"
          />
          <p class="text-lg sm:text-2xl">0151 605 0822</p>
        </a>
        <a
          class="my-1 flex items-center hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
          href="mailto:info@greasbyopticians.co.uk"
        >
          <img
            class="inline h-4 sm:h-6 mr-2"
            src="https://img.icons8.com/ios-filled/50/ffffff/email.png"
          />
          <p class="text-lg sm:text-2xl">info@greasbyopticians.co.uk</p>
        </a>
        <a
          class="my-1 flex items-center hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
          href="https://www.facebook.com/GreasbyOpticians"
          target="_blank"
          rel="noopener"
        >
          <img
            class="inline h-4 sm:h-6 mr-2"
            src="https://img.icons8.com/material-outlined/50/ffffff/facebook-new.png"
          />
          <p class="text-lg sm:text-2xl">Our Facebook Page</p>
        </a>
      </div>
    </section>
    <Find />
    <OpenTimes />
  </Layout>
</template>

<script>
import Find from '../components/modules/Find'
import OpenTimes from '../components/modules/OpenTimes'

export default {
	components: {
		Find,
		OpenTimes,
	},
}
</script>

<style scoped>
</style>