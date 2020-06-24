<template>
  <Layout>
    <section class="bg-greasby">
      <div class="max-w-screen-xl mx-auto px-6 py-10 xl:px-0">
        <h1 class="font-body text-white text-3xl text-center">Announcements</h1>
        <h2
          class="font-body text-white text-xl text-center mt-1"
        >You can find all of our previous announcements here</h2>
        <hr class="mt-4 md:mx-8" />
      </div>
      <div
        class="max-w-screen-xl mx-auto pb-10 px-6 xl:px-0 font-body"
        v-for="edge in $page.updates.edges"
        :key="edge.node.id"
      >
        <h1 class="md:mx-8 text-xl text-white">{{ edge.node.title }}</h1>
        <h2 class="md:mx-8 pb-3 text-sm opacity-70">{{ edge.node.date }}</h2>
        <p class="mb-10 md:mx-8 text-white">{{ edge.node.content }}</p>
        <hr class="md:mx-8" />
      </div>
    </section>
    <Review />
  </Layout>
</template>


<page-query>
query Documentation {
  updates: allDocumentation(sortBy: "date") {
    edges {
      node {
        title
        date
        content   
      }
    }
  }
}
</page-query>


<script>
import Review from '../components/modules/Review'

export default {
	name: 'Updates',
	components: {
		Review,
	},
}
</script>


<style scoped>
</style>