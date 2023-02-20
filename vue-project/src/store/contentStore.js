import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        contents: [],
    }),
    getters: {
      getUsers(state){
          return state.users
        },
        getContent(state){
          return state.contents
        }
    },
    actions: {
      async fetchUsers() {
        try {
          const data = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.users = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchContents() {
        try{
            const options = {
                method: 'GET',
                url: 'https://webtoon.p.rapidapi.com/canvas/episodes/list',
                params: { titleNo: '767708', startIndex: '0', language: 'en', pageSize: '20' },
                headers: {
                  'X-RapidAPI-Key': 'e45b8f8e37msh7236953828362b2p1e804bjsnbb7266f0a629',
                  'X-RapidAPI-Host': 'webtoon.p.rapidapi.com'
                }
              };
              
              const data = await axios.request(options)
            //   console.log(data.data.message.result.episodeList.episode)
              
              
              this.contents = data.data.message.result.episodeList.episode
              }
              catch (error) {
                alert(error)
                console.log(error)
              }
        }
    },
})