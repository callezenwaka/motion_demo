import { createStore } from 'vuex';
import Username from '@/types/Username';
import Api from '@/services/Api';

export default createStore({
  state: {
    usernames: [] as Username[],
    username: {} as Username,
    profile: false,
    role: '',
  },
  getters: {
    usernames: state => state.usernames,
    username: state => state.username,
    profile: state => state.profile,
    role: state => state.role,
  },
  actions: {
    async addUsername(context, payload) {
      try {
        // api call
        await Api.addUsername(payload);
        context.commit('ADD_USERNAME', payload);
        return;
      } catch (error) {
        console.log(error)
        return;
      }
    },
    async getUsernames(context) {
      try {
        if (context.state.usernames && !!context.state.usernames.length) return context.state.usernames;
        // api call
        const { data } = await Api.getUsernames();
        if (!Array.isArray(data)) return;
        context.commit('SET_USERNAMES', data);
        return;
      } catch (error) {
        console.log(error)
        return;
      }
    },
    async getUsername(context, payload) {
      try {
        // api call
        const { data } = await Api.getUsername(payload);
        if (typeof data != 'object') return;
        context.commit('SET_USERNAME', data)
        return;
      } catch (error) {
        console.log(error)
        return;
      }
    },
    async updateUsername(context, payload) {
      try {
        // api call
        await Api.updateUsername(payload);
        context.commit('UPDATE_USERNAME', payload);
        return;
      } catch (error) {
        console.log(error)
        return;
      }
    },
    async deleteUsername(context, payload) {
      try {
        // api call
        await Api.deleteUsername(payload);
        context.commit('DELETE_USERNAME', payload);
        return;
      } catch (error) {
        console.log(error)
        return;
      }
    },
    async setProfile(context, payload) {
			context.commit('SET_PROFILE', payload);
		},
    async setRole(context, payload) {
			context.commit('SET_ROLE', payload);
		},
  },
  mutations: {
    ADD_USERNAME(state, username: Username) {
      state.usernames.unshift(username);
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_USERNAMES(state, usernames) {
      state.usernames = usernames;
    },
    UPDATE_USERNAME(state, payload: Username) {
      const index = state.usernames.findIndex(username => username.id === payload.id);
      if (index !== -1) {
        state.usernames.splice(index, 1, payload);
      }
    },
    DELETE_USERNAME(state, payload) {
      state.usernames = state.usernames.filter(username => username.id !== payload);
    },
    SET_PROFILE(state, profile) {
			// state.profile = profile === "true"? true : false;
      state.profile = profile;
		},
    SET_ROLE(state, role) {
			state.role = role;
		},
  },
  modules: {
  }
})
