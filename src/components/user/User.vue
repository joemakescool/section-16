<template>
    <div>
        <h1>User</h1>
        <hr>
        <router-view></router-view>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <p>Loaded ID: {{ id }} </p>
        <p>Name: {{ name }}</p>
        <p>Hello: {{ hello }}</p>
        <p>Henry: {{ henry }}</p>
        <p>Joe: {{ Joe }}</p>
    </div>
</template>

<script>
    export default {
        props: ['name', 'hello', 'henry', 'Joe'],

        data: () => ({

        }),
        methods: {
            navigateToHome() {
                this.$router.push({path: '/'}) // you can pass things to places...!!!
            }
        },


    }
</script>

<style scoped>

</style>
