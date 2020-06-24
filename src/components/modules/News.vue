<template>
  <section class="news-section bg-teal-500">
    <article
      v-for="edge in $page.announcements.edges"
      :key="edge.node.id"
      class="max-w-screen-lg mx-auto pt-6 pb-8 flex flex-col items-center font-body text-white"
    >
      <div class="mx-4 text-center">
        <h2 class="text-3xl">{{ edge.node.title }}</h2>
        <h3 class="text-sm opacity-70">Posted: {{ edge.node.date }}</h3>
      </div>
      <p class="mt-6 mx-6 text-lg">{{ edge.node.description }}</p>
      <div class="w-full flex flex-col sm:flex-row justify-between">
        <g-link :to="edge.node.path" class="focus:outline-none">
          <button
            type="button"
            class="announcements fade-in mt-6 ml-6 px-3 py-1 rounded-md text-gray-800 font-bold font-body bg-white bg-opacity-70 shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-200 ease-in-out"
          >Read More</button>
        </g-link>
        <g-link to="/announcements" class="focus:outline-none">
          <button
            type="button"
            class="announcements fade-in mt-6 ml-6 sm:ml-0 mr-6 px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow-md hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
          >View Previous Anouncements</button>
        </g-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
	name: 'News',
}
</script>

<style scoped>
button:hover {
	transform: translateY(-3px);
}

.announcements:focus {
	@apply outline-none bg-opacity-30 shadow-lg;
}
</style>