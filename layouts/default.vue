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

.orgCard {
    background-color: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--standardShadow);
    overflow: hidden;
    width: 100%;
    max-width: 700px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    line-height: 1.5;
}

.orgTable {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
}

.orgTable th,
.orgTable td {
    padding: 16px 24px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid var(--grayColor2000);
    transition: background-color 0.2s;
}

.orgTable th {
    background: linear-gradient(90deg,
            rgba(184, 251, 151, 0.2),
            rgba(77, 102, 62, 0.05));
    color: var(--subColor);
    font-weight: bold;
    width: 160px;
    border-right: 1px solid var(--grayColor2000);
}

.orgTable tr:last-child th,
.orgTable tr:last-child td {
    border-bottom: none;
}

.orgTable tr:hover td,
.orgTable tr:hover th {
    background-color: rgba(184, 251, 151, 0.05);
}

.orgTable small {
    color: var(--grayColor300);
    font-size: 0.85em;
    margin-top: 5px;
    display: block;
}

@media (max-width: 768px) {
    .orgCard {
        border-radius: 8px;
    }

    .orgTable th,
    .orgTable td {
        display: block;
        width: 100%;
    }

    .orgTable th {
        padding: 12px 16px 4px 16px;
        border-right: none;
        border-bottom: none;
    }

    .orgTable td {
        padding: 8px 16px 12px 16px;
    }
}
</style>