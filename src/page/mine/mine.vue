<template>
    <div>
        <h3>我的</h3>
        <myHeader></myHeader>
        <myFooter></myFooter>
        <router-view></router-view>
    </div>
</template>

<script>

import myHeader from '@/page/layout/header.vue'
import myFooter from '@/page/layout/footer.vue'

export default {
    components:{myHeader,myFooter}
    
}
</script>