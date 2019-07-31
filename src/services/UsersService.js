import Api from '@/services/Api'

export default {
  authenticated (user_id,auth){
    return Api().get(`getprofile/${user_id} `,auth)
  },

  devs (){
    return Api().get('users')
  },
  allusers (){
    return Api().get('allusers')
  },
  currentuser (user_id,auth) {
    return Api().get(`getprofile/${user_id} `,auth)
  },
  retrieveuser (user_id,auth) {
    return Api().get(`getuser/${user_id} `,auth)
  },
  talentuser (id) {
    return Api().get(`gettalent/${id} `)
  },
  experience (id,auth) {
    return Api().get(`getexperience/${id} `,auth)
  },
  portfolio (id,auth) {
    return Api().get(`getportofolio/${id} `,auth)
  },
  getallexperiences () {
    return Api().get(`getallexperience`,)
  },
  getallportfolios () {
    return Api().get(`getallportofolio`,)
  },
  update (user_id,currentUserProfile,auth) {
    return Api().patch(`updater/${user_id} `,currentUserProfile,auth)
  }
}
