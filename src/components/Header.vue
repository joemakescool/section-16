<template>
    <div>

        <b-nav pills>
            <b-nav-item>
                <router-link to="/"><a>HOME</a></router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/user">USER</router-link>
            </b-nav-item>
        </b-nav>
        <h1>Route props</h1>
        <ul>
            <li><router-link to="/hello">/</router-link></li>
            <li><router-link to="/hello/JOE!">/hello/you</router-link></li>
            <li><router-link to="/static">/static</router-link></li>
            <li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
            <li><router-link to="/attrs">/attrs</router-link></li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
