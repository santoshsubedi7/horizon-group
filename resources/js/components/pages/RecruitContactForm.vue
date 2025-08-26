<script setup>
import { reactive } from 'vue'
import BlackButton from '../ui/button/BlackButton.vue';
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';


const form = reactive({
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  postalCode: '',
  address: '',
  inquiryType: '',
  message: ''
});

const inquiryTypes = [
  '面談・相談について',
  '採用について',
  'オンラインに授業について',
  'セミナー参加について',
  '就職サポートについて',
  '転職サポートについて',
  'その他のサポートについて'
];

const handleSubmit = () => {
  console.log("Form submitted:", form);
  alert("送信が完了しました。");
};
const breadcrumbsItems = [
    { label: 'ホーム', to: '/' },
    { label: '求人方へお問い合わせ', to: '/contact_recruit' }
];
</script>

<template>
  <section class="w-full mt-48">
    <div class="md:w-[75%] mx-auto px-7 lg:px-0 pb-9 page_title">
      <h1 class="font-semibold">CONTACT</h1>
      <p class="font-semibold text-gray-600 text-sm">お仕事をお探しの求職者様 </p>
    </div>
  </section>
      <section>
        <hr class="border-t border-gray-300">
        <div class="lg:w-[75%] mx-auto px-7 lg:px-0">
            <Breadcrumbs :items="breadcrumbsItems" />
        </div>
    </section>

  <section class="w-full flex justify-center py-10 px-4">
    <div class="w-full max-w-3xl">
                  <div class="mb-8 lg:pb-9">
                <h3 class="text-xl font-bold">求人方へ</h3>
                <p class="text-gray-600 text-sm">MAIL FORM メールでのお問い合わせ</p>
            </div>
      <form @submit.prevent="handleSubmit" class="space-y-6">

        <!-- Name -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-10">
          <div>
            <label class="flex items-center text-sm font-medium mb-1">
              姓
              <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
            </label>
            <input type="text" v-model="form.lastName" placeholder="例) 山田"
              class="w-full border border-gray-300 rounded-sm px-3 py-2 
              focus:ring focus:ring-slate-400 focus:outline-none 
              transition duration-300 ease-in-out placeholder:text-sm" required />
          </div>
          <div>
            <label class="flex items-center text-sm font-medium mb-1">
              名
              <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
            </label>
            <input type="text" v-model="form.firstName" placeholder="例) 勇気"
              class="w-full border border-gray-300 rounded-sm px-3 py-2 
              focus:ring focus:ring-slate-400 focus:outline-none 
              transition duration-300 ease-in-out placeholder:text-sm" required />
          </div>
        </div>

        <!-- Phone -->
        <div class="md:mb-10">
          <label class="flex items-center text-sm font-medium mb-1">
            電話番号
            <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
          </label>
          <input type="tel" v-model="form.phone" placeholder="例) 080 7979 8030"
            class="w-full border border-gray-300 rounded-sm px-3 py-2 
            focus:ring focus:ring-slate-400 focus:outline-none 
            transition duration-300 ease-in-out placeholder:text-sm" required />
        </div>

        <!-- Email -->
        <div class="md:mb-10">
          <label class="flex items-center text-sm font-medium mb-1">
            メールアドレス
            <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
          </label>
          <input type="email" v-model="form.email" placeholder="例) example@horizongroup.co.jp"
            class="w-full border border-gray-300 rounded-sm px-3 py-2 
            focus:ring focus:ring-slate-400 focus:outline-none 
            transition duration-300 ease-in-out placeholder:text-sm" required />
        </div>

        <!-- Postal code -->
        <div class="md:mb-10">
          <label class="flex items-center text-sm font-medium mb-1">
            郵便番号
            <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
          </label>
          <input type="text" v-model="form.postalCode" placeholder="例) 1690073"
            class="w-full border border-gray-300 rounded-sm px-3 py-2 
            focus:ring focus:ring-slate-400 focus:outline-none 
            transition duration-300 ease-in-out placeholder:text-sm" required />
        </div>

        <!-- Address -->
        <div class="md:mb-10">
          <label class="flex items-center text-sm font-medium mb-1">
            住所
            <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
          </label>
          <input type="text" v-model="form.address" placeholder="例) 東京都港区芝公園４丁目２−８"
            class="w-full border border-gray-300 rounded-sm px-3 py-2 
            focus:ring focus:ring-slate-400 focus:outline-none 
            transition duration-300 ease-in-out placeholder:text-sm" required />
        </div>

        <!-- Inquiry type -->
        <div class="md:mb-10">
          <label class="flex items-center text-sm font-medium mb-2">
            お問い合わせ種類：
            <span class="ml-2 text-[10px] bg-red-500 text-white px-1 rounded">必須</span>
          </label>
          <div class="space-y-2">
            <div v-for="(type, index) in inquiryTypes" :key="index" class="flex items-center">
              <input type="radio" :id="type" :value="type" v-model="form.inquiryType"
                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out"
                required />
              <label :for="type" class="text-sm">{{ type }}</label>
            </div>
          </div>
        </div>

        <!-- Message -->
        <div class="md:mb-10">
          <textarea v-model="form.message" rows="5" placeholder="お問い合わせ内容を入力してください。"
            class="w-full border border-gray-300 rounded-md px-3 py-2 
            focus:ring focus:ring-slate-400 focus:outline-none 
            transition duration-300 ease-in-out placeholder:text-sm"></textarea>
        </div>

        <!-- Submit button -->
        <div class="flex justify-center">
          <BlackButton type="submit">送信する</BlackButton>
        </div>
      </form>
    </div>
  </section>
</template>
