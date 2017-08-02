import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Ginza_at_Night%2C_Tokyo.jpg',
        id: 'wertyujhgfdsdfg3245',
        title: 'Meetup in Tokyo',
        date: '2017-10-17'
      },
      { imageUrl: 'https://static.pexels.com/photos/338515/pexels-photo-338515.jpeg',
        id: 'ghnbvcvbgfdsdfg3245',
        title: 'Meetup in Paris',
        date: '2017-10-27'
      }
    ],
    user: {
      id: 'asdfghgfd',
      registeredMeetups: ['wertyujhgfdsdfg3245']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'sdfsdfsdfsdf'
      }
      // connect to firebase and store data
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
