<template>
	<table border="1" cellspacing="" cellpadding="">
		<thead>
			<tr>
				<th>
					<router-link active-class="color" style="text-decoration: none;" replace :to="{name:'empGL'}">
						员工管理</router-link>&nbsp;
				</th>
				<th>
					<router-link active-class="color" style="text-decoration: none;" replace
						:to="{path:'/deptGL'}">部门管理</router-link>&nbsp;
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td colspan="3">
					<router-view name="r1"></router-view>
				</td>
			</tr>
		</tbody>

	</table>
	<!-- <router-link exact-active-class="color" style="text-decoration: none;" replace :to="{name:'empGL'}">员工管理</router-link>&nbsp;
	<router-link exact-active-class="color" style="text-decoration: none;" replace :to="{path:'/deptGL'}">部门管理</router-link>&nbsp;
	 -->

</template>

<script>

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

	.color {
		color: #FFFF00;
	}

	.color2 {
		color: #AAFFFF;
	}
</style>
