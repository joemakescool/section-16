<template>
    <div>
        <h1>
            User Details
        </h1>
        <p>User Loaded has id: {{ $route.params.id }}</p>
        <button><router-link v-bind:to="link">Edit me {{ $route.params.id }}</router-link></button>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",

        data: () => ({
            link: {
                name: 'userEdit',
                //params: {id: this.$route.params.id}, does NOT work
                query: { locale: 'en', q: 100 },
                hash: '#data',


            },
        }),

    }
    //        <button><router-link v-bind:to=" '/user/' + $route.params.id + '/edit' ">Edit me</router-link></button>

</script>

<style scoped>

</style>
