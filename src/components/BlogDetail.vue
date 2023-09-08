<template>
  <div>
    <h1>{{blog.title}}</h1>
  </div>
</template>

<script>
export default {
    name: "BlogDetail",
    data(){
        return{
            blog:{}
        }
    },
    created(){
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(data=> this.blog = data.body)
    }
}
</script>

<style>

</style>