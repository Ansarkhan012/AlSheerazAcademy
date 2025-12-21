// CurrencyToggle.tsx
"use client";

import { Currency } from "@/types/pricing";

interface CurrencyToggleProps {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyToggle = ({ currency, setCurrency }: CurrencyToggleProps) => {
  const currencies: Currency[] = ["USD", "GBP", "AUD"];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-gray-100 rounded-lg p-1">
        {currencies.map((curr) => (
          <button
            key={curr}
            onClick={() => setCurrency(curr)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              currency === curr 
                ? "bg-white text-emerald-700 shadow-sm" 
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyToggle;