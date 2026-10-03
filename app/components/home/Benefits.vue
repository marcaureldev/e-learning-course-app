<script setup lang="ts">
interface Benefit {
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    title: 'Flexible Learning Schedule',
    description: 'Fit your coursework around your existing commitments and obligations.',
  },
  {
    title: 'Expert Instruction',
    description: 'Learn from industry experts who have hands-on experience in design and development.',
  },
  {
    title: 'Diverse Course Offerings',
    description: 'Explore a wide range of design and development courses covering various topics.',
  },
  {
    title: 'Updated Curriculum',
    description: 'Access courses with up-to-date content reflecting the latest trends and industry practices.',
  },
  {
    title: 'Practical Projects and Assignments',
    description: 'Develop a portfolio showcasing your skills and abilities to potential employers.',
  },
  {
    title: 'Interactive Learning Environment',
    description: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
  },
]
</script>

<template>
  <section class="flex flex-col gap-10 lg:gap-[80px]">
    <div class="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-20 2xl:gap-[300px]">
      <div class="flex flex-1 flex-col gap-[6px]">
        <h2 class="text-3xl font-semibold leading-[1.5] text-grey-15 lg:text-[48px]">
          Benefits
        </h2>
        <p class="text-sm leading-[1.5] text-grey-35 lg:text-[18px]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
          Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <UiButton
        to="/courses"
        variant="soft"
        size="lg"
        class="shrink-0"
      >
        View All
      </UiButton>
    </div>

    <ul class="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(benefit, index) in benefits"
        :key="benefit.title"
        class="flex flex-col items-end gap-8 rounded-xl bg-white p-6 lg:gap-[50px] lg:p-[50px]"
      >
        <p class="w-full text-right text-5xl font-bold leading-none text-grey-15 lg:text-[80px]">
          {{ String(index + 1).padStart(2, '0') }}
        </p>

        <div class="flex w-full flex-col gap-[14px]">
          <h3 class="text-xl font-semibold leading-[1.5] tracking-[-0.144px] text-grey-20 lg:text-[24px]">
            {{ benefit.title }}
          </h3>
          <p class="text-sm leading-[1.5] text-grey-30 lg:text-[18px]">
            {{ benefit.description }}
          </p>
        </div>

        <span
          class="flex rounded-lg border border-white-95 bg-white-99 p-4 lg:p-[20px]"
          aria-hidden="true"
        >
          <NuxtImg
            src="/icons/arrow-up-right-icon.svg"
            alt=""
            width="34"
            height="34"
            class="size-6 lg:size-[34px]"
          />
        </span>
      </li>
    </ul>
  </section>
</template>
