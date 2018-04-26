<template>
	<div class="B_banner1">
		<p>养老网后台管理系统</p>
		<div class="B_tips">
			<p>{{ date | formatDate }}</p>
		</div>
	</div>
</template>

<style>
	.B_banner1{
		height: 60px;
		width:100%;
		font-size: 24px;
		border:1px solid #f60;
	}
	.B_tips{
		width: 100%;
		height: 16px;
		font-size: 10px;
	}
</style>

<script>
	var padDate= function(value){
		return value<10?'0'+value:value;
	};
	export default{
		 data(){
            return{
				date: new Date()
			}
		},
		filters:{
			formatDate:function(value){
				var date = new Date();
				var year = date.getFullYear();
                var month = padDate(date.getMonth()+1);
                var day = padDate(date.getHours());
                var hours = padDate(date.getHours());
                var minutes = padDate(date.getMinutes());
                var seconds = padDate(date.getSeconds());
                return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
			}
		},
		mounted: function(){
			var _this = this;
			this.timer = setInterval(function(){
				_this.date = new Date();
			},1000);
		},
		beforeDestory:function(){
			if(this.timer){
				clearInterval(this.timer);
			}
		}
	}
</script>