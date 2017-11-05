import axios from 'axios'

export function fetchItem (id) {
  return new Promise((resolve, reject) => {
    const item = {
      title: `i am fetchItem from ${id}`
    }
    setTimeout(() => {
      resolve(item)
    }, 300)
  })
}

export function fetchVoteList () {
  return axios.get('http://campaign2.newband.com/vote/nmsshow2017_teacher/sz/vote')
  .then(function (res) {
    return res.data
  })
  .catch(function (error) {
    console.log(error)
  })
}
