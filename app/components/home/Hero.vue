<template>
  <section class="flex flex-col items-center gap-8 text-center lg:gap-[60px]">
    <div class="flex w-full flex-col items-center gap-4 lg:gap-[20px]">
      <div class="relative inline-flex items-center justify-center gap-[10px] rounded-[11px] border border-white-95 bg-white-99 py-2.5 pl-3 pr-4 sm:py-[14px] sm:pl-[20px] sm:pr-[30px]">
        <div class="flex shrink-0 items-center justify-center rounded-md bg-orange-95 p-2 sm:p-[14px]">
          <NuxtImg
            src="/icons/fast-icon.svg"
            alt=""
            aria-hidden="true"
            width="27"
            height="30"
            class="h-6 w-auto sm:h-[34px]"
          />
        </div>
        <h1 class="text-xl font-semibold leading-[1.5] text-grey-10 sm:text-3xl lg:text-[48px]">
          <span class="text-orange-50">Unlock</span> Your Creative Potential
        </h1>
        <NuxtImg
          src="/icons/line-icon.svg"
          alt=""
          aria-hidden="true"
          width="39"
          height="43"
          class="absolute -left-4 -top-5 w-6 sm:-left-[25px] sm:-top-[31px] sm:w-[39px]"
        />
      </div>

      <div class="flex w-full flex-col items-center gap-2 text-grey-15 lg:gap-[10px]">
        <p class="text-lg font-medium leading-[1.5] sm:text-2xl lg:text-[38px]">
          with Online Design and Development Courses.
        </p>
        <p class="text-sm leading-[1.5] lg:text-[18px]">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
    </div>

    <div class="flex items-start gap-[12px]">
      <UiButton
        to="/courses"
        variant="primary"
        size="lg"
      >
        Explore Courses
      </UiButton>
      <UiButton
        to="/pricing"
        variant="secondary"
        size="lg"
      >
        View Pricing
      </UiButton>
    </div>
  </section>
</template>
