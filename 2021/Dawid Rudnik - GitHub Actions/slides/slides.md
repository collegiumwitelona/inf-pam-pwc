<h2> GitHub Actions </h2>
<img src="presentations/Dawid-Rudnik-GitHub-Actions/images/logo.png" width="200px" alt="Logo">
<br>
<p>Dawid Rudnik, 39605</p>

---

<h3> Plan prezentacji</h3>

<p class="fragment" data-fragment-index="1">Czym jest CI/CD</p>
<p class="fragment" data-fragment-index="2">Czym jest GitHub Actions?</p>
<p class="fragment" data-fragment-index="3">Integracja z GitHubem</p>
<p class="fragment" data-fragment-index="4">Infrastruktura w chmurze</p>
<p class="fragment" data-fragment-index="5">Składniki</p>
<p class="fragment" data-fragment-index="6">Składnia</p>
<p class="fragment" data-fragment-index="7">Czytelny status</p>
<p class="fragment" data-fragment-index="8">Dodatkowe zalety</p>

---

<section>
    <h3>Czym jest CI/CD?</h3>
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/ci_cd.png" width="600px" alt="CI/CD">
</section>

---

<section>
    <h3> Czym jest GitHub Actions? </h3>
</section>
<section>
    <p>Dedykowane GitHubowi narzędzia CI/CD</p>
</section>
<section>
    <p>Pozwala na konfigurację zadań <strong>(Jobs)</strong>, które będą się wykonywały
    w naszym repozytorium w wyniku wystąpienia różnych zdarzeń <strong>(Events)</strong></p>
</section>

---

<section>
    <h3> Integracja z GitHubem </h3>
</section>
<section>
    <p>Narzędzie domyślnie gotowe do użycia</p>
</section>
<section>
    <p>Nie wymaga instalacji, integracji czy osobnej konfiguracji uwierzytelniania</p>
</section>
<section>
    <p>Spójne jest także nazewnictwo i interfejsy użytkownika GitHuba oraz GitHub Actions</p>
</section>
<section>
    <code data-trim data-noescape>.github/workflows</code>
</section>

---
<section>
    <h3> Infrastruktura w chmurze </h3>
</section>
<section>
    <p>Wirtualne środowiska:</p>
    <p class="fragment" data-fragment-index="1">Ubuntu</p>
    <p class="fragment" data-fragment-index="2">macOS</p>
    <p class="fragment" data-fragment-index="3">Windows</p>
</section>

---

<section>
    <h3> Składniki </h3>
</section>
<section>
    <p class="fragment" data-fragment-index="1">Workflows</p>
    <p class="fragment" data-fragment-index="2">Events</p>
    <p class="fragment" data-fragment-index="3">Jobs</p>
    <p class="fragment" data-fragment-index="4">Actions</p>
    <p class="fragment" data-fragment-index="5">Runners</p>
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/overview-actions-simple.png" width="700px" alt="overview-actions-simple">
</section>

---

<section>
    <h3> Składnia </h3>
</section>
<section>
    <pre><code data-trim data-noescape data-line-numbers="1|2|3|4|5|6-12|7-8|8-10|11-12">
        name: learn-github-actions
        on: [push]
        jobs:
          check-bats-version:
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v2
              - uses: actions/setup-node@v2
                with:
                  node-version: '14'
              - run: npm install -g bats
              - run: bats -v
        </code></pre>
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/overview-actions-event.png" width="700px" alt="overview-actions-event">
</section>

---

<section>
    <h3> Czytelny status </h3>
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/learn-github-actions-repository.png" width="700px" alt="learn-github-actions-repository">
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/learn-github-actions-workflow.png" width="700px" alt="learn-github-actions-workflow">
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/learn-github-actions-run.png" width="700px" alt="learn-github-actions-run">
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/overview-actions-result-navigate.png" width="700px" alt="overview-actions-result-navigate">
</section>
<section>
    <img src="presentations/Dawid-Rudnik-GitHub-Actions/images/overview-actions-result-updated-2.png" width="700px" alt="overview-actions-result-updated-2">
</section>

---

<section>
    <h3> Dodatkowe zalety </h3>
</section>
<section>
    <p>Brak opłat dla repozytoriów publicznych</p>
</section>
<section>
    <p>Wbudowane lub dostarczone przez społeczność wsparcie</p>
</section>
<section>
    <p>Integracja z mechanizmami automatycznej aktualizacji zależności</p>
</section>
<section>
    <p>Współbieżne wykonywanie niezależnych od siebie kroków</p>
</section>

---

<h2> Dziękuję za uwagę </h2>
