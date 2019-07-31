<template>
    <a-layout-header
            :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',
            padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">
        <div style="margin-left: 1%">

            <a-row>
                <a-col :span="24">
                            <span>
                                <span style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                {{currentUser.username |capitalize}}</span>
                                <span style="float: right" v-if="myapplicant.test_stage === 'complete'">
                                    <a-button type="primary">Schedule Interview</a-button>
                                </span>
                            </span>

                    <p style="color: white;font-size: 12px;font-weight: bold;line-height: 0;">
                                <span>
                    Job Application Stage :
                </span>
                        <a-tag color="#BA68C8" style="text-align: center;width: 4rem;">{{myapplicant.stage}}</a-tag>
                    </p>

                </a-col>


            </a-row>
        </div>


    </a-layout-header>

</template>

<script>
    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'


    export default {
        name: "CandidateHeader",
        data() {

            return {
                currentUserProfile: {},
                currentUser: {},
                allapplicant: null,
                myapplicant: null


            }
        },
        components: {

        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateId, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateId, auth)).data
            this.allapplicant = (await Marketplace.joboneapplicant(this.$route.params.candidateId, this.$route.params.jobId, auth)).data
            this.myapplicant = this.allapplicant[0]


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
