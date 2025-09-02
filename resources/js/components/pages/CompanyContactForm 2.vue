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
    '通訳・翻訳', 
    '特定技能',
    '登録⽀援',
    '教育・コンサルティング',
    'その他のお問い合わせ'
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
            <p class="font-semibold">⼈材をお探しの企業様</p>
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
                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">会社名 <span class="text-red-500">必須</span></label>
                    <input type="text" v-model="form.company" placeholder="例) ○○○株式会社" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                        focus:ring focus:ring-slate-400 focus:outline-none 
                        transition duration-300 ease-in-out placeholder:text-sm" required />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-10">
                    <div class="">
                        <label class="block text-sm font-medium mb-1">姓 <span class="text-red-500">必須</span></label>
                        <input type="text" v-model="form.lastName" placeholder="例) 山田" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                            focus:ring focus:ring-slate-400 focus:outline-none 
                            transition duration-300 ease-in-out placeholder:text-sm" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">名 <span class="text-red-500">必須</span></label>
                        <input type="text" v-model="form.firstName" placeholder="例) 勇気" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                            focus:ring focus:ring-slate-400 focus:outline-none 
                            transition duration-300 ease-in-out placeholder:text-sm" required />
                    </div>
                </div>
                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-2">役職 <span class="text-red-500">必須</span></label>
                    <div class="space-y-2">
                        <div class="flex items-center">
                            <input type="radio" id="manager" value="部長" v-model="form.position"
                                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out" />
                            <label for="manager" class="text-sm">部長</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="section" value="課長" v-model="form.position"
                                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out" />
                            <label for="section" class="text-sm">課⻑/マネージャー </label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="leader" value="マネージャー" v-model="form.position"
                                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out" />
                            <label for="leader" class="text-sm">主任/係⻑</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="staff" value="担当者" v-model="form.position"
                                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out" />
                            <label for="staff" class="text-sm">⼀般社員</label>
                        </div>
                    </div>
                </div>


                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">メールアドレス <span class="text-red-500">必須</span></label>
                    <input type="email" v-model="form.email" placeholder="例) example@horizongroup.co.jp" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                        focus:ring focus:ring-slate-400 focus:outline-none 
                        transition duration-300 ease-in-out placeholder:text-sm" required />
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">電話番号 <span class="text-red-500">必須</span></label>
                    <input type="tel" v-model="form.phone" placeholder="例) 050 533 5656" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                        focus:ring focus:ring-slate-400 focus:outline-none 
                        transition duration-300 ease-in-out placeholder:text-sm" required />
                </div>
                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">
                        郵便番号 <span class="text-red-500">必須</span>
                    </label>
                    <input type="text" v-model="form.postalCode" placeholder="例) 105-0014" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                        focus:ring focus:ring-slate-400 focus:outline-none 
                        transition duration-300 ease-in-out placeholder:text-sm" required />
                </div>


                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-1">会社所在地 <span class="text-red-500">必須</span></label>
                    <input type="text" v-model="form.address" placeholder="例) 東京都港区芝4丁目2-8" class="w-full border border-gray-300 rounded-sm px-3 py-2 
                        focus:ring focus:ring-slate-400 focus:outline-none 
                        transition duration-300 ease-in-out placeholder:text-sm" required />
                </div>

                <div class="md:mb-10">
                    <label class="block text-sm font-medium mb-2">お問い合わせ種類 <span class="text-red-500">必須</span></label>
                    <div class="space-y-2">
                        <div v-for="(type, index) in inquiryTypes" :key="index" class="flex items-center">
                            <input type="radio" :id="type" :value="type" v-model="form.inquiryType"
                                class="mr-2 focus:ring focus:ring-slate-400 transition duration-300 ease-in-out placeholder:text-sm"
                                required />
                            <label :for="type" class="text-sm">{{ type }}</label>
                        </div>
                    </div>
                </div>

                <div class="md:mb-10">
                    <textarea v-model="form.message" rows="5" placeholder="お問い合わせ内容を入力してください。" class="w-full border border-gray-300 rounded-md px-3 py-2 
                        focus:ring focus:ring-slate-400 focus:outline-none 
                        transition duration-300 ease-in-out placeholder:text-sm"></textarea>
                </div>

                <div class="flex justify-center">
                    <BlackButton type="submit">送信する</BlackButton>
                </div>
            </form>

        </div>
    </section>
</template>
