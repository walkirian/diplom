  render(mountId) {
    const root = document.getElementById(mountId);
    if (!root) return;
    this.ensureStyles();

    const username = String(window.AppAuth?.user?.username || "").trim().toLowerCase();
    if (username === "бантос") {
      const flagKey = "nutritionClearedOnce_bantos_v1";
      if (!localStorage.getItem(flagKey)) {
        this.clearAllEntries();
        localStorage.setItem(flagKey, "1");
      }
    }

    const selectedDate = this.getSelectedDate();
    const entries = this.getDayEntries(selectedDate);
    const totals = this.calcTotals(entries);
    const diaryBody = this.renderMealSections(entries);

    root.innerHTML = `
      <div class="nutrition-shell">
        <header class="nutrition-page-head">
          <h1>Дневник питания</h1>
          <p>Календарь, приёмы пищи и БЖУ за день в одном экране.</p>
        </header>
        <div class="nutrition-layout">
          <div class="nutrition-col-main">
            <section class="nutrition-card">
              <div class="nutrition-diary-head">
                <div>
                  <h2>Еда за день</h2>
                  <p class="nutrition-diary-date">${this.escapeHtml(this.formatDateRu(selectedDate))} · ${Math.round(totals.kcal)} ккал</p>
                </div>
                <div class="nutrition-diary-actions">
