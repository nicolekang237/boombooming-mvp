---
name: BoomBooming Web Demo Design System
colors:
  primary: "#333c4d"
  neutralDark: "#000000"
  neutralLight: "#eeeeee"
  accentBorder: "#999999"
  transparentOverlay: "rgba(0, 0, 0, 0.6)"
  opaqueOverlay: "rgba(0, 0, 0, 0.7)"
typography:
  fontFamily: "NEXONLv1Gothic, NotokrRegular, Arial, sans-serif"
  fontSpecial: "Lobster, sans-serif"
  sizes:
    base: "14px"
    mainTitle: "16px"
    subTitle: "13px"
    buttonText: "11px"
  weights:
    regular: 400
    bold: 700
layout:
  minWidth: "320px"
  deviceMockupBorder: "14px solid #000000"
  deviceMockupRadius: "60px"
---
# BoomBooming Design System Overview

이 디자인 시스템은 **BoomBooming Web Demo**의 인터페이스 구조와 레이아웃을 정의합니다. 웹 환경에서 모바일 장치를 흉내 낸 디바이스 목업 프레임과 다크 톤 중심의 뉴스피드/채팅 UI 디자인을 주요 특징으로 합니다.

## Core Design Philosophy
* **Mobile-First Canvas:** 모바일 화면 시뮬레이션을 위해 `border-radius: 60px`, `border: 14px solid #000000` 규격의 둥근 모서리 베젤 프레임을 제공합니다.
* **Premium Dark Mode:** 전체 기본 배경으로 `#333c4d`와 `#000000`을 교차 사용하여 눈이 편안하고 고급스러운 다크 모드를 완성합니다.
* **Header Options:** 브랜드 성격에 따라 Red, Purple, Green 등의 배너 이미지를 가변적으로 상단 헤더 배경에 적용합니다.

## Component Specifications

### 1. Avatar Sizes
아바타는 테두리가 적용된 원형 이미지(`border-radius: 50%`) 레이아웃을 가집니다.
* `size_max`: 126px * 126px
* `size_big`: 70px * 70px
* `size_medium`: 54px * 54px
* `size_small`: 38px * 38px
* `size_tiny`: 32px * 32px

### 2. Buttons
* `btn__circle`: 원형 형태의 반투명 블랙 배경 버튼입니다.
* `size_medium`: 42px * 42px
* `size_small`: 34px * 34px

### 3. Gradient Overlays
텍스트 가독성 확보를 위해 배경 이미지 위에 그라데이션 오버레이 레이어를 올립니다.
* `gradient__type_a`: 높이 220px (linear-gradient to bottom from transparent to rgba(0,0,0,0.8))
* `gradient__type_b`: 높이 160px (linear-gradient to bottom from transparent to rgba(0,0,0,0.6))
