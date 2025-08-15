<template>
    <section class="md:w-[75%] mx-auto px-6 md:px-0 pg-title">
        <div class="">
            <h1 class="text-5xl pb-4 font-semibold">COMPANY</h1>
            <h5 class="font-semibold text-[#96999B]">会社情報</h5>
        </div>
    </section>
    <hr class="border-gray-300 my-4">
    <div class="w-[75%] mx-auto">
        <Breadcrumbs :items="breadcrumbItems" />
    </div>
    <section class="md:w-[75%] mx-auto px-6 md:px-0 mt-[128px] company-profile">
        <img :src="officeImage" alt="office" class="w-full h-[600px] object-cover">
        <div class="mt-[80px]">
            <div class="flex">
                <h3 class="text-2xl font-semibold">COMPANY PROFILE</h3>
                <p class="pl-4 pt-[20px] font-semibold jp-cp-sb-title">会社概要</p>
            </div>
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
                    <p class="ml-8">
                        外国人向けの人材紹介<br>外国人労働者の就労支援サポート<br>南アジア各国からの留学生紹介<br>ビザ申請手続のサポート(新規・更新)<br>IT関連(アプリ開発・Webページ制作・SNS運用代行)</br>ネパールにおける日本語学校の運営<br>外国人インターンシップ受入サポート支援業務
                    </p>
                </li>
                <li class="flex py-8 border-b border-gray-300">
                    <p class="w-24 min-w-fit font-semibold">許可等</p>
                    <p class="ml-8">有料職業紹介事業許可番号：13 – ユ – 317409</p>
                </li>
            </ul>
        </div>
    </section>
    <!-- Access -->
    <section class="md:w-[75%] mx-auto px-6 md:px-0 mt-32 mb-40 access">
        <div class="flex mb-9">
            <h3 class="font-semibold">ACCESS</h3>
            <h6 class="font-semibold pt-6 pl-4 ac-sb-title">アクセス</h6>
        </div>

        <div class="flex flex-wrap -mx-4">
            <!-- Column 1 - Map -->
            <div class="w-full md:w-7/12 px-4 mb-4 md:mb-0">
                <div class="h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.058600579586!2d139.693767576232!3d35.7001755289325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188df333d0cda5%3A0x64755b23f013069e!2z5qCq5byP5Lya56S-SE9SSVpPTiBHUk9VUA!5e0!3m2!1sen!2sjp!4v1755003397349!5m2!1sen!2sjp"
                        class="w-full h-[500px] md:h-full shadow-md rounded-lg" style="border:0;" allowfullscreen
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div class="mt-6">
                        <p class="mb-2">株式会社HORIZON GROUP　（ホライゾングループ）</p>
                        <p class="text-sm">〒169-0073 東京都新宿区百人町1丁目20番26号</p>
                    </div>

                </div>

            </div>

            <!-- Column 2 - Image -->
            <div class="w-full md:w-5/12 px-4">
                <div class="h-[500px] md:h-full overflow-hidden">
                    <img :src="HgLocationBuilding" alt="gh-location-building"
                        class="w-full h-full object-cover object-center shadow-md rounded-lg">
                </div>
                <p class="mt-6 text-right">Google Map で見る</p>
            </div>
        </div>

    </section>
</template>

<!-- javascript -->
<script setup>
import officeImage from '../../../assets/images/office.jpg';
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';
import HgLocationBuilding from '../../../assets/images/hg-location-building.jpg'

const breadcrumbItems = [
    { label: 'ホーム', to: '/' },
    { label: '会社概要', to: '/about' }
];
</script>

<style>
.pg-title {
    margin-top: 200px;
}

.company-profile ul li {
    font-size: 14px;
}
@media(max-width:767px){
    .pg-title h1{
        font-size: 36px;
    }
    .company-profile h3{
        font-size: 24px;
    }
    .jp-cp-sb-title{
        padding-top: 8px;
    }
    .access h3{
       font-size: 24px;
    }
    .ac-sb-title{
        padding-top: 8px;
    }
}
</style>