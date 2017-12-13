<template>
  <div>
    <el-button
      size="mini"
      type="danger"
      @click="handleAdd">新增</el-button>
    <AddDialog 
      :visiable="AddDialogVisiable" 
      :closeHandle="closeAddDialog" 
      :getList="getList"
      :data="dialogForm"
      :status="dialogStatus" />
    <Tables 
      :data="tableData"
      :editHandle="handleEdit"
      :deletHandle="deletHandle"></Tables>
  </div>
</template>

<script>
import axios from 'axios'
import Tables from './table'
import AddDialog from './addDialog'

export default {
  data() {
    return {
      tableData: [],
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
    getList() {
      axios.get('/api/knode/list').then(val=>this.tableData = val.data)      
    }
  },
  components: {
    Tables,
    AddDialog
  },
  mounted() {
    this.getList()
  }
}
</script>
