<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <RecruiterSider/>

        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">


            <a-layout-content>
                <Pageheader/>


                <div :style="{ padding: '5px', background: '#fff', }">
                    <a-row>
                        <a-col span="24">

                            <h3 style="margin-left: 1.5rem;color: #1976D2;font-weight: bold">What would you like to
                                do today?</h3>
                        </a-col>

                    </a-row>
                    <a-row :gutter="16"
                           style="padding-right: 2rem;padding-left: 1.5rem;padding-bottom: 1.5rem;">
                        <a v-on:click="showDrawer">
                            <a-col class="boxes" :span="6">

                                <a-row class="ant-card actioncards">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/edit-tools.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Post a Job</p>
                                        <p style="margin: 0;">Get devs for your vacancy</p>


                                    </a-col>

                                </a-row>

                            </a-col>
                        </a>


                        <router-link to="managejobs">
                            <a-col class="boxes" :span="6">

                                <a-row class="ant-card actioncards">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/cv.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Manage Jobs</p>
                                        <p style="margin: 0;">Monitor and manage job applications</p>


                                    </a-col>


                                </a-row>

                            </a-col>
                        </router-link>
                        <router-link to="mycandidates">

                            <a-col class="boxes" :span="6">
                                <a-row class="ant-card actioncards">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/statistics.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Manage My Candidates</p>
                                        <p style="margin: 0;">Manage and track devs picked from talent pool</p>


                                    </a-col>


                                </a-row>
                            </a-col>
                        </router-link>
                        <router-link to="talent">
                            <a-col class="boxes" :span="6">
                                <a-row class="ant-card actioncards">
                                    <a-col span="8">
                                        <img class="poolavatar" src="../../../assets/images/star.svg">
                                    </a-col>
                                    <a-col span="16">
                                        <p>Browse the Talent Pool</p>
                                        <p style="margin: 0;">View more devs from our pool</p>


                                    </a-col>


                                </a-row>
                            </a-col>
                        </router-link>

                    </a-row>

                </div>
                <div style="padding: 2% 1%;background-color: white;margin: 2% 1%">
                    <a-row style="margin-left: 1.5rem;margin-right: 1.5rem;margin-bottom: 1rem">
                        <a-col :span="12">

                            <h3 style="color: #1976D2;font-weight: bold">Your Recent Jobs</h3>


                        </a-col>
                        <a-col :span="12">
                            <router-link to="managejobs">
                                <a-button type="primary" style="float: right">
                                    See more
                                    <a-icon type="right"/>
                                </a-button>
                            </router-link>


                        </a-col>

                    </a-row>
                    <a-row :gutter="16" style="margin-left: 1rem;margin-right: 1rem;margin-bottom: 1rem">


                        <a-col :span="12" v-for="job in myjobs" v-bind:key="job.id">
                            <a-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                                <h3 style="font-weight: bold">{{job.title}}</h3>
                                <p>
                                              <span style="" v-for="skill in job.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                </p>

                                <p>
                                    <a-alert style="color:#1976D2;border: 0 "
                                             message="Applicant Tracker"
                                             type="info"/>
                                </p>

                                <p>
                                    <a-row>
                                        <a-col :span="8">
                                                            <span>
                                                                Applicants
                                                                <a-tag color="#9fc6f2"
                                                                       style="color:white;border-radius: 50%">{{job.applicants}}</a-tag>
                                                            </span>


                                        </a-col>
                                        <a-col :span="8">
                                            <span>
                                                Testing Stage

                                            <a-tag color="#92DDDD"
                                                   style="color:white;border-radius: 50%">{{job.test}}</a-tag>
                                            </span>

                                        </a-col>
                                        <a-col :span="8">
                                            <span>
                                                  Interview Stage
                                            <a-tag color="#DA92D0" style="color:white;border-radius: 50%">{{job.interview}}</a-tag>
                                            </span>

                                        </a-col>
                                    </a-row>

                                </p>
                                <div style="text-align: center">

                                    <a-button style="width: 60%"
                                              @click="navigateTo({name:'job',params:{jobId: job.id}})"
                                              type="primary" block>Manage Job
                                    </a-button>

                                </div>


                            </a-card>
                        </a-col>

                    </a-row>


                </div>
                <!----Post Job drawer------->
                <a-drawer
                        title="Create a new job"
                        :width="720"
                        @close="onClose"
                        :visible="visible"
                        :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
                >
                    <form-wizard @on-complete="onComplete"
                                 shape="tab"
                                 color="#007BFF"
                                 title=""
                                 subtitle=""
                    >
                        <tab-content title="Job details"
                                     icon="ti-user">
                            <a-form :form="form">
                                <a-row :gutter="32">
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Title">
                                            <a-input v-model="job.title">

                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Job role">
                                            <a-select

                                                    placeholder="Select a option"
                                                    v-model="job.job_role"
                                            >
                                                <a-select-option value="Full Stack Developer">
                                                    Full Stack Developer
                                                </a-select-option>
                                                <a-select-option value="Frontend Developer">
                                                    Frontend Developer
                                                </a-select-option>
                                                <a-select-option value="Backend  Developer">
                                                    Backend Developer
                                                </a-select-option>
                                                <a-select-option value="Android  Developer">
                                                    Android Developer
                                                </a-select-option>
                                                <a-select-option value="Graphic Designer">
                                                    Graphic Designer
                                                </a-select-option>
                                                <a-select-option value="IOS Developer">
                                                    IOS Developer
                                                </a-select-option>
                                                <a-select-option value="Data Scientist">
                                                    Data Scientist
                                                </a-select-option>
                                            </a-select>
                                        </a-form-item>


                                    </a-col>


                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Developer Experience">
                                            <a-select

                                                    placeholder="Select a option"
                                                    v-model="job.dev_experience"
                                            >
                                                <a-select-option value="Entry">
                                                    Entry
                                                </a-select-option>
                                                <a-select-option value="Junior">
                                                    Junior
                                                </a-select-option>
                                                <a-select-option value="Mid-Level">
                                                    Mid-Level
                                                </a-select-option>
                                                <a-select-option value="Senior">
                                                    Senior
                                                </a-select-option>

                                            </a-select>
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Contract type">
                                            <a-select

                                                    placeholder="Select a option"
                                                    v-model="job.engagement_type"
                                            >
                                                <a-select-option value="Full-time">
                                                    Full-time
                                                </a-select-option>
                                                <a-select-option value="Part-time">
                                                    Part-time
                                                </a-select-option>
                                                <a-select-option value="Contract">
                                                    Contract
                                                </a-select-option>
                                                <a-select-option value="Remote">
                                                    Remote
                                                </a-select-option>
                                                <a-select-option value="Freelance">
                                                    Freelance
                                                </a-select-option>

                                            </a-select>
                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Location">
                                            <country-select v-model="job.location"
                                                            class="ant-input"
                                            />
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Salary range per month ">
                                            <a-input placeholder="1000-1500$" v-model="job.remuneration">

                                            </a-input>
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Deadline ">
                                            <a-date-picker v-model="job.deadline"
                                                           placeholder="Applications deadline"
                                                           format="YYYY-MM-DD HH:mm:ss"
                                                           :disabledDate="disabledDate"
                                                           :disabledTime="disabledDateTime"
                                                           :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                                            />


                                        </a-form-item>


                                    </a-col>
                                    <a-col :span="12" style="padding-right: 1%">
                                        <a-form-item label="Developers needed ">
                                            <a-input-number :min="1" v-model="job.num_devs_wanted"/>


                                        </a-form-item>


                                    </a-col>


                                </a-row>


                            </a-form>
                        </tab-content>
                        <tab-content title="Skills of interest"
                                     icon="ti-settings">
                            <a-row :gutter="16">
                                <a-col :span="24">

                                    <a-form-item>
                                        <p>Pick skills you are looking for</p>
                                        <div>

                                            <template v-for=" tag in recommendationtags">
                                                <a-checkable-tag style="border-color: blue;font-size: 14px"
                                                                 :key="tag"
                                                                 :checked="selectedTags.indexOf(tag) > -1"
                                                                 @change="(checked) => handleChange(tag, checked)"
                                                >
                                                    {{tag}}
                                                </a-checkable-tag>
                                            </template>
                                        </div>


                                    </a-form-item>
                                </a-col>
                                <a-col :span="24">
                                    <a-form-item
                                            label="Job description "
                                            :label-col="{ span: 24 }"
                                            :wrapper-col="{ span:  24}"
                                    >

                                        <a-textarea v-model="job.description"
                                                    placeholder="A bit about the job"
                                                    :rows="6"/>
                                    </a-form-item>

                                </a-col>
                            </a-row>
                        </tab-content>
                        <tab-content title="Job review"
                                     icon="ti-settings">
                            <a-form :form="form">
                                <a-row :gutter="16">
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Title">
                                            <a-input v-model="job.title">

                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Job role">
                                            <a-select

                                                    placeholder="Select a option and change input text above"
                                                    v-model="job.job_role"
                                            >
                                                <a-select-option value="Full Stack Developer">
                                                    Full Stack Developer
                                                </a-select-option>
                                                <a-select-option value="Frontend Developer">
                                                    Frontend Developer
                                                </a-select-option>
                                                <a-select-option value="Backend  Developer">
                                                    Backend Developer
                                                </a-select-option>
                                                <a-select-option value="Android  Developer">
                                                    Android Developer
                                                </a-select-option>
                                                <a-select-option value="Graphic Designer">
                                                    Graphic Designer
                                                </a-select-option>
                                                <a-select-option value="IOS Developer">
                                                    IOS Developer
                                                </a-select-option>
                                                <a-select-option value="Data Scientist">
                                                    Data Scientist
                                                </a-select-option>
                                            </a-select>
                                        </a-form-item>


                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Developer Experience">
                                            <a-select

                                                    placeholder="Select a option and change input text above"
                                                    v-model="job.dev_experience"
                                            >
                                                <a-select-option value="Entry">
                                                    Entry
                                                </a-select-option>
                                                <a-select-option value="Junior">
                                                    Junior
                                                </a-select-option>
                                                <a-select-option value="Mid-Level">
                                                    Mid-Level
                                                </a-select-option>
                                                <a-select-option value="Senior">
                                                    Senior
                                                </a-select-option>

                                            </a-select>
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Contract type">
                                            <a-select


                                                    v-model="job.engagement_type"
                                            >
                                                <a-select-option value="Full-time">
                                                    Full-time
                                                </a-select-option>
                                                <a-select-option value="Part-time">
                                                    Part-time
                                                </a-select-option>
                                                <a-select-option value="Contract">
                                                    Contract
                                                </a-select-option>
                                                <a-select-option value="Remote">
                                                    Remote
                                                </a-select-option>
                                                <a-select-option value="Freelance">
                                                    Freelance
                                                </a-select-option>

                                            </a-select>
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item>
                                            <span>Location : {{job.location}}</span>
                                            <country-select v-model="job.location"
                                                            class="ant-input"
                                            />
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="8" style="padding-right: 1%">
                                        <a-form-item label="Salary range ">
                                            <a-input placeholder="1000-1500$" v-model="job.remuneration">

                                            </a-input>
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="24">

                                        <a-form-item>
                                            <p>Pick skills you are looking for</p>
                                            <div>

                                                <template v-for=" tag in recommendationtags">
                                                    <a-checkable-tag style="border-color: blue;font-size: 14px"
                                                                     :key="tag"
                                                                     :checked="selectedTags.indexOf(tag) > -1"
                                                                     @change="(checked) => handleChange(tag, checked)"
                                                    >
                                                        {{tag}}
                                                    </a-checkable-tag>
                                                </template>
                                            </div>


                                        </a-form-item>
                                        <a-form-item label="Application Deadline">
                                            <a-date-picker v-model="job.deadline"
                                                           format="YYYY-MM-DD HH:mm:ss"
                                                           :disabledDate="disabledDate"
                                                           :disabledTime="disabledDateTime"
                                                           :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                                            />
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Job description "
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >

                                            <a-textarea v-model="job.description"
                                                        placeholder="A bit about the job"
                                                        :rows="6"/>
                                        </a-form-item>

                                    </a-col>
                                </a-row>
                            </a-form>
                        </tab-content>
                        {{job}}





                    </form-wizard>

                </a-drawer>

            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>
    class Job {
        constructor(id, title, skills, applicants, test, interview) {
            this.id = id;
            this.title = title;
            this.skills = skills;
            this.applicants = applicants;
            this.test = test;
            this.interview = interview

        }
    }


    import UsersService from '@/services/UsersService'
    import Marketplace from '@/services/Marketplace'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Pageheader from '@/components/layout/Pageheader'
    import RecruiterSider from "../../layout/RecruiterSider";
    import moment from 'moment';
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'


    export default {
        name: 'index',
        data() {

            return {
                currentUserProfile: null,
                jobs: null,
                myjobs: [],
                visible: false,
                job: {},
                inputVisible: false,
                currentUser: {},
                inputValue: '',
                recommendationtags: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql', 'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
                    'Android', 'Website', 'Mobile'],
                selectedTags: [],

            }
        },
        components: {
            ARow,
            ACol,
            Pageheader,
            RecruiterSider,
            FormWizard,
            TabContent,


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            this.jobs = (await Marketplace.myjobs(this.$store.state.user.pk, auth)).data
            for (let i = 0; i < 2; i++) {
                this.applicants = (await Marketplace.applicants(this.jobs[i].id, auth)).data
                let test = 0;
                let interview = 0;
                for (let j = 0; j < this.applicants.length; j++) {
                    if (this.applicants[j].stage == 'test') {
                        test++

                    } else if (this.applicants[j].stage == 'interview') {
                        interview++

                    }

                }
                let skill_list = this.jobs[i].tech_stack.split(',');

                let id = this.jobs[i].id
                let title = this.jobs[i].title
                let skills = skill_list
                let applicants = this.applicants.length
                let onejob = new Job(
                    id, title, skills, applicants, test, interview
                )


                this.myjobs.push(onejob)


            }

        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },

            onCollapse(collapsed, type) {
                console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                console.log(broken);
            },
            async onComplete() {


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                Marketplace.createjob(this.job, auth)
                    .then(resp => {
                        this.visible = false
                        this.$router.push({
                            name: 'managejobs'
                        })


                    })
                    .catch(error => {
                        this.visible = false
                        this.$router.push({
                            name: 'recruiter'
                        })

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

            navigateTo(route) {
                this.$router.push(route)
            },
            async showDrawer() {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.currentUser = this.$store.state.user.pk
                this.job.posted_by = this.currentUser
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
                this.job.company = this.currentUserProfile.company
                this.visible = true

            },
            onClose() {
                this.visible = false
            },

            showInput() {
                this.inputVisible = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange(e) {
                this.inputValue = e.target.value
            },

            handleInputConfirm() {
                const inputValue = this.inputValue
                let tags = this.tags
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue]
                }

                let alltags = tags.join(", ")
                this.job.tech_stack = alltags
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                })
            },
            handleChange(tag, checked) {
                const {selectedTags} = this
                const nextSelectedTags = checked
                    ? [...selectedTags, tag]
                    : selectedTags.filter(t => t !== tag)

                this.selectedTags = nextSelectedTags
                let alltags = this.selectedTags.join(", ")
                this.job.tech_stack = alltags
            },

        },

    }
</script>

<style scoped>


    .me {
        width: 70px;
        height: 70px;
        color: blue;
    }

    .me:hover {
        fill: red;
    }

    .boxes {

        padding-left: 0;
        padding-right: 0;


    }

    .poolavatar {
        width: 80%;
        margin-top: 0.5rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .actioncards {
        width: 16rem;
        border-radius: 3%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 0.89rem;
    }


</style>
