<template>
  <section class="review-main-container pt-6 px-2 sm:px-6 pb-8 w-full font-body">
    <h1 class="text-3xl text-center text-greasby">Reviews</h1>
    <div class="flex items-center justify-center">
      <div class="flex items-center justify-center mt-4 w-72 sm:w-96 h-96 sm:h-72">
        <div class="review-container bg-white w-72 sm:w-96 p-4 rounded-md shadow-md">
          <h2 class="text-xl">{{ review[reviewInt].title }}</h2>
          <span class="text-greasby">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <p>{{ review[reviewInt].content }}</p>
        </div>
      </div>
    </div>
    <p class="mt-8 text-center">
      To leave a review
      <a
        class="click-here text-blue-500"
        href="https://www.nhs.uk/services/optician/greasby-opticians/P17109/ratings-and-reviews"
        target="_blank"
        rel="noopener"
      >click here</a>
    </p>
  </section>
</template>

<script>
export default {
	name: 'Review',
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
				{
					title: 'Red Eye Clinic',
					content:
						'Quick service meant I was worried less and eye issue resolved. Fab service.',
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
	created() {
		this.reviewInterval()
	},
}
</script>

<style scoped>
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
	background-image: url('../../assets/images/triangles-bg.svg');
	background-position: center;
	/* I customized this cool background on the homepage at SVGBackgrounds.com. */
}

.click-here:focus,
.click-here:hover {
	@apply outline-none text-blue-300;
}
</style>