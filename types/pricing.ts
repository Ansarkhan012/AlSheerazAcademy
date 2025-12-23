export type Currency = "USD" | "GBP" | "AUD";

export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  priceUSD: number;
  features: string[];
  popular?: boolean;
}








