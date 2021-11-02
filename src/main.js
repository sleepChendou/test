import {
	createApp
} from 'vue'
import App from './App.vue'
// import router from './router'
import {
	createRouter,
	createWebHashHistory,
	createWebHistory
} from 'vue-router'

import empGL from './components/EmpGl.vue'
import deptGL from './components/DeptGL.vue'
import insertEmp from './components/InsertEmp.vue'
import selectEmp from './components/SelectEmp.vue'
import updateEmp from './components/UpdateEmp.vue'
import insertDept from './components/InsertDept.vue'
import selectDept from './components/SelectDept.vue'
import updateDept from './components/UpdateDept.vue'


const routes = [{path:"/",redirect:'/empGL'},
		{
		path: "/empGL",
		name: "empGL",
		components: {"r1":empGL},
		redirect:"/insertEmp",
		children: [{
				path: '/insertEmp',
				component: insertEmp
			},
			{
				path: '/selectEmp',
				component: selectEmp
			},
			{
				path: '/updateEmp',
				component: updateEmp
			},
		]
	},
	{
		path: "/deptGL",
		name: "deptGL",
		components: {"r1":deptGL},
		redirect:"/insertDept",
		children: [{
				path: '/insertDept',
				component: insertDept
			},
			{
				path: '/selectDept',
				component: selectDept
			},
			{
				path: '/updateDept',
				component: updateDept
			},
		]
	}

]


const router = createRouter({
	history: createWebHashHistory(),
	routes
})

createApp(App).use(router).mount('#app')
