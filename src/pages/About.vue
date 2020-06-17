<template>
  <Layout class="font-body">
    <section class="pt-10 w-full flex flex-col items-center bg-greasby">
      <h1 class="text-4xl text-white">About Us</h1>
      <hr class="w-24" />
    </section>
    <section class="py-10 bg-greasby">
      <div class="max-w-screen-lg mx-auto text-white">
        <main class="mx-6">
          <h2 class="text-center text-2xl">Find Us</h2>
          <p
            class="mt-2"
          >Greasby Opticians is located in the heart of Greasby along the main street. Next door is a Boots Pharmacy and opposite is the Greasby Health Centre - an ideal location which has been home to an Opticians for over 30 years.</p>
          <iframe
            class="mt-4 rounded-md w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.1143385765427!2d-3.1184884579396024!3d53.37642880833559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b286eaa8792cd%3A0x101eb75b88335e9d!2sGreasby%20Opticians!5e0!3m2!1sen!2suk!4v1592434165046!5m2!1sen!2suk"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="mt-3">
            <p>Greasby Opticians</p>
            <p>150 Greasby Road</p>
            <p>Greasby</p>
            <p>Wirral CH49 3NQ</p>
          </div>
        </main>
      </div>
    </section>
    <section class="py-10 main-container">
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
import News from '../components/common/News'

export default {
	metaInfo: {
		title: 'About',
	},
	components: {
		News,
	},
}
</script>

<style scoped>
.main-container {
	background-image: url('../assets/images/triangles-bg.svg');
	background-position: center;
}
</style>
