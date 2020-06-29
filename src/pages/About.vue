<template>
  <Layout class="font-body main-container">
    <section class="pt-10 w-full flex flex-col items-center">
      <h1 class="text-4xl text-greasby">About Us</h1>
      <hr class="w-24" />
    </section>
    <section class="py-10">
      <div class="max-w-screen-lg mx-auto">
        <h2 class="mx-10 text-center pb-4 text-2xl">About the Team</h2>
        <h2 class="mx-10 text-center pb-2">Get to Know Greasby Opticians</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md sm:flex sm:items-center">
          <g-image
            src="../assets/images/greasby-fb.jpg"
            alt="Greasby Opticians"
            class="w-24 rounded-max"
          />
          <p class="mt-4 sm:mt-0 sm:ml-4 text-greasby">
            Greasby Opticians, previously LM Daly Opticians is an independent opticians which continues to offer excellent quality eyecare and an extensive range of spectacle frames and contact lenses. Mrs. Lynn Daly served the community of Greasby, testing eyes for 27 years. Dr. Helena Workman took over the reins of the business in April 2016 and is supported by Rachel Webbon. Many of our patients have been attending from their childhood and now bring their own children.
            We pride ourselves in providing a warm and comfortable environment where patients can feel at ease. We are confident that patients will be delighted at the personal service that we provide at Greasby Opticians.
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Helena Workman, Ophthalmologist at Greasby Opticians</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md sm:flex sm:items-center">
          <g-image
            src="../assets/images/helena-square.jpg"
            alt="Greasby Opticians"
            class="w-24 rounded-max"
          />
          <p class="mt-4 sm:mt-0 sm:ml-4 text-greasby">
            "I was brought up on the Wirral and left here to study optometry at Aston university in Birmingham in 1994. I qualified as an optometrist in 1998 and continued to live in Birmingham where I was involved in both high street and hospital optometry. In 2002 I began my PhD in Optometry and I had the opportunity to teach undergraduate students and work alongside local ophthalmologists.
            I returned to the Wirral in 2009 to be closer to my family and now live locally with my husband and 3 children."
          </p>
        </div>
      </div>
    </section>
    <News />
    <AnyQs />
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
import News from '../components/modules/News'
import AnyQs from '../components/modules/AnyQs'

export default {
	metaInfo: {
		title: 'About',
	},
	components: {
		News,
		AnyQs,
	},
}
</script>

<style scoped>
.main-container {
	background-image: url('../assets/images/triangles-bg.svg');
	background-position: center;
}
</style>
