<template>
    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4%' }">

            <div :style="{ background: '#fff', padding: '24px', minHeight: '81vh' }">


                <a-card class="center" v-if="!$store.state.isUserLoggedIn" title="Register" :style="{width:'22rem'}">

                    <p class="alert" v-if="error">{{error}}</p>
                    <a-form
                            id="components-form-demo-normal-login"
                            :form="form"
                            class="login-form"

                    >
                        <a-form-item>
                            <a-input v-model="firstname"
                                     v-validate="'required'"
                                     name="firstname"
                                     placeholder="firstname"
                            >

                            </a-input>
                            <div v-if="errors.has('firstname')" style="color: #f5222d;" class="ant-form-explain">{{
                                errors.first('firstname') }}
                            </div>
                        </a-form-item>
                        <a-form-item>
                            <a-input v-model="lastname"
                                     v-validate="'required'"
                                     name="lastname"

                                     placeholder="lastname"
                            >

                            </a-input>
                            <div v-if="errors.has('lastname')" style="color: #f5222d;" class="ant-form-explain">{{
                                errors.first('lastname') }}
                            </div>
                        </a-form-item>
                        <a-form-item>
                            <a-input v-model="email"
                                     v-validate="'required|email'"
                                     name="email"

                                     placeholder="Email"
                            >
                                <a-icon
                                        slot="prefix"
                                        type="user"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>

                            <div v-if="errors.has('email')" style="color: #f5222d;" class="ant-form-explain">{{
                                errors.first('email') }}
                            </div>
                        </a-form-item>
                        <a-form-item>


                            <a-input v-validate="'required|verify_password'" name="password"
                                     type="password"
                                     v-model="password1"
                                     :class="{'is-danger': errors.has('password')}" placeholder="Password"
                                     ref="password">
                                <a-icon
                                        slot="prefix"
                                        type="lock"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>
                            <span style="color: #f5222d;" v-show="errors.has('password')"
                                  class="help is-danger">{{ errors.first('password') }}</span>


                        </a-form-item>
                        <a-form-item>


                            <a-input v-model="password2" v-validate="'required|confirmed:password'"
                                     name="password_confirmation"
                                     type="password" :class="{'is-danger': errors.has('password_confirmation')}"
                                     placeholder="Password, Again" data-vv-as="password">
                                <a-icon
                                        slot="prefix"
                                        type="lock"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>
                            <span style="color: #f5222d;" v-show="errors.has('password_confirmation')"
                                  class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                        </a-form-item>
                        <a-form-item>


                            <a-button @click="register"
                                      type="primary"
                                      class="login-form-button"
                            >
                                Register
                            </a-button>

                        </a-form-item>
                    </a-form>
                </a-card>


                <div v-if="$store.state.isUserLoggedIn && currentUserProfile.user_type == null" class="center"
                     :style="{width: '60rem'}">
                    <h2 style="text-align: center">Choose profile</h2>

                    <div class="center1">
                        <a-radio-group v-model="currentUserProfile.user_type">
                            <a-radio-button class="radiochoice"
                                            style="border-radius: 0;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;"
                                            value="recruiter">
                                <img style="margin-left: 25%;width: 50%;margin-right: 25%"
                                     src="../../../assets/images/interview.svg">
                                <p style="text-align: center">Recruiter</p>
                            </a-radio-button>
                            <a-radio-button class="radiochoice"
                                            style="border-radius: 0;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;"
                                            value="developer">
                                <img style="margin-left: 25%;width: 50%;margin-right: 25%;"
                                     src="../../../assets/images/programmer.svg">
                                <p style="text-align: center">Developer</p>
                            </a-radio-button>
                        </a-radio-group>


                    </div>

                </div>

                <div v-if="currentUserProfile.user_type && currentUserProfile.user_type =='developer'" class="center"
                     :style="{width: '60rem',boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important',border:'1px solid rgba(0,0,0,.125)'}">

                    <div>
                        <form-wizard @on-complete="onComplete"
                                     shape="tab"
                                     color="#007BFF"
                                     title=""
                                     subtitle="">
                            <tab-content title="Personal details"
                                         :before-change="validateFirstStep"
                                         icon="ti-user">
                                <a-form :form="form">
                                    <a-row :gutter="16">
                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Github Url"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <a-input v-validate="{required: true,url: {require_protocol: true }}"
                                                         name="github"
                                                         v-model="currentUserProfile.github_repo"

                                                />
                                            </a-form-item>

                                            <span style="color: #f5222d;" v-show="errors.has('github')"
                                                  class="help is-danger">{{ errors.first('github') }}</span>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Linkedin Url"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <a-input v-validate="{required: true,url: {require_protocol: true }}"
                                                         name="linkedin"
                                                         v-model="currentUserProfile.linkedin_url"

                                                />
                                                <span style="color: #f5222d;" v-show="errors.has('linkedin')"
                                                      class="help is-danger">{{ errors.first('linkedin') }}</span>
                                            </a-form-item>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Country"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <country-select v-validate="'required'"
                                                                name="location"
                                                                v-model="currentUserProfile.country"
                                                                class="ant-input"
                                                />
                                                <span style="color: #f5222d;" v-show="errors.has('location')"
                                                      class="help is-danger">{{ errors.first('location') }}</span>
                                            </a-form-item>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Gender"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span: 24 }"
                                            >
                                                <a-select v-validate="'required'"
                                                          name="gender"

                                                          placeholder="Select a option and change input text above"
                                                          v-model="currentUserProfile.gender"
                                                >
                                                    <a-select-option value="male">
                                                        male
                                                    </a-select-option>
                                                    <a-select-option value="female">
                                                        female
                                                    </a-select-option>
                                                </a-select>
                                                <span style="color: #f5222d;" v-show="errors.has('gender')"
                                                      class="help is-danger">{{ errors.first('gender') }}</span>
                                            </a-form-item>
                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Years of experience"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span: 24 }"
                                            >
                                                <a-select v-validate="'required'"
                                                          name="experience"

                                                          placeholder="Select a option and change input text above"
                                                          v-model="currentUserProfile.years"
                                                >
                                                    <a-select-option value="0-1">
                                                        0-1
                                                    </a-select-option>
                                                    <a-select-option value="1-2">
                                                        1-2
                                                    </a-select-option>
                                                    <a-select-option value="2-4">
                                                        2-4
                                                    </a-select-option>
                                                    <a-select-option value="4-above">
                                                        4-above
                                                    </a-select-option>
                                                </a-select>
                                                <span style="color: #f5222d;" v-show="errors.has('experience')"
                                                      class="help is-danger">{{ errors.first('experience') }}</span>
                                            </a-form-item>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Preffered work type"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span: 24 }"
                                            >
                                                <a-select v-validate="'required'"
                                                          name="work_type"

                                                          placeholder="Select a option and change input text above"
                                                          v-model="currentUserProfile.availabilty"
                                                >
                                                    <a-select-option value="contract">
                                                        contract
                                                    </a-select-option>
                                                    <a-select-option value="fulltime">
                                                        fulltime
                                                    </a-select-option>
                                                    <a-select-option value="parttime">
                                                        part time
                                                    </a-select-option>
                                                    <a-select-option value="remote">
                                                        remote
                                                    </a-select-option>
                                                </a-select>
                                                <span style="color: #f5222d;" v-show="errors.has('work_type')"
                                                      class="help is-danger">{{ errors.first('work_type') }}</span>
                                            </a-form-item>

                                        </a-col>
                                    </a-row>


                                </a-form>

                            </tab-content>
                            <tab-content title="Skills and Bio"
                                         icon="ti-settings">
                                <a-row :gutter="16">
                                    <a-col :span="24">

                                        <a-form-item
                                                label="What are your tech skills "
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <template v-for="(tag, index) in tags">
                                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                                    <a-tag :key="tag"
                                                           :afterClose="() => handleClose(tag)" color="#2db7f5">
                                                        {{`${tag.slice(0, 20)}...`}}
                                                    </a-tag>
                                                </a-tooltip>
                                                <a-tag v-else :key="tag" :closable="index >= 0"
                                                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                                                    {{tag}}
                                                </a-tag>
                                            </template>
                                            <a-input
                                                    v-if="inputVisible"
                                                    ref="input"
                                                    type="text"
                                                    size="small"
                                                    :style="{ width: '78px' }"
                                                    :value="inputValue"
                                                    @change="handleInputChange"
                                                    @blur="handleInputConfirm"
                                                    @keyup.enter="handleInputConfirm"
                                            />
                                            <a-tag v-else @click="showInput"
                                                   style="background: #fff; borderStyle: dashed;">
                                                <a-icon type="plus"/>
                                                New Tag
                                            </a-tag>
                                        </a-form-item>


                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Bio (300 characters max)"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >

                                            <a-textarea name="bio"
                                                        maxlength="300"
                                                        v-model="currentUserProfile.about"
                                                        placeholder="Tell us something about yourself"
                                                        :rows="4"/>

                                            <span style="color: #f5222d;" class="alert"
                                                  v-if="abouterror">{{abouterror}}</span>
                                        </a-form-item>

                                    </a-col>
                                    <a-col :span="24">
                                        <a-checkbox v-model="currentUserProfile.csa">Are you part of the CodeLn Student
                                            Ambassador Program?
                                        </a-checkbox>

                                    </a-col>
                                </a-row>
                            </tab-content>

                        </form-wizard>


                    </div>

                </div>

                <div v-if="currentUserProfile.user_type && currentUserProfile.user_type =='recruiter'" class="center"
                     :style="{width: '60rem',boxShadow:'0 .125rem .25rem rgba(0,0,0,.075)!important',border:'1px solid rgba(0,0,0,.125)'}">

                    <div>
                        <form-wizard @on-complete="onCompleteRecruiter"
                                     shape="tab"
                                     color="#007BFF"
                                     title=""
                                     subtitle="">
                            <tab-content title="Company details"
                                         icon="ti-user">
                                <a-form :form="form">
                                    <a-row :gutter="16">
                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Company name"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <a-input
                                                         v-model="currentUserProfile.company"

                                                />

                                            </a-form-item>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Company website link"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <a-input
                                                         v-model="currentUserProfile.company_url"

                                                />


                                            </a-form-item>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Country"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <country-select v-model="currentUserProfile.country"
                                                                class="ant-input"
                                                />
                                            </a-form-item>

                                        </a-col>

                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Company industry sector"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <a-input v-model="currentUserProfile.industry"

                                                />
                                            </a-form-item>

                                        </a-col>
                                        <a-col :span="8">
                                            <a-form-item
                                                    label="Your role at the Company"
                                                    :label-col="{ span: 24 }"
                                                    :wrapper-col="{ span:  24}"
                                            >
                                                <a-input v-model="currentUserProfile.job_role"
                                                         placeholder="Recruiter,CTO,HR,CEO etc"

                                                />
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
                                            <p>Pick skills to enable candidate
                                                recommendations</p>
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
                                </a-row>
                            </tab-content>

                        </form-wizard>


                    </div>

                </div>


            </div>



        </a-layout-content>

        <Footer/>
    </a-layout>


</template>


<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import AuthService from '@/services/AuthService'
    import UsersService from '@/services/UsersService'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import ARadioButton from "ant-design-vue/es/radio/RadioButton";
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import Vue from 'vue'
    import VeeValidate from 'vee-validate';

    Vue.use(VeeValidate);

    VeeValidate.Validator.extend('verify_password', {
        getMessage: field => `The password must contain at least: 1 uppercase, 1 lowercase, 1 number,8 characters min`,
        validate: value => {
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            return strongRegex.test(value);
        }
    });


    export default {
        name: 'register',

        components: {
            ACol,
            ARadioButton,
            ARow,

            Pageheader,
            Footer,
            FormWizard,
            TabContent,


        },
        data() {
            return {
                usertype: null,
                firstname: '',
                lastname: '',
                email: '',
                password1: '',
                password2: '',
                error: null,
                currentUserProfile: {},
                tags: [],
                inputVisible: false,
                inputValue: '',
                abouterror: null,
                recommendationtags: ['Django', 'Html', 'Css', 'bootstrap','React','Java',
                'React Native','Redux','Flask ','Go','Expressjs','Vuejs',
                    'Angular','Ios','flutter','Ionic','Rails','Meteor','AI','Cybersecurity',
                    'Blockchain','Arduino','Spring','Bitcoin','Kotlin','Scala','Nativescript ',
                'Android','Website','Mobile'],
                selectedTags: [],


            }
        },

        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            let temptaglist = this.currentUserProfile.skills;

            let array = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',');

            this.tags = array


        },

        methods: {
            validateFirstStep() {
                let next = false
                next = this.$validator.validateAll()


                return next


            },
            register() {
                this.$validator.validateAll().then((values) => {
                    if (values) {

                        AuthService.register({
                            first_name: this.firstname,
                            last_name: this.lastname,
                            email: this.email,
                            password1: this.password1,
                            password2: this.password2
                        })
                            .then(resp => {
                                this.$store.dispatch('setToken', resp.data.token)
                                this.$store.dispatch('setUser', resp.data.user)


                            })
                            .catch(error => {
                                console.log(error)
                                this.error = 'check details incorrect'

                            });


                    }
                })
            },


            onComplete() {

                if (this.currentUserProfile.about !== null) {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
                    this.currentUserProfile.stage ='complete'
                    this.$store.dispatch('setUsertype', this.currentUserProfile.user_type)
                    this.$store.dispatch('setUser_id', this.currentUserProfile.user)
                    UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                        .then(resp => {
                            if (this.currentUserProfile.user_type === 'developer') {

                                this.$router.push({
                                    name: 'developer'
                                })

                            } else {
                                this.$router.push({
                                    name: 'recruiter'
                                })

                            }


                        })
                        .catch(error => {
                            console.log(error)


                        });
                } else {
                    this.abouterror = 'please input something about yourself'
                }


            },
            onCompleteRecruiter() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.currentUserProfile.stage ='complete'
                this.$store.dispatch('setUsertype', this.currentUserProfile.user_type)
                this.$store.dispatch('setUser_id', this.currentUserProfile.user)
                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })

                        }


                    })
                    .catch(error => {
                        console.log(error)


                    });


            },


            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.currentUserProfile.skills = alltags

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
                this.currentUserProfile.skills = alltags
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
                this.currentUserProfile.skills = alltags
            },


        }


    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
    .center {
        margin: auto;
        width: 60%;

        padding: 10px;
    }

    .center1 {
        margin: auto;
        width: 32rem;

        padding: 0;
    }

    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }

    .radiochoice {
        height: 10rem;
        width: 15rem;
        margin: 4px;

    }

    ul {
        list-style-type: none;
    }


    .passwordvalid {

        color: #108ee9;
    }

    .passwordvalid.error {

        color: #ff5111;
    }

</style>



