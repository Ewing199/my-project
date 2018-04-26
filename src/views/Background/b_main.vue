<template>
	<div class="b_main1">
		<div class="left_side1">
			<p class="el-icon-setting">系统菜单栏</p>
			<el-menu class="el-menu-vertical-demo">
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-share"></i>
			          <span>用户管理</span>
			        </template>
			        <el-submenu index="1-1">
			          <template slot="title">个人用户</template>
			          <el-menu-item index="1-1-1"><router-link to="/background/foo">用户信息</router-link></el-menu-item>
			        </el-submenu>
			         <el-submenu index="1-2">
			          <template slot="title">机构用户</template>
			          <el-menu-item index="1-2-1"><router-link to="/background/bar">机构信息</router-link></el-menu-item>
			        </el-submenu>
			      </el-submenu>
			     <!--  <el-menu-item index="2">
			       <i class="el-icon-menu"></i>
			       <span slot="title">导航二</span>
			     </el-menu-item>
			     <el-menu-item index="3" disabled>
			       <i class="el-icon-document"></i>
			       <span slot="title">导航三</span>
			     </el-menu-item>
			     <el-menu-item index="4">
			       <i class="el-icon-setting"></i>
			       <span slot="title">导航四</span>
			     </el-menu-item> -->
	   		 </el-menu>
		</div>
		<div class="right_side1">
			<router-view></router-view>
		</div>
	</div>
</template>

<style>
	.b_main1{
		width: 100%;
	}
	.left_side1{
		width: 17%;
		height: 1400px;
		padding-top: 10px;
		background-color: #F0F0F0;
		float: left;
	}
	.right_side1{
		width: 83%;
		height: 1400px;
		float: right;
		padding-top: 20px;
	}
	.left_side1 .el-submenu .el-menu-item{
		min-width: 160px;
	}

	.el-menu-item{
		font-size: 12px;
		padding-left: 0px;
	}
	a:hover{
		text-decoration: none;
		color: #f60;
	}
</style>