<script setup lang="ts">
interface Feature {
  label: string
  included: boolean
}

interface Plan {
  name: string
  monthlyPrice: number
  features: Feature[]
}

type Billing = 'monthly' | 'yearly'

// La maquette ne chiffre que le tarif mensuel. L'annuel applique ici la
// convention courante des deux mois offerts — à remplacer par la vraie grille.
const YEARLY_MONTHS_BILLED = 10

const plans: Plan[] = [
  {
    name: 'Free Plan',
    monthlyPrice: 0,
    features: [
      { label: 'Access to selected free courses.', included: true },
      { label: 'Limited course materials and resources.', included: true },
      { label: 'Basic community support.', included: true },
      { label: 'No certification upon completion.', included: true },
      { label: 'Ad-supported platform.', included: true },
      { label: 'Access to exclusive Pro Plan community forums.', included: false },
      { label: 'Early access to new courses and updates.', included: false },
    ],
  },
  {
    name: 'Pro Plan',
    monthlyPrice: 79,
    features: [
      { label: 'Unlimited access to all courses.', included: true },
      { label: 'Unlimited course materials and resources.', included: true },
      { label: 'Priority support from instructors.', included: true },
      { label: 'Course completion certificates.', included: true },
      { label: 'Ad-free experience.', included: true },
      { label: 'Access to exclusive Pro Plan community forums.', included: true },
      { label: 'Early access to new courses and updates.', included: true },
    ],
  },
]

const billing = ref<Billing>('monthly')

const priceFor = (plan: Plan) =>
  billing.value === 'monthly' ? plan.monthlyPrice : plan.monthlyPrice * YEARLY_MONTHS_BILLED

const period = computed(() => (billing.value === 'monthly' ? '/month' : '/year'))
</script>

<template>
  <section class="flex flex-col gap-10 lg:gap-15 3xl:gap-20">
    <div class="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-62.5 3xl:gap-75">
      <div class="flex flex-1 flex-col gap-1 3xl:gap-1.5">
        <h2 class="text-3xl font-semibold leading-normal text-grey-15 lg:text-[38px] 3xl:text-[48px]">
          Our Pricing
        </h2>
        <p class="text-sm leading-normal text-grey-35 lg:text-[16px] 3xl:text-[18px]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
          Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>

      <div
        class="flex shrink-0 items-center rounded-lg bg-white p-3"
        role="group"
        aria-label="Billing period"
      >
        <button
          v-for="option in (['monthly', 'yearly'] as Billing[])"
          :key="option"
          type="button"
          class="rounded-md px-6 py-3 text-sm font-medium capitalize transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 3xl:px-7.5 3xl:py-3.5 3xl:text-[18px]"
          :class="billing === option ? 'bg-orange-50 text-white' : 'text-grey-30 hover:text-grey-15'"
          :aria-pressed="billing === option"
          @click="billing = option"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-5 rounded-xl bg-white p-6 lg:flex-row lg:p-12.5 3xl:gap-7.5 3xl:p-20">
      <article
        v-for="plan in plans"
        :key="plan.name"
        class="flex flex-1 flex-col items-center gap-8 rounded-xl border border-white-95 bg-white-99 px-4 pb-5 pt-8 lg:gap-12.5 lg:px-6 lg:pb-6 lg:pt-10 3xl:px-7.5 3xl:pb-7.5 3xl:pt-12.5"
      >
        <h3 class="flex w-full items-center justify-center rounded border border-orange-90 bg-orange-97 px-5.5 py-2.5 text-[18px] font-medium leading-normal text-grey-15 3xl:rounded-md 3xl:py-3 3xl:text-[22px]">
          {{ plan.name }}
        </h3>

        <p class="flex w-full items-end justify-center leading-[0.73]">
          <span class="text-5xl font-semibold text-grey-15 lg:text-[60px] 3xl:text-[80px]">${{ priceFor(plan) }}</span>
          <span class="text-[16px] font-medium text-grey-30 3xl:text-[20px]">{{ period }}</span>
        </p>

        <div class="flex w-full flex-col">
          <div class="flex w-full flex-col items-center gap-5 rounded-t-[14px] border border-white-95 bg-white p-5 lg:gap-6 lg:p-7.5 3xl:gap-7.5 3xl:p-10">
            <p class="w-full text-center text-[18px] font-medium leading-normal text-grey-15 3xl:text-[20px]">
              Available Features
            </p>
            <ul class="flex w-full flex-col gap-5 lg:px-7.5">
              <li
                v-for="feature in plan.features"
                :key="feature.label"
                class="flex w-full items-center gap-2 rounded-md border border-white-95 p-3 3xl:gap-3 3xl:rounded-lg 3xl:p-3.5"
              >
                <span
                  class="flex shrink-0 rounded-sm p-1 3xl:rounded-md 3xl:p-1.5"
                  :class="feature.included ? 'bg-orange-95' : 'border border-white-95'"
                >
                  <NuxtImg
                    :src="feature.included ? '/icons/check-icon.svg' : '/icons/cross-icon.svg'"
                    :alt="feature.included ? 'Included' : 'Not included'"
                    width="20"
                    height="20"
                    class="size-4 3xl:size-5"
                  />
                </span>
                <span class="text-sm leading-normal text-grey-30 3xl:text-[18px]">
                  {{ feature.label }}
                </span>
              </li>
            </ul>
          </div>

          <NuxtLink
            to="/signup"
            class="flex w-full items-center justify-center rounded-b-lg bg-orange-50 px-6 py-4.5 text-sm font-semibold text-white transition-colors hover:bg-orange-50/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 3xl:py-5 3xl:text-[18px]"
          >
            Get Started
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
