<template>
<header class="font-body">
  <section class="fixed nav-container w-full bg-teal-400 shadow-md md:flex md:justify-between">
    <nav class="mx-auto py-2 px-4 xl:px-0 max-w-screen-xl flex items-center justify-between md:mx-0 md:justify-start">
      <a href="#" class="flex items-center focus:outline-none focus:shadow-outline">
        <img src="https://img.icons8.com/ios-filled/50/B2F5EA/javascript.png" alt="logo" class=" w-10">
        <h1 class="ml-2 text-2xl text-white">Navigation Title</h1>
      </a>
      <div class="flex items-center">
        <button type="button" class="ml-6 cursor-pointer bg-teal-200 border-none px-3 py-1 rounded transition duration-200 ease-in-out hover:bg-teal-300 focus:outline-none focus:shadow-outline">Free Trial</button>
        <button @click="isOpen = !isOpen" type="button" class="hamburger md:hidden bg-transparent ml-4 p-1 border rounded border-transparent transition duration-200 ease-in-out hover:border-white cursor-pointer focus:outline-none focus:shadow-outline">
          <span class="slice w-8 h-1 block bg-white"></span>
          <span class="slice w-8 h-1 mt-1 block bg-white"></span>
          <span class="slice w-8 h-1 mt-1 block bg-white"></span>
        </button>
      </div>
    </nav>
    <div :class="isOpen ? 'block' : 'hidden'" class="mx-2 mt-1 mb-4 md:my-0 md:flex md:items-center">
      <a href="#" class="block py-1 px-2 my-1 text-lg text-white rounded transition duration-200 ease-in-out hover:text-gray-700 hover:bg-teal-300 focus:outline-none focus:shadow-outline md:ml-2">Home</a>
      <a href="#" class="block py-1 px-2 my-1 text-lg text-white rounded transition duration-200 ease-in-out hover:text-gray-700 hover:bg-teal-300 focus:outline-none focus:shadow-outline md:ml-2">About</a>
      <a href="#" class="block py-1 px-2 my-1 text-lg text-white rounded transition duration-200 ease-in-out hover:text-gray-700 hover:bg-teal-300 focus:outline-none focus:shadow-outline md:ml-2 md:mr-1">Contact</a>
    </div>  
  </section>
  <section class="h-14">
    <!-- this section is the same height as the navigation -->
  </section>
</header>
</template>


<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>


<style src='../main.css' scoped>
/* importing the main.css for the tailwind styles isn't necessary but the autocomplete of class names seems to only work with it there */
</style>