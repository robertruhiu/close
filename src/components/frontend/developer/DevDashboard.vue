<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <CandidateSider/>

        <a-layout>

            <a-layout-content>
                {{currentUserProfile.user_type}}
                <br>
                {{currentUserProfile}}




            </a-layout-content>

        </a-layout>
    </a-layout>
</template>

<script>

    import UsersService from '@/services/UsersService'
     import CandidateSider from "../../layout/CandidateSider";
    export default {
        name: "DevDashboard",
        data() {
            return {
                currentUserProfile :{}



            }
        },
        components: {
            CandidateSider,



        },
        async mounted() {
            const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk,auth)).data

        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },

        },
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
</style>
