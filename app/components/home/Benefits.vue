<script setup lang="ts">
interface Benefit {
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    title: 'Flexible Learning Schedule',
    description:
      'Fit your coursework around your existing commitments and obligations.',
  },
  {
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
  },
  {
    title: 'Diverse Course Offerings',
    description:
      'Explore a wide range of design and development courses covering various topics.',
  },
  {
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
  },
  {
    title: 'Practical Projects and Assignments',
    description:
      'Develop a portfolio showcasing your skills and abilities to potential employers.',
  },
  {
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
  },
]
</script>

<template>
  <section class="flex flex-col gap-10 lg:gap-15 3xl:gap-20">
    <div
      class="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-62.5 3xl:gap-75"
    >
      <div class="flex flex-1 flex-col gap-1 3xl:gap-1.5">
        <h2
          class="text-3xl leading-normal font-semibold text-grey-15 lg:text-[38px] 3xl:text-5xl"
        >
          Benefits
        </h2>
        <p class="text-sm leading-normal text-grey-35 lg:text-base 3xl:text-lg">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <UiButton to="/courses" variant="soft" size="lg" class="shrink-0">
        View All
      </UiButton>
    </div>

    <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(benefit, index) in benefits"
        :key="benefit.title"
        class="flex flex-col items-end gap-8 rounded-[10px] bg-white p-6 lg:gap-10 lg:p-10 3xl:gap-12.5 3xl:rounded-xl 3xl:p-12.5"
      >
        <p
          class="w-full text-right text-5xl leading-none font-bold text-grey-15 lg:text-6xl 3xl:text-[80px]"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </p>

        <div class="flex w-full flex-col gap-2.5 3xl:gap-3.5">
          <h3
            class="text-xl leading-normal font-semibold tracking-[-0.12px] text-grey-20 lg:text-xl 3xl:text-2xl 3xl:tracking-[-0.144px]"
          >
            {{ benefit.title }}
          </h3>
          <p
            class="text-sm leading-normal text-grey-30 lg:text-base 3xl:text-lg"
          >
            {{ benefit.description }}
          </p>
        </div>

        <span
          class="flex rounded-md border border-white-95 bg-white-99 p-3.5 3xl:rounded-lg 3xl:p-5"
          aria-hidden="true"
        >
          <NuxtImg
            src="/icons/arrow-up-right-icon.svg"
            alt=""
            width="34"
            height="34"
            class="size-6 lg:size-6.5 3xl:size-8.5"
          />
        </span>
      </li>
    </ul>
  </section>
</template>
