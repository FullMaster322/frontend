<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style>
.button {
  width: 250px;
  height: 46px;
  font-size: 24px;
  color: white;
  background-color: #00da66;
  border: 1px solid #00da66;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 10px;
  font-family: monospace;
}


.button:hover {
  color: #00da66;
  background-color: white;
  border-color: white;
}
</style>
