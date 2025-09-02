<template>
   <section class="w-full mt-48">
      <!-- page title -->
      <div class="pg-title w-[75%] mx-auto pb-9">
         <h1 class="font-semibold">CONTACTS</h1>
         <p class="font-semibold">お問い合わせ</p>
      </div>
      <hr class="border-t border-gray-300">
      <!-- <div class="w-[75%] mx-auto">
            <Breadcrumbs :items="breadcrumbsItems"/>
        </div> -->

      <div class="md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-32">

         <!-- Card 1 -->
         <div class="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
            <!-- Image placeholder -->
            <div class="bg-gray-200 h-48">
               <img :src="HgBuildingImg" alt="hg-building" class="w-full h-full object-cover">
            </div>
            <!-- Content -->
            <div class="p-6 flex flex-col flex-grow">
               <p class="text-sm text-gray-500 mb-2">受付時間　9:00–18:00　「土・日・祝日除く」</p>
               <h4 class="text-lg font-semibold mb-3">企業方へお問い合わせ</h4>
               <p class="text-gray-600 text-sm flex-grow">
                  「企業方へお問い合わせ」では、当社のサービスに関心をお持ちの企業様向けに、
                  ご要望やご相談を受け付けています。事業内容や採用、採用に関するお問い合わせなど、
                  お気軽にご連絡ください。
               </p>
               <div class="mt-6">
                  <BlackButton><router-link to="/contact_company">フォームお問い合わせ</router-link></BlackButton>
               </div>
            </div>
         </div>

         <!-- Card 2 -->
         <div class="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
            <!-- Image placeholder -->
            <div class="bg-gray-200 h-48">
               <img :src="HgBusinessImg" alt="hg-business" class="w-full h-full object-cover">
            </div>
            <!-- Content -->
            <div class="p-6 flex flex-col flex-grow">
               <p class="text-sm text-gray-500 mb-2">受付時間　9:00–18:00　「土・日・祝日除く」</p>
               <h4 class="text-lg font-semibold mb-3">求人方へお問い合わせ</h4>
               <p class="text-gray-600 text-sm flex-grow">
                  「求人方へお問い合わせ」では、当社への求人依頼や人材紹介に関するご相談を受け付けています。
                  採用のご要望や詳細について、お気軽にお問い合わせください。
               </p>
               <div class="mt-6">
                  <BlackButton><router-link to="/contact_recruit">フォームお問い合わせ</router-link></BlackButton>
               </div>
            </div>
         </div>

      </div>
   </section>
</template>
<script setup>
 import BlackButton from '../ui/button/BlackButton.vue';
 import HgBuildingImg from '@assets/images/hb-building-img.jpg';
 import HgBusinessImg from '@assets/images/hb-business-img.jpg';
</script>