<template>
<div>
  <Navigation />
  <slot/>
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

export default {
	components: {
		Navigation,
	}
	
}
</script>

<style src='../main.css' />
