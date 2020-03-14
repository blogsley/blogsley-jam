<template>
  <Layout>
    <article>
      <!--
      <g-image class="heroImage" :alt="$page.post.title" :src="$page.post.cover"/>
      -->
      <div class="section">
        <div>
          <h1>{{postBy.title}}</h1>
          <!-- <p style="display: block">{{$page.post.date}}</p> -->
        </div>
        <div v-html="postBy.body" class="darkdown-body"/>
      </div>
    </article>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import gql from 'graphql-tag'

@Component({
  props: ['slug'],
  apollo: {
    postBy: {
      query: gql`
        query postQuery($slug: String!) {
          postBy(slug: $slug) {
            id
            title
            body
          }
        }`,
      variables () {
        return {
          slug: this.slug
        }
      }
    }
  },
})
export default class Post extends Vue {
  postBy = {}
}

</script>
<style>
article ul {
  list-style: disc inside;
  margin-bottom: 1rem;
}
article ul li {
  margin-bottom: 1rem;
}

</style>