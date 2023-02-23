<script setup lang="ts">
import { VNetworkGraph } from "v-network-graph";
import "v-network-graph/lib/style.css";
import * as vNG from "v-network-graph";
import { reactive, watch, ref } from "vue";

const INF = 100000;
const initialConfigs = vNG.defineConfigs({
  view: {
    panEnabled: false,
    zoomEnabled: false,
  },
  node: {
    draggable: false,
    label: {
      visible: true,
      direction: "south",
      directionAutoAdjustment: true,
    },
    normal: {
      color: (node) => node.color,
    },
    hover: {
      color: "#f3bd7f",
    },
  },
  edge: {
    normal: {
      width: 3,
      color: "#e87d35",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    hover: {
      width: 4,
      color: "#e87d35",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    gap: 5,
    type: "straight",
    margin: 2,
    marker: {
      source: {
        type: "none",
        width: 4,
        height: 4,
        margin: -1,
        units: "strokeWidth",
        color: null,
      },
      target: {
        type: "arrow",
        width: 4,
        height: 4,
        margin: -1,
        units: "strokeWidth",
        color: null,
      },
    },
  },
});
const configs = reactive(initialConfigs);

type AdjacencyList = {
  [key: string]: string[];
};

const graphData: AdjacencyList = {
  A: ["B", "D"],
  B: ["E"],
  C: ["E", "F"],
  D: [],
  E: ["A", "D"],
  F: [],
};

const graph = reactive({
  nodes: {},
  edges: {},
  adjacencyList: graphData,
  layout: {
    nodes: {
      A: { x: 0, y: 0 },
      B: { x: 0, y: 100 },
      C: { x: 200, y: 0 },
      D: { x: 100, y: 0 },
      E: { x: 100, y: 100 },
      F: { x: 200, y: 100 },
    },
  },
});
const codeGlobalVariables = reactive({
  d: {},
  π: {},
  Q: [],
  s: "C",
  u: "",
  v: "",
  forEachLoopHelper: -1,
});

// write nodes and edges by the graph dict above
const adjacencyListToGraph = () => {
  for (const [node, edges] of Object.entries(graph.adjacencyList)) {
    graph.nodes[node] = { name: node, color: "#f3bd7f" };
    if (node === codeGlobalVariables.s) {
      graph.nodes[node].color = "#e87d35";
      graph.nodes[node].name = `${node} (s)`;
    }
    for (const edge of edges) {
      graph.edges[`${node}-${edge}`] = { source: node, target: edge };
    }
  }
};

adjacencyListToGraph();

watch(
  () => codeGlobalVariables.u,
  () => {
    // e77975 -> original color
    for (const node of Object.keys(graph.nodes)) {
      if (graph.nodes[node].color == "#e77975") {
        graph.nodes[node].color = "#f3bd7f";
        graph.nodes[node].name = node;
      }
    }
    graph.nodes[codeGlobalVariables.u].color = "#e77975";
    graph.nodes[codeGlobalVariables.u].name = `${codeGlobalVariables.u} (u)`;
  }
);

watch(
  () => codeGlobalVariables.v,
  () => {
    for (const node of Object.keys(graph.nodes)) {
      if (graph.nodes[node].color == "#da8246") {
        graph.nodes[node].color = "#f3bd7f";
        graph.nodes[node].name = node;
      }
    }
    graph.nodes[codeGlobalVariables.v].color = "#da8246";
    graph.nodes[codeGlobalVariables.v].name = `${codeGlobalVariables.v} (v)`;
  }
);

watch(
  () => codeGlobalVariables.s,
  () => {
    for (const node of Object.keys(graph.nodes)) {
      if (graph.nodes[node].color == "#e87d35") {
        graph.nodes[node].color = "#f3bd7f";
        graph.nodes[node].name = node;
      }
    }
    graph.nodes[codeGlobalVariables.s].color = "#e87d35";
    graph.nodes[codeGlobalVariables.s].name = `${codeGlobalVariables.s} (s)`;
    codes.codes[0].line = `s = ${codeGlobalVariables.s}`;
  }
);

const codes = reactive({
  codes: [
    {
      index: 0,
      line: `s = ${codeGlobalVariables.s}`,
      func: () => {
        return 1;
      },
    },
    {
      index: 1,
      line: "d[s] = 0; π[s] = nil",
      func: () => {
        codeGlobalVariables.d[codeGlobalVariables.s] = 0;
        codeGlobalVariables.π[codeGlobalVariables.s] = null;
        return 2;
      },
    },
    {
      index: 2,
      line: "for each u ∈ V − { s }: \n \td[u] = ∞\n\tπ[u] = nil",
      func: () => {
        for (const node of Object.keys(graph.adjacencyList)) {
          if (node !== codeGlobalVariables.s) {
            codeGlobalVariables.d[node] = INF;
            codeGlobalVariables.π[node] = null;
          }
        }
        return 3;
      },
    },
    {
      index: 3,
      line: "Q = []",
      func: () => {
        codeGlobalVariables.Q = [];
        return 4;
      },
    },
    {
      index: 4,
      line: "Q.Enqueue(s)",
      func: () => {
        codeGlobalVariables.Q.push(codeGlobalVariables.s);
        return 5;
      },
    },
    {
      index: 5,
      line: "while Q.length !== 0:",
      func: () => {
        if (codeGlobalVariables.Q.length === 0) return -1;
        return 6;
      },
    },
    {
      index: 6,
      line: "\tu = Q.Dequeue()",
      func: () => {
        codeGlobalVariables.u = codeGlobalVariables.Q.shift();
        codeGlobalVariables.forEachLoopHelper = -1;
        return 7;
      },
    },
    {
      index: 7,
      line: "\tfor each v ∈ Adj[u]",
      func: () => {
        codeGlobalVariables.forEachLoopHelper += 1;
        if (
          codeGlobalVariables.forEachLoopHelper >=
          graph.adjacencyList[codeGlobalVariables.u].length
        ) {
          return 5;
        }
        codeGlobalVariables.v =
          graph.adjacencyList[codeGlobalVariables.u][
            codeGlobalVariables.forEachLoopHelper
          ];
        return 8;
      },
    },
    {
      index: 8,
      line: "\t\tif d[v] = inf",
      func: () => {
        if (codeGlobalVariables.d[codeGlobalVariables.v] === INF) return 9;
        return 7;
      },
    },
    {
      index: 9,
      line: "\t\t\td[v] = d[u] + 1",
      func: () => {
        codeGlobalVariables.d[codeGlobalVariables.v] =
          codeGlobalVariables.d[codeGlobalVariables.u] + 1;
        return 10;
      },
    },
    {
      index: 10,
      line: "\t\t\tπ[v] = u",
      func: () => {
        codeGlobalVariables.π[codeGlobalVariables.v] = codeGlobalVariables.u;
        return 11;
      },
    },
    {
      index: 11,
      line: "\t\t\tQ.Enqueue(v)",
      func: () => {
        codeGlobalVariables.Q.push(codeGlobalVariables.v);
        return 7;
      },
    },
  ],
});

const currentCodeIndex = ref(0);
const doCode = () => {
  const code = codes.codes[currentCodeIndex.value];
  if (code) {
    const nextIndex = code.func();
    currentCodeIndex.value = nextIndex;
    if (nextIndex === -1) {
      for (const node of Object.keys(graph.nodes)) {
        graph.nodes[node].color = "#f3bd7f";
        graph.nodes[node].name =
          node +
          " (d = " +
          (codeGlobalVariables.d[node] == INF
            ? "inf"
            : codeGlobalVariables.d[node]) +
          ", π = " +
          codeGlobalVariables.π[node] +
          ")";
      }
    }
  }
};
</script>

<template>
  <div>
    <div v-if="currentCodeIndex != -1" class="flex">
      <button
        @click="doCode"
        class="bg-orange-300 px-3 py-2 dark:invert text-black"
      >
        Run one line
      </button>
      <p class="ml-4 mr-2" v-if="currentCodeIndex == 0">s(source) =</p>
      <select
        v-if="currentCodeIndex == 0"
        class="px-4 dark:invert text-black"
        placeholder="s (source) = "
        v-model="codeGlobalVariables.s"
      >
        <option v-for="node in Object.keys(graph.nodes)" :value="node">
          {{ node }}
        </option>
      </select>
    </div>
    <div class="flex items-center flex-col sm:flex-row justify-center gap-4">
      <div class="w-80 h-52 bg-white dark:invert">
        <v-network-graph
          v-model:nodes="graph.nodes"
          :edges="graph.edges"
          :configs="configs"
          v-model:layouts="graph.layout"
        />
      </div>
      <div class="p-4 text-sm">
        <p
          v-for="line in codes.codes"
          :key="line.index"
          :class="[
            line.index == currentCodeIndex ? 'text-highlight font-bold' : '',
            'whitespace-pre-wrap',
          ]"
        >
          <code> {{ line.line }}</code>
        </p>
      </div>
    </div>
    <div class="whitespace-pre-wrap text-sm opacity-75 w-full overflow-x-auto bg-white dark:bg-black p-4">
      <code>d: {{ JSON.stringify(codeGlobalVariables.d) }}</code>
      <br />
      <code>π: {{ JSON.stringify(codeGlobalVariables.π) }} </code>
      <br />
      <code>Q: {{ JSON.stringify(codeGlobalVariables.Q) }}</code>
      <br />
    </div>
  </div>
</template>
