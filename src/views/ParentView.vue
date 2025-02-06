<template>
  <div>
    <h1>Vue3 父子Router路由</h1>
    請關注目前的網址。<br />點擊子頁面1，將為/parent/child1；子頁面2，將為/parent/child2<br />
    並將網址上帶入的Querystring id顯示在畫面中<br />

    <router-link to="/parent/child1?id=1">子頁面1</router-link><br />
    <router-link to="/parent/child2?id=2">子頁面2</router-link>

    <!-- 用來顯示子路由的內容 -->
    <router-view></router-view>
  </div>
</template>
