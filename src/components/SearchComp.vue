<template>
  <div class="search-bar">
    <div class="search-bar-mega">
      <input
        type="text"
        class="search-input"
        placeholder="Поиск лекций"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />

    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComp',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],

}
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;

  width: 480px;

  margin-left: 5px;

  position: relative;
  z-index: 9999;
  margin: 0 auto;
}

.search-bar-mega {
  display: flex;
  align-items: center;

  background-color: rgb(48, 48, 48);
  border: 1px solid rgb(48, 48, 48);
  border-radius: 10px;
}

.search-input {
  width: 470px;
  padding: 0 0 10px 20px;

  font-size: 15px;
  color: rgb(48, 48, 48);

  background-color: rgba(48, 48, 48, 0);
  border: 1px solid rgba(48, 48, 48, 0);
  border-radius: 10px;
  padding-top: 10px;
  color: white;
}

.search-input::placeholder {
  color: rgb(175, 175, 175);
}

.search-btn {
  height: 30px;
  margin: 0;
  padding-top: 5px;

  font-size: 16px;
  color: rgb(175, 175, 175);
  cursor: pointer;

  background-color: rgba(48, 48, 48, 0);
  border: 1px solid rgba(48, 48, 48, 0);
  border-radius: 15px;
  margin-right: 10px;
}

.search-bar-mega:focus-within .search-input,
.search-bar-mega:focus-within .search-btn {
  background-color: white;
  border-color: transparent;
  outline: none;
  color: black;
  border-color: white;
}

.search-dropdown {
  position: fixed;
  top: 60px;
  width: 350px;
  background-color: white;

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.search-bar-mega:focus-within + .search-dropdown {
  visibility: visible;
  opacity: 1;
}
</style>
