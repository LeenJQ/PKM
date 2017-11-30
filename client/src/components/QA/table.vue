<template>
  <div>
    <el-collapse v-model="activeNames" accordion>
        <el-collapse-item 
          v-for="(val, index) in data"
          :key="index"
          :name="index">
          <template slot="title">
            <strong>{{val.question}}</strong> &nbsp;
            <el-button
              size="mini"
              @click.stop="editHandle(val, index)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click.stop="deletHandle(val, index)">删除</el-button>
          </template>
          <div v-html="val.description"></div>
          <hr/>
          <div v-html="val.answer"></div>
          <div>
            <el-tag
              :key="tag"
              v-for="tag in val.tags">
              {{tag}}</el-tag>
          </div>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ['data', 'editHandle', 'deletHandle'],

  data() {
    return {
      activeNames: ['']
    }
  },
}
</script>
