<template>
  <Layout class="font-body main-container">
    <section class="pt-10 w-full flex flex-col items-center">
      <h1 class="text-4xl text-greasby">About Us</h1>
      <hr class="w-24" />
    </section>
    <section class="py-10">
      <div class="max-w-screen-lg mx-auto">
        <h2 class="mx-10 text-center pb-4 text-2xl">About the Team</h2>
        <h2 class="mx-10 text-center pb-2">Get to Know Greasby Opticians</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md sm:flex sm:items-center">
          <g-image
            src="../assets/images/greasby-fb.jpg"
            alt="Greasby Opticians"
            class="w-24 rounded-max"
          />
          <p class="mt-4 sm:mt-0 sm:ml-4 text-greasby">
            Greasby Opticians, previously LM Daly Opticians is an independent opticians which continues to offer excellent quality eyecare and an extensive range of spectacle frames and contact lenses. Mrs. Lynn Daly served the community of Greasby, testing eyes for 27 years. Dr. Helena Workman took over the reins of the business in April 2016 and is supported by Rachel Webbon and Hannah Thompson. Many of our patients have been attending from their childhood and now bring their own children.
            We pride ourselves in providing a warm and comfortable environment where patients can feel at ease. We are confident that patients will be delighted at the personal service that we provide at Greasby Opticians.
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Helena Workman, Optometrist at Greasby Opticians</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md sm:flex sm:items-center">
          <g-image
            src="../assets/images/helena-square.jpg"
            alt="Greasby Opticians"
            class="w-24 rounded-max"
          />
          <p class="mt-4 sm:mt-0 sm:ml-4 text-greasby">
            "I was brought up on the Wirral and left here to study optometry at Aston university in Birmingham in 1994. I qualified as an optometrist in 1998 and continued to live in Birmingham where I was involved in both high street and hospital optometry. In 2002 I began my PhD in Optometry and I had the opportunity to teach undergraduate students and work alongside local ophthalmologists.
            I returned to the Wirral in 2009 to be closer to my family and now live locally with my husband and 3 children."
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Sharon Bland</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md">
          <p class="text-greasby">
            I was born on the Wirral and love living here on our beautiful peninsula. I am married with two sons.
            I’ve worked in optics for 18 years and am really pleased to have recently joined Greasby Opticians. I
            love helping patients choose their new glasses, particularly enjoy working with children and enjoy
            finding lens and spectacles solutions for challenging cases. I’m looking forward to meeting all the
            Greasby regulars.
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Jess Clark</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md">
          <p class="text-greasby">
            I have worked in Optics since 2012 when I began my level 2 Diploma in Optical Retail Skills and
            Award in Employment and Personal Learning Skills in Health. I went on to complete my Advanced
            Level Apprenticeship in Optical Health and Retail in 2016. I began working at Greasby Opticians
            when Dr Workman took over the practice and have since had my first child. I feel privileged to work
            in such a lovely community with wonderful colleagues.
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Caroline Cookson</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md">
          <p class="text-greasby">
            I started working in Optics in 2008 and achieved my qualification as a Dispensing Optician from
            Anglia Ruskin University, Cambridge in 2013. I am a member of the Association of British Dispensing
            Opticians (ABDO) and completed my Low Vision Certificate in 2015. When I’m not dispensing
            fabulous glasses, I love to spend time with my family and enjoy dancing and acting in my spare time.
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Jessica Magson</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md">
          <p class="text-greasby">
            I started working in the optical industry in 2015. Since joining Dr Workman at Greasby Opticians in
            2017 I have been able to develop my knowledge and skills to become an Optical Assistant. I love
            working in such a tight knit community. I got married in 2018 and am currently off work as I prepare
            for our first baby. I look forward to seeing everyone when I return in 2021.
          </p>
        </div>
        <h2 class="mx-10 text-center mt-6 mb-2">Helen Winterburn</h2>
        <div class="mx-6 p-4 bg-white bg-opacity-75 shadow-md rounded-md">
          <p class="text-greasby">
            I have thoroughly enjoyed working as part of the team at Greasby Opticians for the last 5 years as an
            Optical Assistant. I live locally and enjoy interacting with the patients in our community. I’m a
            season ticket holder at Anfield and top fan of the Mighty Reds. In my spare time, I enjoy playing
            badminton and have recently started tending our new allotment.
          </p>
        </div>
      </div>
    </section>
    <News />
    <AnyQs />
  </Layout>
</template>

<page-query>
query Documentation {
  announcements: allDocumentation(sortBy: "date", limit: 1) {
    edges {
      node {
        title
        date
        description
        path 
      }
    }
  }
}
</page-query>

<script>
import News from '../components/modules/News'
import AnyQs from '../components/modules/AnyQs'

export default {
	metaInfo: {
		title: 'About Us',
	},
	name: 'About',
	components: {
		News,
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
