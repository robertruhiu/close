<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <RecruiterSider/>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem',marginLeft: '200px' }">


            <a-layout-content style="margin-top: 5%">
                {{projects}}
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import Projectsservice from '@/services/Projects'
    import MarketPlaceService from '@/services/Marketplace'
    export default {
        name: "projectlist",
        data() {
            return {
                projects: null,
                job: {},

            }
        },
        components: {

            RecruiterSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };


            Projectsservice.projects(auth)
                .then(resp => {
                    this.projects = resp



                })
                .catch()





        },
    }
</script>

<style scoped>

</style>
