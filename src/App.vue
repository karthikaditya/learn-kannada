<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Learn from './components/Learn.vue'

import About from './components/About.vue'
import LetterForms from './components/LetterForms.vue'

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <sidebar-menu v-model:collapsed="collapsed" :menu="menu" @update:collapsed="onToggleCollapse" :theme="'white-theme'" />
  <div v-if="!collapsed" class="sidebar-overlay" @click="collapsed = true"></div>

  <div id="demo" :class="[{ collapsed: collapsed }]" :style="`text-align: center;`">
    <component :is="currentView" />
  </div>
</template>

<script>
const routes = {
  '/': HelloWorld,
  '/learn': Learn,
  '/letter-forms': LetterForms,
  '/about': About
}


export default {
  data() {
    return {
      currentPath: window.location.hash,
      collapsed: true,
      menu: [
        {
          header: 'Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '#/',
          title: 'Home',
          icon: 'fa fa-home'
        },
        {
          href: '#/learn',
          title: 'Learn',
          icon: 'fa fa-university'
        },
        {
          href: '#/letter-forms',
          title: 'Letter forms',
          icon: 'fa fa-university'
        },
        {
          href: '#/about',
          title: 'About',
          icon: 'fa fa-inbox'
        },
        // {
        //   href: '/page',
        //   title: 'Dropdown Page',
        //   child: [
        //     {
        //       href: '/page/sub-page-1',
        //       title: 'Sub Page 01',
        //     },
        //     {
        //       href: '/page/sub-page-2',
        //       title: 'Sub Page 02',
        //     },
        //   ],
        // },
        // {
        //   title: 'Multiple Level',
        //   child: [
        //     {
        //       title: 'page',
        //     },
        //     {
        //       title: 'Level 2 ',
        //       child: [
        //         {
        //           title: 'page',
        //         },
        //         {
        //           title: 'Page',
        //         },
        //       ],
        //     },
        //     {
        //       title: 'Page',
        //     },
        //     {
        //       title: 'Another Level 2',
        //       child: [
        //         {
        //           title: 'Level 3',
        //           child: [
        //             {
        //               title: 'Page',
        //             },
        //             {
        //               title: 'Page',
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      methods: {
        onToggleCollapse(collapsed) {
          console.log('onToggleCollapse')
        },
      }
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || TheWelcome
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style>
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
}

#demo.collapsed {
  padding-left: 65px;
}

.demo {
  /* padding: 20px; */
}

.container {
  /* max-width: 900px; */
}

/* Responsive layout - makes a two column-layout instead of four columns */
/* @media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
} */

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
} */
</style>
