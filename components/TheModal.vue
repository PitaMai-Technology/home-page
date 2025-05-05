<script setup>
import { ref, watch, onUnmounted } from 'vue';

const props = defineProps({
    // モーダルの表示状態
    modelValue: {
        type: Boolean,
        default: false
    },
    // モーダルのタイトル
    title: {
        type: String,
        default: ''
    },
    // 閉じるボタンを非表示にする
    hideCloseButton: {
        type: Boolean,
        default: false
    },
    // モーダルの最大幅
    maxWidth: {
        type: String,
        default: '500px'
    },
    // 背景クリックでモーダルを閉じない
    persistent: {
        type: Boolean,
        default: false
    },
    // フッターを非表示にする
    hideFooter: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue', 'close']);

// 実際のモーダルの表示状態
const isOpen = ref(props.modelValue);

// モーダルを閉じる
const closeModal = () => {
    isOpen.value = false;
    emit('update:modelValue', false);
    emit('close');
};

// 背景クリック時の処理
const onBackdropClick = (event) => {
    // モーダル本体ではなく背景部分がクリックされ、persistentでない場合に閉じる
    if (event.target === event.currentTarget && !props.persistent) {
        closeModal();
    }
};

// ESCキーでモーダルを閉じる
const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen.value && !props.persistent) {
        closeModal();
    }
};

// propsの変更を監視
watch(() => props.modelValue, (newVal) => {
    isOpen.value = newVal;

    // モーダルが開いたときにキーボードイベントリスナーを追加
    if (newVal) {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden'; // スクロールを防止
    } else {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = ''; // スクロールを再開
    }
});

// コンポーネントがアンマウントされたときにイベントリスナーを削除
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
});
</script>

<template>
    <Teleport to="body">
        <transition name="modalFade">
            <div v-if="isOpen" class="modalBackdrop" @click="onBackdropClick">
                <div class="modalContainer" :style="{ maxWidth: maxWidth }">
                    <div class="modalHeader">
                        <h3 v-if="title" class="modalTitle">{{ title }}</h3>
                        <button v-if="!hideCloseButton" class="modalClose" @click="closeModal">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                        </button>
                    </div>

                    <div class="modalContent">
                        <slot></slot>
                    </div>

                    <div v-if="!hideFooter" class="modalFooter">
                        <slot name="footer">
                            <TheButton type="secondary" @click="closeModal">閉じる</TheButton>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>

    <!-- <div>
        <TheButton @click="showModal = true">モーダルを開く</TheButton>

        <TheModal v-model="showModal" title="モーダルのタイトル">
            <p>モーダルの本文内容をここに入力します。</p>

            <template #footer>
                <TheButton type="primary" @click="confirmAction">確認</TheButton>
                <TheButton type="secondary" @click="showModal = false">キャンセル</TheButton>
            </template>
        </TheModal>
    </div> -->
</template>

<style scoped>
.modalBackdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.modalContainer {
    background-color: var(--whiteColor100);
    border-radius: 8px;
    box-shadow: var(--standardShadow);
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modalHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid var(--grayColor2000);
}

.modalTitle {
    font-size: var(--smallMediumFontSize);
    font-weight: 600;
    color: var(--grayColor100);
    margin: 0;
    padding: 0;
}

.modalClose {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: var(--grayColor300);
    transition: background-color 0.2s, color 0.2s;
}

.modalClose:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--grayColor100);
}

.modalContent {
    padding: 24px;
    overflow-y: auto;
    max-height: 60vh;
}

.modalFooter {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 24px;
    border-top: 1px solid var(--grayColor2000);
}

/* トランジションアニメーション */
.modalFade-enter-active,
.modalFade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.modalFade-enter-from,
.modalFade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>