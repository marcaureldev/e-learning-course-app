<script setup lang="ts">
interface Testimonial {
  quote: string
  author: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!',
    author: 'Sarah L',
    avatar: '/images/testimonials/sarah-l.png',
  },
  {
    quote:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    author: 'Jason M',
    avatar: '/images/testimonials/jason-m.png',
  },
  {
    quote:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    author: 'Emily R',
    avatar: '/images/testimonials/emily-r.png',
  },
  {
    quote:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    author: 'Michael K',
    avatar: '/images/testimonials/michael-k.png',
  },
]
</script>

<template>
  <section class="flex flex-col gap-10 lg:gap-15 3xl:gap-20">
    <div class="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-62.5 3xl:gap-75">
      <div class="flex flex-1 flex-col gap-1 3xl:gap-1.5">
        <h2 class="text-3xl leading-normal font-semibold text-grey-15 lg:text-[38px] 3xl:text-5xl">
          Our Testimonials
        </h2>
        <p class="text-sm leading-normal text-grey-35 lg:text-base 3xl:text-lg">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
          Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
          senectus in.
        </p>
      </div>
      <UiButton to="/about" variant="soft" size="lg" class="shrink-0"> View All </UiButton>
    </div>

    <ul class="grid gap-5 lg:grid-cols-2 3xl:gap-7.5">
      <li
        v-for="testimonial in testimonials"
        :key="testimonial.author"
        class="flex flex-col overflow-hidden rounded-[10px] border border-white-95 bg-white 3xl:rounded-xl"
      >
        <blockquote
          class="flex-1 p-6 text-sm leading-normal text-grey-30 lg:p-10 lg:text-base 3xl:p-12.5 3xl:text-lg"
        >
          {{ testimonial.quote }}
        </blockquote>

        <div
          class="flex flex-wrap items-center gap-4 border-t border-white-95 bg-white-99 px-6 py-5 lg:px-10 lg:py-6 3xl:px-12.5 3xl:py-7.5"
        >
          <div class="flex min-w-0 flex-1 items-center gap-2.5 3xl:gap-3.75">
            <NuxtImg
              :src="testimonial.avatar"
              alt=""
              aria-hidden="true"
              width="120"
              height="120"
              fit="cover"
              format="webp"
              quality="80"
              class="size-12.5 shrink-0 rounded-md object-cover 3xl:size-15 3xl:rounded-lg"
            />
            <p class="min-w-0 truncate text-base font-semibold text-grey-20 3xl:text-lg">
              {{ testimonial.author }}
            </p>
          </div>
          <UiButton to="/about" variant="card" size="lg" class="shrink-0">
            Read Full Story
          </UiButton>
        </div>
      </li>
    </ul>
  </section>
</template>
