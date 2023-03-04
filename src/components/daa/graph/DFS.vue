<script setup lang="ts">
import { VNetworkGraph } from "v-network-graph";
import "v-network-graph/lib/style.css";
import * as vNG from "v-network-graph";
import { reactive, watch, ref } from "vue";
import GraphEditBar from "./GraphEditBar.vue";
const INF = 100000;

const configs = reactive(
  vNG.defineConfigs({
    view: {
      panEnabled: true,
      zoomEnabled: true,
    },
    node: {
      draggable: true,
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
        },
        target: {
          type: "arrow",
        },
      },
    },
  })
);

const graph = reactive({
  nodes: {},
  edges: {},
  adjacencyList: {
    A: ["B", "D"],
    B: ["E"],
    C: ["E", "F"],
    D: [],
    E: ["A", "D"],
    F: [],
  },
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
  f: {},
  π: {},
  color: {},
  s: "C",
  u: "",
  v: "",
  time: 0,
  forEachLoopHelper1: -1,
  forEachLoopHelper2: -1,
  forEachLoopHelper3: -1,
});

// write nodes and edges by the graph dict above
const adjacencyListToGraph = () => {
  for (const [node, edges] of Object.entries(graph.adjacencyList)) {
    graph.nodes[node] = { name: node, color: "#f3bd7f" };
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

const addNode = () => {
  const node = String.fromCharCode(65 + Object.keys(graph.nodes).length);
  graph.nodes[node] = { name: node, color: "#f3bd7f" };
  graph.adjacencyList[node] = [];
};

const addEdge = (sourceName: string, targetName: string) => {
  graph.adjacencyList[sourceName].push(targetName);
  graph.edges[`${sourceName}-${targetName}`] = {
    source: sourceName,
    target: targetName,
  };
  configs.edge.marker.target.type = "none";
  setTimeout(() => {
    configs.edge.marker.target.type = "arrow";
  }, 1);
};

const codes = reactive({
  codes: [
    {
      index: 0,
      line: 'for u ∈ V\n\tcolor[u] = "white"\n\tπ[u] = NIL',
      func: () => {
        for (const node of Object.keys(graph.nodes)) {
          codeGlobalVariables.π[node] = "NIL";
          codeGlobalVariables.color[node] = "white";
        }
        return 1;
      },
    },
    {
      index: 1,
      line: "time = 0",
      func: () => {
        codeGlobalVariables.time = 0;
        return 2;
      },
    },
    {
      index: 2,
      line: 'for u ∈ V',
      func: () => {
        codeGlobalVariables.forEachLoopHelper1 += 1;
        if(codeGlobalVariables.forEachLoopHelper1 < Object.keys(graph.adjacencyList).length) {
          codeGlobalVariables.u = Object.keys(graph.adjacencyList)[codeGlobalVariables.forEachLoopHelper1];
          return 3;
        }
        return -1;
      },
    },
    {
      index: 3,
      line: '\tif color[u] == "white"',
      func: () => {
        if(codeGlobalVariables.color[codeGlobalVariables.u] == "white") {
          return 4;
        }
        return 2;
      },
    },
    {
      index: 4,
      line: '\t\tDFS-VISIT(u)',
      func: () => {
        return 5;
      },
    }
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
        graph.nodes[
          node
        ].name = `${node} (d = ${codeGlobalVariables.d[node]}, f = ${codeGlobalVariables.f[node]}, π = ${codeGlobalVariables.π[node]})`;
      }
    }
  }
};

const isRunningWithInterval = ref(false);
const doCodeWithInterval = () => {
  isRunningWithInterval.value = true;
  if (currentCodeIndex.value != -1) {
    doCode();
    setTimeout(doCodeWithInterval, 500);
  }
};
</script>

<template>
  <div>
    <div v-if="currentCodeIndex != -1" class="flex">
      <div class="flex gap-4" v-if="!isRunningWithInterval">
        <button
          @click="doCode"
          class="bg-orange-300 px-3 py-2 dark:invert text-black"
        >
          Run one line
        </button>
        <button
          @click="doCodeWithInterval"
          class="bg-orange-300 px-3 py-2 dark:invert text-black"
        >
          Run all lines
        </button>
      </div>
    </div>
    <div class="flex items-center flex-col sm:flex-row justify-center gap-4">
      <div>
        <div class="w-80 h-52 bg-white dark:invert">
          <v-network-graph
            v-model:nodes="graph.nodes"
            :edges="graph.edges"
            :configs="configs"
            v-model:layouts="graph.layout"
          />
        </div>
        <GraphEditBar
          :nodes="Object.keys(graph.nodes)"
          @add-edge="addEdge"
          @add-node="addNode"
        />
      </div>
      <div class="p-4 text-sm">
        <p
          v-for="line in codes.codes"
          :key="line.index"
          :class="[
            line.index == currentCodeIndex ? 'text-red-400 font-bold' : '',
            'whitespace-pre-wrap',
          ]"
        >
          <code> {{ line.line }}</code>
        </p>
      </div>
    </div>
    <div
      class="whitespace-pre-wrap text-sm opacity-75 w-full overflow-x-auto bg-white dark:bg-black p-4"
    >
      <code>current time: {{ JSON.stringify(codeGlobalVariables.time) }} </code>
      <br />
      <code>d: {{ JSON.stringify(codeGlobalVariables.d) }}</code>
      <br />
      <code>f: {{ JSON.stringify(codeGlobalVariables.f) }}</code>
      <br />
      <code>π: {{ JSON.stringify(codeGlobalVariables.π) }} </code>
      <br />
      <code>color: {{ JSON.stringify(codeGlobalVariables.color) }} </code>
      <br />
    </div>
  </div>
</template>
