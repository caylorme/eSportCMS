Vue.use(VueMaterial)
Vue.use(VueRouter)
const Foo = { template: '<div>This is some test stuff for Foo. <b>TESTING!</b></div>' }
const Bar = { template: '<div>This is more test stuff, but for Bar. It is really great and I like it</div>' }
const routes = [
    { name: "foo", icon: "help", path: '/foo', component: Foo },
    { name: "bar", icon: "grade", path: '/bar', component: Bar }
]
const router = new VueRouter({
    routes: routes
})
var App = new Vue({
    el: '#app',
    data: {
        signedIn: false,
        routes: routes,
        show: false
    },
    router,
    methods: {},
    watch: {}
})