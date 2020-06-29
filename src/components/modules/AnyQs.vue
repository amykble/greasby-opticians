<template>
  <section class="w-full bg-greasby py-10">
    <div class="max-w-screen-lg mx-auto text-white">
      <div class="mx-6 flex items-center justify-center">
        <g-link class="outline-none" to="/contact">
          <button
            type="button"
            class="appointment fade-in px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
          >Any Questions? Contact Us</button>
        </g-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'AnyQs',
}
</script>

<style scoped>
button:hover {
	transform: translateY(-3px);
}

.appointment:focus {
	@apply outline-none bg-opacity-30 shadow-lg;
}
</style>