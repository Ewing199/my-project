<template>
    <div>
        <B_banner></B_banner>
        <B_main></B_main>
    </div>
</template>

<script>
    import b_banner from "../views/Background/banner.vue"
    import b_main from "../views/Background/b_main.vue"

    export default{
        components: {
             "B_banner" : b_banner,
             "B_main" : b_main
         }
    }
</script>