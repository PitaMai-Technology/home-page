<script setup>
import { ref } from 'vue'

// プロパティの定義
const props = defineProps({
    // ニュースアイテムの配列（日付と識別子のみを含む）
    items: {
        type: Array,
        default: () => [],
        // アイテムの期待される形式: { id: number, date?: string }
    }
})

// 開いているアイテムのIDを追跡
const openItem = ref(null)

// アイテムの開閉を切り替え
const toggleItem = (itemId) => {
    openItem.value = openItem.value === itemId ? null : itemId
}
</script>

<template>
    <div class="newsContainer">
        <!-- ニュース項目のループ -->
        <div v-for="item in items" :key="item.id" class="newsItem">
            <div class="newsHeader" @click="toggleItem(item.id)" style="cursor:pointer;">
                <!-- 日付があるときのみ表示 -->
                <div v-if="item.date" class="newsDate">{{ item.date }}</div>
                <!-- タイトル用スロット -->
                <div class="titleSlot" :class="{ 'no-date': !item.date }">
                    <slot :name="`title-${item.id}`">
                        <h3>タイトルなし</h3>
                    </slot>
                </div>
                <div class="newsIndicator">
                    <font-awesome-icon
                        :icon="openItem === item.id ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" />
                </div>
            </div>
            <transition name="news">
                <div class="newsContent" v-show="openItem === item.id">
                    <!-- コンテンツ用スロット -->
                    <slot :name="`content-${item.id}`">
                        <p>内容がありません</p>
                    </slot>

                    <!-- アクション（リンク）用スロット -->
                    <div class="newsAction">
                        <slot :name="`action-${item.id}`"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
/* ニュースセクションのスタイル */
.newsContainer {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
}

.newsItem {
    background-color: var(--whiteColor100);
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.newsItem:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.newsHeader {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background: linear-gradient(90deg, rgba(184, 251, 151, 0.2), var(--mainColor));
    position: relative;
}

.titleSlot {
    flex-grow: 1;
    padding: 0 0 0 15px;
}

/* 日付がない場合のタイトルスロットのパディング調整 */
.titleSlot.no-date {
    padding-left: 0;
}

.titleSlot :deep(h3) {
    margin: 0;
    padding: 0;
    font-size: 1.1em;
    color: var(--grayColor100);
    font-weight: 600;
}

.newsDate {
    background-color: var(--subColor);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: bold;
    white-space: nowrap;
}

.newsIndicator {
    margin-left: 15px;
    color: var(--subColor);
    transition: transform 0.2s ease;
}

.newsContent {
    padding: 20px;
    background-color: var(--whiteColor100);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.newsAction {
    display: flex;
    justify-content: flex-end;
}

/* ニュースアコーディオンアニメーション */
.news-enter-active,
.news-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    max-height: 300px;
}

.news-enter-from,
.news-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .newsHeader {
        flex-direction: column;
        align-items: flex-start;
    }

    .titleSlot {
        padding: 10px 0;
        width: 100%;
    }
    
    /* 日付がない場合のモバイル表示の調整 */
    .titleSlot.no-date {
        padding: 0;
    }

    .newsIndicator {
        position: absolute;
        top: 16px;
        right: 16px;
    }
}
</style>