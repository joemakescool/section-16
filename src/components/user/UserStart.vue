<template>
    <div>
        <h1>User Start</h1>
        <ul>
            <li><b-nav-item>
                <router-link to="/user/1">USER 1</router-link>
            </b-nav-item></li>

            <li><b-nav-item>
                <router-link to="/user/2">USER 2</router-link>
            </b-nav-item></li>

            <li><b-nav-item>
                <router-link to="/user/3">USER 3</router-link>
            </b-nav-item></li>
        </ul>


        <hr>
    </div>
</template>

<script>
    export default {
        name: "UserStart"
    }
</script>

<style scoped>

</style>
