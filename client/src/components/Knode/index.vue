<template>
  <div>
    <el-button
      size="mini"
      type="danger"
      @click="handleAdd">新增</el-button>
    <Layer 
      :visiable="AddDialogVisiable" 
      :closeHandle="closeAddDialog" 
      :getList="getList"
      :data="dialogForm"
      :status="dialogStatus" />
    <Tables 
      :data="tableData"
      :editHandle="handleEdit"
      :deletHandle="deletHandle"
      :getList="getList"></Tables>
  </div>
</template>

<script>
import axios from 'axios'
import Tables from './table'
import Layer from './layer'

export default {
  data() {
    return {
      tableData: {
        list: [],
        pageIndex: 1,
        total: 0
      },
      flag: true, 
      AddDialogVisiable: false,
      dialogForm: {},
      dialogStatus: 'add'
    }
  },
  methods: {
    handleAdd() {
      this.dialogStatus = 'add'
      this.AddDialogVisiable = true
    },
    handleEdit(item) {
      this.dialogStatus = 'edit'      
      this.AddDialogVisiable = true
      this.dialogForm = item
    },
    deletHandle(item) {
      axios.delete('/api/knode/'+item._id).then(val=>{
        this.getList()
      })            
    },
    closeAddDialog() {
      this.dialogStatus = 'add'      
      this.dialogForm = {}
      this.AddDialogVisiable = false      
    },
    async getList(index=1) {
      // 解决分页重复请求的问题
      // https://github.com/ElemeFE/element/issues?page=2&q=pagination+request&utf8=%E2%9C%93 
      if(this.flag) {
        this.flag = false        
        const {data} = await axios.get('/api/knode/list?pageIndex='+index)  
        this.tableData = data
        this.flag = true        
      }
    }
  },
  components: {
    Tables,
    Layer
  },
  mounted() {
    this.getList()
  }
}
</script>
