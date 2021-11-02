

<template>
	<router-link replace :to="{name:'home1'}">toHome</router-link>&nbsp;
	<router-link replace :to="{path:'/about'}">toAbout</router-link>&nbsp;
	<router-link replace :to="emp">toEmp</router-link>&nbsp;
	<router-link exact-active-class="x y" replace :to="{path:'/dept',query:{deptId:1001,deptname:'财务'}}">pathDept</router-link>&nbsp;
	
	
	<hr >
	<button type="button" @click="toEmp">toEmp</button>
	<!-- <router-link replace :to="{name:'dept',params:{deptId:1002,deptname:'业务'}}">nameDept</router-link> -->
	<router-view name="r1"></router-view>
	<hr >
	<router-view name="r2"></router-view>
</template>
<script>
	export default{
		data(){
			return{
				emp:'/emp'
			}
		},
		methods:{
			toEmp(){
				this.$router.push({path:'/emp'})
			}
		}
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.x{
	font-size: 60px;
}
.y{
	color: azure;
}
</style>
