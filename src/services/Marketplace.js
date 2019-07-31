import Api from '@/services/Api'

export default {

    pickdeveloper(instance,auth){
      return Api().post(`marketplace/pickdev `,instance, auth)
    },

    mydevelopers(user_id, auth) {
        return Api().get(`marketplace/mydevs/${user_id} `, auth)
    },
    allmyjobapplicants(user_id,auth){
        return Api().get(`marketplace/myapplicants/${user_id} `, auth)
    },

    alljobs() {
        return Api().get('marketplace/alljobs')
    },
    myjobs(user_id, auth) {
        return Api().get(`marketplace/myjobs/${user_id}`, auth)
    },
    applicants(job_id, auth) {
        return Api().get(`marketplace/jobapplicants/${job_id}`, auth)
    },
    specificjob(job_id, auth) {
        return Api().get(`marketplace/specificjob/${job_id}`, auth)
    },
    specificjobapplicants(job_id, auth) {
        return Api().get(`marketplace/specificjobapplicants/${job_id}`, auth)
    },
    joboneapplicant(candidate_id, job_id, auth) {
        return Api().get(`marketplace/myjobapplication/${candidate_id}/${job_id}`, auth)
    },
    jobdetails(job_id,auth){
        return Api().get(`marketplace/jobdetails/${job_id}`, auth)

    },
    candidatejobs(candidate_id,auth){
        return Api().get(`marketplace/candidatejobs/${candidate_id}`, auth)

    },
    updatejob(job_id, CurrentJob, auth) {
        return Api().patch(`marketplace/updatejob/${job_id} `, CurrentJob, auth)
    },

    pickreject(jobapplication_id,Currentapplication, auth) {
        return Api().patch(`marketplace/pickreject/${jobapplication_id} `, Currentapplication,auth)
    },
    retrieveapplication(jobapplication_id, auth) {
        return Api().get(`marketplace/pickreject/${jobapplication_id} `, auth)
    },
    candidatemanager(candidatemanagement_id,CurrentCandidate, auth) {
        return Api().patch(`marketplace/candidatemanager/${candidatemanagement_id} `, CurrentCandidate,auth)
    },
    retrievecandidate(application_id, auth) {
        return Api().get(`marketplace/candidatemanager/${application_id} `, auth)
    },

    unpublishjob(job_id,Currentjob, auth) {
        return Api().patch(`marketplace/unpublishjob/${job_id} `, Currentjob,auth)
    },
    createjob(currentJob, auth) {
        return Api().post(`marketplace/createjob`, currentJob, auth)
    },
    pickrecommended(newapplication,auth) {
        return Api().post(`marketplace/pickrecommended`,newapplication,auth)
    },
    applyjob(newapplication,auth) {
        return Api().post(`marketplace/applyjob`,newapplication,auth)
    }
}
