<template>
  <Layout>
    <section class="h-half-view w-full">
      <div class="absolute h-half-view w-full bg-black opacity-70"></div>
      <div class="absolute w-full h-half-view flex flex-col items-center justify-center">
        <h1 class="heading font-title text-3xl text-blue-300 hidden md:inline">Welcome to</h1>
        <g-image
          class="w-auto h-16 md:h-32"
          src="../assets/images/GO-logo-white.png"
          alt="white logo"
        />
        <button
          type="button"
          class="appointment mt-10 px-3 py-1 rounded-md text-white font-body bg-greasby shadow hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out"
        >Book An Appointment Now</button>
      </div>
      <g-image
        class="bg-img object-cover w-full h-full object-center"
        src="../assets/images/opticians-bg-blur.jpg"
        alt="opticians background"
      />
    </section>
    <section class="news-section bg-teal-500">
      <article
        v-for="edge in $page.updates.edges"
        :key="edge.node.id"
        class="max-w-screen-xl mx-auto pt-6 pb-8 flex flex-col items-center font-body text-white"
      >
        <div class="mx-4 text-center">
          <h2 class="text-3xl">{{ edge.node.title }}</h2>
          <h3 class="text-sm opacity-70">Posted: {{ edge.node.date }}</h3>
        </div>
        <p class="mt-6 mx-6 xl:mx-0 text-lg">{{ edge.node.content }}</p>
        <g-link to="/announcements" class="focus:outline-none">
          <button
            type="button"
            class="announcements mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow-md hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
          >View Previous Announcements</button>
        </g-link>
      </article>
    </section>
    <section class="services-section max-w-screen-xl mx-auto font-body">
      <h1
        class="text-2xl mt-8 text-center mx-6"
      >We Offer a range of Services, Including&#46;&#46;&#46;</h1>
      <main class="my-8 flex flex-col sm:flex-row items-center justify-evenly">
        <div
          class="w-48 h-48 mb-6 sm:mb-0 rounded-full bg-gray-200 flex flex-col justify-center items-center"
        >
          <g-image class src="../assets/images/glasses.png" alt="Glasses Icon" />
          <p>Spectacles</p>
        </div>
        <div
          class="w-48 h-48 mb-6 sm:mb-0 rounded-full bg-gray-200 flex flex-col justify-center items-center"
        >
          <g-image class src="../assets/images/list.png" alt="Examinations Icon" />
          <p>Examinations</p>
        </div>
        <div class="w-48 h-48 rounded-full bg-gray-200 flex flex-col justify-center items-center">
          <g-image class src="../assets/images/eye.png" alt="Contact Lenses Icon" />
          <p>Contact Lenses</p>
        </div>
      </main>
      <div class="mx-6 xl:ml-0">
        <hr class="mt-12 mb-2" />
        <g-link to="/about" class="focus:outline-none mr-10">
          <button
            type="button"
            class="appointment mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-greasby shadow-md hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out"
          >About Us</button>
        </g-link>
        <g-link to="/services" class="focus:outline-none mr-10">
          <button
            type="button"
            class="appointment mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-greasby shadow-md hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out"
          >Our Services</button>
        </g-link>
        <g-link to="/" class="focus:outline-none">
          <button
            type="button"
            class="appointment mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-greasby shadow-md hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out"
          >Book an Appointment</button>
        </g-link>
      </div>
      <p
        class="mt-8 mx-6 xl:mx-0"
      >Greasby Opticians is an independent opticians which offers excellent quality eyecare and an extensive range of spectacle frames and contact lenses. We have served the community of Greasby for over 30 years. Many of our patients have been attending from their childhood and now bring their own children.</p>
      <p
        class="mt-4 mx-6 xl:mx-0"
      >We pride ourselves in providing a warm and comfortable environment where patients can feel at ease. We are confident that patients will be delighted at the personal service that we provide at Greasby Opticians.</p>
      <p
        class="mt-4 mb-10 mx-6 xl:mx-0"
      >To find out more, visit our 'About Us' page or see 'Our Services', which are both linked above.</p>
    </section>
    <section class="relative h-half-view w-full">
      <div class="absolute h-half-view w-full flex flex-col items-center justify-center font-body">
        <h1 class="mx-6 text-3xl text-greasby">Reviews</h1>
        <div>
          <div class="review-container mt-4 mx-6 bg-white w-96 p-4 rounded-md shadow-md">
            <h2 class="text-xl">{{ reviews.title }}</h2>
            <span class="text-greasby">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <p>{{ reviews.content }}</p>
          </div>
        </div>
      </div>
      <img
        class="bg-img object-cover w-full h-full object-center"
        src="../assets/images/triangles-bg.svg"
      />
      <!-- I customized this cool background on the homepage at SVGBackgrounds.com. -->
    </section>
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
export default {
	metaInfo: {
		title: 'Home',
	},
	data() {
		return {
			reviews: {
				title: 'Excellent Care',
				content:
					'Poutine woke shabby chic plaid distillery yr selvage forage tousled chambray aesthetic hammock fanny pack hot chicken ennui. Semiotics marfa lomo photo booth.',
			},
		}
	},
}
</script>


<style scoped>
.heading {
	transform: translateY(40px);
}

button:hover {
	transform: translateY(-3px);
}

.appointment:focus {
	@apply outline-none bg-greasby-light shadow-lg;
}

.announcements:focus {
	@apply outline-none bg-opacity-30 shadow-lg;
}

@keyframes fade {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	20% {
		opacity: 0.8;
		transform: translateY(0px);
	}
	40% {
		opacity: 0.8;
		transform: translateY(0px);
	}
	60% {
		opacity: 0.8;
		transform: translateY(0px);
	}
	80% {
		opacity: 0.8;
		transform: translateY(0px);
	}
	100% {
		opacity: 0;
		transform: translateY(20px);
	}
}

.review-container {
	animation-name: fade;
	animation-duration: 5s;
	animation-iteration-count: infinite;
}
</style>
