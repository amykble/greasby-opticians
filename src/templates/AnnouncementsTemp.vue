<template>
  <Layout>
    <section class="w-full bg-greasby py-10">
      <div class="max-w-screen-md mx-auto text-white">
        <div
          class="remark-header mx-6 flex flex-col sm:flex-row items-end sm:items-center justify-between"
        >
          <g-link class="outline-none" to="/announcements">
            <button
              type="button"
              class="appointment fade-in px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
            >View All Announcements</button>
          </g-link>
          <g-link class="outline-none" to="/">
            <button
              type="button"
              class="appointment fade-in mt-6 sm:mt-0 px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
            >Home</button>
          </g-link>
        </div>
      </div>
    </section>
    <section class="max-w-screen-md mx-auto">
      <div class="mx-6 mt-10 mb-4 font-body">
        <h1 class="text-2xl text-greasby font-bold">{{$page.documentation.title}}</h1>
        <h2 class="text-sm mt-2 text-gray-500">{{$page.documentation.date}}</h2>
        <hr class="mt-3 w-1/2" />
      </div>
    </section>
    <section class="max-w-screen-md mx-auto">
      <div class="remark mx-6 mb-10 font-body">
        <VueRemarkContent />
      </div>
    </section>
    <section class="w-full bg-greasby py-10">
      <div class="max-w-screen-md mx-auto text-white">
        <div class="remark-header mx-6 flex flex-col sm:flex-row items-center justify-center">
          <g-link class="outline-none" to="/contact">
            <button
              type="button"
              class="appointment fade-in px-3 py-1 rounded-md text-white font-body bg-white bg-opacity-10 shadow hover:bg-opacity-30 hover:shadow-lg transition-all duration-200 ease-in-out"
            >Any Questions? Contact Us</button>
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Documentation($id: ID!) {
  documentation(id: $id) {
    title
    date
  }
}
</page-query>

<script>
export default {
	name: 'AnnouncementsTemp',
}
</script>


<style>
.remark-header button:hover {
	transform: translateY(-3px);
}

.appointment:focus {
	@apply outline-none bg-opacity-30 shadow-lg;
}

.remark {
	min-height: 50vh;
}

.remark h1,
.remark h2,
.remark h3 {
	margin: 1.5rem 0 0.75rem 0;
	font-weight: bold;
}

.remark h1 {
	font-size: 1.5rem;
}

.remark h2 {
	font-size: 1.25rem;
}

.remark h3 {
	font-size: 1.125rem;
}

.remark p {
	line-height: 2rem;
}

.remark a {
	@apply text-blue-500 transition duration-200 ease-in-out;
}

.remark a:hover {
	@apply text-blue-300;
}

.remark p,
.remark a {
	font-size: 1.125rem;
	margin-bottom: 1rem;
}

.remark img {
	width: full;
	display: block;
	margin: 1.5rem auto 0;
	border-radius: 0.5rem;
}

@media only screen and (min-width: 768px) {
	.remark img {
		width: 40%;
	}
}
</style>