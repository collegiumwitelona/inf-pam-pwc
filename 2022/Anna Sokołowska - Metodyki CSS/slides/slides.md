# Metodyki CSS

Anna Sokołowska, 40824


## OOCSS

Object Oriented CSS <!-- .element: class="fragment" -->


### Obiekt

- Węzły HTML DOM <!-- .element: class="fragment" -->
- Deklaracje CSS tych węzłów <!-- .element: class="fragment" -->
- Komponenty powiązane np zdjęcie w tle <!-- .element: class="fragment" -->
- Powiązany kod JavaScript <!-- .element: class="fragment" -->


1. Separacja struktury od stylu 
2. Separacja kontenerów od zawartości <!-- .element: class="fragment" -->


Separacja struktury od stylu

```css
.box {
    width: 400px;
    padding: 30px;
}
.basic {
    background-color: #eee;
}
.marked {
    background-color: #9cb949;
}
```


Separacja kontenerów i zawartości

``` css
.post h2 {
    font-size: 32px;
}
```
<!-- .element: class="fragment strike" -->

```html
<h2 class="postTitle">Title</h2>
```
<!-- .element: class="fragment" -->

```css
.postTitle {
    font-size: 32px;
}
```
<!-- .element: class="fragment" -->



## SMACSS

Scalable and Modular Architecture for CSS
<!-- .element: class="fragment" -->


- Base
- Layout
- Modules
- State
- Theme 


Base

```css
body {
	margin: 0;
	padding: 0;
	font-size: 18px;
}
a {
	color: red;
}
a:hover {
	color: green;
}
```


Layout

```css
	#article {
		float: left;
	}
	#sidebar {
		float: right;
	}
	.l-flipped #article{
		float: right;
	}
	.l-flipped #sidebar{
		float: left;
	}
```


Modules

```html
<div class="card">
    <div class="card-image"></div>
    <div class="card-title"></div>
    <div class="card-description"></div>
</div>
```

```css
.card .card-title {
  font-size: 20px;
}
```


State

```css
.is-hidden{
	display: none;
}
.is-error{
	color: red;
}
```


Theme

<small>module-name.css</small>

```css
.mod {
    border: 1px solid;
}
```

<small>theme.css</small>

```css
.mod {
    border-color: blue;
}
```



# BEM

Block, Element, Modifier
<!-- .element: class="fragment" -->


block <!-- .element: style="color: #3ca1cb;" -->

__element <!-- .element: style="color: #91ee63;" -->

<span style="color: #e36bc9;">_modifier</span> / <span style="color: #e36bc9;">--modifier</span>


.<span style="color: #3ca1cb;">block</span>

.<span style="color: #3ca1cb;">block</span><span style="color: #e36bc9;">--modifier</span>

.<span style="color: #3ca1cb;">block</span><span style="color: #91ee63;">__element</span>

.<span style="color: #3ca1cb;">block</span><span style="color: #91ee63;">__element</span><span
                        style="color: #e36bc9;">--modifier</span>


block <!-- .element: style="color: #3ca1cb;" -->
```html
<div class="red-text"></div>
```
<!-- .element: class="fragment strike" -->

```html
<pre class="fragment"><code>
<div class="error"></div>
```


__element <!-- .element: style="color: #91ee63;" -->

.<span style="color: #3ca1cb;">block</span><span style="color: #91ee63;">__element</span><span
style="color: #91ee63;">__element</span>
<!-- .element: class="fragment strike" -->

```html
<form class="search-form">
    <input class="search-form__input">
    <button class="search-form__button">Search</button>
</form>
```


--modifier <!-- .element: style="color: #e36bc9;" -->

```html
<form class="search-form search-form_focused">
    <input class="search-form__input">
    <button class="search-form__button search-form__button--disabled">Search</button>
</form>
```



## Atomic CSS


```css
.p-20px { padding: 20px; }
.m-0 { margin: 0; }
.w-100p { width: 100%; }
```



1. SUIT CSS
2. SYSTEMATIC CSS
3. CUBE CSS
4. ITCSS