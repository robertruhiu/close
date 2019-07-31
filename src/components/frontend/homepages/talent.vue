<template>
    <a-layout :style="{background:'#fff'}">
        <pageheader></pageheader>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '1rem' }">
            <div style="margin-top: 3rem">
                <a-row style="background-color:#004ec7;position: fixed;width: 100%;z-index: 1 ">
                    <a-col span="4">
                        <h3 style="color: white;font-size: 2rem;padding-left: 4rem;padding-top: 1rem;">Talent</h3>
                    </a-col>
                    <a-col :span="16">

                        <div style="padding-top: 2rem;" class='center'>

                            <a-auto-complete
                                    :dataSource="dataSource"
                                    style="width: 80%;z-index: 0"
                                    placeholder="Search skills like react,javascript,vue python"
                                    v-model="search"


                            >

                                <a-input>
                                    <a-icon slot="suffix" type="search" class="certain-category-icon"/>
                                </a-input>
                            </a-auto-complete>


                            <span>


                            <country-select v-model="country" style="width: 20%;color: #007BFF"
                                            placeholder="location" class="ant-input"
                            />
                            </span>


                        </div>
                    </a-col>
                    <a-col span="4">

                    </a-col>
                </a-row>

                <a-row :gutter="16">

                    <a-col :span="6" style="margin-top: 6%">
                        <div style="padding-left: 3rem">


                            <div style="padding: 2rem;width: 12rem" class="">
                                <h3 style="color: #0679fb">
                                    <a-icon type="filter" theme="twoTone"/>
                                    Filters

                                </h3>
                                <div :style="{ borderBottom: '1px solid #E9E9E9' }">
                                    <a-checkbox
                                            :indeterminate="indeterminate"
                                            @change="onCheckAllChange"
                                            :checked="checkAll"
                                    >
                                        Availability
                                    </a-checkbox>
                                </div>
                                <br/>
                                <a-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange"/>

                                <div :style="{ borderBottom: '1px solid #E9E9E9',marginTop: '1rem' }">
                                    <a-checkbox
                                            :indeterminate="indeterminate1"
                                            @change="onCheckAllChange1"
                                            :checked="checkAll1"
                                    >
                                        Experience
                                    </a-checkbox>
                                </div>
                                <br/>
                                <a-checkbox-group :options="plainOptions1" v-model="checkedList1" @change="onChange1">

                                </a-checkbox-group>

                            </div>
                        </div>

                    </a-col>

                    <a-col :span="14" style="margin-top: 6%;">


                        <a-list style="padding-bottom: 2rem"
                                itemLayout="vertical"
                                size="large"
                                :pagination="pagination"
                                :dataSource="filteredList"
                        >

                            <a-list-item
                                    slot="renderItem" slot-scope="item, index" key="item.title">


                                <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 9rem">
                                    <a-col span="4" style="background-color:#0679FB;height: 100% ">
                                        <a-avatar class="poolavatar"
                                                  style="">
                                            {{item.name}}
                                        </a-avatar>
                                    </a-col>
                                    <a-col span="15" style="padding: 2%">
                                        <p>Bio</p>
                                        <p>{{item.about | truncate(100)}}<a @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">read more</a>
                                        </p>

                                        <p>
                                            Skills :
                                            <span style="" v-for="skill in item.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                        </p>


                                    </a-col>
                                    <a-col span="5">
                                        <div style="padding-top: 1rem;">

                                            <a-tag color="#F0F6FD" style='color: #007BFF'>
                                                <a-icon type="environment"/>
                                                {{item.location}}
                                            </a-tag>
                                            <a-tag color="#F7E7F5" style="color: #B82EA4">{{item.availabilty}}
                                            </a-tag>


                                        </div>
                                        <div style="margin-top: 2rem">
                                            <a-button type="primary" ghost @click="navigateTo({name:'candidatetalentprofile',params:{candidateProfileID: item.id}})">
                                                View Profile
                                            </a-button>
                                        </div>


                                    </a-col>


                                </a-row>


                            </a-list-item>
                        </a-list>


                    </a-col>



                </a-row>


            </div>


        </a-layout-content>

    </a-layout>


</template>
<script>

    class Developer {
        constructor(id, name, skills, about, location, availabilty, experience, portfolio) {
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.about = about;
            this.location = location;
            this.availabilty = availabilty
            this.experience = experience
            this.portfolio = portfolio
        }
    }

    //experience structure on table


    import "../../../assets/css/styles.css";
    import Pageheader from '@/components/layout/Header.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService';

    import Vue from 'vue'

    var VueTruncate = require('vue-truncate-filter')
    Vue.use(VueTruncate)


    const plainOptions = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const defaultCheckedList = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const plainOptions1 = ['1 year', '2 years', '3 years', '4 years above']
    const defaultCheckedList1 = ['1 year', '2 years', '3 years', '4 years above']
    export default {
        name: 'talent',
        data() {
            return {
                visible: false,
                devs: null,
                alldevs: null,
                search: '',
                profile: {},
                country: null,
                checkedList: defaultCheckedList,
                indeterminate: true,
                checkAll: false,
                plainOptions,
                checkedList1: defaultCheckedList1,
                indeterminate1: true,
                checkAll1: false,
                mydevs: null,
                tags: [],



                dataSource: ['react', 'angular', 'javascript'],

                plainOptions1,

                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px',
                },
                pStyle2: {
                    marginBottom: '24px'
                },
                listData: [],
                pagination: {
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                },
                actions: [
                    {type: 'star-o', text: '156'},
                    {type: 'like-o', text: '156'},
                    {type: 'message', text: '2'},
                ],
            }
        },
        components: {
            ACol,
            ARow,
            Pageheader,

        },

        async mounted() {
            this.devs = (await UsersService.devs()).data;
            this.alldevs = (await UsersService.allusers()).data;
            for (let j = 0; j < this.alldevs.length; j++) {
                for (let i = 0; i < this.devs.length; i++) {
                    if (this.alldevs[j].id === this.devs[i].id) {
                        let skill_list = this.devs[i].skills.split(',');

                        let id = this.devs[i].id
                        let name = this.alldevs[j].first_name[0].toUpperCase() + this.alldevs[j].last_name[0].toUpperCase()
                        let skills = skill_list
                        let about = this.devs[i].about
                        let location = this.devs[i].country
                        let availabilty = this.devs[i].availabilty
                        let onedev = new Developer(
                            id, name, skills, about, location, availabilty
                        )


                        this.listData.push(onedev)

                    }


                }
            }


        },


        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },



            onClose() {
                this.visible = false
            },
            onChange(checkedList) {
                this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)
                this.checkAll = checkedList.length === plainOptions.length
            },
            onCheckAllChange(e) {
                Object.assign(this, {
                    checkedList: e.target.checked ? plainOptions : [],
                    indeterminate: false,
                    checkAll: e.target.checked,
                })
            },
            onChange1(checkedList1) {
                this.indeterminate1 = !!checkedList1.length && (checkedList1.length < plainOptions1.length)
                this.checkAll1 = checkedList1.length === plainOptions1.length
            },
            onCheckAllChange1(e) {
                Object.assign(this, {
                    checkedList1: e.target.checked ? plainOptions1 : [],
                    indeterminate1: false,
                    checkAll1: e.target.checked,
                })
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
            }
        },
        computed: {
            filteredList() {
                return this.listData.filter(dev => {

                    return dev.skills.toString().toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }


</script>

<style scoped>
    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        margin: 25% 25%;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .bio {

        background-color: white;
        min-height: 50vh;


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

    .profilecard {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        min-height: 50vh;
        margin-right: 3%;

        padding: 1%;
        position: fixed;

    }


</style>
