<template>
  <v-app>
    <component :is="layout" key="normalLayout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
const defaultLayout = 'outer';

export default {
  name: 'App',
  components: {
    //
  },
  updated() {
    this.setLayout();
  },
  data() {
    return {
      layout: null,
    };
  },
  methods: {
    setLayout() {
      this.layout = `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};

</script>
