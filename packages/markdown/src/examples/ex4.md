# Grid Image Styles

여러장의 이미지를 그리드 형태를 만들 수 있도록 도와준다.


## 한장으로 사용할때의 모습

![image](https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/)

일반적으로 이미지를 넣을때 이렇게 한장이 단독으로 들어간다.


## 그리드 기본예제

단독으로 사용할때의 예제

<figure class="grid-item" data-mobile="2">
<p><img src="https://goose.redgoose.me/file/XcebsMm6cualSVAP/" alt="TRON_Lightcycle-Run_stillion-00165.webp"/></p>
<p><goose-dark-mode-image src-light="https://goose.redgoose.me/file/aUoAaUcPKZckCAlo/" src-dark="https://goose.redgoose.me/file/G8o3hGhtfKu6GjVX/" alt="Slideshow"/></p>
</figure>

다음과 같은 코드로 사용한다.

```html
<figure class="grid-item" data-mobile="2">
  <p><img src="image.jpg" alt=""/></p>
  <p><img src="image.jpg" alt=""/></p>
</figure>
```


## 반응형 사이즈

반응형 사이즈일때 사용하는 예제

<figure
  class="grid-item"
  data-mobile="1"
  data-tablet="2"
  data-desktop="3"
  data-desktop-large="4"
  data-ratio="21/9"
  data-ratio-tablet="6/4"
  data-ratio-desktop="3/4"
  data-ratio-desktop-large="1/1">
<p><img src="https://goose.redgoose.me/file/XcebsMm6cualSVAP/" alt="TRON_Lightcycle-Run_stillion-00165.webp"/></p>
<p><img src="https://goose.redgoose.me/file/ZqVK7DlrGKlEHr2E/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/Ft4UGg1CtGSpfinK/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/MzNMLq15eYoYLqVZ/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/ktFO2Mp1xvVTBilQ/" alt=""/></p>
</figure>

```html
<figure
  class="grid-item"
  data-mobile="1"
  data-tablet="2"
  data-desktop="3"
  data-desktop-large="4"
  data-ratio="21/9"
  data-ratio-tablet="6/4"
  data-ratio-desktop="4/3"
  data-ratio-desktop-large="1/1">
  <p><img src="image.jpg" alt=""/></p>
  <p><img src="image.jpg" alt=""/></p>
</figure>
```

사이즈에 따른 컬럼의 수와 이미지 비율

- `data-mobile`: 모바일 사이즈
- `data-tablet`: 태블릿 사이즈
- `data-desktop`: 데스크탑 사이즈
- `data-desktop-large`: 큰 데스크탑 사이즈
- `data-ratio`: 이미지 비율 (모바일)
- `data-ratio-tablet`: 이미지 비율 (태블릿)
- `data-ratio-desktop`: 이미지 비율 (데스크탑)
- `data-ratio-desktop-large`: 이미지 비율 (큰 데스크탑)


## column

그리드 컬럼의 예제, 값은 `6`까지 사용할 수 있다.

<div class="grid-group">
<figure class="grid-item" data-mobile="1" data-ratio="21/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="2" data-ratio="16/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="3" data-ratio="16/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="4" data-ratio="16/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="5" data-ratio="16/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="6" data-ratio="16/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
</div>

```html
<figure class="grid-item" data-mobile="1"/>
<figure class="grid-item" data-mobile="2"/>
<figure class="grid-item" data-mobile="3"/>
<figure class="grid-item" data-mobile="4"/>
<figure class="grid-item" data-mobile="5"/>
<figure class="grid-item" data-mobile="6"/>
```


## 이미지 비율

이미지 사이즈 비율을 정한다. 사용할 수 있는 값은 다음과 같다.

- `data-ratio="1/1"`
- `data-ratio="2/1"`
- `data-ratio="1/2`
- `data-ratio="4/3"`
- `data-ratio="3/4"`
- `data-ratio="6/4"`
- `data-ratio="4/6"`
- `data-ratio="10/8"`
- `data-ratio="8/10"`
- `data-ratio="16/9"`
- `data-ratio="21/9"`

<div class="grid-group">
<figure class="grid-item" data-mobile="3" data-ratio="1/1">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="2" data-ratio="16/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="1" data-ratio="21/9">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
<figure class="grid-item" data-mobile="4" data-ratio="3/4">
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
<p><img src="https://goose.redgoose.me/file/SjXaLJa7LsO10FGt/" alt=""/></p>
</figure>
</div>


## 그리드 그룹

여러개의 그리드들을 묶어서 사용할 수 있다.

```html
<div class="grid-group">
  <figure class="grid-item"/>
  <figure class="grid-item"/>
  <figure class="grid-item"/>
</div>
```

