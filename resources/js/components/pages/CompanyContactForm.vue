<script setup>
import { reactive } from 'vue'
import Breadcrumbs from '../ui/breadcrumbs/Breadcrumbs.vue';
import BlackButton from '../ui/button/BlackButton.vue';

const form = reactive({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    position: '',
    company: '',
    address: '',
    inquiryType: '',
    message: ''
});

const inquiryTypes = [
    '人材紹介',
    '留学生支援',
    '人材派遣',
    '特定技能',
    '通訳・翻訳サービス',
    'コンサルティングその他のお問い合わせ'
];

const handleSubmit = () => {
    console.log("Form submitted:", form)
    alert("送信が完了しました。")
}

const breadcrumbsItems = [
    { label: 'ホーム', to: '/' },
    { label: '企業方へお問い合わせ', to: '/contact_company' }
];
</script>

<template>
    <section class="w-full mt-48">
        <div class="md:w-[75%] mx-auto px-7 lg:px-0 pb-9 page_title">
            <h1 class="font-semibold">CONTACT</h1>
            <p class="font-semibold">企業方へお問い合わせ</p>
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
                <h3 class="text-xl font-bold">企業方へ</h3>
                <p class="text-gray-600 text-sm">MAIL FORM メールでのお問い合わせ</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-10">
                    <div class="">
                        <label class="block text-sm font-medium mb-1">姓 <span class="text-red-500">必須</span></label>
                        <input type="text" v-model="form.lastName" placeholder="例) 山田"
                            class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                            required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">名 <span class="text-red-500">必須</span></label>
                        <input type="text" v-model="form.firstName" placeholder="例) 勇気"
                            class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                            required />
                    </div>
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">メールアドレス <span class="text-red-500">必須</span></label>
                    <input type="email" v-model="form.email" placeholder="例) example@horizongroup.co.jp"
                        class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                        required />
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">電話番号 <span class="text-red-500">必須</span></label>
                    <input type="tel" v-model="form.phone" placeholder="例) 050 533 5656"
                        class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                        required />
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">役職 <span class="text-gray-400">(任意)</span></label>
                    <select v-model="form.position"
                        class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out">
                        <option value="">選択してください</option>
                        <option>部長</option>
                        <option>課長</option>
                        <option>マネージャー</option>
                        <option>担当者</option>
                    </select>
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">会社名 <span class="text-red-500">必須</span></label>
                    <input type="text" v-model="form.company" placeholder="例) ○○○株式会社"
                        class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                        required />
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">会社所在地 <span class="text-red-500">必須</span></label>
                    <input type="text" v-model="form.address" placeholder="例) 東京都港区芝4丁目2-8"
                        class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                        required />
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-2">お問い合わせ種類 <span class="text-red-500">必須</span></label>
                    <div class="space-y-2">
                        <div v-for="(type, index) in inquiryTypes" :key="index" class="flex items-center">
                            <input type="radio" :id="type" :value="type" v-model="form.inquiryType"
                                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out"
                                required />
                            <label :for="type" class="text-sm">{{ type }}</label>
                        </div>
                    </div>
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">お問い合わせ内容 <span class="text-red-500">必須</span></label>
                    <textarea v-model="form.message" rows="5" placeholder="お問い合わせ内容を入力してください。"
                        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-slate-400 focus:outline-none transition duration-300 ease-in-out"
                        required></textarea>
                </div>

                <div class="flex justify-center">
                    <BlackButton type="submit">送信する</BlackButton>
                </div>
            </form>

        </div>
    </section>
</template>
