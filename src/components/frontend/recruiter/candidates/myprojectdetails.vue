<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <RecruiterSider/>


        <a-layout :style="{backgroundColor:'#f8fafb',marginLeft: '200px' }">


            <a-layout-content>
                <MycandidatesHeader/>
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',maxWidth:'72rem',
                marginTop:'1%',marginLeft: '1%',marginRight:'1%' }">

                    <a-row gutter="8">
                        <a-col :span="14">

                            <a-carousel v-if="project.hasvideo === false" autoplay style="border:1px solid #e8e8e8;">
                                <div v-if="project.projectimage1 "><img :src="project.projectimage1"/></div>
                                <div v-if="project.projectimage2 "><img :src="project.projectimage2"/></div>
                                <div v-if="project.projectimage3 "><img :src="project.projectimage3"/></div>
                                <div v-if="project.projectimage4 "><img :src="project.projectimage4"/></div>
                                <div v-if="project.projectimage5 "><img :src="project.projectimage5"/></div>
                                <div v-if="project.projectimage6 "><img :src="project.projectimage6"/></div>
                                <div v-if="project.projectimage7 "><img :src="project.projectimage7"/></div>
                                <div v-if="project.projectimage8 "><img :src="project.projectimage8"/></div>
                                <div v-if="project.projectimage9 "><img :src="project.projectimage9"/></div>
                                <div v-if="project.projectimage10 "><img :src="project.projectimage10"/></div>
                            </a-carousel>
                            <div v-if="project.hasvideo">
                                <youtube :video-id="project.projectimage2" :player-vars="playerVars"></youtube>
                            </div>
                            <div style="border:1px solid #e8e8e8;padding: 2%;margin-top: 2%;">
                                <h4><strong>Project name:</strong> {{project.name}}</h4>
                                <p>{{project.description}}</p>

                            </div>


                        </a-col>
                        <a-col :span="10" style="padding: 0 1%;">
                            <div style="border:1px solid #e8e8e8;;padding: 3%;">
                                <p style="margin-left: 5%"><strong>Requirements</strong></p>
                                <ol>
                                    <li v-if="project.requirement1">{{project.requirement1}}</li>
                                    <li v-if="project.requirement2">{{project.requirement2}}</li>
                                    <li v-if="project.requirement3">{{project.requirement3}}</li>
                                    <li v-if="project.requirement4">{{project.requirement4}}</li>
                                    <li v-if="project.requirement5">{{project.requirement5}}</li>
                                    <li v-if="project.requirement6">{{project.requirement6}}</li>
                                    <li v-if="project.requirement7">{{project.requirement7}}</li>
                                    <li v-if="project.requirement8">{{project.requirement8}}</li>
                                    <li v-if="project.requirement9">{{project.requirement9}}</li>
                                    <li v-if="project.requirement10">{{project.requirement10}}</li>


                                </ol>
                                <div style="margin-left: 5%" v-if="application.project === null">
                                    <a-button type="primary" @click="AssignProject(project.id,ApplicationId,project.name)">Assign
                                        project to {{candidate.username}}
                                    </a-button>
                                </div>

                            </div>


                        </a-col>
                    </a-row>


                </div>

            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>


    import RecruiterSider from "../../../layout/RecruiterSider";
    import Projectsservice from '@/services/Projects'
    import Marketplace from '@/services/Marketplace'
    import ACol from "ant-design-vue/es/grid/Col";
    import MycandidatesHeader from '@/components/layout/MaincandidatesHeader'
    import UsersService from '@/services/UsersService'

    export default {
        name: "myprojectdetails",
        data() {
            return {
                project: null,
                job: {},
                playerVars: {
                    autoplay: 1
                },
                candidate: {},
                ApplicationId: null,
                application : {},


            }
        },
        components: {
            ACol,
            MycandidatesHeader,
            RecruiterSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };

            const DevId = this.$store.state.route.params.candidateId
            this.ApplicationId = this.$store.state.route.params.applicationId
            const project_id = this.$store.state.route.params.projectId
            // current application

            this.application = (await Marketplace.retrievecandidate(this.ApplicationId, auth)).data



            this.candidate = (await UsersService.retrieveuser(DevId, auth)).data
            if(project_id ){
                this.project = (await Projectsservice.projectdetails(project_id, auth)).data


            }else {
                Projectsservice.recommendedprojects(this.$store.state.user.pk, auth)
                .then(resp => {
                    this.project = resp.data[0]


                })
                .catch()


            }





        },
        methods: {
            AssignProject(project, application,name) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                };
                Marketplace.candidatemanager(application, {test_stage: 'invite sent', project: project,name:name}, auth)
                this.$router.push({
                    name: 'mycandidates',

                })

            }
        }
    }
</script>

<style scoped>
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 50vh;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>
