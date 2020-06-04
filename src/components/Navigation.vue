<template>
<header class="font-body">
  <section :class="isOpen ? 'appear' : 'disappear'" class="nav-container fixed h-full w-64 bg-white shadow-md transition duration-300 ease-in-out">
    <nav :class="isOpen ? 'opacity' : 'none'" class="transition duration-300 delay-300 ease-in-out">
      <a href="#" class="focus:outline-none">
        <img src="../assets/images/GO-logo.jpg" alt="Greasby Opticians" class="w-56 ml-3 mt-4 ">
      </a>
      <hr class="w-56 ml-4 mt-12">
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">Home</a>
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">About Us</a>
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">Our Services</a>
      <hr class="w-56 ml-4">
      <hr class="w-56 ml-4 mt-12">
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">NHS</a>
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">Kids</a>
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">Frames</a>
        <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">Contact Lenses</a>
      <hr class="w-56 ml-4">
      <div class="absolute bottom-0">
        <hr class="w-56 ml-4">
          <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">FAQ</a>
          <a href="#" class="block my-2 mx-4 hover:text-gray-500 transition duration-200 ease-in-out">Contact Us</a>
        <hr class="w-56 ml-4 mb-4">
      </div>
    </nav>
  </section>
  <div class="fixed right-0 md:left-0 md:ml-64">
    <button @click="isOpen = !isOpen" type="button" class="hamburger bg-transparent m-2 p-2 border-transparent">
      <span class="slice slice-1 w-8 h-1 block bg-black transition-all duration-200 ease-in-out"></span>
      <span class="slice slice-2 w-10 h-1 mt-1 block bg-black transition-all duration-200 ease-in-out"></span>
      <span class="slice slice-3 w-6 h-1 mt-1 block bg-black transition-all duration-200 ease-in-out"></span>
    </button>
  </div>
</header>
</template>


<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isOpen: true,
    }
  }
}
</script>


<style scoped>
a:focus {
  outline: none;
  border-radius: 0.5rem;
  outline: 1px solid lightblue;
}

button:focus {
  outline: none;
}

button:hover .slice, button:focus .slice {
  background-color: #4B698D;
}

button:hover .slice-1, button:focus .slice-1 {
  width: 2.5rem;
}

button:hover .slice-2, button:focus .slice-2 {
  width: 1.5rem;
}

button:hover .slice-3, button:focus .slice-3 {
  width: 2rem;
}

.appear {
  transform: translateX(0);
  transform-origin: left;
}

.disappear {
  opacity: 0;
  transform: translateX(-16rem);
  transform-origin: left;
}

.opacity {
  opacity: 1;
}

.none {
  opacity: 0;
}
</style>