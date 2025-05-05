<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <!-- app -->
    <div>
        <div class="appContainer">
            <TheProgressBar />
            <!-- ヘッダー部分 -->
            <TheAppHeader />

            <div class="mainContent">
                <TheAppAside />

                <!-- メインコンテンツエリア -->
                <main class="contentArea">
                    <slot />
                    <div v-if="route.path !== '/'"  class="section">
                        <TheBreadcrum />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style>
.appContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--grayColor100, #333);
    background-color: var(--grayColor1000, #ECEFF1);
}

/* メインコンテンツエリア */
.mainContent {
    display: flex;
    flex: 1;
}

/* コンテンツエリア */
.contentArea {
    flex: 1;
    background-color: var(--grayColor1000, #ECEFF1);
    overflow-y: auto;
    min-height: calc(100vh - 72px);
}

.pageTitle {
    font-size: var(--smallMediumFontSize, 1.5rem);
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: var(--grayColor100, #333);
}

.contentActions {
    display: flex;
    gap: 0.8rem;
}

.postsList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* カード共通スタイル */
.card {
    background-color: var(--whiteColor100, #ffffff);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--softShadow, 0px 4px 5px -3px rgba(0, 0, 0, 0.3));
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
}

/* 投稿 */
.postItem,
.taskItem {
    padding: 1.2rem;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .mainContent {
        flex-direction: column;
    }

    .searchInput {
        width: 160px;
    }

    .navItem {
        border-radius: 24px;
    }
}

@media (max-width: 480px) {
    .contentHeader {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>