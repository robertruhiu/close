<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <pageheader></pageheader>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">


            <a-layout-content style="margin-top: 5%">

                <a-row>
                    <a-col :span="16" :offset="4" class="jobdetails">
                        <div style="border-bottom: 1px solid #e8e8e8;margin-bottom: 1%;padding-bottom: 3%;">
                            <span>
                                <span style="font-weight: 700;font-size: large">{{job.title}}</span>

                                <span style="float: right"
                                      v-if="currentUserProfile.user_type ==='developer' && applied === false  ">
                                    <a-button type="primary"
                                              @click="ApplyJob(job.id,currentUserProfile.user,job.posted_by)">Apply</a-button>

                                </span>
                                <span style="float: right"
                                      v-if="currentUserProfile.user_type ==='developer' && applied === true  ">
                                    <a-button type="primary"
                                              >Manage Job application</a-button>

                                </span>
                            </span>

                        </div>
                        <div>
                            <a-alert v-if="currentUserProfile.user_type ==='developer' && applied " message="Job application successful" type="success" closeText="Close Now" />
                            <p><strong>Company name:</strong> {{job.company}}
                                <span style="margin-left: 5%">
                                    Location : {{job.location}}
                                </span>

                            </p>
                            <p>Monthly renumeration * : {{job.remuneration}}</p>

                            <p>
                                Skills looking for :
                                <span style="" v-for="skill in skills" v-bind:key="skill">
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>
                                </span>
                            </p>
                            <p>Application Deadline : {{job.deadline}}</p>
                        </div>
                        <div>
                            <p style="font-weight: 700">Job Details</p>
                            <p>{{job.description}}</p>
                        </div>
                    </a-col>
                </a-row>


            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>

    import UsersService from '@/services/UsersService'
    import Pageheader from '@/components/layout/Header.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import MarketPlaceService from '@/services/Marketplace'

    export default {
        name: "jobdetails",
        data() {
            return {
                job: {},
                skills: null,
                currentUserProfile: {},
                applied: false,
                myjobs:[]

            }
        },
        components: {
            ACol,
            ARow,
            Pageheader
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.job = (await MarketPlaceService.jobdetails(this.$route.params.jobId, auth)).data
            this.skills = this.job.tech_stack.split(',');
            this.myjobs = (await MarketPlaceService.candidatejobs(this.$store.state.user.pk, auth)).data
            if(this.myjobs.length >0){
                for(let i =0;i<this.myjobs.length;i++){
                    if(this.job.id === this.myjobs[i].job){
                        this.applied = true
                    }
                }
            }


        },
        methods: {

            ApplyJob(job, dev,recruiter) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                MarketPlaceService.applyjob(
                    {
                        job: job,
                        candidate: dev,
                        recruiter:recruiter,
                        stage: 'new',
                        selected: false
                    },
                    auth
                )
                    .then(

                        this.applied = true
                    )
                    .catch(error => {
                        return error


                    });

            }

        }
    }
</script>

<style scoped>
    .jobdetails {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        padding: 2%;

    }
</style>
