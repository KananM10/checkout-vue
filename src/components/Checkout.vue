<template>
  <div class="checkout">

    <form @submit.prevent="submitHandler" @reset="resetHandler">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" placeholder="Kanan" required v-model="user.name">
        </div>
        <div class="form-group col-md-6">
          <label for="inputSurname">Surname</label>
          <input type="text" class="form-control" id="inputSurname" placeholder="Mikayilov" required v-model="user.surname">
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="test@test.com" required v-model="user.email">
      </div>

      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required v-model="user.address">
      </div>

      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="inputCountry">Country</label>
          <input type="text" class="form-control" id="inputCountry" placeholder="Azerbaijan" required v-model="user.country">
        </div>
        <div class="form-group col-md-5">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" placeholder="Baku" required v-model="user.city">
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" placeholder="AZ1000" required v-model="user.zip">
        </div>
      </div>
      <div class="form-row col-md-2">
        <label for="male"><input
                            type="radio"
                            id="male"
                            value="Male"
                            v-model="user.gender"> Male</label>
        
        <label for="female"><input
                              type="radio"
                              id="female"
                              value="Female"
                              v-model="user.gender"> Female</label>
             
      </div>
      <br/>
      <button type="submit" class="btn btn-primary col-md-5">Checkout</button>
      <button type="reset" class="btn btn-primary col-md-5">Reset</button>
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        user: {
          name: '',
          surname: '',
          email: '',
          address: '',
          country: '',
          city: '',
          zip: '',
          gender: 'Male'
        }
      }
    },
    methods: {
      resetHandler(){
        this.initUser();
      },
      submitHandler(){
        this.$http.post('data.json', this.user);
        this.resetHandler();
        setTimeout(() => {
          this.$router.push('/data');      
        }, 500);
      },
      initUser(){
        this.user = {
          name: '',
          surname: '',
          email: '',
          address: '',
          country: '',
          city: '',
          zip: '',
          gender: 'Male'
        } 
      }
    }
  }
</script>

<style>
  .checkout{
    width: 50%;
    height: 100%;
    margin: 40px auto;
  }

  .btn:not(last-child){
    margin-right: 10px;
    margin-left: 30px;
  }


</style>
