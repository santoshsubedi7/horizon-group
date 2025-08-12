<template>
    <section class="w-[75%] mx-auto pg-title">
        <div class="">
            <h1 class="text-5xl pb-4">COMPANY</h1>
        <h5>会社情報</h5>
        </div>
    </section>
    <hr class="border-gray-300 my-4">
    <div class="w-[75%] mx-auto">
       <Breadcrumbs :items="breadcrumbItems" /> 
    </div>
    <section class="w-[75%] mx-auto mt-[128px] company-profile">
        <img :src="officeImage" alt="office" class="w-full h-[600px] object-cover">
        <div class="mt-[80px]">
        <div class="flex"><h2 class="text-2xl font-bold">COMPANY PROFILE</h2><p class="pl-4 pt-2 font-semibold">会社概要</p></div>
    <ul class="divide-y divide-gray-300 mt-[32px]">
        <li class="flex py-8">
            <p class="w-24 min-w-fit font-semibold">会社名</p>
            <p class="ml-8">株式会社HORIZON GROUP　（ホライゾングループ</p>
        </li>
        <li class="flex py-8">
            <p class="w-24 min-w-fit font-semibold">所在地</p>
            <p class="ml-8">東京都新宿区百人町1丁目20番26号バラードハイムムサシノビル806号室</p>
        </li>
        <li class="flex py-8">
            <p class="w-24 min-w-fit font-semibold">TEL / FAX</p>
            <p class="ml-8">03-5497−8734 / 03-5497-8735</p>
        </li>
        <li class="flex py-8">
            <p class="w-24 min-w-fit font-semibold">設立</p>
            <p class="ml-8">2024年05月</p>
        </li>
        <li class="flex py-8">
            <p class="w-24 min-w-fit font-semibold">資本金</p>
            <p class="ml-8">外国人向けの人材紹介<br>外国人労働者の就労支援サポート<br>南アジア各国からの留学生紹介<br>ビザ申請手続のサポート(新規・更新)<br>IT関連(アプリ開発・Webページ制作・SNS運用代行)</br>ネパールにおける日本語学校の運営<br>外国人インターンシップ受入サポート支援業務</p>
        </li>
        <li class="flex py-8">
            <p class="w-24 min-w-fit font-semibold">許可等</p>
            <p class="ml-8">有料職業紹介事業許可番号：13 – ユ – 317409</p>
        </li>
    </ul>
    </div>
</section>
<!-- Access -->
<section class="mt-[128px]">
    <div class="flex">
        <h2 class="text-3xl">ACCESS</h2>
        <p>アクセス</p> 
    </div>
    
</section>
</template>

<!-- javascript -->
<script setup>
import officeImage from '../../../assets/images/office.jpg';
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';

const breadcrumbItems = [
  { label: 'ホーム', to: '/' },
  { label: '会社概要', to: '/about' }
];
</script>

<style>
.pg-title {
    margin-top: 200px;
}
.company-profile ul li{
    font-size: 14px;
}

</style>