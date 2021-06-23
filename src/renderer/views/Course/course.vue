<template>
  <div class="user-list">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="editUser(false)">新增课程</el-button>
      <div style="float: right">
        <el-input
            placeholder="请输入关键字查询"
            size="small"
            style="width: 140px"
            v-model="params.name"
            clearable>
        </el-input>
        <el-button  type="success" icon="el-icon-search" size="small"></el-button>
      </div>
    </ToolBar>
   sd
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';

  export default {
    data() {
      return {
        params: {
          name: '',
        },
     
      }
    },
    methods: {


    },
    components: {
      ToolBar
    }
  }
</script>
<style lang="less">

</style>
