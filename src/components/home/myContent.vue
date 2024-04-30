<template>
	<div class="el-main-container">
		<router-view />
	</div>
</template>
<style scoped>
.el-main-container {
	height: calc(100% - 20px);
	background: #fff;
	padding: 10px;
	border-radius: 4px;
	overflow: auto;
}
</style>