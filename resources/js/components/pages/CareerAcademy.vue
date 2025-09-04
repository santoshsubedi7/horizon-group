<template>
    <section class="w-full mt-48">
        <!-- page title -->
        <div class="lg:w-[75%] mx-auto px-7 lg:px-0 pb-9 page_title">
            <h1 class="font-semibold">CAREER ACADEMY</h1>
            <p class="font-semibold">教育業務</p>
        </div>
    </section>

    <section>
        <hr class="border-t border-gray-300">
        <div class="lg:w-[75%] mx-auto px-7 lg:px-0">
            <Breadcrumbs :items="breadcrumbsItems" />
        </div>
    </section>

    <!-- Image -->
    <section class="flex flex-col lg:flex-row items-start gap-6 p-7 lg:p-12 lg:w-[75%] mx-auto mt-16 lg:mt-36">
        <div class="w-full lg:w-1/2">
            <div class="w-full rounded-lg">
                <img :src="HgAcademyImg" alt="hg-academy"  class="w-full h-auto md:h-full object-cover rounded-lg">
            </div>
        </div>

        <!-- Text -->
        <div class="w-full lg:w-1/2">
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

    <section class="lg:w-[75%] mx-auto mt-16 lg:mt-24 px-4 md:px-8 py-10 text-center">
        <!-- Heading -->
        <h4 class="w-full md:w-[50%] mx-auto text-center font-semibold leading-relaxed mb-10">
            働く準備のみならず、日本社会で
            <span class="text-sky-500">「活躍できる人材育成」</span>
            がHORIZON CAREER ACADEMYの使命です。
        </h4>

        <!-- Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-[#00AEEF] rounded-full mb-4 flex items-center justify-center">
                    <img :src="AcademySupportIcon01" alt="icon" class="w-14 h-14 object-contain"/>
                </div>
                <span class="font-semibold text-lg text-[#3A3F44]">実践的学習</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">就職・転職活動を成功させるために必要な実践的なスキルを習得</p>
            </div>

            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-[#00AEEF] rounded-full mb-4 flex items-center justify-center">
                    <img :src="AcademySupportIcon02" alt="icon" class="w-14 h-14 object-contain"/>
                </div>
                <span class="font-semibold text-lg text-[#3A3F44]">個別サポート</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">学生一人ひとりの希望やレベルに応じた個別指導</p>
            </div>

            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-[#00AEEF] rounded-full mb-4 flex items-center justify-center">
                    <img :src="AcademySupportIcon03" alt="icon" class="w-14 h-14 object-contain"/>
                </div>
                <span class="font-semibold text-lg text-[#3A3F44]">特定技能対応</span>
                <p class="text-sm text-[#00B1E6] font-semibold py-2">コース</p>
                <p class="text-sm">特定技能制度に対応した試験対策講座も開講</p>
            </div>

            <div class="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-[#00AEEF] rounded-full mb-4 flex items-center justify-center">
                    <img :src="AcademySupportIcon04" alt="icon" class="w-14 h-14 object-contain"/>
                </div>
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


<script setup>
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue'
import Curriculum from '../ui/home/Curriculum.vue'
import HgAcademyImg from '@assets/images/hgAcademyImg.jpg'
import AcademySupportIcon01 from '@assets/images/academy-support-icon-01.svg'
import AcademySupportIcon02 from '@assets/images/academy-support-icon-02.svg'
import AcademySupportIcon03 from '@assets/images/academy-support-icon-03.svg'
import AcademySupportIcon04 from '@assets/images/academy-support-icon-04.svg'

// Expose to template
const breadcrumbsItems = [
  { label: 'ホーム', to: '/' },
  { label: '教育業務', to: '/career_academy' }
]
</script>
<style scoped>
@media (max-width:1023px){
    .page_title h1{
        font-size: 36px;
    }
}
</style>