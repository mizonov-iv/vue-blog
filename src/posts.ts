import {DateTime} from "luxon";

export interface Post {
    id: string;
    title: string;
    created: string;
}

export const today: Post = {
    id: "1",
    title: "today",
    created: DateTime.now().toISO()
}

export const thisWeek: Post = {
    id: "2",
    title: "this week",
    created: DateTime.now().minus({days: 5}).toISO()
}

export const thisMonth: Post = {
    id: "2",
    title: "this month",
    created: DateTime.now().minus({weeks: 3}).toISO()
}

