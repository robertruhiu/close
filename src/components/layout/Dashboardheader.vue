<template>

    <a-layout-header style="border-bottom: 1px solid #e8e8e8;background-color: white;padding: 0;height: 61px "
                     >

                <span style="float: right;padding-right: 5%">
                    <a  @click="logout">
                        <a-icon type="export"/>
                        <span>  Logout</span>
                    </a>
                </span>

    </a-layout-header>


</template>

<script>

    export default {
        name: "Dashboardheader",
        methods: {

            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$store.dispatch('setisLoggedIn', false)
                this.$store.dispatch('setUsertype', null)
                this.$store.dispatch('setUser_id', null)
                this.$router.push({
                    name: 'home'
                })
            },
        }

    }
</script>

<style scoped>

    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;

        margin: 0 24px 16px 0;
        float: left;
    }
</style>
