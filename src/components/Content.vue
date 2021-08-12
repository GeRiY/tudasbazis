<template>
  <v-container>
    <center><h1>Content page</h1></center>
    <v-text-field>
      {{ currentContent.text }}
    </v-text-field>
  </v-container>
</template>

<script>
export default {
  name: 'Content',
  components: {
    //
  },
  beforeMount() {
    for (let i = 0; i < this.content.length; i++) {
      let content = this.content[i]
      if(i === this.contentId){
        this.currentContent = content
      }
    }
  },
  props: {
    contentId: Number
  },
  data() {
    return {
      currentContent: null,
      content: [
        {text: '1. Page leírás'},
        {text: '2. Page leírás'},
        {text: '3. Page leírás'},
        {text: '4. Page leírás'},
        {text: '5. Page leírás'},
        {text: '6. Page leírás'},
        {text: '7. Page leírás'},
        {text: '8. Page leírás'},
        {text: '9. Page leírás'},
        {text: '10. Page leírás'},
        {text: '11. Page leírás'},
        {text: '12. Page leírás'},
      ]
    };
  },
  methods: {
    //
  },
};
</script>
