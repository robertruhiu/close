<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">

            <a-layout-content>

                <vue-cal
                        style="height: 100vh"
                        class="vuecal--blue-theme"
                        selected-date="2019-07-24"
                        hide-weekends
                        :disable-views="['years', 'year']"
                        :events="events"
                        events-on-month-view="short"
                        :on-event-click="onEventClick"

                >

                </vue-cal>
                <div style="right: 5vw;bottom: 4vh;z-index: 999;position: fixed;">
                    <a-button @click="NewEvent" type="primary" shape="circle" icon="plus" :size="size"
                              style="width: 60px;height: 60px"/>

                </div>


                <a-modal

                        v-model="showDialog"


                >
                    <template slot="title">

                        <span><a-button type="danger" ghost icon="delete"></a-button></span>


                    </template>

                    <a-form
                            :form="form"
                            @submit="handleSubmit"
                    >
                        <a-form-item
                                label="Title"
                                :label-col="{ span: 5 }"
                                :wrapper-col="{ span: 18 }"
                        >
                            <a-input v-model="selectedEvent.title"/>
                        </a-form-item>
                        <a-form-item
                                label="Event guests"
                                :label-col="{ span: 5 }"
                                :wrapper-col="{ span: 18 }"
                        >
                            <a-select
                                    v-model="selectedEvent.candidate"

                                    placeholder="from your candidates"
                                    @change="handleSelectChange"
                            >
                                <a-select-option v-for="candidate in candidates" :key="candidate"
                                                 :value="candidate.email">{{candidate.name}} :{{candidate.email}}
                                </a-select-option>

                            </a-select>
                        </a-form-item>
                        <a-form-item
                                label="Description"
                                :label-col="{ span: 5 }"
                                :wrapper-col="{ span: 18 }"
                        >
                            <a-textarea :rows="4" v-model="selectedEvent.content"></a-textarea>
                        </a-form-item>
                        <a-form-item label="Start "
                                     :label-col="{ span: 4 }"
                                     :wrapper-col="{ span: 8 }">

                            <a-date-picker
                                    v-model="selectedEvent.start"
                                    showTime
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder="Select Time"
                                    @change="onChange"
                                    @ok="onOk"
                            />


                        </a-form-item>
                        <a-form-item label="Finish "
                                     :label-col="{ span: 4 }"
                                     :wrapper-col="{ span: 8 }">
                            <a-date-picker
                                    v-model="selectedEvent.end"
                                    showTime
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder="Select Time"
                                    @change="onChange"
                                    @ok="onOk"
                            />


                        </a-form-item>
                        <a-form-item label="Event color"
                                     :label-col="{ span: 5 }"
                                     :wrapper-col="{ span: 3 }">
                            <a-select

                                    v-model="selectedEvent.class"
                                    @change="handleSelectChange"
                            >
                                <a-select-option value="blue">
                                    <a-tag color="#029BE4" class="eventcolors"></a-tag>
                                </a-select-option>
                                <a-select-option value="green">
                                    <a-tag color="#3BB679" class="eventcolors"></a-tag>
                                </a-select-option>
                                <a-select-option value="purple">
                                    <a-tag color="#a515ae" class="eventcolors"></a-tag>
                                </a-select-option>
                                <a-select-option value="tomato">
                                    <a-tag color="tomato" class="eventcolors"></a-tag>
                                </a-select-option>
                            </a-select>

                        </a-form-item>


                    </a-form>
                    <template slot="footer">
                        <a-button key="submit" type="danger" ghost :loading="loading" @click="handleOk">
                            Cancel event
                        </a-button>
                        <a-button
                                type="primary"
                                html-type="submit"
                        >
                            Save
                        </a-button>

                    </template>


                </a-modal>
                <a-modal

                        v-model="createEvent"


                >

                    <template slot="footer">

                        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                            Save
                        </a-button>
                    </template>
                    <p>1</p>
                    <p>2</p>

                </a-modal>


            </a-layout-content>
        </a-layout>
    </a-layout>


</template>

<script>
    import VueCal from 'vue-cal'
    import '../../../assets/css/vuecal.css'
    import UsersService from '@/services/UsersService'
    import RecruiterSider from "../../layout/RecruiterSider";
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import Marketplace from '@/services/Marketplace'
    import moment from 'moment';


    export default {
        name: "mycalendar",
        data() {
            return {
                selectedEvent: {},
                showDialog: false,
                createEvent: false,
                bgColor: '#1372cc',
                size: 'large',
                candidates: [],
                templist: [],
                allusers: [],
                events: [
                    {
                        start: '2019-07-24 10:30',
                        end: '2019-07-24 11:30',
                        // You can also define event dates with Javascript Date objects:
                        // startDate: new Date('2018-11-16 10:30'),
                        // endDate: new Date('2018-11-16 11:30'),
                        title: 'Interview',
                        content: 'local_hospital',
                        class: 'green',
                        candidate: 'dennis@codeln.com'
                    },
                ]
            }
        },
        components: {
            AFormItem,

            RecruiterSider,
            'vue-cal': VueCal,


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            let myapplicants = (await Marketplace.allmyjobapplicants(this.$store.state.user.pk, auth)).data
            let mydevs = (await Marketplace.mydevelopers(this.$store.state.user.pk, auth)).data
            this.allusers = (await UsersService.allusers(auth)).data


            for (let i = 0; i < myapplicants.length; i++) {
                this.templist.push(myapplicants[i].candidate)

            }
            for (let i = 0; i < mydevs.length; i++) {
                this.templist.push(mydevs[i].developer)

            }
            let uniquecandidates = Array.from(new Set(this.templist))


            for (let i = 0; i < this.allusers.length; i++) {
                for (let j = 0; j < uniquecandidates.length; j++) {
                    if (uniquecandidates[j] === this.allusers[i].id) {
                        this.candidates.push({
                            name: this.allusers[i].first_name,
                            email: this.allusers[i].email
                        })
                    }
                }
            }


        },
        methods: {
            moment,
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
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
            onEventClick(event, e) {
                this.selectedEvent = event
                this.showDialog = true

                // Prevent navigating to narrower view (default vue-cal behavior).
                e.stopPropagation()
            },
            NewEvent() {
                this.createEvent = true

            },
            onChange(value, dateString) {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
            },

        }

    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

    .ant-tabs-tab-active {
        color: #1890ff;
        font-weight: 500;
    }

    .vuecal__now-line {
        color: #06c;
    }

    .eventcolors {
        margin-top: 30%;
        border-radius: 50%;
        width: 20px;
        height: 20px;

    }

</style>
