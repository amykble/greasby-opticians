<template>
  <header class="font-body">
    <section
      :class="isOpen ? 'appear' : 'disappear'"
      class="nav-container fixed z-30 h-full w-64 bg-white shadow-md transition duration-300 delay-100 ease-in-out"
    >
      <nav
        :class="isOpen ? 'opacity' : 'none'"
        class="transition duration-300 delay-400 ease-in-out"
      >
        <a href="#" class="focus:outline-none">
          <g-image
            src="../../assets/images/GO-logo.jpg"
            alt="Greasby Opticians"
            class="w-56 ml-3 mt-4"
          />
        </a>
        <hr class="w-56 ml-4 mt-12" />
        <g-link
          to="/"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >Home</g-link>
        <g-link
          to="/about"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >About Us</g-link>
        <g-link
          to="/services"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >Our Services</g-link>
        <g-link
          to="/technology"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >
          Technology
          <span class="text-white text-sm bg-red-600 ml-1 p-1 rounded">new!</span>
        </g-link>
        <hr class="w-56 ml-4" />
        <hr class="w-56 ml-4 mt-12" />
        <g-link
          to="/nhs"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >NHS</g-link>
        <g-link
          to="/kids"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >Kids</g-link>
        <g-link
          to="/frames"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >Frames</g-link>
        <g-link
          to="/contact-lenses"
          class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
        >Contact Lenses</g-link>
        <hr class="w-56 ml-4" />
        <g-link
          to="/visual-stress-clinic"
          class="block my-2 mx-4 font-bold text-greasby hover:text-blue-300 focus:text-blue-300 transition duration-200 ease-in-out"
        >Visual Stress Clinic</g-link>
        <hr class="w-56 ml-4" />
        <div class="absolute bottom-0">
          <hr class="w-56 ml-4" />
          <g-link
            to="/faq"
            class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
          >FAQ</g-link>
          <g-link
            to="/contact"
            class="block my-2 mx-4 hover:text-gray-500 focus:text-gray-500 transition duration-200 ease-in-out"
          >Contact Us</g-link>
          <hr class="w-56 ml-4 mb-4" />
        </div>
      </nav>
    </section>
    <section class="fixed z-30">
      <button
        @click="isOpen = !isOpen"
        :class="isOpen ? 'ml-68' : 'ml-4'"
        type="button"
        id="hamburger"
        class="hamburger mt-4 mr-2 mb-2 p-2 w-14 border-transparent bg-transparent transition-all duration-300 delay-100 ease-in-out"
      >
        <span class="slice slice-1 w-8 h-1 bg-blue-300 block"></span>
        <span class="slice slice-2 w-8 h-1 mt-1 bg-blue-300 block"></span>
        <span class="slice slice-3 w-8 h-1 mt-1 bg-blue-300 block"></span>
      </button>
    </section>
    <section
      @click="isOpen = !isOpen"
      :class="isOpen ? 'show' : 'hide'"
      class="fixed z-20 w-full h-screen bg-black transition-all duration-200 delay-100 ease-in-out"
    ></section>
  </header>
</template>


<script>
export default {
	name: 'Navigation',
	data() {
		return {
			isOpen: false,
		}
	},
}
</script>


<style scoped>
a:focus {
	outline: none;
}

button:focus {
	outline: none;
}

button:focus .slice,
button:hover .slice {
	@apply bg-blue-500 transition duration-200 ease-in-out;
}

.appear {
	transform: translateX(0);
	transform-origin: left;
}

.disappear {
	transform: translateX(-16rem);
	transform-origin: left;
}

.opacity {
	opacity: 1;
}

.none {
	opacity: 0;
}

.show {
	opacity: 0.9;
	visibility: visible;
}

.hide {
	opacity: 0;
	visibility: hidden;
}
</style>