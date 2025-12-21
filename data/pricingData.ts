import { PricingPlan } from '../types/pricing'

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic Plan",
    description: "For beginners",
    priceUSD: 35,
    features: [
      "3 Days / Week",
      "30 Minutes Class",
      "Noorani Qaida",
      "Male / Female Teacher",
    ],
  },
  {
    id: 2,
    title: "Standard Plan",
    description: "Most chosen",
    priceUSD: 50,
    popular: true,
    features: [
      "5 Days / Week",
      "30 Minutes Class",
      "Quran Reading",
      "Tajweed Basics",
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    description: "Advanced learning",
    priceUSD: 60,
    features: [
      "5 Days / Week",
      "30 Minutes Class",
      "Quran with Tajweed",
      "Memorization (Hifz)",
    ],
  },
  {
    id: 4,
    title: "Weekend Classes",
    description: "Personal Teacher",
    priceUSD: 80,
    features: [
      "1-on-1 Live Classes",
      "Flexible Timing",
      "Custom Learning Plan",
      "Weekly Progress Report",
    ],
  },
];
