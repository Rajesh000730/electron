var app = new Vue({
    el:"#app",
    data:{
        message:"helloworld",
        message1:"rajesh",
        message2:"rajesh2",
        message3:"",
        message5:"",
        todos:[]
    },
    methods: {
        reverse:function(){
            if(this.message5!==""){
                this.message3 = this.message5 ;
            this.todos.push({text:this.message5});
            this.message5="";
            }
        
    },
    del:function(){
        this.todos.splice(this.todos[0], 1)
    },
    del1:function(){
        this.todos.splice(this.todos[0])
    }
    

    }
});
