Vue.use(VueMaterial)
var signedIn = true;
var App = new Vue({
    el: '#app',
    methods: {
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        }
    }
})
