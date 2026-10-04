<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
  relatedLink?: string
}

const items: FaqItem[] = [
  {
    question: 'Can I enroll in multiple courses at once?',
    answer: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
    relatedLink: 'Enrollment Process for Different Courses',
  },
  {
    question: 'What kind of support can I expect from instructors?',
    answer: 'Instructors answer questions in the course forum and review your assignments with written feedback.',
  },
  {
    question: 'Are the courses self-paced or do they have specific start and end dates?',
    answer: 'Every course is self-paced. You keep lifetime access once enrolled and progress on your own schedule.',
  },
  {
    question: 'Are there any prerequisites for the courses?',
    answer: 'Most courses start from the basics. Any required background is listed on the course page before you enroll.',
  },
  {
    question: 'Can I download the course materials for offline access?',
    answer: 'Yes. Course materials can be downloaded and consulted offline at any time.',
  },
]

const openIndex = ref(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section class="flex flex-col gap-10 rounded-xl bg-white p-6 lg:flex-row lg:gap-20 lg:p-20 3xl:gap-50 3xl:p-25">
    <div class="flex flex-col items-start gap-8 lg:w-102 lg:shrink-0 lg:gap-10 3xl:gap-12.5">
      <div class="flex w-full flex-col gap-2 lg:gap-2 3xl:gap-2.5">
        <h2 class="text-3xl font-semibold leading-normal text-grey-15 lg:text-[38px] 3xl:text-[48px]">
          Frequently Asked Questions
        </h2>
        <p class="text-sm leading-normal text-grey-20 lg:text-[16px] 3xl:text-[18px]">
          Still you have any questions? Contact our Team via support@skillbridge.com
        </p>
      </div>
      <UiButton
        to="/contact"
        variant="secondary"
        size="lg"
      >
        See All FAQ&rsquo;s
      </UiButton>
    </div>

    <ul class="flex min-w-0 flex-1 flex-col gap-5 lg:gap-7.5">
      <li
        v-for="(item, index) in items"
        :key="item.question"
        class="rounded-xl border border-white-95 bg-white"
        :class="openIndex === index
          ? 'flex flex-col gap-6 p-5 lg:gap-10 lg:p-10 3xl:gap-12.5 3xl:p-12.5'
          : 'px-5 py-4 lg:px-10 lg:py-6 3xl:px-12.5 3xl:py-7.5'"
      >
        <h3
          class="flex items-center gap-6 lg:gap-10 3xl:gap-12.5"
          :class="openIndex === index ? 'border-b border-white-95 pb-4 lg:pb-6' : ''"
        >
          <button
            type="button"
            class="flex flex-1 items-center gap-6 text-left text-[18px] font-medium leading-normal text-grey-15 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 lg:gap-10 3xl:gap-12.5 3xl:text-[20px]"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggle(index)"
          >
            <span class="flex-1">{{ item.question }}</span>
            <span class="flex shrink-0 rounded-lg bg-orange-95 p-2.5 3xl:p-3">
              <NuxtImg
                :src="openIndex === index ? '/icons/faq-close-icon.svg' : '/icons/faq-open-icon.svg'"
                :alt="openIndex === index ? 'Collapse answer' : 'Expand answer'"
                width="28"
                height="28"
                class="size-6 3xl:size-7"
              />
            </span>
          </button>
        </h3>

        <div
          v-show="openIndex === index"
          :id="`faq-answer-${index}`"
          class="flex flex-col gap-6 lg:gap-10 3xl:gap-12.5"
        >
          <p class="text-sm leading-normal tracking-[-0.108px] text-grey-30 lg:text-[16px] 3xl:text-[18px]">
            {{ item.answer }}
          </p>

          <NuxtLink
            v-if="item.relatedLink"
            to="/courses"
            class="flex items-center gap-4 rounded-lg border border-white-95 bg-white-97 px-5 py-4 transition-colors hover:bg-white-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 lg:px-6 lg:py-3 3xl:px-7.5 3xl:py-4"
          >
            <span class="flex-1 text-[16px] font-medium leading-normal text-grey-20 3xl:text-[18px]">
              {{ item.relatedLink }}
            </span>
            <span class="flex shrink-0 rounded-full bg-white p-3 3xl:p-3.5">
              <NuxtImg
                src="/icons/faq-arrow-icon.svg"
                alt=""
                aria-hidden="true"
                width="28"
                height="28"
                class="size-6 3xl:size-7"
              />
            </span>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>
