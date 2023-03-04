<script setup lang="ts">
import { reactive } from 'vue';
const addEdgeInfo = reactive({
  source: "",
  target: "",
});

defineProps({
  nodes: Array<String>
})

const emit = defineEmits<{
  (e: 'addNode'): void
  (e: 'addEdge', sourceName: string, targetName: string): void
}>()

</script>

<template>
  <div class="flex gap-4 mt-2">
    <button
      @click="emit('addNode')"
      class="bg-orange-300 px-3 py-2 dark:invert text-black my-2"
    >
      +Node
    </button>
    <div
      class="flex items-stretch gap-2 border border-yellow-800 dark:border-blue-300 p-2"
    >
      <select
        class="px-4 dark:invert bg-white text-black"
        placeholder=""
        v-model="addEdgeInfo.source"
      >
        <option v-for="node in nodes" :value="node">
          {{ node }}
        </option>
      </select>
      <div class="h-full flex items-center">-></div>
      <select
        class="px-4 dark:invert bg-white text-black"
        placeholder=""
        v-model="addEdgeInfo.target"
      >
        <option v-for="node in nodes" :value="node">
          {{ node }}
        </option>
      </select>

      <button
        @click="emit('addEdge', addEdgeInfo.source, addEdgeInfo.target)"
        class="bg-orange-300 px-3 py-2 dark:invert text-black"
      >
        +Edge
      </button>
    </div>
  </div>
</template>
