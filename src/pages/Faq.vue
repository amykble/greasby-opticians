<template>
  <Layout class="font-body">
    <div class="main-container">
      <section class="pt-10 w-full flex flex-col items-center">
        <h1 class="mx-6 text-4xl text-greasby text-center">Frequently Asked Questions</h1>
        <hr class="w-24" />
      </section>
      <section class="py-10">
        <div class="max-w-screen-lg mx-auto">
          <h2
            class="mx-6 pb-6 text-xl"
          >Your eyes can be affected by conditions you were born with or ones that develop as you grow older. Eye problems or sight problems can occur at any time but are more likely to present themselves and develop when you pass the magic age of 40.</h2>
          <hr class="mx-6 mb-6" />
          <p class="mx-6 text-lg">
            Please follow the link here to
            <a
              class="text-greasby font-bold hover:text-blue-300 focus:text-blue-300 transition duration-200 ease-in-out"
              href="https://lookafteryoureyes.org/eye-conditions/"
              target="_blank"
            >Look After Your Eyes.</a> This website and useful resource has been prepared by the College of Optometrists and provides information, pictures and videos which cover a variety of questions.
          </p>
        </div>
      </section>
    </div>
    <section class="max-w-screen-lg mx-auto my-10">
      <h2 class="text-lg mx-6">Topics covered in this link are...</h2>
      <hr class="mx-6 mt-2 mb-4" />
      <main class="mx-6 mb-10">
        <div class="flex shadow-md rounded-t-md">
          <div class="w-full bg-gray-100 rounded-t-md">
            <p class="p-4">Long & Short-sightedness</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Astigmatism</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Presbyopia</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Lazy eye</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Squint</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Age-related macular degeneration</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Cataracts</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Glaucoma</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Blepharitis</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Flashes & floaters</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Retinal detachment</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Diabetes</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Colour vision</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-200">
            <p class="p-4">Bacterial Conjunctivitis</p>
          </div>
        </div>
        <div class="flex shadow-md">
          <div class="w-full bg-gray-100">
            <p class="p-4">Charles Bonnet Syndrome</p>
          </div>
        </div>
        <div class="flex rounded-b-md shadow-md">
          <div class="w-full bg-gray-200 rounded-b-md">
            <p class="p-4">Dry Eye</p>
          </div>
        </div>
      </main>
    </section>
    <section class="pb-10">
      <div class="max-w-screen-lg mx-auto">
        <p
          class="mx-6 text-lg"
        >You will appreciate this information is general in nature. If you have any concerns about your eyes or eye sight please make an appointment to come in and see us.</p>
      </div>
    </section>
    <AnyQs />
  </Layout>
</template>

<script>
import AnyQs from '../components/modules/AnyQs'
export default {
	metaInfo: {
		title: 'FAQ',
	},
	name: 'Faq',
	components: {
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