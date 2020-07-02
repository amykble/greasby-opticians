<template>
  <Layout class="font-body">
    <div class="bg-greasby">
      <section class="py-10 max-w-screen-lg mx-auto flex flex-col items-center">
        <h1 class="text-4xl text-white">Contact Lenses</h1>
        <hr class="w-24 mb-6" />
        <p
          class="mx-6 text-lg text-white mb-6"
        >Perhaps you have never tried them... perhaps you tried before but did not get on with them - as with all technology the science around contact lenses is changing all the time. Please ask us about what is new, and following a consultation we can put you on a free trial!</p>
        <div class="mb-6 mx-6 p-4 bg-white shadow-md rounded-md sm:flex sm:items-center">
          <g-image src="../assets/images/focus-dailies.jpg" alt="Greasby Opticians" class="w-32" />
          <p
            class="mt-4 sm:mt-0 sm:ml-4 text-greasby"
          >Contact lenses offer you freedom from spectacles and natural all-round vision, whether this be for everyday wear, sport or for social wear. Improvements to both lens materials and technology over the years now allow most patients to find a lens that corrects their vision and is comfortable, convenient and affordable. Despite advances in spectacle lens technology and the advent of surgical techniques such as laser refractive surgery, contact lenses provide many advantages and are a very successful form of vision correction. There are now 3.7 million contact lens wearers in the UK, which represents 9% of adults aged 15-64 years (Association of Contact Lens Manufacturers 2012).</p>
        </div>
        <div class="mx-6 p-4 bg-white shadow-md rounded-md sm:flex sm:items-center">
          <g-image src="../assets/images/acuvue.png" alt="Greasby Opticians" class="w-32" />
          <p
            class="mt-4 sm:mt-0 sm:ml-4 text-greasby"
          >Following a comprehensive discussion about your contact lens needs, ocular history and external eye health check we will select a contact lens for you. As an independent optician, we are able to order the best lens choice for our patients from a wide range of contact lens manufacturers. Providing the lenses are suitable, we will teach you how to handle and care for the lenses before you take the lenses away for a free contact lens trial. An after care appointment will usually be arranged for a week later. We offer a range of lenses, including gas permeable lenses and frequent replacement soft lenses- monthly, two weekly or daily disposable lenses- including toric lenses (which are required for our patients with astigmatism) and varifocal contact lenses.</p>
        </div>
      </section>
    </div>
    <section class="max-w-screen-lg mx-auto my-10">
      <h2 class="text-lg mx-6">Contact Lens Services we Offer</h2>
      <hr class="mx-6 mt-2 mb-4" />
      <main class="mx-6">
        <div class="flex flex-col md:flex-row shadow-md rounded-t-md">
          <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400 rounded-tl-md">
            <h1 class="p-4 pb-1 text-lg font-bold">Daily disposable lenses</h1>
          </div>
          <div class="md:w-1/2 bg-gray-100 rounded-tr-md">
            <p
              class="p-4 pt-0 md:pt-4"
            >No longer do you need to worry about carrying around cleaning solutions or taking the time to clean and store your lenses. Every day you can wake up and use a brand lens - every night, throw them away - the ultimate in convenience and superb comfort. Daily disposable lenses can be worn on an occasional basis or on every day of the week.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row shadow-md">
          <div class="md:w-1/2 bg-gray-200 md:border-r border-solid border-gray-400">
            <h1 class="p-4 pb-1 text-lg font-bold">Two weekly disposable lenses</h1>
          </div>
          <div class="md:w-1/2 bg-gray-200">
            <p
              class="p-4 pt-0 md:pt-4"
            >Two weekly lenses are worn during the day and removed, cleaned and stored overnight. Following two weeks of wear the lenses are discarded and replaced with a new pair. Cleaning regimes are now more simple and effective than ever and two weekly lenses are a great choice for patients intending to wear their contact lenses for the majority of the time, with spectacle wear as a backup. An ideal choice of lens too for the patients whose prescription is not yet available in a daily lens type.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row shadow-md">
          <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400">
            <h1 class="p-4 pb-1 text-lg font-bold">Monthly lenses</h1>
          </div>
          <div class="md:w-1/2 bg-gray-100">
            <p
              class="p-4 pt-0 md:pt-4"
            >Monthly lenses are worn during the day and removed, cleaned and stored overnight. Following one month of wear the lenses are discarded and replaced with a new pair. Contact lens cleaning techniques can be more involved which is understandable given the nature of this lens having to last longer.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row shadow-md">
          <div class="md:w-1/2 bg-gray-200 md:border-r border-solid border-gray-400">
            <h1 class="p-4 pb-1 text-lg font-bold">Toric lenses for astigmatism</h1>
          </div>
          <div class="md:w-1/2 bg-gray-200">
            <p
              class="p-4 pt-0 md:pt-4"
            >Patients with astigmatism (rugby shaped eyes) have historically been fitted with rigid gas permeable lenses. While these lenses are still available and continue to be the best choice lens for some, the advent of new lens technology have now allowed patients with astigmatism to be fitted with soft toric lenses to give reliably clear and comfortable vision with greater convenience and flexibility in wearing schedules. Toric soft lenses are available in daily, two weekly and monthly wearing modalities and in a range of lens materials.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row rounded-b-md shadow-md">
          <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400 rounded-bl-md">
            <h1 class="p-4 pb-1 text-lg font-bold">Varifocal lenses</h1>
          </div>
          <div class="md:w-1/2 bg-gray-100 rounded-br-md">
            <p
              class="p-4 pt-0 md:pt-4"
            >Just as varifocal spectacle lenses provide clear focusing for a range of distances, varifocal contact lenses provide just the same, eliminating the need to use reading glasses in conjunction with distance contact lenses. The presbyopic patient can be truly ‘spectacle free.’</p>
          </div>
        </div>
      </main>
    </section>
    <AnyQs />
  </Layout>
</template>

<script>
import AnyQs from '../components/modules/AnyQs'

export default {
	metaInfo: {
		title: 'Contact Lenses',
	},
	name: 'ContactLenses',
	components: {
		AnyQs,
	},
}
</script>

<style scoped>
</style>