<template>
  <div>
    <el-collapse v-model="activeNames" accordion>
        <el-collapse-item 
          v-for="(val, index) in data.list"
          :key="index"
          :name="index">
          <template slot="title">
            <strong>{{val.title}}</strong> &nbsp;
            <el-button
              size="mini"
              @click.stop="editHandle(val, index)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click.stop="deletHandle(val, index)">删除</el-button>
          </template>
          <div v-html="val.content"></div>
        </el-collapse-item>

        <el-pagination
          layout="prev, pager, next"
          :currentPage="data.pageIndex"
          :total="data.total"
          @current-change="getList">
        </el-pagination>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ['data', 'editHandle', 'deletHandle', 'getList'],

  data() {
    return {
      activeNames: ['']
    }
  },
}
</script>
