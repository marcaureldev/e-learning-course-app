<template>
  <section class="flex flex-col items-center gap-12.5 text-center 3xl:gap-15">
    <div class="flex w-full flex-col items-center gap-4 3xl:gap-5">
      <div
        class="relative flex w-full flex-wrap items-center justify-center gap-2.5 rounded-lg border border-white-95 bg-white-99 p-3.5 lg:w-auto lg:flex-nowrap lg:py-3 lg:pr-6 lg:pl-3 3xl:rounded-[11px] 3xl:py-3.5 3xl:pr-7.5 3xl:pl-5"
      >
        <div
          class="flex shrink-0 items-center justify-center rounded-md bg-orange-95 p-3 3xl:p-3.5"
        >
          <NuxtImg
            src="/icons/fast-icon.svg"
            alt=""
            aria-hidden="true"
            width="27"
            height="30"
            class="h-6 w-auto 3xl:h-8.5"
          />
        </div>
        <h1
          class="min-w-0 flex-1 text-left text-base leading-normal font-semibold text-grey-10 lg:flex-none lg:text-center lg:text-4xl 3xl:text-5xl"
        >
          <span class="text-orange-50">Unlock</span> Your Creative Potential
        </h1>
        <NuxtImg
          src="/icons/line-icon.svg"
          alt=""
          aria-hidden="true"
          width="39"
          height="43"
          class="absolute -top-5.25 -left-2.75 w-6 lg:-top-7.75 lg:-left-6.25 lg:w-9.75"
        />
      </div>

      <div
        class="flex w-full flex-col items-center gap-1.5 px-7.5 text-grey-15 lg:px-0 3xl:gap-2.5"
      >
        <p class="text-2xl leading-normal font-medium lg:text-[28px] 3xl:text-[38px]">
          with Online Design and Development Courses.
        </p>
        <p class="text-sm leading-normal lg:text-base 3xl:text-lg">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <UiButton to="/courses" variant="primary" size="lg"> Explore Courses </UiButton>
      <UiButton to="/pricing" variant="secondary" size="lg"> View Pricing </UiButton>
    </div>
  </section>
</template>
