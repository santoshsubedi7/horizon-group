<template>
  <section class="w-full mx-auto bg-slate-100 pt-16 md:pt-24 pb-16 md:pb-28">
    <div class="xl:w-[75%] xl:mx-auto px-4 xl:px-0">
      <!-- Section Header -->
      <div class=" mb-8 md:mb-10">
        <h2 class="text-center font-semibold tracking-tight text-[#0D0F11]">SERVICE</h2>
        <h6 class="text-center mb-3 font-semibold">当社スーサ－ビス</h6>

        <div class="mt-8 md:mt-10 px-4 xl:px-0">
          <h4 class="font-bold mb-2">1. 人材紹介サービス</h4>
          <div class="relative w-full h-[1.5px] mb-4">
            <div class="absolute left-0 top-0 h-full w-full bg-gray-200 rounded"></div>
            <div class="absolute left-0 top-0 h-full w-1/4 bg-blue-500 rounded"></div>
          </div>
          <p class="text-sm md:text-base">
            私たちは、日本で働きたい外国人と、優秀な人材を求める企業様をつなぐ人材紹介サービスを展開しています。採用から就労まで、すべてのステップで丁寧かつ的確にサポートいたします
          </p>
        </div>

      </div>
      <!-- Columns -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 px-4 lg:px-8">
        <!-- Left Column: Company -->
        <div class="flex-1 rounded-xl flex flex-col items-center shadow-sm bg-white overflow-hidden">
          <img :src="buildingImg" alt="企業様向けサービス" class="w-full h-60 md:h-80 object-cover mb-4" />
          <div class="px-4 md:px-6 pb-6 md:pb-10 w-full">
            <h5 class="font-bold text-[#3A3F44] mb-4 md:mb-6">企業様向けサービス</h5>
            <p class="mb-3 text-sm md:text-base">外国籍人材の採用をご検討中の企業様に、以下のサポートを提供します：</p>
            <ul class="list-disc text-left ml-5 md:ml-6 text-sm md:text-base space-y-1">
              <li>採用ニーズに合った外国籍人材のご紹介</li>
              <li>採用に関する手続きや対応の全面サポート</li>
              <li>外国籍人材との面談・面接支援</li>
              <li>異文化理解・職場定着に向けたコンサルティング</li>
              <li>就労ビザ取得・変更に伴う書類作成・手続きサポート</li>
            </ul>
          </div>
        </div>
        <!-- Right Column: Jobseeker -->
        <div class="flex-1 rounded-xl flex flex-col items-center shadow-sm bg-white overflow-hidden mt-6 md:mt-0">
          <img :src="businessMeetingImg" alt="求職者様向けサービス" class="w-full h-60 md:h-80 object-cover mb-4" />
          <div class="px-4 md:px-6 pb-6 md:pb-10 w-full">
            <h5 class="font-bold text-[#3A3F44] mb-4 md:mb-6">求職者様向けサービス</h5>
            <p class="mb-3 text-sm md:text-base">日本で働きたい外国籍求職者の皆様に、安心して就職できるよう全面的に支援します：</p>
            <ul class="list-disc text-left ml-5 md:ml-6 text-sm md:text-base space-y-1">
              <li>外国籍の方を積極的に採用している企業の紹介</li>
              <li>希望に合った職場への応募・採用サポート</li>
              <li>日本の就職マナーや面接準備に関するアドバイス</li>
              <li>面接時の同席・フォローアップ</li>
              <li>就労ビザの取得・変更に関する手続きサポート</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="mb-8 md:mb-10 mt-12 md:mt-20 px-4 xl:px-0">
        <h4 class="font-bold mb-2">2. 留学生サポートサービス</h4>
        <div class="relative w-full h-[1px] mb-4">
          <div class="absolute left-0 top-0 h-full w-full bg-gray-200 rounded"></div>
          <div class="absolute left-0 top-0 h-full w-1/4 bg-blue-500 rounded"></div>
        </div>
        <p class="text-sm md:text-base">
          日本への留学を希望される外国人の方に対し、学校選びから入学、生活支援、就労支援まで、トータルでサポートいたします。
        </p>
      </div>
      <!-- Columns -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 px-4 lg:px-8">
        <!-- Left Column: Image -->
        <div class="rounded-xl shadow-sm w-full md:w-1/2 overflow-hidden">
          <img :src="studentImg" alt="留学生サポート" class="w-full h-auto md:h-full object-cover rounded-lg" />
        </div>
        <!-- Right Column: List & Content -->
        <div class="pt-4 md:pt-8 w-full md:w-1/2">
          <h5 class="font-bold mb-2 text-[#3A3F44]">提供サービス：</h5>
          <ul class="list-disc ml-5 md:ml-6 mb-4 space-y-1 text-sm md:text-base">
            <li>日本語学校、専門学校、大学の紹介</li>
            <li>入学手続きや必要書類の準備支援</li>
            <li>学生ビザ申請および更新サポート</li>
            <li>来日後の生活支援（住居探し、携帯契約、銀行口座開設など）</li>
            <li>アルバイトや卒業後の就職活動支援</li>
            <li>メンタル・文化適応に関する相談受付</li>
          </ul>
          <p class="text-gray-700 text-sm md:text-base">
            留学生の皆様が安心して学び、成長できる環境づくりをお手伝いいたします。
          </p>
        </div>
      </div>

      <!-- Header -->
      <div class="mb-8 md:mb-10 mt-12 md:mt-20 px-4 xl:px-0">
        <h4 class="font-bold mb-2">3. 翻訳・通訳サービス</h4>
        <div class="relative w-full h-[1px] mb-4">
          <div class="absolute left-0 top-0 h-full w-full bg-gray-200 rounded"></div>
          <div class="absolute left-0 top-0 h-full w-1/4 bg-blue-500 rounded"></div>
        </div>
        <p class="text-sm md:text-base">
          多言語対応が求められるさまざまなシーンにおいて、質の高い翻訳・通訳サービスを提供しています。ビジネスから医療、教育、行政まで、幅広く対応可能です。
        </p>
      </div>
      <!-- Columns -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 px-4 lg:px-8">
        <!-- Left Column: Image -->
        <div class="rounded-xl shadow-sm w-full md:w-1/2 overflow-hidden">
          <img :src="translationImg" alt="翻訳・通訳サービス" class="w-full h-auto md:h-full object-cover rounded-lg" />
        </div>
        <!-- Right Column: Languages & Services -->
        <div class="pt-4 md:pt-6 w-full md:w-1/2">
          <h5 class="font-bold mb-2 text-[#3A3F44]">対応言語：</h5>
          <ul class="list-disc ml-5 md:ml-6 text-gray-600 text-sm md:text-base mb-3 space-y-1">
            <li>日本語</li>
            <li>英語</li>
            <li>韓国語</li>
            <li>ネパール語</li>
            <li>ヒンディー語</li>
          </ul>
          <h5 class="font-bold mb-2 text-[#3A3F44]">サービス内容：</h5>
          <ul class="list-disc ml-5 md:ml-6 space-y-1 text-sm md:text-base">
            <li><strong>通訳サービス：</strong> ビジネス会議、商談、医療現場、教育現場、行政手続きなど</li>
            <li><strong>翻訳サービス：</strong> 契約書、会社案内、マニュアル、WEBコンテンツ、履歴書など</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import buildingImg from '@assets/images/hb-building-img.jpg';
import businessMeetingImg from '@assets/images/hb-business-img.jpg';
import studentImg from '@assets/images/hb-student.jpg';
import translationImg from '@assets/images/hg-translation.jpg';
</script>