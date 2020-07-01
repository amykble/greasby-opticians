<template>
  <Layout class="font-body">
    <VisualStress />
    <Landing />
    <Facts />
    <News />
    <Service />
    <Review />
    <section class="bg-gray-900">
      <div class="max-w-screen-lg mx-auto">
        <p
          class="mx-6 text-white opacity-50 pt-2"
        >*Research was undertaken by Censuswide on behalf of the College of Optometrists. 2,024 people were surveyed.</p>
      </div>
    </section>
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
import VisualStress from '../components/modules/VisualStress'
import Landing from '../components/modules/Landing'
import Facts from '../components/modules/Facts'
import News from '../components/modules/News'
import Service from '../components/modules/Service'
import Review from '../components/modules/Review'
export default {
	metaInfo: {
		title: 'Home',
	},
	name: 'Home',
	components: {
		VisualStress,
		Landing,
		Facts,
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


