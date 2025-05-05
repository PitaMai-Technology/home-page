<script setup>
// ニュースデータの定義（IDと日付のみ）
const newsItems = [
    { id: 1, date: '2025年5月6日' },
]
</script>

<template>
    <div>
        <div class="heroSection">
            <div class="heroContent">
                <h1 class="heroTitle">中小規模エンジニアチームにフォーカスしたツールを作る</h1>
                <p class="heroSubtitle">
                    ちょうど良いぐらいのテクノロジーで、<br>
                    中小規模のエンジニアチームに、より良い開発体験を提供する。
                </p>
                <div class="heroButtonContainer">
                    <NuxtLink to="/contents" class="mB20">
                        <TheButton type="primary" class="standardFontSize">
                            私たちの想い
                        </TheButton>
                    </NuxtLink>
                </div>
            </div>
            <div class="heroGraphic">
                <div class="heroShape heroShapeOne"></div>
                <div class="heroShape heroShapeThree"></div>
            </div>
        </div>
    </div>
    <div class="wMax1250">
        <div class="section">
            <h2 class="mB20">ピタマイ・テクノロジーについて</h2>
            <p class="mB20">
                ピタマイ・テクノロジーは、「PitaNote Project」というWebサービスの開発と保守を目的として創業された任意団体です。<br>
                メンバーの自律性を尊重するフラットな組織です。<br>
                <br>
                所在地はありますが、活動はオンラインで行っています。<br>
            </p>
            <div class="fitContent">
                <NuxtLink to="/about" class="mB20">
                    <TheButton type="primary" class="standardFontSize">
                        もっと詳しく知る
                    </TheButton>
                </NuxtLink>
            </div>
        </div>
        <TheHr />
        <div class="section">
            <h2 class="mB20">
                開発中のプロダクト紹介1: PitaNote Project
            </h2>
            <p>
                簡単な概要: シンプルな中小規模チーム向けのプロジェクト管理特化ツール<br>
                <br>
                既存のプロジェクト管理ツールは多機能な反面、中小規模のチームにとっては複雑すぎることがあります。<br>
                情報共有機能とプロジェクト管理機能が一体化しすぎている点に着目し、<br>
                私たちは中小規模チームに特化した、シンプルで使いやすいプロジェクト管理に特化したツールが必要だと考え、<br>
                開発を進めています。
            </p>
        </div>

        <TheHr />
        <div class="section">
            <h2 class="mB20">ニュース</h2>
            <div class="mB40">
                <TheAccordion :items="newsItems">
                    <!-- タイトルスロット -->
                    <template #title-1>
                        <h3>ピタマイ・テクノロジーのホームページ開設</h3>
                    </template>

                    <!-- コンテンツスロット -->
                    <template #content-1>
                        <p>
                            ピタマイ・テクノロジーのホームページを開設しました。<br>
                            今後は技術ブログを作るなどの展開をしていくかもしれません。
                        </p>
                    </template>
                </TheAccordion>
            </div>
        </div>
        <TheHr />
        <div class="section">
            <h2 class="mB20">もっとピタマイ・テクノロジーを知るためのコンテンツ</h2>
            <div class="iconNavigation">
                <div class="iconRow">
                    <NuxtLink to="/about" class="iconLink">
                        <div class="iconItem">
                            <span class="Theicon">
                                <font-awesome-icon icon="fa-solid fa-circle-info" />
                            </span>
                            <p>ピタマイについて</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/contents" class="iconLink">
                        <div class="iconItem">
                            <span class="Theicon">
                                <font-awesome-icon icon="fa-solid fa-heart" />
                            </span>
                            <p>私たちの想い</p>
                        </div>
                    </NuxtLink>
                </div>
                <div class="iconRow">
                    <NuxtLink class="iconLink">
                        <div class="iconItem">
                            <span class="Theicon">
                                <font-awesome-icon icon="fa-solid fa-laptop-code" />
                            </span>
                            <p>プロダクト(開発中…)</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/toiawase" class="iconLink">
                        <div class="iconItem">
                            <span class="Theicon">
                                <font-awesome-icon icon="fa-solid fa-paper-plane" />
                            </span>
                            <p>お問い合わせ先 一覧</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* ヒーローセクションのスタイル */
.heroButtonContainer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
}

.heroSection {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    /* アニメーション付きグラデーション背景 */
    background: linear-gradient(135deg, #f5f7fa 0%, var(--mainColor) 100%);
    background-size: 200% 200%;
    padding: 60px 20px;
}

.heroContent {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    text-align: center;
}

.heroTitle {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.2;
    margin-bottom: 20px;
    background: linear-gradient(90deg, var(--subColor));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding: 0;
    width: auto;

    @media (max-width: 768px) {
        background: linear-gradient(90deg, var(--subColor));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

.heroSubtitle {
    font-size: clamp(1.2rem, 2.5vw, 1.7rem);
    color: var(--grayColor300);
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
}

.heroGraphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.heroShape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
}

/* ヒーローの丸い図形にも動きを追加 */
.heroShapeOne {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, var(--mainColor), var(--subColor));
    top: -100px;
    right: -50px;
    animation: float 8s ease-in-out infinite, rotateShape 11s linear infinite;
}

.heroShapeThree {
    width: 250px;
    height: 360px;
    background: linear-gradient(45deg, var(--mainColor), var(--subColor));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: float 12s ease-in-out infinite, rotateShape 10s linear infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes rotateShape {
    0% {
        transform: rotate(0deg) scale(1) translateY(0);
    }

    100% {
        transform: rotate(360deg) scale(1) translateY(0);
    }
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .newsHeader {
        flex-direction: column;
        align-items: flex-start;
    }

    .newsHeader h3 {
        padding: 10px 0;
        width: 100%;
    }

    .newsIndicator {
        position: absolute;
        top: 16px;
        right: 16px;
    }
}

/* ナビゲーションアイコンのスタイル */
.iconNavigation {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.iconRow {
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
}

.iconLink {
    text-decoration: none;
    color: var(--grayColor100);
    flex: 1;
    max-width: 300px;
    transition: transform 0.3s ease;
}

.iconLink:hover {
    transform: translateY(-5px);
    text-decoration: none;
}

.iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--softShadow);
    text-align: center;
    height: 100%;
    transition: box-shadow 0.3s ease;
}

.iconItem:hover {
    box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.2);
}

.iconItem .Theicon {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--subColor);
}

.iconItem p {
    font-size: var(--smallMediumFontSize);
    margin: 0;
    font-weight: bold;
    color: var(--subColor);
    line-height: 1.4;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .iconRow {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .iconLink {
        width: 100%;
        max-width: 250px;
    }
}
</style>