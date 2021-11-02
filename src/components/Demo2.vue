<template>
	<div>
		<!-- 请使用Element UI定义一个表单，用于输入学生姓名、性别、出生日期、年龄、幸运颜色、个人经历等信息，并提交到Controller，要求如下：
		A、选择生出日期时，自动算出年龄
		B、幸运颜色使用el-color-picker组件
		C、个人经历为支持多行输入，并自动改变高度
		D、照片最多只能上传3张
		E、姓名、性别、出生日期为必须
		F、个人经历不能超过500个字  -->

		<el-form ref="empForm" :model="stu" :rules="rules" label-width="120px" label-position="left" size="small">

			<el-form-item prop="name" label="姓名">
				<el-input style="width: 200px;" v-model="stu.name" placeholder="请输入学生姓名" clearable />
			</el-form-item>

			<el-form-item prop="sex" label="性别">
				<el-radio-group v-model='stu.sex' size="small">
					<el-radio-button label="男">男生</el-radio-button>
					<el-radio-button label="女">女生</el-radio-button>
				</el-radio-group>
			</el-form-item>

			<el-form-item prop="birthday" label="出生日期">
				<el-date-picker placeholder="请输入出生日期" v-model="stu.birthday" type="date"></el-date-picker>
			</el-form-item>

			<el-form-item prop="age" label="年龄">
				<el-input style="width: 200px;" v-model="stu.age" placeholder="请输入年龄" clearable />
			</el-form-item>

			<el-form-item prop="color" label="幸运颜色">
				<el-color-picker v-model="stu.color" />
			</el-form-item>

			<el-form-item prop="intro" label="个人经历">
				<el-input style="width: 300px;" maxlength="5" show-word-limit v-model="stu.intro" autosize
					type="textarea" :rows="4" placeholder="请输入个人经历" prefix-icon="el-icon-view" />
			</el-form-item>

			<!-- <el-form-item label="照片">
				<el-upload action="#" :on-remove="handleRemove" ref="upload" :on-preview="handlePictureCardPreview"
					list-type="picture-card" :auto-upload="false" :on-change="handleUpload" :before-remove="beforeRemove"
					:multiple="true">
					<template #default>
						<i class="el-icon-plus"></i>
					</template>
				</el-upload>
				<el-dialog v-model="dialogVisible">
					<img :src="dialogImageUrl" alt="" style="width: 80%!important;height: 80%!important;">
				</el-dialog>
				<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器1</el-button>
			</el-form-item> -->

		</el-form>
	</div>
</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue'

	export default {
		data() {
			//定义规则NumberPattern，限制输入0-100的整数，将在cfg_rules中引用
			const NumberPattern = new RegExp(/^([1-9]?\d|100)$/);
			return {
				stu: {
					name: '',
					sex: '',
					birthday: '',
					age: '',
					color: '',
					intro: ''

				},
				rules: {
					name: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 20,
							message: '必须在6~20个字符之间',
							trigger: 'blur'
						}
					],
					sex: {
						required: true,
						message: '请选择性别',
						trigger: 'blur'
					},
					birthday: {
						type: 'date',
						required: true,
						message: '请选择出生日期',
						trigger: 'blur'
					},
					age: [{
							required: !0,
							message: "不能为空"
						},
						{
							type: !"number",
							message: "必须为数字",
							trigger: "blur"
						},
						{
							pattern: NumberPattern,
							message: "0-100之间的整数",
							trigger: "blur"
						}
					],
					intro:{
						max:2,
						message: "最大2222",
						trigger: "change"
					}

				}
			}
		}
	}
</script>

<style>
</style>
