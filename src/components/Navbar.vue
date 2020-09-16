<template>
    <nav aria-label="breadcrumb">
      <div class="row">
        <div class="col-11">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
              <li class="breadcrumb-item"><router-link to="/about">About</router-link></li>
              <li class="breadcrumb-item"><router-link to="/login">Login</router-link></li>
            </ol>
        </div>
        <div class="col-1">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/login">Logout</router-link></li>
            </ol>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
