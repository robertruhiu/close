<template>

            <a-layout-sider
                breakpoint="lg"
                collapsedWidth="0"
                @collapse="onCollapse"
                @breakpoint="onBreakpoint"
                style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white;"

        >
            <router-link to="/">

                <img v-bind:style="logo"
                     style="width: 120px;height: 31px;margin-top: 7%;margin-bottom: 6%;margin-left: 9%"
                     v-bind:src="defaultlogo"
                >

            </router-link>
            <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh">
                <a-menu-item key="1">
                    <router-link to="/recruiter">
                        <a-icon type="dashboard"/>
                        <span>Dashboard</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="5">
                    <a v-on:click="showJobDrawer">
                        <a-icon type="edit"/>
                        <span>Post a job</span>
                    </a>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link to="/managejobs">
                        <a-icon type="project"/>
                        <span>My jobs</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <router-link to="/mycandidates">
                        <a-icon type="team"/>
                        <span>My Candidates</span>
                    </router-link>
                </a-menu-item>

                <a-menu-item key="4">
                    <router-link to="/talent">
                        <a-icon type="star"/>
                        <span>Talent Pool</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item key="8">
                    <router-link to="/calendar">
                        <a-icon type="calendar"/>
                        <span>Calendar</span>
                    </router-link>

                </a-menu-item>

                <a-menu-item key="6">
                    <router-link to="/talent">
                        <a-icon type="user"/>
                        <span>My profile</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item key="7">
                    <a  @click="logout">
                        <a-icon type="export"/>
                        <span>  Logout</span>
                    </a>

                </a-menu-item>


            </a-menu>
                <!----Post Job drawer------->
                <a-drawer
                        width=640
                        placement="right"
                        :closable="false"
                        @close="onCloseJobDrawer"
                        :visible="jobdrawervisible"
                >

                    <p>Job drawer</p>


                </a-drawer>
        </a-layout-sider>




</template>
<script>
    import Largelogo from '@/assets/logobg.svg'

    export default {
        name: 'calendarsiderfixed',
        data() {

            return {
                defaultlogo: Largelogo,
                jobdrawervisible: false,
            }
        },
        methods: {
            onCollapse(collapsed) {
                return collapsed;
            },
            onBreakpoint(broken) {
                return broken;
            },
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
            showJobDrawer() {
                this.jobdrawervisible = true
            },
            onCloseJobDrawer() {
                this.jobdrawervisible = false
            },
        }
    }
</script>

<style scoped>





</style>
