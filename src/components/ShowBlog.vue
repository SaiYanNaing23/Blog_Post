<template>
  <div id="show-blogs" v-theme:background="'narrow'">
    <h1>All Blog Article</h1>
    <input type="text" style="width:96%;padding:10px" placeholder="Seach Blogs" v-model="search">
    <div class="single-blog" v-for="(blog,index) in filterBlogs" :key="index">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        <article>{{blog.body | shotter}}</article>
    </div>
  </div>
</template>

<script>
export default {
    name: "ShowBlog",
    data (){
        return{
            blogs : [],
            search: ""
        }
    },
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts")
        .then(data=> this.blogs = data.body.slice(0,10))
    },
    computed:{
        filterBlogs(){
            return this.blogs.filter((data)=>{
                return data.title.match(this.search)
            })
        }
    }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    box-sizing: border-box;
    padding: 20px;
    margin: 20px 0;
    background-color: #8989dd4d;
}
</style>