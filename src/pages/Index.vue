<template>
  <Layout>
    <Landing />
    <News />
    <Service />
    <Review />
  </Layout>
</template>

<page-query>
query Documentation {
  announcements: allDocumentation(sortBy: "date", limit: 1) {
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
import Landing from '../components/modules/Landing'
import News from '../components/modules/News'
import Service from '../components/modules/Service'
import Review from '../components/modules/Review'
export default {
	metaInfo: {
		title: 'Home',
	},
	components: {
		Landing,
		News,
		Service,
		Review,
	},
}
</script>

<style>
@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	40% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
}

.fade-in {
	animation: fadeIn 1.5s;
}
</style>


