<template>
  <Layout>
    <Landing />
    <section class="news-section bg-teal-500">
      <article
        v-for="edge in $page.updates.edges"
        :key="edge.node.id"
        class="max-w-screen-lg mx-auto pt-6 pb-8 flex flex-col items-center font-body text-white"
      >
        <div class="mx-4 text-center">
          <h2 class="text-3xl">{{ edge.node.title }}</h2>
          <h3 class="text-sm opacity-70">Posted: {{ edge.node.date }}</h3>
        </div>
        <p class="mt-6 mx-6 lg:mx-0 text-lg">{{ edge.node.content }}</p>
        <g-link to="/announcements" class="focus:outline-none">
          <button
            type="button"
            class="announcements mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow-md hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
          >AView Previous nnouncements</button>
        </g-link>
      </article>
    </section>
    <Service />
    <Review />
  </Layout>
</template>


<page-query>
query Documentation {
  updates: allDocumentation(sortBy: "date", limit: 1) {
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
import Landing from '../components/common/Landing'
import Service from '../components/common/Service'
import Review from '../components/common/Review'
export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		Landing,
		Service,
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
