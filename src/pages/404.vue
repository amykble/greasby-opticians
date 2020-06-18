<template>
  <Layout>
    <section class="bg-greasby font-body text-white w-full">
      <div class="max-w-screen-lg mx-auto h-screen flex flex-col items-center justify-center">
        <div class="mx-6">
          <h1 class="text-4xl text-center">Error 404. Page Not Found</h1>
          <hr class="mt-2 pb-8 w-40 mx-auto" />
          <h2
            class="text-2xl text-center"
          >It looks like you have navigated to a page that doesn't exist!</h2>
          <p class="text-2xl text-center">Here's some links to get you back to our website</p>
        </div>
        <div class="mx-6 mt-8 flex justify-center text-lg text-blue-200">
          <g-link
            to="/"
            class="mr-4 hover:text-white focus:text-white transition duration-200 ease-in-out"
          >Home</g-link>
          <g-link
            to="/contact"
            class="hover:text-white focus:text-white transition duration-200 ease-in-out"
          >Contact Us</g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
</style>