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
          <p>
            <a
              class="text-greasby font-bold hover:text-blue-300 focus:text-blue-300 transition duration-200 ease-in-out"
              href="https://www.icaretonometer.com/products/icare-ic100/?fbclid=IwAR3LhjM0QQbyumB5sKAnpVoMrabyDdle7iWsxRlqPlpkvhSoI7XmC2rKksU"
              rel="noopener"
              target="_blank"
            >Link to icare-ic100</a>
          </p>
          <p>
            <a
              class="text-greasby font-bold hover:text-blue-300 focus:text-blue-300 transition duration-200 ease-in-out"
              href="/documents/maestro2-brochure.pdf"
              target="_blank"
            >Link to pdf</a>
          </p>
        </main>
      </div>
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