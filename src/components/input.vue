<template>
    <div class="my-input" :class="{'my-input--suffix': showSuffix}">
       <input
         class="my-input_inner"
         :class="{'is-disabled':disabled}"
         :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
         :name="name"
         :value="value"
         :disabled="disabled"
         :placeholder="placeholder"
         @input="fnInput"
       >
      <span class="my-input_suffix" v-if="showSuffix">
<!--        清除图标-->
        <i v-if="clearable && value" @click="clear">x</i>
<!--        显示密码图标-->
        <i v-if="showPassword" @click="changeType">p</i>
      </span>
    </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    fnInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    changeType () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss">
  .my-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .my-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .my-input--suffix{
    .my-input_inner{
      padding-right: 30px;
    }
    .my-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
