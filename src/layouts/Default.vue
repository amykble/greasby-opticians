<template>
<div>
  <Navigation />
  <slot/>
	<Footer/>
</div>
</template>


<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>

<script>
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default {
	components: {
		Navigation,
		Footer
	}
	
}
</script>

<style src='../main.css' />
