<template>
 <TopBar>
  
			<div class="bgColor" />
			<div class="first-column">
				<span class="first-column-title">MONSTARLAB MOVIEDB</span>
			</div>
			<div class="second-column">
				<p @click="debug(`TRENDING`)" v-bind:class="{ active: movieType === 'TRENDING' }">
					TRENDING
				</p>
				<p @click="debug(`NOW PLAYING`)" v-bind:class="{ active: movieType === 'NOW PLAYING' }">
					NOW PLAYING
				</p>
				<p @click="debug(`POPULAR`)" v-bind:class="{ active: movieType === 'POPULAR' }">
					POPULAR
				</p>
				<p @click="debug(`TOP RATED`)" v-bind:class="{ active: movieType === 'TOP RATED' }">
					TOP RATED
				</p>
				<p @click="debug(`UPCOMING`)" v-bind:class="{ active: movieType === 'UPCOMING' }">
					UPCOMING
				</p>
			
     
			</div>
		</TopBar>
</template>


<script>


import styled from 'vue3-styled-components'

export const TopBar = styled.div`
	width: 100%;
	height: 55px;
	z-index: 100;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;

	.bgColor {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #111215;
	}
	.first-column {
		display: flex;
		width: 50%;
		cursor: pointer;
		font-size: 14px;
		align-items: center;
		justify-content: flex-start;
		.first-column-title {
			font-size: 24px !important;
			z-index: 10;
			font-weight: bolder;
			color: #00ffdc;
      font-family: system-ui;
			margin-left: 50px;
		}
	}
	.second-column {
		display: flex;
		justify-content: space-around;
		width: 50%;
		cursor: pointer;
		color: #929292;
		font-size: 14px;
		align-items: center;
		.first-column-title {
			font-size: 24px !important;
			z-index: 10;
			font-weight: bolder;
			color: #00ffdc;
		}
    .active{
      color: #00ffdc;
    }
		p {
			margin: 0;
			z-index: 10;
			width: 25%;
			text-align: center;
			font-weight: bolder;
			transition: all 0.5s ease;
          font-family: system-ui;
          
			&:hover {
				color: #00ffdc;
				transition: all 0.5s ease;
			}
		}
	}
`;







export default {
  name:'Navbar',
  components:{
    TopBar
  },
  data(){
    return {
      movieType: `TRENDING`, 
    }
  },
  mounted(){
	
	let factoredMovieType = this.movieType.toString().toLowerCase().replace(" ",'-')
	!window.location.pathname.includes(`${factoredMovieType}/`) && this.$router.push(`/trending`)
	
	},
methods: {
  debug (type) {
    this.movieType = type
    let factoredMovieType = type.toString().toLowerCase().replace(" ",'-')
    this.$router.push(`/${factoredMovieType}`)

  }
} 

}

</script>


