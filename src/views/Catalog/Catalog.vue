<template>
    <section class="pt-28">
        <div class="container mx-auto p-5">
            <h1 data-aos="fade-down" data-aos-duration="2000"
                class="text-[30px] text-[#3B3B98] font-bold border-b border-[#E2E8F0] mb-10">Catalogs</h1>
            <div class="flex gap-10">
                <Sidebar data-aos="fade-right" data-aos-duration="2000" class="w-[20%]" />
                <div class="w-full">
                    <img data-aos="fade-left" data-aos-duration="2000" class="w-full mb-10"
                        src="https://assets.asaxiy.uz/product/items/desktop/b4f8ecb2fa5cdb60ee2ff269aed3bf86202208281536023498550BJLtABC8.jpg.webp">

                    <img data-aos="fade-up" data-aos-duration="2000" class="w-full mb-10"
                        src="https://assets.asaxiy.uz/product/items/desktop/b4f8ecb2fa5cdb60ee2ff269aed3bf86202208281536023498550BJLtABC8.jpg.webp">

                    <img data-aos="fade-up" data-aos-duration="2000" class="w-full"
                        src="https://assets.asaxiy.uz/product/items/desktop/b4f8ecb2fa5cdb60ee2ff269aed3bf86202208281536023498550BJLtABC8.jpg.webp">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue';
import AOS from 'aos';

AOS.init();
</script>

<style lang="scss" scoped></style>