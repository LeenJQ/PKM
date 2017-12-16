<style>
</style>

<template>
  <el-form-item>
    <br/>
    <quill-editor 
        v-model="curValue"
        @input="setValue">
      </quill-editor>
  </el-form-item>
</template>

<script>
export default {

  data() {
    return {
      curValue: this.value,
      editorOption: {
        // some quill options
      }
    }
  },

  props: {
    value: String
  },

  methods: {
    setValue(val) {
      this.$emit('input', val)
    }
  },
  
  watch: {
    'value'(val) {
      this.curValue = val
    }
  }
}
</script>

