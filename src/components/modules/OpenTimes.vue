<template>
  <section class="max-w-screen-lg mx-auto">
    <div class="mx-6 py-10">
      <h2 class="text-center text-2xl mb-4">Opening Times</h2>
      <div class="flex flex-col md:flex-row shadow-md rounded-t-md">
        <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400 rounded-tl-md">
          <h1 class="p-4 pb-0 text-lg font-bold">Monday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-100 rounded-tr-md">
          <p class="p-4 pt-0 md:pt-4">8:45 am – 5:30 pm</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row shadow-md">
        <div class="md:w-1/2 bg-gray-200 md:border-r border-solid border-gray-400">
          <h1 class="p-4 pb-0 text-lg font-bold">Tuesday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-200">
          <p class="p-4 pt-0 md:pt-4">8:45 am – 5:30 pm</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row shadow-md">
        <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400">
          <h1 class="p-4 pb-0 text-lg font-bold">Wednesday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-100">
          <p class="p-4 pt-0 md:pt-4">8:45 am – 5:30 pm</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row shadow-md">
        <div class="md:w-1/2 bg-gray-200 md:border-r border-solid border-gray-400">
          <h1 class="p-4 pb-0 text-lg font-bold">Thursday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-200">
          <p class="p-4 pt-0 md:pt-4">8:45 am – 5:30 pm</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row shadow-md">
        <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400">
          <h1 class="p-4 pb-0 text-lg font-bold">Friday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-100">
          <p class="p-4 pt-0 md:pt-4">8:45 am – 5:30 pm</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row shadow-md">
        <div class="md:w-1/2 bg-gray-200 md:border-r border-solid border-gray-400">
          <h1 class="p-4 pb-0 text-lg font-bold">Saturday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-200">
          <p class="p-4 pt-0 md:pt-4">8:45 am – 1:00 pm</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row rounded-b-md shadow-md">
        <div class="md:w-1/2 bg-gray-100 md:border-r border-solid border-gray-400 rounded-bl-md">
          <h1 class="p-4 pb-0 text-lg font-bold">Sunday</h1>
        </div>
        <div class="md:w-1/2 bg-gray-100 rounded-br-md">
          <p class="p-4 pt-0 md:pt-4 text-red-500">CLOSED</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	Name: 'OpenTimes',
}
</script>

<style scoped>
</style>