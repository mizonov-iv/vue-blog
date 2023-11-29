import { createRouter, createWebHistory } from "vue-router";
import {useUsers} from "../stores/users";
import HomeView from "../views/HomeView.vue";
import NewPostView from "../views/NewPostView.vue";
import ShowPostView from "../views/ShowPostView.vue";
import EditPostView from "../views/EditPostView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: HomeView
        },
        {
            path: '/posts/new',
            component: NewPostView,
            beforeEnter: () => {
                const usersStore = useUsers();

                if(!usersStore.currentUserId) {
                    return {
                        path: "/"
                    }
                }
            }
        },
        {
          path: "/posts/:id",
          component: ShowPostView
        },
        {
            path: "/posts/:id/edit",
            component: EditPostView
        }
    ]
})