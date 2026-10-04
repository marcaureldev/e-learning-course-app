<template>
  <section class="flex flex-col items-center gap-[50px] text-center 3xl:gap-[60px]">
    <div class="flex w-full flex-col items-center gap-4 3xl:gap-[20px]">
      <div class="relative flex w-full flex-wrap items-center justify-center gap-[10px] rounded-lg border border-white-95 bg-white-99 p-[14px] lg:w-auto lg:flex-nowrap lg:py-[12px] lg:pl-[12px] lg:pr-[24px] 3xl:rounded-[11px] 3xl:py-[14px] 3xl:pl-[20px] 3xl:pr-[30px]">
        <div class="flex shrink-0 items-center justify-center rounded-md bg-orange-95 p-[12px] 3xl:p-[14px]">
          <NuxtImg
            src="/icons/fast-icon.svg"
            alt=""
            aria-hidden="true"
            width="27"
            height="30"
            class="h-6 w-auto 3xl:h-[34px]"
          />
        </div>
        <h1 class="min-w-0 flex-1 text-left text-base font-semibold leading-[1.5] text-grey-10 lg:flex-none lg:text-center lg:text-[36px] 3xl:text-[48px]">
          <span class="text-orange-50">Unlock</span> Your Creative Potential
        </h1>
        <NuxtImg
          src="/icons/line-icon.svg"
          alt=""
          aria-hidden="true"
          width="39"
          height="43"
          class="absolute -left-[11px] -top-[21px] w-6 lg:-left-[25px] lg:-top-[31px] lg:w-[39px]"
        />
      </div>

      <div class="flex w-full flex-col items-center gap-[6px] px-[30px] text-grey-15 lg:px-0 3xl:gap-[10px]">
        <p class="text-2xl font-medium leading-[1.5] lg:text-[28px] 3xl:text-[38px]">
          with Online Design and Development Courses.
        </p>
        <p class="text-sm leading-[1.5] lg:text-[16px] 3xl:text-[18px]">
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
