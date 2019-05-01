<template>
    <aside>
        <div>
            <ul class="mb-5">
                <li>
                    <button @click="toggleModal_1" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Category</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_1 ? '' : 'hidden'">
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Guestbook</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Manager's office</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Desktop </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Kitchen furniture</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">Armchair and sofa</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="mb-5">
                <li>
                    <button @click="toggleModal_2" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Brands</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_2 ? '' : 'hidden'">
                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5" checked="true">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Mebel</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5" checked="true">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Sofa</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Brand</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5" checked="true">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>

                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">See all </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="mb-5">
                <li>
                    <button @click="toggleModal_3" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Features</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_3 ? '' : 'hidden'">
                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5" checked="true">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex items-center gap-3">
                                <input type="checkbox" class="w-5 h-5">
                                <span href="#" class="flex items-center w-full py-2 text-[#1C1C1C]">Something</span>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">See all </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="mb-5">
                <li>
                    <button @click="toggleModal_4" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Price range</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_4 ? '' : 'hidden'">
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Guestbook</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Manager's office</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Desktop </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Kitchen furniture</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">See all </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="mb-5">
                <li>
                    <button @click="toggleModal_5" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Condition</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_5 ? '' : 'hidden'">
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Guestbook</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Manager's office</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Desktop </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Kitchen furniture</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">See all </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="mb-5">
                <li>
                    <button @click="toggleModal_6" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Ratings</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_6 ? '' : 'hidden'">
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Guestbook</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Manager's office</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Desktop </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Kitchen furniture</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">See all </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul class="">
                <li>
                    <button @click="toggleModal_7" type="button"
                        class="flex items-center w-full py-2 font-semibold border-t" aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example">
                        <span class="flex-1 text-left" sidebar-toggle-item>Manufacturer</span>
                        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="dropdown-example" :class="modal_7 ? '' : 'hidden'">
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Guestbook</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Manager's office</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Desktop </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#505050] hover:text-[#0D6EFD]">Kitchen furniture</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center w-full py-2 text-[#0D6EFD] hover:underline">See all </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>
  
<script setup>
import { ref } from "vue";

const modal_1 = ref(true);
const toggleModal_1 = () => (modal_1.value = !modal_1.value);

const modal_2 = ref(true);
const toggleModal_2 = () => (modal_2.value = !modal_2.value);

const modal_3 = ref(true);
const toggleModal_3 = () => (modal_3.value = !modal_3.value);

const modal_4 = ref(false);
const toggleModal_4 = () => (modal_4.value = !modal_4.value);

const modal_5 = ref(false);
const toggleModal_5 = () => (modal_5.value = !modal_5.value);

const modal_6 = ref(false);
const toggleModal_6 = () => (modal_6.value = !modal_6.value);

const modal_7 = ref(false);
const toggleModal_7 = () => (modal_7.value = !modal_7.value);
</script>
  
<style lang="scss" scoped></style>