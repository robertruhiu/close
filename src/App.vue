<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import UsersService from '@/services/UsersService'

    export default {
        name: 'app',
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            UsersService.authenticated(this.$store.state.user.pk, auth)
                .then()
                .catch(error => {
                        this.$store.dispatch('setToken', null)
                        this.$store.dispatch('setUser', null)
                        this.$store.dispatch('setisLoggedIn', false)
                        this.$store.dispatch('setUsertype', null)
                        this.$store.dispatch('setUser_id', null)
                        this.$router.push({
                            name: 'home'
                        })


                    }
                )


        }


    }
</script>

<style>
    #app {
        display: grid;
        background-color: white;

    }
</style>
