<template>
  <div class="section">
    <ul class="article-list">
      <li v-for="edge in allPosts.edges" :key="edge.id">
        <ArticlePreview :article="edge.node" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import gql from 'graphql-tag'

@Component({
  apollo: {
      allPosts: {
      query: gql`
        query postQuery {
          allPosts {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
`,
      }
    }
})
export default class Articles extends Vue {
  allPosts = []
  created () {
    console.log('mounted')
  }
}
</script>
