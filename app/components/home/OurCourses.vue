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
    description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    author: 'John Smith',
    duration: '4 Weeks',
    level: 'Beginner',
    image: '/images/courses/web-design-fundamentals.png',
    imageWidth: 360,
    imageHeight: 540,
  },
  {
    title: 'UI/UX Design',
    description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    author: 'Emily Johnson',
    duration: '6 Weeks',
    level: 'Intermediate',
    image: '/images/courses/ui-ux-design.png',
    imageWidth: 1060,
    imageHeight: 706,
  },
  {
    title: 'Mobile App Development',
    description: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    author: 'David Brown',
    duration: '8 Weeks',
    level: 'Intermediate',
    image: '/images/courses/mobile-app-development.png',
    imageWidth: 360,
    imageHeight: 539,
  },
  {
    title: 'Graphic Design for Beginners',
    description: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    author: 'Sarah Thompson',
    duration: '10 Weeks',
    level: 'Beginner',
    image: '/images/courses/graphic-design-for-beginners.png',
    imageWidth: 1060,
    imageHeight: 706,
  },
  {
    title: 'Front-End Web Development',
    description: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    author: 'Michael Adams',
    duration: '10 Weeks',
    level: 'Intermediate',
    image: '/images/courses/front-end-web-development.png',
    imageWidth: 1060,
    imageHeight: 706,
  },
  {
    title: 'Advanced JavaScript',
    description: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
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
  <section class="flex flex-col gap-10 lg:gap-[60px] 3xl:gap-[80px]">
    <div class="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-[250px] 3xl:gap-[300px]">
      <div class="flex flex-1 flex-col gap-[4px] 3xl:gap-[6px]">
        <h2 class="text-3xl font-semibold leading-[1.5] text-grey-15 lg:text-[38px] 3xl:text-[48px]">
          Our Courses
        </h2>
        <p class="text-sm leading-[1.5] text-grey-35 lg:text-[16px] 3xl:text-[18px]">
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

    <ul class="grid gap-[20px] lg:grid-cols-2 3xl:gap-[30px]">
      <li
        v-for="course in courses"
        :key="course.title"
        class="flex flex-col justify-between gap-[24px] rounded-[10px] border border-white-95 bg-white p-6 lg:p-[40px] 3xl:gap-[30px] 3xl:rounded-xl 3xl:p-[50px]"
      >
        <div class="flex flex-col gap-[24px] 3xl:gap-[30px]">
          <div class="relative h-[200px] w-full overflow-hidden rounded-lg lg:h-[266px] 3xl:h-[380px]">
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

          <div class="flex flex-col gap-[24px] 3xl:gap-[30px]">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex gap-[10px]">
                <span
                  v-for="tag in [course.duration, course.level]"
                  :key="tag"
                  class="rounded-md border border-white-95 bg-white px-[14px] py-[8px] text-sm text-grey-30 3xl:rounded-lg 3xl:px-[16px] 3xl:py-[10px] 3xl:text-[18px]"
                >
                  {{ tag }}
                </span>
              </div>
              <p class="whitespace-nowrap text-[16px] font-medium text-grey-15 3xl:text-[20px]">
                By {{ course.author }}
              </p>
            </div>

            <div class="flex flex-col gap-[10px] 3xl:gap-[14px]">
              <h3 class="text-xl font-semibold leading-[1.5] text-grey-15 3xl:text-[24px]">
                {{ course.title }}
              </h3>
              <p class="text-sm leading-[1.5] text-grey-30 lg:text-[16px] 3xl:text-[18px]">
                {{ course.description }}
              </p>
            </div>
          </div>
        </div>

        <UiButton
          to="/courses"
          variant="card"
          size="lg"
          class="w-full"
        >
          Get it Now
        </UiButton>
      </li>
    </ul>
  </section>
</template>
