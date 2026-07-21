document.addEventListener('DOMContentLoaded', () => {
    const heroCta = document.getElementById('hero-cta');
    const navCta = document.getElementById('nav-cta');

    function logCtaClick(buttonName) {
        let ctaClicks = parseInt(localStorage.getItem('cta_clicks') || '0');
        ctaClicks++;
        localStorage.setItem('cta_clicks', ctaClicks.toString());
        console.log(`[Metric Tracked] ${buttonName} clicked. Total CTA Clicks: ${ctaClicks}`);
    }

    if (heroCta) {
        heroCta.addEventListener('click', () => logCtaClick('Hero CTA'));
    }
    if (navCta) {
        navCta.addEventListener('click', () => logCtaClick('Nav CTA'));
    }
});