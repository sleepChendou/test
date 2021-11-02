import {
	createRouter,
	createWebHashHistory,
	createWebHistory
} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Emp from '../components/Emp.vue'
import Dept from '../components/Dept.vue'
import DeptAdd from '../components/DeptAdd.vue'
import DeptEdit from '../components/DeptEdit.vue'
import EmpInfo from '../components/EmpInfo.vue'


const routes = [{
		path: "/",
		name: "home1",
		components: {"r1":Home}
	},
	{
		path: "/about",
		name: "about1",
		components:{"r1":About} 
	},
	{
		path: "/emp",
		name: "emp",
		components: {"r2":Emp},
		children:[
			{path:'/emps/:empid',
			component:EmpInfo
			}
		]
	},
	{
		path: "/dept",
		name: "dept",
		components:{"r2":Dept},
		children:[
			{path:'/dept//deptAdd',component:DeptAdd},
			{path:'/dept/deptEdit',component:DeptEdit}
			]
			/* children:[
				{path:'/deptAdd',component:DeptAdd},
				{path:'/deptEdit',component:DeptEdit}
				] */
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router