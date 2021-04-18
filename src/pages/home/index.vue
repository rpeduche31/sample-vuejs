

<template>
	<MovieListsHolder >
		<div class="movie-card-holder" v-for="item in allMovies" v-bind:key="item.id">
			<MovieCards :data="item" :routerProps="routerProps" />
			</div>
	</MovieListsHolder>
</template>



<script>
import { mapGetters, mapActions } from "vuex";
import styled from 'vue3-styled-components'
import MovieCards from '../../components/MovieCards'

export const MovieListsHolder = styled.div`

display: grid;
		grid-template-columns: repeat(auto-fill, 210px);
		grid-row-gap: 35px;
		grid-gap: 55px;
		justify-content:center;
		padding-top:70px;
		background:black;
		
`

export default{
	name:"Home",
	components:{
MovieListsHolder,MovieCards
	},
	data(){
		return {
			movieType: '',
			routerProps:''
    }
	},
	created(){
		this.fetchAllmovies(this.$route.params.movie_type)	
	},
	mounted(){
		this.getRouterId()
	},
	computed: {...mapGetters(["allMovies"])},
	watch:{
		$route() {
			this.getRouterId()
    }
	},
	methods:{
		...mapActions(["fetchAllmovies"]),
		getRouterId(){
			this.routerProps = this.$route.params
			this.movieType = this.$route.params.movie_type	
			this.fetchAllmovies(this.$route.params.movie_type)	
		},
		
	}
}
</script>