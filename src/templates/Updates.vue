<template>
<Layout>
  <section class="bg-greasby">
    <div class="remark max-w-screen-xl mx-auto px-6 py-6 xl:px-0">
      <VueRemarkContent />
      <hr class="mt-4 mx-8">
    </div>
  </section>
</Layout>
</template>


<script>
export default {
}
</script>


<style>
.remark > div > h1 {
  @apply font-body text-white text-3xl text-center;
}

.remark > div > h2 {
  @apply font-body text-white text-xl text-center mt-1;
}
</style>