<template>
  <div class="home">
    <RenderJupyterNotebook :notebook="notebook" />
  </div>
</template>

<script>
import RenderJupyterNotebook from "render-jupyter-notebook-vue";
import example from "./compute.json";

export default {
  name: "HomeView",
  components: { RenderJupyterNotebook },
  data() {
    return {
      notebook: example,
    };
  },
};
</script>