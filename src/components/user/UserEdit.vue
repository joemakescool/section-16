<template>
    <div>
        <h1>User Edit</h1>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>

        <div style="height: 700px">

        </div>
        <p id="data">Some data here</p>
    </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
