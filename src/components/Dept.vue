<template>
	<h1>Dept Vue</h1>
	{{this.$route.params.deptname}}<hr/>
	{{this.$route.query.deptname}}<hr >
	<router-link to="/dept/deptAdd">DeptAdd</router-link>&nbsp;&nbsp;
	<router-link to="/dept/deptEdit">DeptEdit</router-link>
	<!-- <router-link to="/deptAdd">DeptAdd</router-link>&nbsp;&nbsp;
	<router-link to="/deptEdit">DeptEdit</router-link> -->
	<router-view></router-view>
</template>

<script>
</script>

<style>
</style>
