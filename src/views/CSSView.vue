<template>
  <div>
    <h1>常見CSS操作</h1>
    <h2>display方面</h2>
    <div>
      <h3>block</h3>
      <div>block 會換行 可設置 width 和 height</div>
      <div style="display: block; background-color: lightblue">
        This is a block-level element.
      </div>
      <div style="display: block; background-color: lightblue">
        This is a block-level element.
      </div>
      <h3>inline</h3>
      <div>不換行 根據內容適應寬度</div>
      <span style="display: inline; background-color: lightblue">
        This is an inline element.
      </span>
      <span style="display: inline; background-color: lightgreen">
        This is another inline element.
      </span>
      <h3>inline-block</h3>
      <div>不換行 可設置高度寬度</div>

      <div
        style="
          display: inline-block;
          background-color: lightblue;
          width: 100px;
          height: 50px;
        "
      >
        Inline-block 1
      </div>
      <div
        style="
          display: inline-block;
          background-color: lightgreen;
          width: 100px;
          height: 50px;
        "
      >
        Inline-block 2
      </div>
      <h3>flex</h3>
      <div>設置為flex container，底下子元素為flex container</div>
      <div style="display: flex; background-color: lightgray">
        <div style="background-color: lightblue; padding: 20px">Item 1</div>
        <div style="background-color: lightgreen; padding: 20px">Item 2</div>
        <div style="background-color: lightcoral; padding: 20px">Item 3</div>
      </div>
      <div>可直接控制方向 flex-direction:column/row</div>
      <div
        style="
          display: flex;
          flex-direction: column;
          background-color: lightgray;
        "
      >
        <div style="background-color: lightblue; padding: 20px">Item 1</div>
        <div style="background-color: lightgreen; padding: 20px">Item 2</div>
        <div style="background-color: lightcoral; padding: 20px">Item 3</div>
      </div>
      <div>
        flex對齊，justify-content
        主軸：常設設置space-around間隔相等，周圍間隔也相等;space-between:間隔相等，但貼壁。
        <br />align-items次軸：center居中對齊
      </div>
      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 200px;
          background-color: lightgray;
        "
      >
        <div style="background-color: lightblue; padding: 20px">Item 1</div>
        <div style="background-color: lightgreen; padding: 20px">Item 2</div>
        <div style="background-color: lightcoral; padding: 20px">Item 3</div>
      </div>
    </div>
    <h2>偽元素</h2>
    <div>::before ::after 之前/之後插入</div>
    <div class="box">Hello</div>
    <h2>偽類</h2>
    <div>比如:hover 添加互動效果</div>
    <a class="link">Click me</a>
    <h2>垂直置中 flex+justify+item</h2>
    <div
      style="
        background: lightgray;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30vh;
      "
    >
      <div>垂直置中</div>
    </div>
  </div>
</template>
<style scoped>
.box::before {
  content: "🔹 ";
  color: blue;
}
.box::after {
  content: " 👋";
  color: red;
}
.link {
  color: blue;
  text-decoration: none;
}

.link:hover {
  color: red;
  text-decoration: underline;
}
</style>
