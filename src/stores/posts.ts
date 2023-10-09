import { defineStore } from "pinia";
import {Post, today, thisWeek, thisMonth} from "../posts";
import {Period} from "../constans";
import {DateTime} from "luxon";
import axios from "axios";

interface PostsState {
    ids: string[],
    all: Map<string, Post>,
    selectedPeriod: Period
}

const delay = () => {
    return new Promise<void>(res => setTimeout(res, 1500))
}

export const usePosts = defineStore("Posts", {
    state: (): PostsState => ({
        ids: [],
        all: new Map(),
        selectedPeriod: "today",
    }),
    actions: {
        setSelectedPeriod(period: Period) {
            this.selectedPeriod = period;
        },
        async getPosts() {
            const response = await axios.get('http://localhost:8000/posts/');

            await delay();

            let ids: string[] = [];
            let all = new Map<string, Post>()

            for(const post of response.data) {
                ids.push(post.id);
                all.set(post.id, post)
            }

            this.ids = ids;
            this.all = all
    },
    },
    getters: {
        filteredPosts: (state) => {
            return state.ids
                .map(id => {
                    const post = state.all.get(id)

                    if(!post) {
                        throw Error(`Post with id of ${id} was expected bun not found.`)
                    }
                    return {
                        ...post,
                        created: DateTime.fromISO(post.created)
                    }
                })
                .filter(post => {
                    if (state.selectedPeriod === "today") {
                        return post.created >= DateTime.now().minus({day: 1})
                    }

                    if (state.selectedPeriod === "this week") {
                        return post.created >= DateTime.now().minus({week: 1})
                    }

                    return post
                })

        }
    }
})