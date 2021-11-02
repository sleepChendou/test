<template>
	<h1>Emp Vue</h1>
	<router-link v-for="(item,index) in emps" :to="item.url">{{item.ename}}&nbsp;&nbsp;</router-link>
	<router-view></router-view>
</template>

<script>
	export default{
		data(){
			return{
				emps:[
					{empid:1001,ename:'emp1',phone:'123451',url:"/emps/1001"},
					{empid:1002,ename:'emp2',phone:'123452',url:"/emps/1002"},
					{empid:1003,ename:'emp3',phone:'123453',url:"/emps/1003"},
					{empid:1004,ename:'emp4',phone:'123454',url:"/emps/1004"}
					
				]
			}
		}
	}
</script>

<style>
</style>
