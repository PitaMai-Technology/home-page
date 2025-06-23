<template>
    <TheSeo title="私たちの想い・創業背景" />
    <div class="wMax1250">
        <div class="section">
            <section>
                <h2 class="mB20">最初の私たちの想い・創業背景</h2>
                <p>
                    多くの高機能なプロジェクト管理ツールに皆さん思ったことがあるのではないでしょうか？、「私達の中小規模のチームにとっては機能過多で複雑すぎる！！」、なので導入や活用のハードルが高い場合があります。<br>
                    また、情報共有ツール(Slackなどチャットツール等)とプロジェクト管理ツールが一体化しすぎていることも、かえって使いにくさを生む一因かもしれません。 <br>
                    「それならば、中小規模チームに特化した、本当にシンプルで使いやすいプロジェクト管理ツールが必要なのではないか？」と考えたのが、<br>
                    ピタマイ・テクノロジー創業のきっかけです。 <br>
                    <br>
                    団体名の「ピタマイ」は、「ピッタリ」の "Pita" と、"Mai"<br>
                    "My"（自分のもののように）を掛け合わせ、「自分のもののようにピッタリフィットする」サービスを提供したいという想いを込めています 。
                </p>
            </section>
        </div>
        <TheHr />
        <div class="section">
            <article>
                <section>
                    <h2 class="mB20">副代表メッセージ</h2>
                    <NuxtImg src="/img/eita.jpg" class="leaderImg mB20" />
                    <p class="mB20">
                        こんにちは、ピタマイ・テクノロジー副代表(統括)の小林栄太です。<br>
                        <br>
                        私は色々な学生組織を転々とし、活動してきました。そこで以下のような考えを持つようになりました。<br>
                        「製品(プロダクト)を作る以前の問題として組織が悪い状態ではないか」です。<br>
                        少し曖昧ですので掘り下げましょう。私が感じた学生組織でよく見られる課題とピタマイでやっている解決策を記述します。<br>
                    </p>
                </section>

                <div class="faqContainer mB40">

                    <div class="faqItem">
                        <section>
                            <div class="faqQuestion" @click="openFaq === 1 ? openFaq = null : openFaq = 1"
                                style="cursor:pointer;">
                                <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="questionIcon" />
                                <h3>情報共有ができてない問題</h3>
                            </div>
                            <transition name="faq">
                                <div class="faqAnswer" v-show="openFaq === 1">
                                    <p>情報共有がうまくいかず、認識のそごが生まれたり、問題が表面化しにくかったりします。また、メンバー間で遠慮してしまい、建設的な議論ができない等</p>
                                    <div class="faqSolution">
                                        <font-awesome-icon icon="fa-solid fa-circle-check" class="solutionIcon" />
                                        <p>ピタマイの対策：気軽にコミュニケーションできる環境作りと、その環境に見合った情報共有ツール(Stock, Google
                                            Workspace)を運用しています。
                                        </p>
                                    </div>
                                </div>
                            </transition>
                        </section>
                    </div>


                    <div class="faqItem">
                        <section>
                            <div class="faqQuestion" @click="openFaq === 2 ? openFaq = null : openFaq = 2"
                                style="cursor:pointer;">
                                <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="questionIcon" />
                                <h3>なんかフワッとしてて、チームがうまく回らない問題</h3>
                            </div>
                            <transition name="faq">
                                <div class="faqAnswer" v-show="openFaq === 2">
                                    <p> 具体的に言うと、「これ、誰が決めるんだっけ？」「どうやって進めるのが正解？」みたいに、フワッとしちゃうこと等です。<br>
                                        責任の所在が曖昧になったり。しっかりしたルールや「やり方」みたいなのが決まってないから、進め方もその場しのぎになっちゃって、結果せっかくみんな頑張ってるのに、なんか前に進んでない…みたいな感じになりがち。
                                    </p>
                                    <div class="faqSolution">
                                        <font-awesome-icon icon="fa-solid fa-circle-check" class="solutionIcon" />
                                        <p> もちろん、ガチガチのルールで縛りたいわけじゃないんです。自由な雰囲気は大事にしたい。でも、やっぱり最低限の「決めごと」は無いと組織としてダメだよね。ということで、規約(ルールブック)を作成しました。<br>
                                            ピタマイが何を目指すのか、誰がどんな役割か、困ったときや何か決めるときはどうするか、みたいな基本的なことです。私も「統括」として、全体がうまく回るようにフォローや、新しい人が安心して飛び込めるように、「お試し期間」を設けたり、入会後もちゃんとサポートする仕組みは用意してます。「みんなが自由に、でもチームとしてはちゃんと進んでいける」…そんなバランスを目指してる感じです。
                                        </p>
                                    </div>
                                </div>
                            </transition>
                        </section>
                    </div>
                </div>
                <p>
                    こういった組織づくりの話は、もしかしたら地味に聞こえるかもしれません。でも、私はこの「土台」の部分がしっかりしてこそ、メンバーみんなが安心して、自分の力を最大限に発揮できるし、結果として良いプロダクトが生まれると本気で思っています。ピタマイ・テクノロジーが、そんなチームであり続けられるように、これからも頑張っていきたいです。もし、こういう考え方に共感してくれる方がいたら、とても嬉しいですね。
                </p>
            </article>
        </div>
    </div>
</template>

<script setup>
const openFaq = ref(null)
</script>

<style scoped>
.faqContainer {
    margin-top: 30px;
}

.faqItem {
    background-color: var(--whiteColor100);
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
}

.faqItem:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.faqQuestion {
    display: flex;
    align-items: center;
    padding: 18px 20px;
    background: linear-gradient(90deg, rgba(184, 251, 151, 0.15), rgba(77, 102, 62, 0.05));
    color: var(--grayColor100);
}

.faqQuestion h3 {
    margin: 0;
    font-size: 1.1em;
    font-weight: 600;
}

.questionIcon {
    margin-right: 15px;
    color: var(--subColor);
    font-size: 1.2em;
}

.faqAnswer {
    padding: 5px 20px 20px;
    line-height: 1.6;
    /* アニメーション用にoverflowを隠す */
    overflow: hidden;
}

/* アコーディオンアニメーション */
.faq-enter-active,
.faq-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    max-height: 300px;
}

.faq-enter-from,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
}

.faq-enter-from,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
}

.faqSolution {
    display: flex;
    background-color: #87cc5c55;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
}

.solutionIcon {
    margin-right: 12px;
    color: var(--subColor);
    font-size: 1.2em;
    margin-top: 3px;
}

@media (max-width: 768px) {
    .faqQuestion {
        flex-direction: column;
        align-items: flex-start;
    }

    .questionIcon {
        margin-bottom: 10px;
    }

    .faqSolution {
        flex-direction: column;
    }

    .solutionIcon {
        margin-bottom: 10px;
    }
}
</style>