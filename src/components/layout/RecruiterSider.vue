<template>

    <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
            style="box-shadow: 2px 0 6px rgba(0,21,41,.35);background-color: white;position: fixed"

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
                <a v-on:click="showDrawer">
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
                <router-link to="/myprofile">
                    <a-icon type="user"/>
                    <span>My profile</span>
                </router-link>

            </a-menu-item>
            <a-menu-item key="7">
                <a @click="logout">
                    <a-icon type="export"/>
                    <span>  Logout</span>
                </a>

            </a-menu-item>


        </a-menu>
        <!----Post Job modal------->

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



            </form-wizard>
        </a-drawer>
    </a-layout-sider>


</template>
<script>
    import moment from 'moment';
    import Largelogo from '@/assets/logobg.svg'
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import Marketplace from '@/services/Marketplace'
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService'


    export default {
        name: 'RecruiterSider',
        data() {

            return {
                defaultlogo: Largelogo,
                visible: false,
                job: {},
                currentUserProfile: {},
                currentUser: {},
                inputVisible: false,
                inputValue: '',
                recommendationtags: ['Django','Javascript','Python','Php','Postgres','Sql', 'Html', 'Css', 'bootstrap','React','Java',
                'React Native','Redux','Flask ','Go','Expressjs','Vuejs',
                    'Angular','Ios','flutter','Ionic','Rails','Meteor','AI','Cybersecurity',
                    'Blockchain','Arduino','Spring','Bitcoin','Kotlin','Scala','Nativescript ',
                'Android','Website','Mobile'],
                selectedTags: [],

            }
        },
        components: {
            ACol,
            AFormItem,
            FormWizard,
            TabContent,

        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },

            onCollapse(collapsed, type) {
                 return type;
            },
            onBreakpoint(broken) {
                return broken;
            },
            async mounted() {


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
        }
    }
</script>

<style scoped>


</style>
