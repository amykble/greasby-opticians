<template>
  <Layout class="font-body">
    <section>
      <div class="pt-10 w-full flex flex-col items-center">
        <h1 class="text-4xl text-greasby">Frames</h1>
        <hr class="w-24" />
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto">
      <h2
        class="text-xl text-center pt-10 mx-6"
      >We have worked hard to build relationships so that we can stock the frame types, styles and designer names that you want to wear, there's something for everyone.</h2>
    </section>
    <section class="max-w-screen-lg mx-auto py-10 px-6 w-full font-body">
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <div @mouseover="messageOne = true" @mouseleave="messageOne = false" class="cursor-pointer">
          <g-image
            class="brand-container-1 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/anna-sui-carousel.png"
          />
        </div>
        <div @mouseover="messageTwo = true" @mouseleave="messageTwo = false" class="cursor-pointer">
          <g-image
            class="brand-container-1 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/boss-carousel.png"
          />
        </div>
        <div
          @mouseover="messageThree = true"
          @mouseleave="messageThree = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-1 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/barbour-carousel.png"
          />
        </div>
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <div
          @mouseover="messageFour = true"
          @mouseleave="messageFour = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/armani-carousel.png"
          />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-8">
        <div class="flex items-center justify-center mb-3 sm:mb-0">
          <div
            @mouseover="messageFive = true"
            @mouseleave="messageFive = false"
            class="cursor-pointer"
          >
            <g-image
              class="brand-container-3 mx-2 opacity-0 w-auto h-5 sm:h-10"
              src="../assets/images/brands/revlon-carousel.png"
            />
          </div>
          <div
            @mouseover="messageSix = true"
            @mouseleave="messageSix = false"
            class="cursor-pointer"
          >
            <g-image
              class="brand-container-3 mx-2 opacity-0 w-auto h-5 sm:h-10"
              src="../assets/images/brands/radley-carousel.png"
            />
          </div>
        </div>
        <div>
          <div
            @mouseover="messageSeven = true"
            @mouseleave="messageSeven = false"
            class="cursor-pointer"
          >
            <g-image
              class="brand-container-3 mx-2 opacity-0 w-auto h-5 sm:h-10"
              src="../assets/images/brands/jaeger-carousel.png"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <div
          @mouseover="messageEight = true"
          @mouseleave="messageEight = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-4 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/rayban-carousel.png"
          />
        </div>
        <div
          @mouseover="messageNine = true"
          @mouseleave="messageNine = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-4 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/prada-carousel.png"
          />
        </div>
        <div @mouseover="messageTen = true" @mouseleave="messageTen = false" class="cursor-pointer">
          <g-image
            class="brand-container-4 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/superdry-carousel.png"
          />
        </div>
      </div>
      <div class="flex items-center justify-center mb-3 sm:mb-8">
        <div
          @mouseover="messageEleven = true"
          @mouseleave="messageEleven = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-5 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/ferrucci-carousel.png"
          />
        </div>
        <div
          @mouseover="messageTwelve = true"
          @mouseleave="messageTwelve = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-5 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/charmant-carousel.png"
          />
        </div>
      </div>
      <div class="flex items-center justify-center mb-3">
        <div
          @mouseover="messageLast = true"
          @mouseleave="messageLast = false"
          class="cursor-pointer"
        >
          <g-image
            class="brand-container-6 mx-2 opacity-0 w-auto h-5 sm:h-10"
            src="../assets/images/brands/bulgari-carousel.png"
          />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <p class="brand-container-7 opacity-0 mx-6">and more brands and styles to choose from...</p>
      </div>
    </section>
    <section class="messages relative w-64 mx-auto">
      <div
        :class="messageOne ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>ANNA SUI’S collections take you on a creative journey that is unparralleled in the world of fashion. Mixing vintage styles with her current cultural obsessions, she effortlessly makes hip, exuberant, original designs</p>
        </div>
      </div>
      <div
        :class="messageTwo ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>The BOSS Orange collection is the perfect combination of style and personality. Contemporary frame shapes, colour and detail sit alongside classic designs to offer a choice of styles from high fashion to urban cool.</p>
        </div>
      </div>
      <div
        :class="messageThree ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>The new and exciting additional range of Men's and women's eyewear follows the trends of the Cafe Biker scene of the 50s and 60s, highlighting strong masculine shapes in dark tones and contrast ladies' models in small cats' eyes.</p>
        </div>
      </div>
      <div
        :class="messageFour ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Emporio Armani glasses are widely recognisable with its iconic eagle logo. They have a cult celebrity following behind them and it is obvious why they are so popular they display absolute class and sophistication, combining the right mix of comfort and durability and style.</p>
        </div>
      </div>
      <div
        :class="messageFive ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>For more than 80 years, Revlon has brought the most beautiful colors to the most beautiful women in the world. Revlon Eyewear encourages women to express their fabulous femininity.</p>
        </div>
      </div>
      <div
        :class="messageSix ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Radley started eyewear in Spring Summer 2011. “The collection is designed to appeal to discerning, confident, and fun loving women who are fashionable but have an independent sense of style.”</p>
        </div>
      </div>
      <div
        :class="messageSeven ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Jaeger is a long-established, instantly recognisable brand with an excellent reputation. As well as a classic British style, the frames provide a diverse range of styles to fit a variety of needs. A truly iconic collection.</p>
        </div>
      </div>
      <div
        :class="messageEight ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Best known for its iconic styles in designer shades, Ray Ban also offers prescription eyeglasses in the same highly distinctive and timeless RX frame styles, such as the consistently popular wayfarers, aviators, and Clubmaster frames the brand originally created—plus, of course, many other stylish and contemporary premium spectacles to suit any face shape or style preference.</p>
        </div>
      </div>
      <div
        :class="messageNine ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Prada enjoys a reputation as one of the world's premiere fashion brands. Their designs are tasteful and artistic - and always fashion-forward. Add a touch of Prada sophistication to your everyday look with a new pair of glasses.</p>
        </div>
      </div>
      <div
        :class="messageTen ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Combining Japanese street wear culture & vintage Americana style, this Superdry range is not to be missed. Taking inspiration from classic styles and modern finishes, the Superdry eyewear collection is perfect for those seeking timeless elegance.</p>
        </div>
      </div>
      <div
        :class="messageEleven ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>The Ferucci collection is the ultimate blend of elegant designs and luxury materials. The traditional shapes carry depth for multifocals and the intricate side detailing creates a collection that’s as classical as ever.</p>
        </div>
      </div>
      <div
        :class="messageTwelve ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>Charmant eyeware strives to provide state-of-the-art eyeware in both conservative and modern designs. This makes Charmant the ideal collection for anyone looking to find the best in value and style. The Charmant Titanium Collection blends the durability and beauty of titanium with modern designs to create a collection that is truly built to last.</p>
        </div>
      </div>
      <div
        :class="messageLast ? 'show' : 'hide'"
        class="absolute left-0 top-0 z-10 flex justify-center items-center transition duration-200 ease-in-out"
      >
        <div class="w-64 p-4 bg-gray-900 text-white rounded-md shadow-md">
          <p>The Bulgari eyewear collection reflects women’s innate beauty, enhancing the different facets of femininity: dazzling exuberance, stylish urban spirit or elegant charm, all with a distinctive appeal. The Le Gemme precious collection is jewellery for the eyes, featuring noble materials & timeless designs.</p>
        </div>
      </div>
    </section>
    <section class="bg-greasby text-white py-10">
      <div class="max-w-screen-lg mx-auto">
        <h2 class="text-2xl text-center mx-6 mb-4">Choosing Your Glasses</h2>
        <p
          class="mx-6"
        >All our staff are trained in assessing frame style and suitability. As an independent opticians we are able to order spectacle lenses from a variety of lens manufacturers enabling customers to get the best lens for their visual needs and frame selection.</p>
      </div>
    </section>
    <section class="w-full bg-greasby pb-10">
      <div class="max-w-screen-lg mx-auto text-white">
        <div class="mx-6 flex items-center justify-center">
          <g-link class="outline-none" to="/contact">
            <button
              type="button"
              class="appointment fade-in px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
            >Any Questions? Contact Us</button>
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
	data() {
		return {
			messageOne: false,
			messageTwo: false,
			messageThree: false,
			messageFour: false,
			messageFive: false,
			messageSix: false,
			messageSeven: false,
			messageEight: false,
			messageNine: false,
			messageTen: false,
			messageEleven: false,
			messageTwelve: false,
			messageLast: false,
		}
	},
}
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

.brand-container-7 {
	animation: fade 3s 1400ms forwards;
}

button:hover {
	transform: translateY(-3px);
}

.appointment:focus {
	@apply outline-none bg-opacity-30 shadow-lg;
}

.show {
	visibility: visible;
	opacity: 1;
}

.hide {
	visibility: 0;
	opacity: 0;
}
</style>