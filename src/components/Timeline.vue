<template>
  <nav class="is-primary panel">
    {{selectedPeriod}}
    <span class="panel-tabs ">
      <a
          v-for="(period, index) in periods"
          :key="index"
          @click="selectPeriod(period)"
          :class="{'is-active' : selectedPeriod === period}"
      >
        {{period}}
      </a>
    </span>
    <TimelineItem
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
    />
  </nav>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {TimeLinePost, today, thisWeek, thisMonth} from "../posts";
import {DateTime} from "luxon";
import TimelineItem from "./TimelineItem.vue";

const periods = ["Today", "This Week", "This Month"] as const;

type Period = typeof periods[number];

const selectedPeriod = ref<Period>("Today");

const selectPeriod = (period: Period) => {
  selectedPeriod.value = period
};

const posts = computed<TimeLinePost[]>(() => {
  return [today, thisWeek, thisMonth]
      .map(post => {
        return {
          ...post, created: DateTime.fromISO(post.created)
        }
      })
      .filter(post => {
        if (selectedPeriod.value === "Today") {
          return post.created >= DateTime.now().minus({day: 1})
        }

        if (selectedPeriod.value === "This Week") {
          return post.created >= DateTime.now().minus({week: 1})
        }

        return post
      });
});
</script>