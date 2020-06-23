<template>
  <Layout class="font-body">
    <section>
      <div class="pt-10 w-full flex flex-col items-center">
        <h1 class="text-4xl text-greasby">Frames</h1>
        <hr class="w-24" />
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto py-10 px-6 w-full font-body">
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <g-image
          class="brand-container-1 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/anna-sui-carousel.png"
        />
        <g-image
          class="brand-container-1 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/boss-carousel.png"
        />
        <g-image
          class="brand-container-1 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/barbour-carousel.png"
        />
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <g-image
          class="brand-container-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/armani-carousel.png"
        />
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-8">
        <div class="flex items-center justify-center mb-3 sm:mb-0">
          <g-image
            class="brand-container-3 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/revlon-carousel.png"
          />
          <g-image
            class="brand-container-3 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/radley-carousel.png"
          />
        </div>
        <div>
          <g-image
            class="brand-container-3 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/jaeger-carousel.png"
          />
        </div>
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <g-image
          class="brand-container-4 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/rayban-carousel.png"
        />
        <g-image
          class="brand-container-4 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/prada-carousel.png"
        />
        <g-image
          class="brand-container-4 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/superdry-carousel.png"
        />
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <g-image
          class="brand-container-5 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/ferrucci-carousel.png"
        />
        <g-image
          class="brand-container-5 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/charmant-carousel.png"
        />
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <g-image
          class="brand-container-6 mx-2 opacity-0 w-auto h-5 sm:h-10"
          src="../assets/images/brands/bulgari-carousel.png"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
@keyframes fade {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	20% {
		opacity: 0.8;
		transform: translateY(0px);
	}
	100% {
		opacity: 0.8;
		transform: translateY(0px);
	}
}

.brand-container-1 {
	animation: fade 3s 200ms forwards;
}

.brand-container-2 {
	animation: fade 3s 400ms forwards;
}

.brand-container-3 {
	animation: fade 3s 600ms forwards;
}

.brand-container-4 {
	animation: fade 3s 800ms forwards;
}

.brand-container-5 {
	animation: fade 3s 1s forwards;
}

.brand-container-6 {
	animation: fade 3s 1200ms forwards;
}
</style>