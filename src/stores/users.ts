import { defineStore } from "pinia";
import {NewUser} from "../users";

export const useUsers = defineStore("users", {
    actions: {
        createNewUser (newUser: NewUser) {
            // console.log(post);
            const body = JSON.stringify(newUser);

            return window.fetch("api/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            })
        }

    }
})