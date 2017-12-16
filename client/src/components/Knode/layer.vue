<style>
.el-input--small {
  width: 90% !important;
  left: 0px;
}

.el-checkbox+.el-checkbox {
  margin-left: 0px !important;
}

.ql-container .ql-editor {
  min-height: 20em;
  padding-bottom: 1em;
  max-height: 25em;
}
</style>

<template>
  <div>
    <el-dialog 
      title="新增" 
      :fullscreen="true"
      :visible.sync="visiable"
      :before-close="handleDialogClose">

      <el-form :model="form">
        <Editor v-model="form.content"  />
      </el-form>

      <el-transfer 
        filterable
        :titles="['未选', '已选']"
        v-model="form.links" 
        :data="knodeList">
      </el-transfer>

      <div slot="footer" class="dialog-footer">
        <el-button @click="handleDialogClose()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Editor from '../Editor'

export default {
  props: ['visiable', 'closeHandle', 'getList', 'data', 'status'],

  data: function () {

    return {
      form: {
        content: '',
        links: []
      },
      knodeList: []
    }
  },

  methods: {
    clear() {
      Object.assign(this.form, {
        _id: null,
        content: '',
        links: []
      })
    },

    handleDialogClose() {
      this.clear()
      this.closeHandle && this.closeHandle()
    },

    addRequest(form) {
      return axios.post('/api/knode/add', form, {headers: {'content-type': 'application/json'}})      
    },

    editRequest(form) {
      return axios.put('/api/knode/edit/'+form._id, form, {headers: {'content-type': 'application/json'}})
    },

    makeRequest(type) {
      return (form)=> type === 'add' ? this.addRequest(form) : this.editRequest(form)
    },

    transferDataFormate(list) {
      return list.map((l, i)=>({
        key: l._id,
        label: l.title,
        disabled: false
      }))
    },

    submit() {
      this.makeRequest(this.status)(this.form)
        .then(val=>{
          this.handleDialogClose()
          this.getList && this.getList()
        })
    }
  },

  watch: {
    visiable: function(newVisable) {
      if(newVisable === true && this.data && this.data._id) {
        Object.assign(this.form, this.data)
      } else {
        this.clear()
      }
    }
  },

  components: {Editor},

  async created() {
    let res = await axios.get('/api/knode/all')
    
    this.knodeList = this.transferDataFormate(res.data)
  }
}
</script>

