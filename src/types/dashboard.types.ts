// KPI Stats
export interface IStats {
  totalRevenue: number;
  totalUsers: number;
  orders: number;
  conversionRate: number;
}

// Revenue per month
export interface IRevenue {
  month: string;
  value: number;
}

// Orders per month
export interface IOrder {
  month: string;
  value: number;
}

// Users distribution
export interface IUserDistribution {
  type: string;
  value: number;
}
