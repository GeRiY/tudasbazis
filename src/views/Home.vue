<template>
  <v-container v-frag>
    <v-row>
      <Header />
      <v-navigation-drawer
          style="padding: 0px; margin: 0px"
          :color="drawerBgColor"
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
      >
        <v-list>
          <v-list-item @click="openClose">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-list-item-content v-text="'Szakaszok'"></v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item v-for="(item, i) in szakaszok" :key="i" @click="setLapok">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content v-text="item.text"></v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer v-show="lapok.data.length > 0" :color="drawerBgColor">
        <v-list v-show="!mini">
          <v-list-item>
            <v-list-item-icon>

            </v-list-item-icon>
            <v-list-item-content></v-list-item-content>
          </v-list-item>
          <v-list-item v-for="(item, i) in lapok.data" :key="i" @click="setContent">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content v-text="item.text"></v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <Content v-show="contentId > 0" :contentId="contentId"/>
    </v-row>
  </v-container>
</template>

<script>

import '@mdi/font/css/materialdesignicons.css'
import Header from "../components/Header";
import Content from "../components/Content";

export default {
  name: 'Home',
  components: {
    Content,
    Header,
  },
  props: {
    //
  },
  data() {
    return {
      drawer: null,
      drawerBgColor: 'lightgrey',
      mini: false,
      contentId: 0,
      szakaszok: [
        {
          text: 'Szakasz 1',
          icon: 'mdi-folder',
          lapok: [
            {
              text: 'lap 1a',
              icon: 'mdi-folder',
              contentId: 1,
            },
            {
              text: 'lap 2a',
              icon: 'mdi-folder',
              contentId: 2,
            },
            {
              text: 'lap 3a',
              icon: 'mdi-folder',
              contentId: 3,
            },
          ]
        },
        {
          text: 'Szakasz 2',
          icon: 'mdi-folder',
          lapok: [
            {
              text: 'lap 1b',
              icon: 'mdi-folder',
              contentId: 4,
            },
            {
              text: 'lap 2b',
              icon: 'mdi-folder',
              contentId: 5,
            },
            {
              text: 'lap 3b',
              icon: 'mdi-folder',
              contentId: 6,
            },
          ]
        },
        {
          text: 'Szakasz 3',
          icon: 'mdi-folder',
          lapok: [
            {
              text: 'lap 1c',
              icon: 'mdi-folder',
              contentId: 7,
            },
            {
              text: 'lap 2c',
              icon: 'mdi-folder',
              contentId: 8,
            },
            {
              text: 'lap 3c',
              icon: 'mdi-folder',
              contentId: 9,
            },
          ]
        },
        {
          text: 'Szakasz 4',
          icon: 'mdi-folder',
          lapok: [
            {
              text: 'lap 1d',
              icon: 'mdi-folder',
              contentId: 10,
            },
            {
              text: 'lap 2d',
              icon: 'mdi-folder',
              contentId: 11,
            },
            {
              text: 'lap 3d',
              icon: 'mdi-folder',
              contentId: 12,
            },
          ]
        },
      ],
      lapok: {
        szulo: '',
        data: []
      },
    };
  },
  methods: {
    //
    setLapok: function(e)
    {
      if(e.target.innerText === this.lapok.szulo){
        this.lapok.szulo = ''
        this.lapok.data = []
      } else {
        for (let i = 0; i < this.szakaszok.length; i++) {
          let item = this.szakaszok[i]
          if(item.text === e.target.innerText){
            this.lapok.szulo = e.target.innerText
            this.lapok.data = item.lapok
          }
        }
      }
    },
    setContent: function (e){
      let szakaszLapok = null
      let contentId = null
      for (let i = 0; i < this.szakaszok.length; i++) {
        let szakasz = this.szakaszok[i];
        if(szakasz.text == this.lapok.szulo){
          szakaszLapok = szakasz.lapok
        }
      }
      for (let i = 0; i < szakaszLapok.length; i++) {
        let lap = szakaszLapok[i]
        if(lap.text == e.target.innerText){
          contentId = lap.contentId
        }
      }
      this.contentId = contentId
    },
    openClose: function (){
      this.mini = !this.mini
      if(this.mini){
        this.drawerCols = '1'
      } else {
        this.drawerCols = '2'
      }
    },
  },
};
</script>
