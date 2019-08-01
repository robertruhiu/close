<template>
    <a-layout :style="{background:'#fff'}">
        <pageheader></pageheader>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '1rem' }">
            <div style="margin-top: 3rem">
                <a-row style="background-color:#004ec7;margin-bottom: 1rem ">
                    <a-col span="4">
                        <h3 style="color: white;font-size: 2rem;padding-left: 4rem;padding-top: 1.5rem;">Job board</h3>
                    </a-col>
                    <a-col :span="16">

                        <div style="padding: 2rem;" class='center'>

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
                <a-row>

                    <a-col :span="5">
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

                    <a-col :span="14">

                        <a-list style="padding-bottom: 2%"
                                itemLayout="vertical"
                                size="large"
                                :pagination="pagination"
                                :dataSource="filteredList"
                        >

                            <a-list-item
                                    slot="renderItem" slot-scope="item" key="item.title">


                                <a-row style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 9rem">
                                    <a-col span="4" style="background-color:#0679FB;height: 100% ">
                                        <p class="jobtitle">{{item.title}}</p>


                                    </a-col>
                                    <a-col span="15" style="padding: 2%">

                                        <p>Job Description</p>
                                        <p>{{item.description | truncate(100)}}<a
                                                @click="navigateTo({name:'jobdetails',params:{jobId: item.id}})">read
                                            more</a>
                                        </p>

                                        <p>
                                            Skills looking for :
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
                                            <a-tag color="#F0F6FD" style='color: #007BFF'>
                                                <a-icon type="bank"/>
                                                {{item.company}}
                                            </a-tag>


                                        </div>
                                        <div style="margin-top: 2rem">
                                            <a-button type="primary" ghost
                                                      @click="navigateTo({name:'jobdetails',params:{jobId: item.id}})">
                                                View details
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
        <Footer/>
    </a-layout>

</template>

<script>
    class Job {
        constructor(id, title, deadline, location, contract, skills, description, company) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.location = location;
            this.contract = contract;
            this.skills = skills;
            this.company = company

        }
    }


    import "../../../assets/css/styles.css";
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import Marketplace from '@/services/Marketplace'


    const plainOptions = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const defaultCheckedList = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const plainOptions1 = ['1 year', '2 years', '3 years', '4 years above']
    const defaultCheckedList1 = ['1 year', '2 years', '3 years', '4 years above']
    export default {
        name: 'jobboard',
        data() {
            return {
                jobs: null,
                alljobs: null,
                job: {},
                search: '',
                country: null,
                checkedList: defaultCheckedList,
                indeterminate: true,
                checkAll: false,
                plainOptions,
                checkedList1: defaultCheckedList1,
                indeterminate1: true,
                checkAll1: false,
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
                        return page;
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
            Footer
        },
        async mounted() {

            this.jobs = (await Marketplace.alljobs()).data

            for (let i = 0; i < this.jobs.length; i++) {

                let skill_list = this.jobs[i].tech_stack.split(',');

                let id = this.jobs[i].id
                let skills = skill_list
                let title = this.jobs[i].title
                let deadline = this.jobs[i].deadline

                let location = this.jobs[i].location
                let contract = this.jobs[i].engagement_type
                let description = this.jobs[i].description
                let company = this.jobs[i].company


                let onejob = new Job(id, title, deadline, location, contract, skills, description, company)


                this.listData.push(onejob)


            }


        },

        methods: {
            navigateTo(route) {
                this.$router.push(route)
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
                return this.listData.filter(job => {

                    return job.skills.toString().toLowerCase().includes(this.search.toLowerCase())
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

    .jobtitle {
        margin-top: 33%;
        color: white;
        margin-left: 10%;
        font-weight: 700;
        font-size: large;
    }


</style>
