<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import iCalendarPlugin from "@fullcalendar/icalendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import { CalendarOptions } from "@fullcalendar/core";

const calendarOptions: CalendarOptions = {
  plugins: [dayGridPlugin, iCalendarPlugin, timeGridPlugin],
  initialView: "timeGridWeek",
  nowIndicator: true,
  contentHeight: "auto",
  eventSources: [
    {
      url: "https://calendar.proton.me/api/calendar/v1/url/jEDKdj_XrUSDeWi5GbcC3fGxyivaCdk5cUfEmcYM5uKNtqjuiV78nT01GBdburRVFIJniR_PzO2B8K7VYDm7qg==/calendar.ics?CacheKey=JgdpivQIpNNZnQGAFL5bLw%3D%3D",
      format: "ics",
      color: "pink",
      textColor: "black",
    },
    {
      url: "https://calendar.proton.me/api/calendar/v1/url/LUFLm1Eb9DgGlLwaE4Oc5UD4PZhfSTVR1E1stPgucWnl4ycKZxo5eFMiuGHMIvnZ9VQMZZhXjy1uRrGgm3oMwQ==/calendar.ics?CacheKey=shgJNTJnaZmxLu_X9jFaRQ%3D%3D&PassphraseKey=3m1iOCkA_CquaCmvrG5atjTMHA_HEG2qffBNBG2UHdY%3D",
      format: "ics",
      color: "grey",
    },
    {
      url: "https://calendar.proton.me/api/calendar/v1/url/ovLvtOUTe94QpH25AG4u_kNS3wK7YceaLlaLqPxPr_Jrnl4wfOH5gM3qwQYUJIOI8tnInzjmQ7OPAJYsaPT2nQ==/calendar.ics?CacheKey=t2jKWeAkq_ZpRrZi97g37A%3D%3D",
      format: "ics",
      color: "#87CEFA",
      textColor: "black",
    },
  ],
};
</script>
<template>
  <div>
    <FullCalendar :options="calendarOptions" class="w-full h-full" />
  </div>
</template>

<style>
.fc-event-title {
  font-size: 0.7rem;
}
</style>
