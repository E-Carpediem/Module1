# 📚 강의 및 강좌 등록 도메인 구축 프로젝트

> HTML, CSS, JavaScript를 사용하여 강의 등록 및 강좌 관리 도메인을 구축하는 프로젝트입니다.

<br>

## 🛠 기술 스택

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<br>

## 📁 파일 구조

```bash
├── components/          # 공통으로 사용되는 함수, 변수, 페이지
│   ├── modal.html
│   ├── header.html
│   ├── nav.html
│   ├── contentDetail/   # 강의 상세 조회
│   └── community/       # 커뮤니티
│
├── manager/
│   ├── main/            # 메인 대시보드
│   ├── totalMember/     # 회원 전체 조회 (회원, 수강생, 강사)
│   ├── totalContents/   # 강의 전체 조회
│   │   └── lecturersContents/  # 강사의 강의 목록 전체 조회
│   └── sales/           # 매출
│
├── student/
│   ├── main/            # 강의 전체 조회
│   └── shoppingCart/    # 장바구니
│
├── lecture/
│   ├── main/            # 내 강의 전체 조회
│   ├── lectureEnroll/   # 강의 등록
│   └── myStudents/      # 수강생 전체 조회
│
├── account/
│   ├── login/           # 로그인
│   └── signUp/          # 회원가입
│
└── src/
    ├── assets/
    │   ├── fonts/
    │   └── img/
    ├── css/
    └── js/
        ├── modal.js
        ├── header.js
        └── nav.js
```

<br>

## 🤝 협업 규칙

작업은 아래 순서에 따라 진행합니다.

| 단계 | 내용 |
|:---:|---|
| 1️⃣ | **Issue 작성** — 담당자, 라벨 필수 |
| 2️⃣ | **Branch 생성** — Branch 작성 규칙 확인 |
| 3️⃣ | **작업 시작** — Coding Convention 준수 |
| 4️⃣ | **Commit & Push** — Commit Message 규칙 확인 |
| 5️⃣ | **Pull Request** — 리뷰어, 담당자, 라벨 필수 |

<br>

## 📝 Issue 작성 규칙
설명 : 이슈 내용 기술
작업할 내용 : 작업할 내용 기술
기타 : 기타사항 기술

<br>

## 🌿 Branch 작성 규칙
기능 구현
feature/기능-세부기능1-세부기능2

오류 수정
hotfix/수정할기능

> ⚠️ 세부 기능명 끝에 숫자가 들어갈 경우 이슈 번호와 혼동될 수 있으므로,
> 이슈 번호는 브랜치명 대신 **커밋 메시지**에 작성합니다.

<br>

## ✉️ Commit Message 작성 규칙

### PREFIX 정리

| PREFIX | 설명 |
|---|---|
| `[FEATURE]` | 새로운 기능 추가 |
| `[FIX]` | 오류를 고친 경우 |
| `[RENAME]` | 파일 혹은 폴더명을 수정하는 경우 |
| `[STYLE]` | 코드 변경 없이 자잘한 수정을 하는 경우 |

### 작성 형식
[PREFIX] 제목 ← 필수

상세 내용 ← 선택

closed #이슈번호 ← 필수

### 작성 예시
예시 1 — 간단하게
[FEATURE] 회원가입 기능 추가

예시 2 — 상세하게
[FEATURE] 회원가입 기능 추가

회원가입 기능 중 아이디, 비밀번호 기능을 추가했습니다.

<br>

## 🔀 Pull Request 작성 규칙
관련 이슈 : 본인이 작성한 이슈 번호
작업 유형 : 작업 내용에 따라 유형 선택
작업 내용 : 작업한 내용 기술
변경 이유 : 변경 이유 기술
기타 : 작업내용, 변경이유 외 작성할 내용
스크린샷 : (선택 — 가급적 첨부 권장)

<br>

## 💻 Coding Convention

### 1. 네이밍 규칙

| 구분 | 방식 | 예시 |
|---|---|---|
| 변수 | 카멜케이스 + 명사 | `userId`, `bookName` |
| 함수 | 카멜케이스 + 동사 | `clickBtn()`, `fetchData()` |
| 클래스/아이디 | `kebab-case` (폴더명 첫글자 + 카멜케이스 대문자 + 기능) | `.lc-delete` |

### 2. 포맷 규칙

- **들여쓰기** : `Ctrl + Shift + F` 기준 (미적용 시 Tab 1번)
- **공백** : `Ctrl + Shift + F` 기준 (미적용 시 띄어쓰기 1번)
- **줄바꿈** : 세미콜론(`;`) 기준으로 한 줄 아래
- **문장 종료** : 세미콜론(`;`) 필수 작성
- **함수** : 화살표 함수 사용

### 3. 주석 작성법

- 1줄 설명 → 코드 오른쪽 인라인 주석
- 2줄 이상 → 전체 주석으로 코드 위에 작성
- 함수 선언, 객체 등 긴 코드 → 코드 위에 주석

```javascript
// 도서 정보 수정 객체
this.books[editBookIndex] = {
    title: editBookName,    // 수정할 도서 제목
    price: editBookPrice
};
```

### 4. 파일 코드 순서

- 전역 변수 → 파일 최상단
- 지역 변수 → 해당 스코프 내 최상단