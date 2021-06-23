<template>
  <div>
    <el-card style="border-radius: 0">
          <el-row :gutter="20">
        <el-col :span="8">
          <div class="flex-container flex-jus-sp flex-align-c">
            <h2>历史训练任务</h2>
            <h3 class="color02a7f0">10438</h3>
          </div>
        
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
    methods: {
     
    },
    mounted: function () {

    }
  }
</script>
<style lang="less">
  .demo{
    margin: 10px;
    .grid-content {
      border-radius: 4px;
      overflow: hidden;
      color: #fff;
      background: #d3dce6;
      .index-icon{
        font-size: 82px;
        color: #fff;
      }
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>