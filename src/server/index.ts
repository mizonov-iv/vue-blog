import express, {Request, Response} from 'express';
import cors from 'cors';
import {today, thisWeek, thisMonth, Post} from "../posts";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";
import bodyParser from "body-parser";
import { NewUser, User } from "../users";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

const allPosts = [today, thisWeek, thisMonth];
const allUsers: User[] = [];

app.get('/posts', (req, res) => {
    res.json(allPosts)
});

app.post<{}, {}, Post>('/posts', (req, res) => {
    const post = {...req.body, id: (Math.random() * 100000).toFixed()};
    allPosts.push(post);
    res.json(post);
});

const SECRET = "my-secret";
const COOKIE = "vue-jwt";

function authenticate (id: string, req: Request, res: Response) {
    const token = jsonwebtoken.sign({id}, SECRET, {
        issuer: "mizonov.iv",
        expiresIn: "30 days",
    })
    res.cookie(COOKIE, token, { httpOnly: true});
}

app.post<{}, {}, NewUser>('/users', (req, res) => {
    const user = {...req.body, id: (Math.random() * 100000).toFixed()};
    allUsers.push(user);
    authenticate(user.id, req, res);
    const {password, ...rest } = user;
    res.json(rest);
});

app.listen(8000, () => {
    console.log('Listening on port 8000')
})
