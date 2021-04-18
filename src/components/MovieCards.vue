<template>

<MovieCard @click="handleMovieClick(data)">
    
    
    <img v-bind:src="`https://image.tmdb.org/t/p/original${data?.poster_path}`" />
    <span class="movie-title">{{data.title}}</span>
</MovieCard>

</template>


<script>


import styled from 'vue3-styled-components'

export const MovieCard = styled.div`
	display:flex;
    flex-direction:column;
    margin:auto;
    
    .movie-title{
        margin-top:15px;
        font-family: system-ui;
        font-weight:bolder;
        color:white;
    }
    img{
        height:350px;
        cursor:pointer;
        
    }
`;







export default {
  name:'Navbar',
  components:{
    MovieCard
  },
  props:{
      data:Object,
      routerProps:Object
  },
  methods:{
      handleMovieClick(data){
          
          
          
          this.$router.push(`/${this.routerProps.movie_type}/${data.id}`)
          
      }
  }
  
  
  

}

</script>


