<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!blog.submitted">
        <label for="text">Blog Title:</label>
        <input type="text" id="text" v-model.lazy="blog.title" autocomplete="off">
        <label for="content">Blog Content:</label>
        <textarea id="content" v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninja</label>
            <input type="checkbox" value="Ninja" v-model="blog.categories">
            <label>Wizard</label>
            <input type="checkbox" value="Wizard" v-model="blog.categories">
            <label>Mario</label>
            <input type="checkbox" value="Mario" v-model="blog.categories">
            <label>Warrior</label>
            <input type="checkbox" value="Warrior" v-model="blog.categories">
        </div>
        <label>Author </label>
        <select v-model="blog.author">
            <option v-for="(author,index) in authors" :key="index">{{author}}</option>
        </select>
        <button style="margin-left : 20px" @click.prevent="post">Submit</button>
    </form>
    <div v-if="blog.submitted">
        <h3>Thanks for your new post 🥰</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title : {{blog.title}}</p>
        <p>Author: {{blog.author}}</p>
        <p>Blog Content : </p>
        <p>{{blog.content}}</p>
        <ul>
            <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "BlogPost",
    data(){
        return{
            blog: {
                title : "",
                content : "",
                categories : [],
                author : "",
                submitted : false,
            },
            authors : ["Sai Yan Naing","Jimmy Joe","DoeKo","DOK"]
        }
    },
    methods:{
        post(){
            this.$http.post("https://jsonplaceholder.typicode.com/posts",{
                title : this.blog.title,
                content : this.blog.content,
                userID : 1,
                author : this.blog.author,
                category : this.blog.categories
            }).then(
                data => {console.log(data)
                this.blog.submitted = true}
            )
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>