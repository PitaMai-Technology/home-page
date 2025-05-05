<template>
    <TheSeo title="組織概要" />
    <div class="wMax1250">
        <div class="section">
            <h1 class="mB40">組織概要</h1>
            <div class="orgCard">
                <table class="orgTable">
                    <tbody>
                        <tr>
                            <th>正式名称</th>
                            <td>ピタマイ・テクノロジー</td>
                        </tr>
                        <tr>
                            <th>名称(英語)</th>
                            <td>PitaMai Technology</td>
                        </tr>
                        <tr>
                            <th>形態</th>
                            <td>任意団体</td>
                        </tr>
                        <tr>
                            <th>活動形態</th>
                            <td>バーチャルチーム</td>
                        </tr>
                        <tr>
                            <th>創業日</th>
                            <td>令和7年3月19日</td>
                        </tr>
                        <tr>
                            <th>所在地</th>
                            <td>
                                埼玉県川口市<br /><small>※活動は完全リモートで行っています</small>
                            </td>
                        </tr>
                        <tr>
                            <th>役員</th>
                            <td>
                                副代表：小林 栄太<br />
                                代表：津端 大翔<br />
                                会計：小林 恵美<br />
                            </td>
                        </tr>
                        <tr>
                            <th>構成員数</th>
                            <td>4名</td>
                        </tr>
                        <tr>
                            <th>主な活動内容</th>
                            <td>Webサービス「PitaNote Project」の開発及び保守</td>
                        </tr>
                        <tr>
                            <th>お問い合わせ先</th>
                            <td>
                                info@pitamai.com<br />
                                <small>総合窓口</small>
                                <br />
                                050-1724-9305<br />
                                <small>副代表 直通</small>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
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
