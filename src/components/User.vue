<template>
  <div class="user" @click="showUser" :class="{opened: userIsShown}">
    <div class="index">{{index+1}}.</div>
    <div class="userInfo">
      <div v-for="(userKey,index) in this.user" :key="index"  >
        {{ index }} : {{userKey}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      userInfo: Object,
      index: Number
    },
    data(){
      return{
        userIsShown: false
      }
    },
    methods:{
      showUser(){
        this.userIsShown = !this.userIsShown;
      }
    },
    created(){
      let user = 
        {
          name: this.userInfo['name'],
          surname: this.userInfo['surname'],
          email: this.userInfo['email'],
          address: this.userInfo['address'],
          country: this.userInfo['country'],
          city: this.userInfo['city'],
          zip: this.userInfo['zip'],
          gender: this.userInfo['gender']
        };
        this.user = user;
    }
  }
</script>

<style>
  .user{
    border-radius: 10px;
    width: 80%;
    margin-bottom: 10px;
    padding: 10px;
    height: 40px;
    border: 0.2px solid black;
    transition: all .6s ease-in;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .opened{
    height: 210px;    
  }  

  .user:hover{
    cursor: pointer;
  }

  .index{
    height: 100%;
    width: 5%;
    margin-right: 10px;
  }

  .useInfo{
    height: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
  }

</style>
