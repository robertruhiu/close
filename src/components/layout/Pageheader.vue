<template>
    <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">
        <a-row>
            <a-col :span="6">
                <span style="color: white;font-size: 17px;font-weight:bold">{{greeting}}
                    {{this.$store.state.user.first_name | capitalize}}</span>
                <p style="color: white;font-size: 12px;font-weight: bold;line-height: 3px">4 interviews
                    Today</p>
            </a-col>


            <a-col :span="4">
                <a-card class="events">
                    <p style="line-height: 0">9:00 am - 10:30 am</p>
                    <p>Dennis Ruhiu</p>

                </a-card>
            </a-col>
            <a-col :span="4">
                <a-card class="events">
                    <p style="line-height: 0">1:00 pm - 2:00 pm</p>
                    <p>Test User</p>

                </a-card>
            </a-col>
            <a-col :span="4">
                <a-card class="events">
                    <p style="line-height: 0">2:30 pm - 3:30 pm</p>
                    <p>Jessica Freeman</p>

                </a-card>
            </a-col>
            <a-col :span="4">
                <a-card class="events">
                    <p style="line-height: 0">2:30 pm - 3:30 pm</p>
                    <p>Jessica Freeman</p>

                </a-card>
            </a-col>


        </a-row>

    </a-layout-header>

</template>

<script>
    import UsersService from '@/services/UsersService'

    export default {
        name: "Pageheader",
        data() {

            return {
                currentUserProfile: null,

                greeting: null,

            }
        },
        async mounted() {
            let today = new Date()
            let curHr = today.getHours()

            if (curHr < 12) {
                this.greeting = 'Good Morning'

            } else if (curHr < 18) {
                this.greeting = 'Good Afternoon'

            } else {
                this.greeting = 'Good Evening'

            }

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data


        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
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
            navigateTo(route) {
                this.$router.push(route)
            },


        },
    }
</script>

<style scoped>


    .events {
        width: 11rem;
        height: 5rem;
        margin-top: 0.5rem;
        border-radius: 0;
        background-color: #0064ff;
        border: 0;
        color: white;

    }


</style>
