<template>
  <Layout class="font-body">
    <section class="main-container">
      <div class="pt-10 w-full flex flex-col items-center">
        <h1 class="text-4xl text-greasby">Kids</h1>
        <hr class="w-24" />
      </div>
      <div class="py-10">
        <div class="max-w-screen-lg mx-auto">
          <h2 class="mx-10 text-center pb-4 text-2xl">Did you know...</h2>
          <div class="mx-6 p-4 bg-white bg-opacity-80 shadow-md rounded-md">
            <div class="sm:flex sm:items-center">
              <g-image
                src="../assets/images/pencils.jpg"
                alt="Greasby Opticians"
                class="w-24 rounded-max"
              />
              <p
                class="mt-4 sm:mt-0 sm:ml-4 text-lg text-greasby"
              >Kids get free eye tests up to the age of of 18. Bring them in and get them school ready! Many kids will only have a basic vision check at school, it is important for kids to have a comprehensive eye examination even at pre-school age.</p>
            </div>
            <p
              class="mt-4 sm:mt-2 text-sm text-gray-500 sm:text-right"
            >*Kids get a free eye test up to the age of 16 and if they 16, 17 or 18 in full time education.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto">
      <div class="mx-6 py-10">
        <p
          class="text-greasby text-lg"
        >There are few things worse at school and more damaging to your child's confidence than struggling to read or see what the teacher is showing on the white board.</p>
        <h2
          class="text-center text-2xl my-6"
        >Here are some things that you could be looking out for:</h2>
        <div class="shadow-md rounded-t-md">
          <div class="bg-gray-100 rounded-tl-md">
            <h1 class="p-4 text-lg">Kids rubbing their eyes</h1>
          </div>
        </div>
        <div class="shadow-md">
          <div class="bg-gray-200">
            <h1
              class="p-4 text-lg"
            >Kids sitting too close to the television or holding books too close</h1>
          </div>
        </div>
        <div class="shadow-md">
          <div class="bg-gray-100">
            <h1 class="p-4 text-lg">Straining their eyes or moving their head to see better</h1>
          </div>
        </div>
        <div class="shadow-md">
          <div class="bg-gray-200">
            <h1 class="p-4 text-lg">Closing one eye to read / focus</h1>
          </div>
        </div>
        <div class="shadow-md">
          <div class="bg-gray-100">
            <h1 class="p-4 text-lg">Complaining of headaches, sore eyes, tired eyes</h1>
          </div>
        </div>
        <div class="rounded-b-md shadow-md">
          <div class="bg-gray-200 rounded-bl-md">
            <h1 class="p-4 text-lg">Losing their place while reading</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-screen-lg mx-auto">
      <hr class="mx-6" />
    </div>
    <section class="py-10">
      <div class="max-w-screen-lg mx-auto">
        <div class="flex flex-col sm:flex-row items-center sm:justify-around mx-6">
          <g-image src="../assets/images/kids-poor-sight.png" alt="Greasby Opticians" class="w-64" />
          <g-image
            src="../assets/images/kids-eye-exam.png"
            alt="Greasby Opticians"
            class="w-64 mt-4 sm:mt-0"
          />
        </div>
      </div>
    </section>
    <AnyQs />
  </Layout>
</template>

<script>
import AnyQs from '../components/modules/AnyQs'

export default {
	metaInfo: {
		title: 'Kids',
	},
	name: 'Kids',
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