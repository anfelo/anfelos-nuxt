import * as fromApi from "@/services/api";
import tags from "@/helpers/tags";

export const state = () => ({
  appTheme: "dark-theme",
  tags: [...tags],
  bio: null,
  projects: [],
  posts: []
});

export const mutations = {
  updateAppTheme: (state, payload) => {
    state.appTheme = payload;
  },
  updateBio: (state, payload) => {
    state.bio = payload;
  },
  updateProjects: (state, payload) => {
    state.projects = payload;
  },
  updatePosts: (state, payload) => {
    state.posts = payload;
  }
};

export const actions = {
  async getBioData({ state, commit }) {
    if (state.bio) return;
    try {
      const res = await fromApi.getBio();
      if (res.status === 200) {
        commit("updateBio", res.body);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getProjectsData({ state, commit }) {
    if (state.projects.length) return;
    try {
      const res = await fromApi.getProjects();
      if (res.status === 200) {
        commit("updateProjects", res.body);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getPostsData({ state, commit }) {
    if (state.posts.length) return;
    try {
      const res = await fromApi.getBlogPosts();
      if (res.status === 200) {
        const sortedPosts = res.body;
        sortedPosts.sort(function(a, b) {
          const aDate = new Date(a.publishedOn);
          const bDate = new Date(b.publishedOn);
          if (aDate > bDate) {
            return -1;
          }
          if (aDate < bDate) {
            return 1;
          }
          return 0;
        });
        commit("updatePosts", sortedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
