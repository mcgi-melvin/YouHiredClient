import { defineStore } from 'pinia'

export const settings = defineStore('setting', {
    state: () => ({
        plan: null,
        show_profile: false, // in Candidate List (For user type = Candidate)
        password_old: null,
        password_old_confirm: null,
        password_new: null,
        password_new_confirm: null
    }),
    getters: {

    },
    actions: {
        save() {

        },
        clear_password() {

        }
    }
})