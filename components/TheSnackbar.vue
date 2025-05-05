<script setup lang="ts">

interface SnackbarProps {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    position?: 'top' | 'bottom';
}

const props = withDefaults(defineProps<SnackbarProps>(), {
    type: 'info',
    duration: 3000,
    position: 'bottom'
});

const isVisible = ref(false);
const snackbarTimeout = ref<ReturnType<typeof setTimeout> | null>(null);

const show = () => {
    isVisible.value = true;

    if (snackbarTimeout.value) {
        clearTimeout(snackbarTimeout.value);
    }

    snackbarTimeout.value = setTimeout(() => {
        isVisible.value = false;
    }, props.duration);
};

// メッセージが変更されたら表示する
watch(() => props.message, (newMessage) => {
    if (newMessage) {
        show();
    }
});

// 初期メッセージがあれば表示
if (props.message) {
    show();
}

const getTypeClass = () => {
    return {
        'snackbarSuccess': props.type === 'success',
        'snackbarError': props.type === 'error',
        'snackbarInfo': props.type === 'info',
        'snackbarWarning': props.type === 'warning',
    };
};

const getPositionClass = () => {
    return {
        'snackbarTop': props.position === 'top',
        'snackbarBottom': props.position === 'bottom',
    };
};

const close = () => {
    isVisible.value = false;
    if (snackbarTimeout.value) {
        clearTimeout(snackbarTimeout.value);
    }
};

defineExpose({ show, close });
</script>

<template>
    <Transition name="snackbar">
        <div v-if="isVisible" class="snackbar" :class="[getTypeClass(), getPositionClass()]">
            <div class="snackbarContent">
                <span class="snackbarMessage">{{ message }}</span>
                <button class="snackbarClose" @click="close">
                    <span class="snackbarCloseIcon">×</span>
                </button>
            </div>
        </div>
    </Transition>

    <!-- 使用例
    
    <TheSnackbar 
    message="操作が完了しました！" 
    type="success" 
    duration="5000"
    position="top" 
  /> -->
</template>

<style scoped>
.snackbar {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    min-width: 250px;
    max-width: 80%;
    padding: 16px 20px;
    border-radius: 8px;
    background-color: var(--grayColor200);
    color: var(--whiteColor100);
    box-shadow: var(--standardShadow);
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.snackbarTop {
    top: 20px;
}

.snackbarBottom {
    bottom: 20px;
}

.snackbarContent {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.snackbarMessage {
    font-size: var(--standardFontSize);
    margin-right: 12px;
    line-height: 1.5;
}

.snackbarClose {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
}

.snackbarClose:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.snackbarCloseIcon {
    font-size: 18px;
    font-weight: bold;
}

.snackbarSuccess {
    background-color: var(--mainColor);
    color: var(--darkColor100);
}

.snackbarError {
    background-color: #f44336;
}

.snackbarInfo {
    background-color: var(--subColor);
}

.snackbarWarning {
    background-color: #ff9800;
}

/* トランジションアニメーション */
.snackbarEnterActive,
.snackbarLeaveActive {
    transition: opacity 0.3s, transform 0.3s;
}

.snackbarEnterFrom,
.snackbarLeaveTo {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
}

@media (max-width: 768px) {
    .snackbar {
        min-width: 200px;
        max-width: 90%;
        padding: 12px 16px;
    }

    .snackbarMessage {
        font-size: var(--smallFontSize);
    }
}
</style>