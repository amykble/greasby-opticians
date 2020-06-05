<template>
<Layout>
  <section class="h-half-view w-full">
    <div class="absolute h-half-view w-full bg-black opacity-75"></div>
    <div class="absolute w-full h-half-view flex flex-col items-center justify-center">
      <h1 class="font-title text-3xl text-blue-300 hidden md:inline">Welcome to</h1>
      <img class="h-16 md:h-32" src="../assets/images/GO-logo-white.png" alt="white logo">
      <button type="button" class="mt-10 px-3 py-1 rounded-md text-white font-body bg-greasby shadow hover:bg-greasby-light hover:shadow-lg transition-all duration-200 ease-in-out">Book An Appointment Now</button>
    </div>
    <img class="bg-img object-cover w-full h-full object-center" src="../assets/images/opticians-bg-blur.jpg" alt="opticians background">
  </section>
  <!-- <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a> -->
</Layout>
</template>


<script>
export default {
    metaInfo: {
        title: 'Home'
    }
}
</script>


<style scoped>
h1 {
  transform: translateY(40px);
}

button:hover {
  transform: translateY(-3px);
}

button:focus {
  @apply outline-none bg-greasby-light shadow-lg;
}
</style>
