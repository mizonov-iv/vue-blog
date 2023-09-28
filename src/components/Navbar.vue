<template>
  <nav>
    <a
        href=""
        :class="{'active': period === selectedPeriod}"
        v-for="period in periods"
        :key="period"
        @click.prevent="selectPeriod(period)"
    >
      {{period}}
    </a>
  </nav>
  <h1>{{selectedPeriod}}</h1>
  <ul>
    <li v-for="post in posts" :key="post">
      <p>{{post.title}}</p>
      <p>{{post.created}}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Post, today, thisWeek, thisMonth} from "../posts";

const periods = ["today", "this week", "this month"] as const;

type Period = typeof periods[number]

const posts: Post[] = [
    today,
    thisWeek,
    thisMonth
]

function selectPeriod (period: Period) {
  selectedPeriod.value = period;
}

const selectedPeriod = ref<Period>("today");

</script>