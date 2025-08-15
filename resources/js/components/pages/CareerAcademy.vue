<template>
    <section class="w-full mt-48">
        <!-- page title -->
        <div class="w-[75%] mx-auto pb-9">
            <h1 class="font-semibold">CAREER ACADEMY</h1>
            <p class="font-semibold">教育業務</p>
        </div>
    </section>

    <section>
        <hr class="border-t border-gray-300">
        <div class="w-[75%] mx-auto">
            <Breadcrumbs :items="breadcrumbsItems" />
        </div>
    </section>

    <section class="flex flex-col md:flex-row items-start gap-6 p-6 md:p-12 w-[75%] mx-auto">
        <!-- Image -->
        <div class="w-full md:w-1/2">
            <div class="bg-gray-200 w-full h-0 pb-[60%] rounded-lg"></div>
        </div>

        <!-- Text -->
        <div class="w-full md:w-1/2">
            <h2 class="font-bold text-lg md:text-xl mb-3">HORIZON CAREER ACADEMYとは?</h2>
            <p class="text-sm md:text-base leading-relaxed mb-4">
                HORIZON CAREER ACADEMYは、日本で活躍できる人材不足問題の解決を目指し、
                株式会社HORIZON GROUPが運営する外国人向けの職業交流型スクールです。
            </p>
            <p class="text-sm md:text-base leading-relaxed">
                主に、日本で働きたいと考える外国人を対象としており、安心して暮らし、
                安定して働けるよう、就職活動及び職場アスリート支援活動に学びと企業を
                提供しています。カリキュラムは、職種や希望に応じて選択できます。
                研修・就職準備を包括的に支援するために必要な、以下の内容を含んでいます。
            </p>
        </div>
    </section>

    <section class="w-[75%] mx-auto mt-24 px-4 md:px-8 py-10 text-center">
        <!-- Heading -->
        <h4 class="w-full md:w-[50%] mx-auto text-center font-semibold leading-relaxed mb-10">
            働く準備のみならず、日本社会で
            <span class="text-sky-500">「活躍できる人材育成」</span>
            がHORIZON CAREER ACADEMYの使命です。
        </h4>

        <!-- Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                <span class="font-semibold text-lg text-[#3A3F44]">実践的学習</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">就職・転職活動を成功させるために必要な実践的なスキルを習得</p>
            </div>

            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                <span class="font-semibold text-lg text-[#3A3F44]">個別サポート</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">学生一人ひとりの希望やレベルに応じた個別指導</p>
            </div>

            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                <span class="font-semibold text-lg text-[#3A3F44]">特定技能対応</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">特定技能制度に対応した試験対策講座も開講</p>
            </div>

            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                <span class="font-semibold text-lg text-[#3A3F44]">文化理解</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">日本での生活マナー・文化の理解を深める</p>
            </div>
        </div>
    </section>
    <div class="my-24 px-4 md:px-8">
        <Curriculum />
    </div>
</template>


<script>
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';
import Curriculum from '../ui/home/Curriculum.vue'

export default {
    name: "CareerAcademy",
    components: {
        Breadcrumbs, Curriculum
    },
    data() {
        return {
            breadcrumbsItems: [
                { label: 'ホーム', to: '/' },
                { label: '教育業務', to: '/career_academy' }
            ]
        }
    }
}

</script>