<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
    // エラーのステータスコード
    statusCode: {
        type: Number,
        default: 404
    },
    // エラーのタイトル
    title: {
        type: String,
        default: ''
    },
    // エラーの詳細メッセージ
    message: {
        type: String,
        default: ''
    }
});

const router = useRouter();
const snackbarRef = ref<{ show: () => void } | null>(null);

// エラーコードに基づいたデフォルトのタイトルとメッセージを設定
const errorTitle = computed(() => {
    if (props.title) return props.title;

    switch (props.statusCode) {
        case 404:
            return 'ページが見つかりませんでした';
        case 403:
            return 'アクセスが拒否されました';
        case 500:
            return 'サーバーエラーが発生しました';
        default:
            return '謎のエラーが発生しました';
    }
});

const errorMessage = computed(() => {
    if (props.message) return props.message;

    switch (props.statusCode) {
        case 404:
            return 'お探しのページは削除されたか、URLが変更された可能性があります。';
        case 403:
            return 'このページにアクセスする権限がありません。';
        case 500:
            return 'サーバーで問題が発生しました。しばらく経ってからもう一度お試しください。';
        default:
            return '予期せぬエラーが発生しました。もう一度お試しください。';
    }
});

// スナックバーの設定
const snackbarType = computed(() => {
    switch (props.statusCode) {
        case 404:
            return 'warning';
        case 403:
            return 'error';
        case 500:
            return 'error';
        default:
            return 'info';
    }
});

const snackbarMessage = computed(() => {
    return `エラー ${props.statusCode}: ${errorTitle.value}`;
});

// ページがマウントされたらスナックバーを表示
onMounted(() => {
    if (snackbarRef.value) {
        snackbarRef.value.show();
    }
});

// ホームページに戻る
const goHome = () => {
    router.push('/');
};

// 前のページに戻る
const goBack = () => {
    router.back();
};
</script>

<template>
    <div class="errorContainer">
        <div class="errorContent">
            <div class="errorIconWrapper">
                <div class="errorIcon">{{ statusCode }}</div>
            </div>

            <h1 class="errorTitle">{{ errorTitle }}</h1>

            <p class="errorMessage">{{ errorMessage }}</p>

            <div class="errorActions">
                <TheButton type="primary" @click="goHome">
                    ホームに戻る
                </TheButton>

                <TheButton type="secondary" @click="goBack" class="mL20">
                    前のページに戻る
                </TheButton>
            </div>
        </div>
        
        <!-- スナックバー通知 -->
        <TheSnackbar 
            ref="snackbarRef"
            :message="snackbarMessage"
            :type="snackbarType"
            position="top"
            :duration="5000"
        />
    </div>
</template>

<style scoped>
.errorContainer {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: var(--grayColor1000);
}

.errorContent {
    max-width: 600px;
    width: 100%;
    background-color: var(--whiteColor100);
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    box-shadow: var(--standardShadow);
}

.errorIconWrapper {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto 24px;
}

.errorIcon {
    font-size: clamp(2.5rem, 6vw, 4rem);
}

.errorTitle {
    font-size: var(--mediumFontSize);
    color: var(--darkColor100);
    margin-bottom: 16px;
    width: 100%;
}

.errorMessage {
    color: var(--grayColor200);
    margin-bottom: 32px;
    line-height: 1.6;
}

.errorActions {
    display: flex;
    justify-content: center;
    gap: 16px;
}

@media (max-width: 768px) {
    .errorContent {
        padding: 24px;
    }

    .errorActions {
        flex-direction: column;
        gap: 12px;
    }

    .mL20 {
        margin-left: 0 !important;
        margin-top: 12px;
    }
}
</style>