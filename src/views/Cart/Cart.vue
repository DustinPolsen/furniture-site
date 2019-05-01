<template>
    <section>
        <div class="container mx-auto p-5">
            <div class="pt-28">
                <h1 data-aos="fade-down" data-aos-duration="2000"
                    class="text-[30px] text-[#3B3B98] font-bold border-b border-[#E2E8F0] mb-10">My Cart (10)</h1>
                <div class="flex justify-center flex-col flex-wrap lg:flex-row gap-5">
                    <div data-aos="fade-up" data-aos-duration="2000" v-for="news in recItemsLink" :key="news.id"
                        class="w-full lg:w-[23.9%] border rounded-lg p-5 cursor-pointer">
                        <div class="flex items-center justify-center bg-white rounded-lg mb-5 ">
                            <img :src="news.img" alt="" class="w-[500px] h-[250px] rounded-lg">
                        </div>
                        <div>
                            <h3 class="text-[18px] font-semibold mb-3">{{ news.price }}</h3>
                            <p class="text-[#606060] font-normal w-[215.8px] mb-4">{{ news.info }}</p>
                            <div class="flex justify-end items-center gap-5">
                                <button
                                    class="text-red-500 flex items-center gap-3 border py-2 px-10 rounded-lg hover:border-red-500">Remove </button>
                                <button
                                    class="text-[#3B3B98] flex items-center gap-3 border py-2 px-10 rounded-lg hover:border-[#3B3B98]">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import { recItemsLinks } from "../../store/info/rec-items"
import { ref } from "vue";

const recItemsLink = ref(recItemsLinks);

AOS.init();
</script>

<style lang="scss" scoped></style>