---
theme: default
background: /images/lighthouse-background.png
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Google Lighthouse
mdc: true
---

### Optymalizacja doświadczeń użytkowników stron internetowych

na przykładzie Google Lighthouse
<br><br>
###### Seweryn Banasiak, 41686
---

# Spis treści

<Toc maxDepth="1" columns="2"></Toc>

---
layout: image-right
image: /images/lighthouse-user-flow.png
---

# Pomiar jakości stron internetowych
- Automatyczne narzędzia pomiaru jakości stron są niezbędne do monitorowania i doskonalenia strony internetowej.

- Pomagają identyfikować obszary wymagające optymalizacji, co przekłada się na doświadczenia użytkowników oraz popularność naszej strony.

---
layout: image-right
image: /images/lighthouse-logo.svg
---

# Lighthouse
- Lighthouse to automatyczne narzędzie Google do pomiaru jakości stron internetowych.

- Jest to otwarte oprogramowanie, które jest dostępne jako wtyczka do przeglądarek Chrome i Firefox, a także jako aplikacja wiersza poleceń.

- Lighthouse jest również wbudowany w Google Chrome DevTools.

---

# Dlaczego warto korzystać z Lighthouse?
- Lighthouse jest narzędziem automatycznym, które pozwala na szybkie i łatwe przeprowadzenie audytu strony internetowej.

- Wystarczy kilka kliknięć, aby uzyskać raport z wynikami.

- Stosowanie się do zaleceń Lighthouse może pomóc w zwiększeniu zainteresowania użytkowników, dostępności i klikalności.

![Lighthouse](/images/lighthouse-background.png)
---

# Bazowe pojęcia optymalizacji - Core Web Vitals

- Core Web Vitals to zestaw metryk, które mierzą doświadczenia użytkowników w zakresie ładowania strony, interaktywności i stabilności wizualnej.

- Core Web Vitals są kluczowe dla wszystkich właścicieli stron internetowych, ponieważ wpływają na to, jak użytkownicy odbierają doświadczenia na stronie.

- Core Web Vitals są również kluczowe dla Google, ponieważ wpływają na to, jak Google indeksuje i ocenia strony.

![Core Web Vitals](/images/core-web-vitals.png)
---

# Core Web Vitals - LCP
LCP (Largest Contentful Paint) mierzy czas, w którym największy element wizualny na stronie jest w pełni widoczny.

![LCP](/images/lcp.svg)

LCP mierzy, jak szybko użytkownicy mogą zobaczyć treść na stronie.
---

# Core Web Vitals - CLS
CLS (Cumulative Layout Shift) mierzy stabilność wizualną strony.

![CLS](/images/cls.svg)

CLS mierzy, jak bardzo elementy na stronie przesuwają się w nieprzewidywalny sposób.

---

# Core Web Vitals - FID
FID (First Input Delay) mierzy interaktywność strony.

![LCP](/images/fid.svg)

FID mierzy, jak szybko użytkownicy mogą interaktywnie korzystać ze strony.

---

# Core Web Vitals - INP
INP (Interaction to Next Paint) mierzy czas, w którym użytkownik może interaktywnie korzystać ze strony.

![INP](/images/inp.png)

INP mierzy, jak szybko użytkownicy mogą interaktywnie korzystać ze strony.

W porównaniu do FID, INP mierzy czas od pierwszej interakcji użytkownika do następnego renderowania strony.
---

# Wtyczka Web Vitals
Wtyczka Web Vitals to wtyczka do przeglądarki Chrome, która pozwala na szybkie i łatwe przeprowadzenie audytu strony internetowej pod kątem Core Web Vitals.

<img src="/images/web-vitals-extension.png" style="height: 80%; width: auto; margin:auto"/>
---

# Metryki Lighthouse
Lighthouse mierzy jakość strony internetowej w pięciu kategoriach: Performance, Accessibility, Best Practices, SEO i PWA.

<img src="/images/lighthouse-metrics.png" style="height: 80%; width: auto; margin:auto"/>

---

# Metryki Lighthouse - Performance
- Metryki z kategorii Performance mierzą wydajność strony internetowej.

- Metryki z tej kategorii są szczególnie ważne dla użytkowników, ponieważ wpływają na to, jak szybko strona się ładuje i jak szybko użytkownicy mogą z niej korzystać.

<img src="/images/lighthouse-performance.png" style="height: 70%; width: auto; margin:auto"/>
---

# Metryki Lighthouse - Accessibility
- Metryki z kategorii Accessibility mierzą dostępność strony internetowej.

- Metryki z tej kategorii są szczególnie ważne dla użytkowników, ponieważ wpływają na to, jak łatwo użytkownicy mogą korzystać ze strony.

<img src="/images/lighthouse-accessibility.png" style="height: 70%; width: auto; margin:auto"/>

---

# Metryki Lighthouse - Best Practices
- Metryki z kategorii Best Practices mierzą zgodność strony internetowej z najlepszymi praktykami.

- Metryki z tej kategorii są szczególnie ważne dla użytkowników, ponieważ wpływają na to, jak bezpieczna jest strona.

<img src="/images/lighthouse-best-practices.png" style="height: 70%; width: auto; margin:auto"/>

---

# Metryki Lighthouse - SEO
- Metryki z kategorii SEO mierzą optymalizację strony internetowej pod kątem wyszukiwarek.

- Metryki z tej kategorii są szczególnie ważne dla użytkowników, ponieważ wpływają na to, jak łatwo użytkownicy mogą znaleźć stronę.

<img src="/images/lighthouse-seo.png" style="height: 70%; width: auto; margin:auto"/>
---

# Przykłady z życia - Collegium Witelona
<img src="/images/lighthouse-collegiumwitelona.png" style="height: 90%; width: auto; margin:auto"/>
---

# Przykłady z życia - Plant Tracker
<img src="/images/lighthouse-plant-tracker.png" style="height: 90%; width: auto; margin:auto"/>
---

# Unlighthouse
Unlighthouse to narzędzie do automatycznego pomiaru jakości stron internetowych przy wykorzystaniu Google Lighthouse.

<img src="/images/unlighthouse.png" style="height: 80%; width: auto; margin:auto"/>
---

# Unlighthouse - automatyzacja
- Unlighthouse pozwala na automatyzację pomiaru jakości stron internetowych i wdrożenie do swojego CI pipeline przy użyciu GitHub Actions.

```yaml
name: Assertions and static report
jobs:
  demo:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Install Dependencies
        run: npm install -g @unlighthouse/cli puppeteer netlify-cli

      - name: Unlighthouse assertions and client
        run: unlighthouse-ci --site <your-site> --budget 75 --build-static

      - name: Deploy
        run: netlify deploy --dir=.unlighthouse --prod --message="New Release Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

# Podsumowanie
"When a measure becomes a target, it ceases to be a good measure." - Goodhart's law

- Pomiar jakości stron internetowych jest ważny, ale nie należy traktować go jako cel sam w sobie.

- Pomimo tego, że narzędzia tego typu nie są idealne, to są ważne w monitorowaniu i doskonaleniu strony internetowej.

- Warto sięgać także do dokumentacji, np. [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/practices/), aby poznać najlepsze praktyki.

---

# Źródła
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/practices/)
- [Unlighthouse](https://unlighthouse.dev/)
