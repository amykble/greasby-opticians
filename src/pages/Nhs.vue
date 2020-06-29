<template>
  <Layout class="font-body">
    <section class="pt-10 w-full flex flex-col items-center bg-greasby">
      <h1 class="text-4xl text-white">NHS</h1>
      <hr class="w-24" />
    </section>
    <section class="pt-10 main-container bg-greasby">
      <div class="max-w-screen-lg mx-auto">
        <h2
          class="mx-10 text-center pb-4 text-2xl text-white"
        >You qualify for a free NHS-funded sight test if:</h2>
        <div class="mx-6 p-4 bg-white shadow-md rounded-md">
          <p>You are under 16</p>
          <hr class="my-3" />
          <p>You are under 19 and in full-time education</p>
          <hr class="my-3" />
          <p>You are 60 or over</p>
          <hr class="my-3" />
          <p>You are registered as blind or partially sighted</p>
          <hr class="my-3" />
          <p>You have been diagnosed with diabetes or glaucoma</p>
          <hr class="my-3" />
          <p>You are 40 or over, and your mother, father, brother, sister, son or daughter has been diagnosed with glaucoma</p>
          <hr class="my-3" />
          <p>You have been advised by an ophthalmologist (eye doctor) that you’re at risk of glaucoma</p>
          <hr class="my-3" />
          <p>You are a prisoner on leave from prison</p>
          <hr class="my-3" />
          <p>You are eligible for an NHS complex lens voucher - your optometrist (optician) can advise you about your entitlement</p>
        </div>
        <h2
          class="mx-10 text-center pt-10 pb-4 text-2xl text-white"
        >You are also entitled to a free NHS sight test if:</h2>
        <div class="mx-6 p-4 bg-white shadow-md rounded-md">
          <p>You receive Income Support</p>
          <hr class="my-3" />
          <p>You receive Income-based Jobseeker's Allowance (not Contribution-based)</p>
          <hr class="my-3" />
          <p>You receive Pension Credit Guarantee Credit</p>
          <hr class="my-3" />
          <p>You receive Income-based Employment and Support Allowance (not Contribution-based)</p>
          <hr class="my-3" />
          <p>You are entitled to, or named on, a valid NHS tax credit exemption certificate</p>
          <hr class="my-3" />
          <p>You are named on a valid NHS certificate for full help with health costs (HC2)</p>
          <hr class="my-3" />
          <p>You have been advised by an ophthalmologist (eye doctor) that you’re at risk of glaucoma</p>
          <hr class="my-3" />
          <p>You are named on an NHS certificate for partial help with health costs (HC3), you may get some help towards the cost of your sight test.</p>
        </div>
      </div>
    </section>
    <AnyQs />
  </Layout>
</template>

<script>
import AnyQs from '../components/modules/AnyQs'

export default {
	components: {
		AnyQs,
	},
}
</script>

<style scoped>
</style>