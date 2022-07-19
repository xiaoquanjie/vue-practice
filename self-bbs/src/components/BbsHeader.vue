<template>
    <div class="header">
        <router-link :to="{name: 'root'}">
            <img src="../assets/cnodejs_light.svg">
        </router-link>
        <router-link :to="{name: 'root'}">
            <span>关于</span>
        </router-link>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    background-color: #5a5555;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.header img {
    width: 120px;
    height: 28px;
    padding-left: 50px;
}
.header span {
    color: #cbc9c1;
    padding-right: 50px;
}
a {
    text-decoration: none;
}
</style>

<script>
export default {
    name: 'BbsHeader'
}
</script>