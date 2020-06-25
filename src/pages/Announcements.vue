<template>
  <Layout>
    <section class="bg-greasby">
      <div class="max-w-screen-lg mx-auto py-10">
        <h1 class="font-body text-white text-3xl text-center">Announcements</h1>
        <h2
          class="font-body text-white text-xl text-center mt-1"
        >You can find all of our previous announcements here</h2>
        <hr class="mt-4 mx-6" />
      </div>
      <div
        class="max-w-screen-lg mx-auto pb-10 font-body"
        v-for="edge in $page.announcements.edges"
        :key="edge.node.id"
      >
        <h1 class="mx-6 text-2xl text-white">{{ edge.node.title }}</h1>
        <h2 class="mx-6 pb-3 text-sm opacity-70">{{ edge.node.date }}</h2>
        <p class="mx-6 text-white">{{ edge.node.description }}</p>
        <div class="flex items-center justify-center mb-10">
          <g-link :to="edge.node.path" class="focus:outline-none">
            <button
              type="button"
              class="announcements fade-in mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow-md hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
            >Read More</button>
          </g-link>
        </div>
        <hr class="mx-6" />
      </div>
    </section>
    <Review />
  </Layout>
</template>


<page-query>
query Documentation {
  announcements: allDocumentation(sortBy: "date") {
    edges {
      node {
        title
        date
        description
        path
      }
    }
  }
}
</page-query>


<script>
import Review from '../components/modules/Review'

export default {
	name: 'Announcements',
	components: {
		Review,
	},
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