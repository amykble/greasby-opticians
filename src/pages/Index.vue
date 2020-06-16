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
          >View Previous Announcements</button>
        </g-link>
      </article>
    </section>
    <section class="services-section max-w-screen-lg mx-auto font-body">
      <h1
        class="text-2xl mt-8 text-center mx-6"
      >We Offer a Range of Services, Including&#46;&#46;&#46;</h1>
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
      <div class="mx-6 lg:ml-0">
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
        class="mt-8 mx-6 lg:mx-0"
      >Greasby Opticians is an independent opticians which offers excellent quality eyecare and an extensive range of spectacle frames and contact lenses. We have served the community of Greasby for over 30 years. Many of our patients have been attending from their childhood and now bring their own children.</p>
      <p
        class="mt-4 mx-6 lg:mx-0"
      >We pride ourselves in providing a warm and comfortable environment where patients can feel at ease. We are confident that patients will be delighted at the personal service that we provide at Greasby Opticians.</p>
      <p
        class="mt-4 mb-10 mx-6 lg:mx-0"
      >To find out more, visit our 'About Us' page or see 'Our Services', which are both linked above.</p>
    </section>
    <section class="review-main-container pt-6 px-2 sm:px-6 pb-8 w-full font-body">
      <h1 class="text-3xl text-center text-greasby">Reviews</h1>
      <div class="flex items-center justify-center">
        <div class="relative mt-4 w-72 sm:w-96 h-96 sm:h-72">
          <div class="absolute review-container bg-white w-72 sm:w-96 p-4 rounded-md shadow-md">
            <h2 class="text-xl">{{ review[reviewInt].title }}</h2>
            <span class="text-greasby">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <p>{{ review[reviewInt].content }}</p>
          </div>
        </div>
      </div>
      <p class="mt-8 text-center">
        To leave a review
        <a
          class="text-blue-500"
          href="https://www.nhs.uk/services/optician/greasby-opticians/P17109/ratings-and-reviews"
          target="_blank"
          rel="noopener"
        >click here</a>
      </p>
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
			reviewInt: 0,
			review: [
				{
					title: 'Excellent, friendly care',
					content:
						'We visited this opticians as a whole family (three kids and two adults). It\u0027s clear that all the staff are highly knowledgeable. They also seem to manage to get the perfect balance of being incredibly friendly whilst maintaining professionalism. Two of our kids have glasses, and their new pairs were made within a week (less, I think?).',
				},
				{
					title: 'Fabulous service',
					content:
						'Fabulous service which put my mind at rest immediately and saved a trip to A&E or the out of hours at the hospital. Optician was very re-assuring.',
				},
				{
					title: 'Red eye scheme',
					content:
						'Really sore eye - went to drop in at Arrow Park who told me to see community ophthalmologist. Came to Greasby Opticians who were amazing. Ophthalmologist found very small debris behind lid of eye and removed it. Instant improvement. Thank you so much.',
				},
				{
					title: 'Five star attention every time!',
					content:
						'My wife and myself find it a pleasure to attend this practice at Greasby. The treatment, respect, and an ability by one particular optometrist to put people at ease is really second to none. The receptionist here are warm and friendly, my wife can become very anxious as she has a high degree of myopia and needs this level of reassurance. We both find this at this excellent practice in Greasby.',
				},
				{
					title: 'Floaters',
					content:
						'The care and attention is perfect, and no concern is too small to receive attention. I could not be more pleased with the general manner of all the staff. There is no hurry or lack of attention at all stages, and the examinations could not be more thorough or reassuring.',
				},
			],
		}
	},
	methods: {
		changeReview() {
			if (this.reviewInt == this.review.length - 1) {
				this.reviewInt = 0
			} else if (this.reviewInt < this.review.length) {
				this.reviewInt++
			}
		},
		reviewInterval() {
			setInterval(this.changeReview, 5000)
		},
	},
	mounted() {
		this.reviewInterval()
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
	5% {
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
	95% {
		opacity: 0;
		transform: translateY(20px);
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

.review-main-container {
	background-image: url('../assets/images/triangles-bg.svg');
	background-position: center;
	/* I customized this cool background on the homepage at SVGBackgrounds.com. */
}
</style>
