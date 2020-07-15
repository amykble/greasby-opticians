<template>
  <Layout class="font-body">
    <section class="bg-gray-900">
      <div class="pt-10 w-full flex flex-col items-center">
        <h1 class="text-4xl text-white">New Technology</h1>
        <hr class="w-24" />
      </div>
    </section>
    <section class="bg-gray-900 text-white">
      <div class="max-w-screen-lg mx-auto py-10">
        <main class="mx-6">
          <h2 class="text-center pb-4 text-2xl">Optical Coherence Tomography (OCT)</h2>
          <p>We have invested in new technologies over this time in order that we can enhance your eye examination and will be delighted to talk you through these when you attend. Optical Coherence Tomography (OCT) uses light wave technology to allow us to see beneath the surface of the retina and view layers in microscopic detail, in a similar way to seeing the separate layers of a cake. It is different to the view that we normally see during the eye test and with our existing photography. We are able to identify areas of concern much earlier and monitor changes much more easily. Early detection and diagnosis of eye problems often leads to better understanding and treatment, along with improved visual outcomes. Such technology is widely used in the hospital setting and we are proud to be able to offer such diagnostic capabilities in our practice.</p>
          <p class="mt-2">
            <a
              class="text-blue-300 font-bold hover:text-greasby focus:text-greasby transition duration-200 ease-in-out"
              href="/documents/maestro2-brochure.pdf"
              target="_blank"
            >Click here to view our informational OCT PDF</a>
          </p>
          <section class="max-w-screen-lg mx-auto mt-6">
            <h2 class="text-lg">Eye conditions benefiting from the use of OCT include...</h2>
            <hr class="mt-2 mb-4" />
            <main class="text-black">
              <div class="flex shadow-md rounded-t-md">
                <div class="w-full bg-gray-100 rounded-t-md">
                  <p class="p-4">Age related macular degeneration</p>
                </div>
              </div>
              <div class="flex shadow-md">
                <div class="w-full bg-gray-200">
                  <p class="p-4">Diabetic retinopathy</p>
                </div>
              </div>
              <div class="flex shadow-md">
                <div class="w-full bg-gray-100">
                  <p class="p-4">Glaucoma</p>
                </div>
              </div>
              <div class="flex rounded-b-md shadow-md">
                <div class="w-full bg-gray-200 rounded-b-md">
                  <p class="p-4">Vitreous detachments</p>
                </div>
              </div>
            </main>
          </section>
        </main>
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto py-10">
      <main class="mx-6">
        <h2 class="text-center pb-4 text-2xl">iCare Tonometer</h2>
        <p>This new handheld device accurately measures the pressure within the eye without the need for drops nor using the puff of air. Patients find it painless and quick. Of vital importance during this time, the technique does not generate aerosol particles into the air which allows us to keep the practice environment safer for our patients and staff.</p>
        <p class="mt-2">
          <a
            class="text-greasby font-bold hover:text-blue-300 focus:text-blue-300 transition duration-200 ease-in-out"
            href="https://www.icaretonometer.com/products/icare-ic100/?fbclid=IwAR3LhjM0QQbyumB5sKAnpVoMrabyDdle7iWsxRlqPlpkvhSoI7XmC2rKksU"
            rel="noopener"
            target="_blank"
          >Click here to find out more about the iCare handheld device</a>
        </p>
      </main>
    </section>
    <AnyQs />
  </Layout>
</template>

<script>
import AnyQs from '../components/modules/AnyQs'

export default {
	metaInfo: {
		title: 'New Technology',
	},
	name: 'Technology',
	components: {
		AnyQs,
	},
}
</script>

<style scoped>
</style>