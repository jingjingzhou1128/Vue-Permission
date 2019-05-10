<template>
  <div class="login-wrapper">
    <div class="header">
      <change-lang></change-lang>
    </div>
    <h4>{{generateTitle(i18nPath, 'login')}}</h4>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <el-form-item prop="userName">
        <el-input placeholder="" v-model="loginForm.userName" type="text">
          <i slot="prefix" class="iconfont icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="" v-model="loginForm.password" :type="pwdType">
          <i slot="prefix" class="iconfont icon-mima"></i>
          <i class="iconfont" :class="pwdType === 'password' ? 'icon-eye1' : 'icon-eye'" slot="suffix" @click="showPwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">{{generateTitle(i18nPath, 'login')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ChangeLang from '@/components/ChangeLang'
import {generateTitle} from '@/utils/i18n'

export default {
  name: 'Login',
  data () {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.generateTitle('vueFrame.global.', 'requiredInputMess')))
      } else {
        callback()
      }
    }
    const validatePwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.generateTitle('vueFrame.global.', 'requiredInputMess')))
      } else if (value.length < 6) {
        return callback(new Error(this.generateTitle('vueFrame.login.', 'requiredPwdMess')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [
          {required: true, trigger: 'change', validator: validateUserName}
        ],
        password: [
          {required: true, trigger: 'change', validator: validatePwd}
        ]
      },
      pwdType: 'password',
      // i18n path
      i18nPath: 'vueFrame.login.',
      redirect: ''
    }
  },
  methods: {
    showPwd () {
      this.pwdType = this.pwdType === 'password' ? '' : 'password'
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('LoginUser', this.loginForm).then(response => {
            this.$router.push({path: this.redirect})
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
    },
    generateTitle
  },
  components: { ChangeLang },
  watch: {
    $route: {
      handler (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.login-form {
  width: 400px;
  margin: 0 auto;
}
.login-wrapper {
  .header {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
