<template>
    <section
        class="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-[url('https://comfort-mebel.uz/wp-content/uploads/2023/06/photo_2023-05-05_14-15-35-2.jpg')]">
        <div class="w-full min-h-screen bg-[rgba(139,136,136,0.4)] flex items-center justify-center pt-28">
            <div class="container mx-auto px-5">
                <div data-aos="zoom-in" data-aos-duration="2000" class="flex flex-col gap-10 items-center py-5 md:py-0">
                    <h1 class="text-[20px] md:text-[24px] text-[#3B3B98] font-bold px-3 bg-white">Hello, welcome to our
                        site!</h1>
                    <h2 class="text-center text-white md:text-[20px] text-[12px] bg-[#A7C5BD] p-5">
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Sit veritatis cum ab quis ipsum consectetur
                        libero distinctio ipsa doloribus corporis. Necessitatibus quidem nemo atque natus numquam ex harum
                        quaerat amet!
                        Nesciunt veritatis asperiores iure optio perferendis. Esse neque vero incidunt tempore dignissimos
                        debitis sunt, iste sint mollitia explicabo praesentium rerum quidem eaque exercitationem, saepe
                        dolores voluptates libero. Nisi, totam earum!
                        Accusamus molestias nihil praesentium in obcaecati provident, labore quae eum quibusdam, unde est
                        ipsa similique distinctio, laboriosam nostrum nam ratione rerum voluptatibus error? Minus illum
                        sequi veritatis? Dicta, provident blanditiis.
                        Porro sint placeat explicabo, soluta amet voluptate. Ratione placeat, asperiores vel at, aliquid
                        ipsam pariatur ea sint illo harum doloribus dolores omnis distinctio delectus libero corrupti ut ad
                        quo animi.
                        Deleniti adipisci tempore tempora repellat architecto explicabo, eos blanditiis possimus
                        necessitatibus in, hic ad, totam ex repudiandae ipsam. Accusamus, odio! Saepe id corrupti harum
                        mollitia eos, optio voluptate doloremque eum.
                    </h2>
                    <button
                        class="btnAll w-[150px] bg-[#3B3B98] py-3 text-center text-white rounded-lg font-bold hover:bg-white hover:text-[#3B3B98] hover:w-[200px] focus:ring-2 focus:ring-[#3B3B98]">See
                        All</button>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-5">
        <div class="container mx-auto p-5">
            <div class="hidden lg:block w-[100%]">
                <div class="flex justify-between items-center mb-5">
                    <h1 class="text-[24px] text-[#3B3B98] font-semibold">Wicker Furniture</h1>
                    <a href="#" class="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700">Learn more >></a>
                </div>
                <div class="w-[100%] flex flex-wrap gap-[1.5%]">
                    <div data-aos="fade-right" data-aos-duration="2000" v-for="item in recItemsLink" :key="item.id"
                        class="border w-[18.8%] p-5 rounded-lg flex flex-col items-center mb-5 bg-white cursor-pointer">
                        <img :src="item.img" alt="" class="w-full h-[170.67px] rounded-lg mb-[20px]" />
                        <div class="">
                            <h2 class="font-medium mb-[5px]">{{ item.price }}</h2>
                            <p class="text-[#8B96A5] font-normal w-full">{{ item.info }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:hidden container mx-auto px-5">
                <div class="flex justify-between items-center mb-5">
                    <h1 class="text-[24px] text-[#3B3B98] font-semibold">Wicker Furniture</h1>
                    <a href="#" class="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700">Learn more >></a>
                </div>
                <div class="w-[100%] flex flex-wrap gap-[2%]">
                    <div v-for="item in recItemsLink" :key="item.id"
                        class="border w-[49%] sm:w-[32%] p-5 rounded-lg flex flex-col items-center mb-2 sm:mb-3.5 bg-white cursor-pointer gap-5">
                        <img :src="item.img" alt="" class="w-wull h-[122.22px] rounded-lg" />
                        <div class="">
                            <h2 class="font-medium text-[16px] mb-1">{{ item.price }}</h2>
                            <p class="text-[#8B96A5] text-[13px] font-normal w-full">{{ item.info }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section
        class="mt-5 bg-no-repeat bg-cover bg-center bg-[url('https://perla.az/imageg_383_200_katalog_250_1.jpg_katalog_9.jpg')]">
        <div class="container mx-auto p-5">
            <div class="hidden lg:flex rounded-lg w-[100%] p-10 justify-between mb-5">
                <div data-aos="fade-right" data-aos-duration="2000">
                    <h3 class="text-[32px] text-white font-bold mb-5">
                        An easy way to send <br />
                        requests to all suppliers
                    </h3>
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                        elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" class="bg-white rounded-lg w-[500px] p-5">
                    <h3 class="text-[20px] font-normal mb-5">Send quote to suppliers</h3>
                    <input type="text" placeholder="What item you need?"
                        class="outline-none border rounded-lg w-full p-2 mb-3 placeholder-black" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type more details"
                        class="outline-none border p-2 rounded-lg w-full h-[73px] mb-2"></textarea>
                    <div class="relative flex items-center mb-5 gap-3">
                        <input type="text" placeholder="Quantity"
                            class="outline-none border rounded-lg p-2 placeholder-black" />
                        <button @click="toggleModal" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center justify-between w-[100px] rounded border p-2">
                            Pcs
                            <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownNavbar" :class="modal
                            ? 'z-50 absolute font-normal bg-white rounded right-20 top-12 w-[100px]'
                            : 'hidden'
                            ">
                            <ul class="py-2 text-sm text-gray-900" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" class="block px-4 py-2">Nimadur</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2">Nimadur</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2">Nimadur</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        class="bg-[#3B3B98] text-white rounded-lg border border-[#3B3B98] px-4 py-2 hover:bg-white hover:text-[#3B3B98]">
                        Send inquiry
                    </button>
                </div>
            </div>
        </div>


        <div class="lg:hidden bg-no-repet bg-cover bg-center bg-[url('/store/img/img/Group982.png')] mb-5">
            <div class="container mx-auto px-5 pt-10">
                <h2 class="text-white font-semibold text-[18px] mb-8">An easy way to send <br> requests to all suppliers
                </h2>
                <button class="bg-[rgba(18,127,255,1)] px-5 py-2 text-[13px] font-medium text-white rounded-lg mb-10">Send
                    inquiry</button>
            </div>
        </div>
    </section>

    <section class="mt-5">
        <div class="container mx-auto p-5">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-[24px] text-[#3B3B98] font-semibold">New Furniture</h2>
                <div class="flex justify-between items-center gap-5">
                    <button
                        class="text-[#3B3B98] text-2xl bg border border-[#3B3B98] rounded-full p-2 flex hover:bg-[#3B3B98] hover:text-white focus:ring-2 focus:ring-blue-500">
                        <i class='bx bx-left-arrow-alt'></i>
                    </button>
                    <button
                        class="text-[#3B3B98] text-2xl bg border border-[#3B3B98] rounded-full p-2 flex hover:bg-[#3B3B98] hover:text-white focus:ring-2 focus:ring-blue-500">
                        <i class='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-5">
                <div data-aos="fade-up" data-aos-duration="2000" v-for="news in newItemsLink" :key="news.id"
                    class="w-full lg:w-[25%] border rounded-lg p-5">
                    <div class="flex items-center justify-center bg-white rounded-lg mb-5 ">
                        <img :src="news.img" alt="" class="w-[500px] h-[250px] rounded-lg">
                    </div>
                    <div>
                        <h3 class="text-[18px] font-semibold mb-3">{{ news.price }}</h3>
                        <p class="text-[#606060] font-normal w-[215.8px] mb-4">{{ news.info }}</p>
                        <div class="flex justify-end items-center gap-5">
                            <button
                                class="text-red-500 text-[24px] flex items-center gap-3 border py-2 px-10 rounded-lg hover:border-red-500"><i
                                    class='bx bx-cart'></i></button>
                            <button
                                class="text-[#3B3B98] flex items-center gap-3 border py-2 px-10 rounded-lg hover:border-[#3B3B98]">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-5">
        <div class="container mx-auto p-5">
            <div class="flex justify-between items-center mb-5">
                <h2 class="text-[24px] text-[#3B3B98] font-semibold">We Recommend</h2>
                <div class="flex justify-between items-center gap-5">
                    <button
                        class="text-[#3B3B98] text-2xl bg border border-[#3B3B98] rounded-full p-2 flex hover:bg-[#3B3B98] hover:text-white focus:ring-2 focus:ring-blue-500">
                        <i class='bx bx-left-arrow-alt'></i>
                    </button>
                    <button
                        class="text-[#3B3B98] text-2xl bg border border-[#3B3B98] rounded-full p-2 flex hover:bg-[#3B3B98] hover:text-white focus:ring-2 focus:ring-blue-500">
                        <i class='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-5">
                <div data-aos="fade-up" data-aos-duration="2000" v-for="news in newItemsLink" :key="news.id"
                    class="w-full lg:w-[25%] border rounded-lg p-5">
                    <div class="flex items-center justify-center bg-white rounded-lg mb-5 ">
                        <img :src="news.img" alt="" class="w-[500px] h-[250px] rounded-lg">
                    </div>
                    <div>
                        <h3 class="text-[18px] font-semibold mb-3">{{ news.price }}</h3>
                        <p class="text-[#606060] font-normal w-[215.8px] mb-4">{{ news.info }}</p>
                        <div class="flex justify-end items-center gap-5">
                            <button
                                class="text-red-500 text-[24px] flex items-center gap-3 border py-2 px-10 rounded-lg hover:border-red-500"><i
                                    class='bx bx-cart'></i></button>
                            <button
                                class="text-[#3B3B98] flex items-center gap-3 border py-2 px-10 rounded-lg hover:border-[#3B3B98]">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-5">
        <div class="container mx-auto p-5">
            <div class="flex justify-between items-center mb-5">
                <h1 class="text-[24px] text-[#3B3B98] font-semibold">Catalog</h1>
                <a href="/catalog" class="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700">View catalog
                    >></a>
            </div>
            <div>


                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="grid gap-4">
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://avatars.mds.yandex.net/get-altay/5477999/2a0000017d531816b37ec996a8f8891659d7/L_height"
                                alt="">
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://frankfurt.apollo.olxcdn.com/v1/files/v04v94q0raps1-UZ/image;s=1080x665" alt="">
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://stat.uz/images/mebel_ichi_150222.jpg" alt="">
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div data-aos="fade-down" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/1060d72129dd9da1202bf398eb5ce0fa.jpg"
                                alt="">
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://comodita.uz/wp-content/uploads/2019/08/model610-zal-600x600.jpg" alt="">
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://images.uzum.uz/clm33dt6sfhsc0un1pj0/original.jpg" alt="">
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div data-aos="fade-down" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://yourhome.sk/images_upd/products/7/31kcghza79ei.jpg" alt="">
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniFi0BDPzDidXkSmKS_6JUzTDiBoM6XZ5Mg&usqp=CAU"
                                alt="">
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://www.tendersleep.co.uk/wp-content/uploads/2020/04/Double-Divan-Bed-With-Mattress.jpg"
                                alt="">
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="data:image/jpeg;base64,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"
                                alt="">
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://frankfurt.apollo.olxcdn.com/v1/files/40900x6kndh52-UZ/image;s=1033x814" alt="">
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <img class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src="https://www.mrdoors.ru/upload/resize_cache/webp/iblock/0a4/oekdb82m4yx9gryewpwrikp0mnzc3nyf/920kh500.webp"
                                alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { recItemsLinks } from "../../store/info/rec-items"
import { newItemsLinks } from "../../store/info/new-items"
import AOS from 'aos';

AOS.init();
const recItemsLink = ref(recItemsLinks);
const newItemsLink = ref(newItemsLinks);
const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);
</script>

<style lang="scss" scoped></style>