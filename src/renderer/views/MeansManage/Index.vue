<template>
  <div>
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small">新增资料</el-button>
      <div style="float: right">
        <el-input
                placeholder="搜索标题"
                size="small"
                style="width: 140px"
                v-model="searchParams.postTitle"
                clearable>
        </el-input>
      
        <el-button type="success" icon="el-icon-search" size="small" @click="refresh = !refresh"></el-button>
      </div>
    </ToolBar>
资料库
    
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';
  export default {
    data() {
      return {
        searchParams:{
            postTitle:'',
            postType:'',
            postStatus:'published',
        },
      }
    },
    methods: {
      handleClick(row) {
        this.$alert(row, '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      },
    },
    components: {
        ToolBar
    }
  }
</script>