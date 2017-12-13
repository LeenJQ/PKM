<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
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

        <el-form-item label="代码描述" >
          <el-input v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="代码" >
          <br/>
          <quill-editor 
              v-model="form.code">
            </quill-editor>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleDialogClose()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['visiable', 'closeHandle', 'getList', 'data', 'status'],
  data: function () {
    return {
      form: {
        description: '',
        code: ''
      },
      inputVisible: false,
      inputValue: '',
      editorOption: {
        // some quill options
      }
    }
  },

  methods: {
    clear() {
      Object.assign(this.form, {
        _id: null,
        description: '',
        code: ''
      })
    },

    handleTagClose(tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1);
    },

    showTagInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },

    handleDialogClose() {
      this.clear()
      this.closeHandle && this.closeHandle()
    },

    addRequest(form) {
      return axios.post('/api/code/add', form, {headers: {'content-type': 'application/json'}})      
    },

    editRequest(form) {
      return axios.put('/api/code/edit/'+form._id, form, {headers: {'content-type': 'application/json'}})
    },

    makeRequest(type) {
      return (form)=> type === 'add' ? this.addRequest(form) : this.editRequest(form)
    },

    submit() {
      this.makeRequest(this.status)(this.form)
        .then(val=>{
          this.handleDialogClose()
          this.getList && this.getList()
        })
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
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
  }
}
</script>

