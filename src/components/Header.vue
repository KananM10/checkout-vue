<template>
	<div class="header">
		<div class="header-heading">Checkout Project</div>
		<div class="navbar-nav">
			<router-link to="/" activeClass="active" class="nav-item" exact>Checkout</router-link>
			<router-link to="/data" activeClass="active" class="nav-item" exact>Data</router-link>
		</div>
	</div>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style>
	.header{
		height: 60px;
		width: 100%;
		background-color: beige;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.header-heading{
		font-size: 20px;
		margin: 0 200px 0 40px;
	}

	.navbar-nav{
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.nav-item{
		color: black;
		margin: 0 10px;
		border-radius: 10px;
		padding: 5px 10px;

	}


	.nav-item:hover{
		color: black;
		margin: 0 10px;
		text-decoration: none;
	}

	.active{
		background-color: lightgrey;
	}

</style>