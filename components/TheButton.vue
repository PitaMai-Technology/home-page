<script setup>
defineProps({
  // ボタンの種類（add, primary, secondary）
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['add', 'primary', 'secondary', 'primarySubColor'].includes(value)
  },
  // ボタンを無効化する
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button :class="[
    type === 'add' ? 'addButton' :
      type === 'primary' ? 'primaryButton' :
        type === 'primarySubColor' ? 'primarySubColor' :
          'secondaryButton'
  ]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
.addButton,
.primaryButton,
.secondaryButton,
.primarySubColor {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.7rem 1rem;
  border-radius: calc(infinity* 1px);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

.addButton {
  background-color: transparent;
  border: 2px dashed var(--subColor);
  color: var(--subColor);
}

.addButton:hover {
  background-color: rgba(77, 102, 62, 0.05);
}

.primaryButton {
  background-color: var(--mainColor);
  color: var(--subColor);
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.primaryButton:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.secondaryButton {
  background-color: var(--whiteColor100);
  color: var(--subColor);
  border: 1px solid var(--grayColor2000);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.secondaryButton:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: var(--grayColor1000);
}

.primarySubColor {
  background-color: var(--subColor);
  color: var(--whiteColor100);
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.primarySubColor:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

/* 無効化されたボタンのスタイル */
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button:disabled:hover {
  box-shadow: none;
  transform: none;
  background-color: var(--mainColor) !important;
  background-color: inherit;
}
</style>