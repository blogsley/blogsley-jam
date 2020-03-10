<template>
  <Layout>
    <article>
      <!--
      <g-image class="heroImage" :alt="$page.post.title" :src="$page.post.cover"/>
      -->
      <div class="section">
        <div>
          <h1>{{post.title}}</h1>
          <!-- <p style="display: block">{{$page.post.date}}</p> -->
        </div>
        <div v-html="post.body" class="darkdown-body"/>
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
  data: function (){ return{ post: {}}},
  apollo: {
    $skipAll () { return navigator.userAgent !== "ReactSnap"},
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
      },
      update (data) {
        const post = data.postBy
        console.log(post)
        this.post = post
        return post
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