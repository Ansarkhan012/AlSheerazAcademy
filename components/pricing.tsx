"use client";

import { useState } from "react";
import { pricingPlans } from "@/data/pricingData";
import { Currency } from "@/types/pricing";
import CurrencyToggle from "./Currency";

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  GBP: 0.79,
  AUD: 1.52, 
};

const currencySymbol: Record<Currency, string> = {
  USD: "$",
  GBP: "£",
  AUD: "A$",
};

const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convertPrice = (usd: number) =>
    Math.round(usd * exchangeRates[currency]);

  return (
    <section className="py-12">
      <div className="text-center my-5">
  <h1 className="text-4xl font-bold text-primary-900 mb-2">
    Affordable Fees Plan
  </h1>
  <p className="text-gray-600">
    Quality Islamic education at the most reasonable price
  </p>
</div>

      <div className="max-w-6xl mx-auto px-4">
        <CurrencyToggle currency={currency} setCurrency={setCurrency} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white relative rounded-xl p-6 border ${plan.popular 
                ? "border-emerald-500 shadow-lg" 
                : "border-gray-200 shadow-sm"
              } hover:shadow-md transition-shadow`}
            >
              {plan.popular && (
                <div className="inline-block absolute left-1/2 top-1.5  bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Popular Choice
                </div>
              )}

              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {plan.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {currencySymbol[currency]}
                    {convertPrice(plan.priceUSD)}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <span className="text-emerald-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular 
                  ? "bg-green-700 hover:bg-green-800 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;