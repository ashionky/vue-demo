import Vue from 'vue'
import Router from 'vue-router'
import home from './../components/home'
import studentlist from './../components/student/list'
import teacherlist from './../components/teacher/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/student/list',
      component: studentlist,
    },
    {
      path: '/teacher/list',
      component: teacherlist,
    }
  ]
})
