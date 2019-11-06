<template>
    <div>
        <myHeader></myHeader>
        <appMain></appMain>
        <myFooter></myFooter>
    </div>
</template>

<script>
import myHeader from '@/page/layout/header.vue'
import myFooter from '@/page/layout/footer.vue'
import appMain from '@/page/layout/AppMain.vue'
export default {
    components:{myHeader,myFooter,appMain}
}
</script>