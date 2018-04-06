<template>
	<div class="lg_bd">
        <div class= "login-wrap main_wrap" v-show="showLogin">
            <h3>欢迎登录养老网</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class= "register-wrap main_wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
</template>

<style>
    .lg_bd{
        background: url("./400066846_banner.jpg");
        min-height: 540px;
        overflow: hidden;
    }
    .main_wrap{
        float: right;
        width: 380px;
        padding: 15px;
        min-height: 370px;
        background: #fff;
        margin-right: 240px;
        margin-top: 40px;
    }
	.login-wrap{text-align:center;}
    .register-wrap{text-align: center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>

<script>  
    import {setCookie,getCookie} from '../../assets/js/cookies.js'
    export default{
        mounted(){
            if(getCookie('username')){
                this.$router.push('/home')
            }
        },
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        methods:{
            ToRegister(){
               this.showRegister = true,
               this.showLogin = false   
            },
            ToLogin(){
                this.showRegister = false,
                this.showLogin = true
            },
            login(){
                 if(this.username == "" || this.password == ""){
                        alert("请输入用户名或密码")
                }
            },
            register(){
                 if(this.username == "" || this.password == ""){
                        alert("请输入用户名或密码")
                }
            }
        }
    }
</script>