<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <pageheader></pageheader>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginTop: '1rem' }">


            <a-layout-content style="margin-top: 3%">


                <a-row style="padding: 1% 1%">
                    <a-col :span="6" style=" ">
                        <div class="profile" style="padding-bottom: 2%">
                            <a-avatar class="poolavatar" shape="square"
                                      style="">
                                {{currentUser.first_name[0].toUpperCase() }} {{currentUser.last_name[0].toUpperCase()}}
                            </a-avatar>
                            <div style="padding: 4%">
                                <p>About</p>
                                <p>{{currentUserProfile.about}}</p>

                                <br>
                                <p>Experience :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.years}} years
                                    </a-tag>
                                </p>
                                <p>
                                    Availability :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.availabilty}}
                                    </a-tag>

                                </p>
                                <p>Location :
                                    <a-tag color="#F0F6FD" style="color:#007BFF;">
                                        {{currentUserProfile.country}}
                                    </a-tag>

                                </p>

                            </div>


                        </div>


                    </a-col>
                    <a-col :span="14" style=" ">
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
                    <a-col :span="4">
                        <div class="profile" style="padding: 4%;padding-bottom: 7%">
                            <img src="../../../assets/images/profile.png"
                                 style="width: 60%;margin-left: 17%;padding-bottom: 2rem">
                            <p style="text-align: center;">I like this profile</p>
                            <div v-for="dev in pickeddevs" :key="dev">

                                <a-button v-if="dev === currentUser.id" style="margin-left: 1rem;" type="primary"
                                          @click="navigateTo({name:'mycandidates'})" >
                                    manage candidate
                                </a-button>

                            </div>
                            <a-button v-if="picked === false" style="margin-left: 1rem;" type="primary"
                                      @click="pickcandidate(currentUser.id)">
                                Add to my Candidates
                            </a-button>



                        </div>
                    </a-col>


                </a-row>


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
    import Pageheader from '@/components/layout/Header.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import MarketPlaceService from '@/services/Marketplace'


    export default {
        name: 'candidatetalentprofile',
        data() {

            return {
                currentUserProfile: {},
                currentUser: {},
                skilltags: [],
                visible: false,
                inputVisible: false,
                inputValue: '',
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                picked: false,
                pickeddevs: []
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
            this.currentUser = (await UsersService.retrieveuser(this.$route.params.candidateProfileID, auth)).data
            this.currentUserProfile = (await UsersService.currentuser(this.$route.params.candidateProfileID, auth)).data
            this.skilltags = this.currentUserProfile.skills.split(',');
            this.portfoliolist = (await UsersService.portfolio(this.$route.params.candidateProfileID, auth)).data
            this.experienceslist = (await UsersService.experience(this.$route.params.candidateProfileID, auth)).data


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

            MarketPlaceService.mydevelopers(this.$store.state.user.pk, auth)
                .then(resp => {
                        if (resp.data.length !== 0 ) {


                            for (let i = 0; i < resp.data.length; i++) {
                                this.pickeddevs.push(Number(resp.data[i].developer))
                            }
                            for (let j = 0; j < this.pickeddevs.length; j++) {
                                if (this.currentUser.id === this.pickeddevs[j]) {
                                    this.picked = true
                                }
                            }
                        }


                    }
                )
                .catch();


        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },

            pickcandidate(dev) {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }

                this.pickeddevs.push(dev)

                let picked_developers = {
                    owner:this.$store.state.user.pk,
                    developer: dev,
                    paid:false,
                    stage:'new'
                }

                MarketPlaceService.pickdeveloper(picked_developers, auth)
                    .then(
                        this.picked = true
                    )
                    .catch(error => {
                        return error


                    });


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


        },

    }

</script>

<style scoped>
    .bio {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 50vh;
        margin-right: 1%;
        margin-left: 1%;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 1%;
        margin-top: 0.2%;
        padding-bottom: 5%;
    }

    .actions {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        min-height: 30vh;

        padding: 4%;
    }

    .profile {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: white;
        margin: 1%;

    }

    .poolavatar {
        width: 100%;
        height: 8rem;
        line-height: 124px;
        font-size: 30px;
        background-color: #0679FB;
        border-radius: 0;


    }

</style>
