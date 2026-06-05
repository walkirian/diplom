  dayKcalTotal(dateKey) {
    return Math.round(this.calcTotals(this.getEntries().filter((e) => e.dateKey === dateKey)).kcal);
  },
