<template>
	<label v-for="item in list">
		<img :src="'http://localhost:8089/vueupload/'+item" />
	</label>
	{{list}}
</template>

<script>
	export default{
		data(){
			return{
				list: typeof(this.$route.query.list)==="string"?Array(this.$route.query.list):this.$route.query.list
			}
		}
	}
</script>

<style>
</style>
