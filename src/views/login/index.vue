<template>
  <div class="login-wrapper">
    <h4>Login</h4>
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
        <el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input content!'))
      } else {
        callback()
      }
    }
    const validatePwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input content!'))
      } else if (value.length < 6) {
        return callback(new Error('The password can not be less than 6 digits'))
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
          {required: true, trigger: 'blur', validator: validateUserName}
        ],
        password: [
          {required: true, trigger: 'blur', validator: validatePwd}
        ]
      },
      pwdType: 'password'
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
            this.$router.push({name: 'Dashboard'})
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-form {
  width: 400px;
  margin: 0 auto;
}
</style>
