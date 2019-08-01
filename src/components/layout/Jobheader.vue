<template>
    <div>

        <a-layout-header
                :style="{width: '100%',backgroundColor:'#004ec7',height:'100px',padding: '1px 30px 0',borderBottom: '1px solid #e8e8e8' }">

            <a-row>
                <a-col :span="22">
                            <span>
                                <a style="color: white;line-height: 13px;font-size: 17px;font-weight:bold;margin-top: 15%">
                                {{job.title}}</a>



                                    <span style="float: right" v-if="job.published" id="unpublishbutton">
                                    <a-button type="primary" @click="unpublishjob(job.id)">Unpublish Job</a-button>

                                </span>
                                <br>




                            </span>


                </a-col>


                <a-button type="primary" @click="showDrawer">
                    <a-icon type="calendar"/>
                    Calendar
                </a-button>


                <a-button-group style="margin-left: 1%">
                    <a-button type="primary" icon="share-alt">Share Job</a-button>
                    <social-sharing url="https://vuejs.org/"
                                    :title=job.title
                                    :description=job.description
                                    quote="Apply for this job at the link below."
                                    :hashtags=job.tech_stack
                                    inline-template>
                        <network network="facebook">
                            <a-button type="primary" icon="facebook"/>
                        </network>

                    </social-sharing>
                    <social-sharing url="https://vuejs.org/"
                                    :title=job.title
                                    :description=job.description
                                    :hashtags=job.tech_stack
                                    inline-template>

                        <network network="twitter">
                            <a-button type="primary" icon="twitter"/>
                        </network>
                    </social-sharing>

                </a-button-group>


            </a-row>


        </a-layout-header>

        <a-drawer
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
                :width="400"
        >
            <vue-cal xsmall class="vuecal--blue-theme"
                     ref="vuecal"
                     default-view="day"
                     :disable-views="['years', 'year', 'month','week']"
                     editable-events

            >
            </vue-cal>
            <div style="right: 5vw;bottom: 4vh;z-index: 999;position: fixed;">
                <a-button @click="showChildrenDrawer" type="primary" shape="circle" icon="plus" :size="size"
                          style="width: 60px;height: 60px"/>

            </div>
            <a-drawer
                    title="Two-level Drawer"
                    width=320
                    :closable="false"
                    @close="onChildrenDrawerClose"
                    :visible="childrenDrawer"
            >
                <a-button type="primary" @click="showChildrenDrawer">
                    This is two-level drawer
                </a-button>
            </a-drawer>


        </a-drawer>


    </div>


</template>

<script>

    import Marketplace from '@/services/Marketplace'

    import ACol from "ant-design-vue/es/grid/Col";
    import VueCal from 'vue-cal'
    import '../../assets/css/vuecal.css'


    export default {
        name: "Jobheader",
        data() {

            return {
                job: {},
                visible: false,
                appointments: [],
                childrenDrawer: false,
                calendar_settings: {
                    style: "material_design",
                    view_type: "Day",
                    split_value: 20,
                    cell_height: 20,
                    scrollToNow: true,
                    current_day: new Date()
                },
                bgColor: '#1372cc',


            }
        },
        components: {
            ACol,
            'vue-cal': VueCal,


        },
        async mounted() {


            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.job = (await Marketplace.specificjob(this.$route.params.jobId, auth)).data


        },
        methods: {
            //unpublish job
            unpublishjob(job_id) {
                let x = document.getElementById("unpublishbutton");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                Marketplace.unpublishjob(job_id, {published: false}, auth)


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
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            showChildrenDrawer() {
                this.childrenDrawer = true
            },
            onChildrenDrawerClose() {
                this.childrenDrawer = false
            },
            NewEvent() {
                this.createEvent = true

            },


        }


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
