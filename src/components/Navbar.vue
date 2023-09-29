<template>
  <nav>
    <a
       href=""
       v-for="period in periods"
       :key="period"
       @click.prevent="selectPeriod(period)"
    >
      {{period}}
    </a>
  </nav>
  <p>{{selectedPeriod}}</p>
  <ul>
    <li v-for="post in posts" :key="post">
      <p>{{post.title}}</p>
      <p>{{post.created.toFormat("d MMM")}}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {Post, today, thisWeek, thisMonth} from "../posts";
import {DateTime} from "luxon";

const periods = ["today", "this week", "this month"] as const
type Period = typeof periods[number];

const selectedPeriod = ref<Period>("today");

const posts = computed( () => {
  return [today, thisWeek, thisMonth]
      .map(post => {
        return {
          ...post,
          created: DateTime.fromISO(post.created)
        }
      })
      .filter(post => {
        if (selectedPeriod.value === "today") {
          return post.created >= DateTime.now().minus({day: 1})
        }

        if (selectedPeriod.value === "this week") {
          return post.created >= DateTime.now().minus({week: 1})
        }

        return post
      })
})

const selectPeriod = (period: Period) => {
    selectedPeriod.value = period
  }
</script>
