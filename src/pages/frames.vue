<template>
  <Layout class="font-body">
    <section>
      <div class="pt-10 w-full flex flex-col items-center">
        <h1 class="text-4xl text-greasby">Frames</h1>
        <hr class="w-24" />
      </div>
    </section>
    <section class="review-main-container pt-6 px-2 sm:px-6 pb-8 w-full font-body">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center mt-4 w-72 sm:w-96 h-96 sm:h-72">
          <div class="review-container bg-white w-72 sm:w-96 p-4 rounded-md shadow-md">
            <img :src="'../assets/images/brands/' + brands[imgInt]" alt="cycled image" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
	data() {
		return {
			imgInt: 0,
			brands: [
				'anna-sui-carousel.png',
				'armani-carousel.png',
				'barbour-carousel.png',
				'boss-carousel.png',
			],
		}
	},
	methods: {
		changeBrand() {
			if (this.imgInt === this.brands.length - 1) {
				this.imgInt = 0
			} else if (this.imgInt < this.brands.length) {
				this.imgInt++
			}
		},
		brandsInterval() {
			setInterval(this.changeBrand, 5000)
		},
	},
	created() {
		this.brandsInterval()
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
</style>