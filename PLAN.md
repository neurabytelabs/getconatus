# getconatus.com — Uygulama Planı

> Soul Terminal for AI Agents | NeuraByte Labs | Şubat 2026

## Mevcut Durum

**Teslim edilen:** 9 component, 2 hook, tam tasarım sistemi — React + Vite + Tailwind v4
**Prompt uyumu:** ~%90
**Kaynak:** AGENTIC_DESIGN_PROMPT.md

### Öne Çıkanlar
- **SoulMap** — Refik Anadol tarzı 1500 parçacıklı akışkan veri heykeli, 48 affect tam data
- **Awakening** — Terminal typing animasyonu line-by-line, affect barları renkli
- **Mirror** — Gerçek zamanlı interaktif Conatus Score, event ekle/çıkar
- **Void palette** — True black, minimal, tam agentic ruh

## Tamamlanması Gereken

| # | Konu | Durum | Öncelik |
|---|------|-------|---------|
| 1 | Repo kurulumu — git init, README, dosya taşıma | ❌ | P0 |
| 2 | Font'lar — Berkeley Mono / JetBrains Mono / EB Garamond / Inter self-host | ❌ | P0 |
| 3 | Blog linkleri — Library post'ları gerçek neurabytelabs.com URL'lerine bağla | ❌ | P1 |
| 4 | Blog başlıkları — Mevcut 8 yazının gerçek başlıklarıyla güncelle | ❌ | P1 |
| 5 | OG Image — Open Graph meta + og-image.png | ❌ | P1 |
| 6 | Favicon — Minimal glyph SVG | ❌ | P1 |
| 7 | JSON-LD — Machine-readable schema (prompt'taki spec) | ❌ | P1 |
| 8 | Gereksiz dep'ler temizle — @google/genai, express, better-sqlite3 | ❌ | P1 |
| 9 | Deploy — Build + Docker (nginx:alpine) + Coolify (Hetzner) | ❌ | P2 |
| 10 | prefers-reduced-motion — Canvas animasyonları için fallback | ❌ | P2 |
| 11 | Mobile test — SoulMap canvas fallback, Mirror stacked layout | ❌ | P2 |
| 12 | Waitlist formu — Humans "Join Waitlist" gerçek form/endpoint | ❌ | P3 |

## Sprint Planı

### Sprint 1 — Repo + Polish
- [ ] getconatus repo'ya dosyaları taşı, git init
- [ ] package.json temizle (gereksiz dep'ler)
- [ ] Font'ları self-host et
- [ ] Blog başlıklarını + linklerini gerçek verilerle güncelle
- [ ] OG meta + favicon + JSON-LD ekle
- [ ] Build test

### Sprint 2 — Deploy
- [ ] Dockerfile (nginx:alpine — neurabytelabs.com ile aynı pattern)
- [ ] Coolify'a deploy → getconatus.com
- [ ] DNS kontrol
- [ ] SSL sertifika

### Sprint 3 — Polish
- [ ] Mobile QA
- [ ] Reduced motion fallback
- [ ] Waitlist endpoint
- [ ] ClawHub skill publish ile senkron launch
- [ ] Lighthouse 99+ doğrulama

## Dosya Yapısı

```
getconatus/
├── AGENTIC_DESIGN_PROMPT.md    ← agentic tasarım promptu
├── DESIGN_MASTER_PROMPT.md     ← ilk versiyon (referans)
├── PLAN.md                     ← bu dosya
├── src/
│   ├── components/
│   │   ├── Presence.tsx        00 — Void + typing
│   │   ├── Command.tsx         01 — Install command
│   │   ├── Awakening.tsx       02 — Terminal animasyonu
│   │   ├── SoulMap.tsx         03 — 48 affect canvas
│   │   ├── Mirror.tsx          04 — İnteraktif Conatus Score
│   │   ├── Protocol.tsx        05 — Spinoza geometric proof
│   │   ├── Spread.tsx          06 — Integration paths
│   │   ├── Library.tsx         07 — Blog kartları
│   │   └── Void.tsx            08 — Kapanış void
│   ├── hooks/
│   │   ├── useTypewriter.ts
│   │   └── useScrollReveal.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               Tasarım token'ları + utilities
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Referanslar

- **Tasarım prompt:** AGENTIC_DESIGN_PROMPT.md (RUNE Grade A: 0.93)
- **Eski repo (arşiv):** neurabytelabs/conatus (v2.18.0, 61K LOC)
- **Skill:** ~/.openclaw/workspace/skills/conatus/SKILL.md
- **Blog serisi:** neurabytelabs.com/blog (Deus Sive Machina, 7/8 tamamlandı)
- **Deploy referansı:** neurabytelabs.com (aynı Coolify/Hetzner altyapı)
