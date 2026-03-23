const contentsList = [
    { "contentId": "1", "contentTitle": "React 기초 완성", "contentImg": "https://picsum.photos/seed/1/300/200", "contentPreview": "React를 처음 배우는 분들을 위한 강의입니다.", "category": "프론트엔드", "instructorName": "강사1", "studentNumber": 45, "lessonsNumber": 20, "registerDate": "2026-01-15", "approveState": "승인" },
    { "contentId": "2", "contentTitle": "TypeScript 입문", "contentImg": "https://picsum.photos/seed/2/300/200", "contentPreview": "TypeScript의 기본 개념을 배웁니다.", "category": "프론트엔드", "instructorName": "강사1", "studentNumber": 30, "lessonsNumber": 15, "registerDate": "2026-01-15", "approveState": "승인" },
    { "contentId": "3", "contentTitle": "CSS 레이아웃 마스터", "contentImg": "https://picsum.photos/seed/3/300/200", "contentPreview": "Flexbox와 Grid를 완벽히 이해합니다.", "category": "디자인", "instructorName": "강사1", "studentNumber": 60, "lessonsNumber": 12, "registerDate": "2026-01-15", "approveState": "승인" },
    { "contentId": "4", "contentTitle": "Git & GitHub 실전", "contentImg": "https://picsum.photos/seed/4/300/200", "contentPreview": "협업을 위한 Git 워크플로우를 배웁니다.", "category": "프론트엔드", "instructorName": "강사1", "studentNumber": 80, "lessonsNumber": 10, "registerDate": "2026-01-15", "approveState": "승인" },
    { "contentId": "5", "contentTitle": "Node.js 백엔드 입문", "contentImg": "https://picsum.photos/seed/5/300/200", "contentPreview": "Node.js로 서버를 구축하는 방법을 배웁니다.", "category": "백엔드", "instructorName": "강사2", "studentNumber": 55, "lessonsNumber": 25, "registerDate": "2026-01-20", "approveState": "대기" },
    { "contentId": "6", "contentTitle": "Express API 설계", "contentImg": "https://picsum.photos/seed/6/300/200", "contentPreview": "RESTful API를 직접 설계하고 구현합니다.", "category": "백엔드", "instructorName": "강사2", "studentNumber": 40, "lessonsNumber": 18, "registerDate": "2026-01-20", "approveState": "대기" },
    { "contentId": "7", "contentTitle": "MongoDB 완전 정복", "contentImg": "https://picsum.photos/seed/7/300/200", "contentPreview": "NoSQL 데이터베이스의 기초부터 실전까지.", "category": "백엔드", "instructorName": "강사2", "studentNumber": 35, "lessonsNumber": 14, "registerDate": "2026-01-20", "approveState": "대기" },
    { "contentId": "8", "contentTitle": "JWT 인증 구현", "contentImg": "https://picsum.photos/seed/8/300/200", "contentPreview": "안전한 인증 시스템을 구현합니다.", "category": "보안", "instructorName": "강사2", "studentNumber": 28, "lessonsNumber": 8, "registerDate": "2026-01-20", "approveState": "대기" },
    { "contentId": "9", "contentTitle": "Python 데이터 분석", "contentImg": "https://picsum.photos/seed/9/300/200", "contentPreview": "Pandas와 NumPy로 데이터를 분석합니다.", "category": "데이터사이언스", "instructorName": "강사3", "studentNumber": 90, "lessonsNumber": 30, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "10", "contentTitle": "머신러닝 기초", "contentImg": "https://picsum.photos/seed/10/300/200", "contentPreview": "ML 알고리즘의 원리를 쉽게 설명합니다.", "category": "데이터사이언스", "instructorName": "강사3", "studentNumber": 70, "lessonsNumber": 22, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "11", "contentTitle": "데이터 시각화", "contentImg": "https://picsum.photos/seed/11/300/200", "contentPreview": "matplotlib과 seaborn으로 데이터를 시각화합니다.", "category": "데이터사이언스", "instructorName": "강사3", "studentNumber": 50, "lessonsNumber": 16, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "12", "contentTitle": "SQL 완전 정복", "contentImg": "https://picsum.photos/seed/12/300/200", "contentPreview": "관계형 DB의 모든 것을 배웁니다.", "category": "백엔드", "instructorName": "강사3", "studentNumber": 65, "lessonsNumber": 20, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "13", "contentTitle": "알고리즘 기초", "contentImg": "https://picsum.photos/seed/13/300/200", "contentPreview": "코딩테스트를 위한 알고리즘을 배웁니다.", "category": "알고리즘", "instructorName": "강사4", "studentNumber": 75, "lessonsNumber": 28, "registerDate": "2026-02-01", "approveState": "반려" },
    { "contentId": "14", "contentTitle": "자료구조 완성", "contentImg": "https://picsum.photos/seed/14/300/200", "contentPreview": "스택, 큐, 트리를 완전히 이해합니다.", "category": "알고리즘", "instructorName": "강사4", "studentNumber": 60, "lessonsNumber": 24, "registerDate": "2026-02-01", "approveState": "반려" },
    { "contentId": "15", "contentTitle": "동적 프로그래밍", "contentImg": "https://picsum.photos/seed/15/300/200", "contentPreview": "DP 문제를 체계적으로 풀어봅니다.", "category": "알고리즘", "instructorName": "강사4", "studentNumber": 45, "lessonsNumber": 18, "registerDate": "2026-02-01", "approveState": "반려" },
    { "contentId": "16", "contentTitle": "그래프 알고리즘", "contentImg": "https://picsum.photos/seed/16/300/200", "contentPreview": "BFS, DFS부터 최단경로까지 다룹니다.", "category": "알고리즘", "instructorName": "강사4", "studentNumber": 38, "lessonsNumber": 15, "registerDate": "2026-02-01", "approveState": "반려" },
    { "contentId": "17", "contentTitle": "Vue.js 완전 정복", "contentImg": "https://picsum.photos/seed/17/300/200", "contentPreview": "Vue3 Composition API를 마스터합니다.", "category": "프론트엔드", "instructorName": "강사5", "studentNumber": 55, "lessonsNumber": 22, "registerDate": "2026-02-05", "approveState": "승인" },
    { "contentId": "18", "contentTitle": "Vuex 상태 관리", "contentImg": "https://picsum.photos/seed/18/300/200", "contentPreview": "Vuex로 상태 관리를 체계적으로 배웁니다.", "category": "프론트엔드", "instructorName": "강사5", "studentNumber": 40, "lessonsNumber": 14, "registerDate": "2026-02-05", "approveState": "승인" },
    { "contentId": "19", "contentTitle": "Nuxt.js 입문", "contentImg": "https://picsum.photos/seed/19/300/200", "contentPreview": "SSR을 활용한 Nuxt.js 프로젝트를 만듭니다.", "category": "프론트엔드", "instructorName": "강사5", "studentNumber": 30, "lessonsNumber": 18, "registerDate": "2026-02-05", "approveState": "승인" },
    { "contentId": "20", "contentTitle": "Tailwind CSS 실전", "contentImg": "https://picsum.photos/seed/20/300/200", "contentPreview": "Tailwind로 빠르게 UI를 구성합니다.", "category": "디자인", "instructorName": "강사5", "studentNumber": 70, "lessonsNumber": 10, "registerDate": "2026-02-05", "approveState": "승인" },
    { "contentId": "21", "contentTitle": "정보보안 개론", "contentImg": "https://picsum.photos/seed/21/300/200", "contentPreview": "정보보안의 기본 개념을 배웁니다.", "category": "보안", "instructorName": "강사6", "studentNumber": 48, "lessonsNumber": 20, "registerDate": "2026-02-08", "approveState": "승인" },
    { "contentId": "22", "contentTitle": "네트워크 보안", "contentImg": "https://picsum.photos/seed/22/300/200", "contentPreview": "네트워크 취약점과 방어 방법을 배웁니다.", "category": "보안", "instructorName": "강사6", "studentNumber": 35, "lessonsNumber": 16, "registerDate": "2026-02-08", "approveState": "승인" },
    { "contentId": "23", "contentTitle": "웹 해킹 방어", "contentImg": "https://picsum.photos/seed/23/300/200", "contentPreview": "XSS, CSRF 등 웹 공격을 이해하고 방어합니다.", "category": "보안", "instructorName": "강사6", "studentNumber": 42, "lessonsNumber": 18, "registerDate": "2026-02-08", "approveState": "승인" },
    { "contentId": "24", "contentTitle": "암호학 기초", "contentImg": "https://picsum.photos/seed/24/300/200", "contentPreview": "암호화 알고리즘의 원리를 배웁니다.", "category": "보안", "instructorName": "강사6", "studentNumber": 25, "lessonsNumber": 12, "registerDate": "2026-02-08", "approveState": "승인" },
    { "contentId": "25", "contentTitle": "UI/UX 디자인 기초", "contentImg": "https://picsum.photos/seed/25/300/200", "contentPreview": "사용자 중심 디자인의 원칙을 배웁니다.", "category": "디자인", "instructorName": "강사7", "studentNumber": 85, "lessonsNumber": 24, "registerDate": "2026-02-10", "approveState": "대기" },
    { "contentId": "26", "contentTitle": "Figma 완전 정복", "contentImg": "https://picsum.photos/seed/26/300/200", "contentPreview": "Figma로 프로토타입을 제작합니다.", "category": "디자인", "instructorName": "강사7", "studentNumber": 95, "lessonsNumber": 20, "registerDate": "2026-02-10", "approveState": "대기" },
    { "contentId": "27", "contentTitle": "디자인 시스템 구축", "contentImg": "https://picsum.photos/seed/27/300/200", "contentPreview": "일관된 디자인 시스템을 만드는 방법을 배웁니다.", "category": "디자인", "instructorName": "강사7", "studentNumber": 50, "lessonsNumber": 15, "registerDate": "2026-02-10", "approveState": "대기" },
    { "contentId": "28", "contentTitle": "모바일 UI 디자인", "contentImg": "https://picsum.photos/seed/28/300/200", "contentPreview": "모바일 앱 UI 설계의 핵심을 배웁니다.", "category": "디자인", "instructorName": "강사7", "studentNumber": 60, "lessonsNumber": 18, "registerDate": "2026-02-10", "approveState": "대기" },
    { "contentId": "29", "contentTitle": "Django 웹 개발", "contentImg": "https://picsum.photos/seed/29/300/200", "contentPreview": "Python Django로 웹 서비스를 만듭니다.", "category": "백엔드", "instructorName": "강사8", "studentNumber": 58, "lessonsNumber": 26, "registerDate": "2026-02-12", "approveState": "승인" },
    { "contentId": "30", "contentTitle": "FastAPI 입문", "contentImg": "https://picsum.photos/seed/30/300/200", "contentPreview": "FastAPI로 고성능 API를 구축합니다.", "category": "백엔드", "instructorName": "강사8", "studentNumber": 43, "lessonsNumber": 16, "registerDate": "2026-02-12", "approveState": "승인" },
    { "contentId": "31", "contentTitle": "PostgreSQL 실전", "contentImg": "https://picsum.photos/seed/31/300/200", "contentPreview": "PostgreSQL의 고급 기능을 활용합니다.", "category": "백엔드", "instructorName": "강사8", "studentNumber": 37, "lessonsNumber": 14, "registerDate": "2026-02-12", "approveState": "승인" },
    { "contentId": "32", "contentTitle": "Docker 컨테이너", "contentImg": "https://picsum.photos/seed/32/300/200", "contentPreview": "Docker로 개발 환경을 표준화합니다.", "category": "백엔드", "instructorName": "강사8", "studentNumber": 65, "lessonsNumber": 20, "registerDate": "2026-02-12", "approveState": "승인" },
    { "contentId": "33", "contentTitle": "Next.js 풀스택", "contentImg": "https://picsum.photos/seed/33/300/200", "contentPreview": "Next.js로 풀스택 앱을 만듭니다.", "category": "프론트엔드", "instructorName": "강사9", "studentNumber": 88, "lessonsNumber": 30, "registerDate": "2026-02-14", "approveState": "승인" },
    { "contentId": "34", "contentTitle": "React Query 마스터", "contentImg": "https://picsum.photos/seed/34/300/200", "contentPreview": "서버 상태 관리를 효율적으로 합니다.", "category": "프론트엔드", "instructorName": "강사9", "studentNumber": 55, "lessonsNumber": 14, "registerDate": "2026-02-14", "approveState": "승인" },
    { "contentId": "35", "contentTitle": "Zustand 상태 관리", "contentImg": "https://picsum.photos/seed/35/300/200", "contentPreview": "경량 상태 관리 라이브러리를 배웁니다.", "category": "프론트엔드", "instructorName": "강사9", "studentNumber": 40, "lessonsNumber": 10, "registerDate": "2026-02-14", "approveState": "승인" },
    { "contentId": "36", "contentTitle": "Storybook 컴포넌트", "contentImg": "https://picsum.photos/seed/36/300/200", "contentPreview": "Storybook으로 컴포넌트를 관리합니다.", "category": "프론트엔드", "instructorName": "강사9", "studentNumber": 32, "lessonsNumber": 12, "registerDate": "2026-02-14", "approveState": "승인" },
    { "contentId": "37", "contentTitle": "Spring Boot 입문", "contentImg": "https://picsum.photos/seed/37/300/200", "contentPreview": "Java Spring Boot로 API를 만듭니다.", "category": "백엔드", "instructorName": "강사10", "studentNumber": 72, "lessonsNumber": 28, "registerDate": "2026-02-16", "approveState": "반려" },
    { "contentId": "38", "contentTitle": "JPA 완전 정복", "contentImg": "https://picsum.photos/seed/38/300/200", "contentPreview": "ORM을 활용한 데이터베이스 연동을 배웁니다.", "category": "백엔드", "instructorName": "강사10", "studentNumber": 58, "lessonsNumber": 22, "registerDate": "2026-02-16", "approveState": "반려" },
    { "contentId": "39", "contentTitle": "MSA 아키텍처", "contentImg": "https://picsum.photos/seed/39/300/200", "contentPreview": "마이크로서비스 아키텍처를 설계합니다.", "category": "백엔드", "instructorName": "강사10", "studentNumber": 40, "lessonsNumber": 18, "registerDate": "2026-02-16", "approveState": "반려" },
    { "contentId": "40", "contentTitle": "Kubernetes 기초", "contentImg": "https://picsum.photos/seed/40/300/200", "contentPreview": "K8s로 컨테이너를 오케스트레이션합니다.", "category": "백엔드", "instructorName": "강사10", "studentNumber": 33, "lessonsNumber": 15, "registerDate": "2026-02-16", "approveState": "반려" },
    { "contentId": "41", "contentTitle": "딥러닝 입문", "contentImg": "https://picsum.photos/seed/41/300/200", "contentPreview": "신경망의 원리부터 구현까지 배웁니다.", "category": "데이터사이언스", "instructorName": "강사11", "studentNumber": 95, "lessonsNumber": 32, "registerDate": "2026-02-18", "approveState": "승인" },
    { "contentId": "42", "contentTitle": "PyTorch 실전", "contentImg": "https://picsum.photos/seed/42/300/200", "contentPreview": "PyTorch로 딥러닝 모델을 구현합니다.", "category": "데이터사이언스", "instructorName": "강사11", "studentNumber": 78, "lessonsNumber": 25, "registerDate": "2026-02-18", "approveState": "승인" },
    { "contentId": "43", "contentTitle": "컴퓨터 비전", "contentImg": "https://picsum.photos/seed/43/300/200", "contentPreview": "이미지 인식 모델을 만듭니다.", "category": "데이터사이언스", "instructorName": "강사11", "studentNumber": 60, "lessonsNumber": 20, "registerDate": "2026-02-18", "approveState": "승인" },
    { "contentId": "44", "contentTitle": "자연어 처리 NLP", "contentImg": "https://picsum.photos/seed/44/300/200", "contentPreview": "텍스트 분석과 언어 모델을 배웁니다.", "category": "데이터사이언스", "instructorName": "강사11", "studentNumber": 55, "lessonsNumber": 22, "registerDate": "2026-02-18", "approveState": "승인" },
    { "contentId": "45", "contentTitle": "AWS 클라우드 기초", "contentImg": "https://picsum.photos/seed/45/300/200", "contentPreview": "AWS 핵심 서비스를 실습합니다.", "category": "백엔드", "instructorName": "강사12", "studentNumber": 82, "lessonsNumber": 26, "registerDate": "2026-02-20", "approveState": "승인" },
    { "contentId": "46", "contentTitle": "S3 & CloudFront", "contentImg": "https://picsum.photos/seed/46/300/200", "contentPreview": "정적 파일 배포 인프라를 구성합니다.", "category": "백엔드", "instructorName": "강사12", "studentNumber": 60, "lessonsNumber": 12, "registerDate": "2026-02-20", "approveState": "승인" },
    { "contentId": "47", "contentTitle": "Lambda 서버리스", "contentImg": "https://picsum.photos/seed/47/300/200", "contentPreview": "서버리스 아키텍처를 실습합니다.", "category": "백엔드", "instructorName": "강사12", "studentNumber": 45, "lessonsNumber": 14, "registerDate": "2026-02-20", "approveState": "승인" },
    { "contentId": "48", "contentTitle": "CI/CD 파이프라인", "contentImg": "https://picsum.photos/seed/48/300/200", "contentPreview": "자동 배포 파이프라인을 구축합니다.", "category": "백엔드", "instructorName": "강사12", "studentNumber": 50, "lessonsNumber": 16, "registerDate": "2026-02-20", "approveState": "승인" },
    { "contentId": "49", "contentTitle": "코딩테스트 합격 전략", "contentImg": "https://picsum.photos/seed/49/300/200", "contentPreview": "코딩테스트 단골 유형을 정복합니다.", "category": "알고리즘", "instructorName": "강사13", "studentNumber": 100, "lessonsNumber": 35, "registerDate": "2026-02-22", "approveState": "대기" },
    { "contentId": "50", "contentTitle": "정렬 알고리즘", "contentImg": "https://picsum.photos/seed/50/300/200", "contentPreview": "주요 정렬 알고리즘을 비교 분석합니다.", "category": "알고리즘", "instructorName": "강사13", "studentNumber": 70, "lessonsNumber": 14, "registerDate": "2026-02-22", "approveState": "대기" },
    { "contentId": "51", "contentTitle": "트리와 그래프", "contentImg": "https://picsum.photos/seed/51/300/200", "contentPreview": "트리와 그래프 문제를 집중 훈련합니다.", "category": "알고리즘", "instructorName": "강사13", "studentNumber": 65, "lessonsNumber": 18, "registerDate": "2026-02-22", "approveState": "대기" },
    { "contentId": "52", "contentTitle": "구현 & 시뮬레이션", "contentImg": "https://picsum.photos/seed/52/300/200", "contentPreview": "구현 문제 풀이 전략을 배웁니다.", "category": "알고리즘", "instructorName": "강사13", "studentNumber": 55, "lessonsNumber": 16, "registerDate": "2026-02-22", "approveState": "대기" },
    { "contentId": "53", "contentTitle": "React Native 앱 개발", "contentImg": "https://picsum.photos/seed/53/300/200", "contentPreview": "크로스플랫폼 앱을 React Native로 만듭니다.", "category": "프론트엔드", "instructorName": "강사14", "studentNumber": 68, "lessonsNumber": 28, "registerDate": "2026-02-24", "approveState": "승인" },
    { "contentId": "54", "contentTitle": "Flutter 입문", "contentImg": "https://picsum.photos/seed/54/300/200", "contentPreview": "Flutter로 아름다운 앱을 만듭니다.", "category": "프론트엔드", "instructorName": "강사14", "studentNumber": 52, "lessonsNumber": 22, "registerDate": "2026-02-24", "approveState": "승인" },
    { "contentId": "55", "contentTitle": "앱 성능 최적화", "contentImg": "https://picsum.photos/seed/55/300/200", "contentPreview": "모바일 앱 성능을 향상시킵니다.", "category": "프론트엔드", "instructorName": "강사14", "studentNumber": 38, "lessonsNumber": 14, "registerDate": "2026-02-24", "approveState": "승인" },
    { "contentId": "56", "contentTitle": "앱 스토어 배포", "contentImg": "https://picsum.photos/seed/56/300/200", "contentPreview": "앱을 마켓에 배포하는 방법을 배웁니다.", "category": "프론트엔드", "instructorName": "강사14", "studentNumber": 44, "lessonsNumber": 10, "registerDate": "2026-02-24", "approveState": "승인" },
    { "contentId": "57", "contentTitle": "블록체인 기초", "contentImg": "https://picsum.photos/seed/57/300/200", "contentPreview": "블록체인 기술의 원리를 배웁니다.", "category": "보안", "instructorName": "강사15", "studentNumber": 42, "lessonsNumber": 20, "registerDate": "2026-02-26", "approveState": "승인" },
    { "contentId": "58", "contentTitle": "스마트 컨트랙트", "contentImg": "https://picsum.photos/seed/58/300/200", "contentPreview": "Solidity로 스마트 컨트랙트를 작성합니다.", "category": "보안", "instructorName": "강사15", "studentNumber": 30, "lessonsNumber": 16, "registerDate": "2026-02-26", "approveState": "승인" },
    { "contentId": "59", "contentTitle": "Web3.js 실전", "contentImg": "https://picsum.photos/seed/59/300/200", "contentPreview": "Web3.js로 DApp을 개발합니다.", "category": "프론트엔드", "instructorName": "강사15", "studentNumber": 25, "lessonsNumber": 14, "registerDate": "2026-02-26", "approveState": "승인" },
    { "contentId": "60", "contentTitle": "NFT 마켓 개발", "contentImg": "https://picsum.photos/seed/60/300/200", "contentPreview": "NFT 마켓플레이스를 직접 구현합니다.", "category": "프론트엔드", "instructorName": "강사15", "studentNumber": 20, "lessonsNumber": 18, "registerDate": "2026-02-26", "approveState": "승인" },
    { "contentId": "61", "contentTitle": "운영체제 기초", "contentImg": "https://picsum.photos/seed/61/300/200", "contentPreview": "OS의 핵심 개념을 쉽게 배웁니다.", "category": "알고리즘", "instructorName": "강사16", "studentNumber": 55, "lessonsNumber": 24, "registerDate": "2026-03-01", "approveState": "승인" },
    { "contentId": "62", "contentTitle": "네트워크 프로그래밍", "contentImg": "https://picsum.photos/seed/62/300/200", "contentPreview": "소켓 통신과 네트워크 프로그래밍을 배웁니다.", "category": "백엔드", "instructorName": "강사16", "studentNumber": 44, "lessonsNumber": 20, "registerDate": "2026-03-01", "approveState": "승인" },
    { "contentId": "63", "contentTitle": "리눅스 명령어 완성", "contentImg": "https://picsum.photos/seed/63/300/200", "contentPreview": "리눅스 환경에서 개발하는 법을 배웁니다.", "category": "백엔드", "instructorName": "강사16", "studentNumber": 70, "lessonsNumber": 15, "registerDate": "2026-03-01", "approveState": "승인" },
    { "contentId": "64", "contentTitle": "쉘 스크립트 자동화", "contentImg": "https://picsum.photos/seed/64/300/200", "contentPreview": "반복 작업을 쉘 스크립트로 자동화합니다.", "category": "백엔드", "instructorName": "강사16", "studentNumber": 38, "lessonsNumber": 12, "registerDate": "2026-03-01", "approveState": "승인" },
    { "contentId": "65", "contentTitle": "Sass & SCSS 마스터", "contentImg": "https://picsum.photos/seed/65/300/200", "contentPreview": "CSS 전처리기를 활용한 스타일링을 배웁니다.", "category": "디자인", "instructorName": "강사17", "studentNumber": 48, "lessonsNumber": 14, "registerDate": "2026-03-03", "approveState": "반려" },
    { "contentId": "66", "contentTitle": "애니메이션 CSS", "contentImg": "https://picsum.photos/seed/66/300/200", "contentPreview": "CSS 애니메이션으로 생동감 있는 UI를 만듭니다.", "category": "디자인", "instructorName": "강사17", "studentNumber": 62, "lessonsNumber": 12, "registerDate": "2026-03-03", "approveState": "반려" },
    { "contentId": "67", "contentTitle": "반응형 웹 디자인", "contentImg": "https://picsum.photos/seed/67/300/200", "contentPreview": "모든 기기에서 잘 보이는 웹을 만듭니다.", "category": "디자인", "instructorName": "강사17", "studentNumber": 85, "lessonsNumber": 16, "registerDate": "2026-03-03", "approveState": "반려" },
    { "contentId": "68", "contentTitle": "웹 접근성", "contentImg": "https://picsum.photos/seed/68/300/200", "contentPreview": "모든 사용자를 위한 접근성 있는 웹을 배웁니다.", "category": "디자인", "instructorName": "강사17", "studentNumber": 30, "lessonsNumber": 10, "registerDate": "2026-03-03", "approveState": "반려" },
    { "contentId": "69", "contentTitle": "GraphQL 입문", "contentImg": "https://picsum.photos/seed/69/300/200", "contentPreview": "GraphQL로 유연한 API를 설계합니다.", "category": "백엔드", "instructorName": "강사18", "studentNumber": 47, "lessonsNumber": 18, "registerDate": "2026-03-05", "approveState": "승인" },
    { "contentId": "70", "contentTitle": "Apollo Client", "contentImg": "https://picsum.photos/seed/70/300/200", "contentPreview": "Apollo로 GraphQL 클라이언트를 구성합니다.", "category": "프론트엔드", "instructorName": "강사18", "studentNumber": 35, "lessonsNumber": 14, "registerDate": "2026-03-05", "approveState": "승인" },
    { "contentId": "71", "contentTitle": "Redis 캐싱 전략", "contentImg": "https://picsum.photos/seed/71/300/200", "contentPreview": "Redis로 성능을 극대화합니다.", "category": "백엔드", "instructorName": "강사18", "studentNumber": 40, "lessonsNumber": 12, "registerDate": "2026-03-05", "approveState": "승인" },
    { "contentId": "72", "contentTitle": "WebSocket 실시간 통신", "contentImg": "https://picsum.photos/seed/72/300/200", "contentPreview": "WebSocket으로 실시간 기능을 구현합니다.", "category": "백엔드", "instructorName": "강사18", "studentNumber": 55, "lessonsNumber": 16, "registerDate": "2026-03-05", "approveState": "승인" },
    { "contentId": "73", "contentTitle": "통계 기초", "contentImg": "https://picsum.photos/seed/73/300/200", "contentPreview": "데이터 분석을 위한 통계를 배웁니다.", "category": "데이터사이언스", "instructorName": "강사19", "studentNumber": 60, "lessonsNumber": 20, "registerDate": "2026-03-07", "approveState": "승인" },
    { "contentId": "74", "contentTitle": "R 데이터 분석", "contentImg": "https://picsum.photos/seed/74/300/200", "contentPreview": "R 언어로 데이터를 분석합니다.", "category": "데이터사이언스", "instructorName": "강사19", "studentNumber": 45, "lessonsNumber": 18, "registerDate": "2026-03-07", "approveState": "승인" },
    { "contentId": "75", "contentTitle": "A/B 테스트 설계", "contentImg": "https://picsum.photos/seed/75/300/200", "contentPreview": "실험 설계와 가설 검증 방법을 배웁니다.", "category": "데이터사이언스", "instructorName": "강사19", "studentNumber": 35, "lessonsNumber": 14, "registerDate": "2026-03-07", "approveState": "승인" },
    { "contentId": "76", "contentTitle": "BI 대시보드 구축", "contentImg": "https://picsum.photos/seed/76/300/200", "contentPreview": "데이터 대시보드를 직접 만들어봅니다.", "category": "데이터사이언스", "instructorName": "강사19", "studentNumber": 40, "lessonsNumber": 12, "registerDate": "2026-03-07", "approveState": "승인" },
    { "contentId": "77", "contentTitle": "Svelte 입문", "contentImg": "https://picsum.photos/seed/77/300/200", "contentPreview": "차세대 프레임워크 Svelte를 배웁니다.", "category": "프론트엔드", "instructorName": "강사20", "studentNumber": 38, "lessonsNumber": 16, "registerDate": "2026-03-09", "approveState": "대기" },
    { "contentId": "78", "contentTitle": "SvelteKit 풀스택", "contentImg": "https://picsum.photos/seed/78/300/200", "contentPreview": "SvelteKit으로 풀스택 앱을 만듭니다.", "category": "프론트엔드", "instructorName": "강사20", "studentNumber": 28, "lessonsNumber": 20, "registerDate": "2026-03-09", "approveState": "대기" },
    { "contentId": "79", "contentTitle": "Vite 빌드 최적화", "contentImg": "https://picsum.photos/seed/79/300/200", "contentPreview": "Vite로 빌드 속도를 극대화합니다.", "category": "프론트엔드", "instructorName": "강사20", "studentNumber": 45, "lessonsNumber": 10, "registerDate": "2026-03-09", "approveState": "대기" },
    { "contentId": "80", "contentTitle": "웹 성능 최적화", "contentImg": "https://picsum.photos/seed/80/300/200", "contentPreview": "Core Web Vitals를 개선하는 방법을 배웁니다.", "category": "프론트엔드", "instructorName": "강사20", "studentNumber": 55, "lessonsNumber": 14, "registerDate": "2026-03-09", "approveState": "대기" },
    { "contentId": "81", "contentTitle": "Rust 프로그래밍", "contentImg": "https://picsum.photos/seed/81/300/200", "contentPreview": "안전하고 빠른 Rust 언어를 배웁니다.", "category": "백엔드", "instructorName": "강사21", "studentNumber": 33, "lessonsNumber": 28, "registerDate": "2026-03-10", "approveState": "승인" },
    { "contentId": "82", "contentTitle": "Go 언어 입문", "contentImg": "https://picsum.photos/seed/82/300/200", "contentPreview": "Google의 Go 언어로 서버를 만듭니다.", "category": "백엔드", "instructorName": "강사21", "studentNumber": 42, "lessonsNumber": 22, "registerDate": "2026-03-10", "approveState": "승인" },
    { "contentId": "83", "contentTitle": "Kotlin 안드로이드", "contentImg": "https://picsum.photos/seed/83/300/200", "contentPreview": "Kotlin으로 안드로이드 앱을 개발합니다.", "category": "프론트엔드", "instructorName": "강사21", "studentNumber": 50, "lessonsNumber": 26, "registerDate": "2026-03-10", "approveState": "승인" },
    { "contentId": "84", "contentTitle": "Swift iOS 개발", "contentImg": "https://picsum.photos/seed/84/300/200", "contentPreview": "Swift로 iPhone 앱을 만듭니다.", "category": "프론트엔드", "instructorName": "강사21", "studentNumber": 38, "lessonsNumber": 24, "registerDate": "2026-03-10", "approveState": "승인" },
    { "contentId": "85", "contentTitle": "C++ 기초", "contentImg": "https://picsum.photos/seed/85/300/200", "contentPreview": "C++의 기본 문법과 포인터를 배웁니다.", "category": "알고리즘", "instructorName": "강사22", "studentNumber": 48, "lessonsNumber": 30, "registerDate": "2026-03-11", "approveState": "승인" },
    { "contentId": "86", "contentTitle": "C++ STL 활용", "contentImg": "https://picsum.photos/seed/86/300/200", "contentPreview": "표준 라이브러리로 효율적인 코딩을 합니다.", "category": "알고리즘", "instructorName": "강사22", "studentNumber": 40, "lessonsNumber": 18, "registerDate": "2026-03-11", "approveState": "승인" },
    { "contentId": "87", "contentTitle": "게임 개발 기초", "contentImg": "https://picsum.photos/seed/87/300/200", "contentPreview": "Unity로 게임을 처음부터 만들어봅니다.", "category": "프론트엔드", "instructorName": "강사22", "studentNumber": 75, "lessonsNumber": 24, "registerDate": "2026-03-11", "approveState": "승인" },
    { "contentId": "88", "contentTitle": "Unreal Engine 5", "contentImg": "https://picsum.photos/seed/88/300/200", "contentPreview": "Unreal Engine으로 3D 게임을 제작합니다.", "category": "프론트엔드", "instructorName": "강사22", "studentNumber": 55, "lessonsNumber": 28, "registerDate": "2026-03-11", "approveState": "승인" },
    { "contentId": "89", "contentTitle": "클라우드 보안", "contentImg": "https://picsum.photos/seed/89/300/200", "contentPreview": "클라우드 환경에서 보안을 강화합니다.", "category": "보안", "instructorName": "강사23", "studentNumber": 36, "lessonsNumber": 18, "registerDate": "2026-03-12", "approveState": "대기" },
    { "contentId": "90", "contentTitle": "침투 테스트 기초", "contentImg": "https://picsum.photos/seed/90/300/200", "contentPreview": "윤리적 해킹의 기초를 배웁니다.", "category": "보안", "instructorName": "강사23", "studentNumber": 28, "lessonsNumber": 20, "registerDate": "2026-03-12", "approveState": "대기" },
    { "contentId": "91", "contentTitle": "리버스 엔지니어링", "contentImg": "https://picsum.photos/seed/91/300/200", "contentPreview": "바이너리 분석 기법을 배웁니다.", "category": "보안", "instructorName": "강사23", "studentNumber": 22, "lessonsNumber": 16, "registerDate": "2026-03-12", "approveState": "대기" },
    { "contentId": "92", "contentTitle": "포렌식 기초", "contentImg": "https://picsum.photos/seed/92/300/200", "contentPreview": "디지털 포렌식 기술을 배웁니다.", "category": "보안", "instructorName": "강사23", "studentNumber": 18, "lessonsNumber": 14, "registerDate": "2026-03-12", "approveState": "대기" },
    { "contentId": "93", "contentTitle": "Electron 데스크톱 앱", "contentImg": "https://picsum.photos/seed/93/300/200", "contentPreview": "Electron으로 데스크톱 앱을 만듭니다.", "category": "프론트엔드", "instructorName": "강사24", "studentNumber": 32, "lessonsNumber": 18, "registerDate": "2026-03-13", "approveState": "승인" },
    { "contentId": "94", "contentTitle": "Tauri 앱 개발", "contentImg": "https://picsum.photos/seed/94/300/200", "contentPreview": "Rust 기반 Tauri로 경량 앱을 만듭니다.", "category": "프론트엔드", "instructorName": "강사24", "studentNumber": 20, "lessonsNumber": 14, "registerDate": "2026-03-13", "approveState": "승인" },
    { "contentId": "95", "contentTitle": "PWA 프로그레시브 웹앱", "contentImg": "https://picsum.photos/seed/95/300/200", "contentPreview": "PWA로 앱 같은 웹 경험을 만듭니다.", "category": "프론트엔드", "instructorName": "강사24", "studentNumber": 45, "lessonsNumber": 12, "registerDate": "2026-03-13", "approveState": "승인" },
    { "contentId": "96", "contentTitle": "WebAssembly 기초", "contentImg": "https://picsum.photos/seed/96/300/200", "contentPreview": "WebAssembly로 웹의 한계를 넘습니다.", "category": "프론트엔드", "instructorName": "강사24", "studentNumber": 18, "lessonsNumber": 10, "registerDate": "2026-03-13", "approveState": "승인" },
    { "contentId": "97", "contentTitle": "강화학습 입문", "contentImg": "https://picsum.photos/seed/97/300/200", "contentPreview": "RL 에이전트를 직접 구현합니다.", "category": "데이터사이언스", "instructorName": "강사25", "studentNumber": 40, "lessonsNumber": 22, "registerDate": "2026-03-14", "approveState": "승인" },
    { "contentId": "98", "contentTitle": "시계열 분석", "contentImg": "https://picsum.photos/seed/98/300/200", "contentPreview": "시계열 데이터를 분석하고 예측합니다.", "category": "데이터사이언스", "instructorName": "강사25", "studentNumber": 35, "lessonsNumber": 18, "registerDate": "2026-03-14", "approveState": "승인" },
    { "contentId": "99", "contentTitle": "추천 시스템 구현", "contentImg": "https://picsum.photos/seed/99/300/200", "contentPreview": "협업 필터링으로 추천 시스템을 만듭니다.", "category": "데이터사이언스", "instructorName": "강사25", "studentNumber": 48, "lessonsNumber": 20, "registerDate": "2026-03-14", "approveState": "승인" },
    { "contentId": "100", "contentTitle": "빅데이터 처리", "contentImg": "https://picsum.photos/seed/100/300/200", "contentPreview": "Spark로 대용량 데이터를 처리합니다.", "category": "데이터사이언스", "instructorName": "강사25", "studentNumber": 38, "lessonsNumber": 16, "registerDate": "2026-03-14", "approveState": "승인" },
    { "contentId": "101", "contentTitle": "TDD 테스트 주도 개발", "contentImg": "https://picsum.photos/seed/101/300/200", "contentPreview": "테스트 먼저 작성하는 개발 방식을 배웁니다.", "category": "백엔드", "instructorName": "강사26", "studentNumber": 44, "lessonsNumber": 18, "registerDate": "2026-03-15", "approveState": "반려" },
    { "contentId": "102", "contentTitle": "Jest 단위 테스트", "contentImg": "https://picsum.photos/seed/102/300/200", "contentPreview": "Jest로 안정적인 코드를 만듭니다.", "category": "프론트엔드", "instructorName": "강사26", "studentNumber": 38, "lessonsNumber": 14, "registerDate": "2026-03-15", "approveState": "반려" },
    { "contentId": "103", "contentTitle": "Cypress E2E 테스트", "contentImg": "https://picsum.photos/seed/103/300/200", "contentPreview": "Cypress로 E2E 테스트를 작성합니다.", "category": "프론트엔드", "instructorName": "강사26", "studentNumber": 30, "lessonsNumber": 12, "registerDate": "2026-03-15", "approveState": "반려" },
    { "contentId": "104", "contentTitle": "클린 코드 작성법", "contentImg": "https://picsum.photos/seed/104/300/200", "contentPreview": "읽기 좋고 유지보수하기 쉬운 코드를 씁니다.", "category": "알고리즘", "instructorName": "강사26", "studentNumber": 65, "lessonsNumber": 16, "registerDate": "2026-03-15", "approveState": "반려" },
    { "contentId": "105", "contentTitle": "디자인 패턴 입문", "contentImg": "https://picsum.photos/seed/105/300/200", "contentPreview": "GoF 디자인 패턴을 실무에 적용합니다.", "category": "알고리즘", "instructorName": "강사27", "studentNumber": 58, "lessonsNumber": 22, "registerDate": "2026-03-16", "approveState": "승인" },
    { "contentId": "106", "contentTitle": "SOLID 원칙", "contentImg": "https://picsum.photos/seed/106/300/200", "contentPreview": "객체지향 설계 원칙을 배웁니다.", "category": "알고리즘", "instructorName": "강사27", "studentNumber": 50, "lessonsNumber": 14, "registerDate": "2026-03-16", "approveState": "승인" },
    { "contentId": "107", "contentTitle": "DDD 도메인 주도 설계", "contentImg": "https://picsum.photos/seed/107/300/200", "contentPreview": "도메인 중심으로 소프트웨어를 설계합니다.", "category": "백엔드", "instructorName": "강사27", "studentNumber": 35, "lessonsNumber": 20, "registerDate": "2026-03-16", "approveState": "승인" },
    { "contentId": "108", "contentTitle": "리팩토링 기법", "contentImg": "https://picsum.photos/seed/108/300/200", "contentPreview": "기존 코드를 안전하게 개선하는 방법을 배웁니다.", "category": "알고리즘", "instructorName": "강사27", "studentNumber": 45, "lessonsNumber": 16, "registerDate": "2026-03-16", "approveState": "승인" },
    { "contentId": "109", "contentTitle": "Angular 입문", "contentImg": "https://picsum.photos/seed/109/300/200", "contentPreview": "Angular 프레임워크의 핵심을 배웁니다.", "category": "프론트엔드", "instructorName": "강사28", "studentNumber": 42, "lessonsNumber": 24, "registerDate": "2026-03-17", "approveState": "승인" },
    { "contentId": "110", "contentTitle": "RxJS 리액티브 프로그래밍", "contentImg": "https://picsum.photos/seed/110/300/200", "contentPreview": "RxJS로 비동기 데이터 흐름을 관리합니다.", "category": "프론트엔드", "instructorName": "강사28", "studentNumber": 30, "lessonsNumber": 18, "registerDate": "2026-03-17", "approveState": "승인" },
    { "contentId": "111", "contentTitle": "NgRx 상태 관리", "contentImg": "https://picsum.photos/seed/111/300/200", "contentPreview": "NgRx로 Angular 앱의 상태를 관리합니다.", "category": "프론트엔드", "instructorName": "강사28", "studentNumber": 25, "lessonsNumber": 14, "registerDate": "2026-03-17", "approveState": "승인" },
    { "contentId": "112", "contentTitle": "Angular Material UI", "contentImg": "https://picsum.photos/seed/112/300/200", "contentPreview": "Material Design을 Angular에 적용합니다.", "category": "디자인", "instructorName": "강사28", "studentNumber": 38, "lessonsNumber": 10, "registerDate": "2026-03-17", "approveState": "승인" },
    { "contentId": "113", "contentTitle": "Prometheus 모니터링", "contentImg": "https://picsum.photos/seed/113/300/200", "contentPreview": "시스템 메트릭을 수집하고 모니터링합니다.", "category": "백엔드", "instructorName": "강사29", "studentNumber": 30, "lessonsNumber": 14, "registerDate": "2026-03-18", "approveState": "대기" },
    { "contentId": "114", "contentTitle": "Grafana 대시보드", "contentImg": "https://picsum.photos/seed/114/300/200", "contentPreview": "Grafana로 시각적인 모니터링 환경을 구축합니다.", "category": "백엔드", "instructorName": "강사29", "studentNumber": 28, "lessonsNumber": 12, "registerDate": "2026-03-18", "approveState": "대기" },
    { "contentId": "115", "contentTitle": "ELK 스택 로깅", "contentImg": "https://picsum.photos/seed/115/300/200", "contentPreview": "Elasticsearch로 로그를 분석합니다.", "category": "백엔드", "instructorName": "강사29", "studentNumber": 22, "lessonsNumber": 16, "registerDate": "2026-03-18", "approveState": "대기" },
    { "contentId": "116", "contentTitle": "Terraform IaC", "contentImg": "https://picsum.photos/seed/116/300/200", "contentPreview": "코드로 인프라를 관리하는 방법을 배웁니다.", "category": "백엔드", "instructorName": "강사29", "studentNumber": 25, "lessonsNumber": 14, "registerDate": "2026-03-18", "approveState": "대기" },
    { "contentId": "117", "contentTitle": "SQL 튜닝", "contentImg": "https://picsum.photos/seed/117/300/200", "contentPreview": "쿼리 성능을 극적으로 향상시킵니다.", "category": "백엔드", "instructorName": "강사30", "studentNumber": 55, "lessonsNumber": 20, "registerDate": "2026-03-19", "approveState": "승인" },
    { "contentId": "118", "contentTitle": "인덱스 설계 전략", "contentImg": "https://picsum.photos/seed/118/300/200", "contentPreview": "올바른 인덱스 설계로 DB를 최적화합니다.", "category": "백엔드", "instructorName": "강사30", "studentNumber": 42, "lessonsNumber": 14, "registerDate": "2026-03-19", "approveState": "승인" },
    { "contentId": "119", "contentTitle": "트랜잭션 관리", "contentImg": "https://picsum.photos/seed/119/300/200", "contentPreview": "데이터 무결성을 보장하는 방법을 배웁니다.", "category": "백엔드", "instructorName": "강사30", "studentNumber": 38, "lessonsNumber": 12, "registerDate": "2026-03-19", "approveState": "승인" },
    { "contentId": "120", "contentTitle": "NoSQL vs SQL", "contentImg": "https://picsum.photos/seed/120/300/200", "contentPreview": "상황에 맞는 DB를 선택하는 기준을 배웁니다.", "category": "백엔드", "instructorName": "강사30", "studentNumber": 60, "lessonsNumber": 10, "registerDate": "2026-03-19", "approveState": "승인" },
    { "contentId": "121", "contentTitle": "Java 객체지향 프로그래밍", "contentImg": "https://picsum.photos/seed/121/300/200", "contentPreview": "Java로 객체지향 프로그래밍을 배웁니다.", "category": "백엔드", "instructorName": "강사31", "studentNumber": 65, "lessonsNumber": 26, "registerDate": "2026-01-05", "approveState": "승인" },
    { "contentId": "122", "contentTitle": "Java 멀티스레딩", "contentImg": "https://picsum.photos/seed/122/300/200", "contentPreview": "동시성 프로그래밍의 핵심을 이해합니다.", "category": "백엔드", "instructorName": "강사31", "studentNumber": 45, "lessonsNumber": 18, "registerDate": "2026-01-05", "approveState": "승인" },
    { "contentId": "123", "contentTitle": "Java 스트림 API", "contentImg": "https://picsum.photos/seed/123/300/200", "contentPreview": "함수형 프로그래밍을 Java에서 배웁니다.", "category": "백엔드", "instructorName": "강사31", "studentNumber": 50, "lessonsNumber": 14, "registerDate": "2026-01-05", "approveState": "승인" },
    { "contentId": "124", "contentTitle": "Java 디자인 패턴", "contentImg": "https://picsum.photos/seed/124/300/200", "contentPreview": "Java로 디자인 패턴을 구현합니다.", "category": "알고리즘", "instructorName": "강사31", "studentNumber": 40, "lessonsNumber": 20, "registerDate": "2026-01-05", "approveState": "승인" },
    { "contentId": "125", "contentTitle": "Three.js 3D 웹", "contentImg": "https://picsum.photos/seed/125/300/200", "contentPreview": "Three.js로 3D 웹 경험을 만듭니다.", "category": "프론트엔드", "instructorName": "강사32", "studentNumber": 42, "lessonsNumber": 22, "registerDate": "2026-01-08", "approveState": "대기" },
    { "contentId": "126", "contentTitle": "WebGL 입문", "contentImg": "https://picsum.photos/seed/126/300/200", "contentPreview": "WebGL로 GPU 기반 그래픽을 구현합니다.", "category": "프론트엔드", "instructorName": "강사32", "studentNumber": 25, "lessonsNumber": 18, "registerDate": "2026-01-08", "approveState": "대기" },
    { "contentId": "127", "contentTitle": "Canvas API 활용", "contentImg": "https://picsum.photos/seed/127/300/200", "contentPreview": "Canvas로 인터랙티브 그래픽을 만듭니다.", "category": "프론트엔드", "instructorName": "강사32", "studentNumber": 38, "lessonsNumber": 14, "registerDate": "2026-01-08", "approveState": "대기" },
    { "contentId": "128", "contentTitle": "SVG 애니메이션", "contentImg": "https://picsum.photos/seed/128/300/200", "contentPreview": "SVG로 아름다운 애니메이션을 제작합니다.", "category": "디자인", "instructorName": "강사32", "studentNumber": 45, "lessonsNumber": 12, "registerDate": "2026-01-08", "approveState": "대기" },
    { "contentId": "129", "contentTitle": "사이버보안 실무", "contentImg": "https://picsum.photos/seed/129/300/200", "contentPreview": "실무에서 필요한 보안 기술을 배웁니다.", "category": "보안", "instructorName": "강사33", "studentNumber": 50, "lessonsNumber": 24, "registerDate": "2026-01-11", "approveState": "승인" },
    { "contentId": "130", "contentTitle": "OWASP Top 10", "contentImg": "https://picsum.photos/seed/130/300/200", "contentPreview": "웹 보안 취약점 Top 10을 분석합니다.", "category": "보안", "instructorName": "강사33", "studentNumber": 44, "lessonsNumber": 16, "registerDate": "2026-01-11", "approveState": "승인" },
    { "contentId": "131", "contentTitle": "버그 바운티 입문", "contentImg": "https://picsum.photos/seed/131/300/200", "contentPreview": "버그 바운티 헌팅 방법을 배웁니다.", "category": "보안", "instructorName": "강사33", "studentNumber": 30, "lessonsNumber": 14, "registerDate": "2026-01-11", "approveState": "승인" },
    { "contentId": "132", "contentTitle": "보안 코딩 가이드", "contentImg": "https://picsum.photos/seed/132/300/200", "contentPreview": "안전한 코드를 작성하는 방법을 배웁니다.", "category": "보안", "instructorName": "강사33", "studentNumber": 48, "lessonsNumber": 18, "registerDate": "2026-01-11", "approveState": "승인" },
    { "contentId": "133", "contentTitle": "Webpack 설정 마스터", "contentImg": "https://picsum.photos/seed/133/300/200", "contentPreview": "Webpack으로 빌드 환경을 최적화합니다.", "category": "프론트엔드", "instructorName": "강사34", "studentNumber": 40, "lessonsNumber": 16, "registerDate": "2026-01-14", "approveState": "반려" },
    { "contentId": "134", "contentTitle": "Babel 트랜스파일링", "contentImg": "https://picsum.photos/seed/134/300/200", "contentPreview": "Babel로 최신 JS를 호환 가능하게 변환합니다.", "category": "프론트엔드", "instructorName": "강사34", "studentNumber": 30, "lessonsNumber": 10, "registerDate": "2026-01-14", "approveState": "반려" },
    { "contentId": "135", "contentTitle": "ESLint & Prettier", "contentImg": "https://picsum.photos/seed/135/300/200", "contentPreview": "코드 품질 도구를 세팅하는 방법을 배웁니다.", "category": "프론트엔드", "instructorName": "강사34", "studentNumber": 55, "lessonsNumber": 8, "registerDate": "2026-01-14", "approveState": "반려" },
    { "contentId": "136", "contentTitle": "모노레포 구성", "contentImg": "https://picsum.photos/seed/136/300/200", "contentPreview": "Turborepo로 모노레포 환경을 구성합니다.", "category": "프론트엔드", "instructorName": "강사34", "studentNumber": 28, "lessonsNumber": 14, "registerDate": "2026-01-14", "approveState": "반려" },
    { "contentId": "137", "contentTitle": "Generative AI 활용", "contentImg": "https://picsum.photos/seed/137/300/200", "contentPreview": "ChatGPT API를 활용한 서비스를 만듭니다.", "category": "데이터사이언스", "instructorName": "강사35", "studentNumber": 95, "lessonsNumber": 20, "registerDate": "2026-01-17", "approveState": "승인" },
    { "contentId": "138", "contentTitle": "LangChain 실전", "contentImg": "https://picsum.photos/seed/138/300/200", "contentPreview": "LangChain으로 LLM 앱을 개발합니다.", "category": "데이터사이언스", "instructorName": "강사35", "studentNumber": 80, "lessonsNumber": 18, "registerDate": "2026-01-17", "approveState": "승인" },
    { "contentId": "139", "contentTitle": "프롬프트 엔지니어링", "contentImg": "https://picsum.photos/seed/139/300/200", "contentPreview": "AI를 잘 다루는 프롬프트 기법을 배웁니다.", "category": "데이터사이언스", "instructorName": "강사35", "studentNumber": 100, "lessonsNumber": 12, "registerDate": "2026-01-17", "approveState": "승인" },
    { "contentId": "140", "contentTitle": "RAG 시스템 구축", "contentImg": "https://picsum.photos/seed/140/300/200", "contentPreview": "검색 증강 생성 시스템을 구현합니다.", "category": "데이터사이언스", "instructorName": "강사35", "studentNumber": 65, "lessonsNumber": 16, "registerDate": "2026-01-17", "approveState": "승인" },
    { "contentId": "141", "contentTitle": "GitHub Actions 자동화", "contentImg": "https://picsum.photos/seed/141/300/200", "contentPreview": "CI/CD를 GitHub Actions로 구성합니다.", "category": "백엔드", "instructorName": "강사36", "studentNumber": 60, "lessonsNumber": 14, "registerDate": "2026-01-19", "approveState": "승인" },
    { "contentId": "142", "contentTitle": "Notion API 활용", "contentImg": "https://picsum.photos/seed/142/300/200", "contentPreview": "Notion API로 자동화 워크플로우를 만듭니다.", "category": "백엔드", "instructorName": "강사36", "studentNumber": 45, "lessonsNumber": 10, "registerDate": "2026-01-19", "approveState": "승인" },
    { "contentId": "143", "contentTitle": "Slack Bot 개발", "contentImg": "https://picsum.photos/seed/143/300/200", "contentPreview": "Slack API로 업무 자동화 봇을 만듭니다.", "category": "백엔드", "instructorName": "강사36", "studentNumber": 38, "lessonsNumber": 12, "registerDate": "2026-01-19", "approveState": "승인" },
    { "contentId": "144", "contentTitle": "Zapier 업무 자동화", "contentImg": "https://picsum.photos/seed/144/300/200", "contentPreview": "노코드로 업무를 자동화하는 법을 배웁니다.", "category": "백엔드", "instructorName": "강사36", "studentNumber": 52, "lessonsNumber": 8, "registerDate": "2026-01-19", "approveState": "승인" },
    { "contentId": "145", "contentTitle": "게임 수학 기초", "contentImg": "https://picsum.photos/seed/145/300/200", "contentPreview": "게임 개발에 필요한 수학을 배웁니다.", "category": "알고리즘", "instructorName": "강사37", "studentNumber": 35, "lessonsNumber": 20, "registerDate": "2026-01-22", "approveState": "대기" },
    { "contentId": "146", "contentTitle": "물리 시뮬레이션", "contentImg": "https://picsum.photos/seed/146/300/200", "contentPreview": "현실적인 물리 효과를 구현합니다.", "category": "알고리즘", "instructorName": "강사37", "studentNumber": 28, "lessonsNumber": 18, "registerDate": "2026-01-22", "approveState": "대기" },
    { "contentId": "147", "contentTitle": "AI 게임 NPC", "contentImg": "https://picsum.photos/seed/147/300/200", "contentPreview": "지능적인 NPC를 프로그래밍합니다.", "category": "데이터사이언스", "instructorName": "강사37", "studentNumber": 42, "lessonsNumber": 16, "registerDate": "2026-01-22", "approveState": "대기" },
    { "contentId": "148", "contentTitle": "절차적 생성 알고리즘", "contentImg": "https://picsum.photos/seed/148/300/200", "contentPreview": "알고리즘으로 게임 콘텐츠를 자동 생성합니다.", "category": "알고리즘", "instructorName": "강사37", "studentNumber": 30, "lessonsNumber": 14, "registerDate": "2026-01-22", "approveState": "대기" },
    { "contentId": "149", "contentTitle": "스타트업 MVP 개발", "contentImg": "https://picsum.photos/seed/149/300/200", "contentPreview": "빠르게 MVP를 만드는 전략을 배웁니다.", "category": "프론트엔드", "instructorName": "강사38", "studentNumber": 70, "lessonsNumber": 24, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "150", "contentTitle": "린 스타트업 방법론", "contentImg": "https://picsum.photos/seed/150/300/200", "contentPreview": "린 방법론으로 제품을 검증합니다.", "category": "프론트엔드", "instructorName": "강사38", "studentNumber": 55, "lessonsNumber": 16, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "151", "contentTitle": "노코드 앱 개발", "contentImg": "https://picsum.photos/seed/151/300/200", "contentPreview": "Bubble, Webflow로 앱을 코딩 없이 만듭니다.", "category": "디자인", "instructorName": "강사38", "studentNumber": 80, "lessonsNumber": 12, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "152", "contentTitle": "사이드 프로젝트 런칭", "contentImg": "https://picsum.photos/seed/152/300/200", "contentPreview": "아이디어를 실제 서비스로 런칭합니다.", "category": "프론트엔드", "instructorName": "강사38", "studentNumber": 90, "lessonsNumber": 10, "registerDate": "2026-01-25", "approveState": "승인" },
    { "contentId": "153", "contentTitle": "마이크로프론트엔드", "contentImg": "https://picsum.photos/seed/153/300/200", "contentPreview": "마이크로프론트엔드 아키텍처를 배웁니다.", "category": "프론트엔드", "instructorName": "강사39", "studentNumber": 32, "lessonsNumber": 20, "registerDate": "2026-01-28", "approveState": "승인" },
    { "contentId": "154", "contentTitle": "Module Federation", "contentImg": "https://picsum.photos/seed/154/300/200", "contentPreview": "Webpack Module Federation을 활용합니다.", "category": "프론트엔드", "instructorName": "강사39", "studentNumber": 25, "lessonsNumber": 14, "registerDate": "2026-01-28", "approveState": "승인" }
]

// localStorage.setItem('contentsList', JSON.stringify(contentsList));
const contentsListData = JSON.parse(localStorage.getItem('contentsList'));

const $totalContents = document.querySelector(".tc-content-top-ct");

function userTotalManagement(arrayList) {
    document.querySelectorAll('.tc-content').forEach(el => el.remove());
    const pageMaxArray = arrayList.length < 10 ? arrayList.length : 10;
    // 페이지네이션 관련 코드입니다. 추후 추가될 예정입니다.

    // const userTotalPagination = Math.ceil(arrayList.length / 10);
    // const usPaginationCurrentPage = 1;
    for (let i = pageMaxArray - 1; i >= 0; i--) {
        $totalContents.insertAdjacentHTML('afterend',
            `<div class="tc-content">
        <p> ${i + 1} </p>
        <p> ${arrayList[i].contentId} </p>
        <p> ${arrayList[i].contentTitle} </p>
        <p> ${arrayList[i].instructorName}</p>
        <p> ${arrayList[i].studentNumber}명 </p>
        <p> ${arrayList[i].lessonsNumber}개 </p>
        <p> ${arrayList[i].registerDate} </p>
        <p data-id="${arrayList[i].contentId}"> 삭제하기 </p>
    </div>`)

    };

    lectureContentsDelete();

}

userTotalManagement(contentsListData);
const $ArraySignDate = document.querySelector('.m-array>p:nth-of-type(1)');
const $ArraySort = document.querySelector('.m-array>p:nth-of-type(2)');

$ArraySignDate.addEventListener('click', () => {
    const ArraySignDate = [...contentsListData].sort((a, b) =>
        b.contentTitle.localeCompare(a.signDate)
    );
    userTotalManagement(ArraySignDate);
});

$ArraySort.addEventListener('click', () => {
    const ArraySort = [...contentsListData].sort((a, b) =>
        b.instructorName.localeCompare(b.userName, 'ko')
    );
    userTotalManagement(ArraySort);
});


function lectureContentsDelete() {
    const $btns = document.querySelectorAll(".tc-content > p:nth-child(8)");
    const defaultMessage = `
    삭제하시겠습니까?<br>
    삭제 후엔 되돌릴 수 없습니다.
`;

    $btns.forEach(($btn) => {
        $btn.addEventListener('click', () => {
            const selectContentId = $btn.dataset.id;

            const moveUrl = $btn.dataset.url;
            const message = $btn.dataset.message || defaultMessage;

            document.querySelector('.active-modal').innerHTML = `
        <div class="modal" data-url="${moveUrl}">
            <div class="modal-container">
                <div class="modal-top">
                    ${message}
                </div>
                <div class="modal-bottom">
                    <div class="modal-box modal-close">취소</div>
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>`;

            const $modal = document.querySelector(".modal");
            $modal.style.display = 'flex';

            $modal.querySelector('.modal-close').addEventListener('click', () => closeModal($modal));

            $modal.addEventListener('click', (e) => {
                if (e.target === $modal) closeModal($modal);
            });

            $modal.querySelector('.modal-check').addEventListener('click', (e) => {
                console.log(selectContentId);
                deleteContents(selectContentId);
                $modal.style.display = 'none';
            });
        });
    });


    function closeModal(modal) {
        modal.style.display = 'none';
        if (modal.querySelectorAll("form")) {
            modal.querySelectorAll("form").forEach((form) => {
                form.reset();
            });
        }
    }
}

function deleteContents() {
    const targetIndex = contentsListData.findIndex(item => {
        return item.contentId;
    });
    let a = contentsListData.splice(targetIndex, 1);
    localStorage.setItem('contentsList', JSON.stringify(contentsListData));
    userTotalManagement(contentsListData);
}
