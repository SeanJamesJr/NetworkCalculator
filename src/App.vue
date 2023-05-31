<script setup>
</script>

<template>

    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        color="blue-grey-"
      >
        <v-list>
          <v-list-item
            prepend-avatar=""
            title="Nothing is here"
            subtitle=""
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list   density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Home Page" to='/'></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="About Page" to='/AboutPage' ></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Binary Converter" to='BinaryCon' ></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Ip Check" to='/ipcheck'></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="subnet" to='/subnet' ></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="security check" to='/SecurityCheck' ></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Contact me" to='/Contact' ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <router-view></router-view>
    </v-main>
    </v-layout>



</template>
<style>


@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

h1{ font-family: "Bebas Neue";
text-align: center;
font-size: 40px;
color: #fffffe;

}

body{
background-color:#16161a;

}

v-nav{
background-color: #72757e;

}
</style>