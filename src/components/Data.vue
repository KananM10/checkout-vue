<template>
    <div class="results">
      <user v-for="(user,index) in this.users" :key="index" :userInfo="user" :index="index"></user>
    </div>
</template>

<script>
  import User from './User'; 
  
  export default{
    data(){
      return{
        users: []
      }
    },
    components:{
      user: User
    },
    mounted(){      
      this.$http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    },
    methods:{
    
    }
  }
</script>

<style>
  .results{
    width: 40%;
    margin: 40px auto;
  }
</style>

