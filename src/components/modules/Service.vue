<template>
  <section class="services-section max-w-screen-lg mx-auto font-body">
    <h1
      class="text-2xl mt-8 text-center mx-6"
    >We Offer a Range of Services, Including&#46;&#46;&#46;</h1>
    <main class="my-8 flex flex-col sm:flex-row items-center justify-evenly">
      <g-link to="/frames">
        <div
          class="w-48 h-48 mb-6 sm:mb-0 rounded-full bg-gray-200 flex flex-col justify-center items-center"
        >
          <g-image class src="../../assets/images/glasses.png" alt="Glasses Icon" />
          <p>Spectacles</p>
        </div>
      </g-link>
      <g-link to="/services">
        <div
          class="w-48 h-48 mb-6 sm:mb-0 rounded-full bg-gray-200 flex flex-col justify-center items-center"
        >
          <g-image class src="../../assets/images/list.png" alt="Examinations Icon" />
          <p>Examinations</p>
        </div>
      </g-link>
      <g-link to="/contact-lenses">
        <div class="w-48 h-48 rounded-full bg-gray-200 flex flex-col justify-center items-center">
          <g-image class src="../../assets/images/eye.png" alt="Contact Lenses Icon" />
          <p>Contact Lenses</p>
        </div>
      </g-link>
    </main>
    <div class="mx-6">
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
      <g-link to="/contact" class="focus:outline-none">
        <button
          type="button"
          class="appointment mt-6 px-3 py-1 rounded-md text-white font-body bg-white bg-greasby shadow-md hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out"
        >Book an Appointment</button>
      </g-link>
    </div>
    <p
      class="mt-10 mx-6"
    >Greasby Opticians is an independent opticians which offers excellent quality eyecare and an extensive range of spectacle frames and contact lenses. We have served the community of Greasby for over 30 years. Many of our patients have been attending from their childhood and now bring their own children.</p>
    <p
      class="mt-4 mx-6"
    >We pride ourselves in providing a warm and comfortable environment where patients can feel at ease. We are confident that patients will be delighted at the personal service that we provide at Greasby Opticians.</p>
    <p
      class="mt-4 mb-10 mx-6 font-bold"
    >To find out more, visit our 'About Us' page or see 'Our Services', which are both linked above.</p>
    <p
      class="mt-4 mx-6"
    >Our services support all patients in our community, offering eye tests to children from pre-school age and beyond, dispensing spectacles to those attending local paediatric eye clinics for their eye examinations, VDU examinations to our patients working in an office environment, contact lens wearers and specialised clinics such as red eye, flashes and floaters, diabetic screening, glaucoma assessment, cataract assessment and low visual aid services.</p>
    <p
      class="mt-4 mx-6"
    >Our optometrists take a keen interest in all the local optical policies and protocols, and are members of the Local Optometric Committee.</p>
    <p
      class="mt-4 mb-10 mx-6"
    >The practice stocks a comprehensive range of spectacle frames from designer to budget and all staff are trained on frame suitability.</p>
  </section>
</template>

<script>
export default {
	name: 'service',
}
</script>

<style scoped>
button:hover {
	transform: translateY(-3px);
}

.appointment:focus {
	@apply outline-none bg-greasby-light shadow-lg;
}
</style>