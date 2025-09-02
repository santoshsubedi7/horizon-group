<template>
    <section class="w-full mt-48">
        <div class="pg-title w-[75%] mx-auto pb-9">
            <h1 class="font-semibold">Cookie Policies</h1>
            <p class="font-semibold">クッキーポリシー</p>
        </div>
        <hr class="border-t border-gray-300">
       <div class="w-[75%] mx-auto">
            <Breadcrumbs :items="breadcrumbsItems"/>
        </div>

        <!-- body -->
        <div class="cookie-bd lg:w-[75%] mx-auto p-16 mt-16">
            <div class="mb-9">
                <p class="font-bold mt-4">1. はじめに</p>
                <p>
                    本クッキーポリシーでは、{{ companyName }}（以下「当社」）が当社ウェブサイト
                    {{ website }}（以下「本サイト」）において、クッキーおよび類似技術をどのように使用しているかをご説明します。
                    本サイトをご利用いただくことで、本ポリシーに従ったクッキーの使用に同意いただいたものとみなします。
                </p>
            </div>


            <div class="mb-9">
                <p class="font-bold mt-4">2. クッキーとは</p>
                <p>
                    クッキーとは、ウェブサイトを訪問した際にお客様のデバイスに保存される小さなテキストファイルです。
                    クッキーは、お客様の設定や利用状況を記憶し、快適な閲覧体験を提供し、サイト利用状況を分析するために使用されます。
                </p>
            </div>


            <div class="mb-9">
                <p class="font-bold mt-4">3. 当社が使用するクッキーの種類</p>
                <ul class="list-disc pl-5">
                    <li><span class="font-bold">必須クッキー：</span> 基本機能を提供。ページ移動や安全なアクセスが可能。</li>
                    <li><span class="font-bold">パフォーマンスクッキー：</span> 匿名で利用状況を収集、改善に活用。</li>
                    <li><span class="font-bold">機能クッキー：</span> 言語や地域設定を記憶しパーソナライズ。</li>
                    <li><span class="font-bold">ターゲティング／広告クッキー：</span> 関連性の高い広告表示、表示回数制限、効果測定。</li>
                </ul>
            </div>


            <div class="mb-9">
                <p class="font-bold mt-4">4. 第三者クッキー</p>
                <p>当社では以下の第三者クッキーを使用する場合があります：</p>
                <ul class="list-disc pl-5">
                    <li>Google Analytics：サイト利用状況の分析と改善</li>
                    <li>広告パートナー：関連性の高い広告の表示</li>
                </ul>
            </div>

            <div class="mb-9">
                <p class="font-bold mt-4">5. クッキーの管理・削除方法</p>
                <ul class="list-disc pl-5">
                    <li>すべてのクッキーをブロック</li>
                    <li>ブラウザ終了時にクッキー削除</li>
                    <li>保存前に通知を受ける</li>
                </ul>
            </div>

            <p class="text-sm text-gray-500">※ 無効化すると一部機能が利用できない場合があります。</p>

            <p class="font-bold mt-4">6. ポリシーの変更</p>
            <p>必要に応じて本ポリシーを更新します。更新後は本ページに掲載し日付を変更します。</p>

            <p class="font-bold mt-4">7. お問い合わせ</p>
            <p>{{ companyName }}</p>
            <p>メール：{{ email }}</p>
            <p>住所：{{ address }}</p>
        </div>
    </section>
</template>

<script>
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';

export default {
    name: "CookiePolicy",
    components: {
        Breadcrumbs
    },
    data() {
        return {
            breadcrumbsItems: [
                { label: 'ホーム', to: '/' },
                { label: 'クッキーポリシー', to: 'cookie_policy' }
            ]
        };
    },
    props: {
        companyName: { type: String, default: '[会社名]' },
        website: { type: String, default: 'https://yourwebsite.com' },
        lastUpdated: { type: String, default: '' },
        email: { type: String, default: '[メールアドレス]' },
        address: { type: String, default: '[住所]' }
    },
    computed: {
        lastUpdatedLabel() {
            if (!this.lastUpdated) return '[日付を入力]'
            const m = this.lastUpdated.match(/^(\d{4})-(\d{2})-(\d{2})/)
            if (m) return `${m[1]}年${m[2]}月${m[3]}日`
            return this.lastUpdated
        }
    }
}
</script>
