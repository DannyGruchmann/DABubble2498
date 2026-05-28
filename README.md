# DA Bubble

Zentrale Projekt-Dokumentation fuer die Angular/Firebase-Chat-Anwendung.

## Dokumentation

- Vollstaendige Projekt-Dokumentation: [docs/project-dokumentation.md](docs/project-dokumentation.md)
- Firebase Setup und Betrieb: [FIREBASE_SETUP.md](FIREBASE_SETUP.md)
- Firebase Email Templates: [FIREBASE_EMAIL_TEMPLATE.md](FIREBASE_EMAIL_TEMPLATE.md)
- Manuelle Deployment-Pruefliste: [docs/predeploy-manual-checklist.md](docs/predeploy-manual-checklist.md)

## Schnellstart

1. Abhaengigkeiten installieren:

```bash
npm install
```

2. Development-Server starten:

```bash
npm start
```

3. App im Browser oeffnen:

```text
http://localhost:4200
```

## Wichtige Befehle

- Entwicklung: `npm start`
- Tests: `npm test`
- Build: `npm run build`
- Pflichtcheck vor Deploy: `npm run predeploy:check`
- Cloudflare Preview Deploy: `npm run deploy:cloudflare:preview`
- Cloudflare Production Deploy: `npm run deploy:cloudflare`
- Voller Release-Flow: `npm run release`

## Deployment-Standard (Cloudflare Pages)

Vor jedem Deployment muessen ausgefuehrt werden:

1. `npm run predeploy:check`
2. Manuelle UI-Pruefung gemaess [docs/predeploy-manual-checklist.md](docs/predeploy-manual-checklist.md)
3. `npm run deploy:cloudflare`

## Ziel-URLs

- Production: `https://dabubble2498.pages.dev`
- Custom Domain: `https://dabubble.dannygruchmann.com`

Hinweis:
- Die URL `https://<hash>.dabubble2498.pages.dev` ist ein Preview-Deploy und kann sich pro Deployment aendern.
- Fuer den stabilen Live-Link immer `https://dabubble2498.pages.dev` (oder die Custom Domain) verwenden.
