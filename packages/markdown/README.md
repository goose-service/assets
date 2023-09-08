# redgoose assets / markdown

서비스 본문에서 사용되고 있는 마크다운 스타일

## Using

### iframe

유튜브나 비메오같은 같은 서비스로 아이프레임 요소를 삽입할때 사용할 수 있다.
다음과 같이 작성하여 사용할 수 있다.

```markdown
<div class="iframe">
<iframe width="" height="" src=""></iframe>
</div>
```

비율을 변경하려면 다음과 같이 스타일 값을 넣어줘야한다.

```markdown
<div class="iframe" style="--aspect-ratio:4/3"/>
```

### grid

이미지를 그리드형태로 노출할때 사용한다.

#### item

이미지 여러개장을 그리드 형태로 그룹짓는다. 컬럼의 값은 `1~6`까지 입력할 수 있다.

```markdown
<figure class="grid-item" data-mobile="2">
<p><img src="image.jpg" alt=""/></p>
<p><img src="image.jpg" alt=""/></p>
<p><img src="image.jpg" alt=""/></p>
</figure>
```

##### ratio

이미지의 비율을 변경할 수 있다.

```markdown
<figure class="grid-item" data-ratio="16/9" />
```

이미지 비율의 값은 다음과 같은 값을 사용할 수 있다.

| type   | value   |
|--------|---------|
| 1 / 1  | default |
| 2 / 1  | 2/1     |
| 1 / 2  | 1/2     |
| 6 / 4  | 6/4     |
| 4 / 6  | 4/6     |
| 4 / 3  | 4/3     |
| 3 / 4  | 3/4     |
| 16 / 9 | 16/9    |
| 21 / 9 | 21/9    |

##### column

각 컬럼의 값을 변경할 수 있다. 좀 더 커스터마이즈하게 그리드 영역을 변화를 줄 수 있다. 값은 `1~6`까지 사용할 수 있다.

```markdown
<figure class="grid-item" data-mobile="3">
<p col="4"><img/></p>
<p col-tablet="2"><img/></p>
<p col-desktop="3"><img/></p>
<p col-desktop-large="1"><img/></p>
</figure>
```

##### responsive

반응형 사이즈 타입별로 컬럼이나 비율의 값을 변경할 수 있다.

```markdown
<figure class="grid-item"data-mobile="2" data-tablet="3" data-desktop="4" data-desktop-large="5" />
<figure class="grid-item" data-ratio="2/1" data-ratio-tablet="6/4" data-ratio-desktop="6/4" data-ratio-desktop-large="6/4" />
```

엘리먼트 속성은 다음과 같다.

| size type     | column             | ratio                    |
|---------------|--------------------|--------------------------|
| mobile        | data-mobile        | data-ratio               |
| tablet        | data-tablet        | data-ratio-tablet        |
| desktop       | data-desktop       | data-ratio-desktop       |
| desktop-large | data-desktop-large | data-ratio-desktop-large |

#### group

여러개의 그리드 아이템을 묶어서 사용한다.

```markdown
<div class="grid-group">
<figure class="grid-item" data-mobile="3"></figure>
<figure class="grid-item" data-mobile="2"></figure>
</div>
```

### dark mode image

TODO: 컴포넌트로 만들어 쓰는게 좋을거 같다.


### space line

빈 한줄의 공백을 만드려면 다음과 같이 사용한다.

```markdown
<p><br/></p>
```
