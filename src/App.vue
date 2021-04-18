<script>
import NavBar from './components/NavBar'






export default {
	name: 'App',
	components:{
		NavBar
	}
};
</script>


<template>

 <NavBar />
 
	<router-view></router-view>
	
</template>
<style>
      body { margin: 0 !important; } 
</style>

