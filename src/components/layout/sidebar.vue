<style>
    #sidebar{
        width: 180px;
        height: 100%;
        background-color: rgb(48, 65, 86);
    }
    #logo{
        width: 180px;
        height: 50px;
        background-image: url(../../img/labixiaoxin.jpg);    
    }
    #menu li{
        width: 180px;
        height: 60px;
    }
    .menu-li-a{
        width: 180px;
        height: 60px;
        color: rgb(191, 203, 217);
        display: inline-block;
        line-height: 60px;
        text-align: center;
    }
    .menu-li-a:hover{
        background-color: rgb(38, 52, 69);
    }
</style>


<template>
    <div id="sidebar">
        <div id="logo"></div>
        <ul id="menu">
            <li><a class="menu-li-a">数据概况</a></li>
            <li><a class="menu-li-a">行为分析</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: () => ({message: 'Hello dd Vue.js!'})
    }
</script>