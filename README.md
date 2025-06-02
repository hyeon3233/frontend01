# HTML
## Hyper Text Markup Language
- 웹 페이지를 만들기 위한 표준 마크업 언어
- 웹페이지의 구조를 정의
- 텍스트, 이미지, 링크, 폼, 테이블 등의 요소들을 브라우저에 어떻게
    표할지를 지정

```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>문서 제목</title>
</head>
<body>
<h1>안녕하세요!</h1>
<p>이것은 HTML 문서입니다.</p>
</body>
</html>
```

`<!DOCTYPE html>`: HTML5 문서임을 선언
`<html>`: 문서 전체를 감싸는 최상위 태그
`<head>`: 메타데이터, 제목, 스타일시트 등을 포함
`<body>`: 사용자에게 실제로 보여지는 콘텐츠

### 주요코드
| 태그 | 설명 |
| --- | --- |
| `<h1>`~`<h6>` | 제목 (숫자가 작을수록 크고 굵음) |
| `<p>` | 단락 |
| `<a href="">` | 하이퍼링크 |
| `<img src="">` | 이미지 삽입 |
| `<ul>`, `<ol>`, `<li>` | 리스트 (순서 없는/있는) |
| `<div>` | 블록 구획 |
| `<span>` | 인라인 구획 |
| `<form>`, `<input>`, `<button>` | 폼 요소들 |

- **form 태그**
    - 사용자가 작성한 데이터를 백엔드로 보낼 때 사용
- **Action**
    - 목적지 (URL)
- **method**
    - get 방식
        - 목적지 URL에 데이터를 실어서 보낸다.
    내용이 보인다.
    데이터는 쿼리스트링으로 표현
    - Post 방식
        - Request는 head, body로 이루어져 있는데 body에 데이터를 담아서 보내는 방식
      표면상 내용이 보이지않는다.

