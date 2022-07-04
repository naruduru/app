<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-form">
        <div class="logo-wrapper"></div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" class="form-control" id="username" v-model="form.username">
          </div>
          <div class="form-group"></div>
          <div class="form-group"></div>
          <button type="submit" class="btn btn-primary btn-block"></button>
        </form>
      </div>
    </div>
    <footer class="footer">
      <span class="copyright"></span>
      <ul class="footer-links list-inline float-right"></ul>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: ''
      }
    }
  },
  methods: {
    submitForm () {

    }
  }
}
</script>
<style lang="scss" scoped>
.container { max-width: 900px;}
.register-form { margin-top: 50px; max-width: 320px;}
.logo-wrapper { margin-bottom: 40px;}
.footer { width: 100%; line-height: 40px; margin-top: 50px;}
</style>
