<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ImageFlipCard from './components/ImageFlipCard.vue'
import BasicLetter from './components/BasicLetter.vue'
import About from './components/About.vue'

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <sidebar-menu :menu="menu" />
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main>
    <!-- <ImageFlipCard v-for="(todo, index) in todos" :key="todo.id" :title="todo.title" :style="{
        'display': flex,
        'flex-direction': row,
        'flex-wrap': wrap,
        'justify-content': 'space-between'
      }" /> -->
    <!-- <TheWelcome /> -->

    <!-- <div class="row">
      <div class="column">
        <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" />
      </div>
      <div class="column">
        <BasicLetter v-for="post in todos" :key="post.id" :title="post.title" :image_src="post.src" />
      </div>
    </div> -->
  </main>
  <component :is="currentView" />
</template>

<script>
const routes = {
  '/': HelloWorld,
  '/about': About
}

export default {
  data() {
    return {
      currentPath: window.location.hash,
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
          src:"image1.jpg",
        },
        {
          id: 2,
          src:"image1.jpg",
          title: 'Take out the trash'
        },
        {
          id: 3,
          src:"image2.jpg",
          title: 'Mow the lawn'
        }
      ],
      menu: [
        {
          header: 'Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '#/',
          title: 'Learn',
          icon: 'fa fa-university'
        },
        {
          href: '#/about',
          title: 'About',
          icon: 'fa fa-inbox'
        }
        // {
        //   href: '/charts',
        //   title: 'Charts',
        //   icon: 'fa fa-chart-area',
        //   child: [
        //     {
        //       href: '/charts/sublink',
        //       title: 'Sub Link'
        //     }
        //   ]
        // }
      ],
      theme: {
        type: String,
        default: ''
      },
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
  // components: {
  //   SidebarMenu
  // }
}
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
