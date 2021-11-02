<template>
	<!-- 	<ul style="list-style-type: none;">
		<li>
			<router-link style="text-decoration: none;" exact-active-class="color2" to="/insertEmp">添加员工</router-link>&nbsp;			
		</li>
		<li>
			<router-link style="text-decoration: none;" exact-active-class="color2" to="/selectEmp">查询员工</router-link>&nbsp;
		</li>
		<li>
			<router-link style="text-decoration: none;" exact-active-class="color2" to="/updateEmp">修改员工</router-link>&nbsp;
		</li>
	</ul>
	 -->

	<table border="1">
		<tbody>
			<tr>
				<td>
					<router-link style="text-decoration: none;" exact-active-class="color2" to="/insertEmp">添加员工
					</router-link>&nbsp;


				</td>
				<td rowspan="3">
					<router-view></router-view>
				</td>
			</tr>
			<tr>
				<td>
					<router-link style="text-decoration: none;" exact-active-class="color2" to="/updateEmp">修改员工
					</router-link>&nbsp;

				</td>
			</tr>
			<tr>
				<td>
					<router-link style="text-decoration: none;" exact-active-class="color2" to="/updateDept">修改员工
					</router-link>&nbsp;
				</td>
			</tr>


		</tbody>


	</table>



	<!-- <router-view></router-view> -->
</template>

<script>
</script>

<style>
</style>
