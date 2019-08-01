<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">

        <RecruiterSider/>

        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">


            <a-layout-content>
                <MyCandidatesHeader/>


                <a-row style="padding: 1% 1%">
                    <a-col :span="16" style=" padding-left: 15px;padding-right: 15px;">
                        <div class="profile" style="padding-bottom: 2%">
                            <a-row>applicant

                                <a-col :span="22">
                                    <p>About</p>
                                    <p>{{currentUserProfile.about}}</p>
                                </a-col>
                            </a-row>
                            <br>
                            <a-row>
                                <a-col :span="6">
                                    Experience:
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.years}} years
                                    </a-tag>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Availability :
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.availabilty}}
                            </a-tag>
                            </span>
                                </a-col>
                                <a-col :span="6">
                                <span>
                                    Location :
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                 {{currentUserProfile.country}}
                            </a-tag>
                            </span>
                                </a-col>

                            </a-row>
                        </div>
                        <div class="bio">
                            <a-tabs defaultActiveKey="1">
                                <a-tab-pane key="1">
                                    <span slot="tab">
                                        <a-icon type="codepen"/>
                                        Skills
                                    </span>
                                    <p>Quizzes taken by Candidate</p>
                                    Javascript :
                                    <a-progress :percent="30"/>
                                    java:
                                    <a-progress :percent="50"/>
                                    React:
                                    <a-progress :percent="70"/>
                                    Angular:
                                    <a-progress :percent="89"/>
                                </a-tab-pane>

                                <a-tab-pane key="2">
                                    <span slot="tab">
                                        <a-icon type="solution"/>
                                        Projects portfolio
                                    </span>
                                    <div style="padding:0 2%">

                                        <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                                             v-for="item in portfolio" v-bind:key="item.id">
                                            <p style="font-weight: 700">{{item.title}}</p>
                                            <p>
                                                Tools used:
                                                <a-tag v-for="tag in item.tags" color="blue"
                                                       :key="tag">
                                                    {{tag}}
                                                </a-tag>

                                            </p>
                                            <p>{{item.description}}
                                            </p>
                                            <a :href=" item.demo" target="_blank">view project</a>

                                        </div>


                                    </div>


                                </a-tab-pane>

                                <a-tab-pane key="3">
                                    <span slot="tab">
                                        <a-icon type="hourglass"/>
                                        Work experience
                                    </span>
                                    <div style="padding:2%">
                                        <a-timeline>
                                            <a-timeline-item v-for="item in experiences" v-bind:key="item.id">
                                                <p style="font-weight: 700">{{item.title}}</p>
                                                <p><span><a-icon type="bank"/>  {{item.company}} <a-icon
                                                        type="environment"/>  {{item.location}} <a-icon
                                                        type="hourglass"/>  {{item.duration}}months</span>
                                                </p>
                                                <p>
                                                    Technologies used:
                                                    <a-tag v-for="tag in item.tags" color="blue"
                                                           :key="tag">
                                                        {{tag}}
                                                    </a-tag>

                                                </p>


                                                <p>{{item.description}}</p>

                                            </a-timeline-item>

                                        </a-timeline>


                                    </div>

                                </a-tab-pane>
                            </a-tabs>
                        </div>


                    </a-col>


                    <a-col :span="8" style="margin-top: 0.4%">
                        <div class="actions">
                            <p>Skill tags</p>
                            <p>Candidate skill tags(what candidate says they can do.You can asign a
                                project to test)
                            </p>
                            <p>
                                <span style="" v-for="skill in skilltags" v-bind:key="skill.id">
                                <a-tag color="#F0F6FD" style="color:#007BFF;">
                                    {{skill}}
                                </a-tag>
                            </span>
                            </p>

                            <p>
                                <a style="" v-if="application.project" @click="navigateTo({name:'pickedprojectdetails',params:{projectId:application.project,candidateId: currentUser.id,jobId:job.id,applicationId: application.id}})">
                                    <strong>Project Assigned:</strong>      {{application.name}}
                                                                    </a>
                                <a-button :size="small"
                                          style="background-color: #9c27b0;color: white"
                                          v-else
                                          @click="showModal()">
                                    <a-icon type="codepen"/>
                                    Assign test
                                </a-button>

                            </p>




                        </div>


                    </a-col>
                </a-row>
                <a-modal
                            title="Project assignments "
                            v-model="visible"
                            @ok="handleOk"
                            style="top: 60px;"
                            :footer="null"


                    >
                        <p style="text-align: center;">Would you like to get a project recommendation or pick a
                            project?</p>
                    <a-row :gutter="16">
                            <a-col :span="12">
                                <a @click="navigateTo({name:'projectlist'})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                             src="../../../../assets/images/pick.png">
                                        <p style="text-align: center">Pick one by myself</p>

                                    </div>

                                </a>
                            </a-col>
                            <a-col :span="12">
                                <a @click="navigateTo({name:'myprojectdetails',params:{userId: recruiter,candidateId:currentUser.id,applicationId:application.id}})">
                                    <div style="border: 1px solid #e8e8e8;padding: 2%;">
                                        <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                             src="../../../../assets/images/recommend.png">
                                        <p style="text-align: center">Get recommendation</p>

                                    </div>

                                </a>
                            </a-col>
                        </a-row>

                    <div v-if="recentprojects">
                            <p>My Recent projects</p>
                            <p v-for="project in recentprojects"
                               :key="project">
                                <a  v-if="recentprojects"
                                   @click="navigateTo({name:'mypickedprojectdetails',params:{projectId:project.id,candidateId: currentUser.id,applicationId:application.id}})">
                                    {{project.name}}
                                </a>
                            </p>


                        </div>


                    </a-modal>


            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>
    //experience structure on table
    class Experience {
        constructor(id, title, description, company, location, duration, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.company = company;
            this.duration = duration;
            this.tags = tech_used;
            this.location = location;

        }
    }

    class Portfolio {
        constructor(id, title, description, demo, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.demo = demo;
            this.tags = tech_used;


        }
    }


    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../../layout/RecruiterSider";
    import Marketplace from '@/services/Marketplace'
    import MyCandidatesHeader from "../../../layout/CandidatesManagerProfileHeader";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import Projectsservice from '@/services/Projects'


    export default {
        name: 'mycandidatesprofile',
        data() {

            return {
                currentUserProfile: {},
                currentUser: {},
                skilltags: [],
                visible: false,
                inputVisible: false,
                inputValue: '',
                application: {},
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                recentprojects: [],
                recruiter:null
            }
        },
        components: {
            ACol,
            ARow,

            RecruiterSider,
            MyCandidatesHeader


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateId, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateId, auth)).data
            this.skilltags = this.currentUserProfile.skills.split(',');
            this.portfoliolist = (await UsersService.portfolio(this.$route.params.candidateId, auth)).data
            this.experienceslist = (await UsersService.experience(this.$route.params.candidateId, auth)).data
            this.recruiter = this.$store.state.user.pk
            // current application
             this.application = (await Marketplace.retrievecandidate(this.$route.params.applicationId, auth)).data




            for (let i = 0; i < this.portfoliolist.length; i++) {
                let id = this.portfoliolist[i]
                let title = this.portfoliolist[i].title
                let description = this.portfoliolist[i].description
                let demo = this.portfoliolist[i].demo_link
                let tech_used = this.portfoliolist[i].tech_tags.split(',');

                let one_portfolio = new Portfolio(
                    id, title, description, demo, tech_used
                );
                this.portfolio.push(one_portfolio)


            }
            for (let i = 0; i < this.experienceslist.length; i++) {
                let id = this.experienceslist[i]
                let title = this.experienceslist[i].title
                let description = this.experienceslist[i].description
                let company = this.experienceslist[i].company
                let location = this.experienceslist[i].location
                let duration = this.experienceslist[i].duration
                let tech_used = this.experienceslist[i].tech_tags.split(',');

                let one_experience = new Experience(
                    id, title, description, company, location, duration, tech_used
                );
                this.experiences.push(one_experience)


            }
            // recent projects
            this.recentprojects = (await Projectsservice.myrecentprojects(this.$store.state.user.pk, auth)).data


        },
        methods: {


            onChange(checkedValues) {
                this.test = checkedValues
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
            showModal() {
                this.visible = true

            },
            handleOk() {

                this.visible = false
            },
        },

    }

</script>

<style scoped>
    .bio {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 50vh;
        margin: 1%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 2%;
        padding-bottom: 5%;
    }

    .actions {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 30vh;
        margin: 1%;
        padding: 4%;
    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;
        padding: 4%;
    }

</style>
