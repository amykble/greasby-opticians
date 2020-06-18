<template>
  <footer class="w-full bg-gray-900">
    <section class="block sm:flex max-w-screen-lg mx-auto">
      <nav class="pt-6 pb-0 sm:pb-8 pr-6 pl-6 lg:pr-12 text-white font-body">
        <h1 class="text-xl text-greasby-light">Navigate</h1>
        <hr class="my-2 opacity-50" />
        <div class="flex">
          <section class="flex flex-col">
            <g-link
              to="/"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >Home</g-link>
            <g-link
              to="/about"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >About Us</g-link>
            <g-link
              to="/services"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >Our Services</g-link>
            <g-link
              to="/technology"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >New Technology</g-link>
          </section>
          <section class="flex flex-col ml-6">
            <g-link
              to="/nhs"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >NHS</g-link>
            <g-link
              to="/kids"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >Kids</g-link>
            <g-link
              to="/frames"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >Frames</g-link>
            <g-link
              to="/contact-lenses"
              class="my-1 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >Contact Lenses</g-link>
          </section>
        </div>
      </nav>
      <nav class="pt-6 pb-0 sm:pb-8 px-6 sm:px-4 lg:px-0 text-white font-body">
        <h1 class="text-xl text-greasby-light">Contact Us</h1>
        <hr class="my-2 opacity-50" />
        <div class="flex flex-col">
          <a
            class="my-1 flex items-center hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            href="#"
            target="_blank"
            rel="noopener"
          >
            <img
              class="inline h-4 mr-2"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png"
            />
            <p>0151 605 0822</p>
          </a>
          <a
            class="my-1 flex items-center hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            href="#"
            target="_blank"
            rel="noopener"
          >
            <img
              class="inline h-4 mr-2"
              src="https://img.icons8.com/ios-filled/50/ffffff/email.png"
            />
            <p>info@greasbyopticians.co.uk</p>
          </a>
          <a
            class="my-1 flex items-center hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            href="https://www.facebook.com/GreasbyOpticians"
            target="_blank"
            rel="noopener"
          >
            <img
              class="inline h-4 mr-2"
              src="https://img.icons8.com/material-outlined/50/ffffff/facebook-new.png"
            />
            <p>Our Facebook Page</p>
          </a>
        </div>
      </nav>
    </section>
    <section class="max-w-screen-lg mx-auto block sm:flex pl-6 pt-8 pb-6 text-gray-400 font-body">
      <h1 class="text-greasby-light">Copyright &copy; {{ date }} Greasby Opticians</h1>
      <div class="ml-0 mt-1 sm:ml-2 sm:mt-0 flex items-center">
        <p>Created with</p>
        <a class="focus:outline-none" href="https://gridsome.org" target="_blank" rel="noopener">
          <img class="h-3 ml-2" src="../../assets/images/amykble/gridsome.svg" alt="gridsome" />
        </a>
        <a class="focus:outline-none" href="https://vuejs.org" target="_blank" rel="noopener">
          <img class="h-3 ml-2" src="../../assets/images/amykble/vue.svg.png" alt="vue" />
        </a>
        <a class="focus:outline-none" href="https://tailwindcss.com" target="_blank" rel="noopener">
          <img class="h-3 ml-2" src="../../assets/images/amykble/tailwind.png" alt="tailwind" />
        </a>
        <p class="ml-2">
          by
          <a
            class="text-pink-400 hover:text-green-300 focus:outline-none focus:text-green-300 transition duration-300 ease-in-out"
            href="https://github.com/amykble"
            target="_blank"
            rel="noopener"
          >Amy Keable</a>
        </p>
      </div>
    </section>
  </footer>
</template>


<script>
export default {
	name: 'Footer',
	data() {
		return {
			date: new Date().getFullYear(),
		}
	},
}
</script>


<style scoped>
</style>