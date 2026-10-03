<template>
  <section
    class="relative flex aspect-[358/247] items-center justify-center overflow-hidden rounded-xl border-4 border-white-97 lg:aspect-[1596/790] lg:border-[16px]"
  >
    <NuxtImg
      src="/images/learning-together.png"
      alt="Two students reviewing course material together"
      width="1060"
      height="706"
      format="webp"
      quality="80"
      class="absolute inset-0 size-full object-cover"
    />
    <div class="absolute inset-0 bg-black/20" />
    <button
      type="button"
      class="relative rounded-full border-4 border-white/30 bg-white/20 p-2.5 transition-colors hover:bg-white/30 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white lg:border-[6px] lg:p-[14px]"
      aria-label="Play the introduction video"
    >
      <NuxtImg
        src="/icons/play-icon.svg"
        alt=""
        aria-hidden="true"
        width="44"
        height="44"
        class="size-7 lg:size-[44px]"
      />
    </button>
  </section>
</template>
