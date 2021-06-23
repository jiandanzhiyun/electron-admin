<template>
  <div class="category">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small">新增训练</el-button>
    </ToolBar>
    训练列表
    
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';
  export default {
    data() {
      return {
              }
    },
    methods: {
    

    },
    components: {
      ToolBar
    },
    mounted: function () {
     
    }
  }
</script>
<style lang="less">
  .category{
    .el-tree-node__content {
      height: 40px;
      line-height: 40px;
    }
  }

</style>
