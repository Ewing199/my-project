<template>
	<div class="hheader">
		<el-row>
			<el-col :span="2">
			<router-link to='/home'><img src="./logo.png"></router-link></el-col>
			<el-col :span="8" :offset="4" class="searchBox">
				<input type="text" class="form-control" placeholder="搜索养老院"></input>
				<button>查询</button>
			</el-col>
			<el-col :span="2" :offset="20">
				<router-link to='/'><span class="login_style el-icon-caret-bottom">登录</span></router-link>
			</el-col>
		</el-row>
	</div>

</template>

<style>
	 .hheader {
		width: 1180px;
	    height: 90px;
	    margin-left: auto;
	    margin-right: auto;
	    padding: 0 10px;
	    text-align: left;
	}
	.searchBox{
		position: absolute;
	    z-index: 10;
	    top: 28px;
	    width: 28%;
	    font-family: "Microsoft Yahei", Tahoma;
	}
	.searchBox input{
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 28px;
	    /* padding: 0 45px 0 45px; */
	    border: 1px solid #8ebefc;
	    box-shadow: 2px 2px 1px 0 rgba(164,203,255,0.25) inset;
	    outline: 0 none;
	}
	.searchBox button{
	    position: absolute;
	    top: 1px;
	    right: 1px;
	    width: 54px;
	    height: 26px;
	    background-color: #a4cbff;
	    border: 0 none;
	    border-radius: 0;
	    vertical-align: middle;
	}
	.login_style{
		text-decoration:none;
		margin-top: 28px;
	}
	a{
		text-decoration: none;
	}
	a:hover{
		text-decoration: none;
		color: #f60;
	}
</style>