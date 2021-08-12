<template>
  <v-col cols="12" style="padding: 0px;margin: 0px">
    <v-card>
      <v-toolbar
          color="purple"
          dark
          flat

      >
        <v-text-field
            class="mx-4 mt-3"
            flat
            hide-details
            label="Search page"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
        ></v-text-field>
      </v-toolbar>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Header',
  components: {
    //
  },
  props: {
    //
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
};
</script>
