interface Hours {
  current: number
  previous: number
}

export interface Category {
  id: string
  title: string
  timeframes: {
    daily: Hours
    weekly: Hours
    monthly: Hours
  }
}
