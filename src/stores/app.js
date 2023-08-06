import { defineStore } from 'pinia'
import {user} from "@/stores/user";
import {settings} from "@/stores/settings";

export const app = defineStore('app', {
  state: () => ({
    profile: user(),
    settings: settings()
  }),
  getters: {

  },
  actions: {

  }
})