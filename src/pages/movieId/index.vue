<template>
  <MovieDetailHolder>
      <div class="small-screen-movie">
          <div class="poster-and-other-holder">
              <img class="movie-poster" v-bind:src="`https://image.tmdb.org/t/p/original${singleMovie?.poster_path}`" />  
        </div>
             <div class="title-and-description-holder">   
                  
                  <span class="movie-title"> {{singleMovie.title}}</span>  
                  <span class="movie-runtime"> {{singleMovie?.tagline}}</span>      
                  <span class="movie-runtime">{{Math.trunc(singleMovie?.runtime / 60)}} hr &{{' '}}
							{{singleMovie?.runtime - 60}} mins.</span>
                  <span class="movie-runtime"> {{singleMovie?.overview}}</span>

                  <div class="similar-movies-holder">   
                       <div @click="similarMoviesGoTo(similarMovies.id)"  :style="{ display:'flex',flexDirection:'column',cursor:'pointer' }"  v-for="similarMovies in singleMovieSimilar.slice(0,5)" :key="similarMovies.id">  
                            <img :style="{ height:'185px', objectFit:'contain' }" class="movie-poster" v-bind:src="`https://image.tmdb.org/t/p/original${similarMovies?.poster_path}`" />  
                            <span :style="{color:'white',fontFamily:'system-ui'}">
                                {{similarMovies.title}}
                            </span>
                            </div>
                      </div>             
            </div>       
          
      </div>
      </MovieDetailHolder>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import styled from 'vue3-styled-components'


export const MovieDetailHolder = styled.div`
background:black;
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
.small-screen-movie{
    margin-top:50px;
    height:75%;
    width:70%;
    background:black;
    border-radius:10px;
    border:10px solid #0e0e0e;
    box-shadow:4px 3px 20px 0px #3e3e3e;
    display:flex;
        flex-direction:row;
    .poster-and-other-holder{
        height:100%;
        padding: 0 160px;
        position:relative;
    
        .movie-poster{
            position:absolute;
            top:20px;
            left:70px;
            height:320px;
            border-radius:5px;
            border:1px solid #80808029;
        }
        
    }
.title-and-description-holder{
    height:100%;
    
    display:flex;
    flex-direction:column;
.movie-title{
            
            margin-top:25px;
            font-size:45px;
            font-weight:bolder;
            font-family: system-ui;
            color:white;
        }
        .movie-runtime{
            margin-top:5px;
            color:white;
            font-size:17px;
            font-weight:600;
            font-family: system-ui;
        }
        .similar-movies-holder{
            margin-top:55px;
            padding: 25px 20px;
            
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
        }
}
    
}
`



export default {
    name:'MovieId',
    computed: {...mapGetters(["singleMovie","singleMovieSimilar"])},
    components:{
MovieDetailHolder
    },
    
    mounted(){
        this.fetchMovieDetails(this.$route?.params?. movie_id)
        this.fetchMovieDetailsSimilar(this.$route?.params?. movie_id)
    },
    watch:{
       $route() {
			this.getAllDetails()
    }
    },
    
    methods:{
        ...mapActions(["fetchMovieDetails","fetchMovieDetailsSimilar"]),
        similarMoviesGoTo(similarId){
            this.$router.push(`/${this.$router.currentRoute._value.params.movie_type}/${similarId}`)
        },
        getAllDetails(){
        this.fetchMovieDetails(this.$route?.params?. movie_id)
        this.fetchMovieDetailsSimilar(this.$route?.params?. movie_id)
        }
    }

}
</script>
