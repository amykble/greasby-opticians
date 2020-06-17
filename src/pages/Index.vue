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
import News from '../components/common/News'
import Service from '../components/common/Service'
import Review from '../components/common/Review'
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
	animation: fadeIn 1s;
}
</style>


