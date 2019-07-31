<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <RecruiterSider/>


        <a-layout :style="{ marginLeft: '200px',backgroundColor:'#F8FAFB' }">

            <a-layout-content>
                <Jobheader/>


                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '80vh',maxWidth:'72rem' }">
                    <div style="padding-top: 2%;">
                        <a-tabs defaultActiveKey="1"
                                style="z-index: 0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                            <!------allapplicants tabs  ------>
                            <a-tab-pane key="1" style="">
                                <span slot="tab">
                                    <a-icon type="usergroup-add"/>
                                    Applicants
                                </span>
                                <div style="margin-left:0">
                                    <a-row :gutter="16">

                                        <a-col :span="24"
                                               style="padding-bottom: 1%;padding-right: 2%">
                                            <a-tabs defaultActiveKey="1" tabPosition=left style="z-index: 0;">
                                                <!------allapplicants stage ------>
                                                <a-tab-pane key="1">
                                                    <span slot="tab">
                                                        Active Applicants
                                                        <a-tag color="blue">{{pickedapplicants.length}}</a-tag>
                                                    </span>

                                                    <a-tabs defaultActiveKey="1" style="z-index: 0;">


                                                        <!-------active  candidates-------->
                                                        <a-tab-pane v-if="active" tab="Active"
                                                                    key="1">

                                                            <a-table :dataSource="pickedapplicants" :scroll="{ y: 340 }"
                                                                     size="middle">

                                                                <!-----name--------->
                                                                <a-table-column
                                                                        dataIndex="name"
                                                                        key="name"
                                                                        width="10%"


                                                                >
                                                                    <span slot="title">Name</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----profile--------->
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="10%"


                                                                >
                                                                    <div style="" slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Skills
                                                                    </div>
                                                                    <template slot-scope="tags">
                                                        <span style="text-align: center">
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----stage--------->
                                                                <a-table-column

                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Stage
                                                                    </div>
                                                                    <template slot-scope="text, record">
                                                        <span style="margin-left: 25%">
                                                            <a-tag v-if="record.stage === 'active'"
                                                                   color="#8BC34A"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                    <a-tag v-else-if="record.stage === 'test'" color="#9C27B0"
                                                           style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                    <a-tag v-else-if="record.stage === 'interview'" color="#FF4081"
                                                           style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                            <a-tag v-else-if="record.stage === 'offer'"
                                                                   color="#03A9F4"
                                                                   style="text-align: center;width: 4rem;">{{record.stage}}</a-tag>
                                                        </span>
                                                                    </template>

                                                                </a-table-column>

                                                                <!-----action--------->
                                                                <a-table-column
                                                                        title="action"
                                                                        width="10%"


                                                                >

                                                                    <template slot-scope="text,record">
                                                                        <div v-if="record.stage ==='active'">
                                                                            <a-dropdown>
                                                                                <a-menu slot="overlay">
                                                                                    <a-menu-item
                                                                                            @click="handleMenuClick(record.action,record.profile,1)">
                                                                                        <a-icon
                                                                                                type="codepen"/>
                                                                                        assign project test
                                                                                    </a-menu-item>
                                                                                    <a-menu-item
                                                                                            @click="handleMenuClick(record.action,record.profile,3)">
                                                                                        <a-icon
                                                                                                type="close"/>
                                                                                        reject candidate
                                                                                    </a-menu-item>
                                                                                </a-menu>
                                                                                <a-button type="primary"
                                                                                          style="height: 30px">
                                                                                    choices
                                                                                    <a-icon type="down"/>
                                                                                </a-button>
                                                                            </a-dropdown>

                                                                        </div>
                                                                        <div v-else>
                                                                            --

                                                                        </div>


                                                                    </template>


                                                                </a-table-column>


                                                            </a-table>

                                                        </a-tab-pane>

                                                        <!-------new  candidates-------->
                                                        <a-tab-pane v-if="newapplications" tab="New Applicants"
                                                                    key="2">

                                                            <a-table :dataSource="newapplicant" :scroll="{ y: 340 }"
                                                                     size="middle">

                                                                <!-----name--------->
                                                                <a-table-column
                                                                        dataIndex="name"
                                                                        key="name"
                                                                        width="10%"


                                                                >
                                                                    <span slot="title">Name</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----profile--------->
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="10%"


                                                                >
                                                                    <div slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="25%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Skills
                                                                    </div>
                                                                    <template slot-scope="tags">
                                                        <span style="text-align: center;">
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----stage--------->
                                                                <a-table-column

                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Stage
                                                                    </div>
                                                                    <template slot-scope="text, record">
                                                        <span style="margin-left: 25%">
                                                            <!------------stage (new,active,test,interview,offer,hire)---------------->
                                                            <a-tag color="#EA6A47"
                                                                   style="text-align: center;">{{record.stage}}</a-tag>

                                                        </span>
                                                                    </template>

                                                                </a-table-column>

                                                                <!-----action--------->
                                                                <a-table-column
                                                                        dataIndex="action"
                                                                        key="action"
                                                                        width="20%"


                                                                >
                                                                    <div style="margin-left: 10%" slot="title">
                                                                        Pick/Reject
                                                                    </div>
                                                                    <template slot-scope="text,record">
                                                                        <a-button-group>
                                                                            <a-button
                                                                                    @click="pickrejectClick(record.action,record.profile,true)"
                                                                                    type="primary">pick
                                                                            </a-button>
                                                                            <a-button
                                                                                    @click="pickrejectClick(record.action,record.profile,false)">
                                                                                reject
                                                                            </a-button>

                                                                        </a-button-group>
                                                                    </template>
                                                                </a-table-column>


                                                            </a-table>

                                                        </a-tab-pane>

                                                        <!-------system recommmended candidates-------->
                                                        <a-tab-pane v-if="recommended" tab="Recommended Candidates"
                                                                    key="3">

                                                            <a-table :dataSource="recommmedcandidates"
                                                                     :scroll="{ y: 340 }"
                                                                     size="middle">

                                                                <!-----name--------->
                                                                <a-table-column
                                                                        dataIndex="name"
                                                                        key="name"
                                                                        width="10%"


                                                                >
                                                                    <span slot="title">Name</span>
                                                                    <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----profile--------->
                                                                <a-table-column
                                                                        dataIndex="profile"
                                                                        key="profile"
                                                                        width="10%"


                                                                >
                                                                    <div slot="title">User profile</div>
                                                                    <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----skills--------->
                                                                <a-table-column

                                                                        dataIndex="tags"
                                                                        key="tags"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 25%" slot="title">Skills
                                                                    </div>
                                                                    <template slot-scope="tags">
                                                        <span style="text-align: center;">
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                                    </template>
                                                                </a-table-column>

                                                                <!-----stage--------->
                                                                <a-table-column

                                                                        dataIndex="stage"
                                                                        key="stage"
                                                                        width="20%"

                                                                >
                                                                    <div style="margin-left: 15%" slot="title">Stage
                                                                    </div>
                                                                    <template slot-scope="text, record">
                                                        <span style="margin-left: 5%">

                                                            <a-tag color="#1C4E80"
                                                                   style="">{{record.stage}}</a-tag>

                                                        </span>
                                                                    </template>

                                                                </a-table-column>

                                                                <!-----action--------->
                                                                <a-table-column
                                                                        dataIndex="action"
                                                                        key="action"
                                                                        width="20%"


                                                                >
                                                                    <div style="margin-left: 10%" slot="title">
                                                                        Pick
                                                                    </div>
                                                                    <template slot-scope="text,record">
                                                                        <div style="margin-left: 5%">
                                                                            <a-button :size="small"
                                                                                      @click="pickrecommedationClick(job.id,record.profile,true)"
                                                                                      type="primary">pick
                                                                            </a-button>


                                                                        </div>
                                                                    </template>
                                                                </a-table-column>


                                                            </a-table>


                                                        </a-tab-pane>

                                                    </a-tabs>
                                                </a-tab-pane>

                                                <!------test stage ------>
                                                <a-tab-pane key="2">
                                                    <span slot="tab">
                                                        Coding test
                                                        <a-tag color="blue">{{testingstage.length}}</a-tag>
                                                    </span>

                                                    <a-alert style="margin-bottom: 1%"
                                                             message="Please purchase a testing bundle to enable project asignment to candidates"
                                                             type="info" closeText="Close Now"/>
                                                    <a-table :dataSource="testingstage" :scroll="{ y: 340 }"
                                                             size="middle">

                                                        <!-----name--------->
                                                        <a-table-column
                                                                dataIndex="name"
                                                                key="name"
                                                                width="10%"


                                                        >
                                                            <span slot="title">Name</span>
                                                            <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----profile--------->
                                                        <a-table-column
                                                                dataIndex="profile"
                                                                key="profile"
                                                                width="10%"


                                                        >
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile

                                                            </a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----skills--------->
                                                        <a-table-column

                                                                dataIndex="tags"
                                                                key="tags"
                                                                width="25%"

                                                        >
                                                            <div style="margin-left: 25%" slot="title">Skills</div>
                                                            <template slot-scope="tags">
                                                        <span style="text-align: center">
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----project asignment--------->
                                                        <a-table-column

                                                                dataIndex="project"
                                                                key="project"
                                                                width="15%"

                                                        >
                                                            <div style="" slot="title">Test assigned
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <span style="">
                                                                    <a style="margin-left: 15%;" v-if="record.project"
                                                                       @click="navigateTo({name:'pickedprojectdetails',params:{projectId:record.project,candidateId: record.profile,jobId:job.id,applicationId: record.action}})">
                                                                        {{record.projectname}}
                                                                    </a>

                                                                    <a-button :size="small"
                                                                              style="background-color: #9c27b0;color: white"
                                                                              v-else
                                                                              @click="showModal(record.profile,record.action)">
                                                                        <a-icon type="codepen"/>
                                                                        Assign test
                                                                </a-button>
                                                                </span>

                                                            </template>


                                                        </a-table-column>

                                                        <!-----report--------->
                                                        <a-table-column

                                                                dataIndex="profile"
                                                                key="report"
                                                                width="15%"

                                                        >
                                                            <div slot="title">Report status
                                                            </div>
                                                            <template slot-scope="text,record">
                                                        <span v-if="record.test_stage" style="margin-left: 20%">
                                                            {{record.test_stage}}
                                                        </span>
                                                                <span v-else style="margin-left: 20%">
                                                            --
                                                        </span>
                                                            </template>

                                                        </a-table-column>

                                                        <!-----action--------->
                                                        <a-table-column
                                                                title="action"
                                                                width="10%"


                                                        >

                                                            <template slot-scope="text,record">

                                                                <a-dropdown>
                                                                    <a-menu slot="overlay">


                                                                        <a-menu-item
                                                                                v-if="record.test_stage ==='complete'"
                                                                                @click="handleTestMenuClick(record.action,record.profile,2)">
                                                                            <a-icon
                                                                                    type="calendar"/>
                                                                            schedule interview
                                                                        </a-menu-item>
                                                                        <a-menu-item
                                                                                v-else
                                                                                disabled
                                                                        >
                                                                            <a-icon
                                                                                    type="calendar"/>
                                                                            schedule interview
                                                                        </a-menu-item>

                                                                        <a-menu-item
                                                                                @click="handleTestMenuClick(record.action,record.profile,4)">
                                                                            <a-icon
                                                                                    type="close"/>
                                                                            reject candidate
                                                                        </a-menu-item>
                                                                    </a-menu>
                                                                    <a-button type="primary"
                                                                              style="height: 30px">
                                                                        choices
                                                                        <a-icon type="down"/>
                                                                    </a-button>
                                                                </a-dropdown>


                                                            </template>


                                                        </a-table-column>


                                                    </a-table>
                                                </a-tab-pane>

                                                <!------interview stage ------>
                                                <a-tab-pane key="3">
                                                    <span slot="tab">
                                                        Interview
                                                        <a-tag color="blue">{{interviewstage.length}}</a-tag>
                                                    </span>
                                                    <a-table :dataSource="interviewstage" :scroll="{ y: 340 }"
                                                             size="middle">

                                                        <!-----name--------->
                                                        <a-table-column
                                                                dataIndex="name"
                                                                key="name"
                                                                width="10%"


                                                        >
                                                            <span slot="title">Name</span>
                                                            <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----profile--------->
                                                        <a-table-column
                                                                dataIndex="profile"
                                                                key="profile"
                                                                width="10%"


                                                        >
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----skills--------->
                                                        <a-table-column

                                                                dataIndex="tags"
                                                                key="tags"
                                                                width="25%"

                                                        >
                                                            <div style="margin-left: 25%" slot="title">Skills</div>
                                                            <template slot-scope="tags">
                                                        <span style="text-align: center">
                                                            <a-tag v-for="tag in tags" color="blue"
                                                                   :key="tag">{{tag}}</a-tag>
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----interview schedule--------->
                                                        <a-table-column

                                                                dataIndex="interview"
                                                                key="interview"
                                                                width="15%"

                                                        >
                                                            <div style="" slot="title">Interview date
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <span style="margin-left: 5%;">
                                                                    <a-button :size="small"
                                                                              style="background-color: #673AB7;color: white"
                                                                              @click="onEventCreate(record.action,record.name)">
                                                                        <a-icon type="calendar"/>
                                                                        create
                                                                </a-button>
                                                                </span>

                                                            </template>


                                                        </a-table-column>

                                                        <!-----interview status--------->
                                                        <a-table-column

                                                                dataIndex="interviewstatus"
                                                                key="interviewstatus"
                                                                width="15%"

                                                        >
                                                            <div style="" slot="title">Interview status
                                                            </div>
                                                            <template slot-scope="text,record">
                                                                <div style="text-align: center">
                                                                    <span v-if="record.interviewstatus">
                                                                        {{record.interviewstatus}}
                                                                    </span>
                                                                    <span v-else>
                                                                    ---
                                                                </span>
                                                                </div>


                                                            </template>


                                                        </a-table-column>

                                                        <!-----interview notes--------->
                                                        <a-table-column

                                                                dataIndex="notes"
                                                                key="notes"
                                                                width="15%"

                                                        >
                                                            <div slot="title">Interview notes
                                                            </div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 25%">
                                                            --
                                                        </span>
                                                            </template>

                                                        </a-table-column>

                                                        <!-----action--------->
                                                        <a-table-column
                                                                title="action"
                                                                width="10%"


                                                        >

                                                            <template slot-scope="text,record">

                                                                <a-dropdown>
                                                                    <a-menu slot="overlay">


                                                                        <a-menu-item
                                                                                @click="handleInterviewClick(record.action,record.profile,2)">
                                                                            <a-icon
                                                                                    type="like"/>
                                                                            make offer
                                                                        </a-menu-item>
                                                                        <a-menu-item
                                                                                @click="handleInterviewClick(record.action,record.profile,3)">
                                                                            <a-icon
                                                                                    type="close"/>
                                                                            reject candidate
                                                                        </a-menu-item>
                                                                    </a-menu>
                                                                    <a-button type="primary"
                                                                              style="height: 30px">
                                                                        choices
                                                                        <a-icon type="down"/>
                                                                    </a-button>
                                                                </a-dropdown>


                                                            </template>


                                                        </a-table-column>


                                                    </a-table>
                                                </a-tab-pane>

                                                <!------offers stage ------>
                                                <a-tab-pane key="4">
                                                    <span slot="tab">
                                                        Offers
                                                        <a-tag color="blue">{{offerstage.length}}</a-tag>
                                                    </span>
                                                    <a-table :dataSource="offerstage" :scroll="{ y: 340 }"
                                                             size="middle">

                                                        <!-----name--------->
                                                        <a-table-column
                                                                dataIndex="name"
                                                                key="name"
                                                                width="10%"


                                                        >
                                                            <span slot="title">Name</span>
                                                            <template slot-scope="text,record">
                                                        <span>
                                                            {{record.name}}
                                                        </span>
                                                            </template>
                                                        </a-table-column>

                                                        <!-----profile--------->
                                                        <a-table-column
                                                                dataIndex="profile"
                                                                key="profile"
                                                                width="10%"


                                                        >
                                                            <div style="" slot="title">User profile</div>
                                                            <template slot-scope="text,record">
                                                        <span style="margin-left: 15%">
                                                            <a @click="navigateTo({name:'candidateprofile',params:{candidateId: record.profile,jobId:job.id,applicationId: record.action}})">profile</a>
                                                        </span>
                                                            </template>
                                                        </a-table-column>


                                                        <!-----offer letter--------->
                                                        <a-table-column

                                                                dataIndex="offer"
                                                                key="offer"
                                                                width="20%"

                                                        >
                                                            <div style="margin-left: 25%" slot="title">Make offer</div>
                                                            <template slot-scope="text, record">
                                                                <a style="margin-left: 25%">offer letter</a>

                                                            </template>

                                                        </a-table-column>

                                                        <!-----action--------->
                                                        <a-table-column

                                                                width="20%"


                                                        >
                                                            <div style="margin-left: 10%" slot="title">Hire/reject?
                                                            </div>

                                                            <template slot-scope="text,record">
                                                                <a-button-group>
                                                                    <a-button
                                                                            @click="pickrejectClick(record.action,record.profile,true)"
                                                                            type="primary">Hired
                                                                    </a-button>
                                                                    <a-button
                                                                            @click="pickrejectClick(record.action,record.profile,false)">
                                                                        Rejected
                                                                    </a-button>

                                                                </a-button-group>
                                                            </template>


                                                        </a-table-column>


                                                    </a-table>

                                                </a-tab-pane>


                                            </a-tabs>

                                        </a-col>

                                    </a-row>
                                </div>

                            </a-tab-pane>


                            <!------job details tab  ------>
                            <a-tab-pane key="2" forceRender>
                                <span slot="tab">
                                    <a-icon type="profile"/>
                                    Job Details
                                </span>
                                <div style="padding-left: 4%;padding-right: 4%;padding-bottom: 4%">
                                    <a-form :form="form"
                                            @submit="handleSubmit">
                                        <a-row :gutter="16">
                                            <a-col :span="8">
                                                <a-form-item label="Title">
                                                    <a-input v-model="job.title">

                                                    </a-input>
                                                </a-form-item>
                                            </a-col>
                                            <a-col :span="8">
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
                                            <a-col :span="8">
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
                                            <a-col :span="8">
                                                <a-form-item label="Contract type">
                                                    <a-select

                                                            placeholder="Select a option and change input text above"
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
                                            <a-col :span="8">
                                                <a-form-item label="Location">
                                                    <country-select v-model="job.location"
                                                                    class="ant-input"
                                                    />
                                                </a-form-item>

                                            </a-col>
                                            <a-col :span="8">
                                                <a-form-item label="Salary range ">
                                                    <a-input v-model="job.remuneration">

                                                    </a-input>
                                                </a-form-item>

                                            </a-col>
                                            <a-col :span="12">
                                                <a-form-item
                                                        label="Which tech skills are you looking for? "
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
                                            <a-col :span="12">
                                                <a-form-item label="Deadline ">
                                                    Current deadline {{deadline}}
                                                    <a-date-picker @change="onDate"

                                                                   format="YYYY-MM-DD"
                                                                   :disabledDate="disabledDate"

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


                                        <a-form-item>


                                            <a-button
                                                    type="primary"
                                                    html-type="submit"

                                            >
                                                Submit Changes
                                            </a-button>


                                        </a-form-item>
                                    </a-form>


                                </div>


                            </a-tab-pane>
                            <!------testing bundles tab  ------>
                            <a-tab-pane key="3" forceRender>
                                <span slot="tab">
                                    <a-icon type="credit-card"/>
                                    Testing bundles
                                </span>
                                <div style="padding-left: 4%;padding-right: 4%;padding-bottom: 4%">
                                    <a-row>
                                        <a-col :span="16">
                                            <h3>Pick a Bundle</h3>
                                            <a-row :gutter="8">
                                                <a-col :span="8">
                                                    <a-card
                                                    hoverable
                                                    style="width: 10rem"
                                            >

                                                <a-card-meta
                                                        title="$200">
                                                    <template slot="description">
                                                        <p>10 candidates</p>
                                                        <a-button v-model="amount" @click="bundleamount(1)">Pick</a-button>

                                                    </template>

                                                </a-card-meta>
                                            </a-card>

                                                </a-col>
                                                <a-col :span="8">
                                                    <a-card
                                                    hoverable
                                                    style="width: 10rem"
                                            >

                                                <a-card-meta
                                                        title="$300">
                                                    <template slot="description">
                                                        <p>15 candidates</p>
                                                        <a-button v-model="amount" @click="bundleamount(2)">Pick</a-button>

                                                    </template>

                                                </a-card-meta>
                                            </a-card>

                                                </a-col>
                                                <a-col :span="8">
                                                    <a-card
                                                    hoverable
                                                    style="width: 10rem"
                                            >

                                                <a-card-meta
                                                        title="$500">
                                                    <template slot="description">
                                                        <p>25 candidates</p>
                                                        <a-button v-model="amount" @click="bundleamount(3)">Pick</a-button>

                                                    </template>

                                                </a-card-meta>
                                            </a-card>

                                                </a-col>
                                            </a-row>



                                        </a-col>
                                        <a-col :span="8">
                                            <h3>Pay</h3>
                                            <a-card

                                                    style="width: 300px"
                                            >
                                                <img
                                                        alt="example"
                                                        src="../../../../assets/images/card.svg"
                                                        slot="cover"
                                                />
                                                <a-card-meta
                                                        style="text-align: center;"
                                                        title="Payment Methods">

                                                    <template slot="description">
                                                        <p>Amount :${{amount}}</p>
                                                        <a onClick=""><img class="ant-btn " style="width: 10rem"
                                                                           src="../../../../assets/images/flutter.svg"></a>
                                                    </template>
                                                </a-card-meta>
                                            </a-card>
                                        </a-col>
                                    </a-row>
                                </div>
                            </a-tab-pane>


                        </a-tabs>
                    </div>

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
                                <a @click="navigateTo({name:'projectdetails',params:{jobId:job.id,candidateId: candidate,applicationId:applicationid}})">
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
                                <a v-if="recentprojects"
                                   @click="navigateTo({name:'pickedprojectdetails',params:{projectId:project.id,jobId:job.id,candidateId: candidate,applicationId:applicationid}})">
                                    {{project.name}}
                                </a>
                            </p>


                        </div>

                    </a-modal>
                    <a-modal

                        v-model="interviewmodal"


                >
                    <template slot="title">




                    </template>

                    <a-form
                            :form="form"

                    >
                        <a-form-item
                                label="Interview with"
                                :label-col="{ span: 5 }"
                                :wrapper-col="{ span: 10 }"
                        >
                            <a-input v-model="candidatename"/>
                        </a-form-item>




                        <a-form-item label="Start "
                                     :label-col="{ span: 5 }"
                                     :wrapper-col="{ span: 8 }">

                            <a-date-picker
                                    v-model="starttime"

                                    showTime
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder="Select Time"
                                    @change="onChange"
                                    @ok="onOk"
                            />


                        </a-form-item>
                        <a-form-item label="Finish "
                                     :label-col="{ span: 5 }"
                                     :wrapper-col="{ span: 8 }">
                            <a-date-picker
                                    v-model="endtime"
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
                                    defaultValue="blue"
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

                        <a-button @click="CreateEvent(interviewcandidateapplicant)"
                                type="primary"
                                html-type="submit"
                        >
                            Save
                        </a-button>

                    </template>


                </a-modal>


                </div>


            </a-layout-content>

        </a-layout>
    </a-layout>

</template>

<script>

    // table structure
    import AFormItem from "ant-design-vue/es/form/FormItem";

    const columns = [
        {
            title: 'Username',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Profile',
            dataIndex: 'profile',
            key: 'profile',

        },
        {
            title: 'report',
            dataIndex: 'profile',
            key: 'report',

        },
        {
            title: 'Project',
            dataIndex: 'profile',
            key: 'project',

        },
        {
            title: 'Interview',
            dataIndex: 'profile',
            key: 'interview',

        },
        {
            title: 'Notes',
            dataIndex: 'profile',
            key: 'notes',

        },
        {
            title: 'offer',
            dataIndex: 'offer',
            key: 'offer',

        },
        {
            title: 'Stage',
            dataIndex: 'stage',
            key: 'stage',
            scopedSlots: {customRender: 'stage'}
        },

        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            scopedSlots: {customRender: 'tags'}
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',

        },
        {
            title: 'Test_stage',
            dataIndex: 'test_stage',
            key: 'test_stage',

        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',

        },
        {
            title: 'Projectname',
            dataIndex: 'projectname',
            key: 'projectname',

        },
        {
            title: 'Interviewstatus',
            dataIndex: 'interviewstatus',
            key: 'interviewstatus',

        },

    ];


    //applicants structure on table
    class Applicant {
        constructor(id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname,status) {
            this.key = id;
            this.name = name;
            this.stage = stage;
            this.profile = user_id;
            this.action = pk
            this.tags = tags;
            this.selected = selected;
            this.test_stage = test_stage;
            this.project = project
            this.projectname = projectname
            this.interviewstatus = status


        }
    }


    //recommended candidate structure on table
    class Recommended {
        constructor(id, name, stage, tags, user_id, selected, pk) {
            this.key = id;
            this.name = name;
            this.stage = stage;
            this.profile = user_id;
            this.action = pk
            this.tags = tags;
            this.selected = selected;


        }
    }

    import moment from 'moment';
    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";
    import Marketplace from '@/services/Marketplace'
    import Jobheader from '@/components/layout/Jobheader'
    import RecruiterSider from "../../../layout/RecruiterSider";
    import Projectsservice from '@/services/Projects'
    import '../../../../assets/css/vuecal.css'


    export default {
        name: "job",
        data() {
            return {
                currentUserProfile: null,
                test: [],
                job: {},
                alldevs: null,
                alldevsprofile: null,
                columns,
                applicants: [],
                recommmedcandidates: [],
                applicantprofile: [],
                newapplicant: [],
                pickedapplicants: [],
                interviewstage: [],
                testingstage: [],
                offerstage: [],
                hirestage: [],
                skills: [],
                tags: [],
                selectedTags: [],
                inputVisible: false,
                inputValue: '',
                visible: false,
                active: true,
                newapplications: true,
                recommended: true,
                amount: null,
                deadline: null,
                candidate: null,
                applicationid: null,
                projects: [],
                recentprojects: [],
                interviewmodal:false,
                candidatename:null,
                starttime:null,
                endtime:null,
                interviewcandidateapplicant:null



            }
        },
        components: {
            AFormItem,
            ARow,
            ACol,
            RecruiterSider,
            Jobheader,


        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            };
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            // all developer profile list api fetch
            this.alldevsprofile = (await UsersService.devs()).data;
            // all developer users list api fetch
            this.alldevs = (await UsersService.allusers()).data;
            const jobId = this.$store.state.route.params.jobId
            // current job
            this.job = (await Marketplace.specificjob(jobId, auth)).data
            this.deadline = this.job.deadline
            // used as part of system recommendation of candidates
            this.skills = this.job.tech_stack.split(',')
            // allows compatible storage of list to string
            let temptaglist = this.job.tech_stack;
            this.tags = temptaglist.replace(/'/g, '').replace(/ /g, '').split(',')

            this.projects = Projectsservice.allprojects(auth)

            // getting applicants for job
            this.applicants = (await Marketplace.specificjobapplicants(jobId, auth)).data

            // create a profile for each applicant comparision and matching between user,profile and applicant model
            for (let i = 0; i < this.alldevs.length; i++) { //all users
                for (let j = 0; j < this.applicants.length; j++) { //all applicants for this job
                    for (let l = 0; l < this.alldevsprofile.length; l++) { // all user profiles

                        if (this.alldevs[i].id === this.applicants[j].candidate && this.alldevsprofile[l].user === this.alldevs[i].id) {
                            let tags = this.alldevsprofile[l].skills.split(',').slice(0, 3);
                            let stage = this.applicants[j].stage
                            let id = this.applicants[j].id
                            let pk = this.applicants[j].id
                            let user_id = this.applicants[j].candidate
                            let name = this.alldevs[i].username
                            let selected = this.applicants[j].selected
                            let test_stage = this.applicants[j].test_stage
                            let project = this.applicants[j].project
                            let projectname = this.applicants[j].name
                            let status = this.applicants[j].interviewstatus
                            let onepickeddev = new Applicant(
                                id, name, stage, tags, user_id, selected, pk, test_stage, project, projectname,status
                            );

                            this.applicantprofile.push(onepickeddev)

                        }

                    }

                }
            }
            // applicants sorting
            for (let i = 0; i < this.applicantprofile.length; i++) {
                if (this.applicantprofile[i].selected === false && this.applicantprofile[i].stage !== 'rejected') {
                    this.newapplicant.push(this.applicantprofile[i])
                } else if (this.applicantprofile[i].selected) {
                    this.pickedapplicants.push(this.applicantprofile[i])

                }
                // second part of sorting conditional coz the fist condition met
                if (this.applicantprofile[i].stage === 'interview') {
                    this.interviewstage.push(this.applicantprofile[i])

                } else if (this.applicantprofile[i].stage === 'test') {
                    this.testingstage.push(this.applicantprofile[i])

                } else if (this.applicantprofile[i].stage === 'offer') {
                    this.offerstage.push(this.applicantprofile[i])


                } else if (this.applicantprofile[i].stage === 'hired') {
                    this.hirestage.push(this.applicantprofile[i])

                }


            }


            // system recommend candidates (all candidates with matching skill tags - current applicants)
            let allrecommedednouniquefilter = []
            for (let x = 0; x < this.alldevsprofile.length; x++) {
                for (let z = 0; z < this.tags.length; z++) {
                    if (this.alldevsprofile[x].skills.includes(this.tags[z])) { // direct comparision direct match for now
                        let user_id = this.alldevsprofile[x].id
                        allrecommedednouniquefilter.push(user_id)

                    }
                }
            }

            // allows unique filter under codeln recommended candidates id
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }

            // finds the difference to eliminate candidates already picked/selected or applied from recommended
            Array.prototype.diff = function (a) {
                return this.filter(function (i) {
                    return a.indexOf(i) < 0;
                });
            };


            let allrecommended = allrecommedednouniquefilter.filter(onlyUnique);
            let allapplicants = []
            for (let x = 0; x < this.applicants.length; x++) {
                allapplicants.push(this.applicants[x].candidate)
            }
            let recommededlist = allrecommended.diff(allapplicants);


            // create a profile for each recommended comparision and matching between user,profile
            if (recommededlist.length > 0) {
                for (let i = 0; i < this.alldevs.length; i++) { //all users
                    for (let l = 0; l < this.alldevsprofile.length; l++) { // all user profiles
                        for (let k = 0; k < recommededlist.length; k++) {
                            if (this.alldevs[i].id === recommededlist[k] && this.alldevsprofile[l].user === this.alldevs[i].id) {

                                let tags = this.alldevsprofile[l].skills.split(',').slice(0, 3);
                                let stage = 'recommended'
                                let id = this.alldevs[i].id
                                let pk = this.alldevs[i].id
                                let user_id = this.alldevs[i].id
                                let name = this.alldevs[i].username
                                let selected = false
                                let onerecommed = new Recommended(
                                    id, name, stage, tags, user_id, selected, pk
                                );

                                this.recommmedcandidates.push(onerecommed)

                            }

                        }

                    }


                }

            } else {
                this.recommended = false
            }


            // applicants tabs conditional render remains true as per state if length of applicants respectively is greater than one
            if (this.pickedapplicants.length === 0) {
                this.active = false
            } else if (this.newapplicant.length === 0) {
                this.newapplications = false
            } else if (this.recommmedcandidates.length === 0) {
                this.recommended = false
            }

            // recent projects
            this.recentprojects = (await Projectsservice.recentprojects(this.$store.state.user.pk, auth)).data


        },
        methods: {
            moment,

            onEventCreate(application_id,candidate_name) {
                this.interviewmodal = true
                this.candidatename = candidate_name;
                this.interviewcandidateapplicant = application_id


            },
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },
            onDate(date, dateString) {

                this.deadline = dateString
            },

            // acts as filters to project to be asigned under testing stage
            techChoices(tag, checked) {
                const {selectedtech} = this
                const nextSelectedTags = checked
                    ? [...selectedtech, tag]
                    : selectedtech.filter(t => t !== tag)
                this.selectedtech = nextSelectedTags
            },

            onChange(checkedValues) {
                this.test = checkedValues
            },

            showModal(dev, application) {
                this.visible = true
                this.candidate = dev
                this.applicationid = application
            },

            handleOk(e) {

                this.visible = false
            },

            //  enables current job to be updated
            handleSubmit: async function () {

                try {
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
                    this.job.deadline = this.deadline
                    const response = await Marketplace.updatejob(this.job.id, this.job, auth)
                    response()


                } catch (error) {
                    this.error = error.response.data.error

                }


            },

            //logout
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

            // handles active stage of applicants movement keys 1,2,3
            handleMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (id === 1) { // testing
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            this.pickedapplicants[i].stage = 'test'
                            this.testingstage.push(this.pickedapplicants[i])
                            Marketplace.pickreject(action, {stage: 'test'}, auth)

                        }
                    }

                } else if (id === 2) { // interview
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            this.pickedapplicants[i].stage = 'interview'
                            this.interviewstage.push(this.pickedapplicants[i])
                            Marketplace.pickreject(action, {stage: 'interview'}, auth)
                        }
                    }

                } else if (id === 3) { // reject
                    for (let i = 0; i < this.pickedapplicants.length; i++) {
                        if (this.pickedapplicants[i].profile === profile) {
                            this.pickedapplicants[i].stage = 'rejected'
                            Marketplace.pickreject(action, {stage: 'rejected', selected: false}, auth)
                            let index = this.pickedapplicants.indexOf(this.pickedapplicants[i]);
                            this.pickedapplicants.splice(index, 1);
                        }
                    }

                }
            },

            // handles movement on the testing stage keys 1,2,3
            handleTestMenuClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (id === 2) { // interview
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {
                            this.testingstage[i].stage = 'interview'
                            this.interviewstage.push(this.testingstage[i])
                            Marketplace.pickreject(action, {stage: 'interview'}, auth)
                            let index = this.testingstage.indexOf(this.testingstage[i]);
                            this.testingstage.splice(index, 1);

                        }
                    }

                } else if (id === 3) { // offer
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {
                            this.testingstage[i].stage = 'offer'
                            this.offerstage.push(this.testingstage[i])
                            Marketplace.pickreject(action, {stage: 'offer'}, auth)
                            let index = this.testingstage.indexOf(this.testingstage[i]);
                            this.testingstage.splice(index, 1);
                        }
                    }

                } else if (id === 4) { // reject
                    for (let i = 0; i < this.testingstage.length; i++) {
                        if (this.testingstage[i].profile === profile) {
                            this.testingstage[i].stage = 'rejected'
                            Marketplace.pickreject(action, {stage: 'rejected', selected: false}, auth)
                            let index = this.testingstage.indexOf(this.testingstage[i]);
                            this.testingstage.splice(index, 1);
                        }
                    }

                }


            },

            // handles movement on the testing stage keys 1,2,3
            handleInterviewClick(action, profile, id) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (id === 1) { // coding
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {
                            this.interviewstage[i].stage = 'test'
                            this.testingstage.push(this.interviewstage[i])
                            Marketplace.pickreject(action, {stage: 'test'}, auth)
                            let index = this.interviewstage.indexOf(this.interviewstage[i]);
                            this.interviewstage.splice(index, 1);

                        }
                    }

                } else if (id === 2) { // offer
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {
                            this.interviewstage[i].stage = 'offer'
                            this.offerstage.push(this.interviewstage[i])
                            Marketplace.pickreject(action, {stage: 'offer'}, auth)
                            let index = this.interviewstage.indexOf(this.interviewstage[i]);
                            this.interviewstage.splice(index, 1);
                        }
                    }

                } else if (id === 3) { // reject
                    for (let i = 0; i < this.interviewstage.length; i++) {
                        if (this.interviewstage[i].profile === profile) {
                            this.interviewstage[i].stage = 'rejected'
                            Marketplace.pickreject(action, {stage: 'rejected', selected: false}, auth)
                            let index = this.interviewstage.indexOf(this.interviewstage[i]);
                            this.interviewstage.splice(index, 1);
                        }
                    }

                }


            },

            //pick or reject from new applicants
            pickrejectClick(job_id, candidate_id, key) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (key) {
                    for (let i = 0; i < this.newapplicant.length; i++) {
                        if (this.newapplicant[i].profile === candidate_id) {
                            this.newapplicant[i].stage = 'active'
                            this.pickedapplicants.push(this.newapplicant[i])
                            this.active = true
                            let index = this.newapplicant.indexOf(this.newapplicant[i]);
                            this.newapplicant.splice(index, 1);
                            if (this.newapplicant.length === 0) {
                                this.newapplications = false
                            }
                            Marketplace.pickreject(job_id, {stage: 'active', selected: true}, auth)


                        }
                    }
                } else {
                    for (let i = 0; i < this.newapplicant.length; i++) {
                        if (this.newapplicant[i].profile === candidate_id) {

                            let index = this.newapplicant.indexOf(this.newapplicant[i]);
                            this.newapplicant.splice(index, 1);
                            if (this.newapplicant.length === 0) {
                                this.newapplications = false
                            }
                            Marketplace.pickreject(job_id, {stage: 'rejected', selected: false}, auth)


                        }
                    }
                }


            },

            // pick from recommedation list
            pickrecommedationClick(job_id, candidate_id, key) {
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                if (key) {
                    for (let i = 0; i < this.recommmedcandidates.length; i++) {
                        if (this.recommmedcandidates[i].profile === candidate_id) {
                            this.recommmedcandidates[i].stage = 'active'
                            this.pickedapplicants.push(this.recommmedcandidates[i])
                            let index = this.recommmedcandidates.indexOf(this.recommmedcandidates[i]);
                            this.recommmedcandidates.splice(index, 1);
                            if (this.recommmedcandidates.length === 0) {
                                this.recommended = false
                            }
                            Marketplace.pickrecommended(
                                {
                                    job: job_id,
                                    candidate: candidate_id,
                                    stage: 'active',
                                    selected: true
                                },
                                auth
                            )


                        }
                    }
                }

            },

            navigateTo(route) {
                this.$router.push(route)
            },

            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.job.tech_stack = alltags

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


            bundleamount(key) {
                if (key === 1) {
                    this.amount = 200
                } else if (key === 2) {
                    this.amount = 300
                } else {
                    this.amount = 500
                }

            },

            async CreateEvent(application_id){
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                Marketplace.pickreject(application_id, {interviewstarttime: this.starttime,interviewendtime:this.endtime, interviewstatus: 'invite sent'}, auth)
                this.interviewmodal = false
            }



        },
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

    .customtable {


    }

    .radiochoice {
        height: 10rem;
        width: 15rem;
        margin: 4px;

    }

    .center1 {
        margin: auto;
        width: 32rem;

        padding: 0;
    }
    .eventcolors {
        margin-top: 30%;
        border-radius: 50%;
        width: 20px;
        height: 20px;

    }

</style>
