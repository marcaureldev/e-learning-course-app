<script setup lang="ts">
interface Course {
  title: string
  description: string
  author: string
  duration: string
  level: string
  image: string
  imageWidth: number
  imageHeight: number
}

const courses: Course[] = [
  {
    title: 'Web Design Fundamentals',
    description:
      'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    author: 'John Smith',
    duration: '4 Weeks',
    level: 'Beginner',
    image: '/images/courses/web-design-fundamentals.png',
    imageWidth: 360,
    imageHeight: 540,
  },
  {
    title: 'UI/UX Design',
    description:
      'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    author: 'Emily Johnson',
    duration: '6 Weeks',
    level: 'Intermediate',
    image: '/images/courses/ui-ux-design.png',
    imageWidth: 1060,
    imageHeight: 706,
  },
  {
    title: 'Mobile App Development',
    description:
      'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    author: 'David Brown',
    duration: '8 Weeks',
    level: 'Intermediate',
    image: '/images/courses/mobile-app-development.png',
    imageWidth: 360,
    imageHeight: 539,
  },
  {
    title: 'Graphic Design for Beginners',
    description:
      'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    author: 'Sarah Thompson',
    duration: '10 Weeks',
    level: 'Beginner',
    image: '/images/courses/graphic-design-for-beginners.png',
    imageWidth: 1060,
    imageHeight: 706,
  },
  {
    title: 'Front-End Web Development',
    description:
      'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    author: 'Michael Adams',
    duration: '10 Weeks',
    level: 'Intermediate',
    image: '/images/courses/front-end-web-development.png',
    imageWidth: 1060,
    imageHeight: 706,
  },
  {
    title: 'Advanced JavaScript',
    description:
      'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
    author: 'Jennifer Wilson',
    duration: '6 Weeks',
    level: 'Advance',
    image: '/images/courses/advanced-javascript.png',
    imageWidth: 1060,
    imageHeight: 706,
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
          Our Courses
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

    <ul class="grid gap-5 lg:grid-cols-2 3xl:gap-7.5">
      <li
        v-for="course in courses"
        :key="course.title"
        class="flex flex-col justify-between gap-6 rounded-[10px] border border-white-95 bg-white p-6 lg:p-10 3xl:gap-7.5 3xl:rounded-xl 3xl:p-12.5"
      >
        <div class="flex flex-col gap-6 3xl:gap-7.5">
          <div
            class="relative h-50 w-full overflow-hidden rounded-lg lg:h-66.5 3xl:h-95"
          >
            <NuxtImg
              :src="course.image"
              :alt="`Illustration for ${course.title}`"
              :width="course.imageWidth"
              :height="course.imageHeight"
              format="webp"
              quality="80"
              class="absolute inset-0 size-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-6 3xl:gap-7.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex gap-2.5">
                <span
                  v-for="tag in [course.duration, course.level]"
                  :key="tag"
                  class="rounded-md border border-white-95 bg-white px-3.5 py-2 text-sm text-grey-30 3xl:rounded-lg 3xl:px-4 3xl:py-2.5 3xl:text-lg"
                >
                  {{ tag }}
                </span>
              </div>
              <p
                class="text-base font-medium whitespace-nowrap text-grey-15 3xl:text-xl"
              >
                By {{ course.author }}
              </p>
            </div>

            <div class="flex flex-col gap-2.5 3xl:gap-3.5">
              <h3
                class="text-xl leading-normal font-semibold text-grey-15 3xl:text-2xl"
              >
                {{ course.title }}
              </h3>
              <p
                class="text-sm leading-normal text-grey-30 lg:text-base 3xl:text-lg"
              >
                {{ course.description }}
              </p>
            </div>
          </div>
        </div>

        <UiButton to="/courses" variant="card" size="lg" class="w-full">
          Get it Now
        </UiButton>
      </li>
    </ul>
  </section>
</template>
