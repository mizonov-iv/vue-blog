import { defineStore } from "pinia";
import {TimeLinePost} from "../posts";
import {NewUser} from "../users";

export const useUsers = defineStore("users", {
    actions: {
        createNewUser (newUser: NewUser) {
            // console.log(post);
            const body = JSON.stringify(newUser);

            return window.fetch("http://localhost:8000/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            })
        }

    }
})