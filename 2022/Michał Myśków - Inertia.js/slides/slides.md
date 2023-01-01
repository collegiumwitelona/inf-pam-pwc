<img style="height: 8em" alt="Inertia logo" data-src="presentations/2022/michal-myskow-inertia-js/images/inertia_logo.png">

<p>Michał Myśków 40317</p>

---

<section>
    <h3>Czym jest Inertia?</h3>
</section>

<section>
    <q><strong>Inertia</strong> to nowe podejście do tworzenia klasycznych aplikacji internetowych opartych na serwerze. Nazywana jest nowoczesnym monolitem.</q>
</section>

<section>
    <img alt="Inertia as glue" data-src="presentations/2022/michal-myskow-inertia-js/images/inertia_as_glue.png">
    <ul style="font-size: 30px; line-height: 60px;">
        <li>Inertia nie jest <strong>frameworkiem</strong>.</li>
        <li>Przeznaczona jest do współpracy z frameworkami.</li>
        <li>Działa jak klej łącząc wybrane frameworki za pomocą <strong>adapterów</strong>.</li>
        <li>Obecnie posiada trzy <strong>adaptery</strong> po stronie klienta <strong>(React, Vue i Svelte)</strong> oraz dwa adaptery po stronie serwera <strong>(Laravel i Rails)</strong>.</li>
    </ul>
    <br/><br/><br/><br/>
</section>

---

<section>
    <h3>Dlaczego Inertia?</h3>
</section>

<section>
    <ul style="font-size: 27px; line-height: 60px;">
        <li>Umożliwia tworzenie jednostronicowych aplikacji w pełni renderowanych po stronie klienta.</li>
        <li>Nie wymaga większej złożoności, która towarzyszy nowoczesnym <strong>SPA</strong>.</li>
        <li>Wykorzystuje istniejące struktury po stronie serwera.</li>
        <li>Brak routingu po stronie klienta.</li>
        <li>Nie wymaga interfejsu API.</li>
        <li>Umożliwia tworzenie kontrolerów i widoków, jak przy standardowym podejściu monolitycznym.</li>
    </ul>
</section>

---

### Inertia-Laravel

- https://github.com/inertiajs/inertia-laravel
- Instalacje - 5 267 348
- Gwiazdki - 1 592
- Forki - 176
- Ostatni commit - 8 listopada 2022 r
---

<section>
    <h3>Jak to działa?</h3>
</section>

<section>
    <img style="height: 3em" alt="Laravel logo" data-src="presentations/2022/michal-myskow-inertia-js/images/laravel_logo.png">
    <img style="height: 3em" alt="Rails logo" data-src="presentations/2022/michal-myskow-inertia-js/images/rails_logo.png">
    <br/>
    <p><strong>Inertia</strong> umożliwia tworzenie aplikacji w sposób monolityczny z wybranym renderowanym po stronie serwera frameworkiem.</p>
</section>

<section>
    <p>Wykorzystuje istniejące funkcje frameworków:</p> 
    <ul style="font-size: 35px; line-height: 65px;">
        <li>Routing</li>
        <li>Kontrolery</li>
        <li>Middleware</li>
        <li>Uwierzytelnianie</li>
        <li>Autoryzację</li>
        <li>I wiele więcej...</li>
    </ul>
</section>

<section>
    <p>Jedyną różnicą jest <strong>warstwa widoku</strong>.</p>
    <p style="font-size: 35px;"><strong>Inertia</strong> nie korzysta z renderowania po stronie serwera (np. szablonów <strong>Blade</strong>), a z komponentów <strong>JavaScript</strong>. Pozwala to na zbudowanie całego front-endu za pomocą <strong>Reacta</strong>, <strong>Vue</strong> lub <strong>Svelte</strong>.</p>
</section>

<section>
    <p><strong>Inertia</strong> jako biblioteka routingu pozwala na dokonywanie wizyt bez wymuszania pełnego przeładowania.</p>
    <p style="font-size: 37px;">Odbywa się to za pomocą komponentu <strong>Link</strong> który dokonuje wizyty za pośrednictwem obiektów <strong>XHR</strong> (XMLHttpRequest).</p>

```html
<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import route from 'ziggy'
</script>

<a href="/users/create">Create User</a>

<Link :href="route('users.create')">Create User</Link>
<Link :href="route('users.edit', [user.id])">Edit User</Link>
```
</section>

<section>
    <p style="font-size: 25px;">Serwer wykrywa wizytę <strong>Inertii</strong> i zamiast zwracać pełną odpowiedź <strong>HTML</strong>, zwraca odpowiedź w formacie <strong>JSON</strong>.</p>
    <img style="height: 5em" alt="Console" data-src="presentations/2022/michal-myskow-inertia-js/images/console.png">
    <p style="font-size: 25px;"><strong>Inertia</strong> następnie dynamicznie zamienia poprzedni komponent strony na nowy i aktualizuje stan historii.</p>
    <img style="height: 5em" alt="Console 2" data-src="presentations/2022/michal-myskow-inertia-js/images/console_2.png">
</section>

---

<section>
    <h3>Instalacja</h3>
</section>

<section>
<h3>Od strony serwera</h3>

```shell
composer require inertiajs/inertia-laravel
```
```shell
php artisan inertia:middleware
```
```html
<html>
    <head>
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
```
</section>

<section>
<h3>Od strony klienta</h3>

```shell
npm install @inertiajs/inertia @inertiajs/inertia-vue3
```
```javascript
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => `${title} - Example App Name`,
    setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
```
</section>

---

<h3>Wykorzystanie w praktyce</h3>

---

### Routing

<p>Jeśli strona nie wymaga kontrolera</p>

```php
Route::inertia("/about", "AboutComponent");
Route::get("/about", fn(): Response => inertia("AboutComponent"));
```

<p>Jeśli strona wymaga kontrolera</p>

```php
Route::get("/users", [UserController::class, "index"])->name("users.index");
```

---

### Response

```php
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::all();

        //helper
        return inertia("Users/Index", [
            "users" => $users,
        ]);
            
        //fasada            
        return Inertia::render('Users/Index', [
            "users" => $users,
        ]);
    }
}
```

```php
    return view("users.index", [
        "users" => $users,
    ]);
```

---

### Strony

```html
<script>
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-vue3'

export default {
    components: {
        Head,
        Layout,
    },
    props: {
        user: Object,
    },
}
</script>

<template>
    <Head title="Welcome page" />
    <Layout>
        <h1>Welcome</h1>
        <p>Hello {{ user.name }}!</p>
    </Layout>
</template>
```

---

### Linki

```html
<script>
  import { Link } from '@inertiajs/inertia-vue3'
</script>

<Link href="/">Home</Link>

<Link href="/logout" method="post">Logout</Link>
```

---

### Udostępnione dane

```php
class HandleInertiaRequests extends Middleware
{
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'appName' => config('app.name'),
            
            'auth.user' => fn () => $request->user()
                ? $request->user()->only('name', 'email')
                : null,
        ]);
    }
}
```

---

### Dostęp do udostępnionych danych

```html
<script>
    import { usePage } from '@inertiajs/inertia-vue3'
</script>

<template>
    You are logged in as: {{ usePage().props.value.auth.user.name }}
</template>

```

---

<p>Inne funkcje <strong>Inertia.js</strong>:</p> 
<ul style="font-size: 35px; line-height: 65px;">
    <li>Formularze</li>
    <li>Obsługa błędów</li>
    <li>Wskaźniki postępu</li>
    <li>Zarządzanie scrollem</li>
    <li>Testowanie</li>
    <li>Autoryzację</li>
    <li>I wiele więcej...</li>
</ul>

---

### Dziękuję za uwagę

<br><br><br>
Źródła:

- https://inertiajs.com/
- https://github.com/inertiajs

---