# Evergreen Academy — Plano de implementação (revisado)

App mobile-first (PWA instalável) em pt-BR, tema "Verde Evergreen" (verde profundo #0B3D2E + acento #10B981, fundo claro #F8FAFC, texto #1F2937). Todos os dados em mocks no frontend, sem Supabase, sem login real, sem backend. Código organizado para futura integração.

## Ajustes desta revisão

- Nome mantido: **Evergreen Academy**.
- **Perfis de acesso mockados**: Operador, Instrutor, Líder, Administrador — seletor de perfil no topo do app (troca a visão), sem login real.
- **QR Code nas máquinas**: cada máquina tem `qrCode` no mock e uma rota `/m/$codigo` que resolve para o detalhe da máquina (preparada para scanner futuro).
- **Pontos críticos de segurança**: nova aba/seção na tela de detalhe da máquina, ao lado de Treinamento, Checklist, Alarmes, Documentos.
- **Conceitos Básicos**: explicitamente **extremamente visuais e simples**, voltados ao operador iniciante.

## Design system

- Tokens em `src/styles.css` (oklch): `--background`, `--foreground`, `--primary` (verde profundo), `--accent` (verde claro), `--card`, `--muted`, `--border`, `--success`, `--warning`, `--destructive`, `--danger` (vermelho seguro p/ pontos críticos).
- Tipografia: Inter via `<link>` no `__root.tsx`.
- shadcn: Card, Button, Badge, Progress, Tabs, Sheet, Accordion, Avatar, Separator, Dialog, Select.
- Layout `max-w-md mx-auto`, cards grandes `rounded-2xl`, alvos ≥ 44px, ícones Lucide, ilustrações geradas.

## Perfis de acesso (mock)

`src/data/mock/perfis.ts` define 4 usuários — um por papel: `operador | instrutor | lider | admin`. Contexto leve em `src/lib/perfilAtual.tsx` (React Context + `useState`, persistido em `localStorage`) e seletor no `AppHeader` (Sheet com avatar + nome + papel). Visibilidade:

- **Operador**: vê Home, Aulas, Processos, Máquinas, Meus Treinamentos, Avaliações (responder), Biblioteca, Perfil.
- **Instrutor**: tudo do operador + Área do Instrutor (avaliar/aprovar/liberar).
- **Líder**: tudo do instrutor + visão consolidada de equipe (mock simples na Home: "Equipe — X em treino, Y aprovados").
- **Administrador**: vê tudo + selo "Admin" e acesso a tela "Gestão" (placeholder com lista de máquinas/aulas/usuários do mock).

Sem autenticação real — apenas troca de papel para demonstração.

## Estrutura de rotas (TanStack Start, file-based)

```
src/routes/
  __root.tsx                  -> shell PWA + Inter + meta + Outlet
  _app.tsx                    -> layout com AppHeader + BottomNav + <Outlet/>
  _app.index.tsx              -> Home (saudação + cards por perfil)
  _app.aulas.index.tsx        -> lista Conceitos Básicos
  _app.aulas.$aulaId.tsx      -> detalhe visual da aula
  _app.processos.index.tsx    -> 3 categorias
  _app.processos.$categoria.tsx -> fluxo numerado
  _app.maquinas.index.tsx     -> lista de máquinas
  _app.maquinas.$maquinaId.tsx-> detalhe (tabs: Treino / Checklist / Alarmes / Segurança / Docs)
  _app.meus-treinamentos.tsx
  _app.avaliacoes.index.tsx
  _app.biblioteca.tsx
  _app.instrutor.tsx          -> visível só para instrutor/líder/admin
  _app.gestao.tsx             -> visível só para admin
  _app.perfil.tsx
  m.$codigo.tsx               -> resolve QR -> redireciona para /maquinas/$id
```

`BottomNav` fixo: Início · Aulas · Máquinas · Biblioteca · Perfil. Demais áreas via cards na Home.

## Organização de código

```
src/
  components/
    layout/BottomNav.tsx, AppHeader.tsx, MobileShell.tsx, PerfilSwitcher.tsx, RoleGate.tsx
    home/HomeCard.tsx, GreetingHeader.tsx, ContinueCard.tsx
    aulas/AulaCard.tsx, NivelBadge.tsx, AulaVisualBlock.tsx
    processos/EtapaItem.tsx, FluxoVertical.tsx
    maquinas/MaquinaCard.tsx, MaquinaStatusBadge.tsx, QrBadge.tsx,
            tabs/{TreinoTab,ChecklistTab,AlarmesTab,SegurancaTab,DocumentosTab}.tsx
    treinamentos/TrilhaCard.tsx, StatusPill.tsx
    avaliacoes/QuizCard.tsx, ChecklistItem.tsx
    instrutor/FuncionarioRow.tsx
    perfil/ProgressoCard.tsx, CertificacaoBadge.tsx
    common/SectionTitle.tsx, EmptyState.tsx, IconTile.tsx, SafetyCallout.tsx
  data/
    types.ts
    mock/{perfis,usuario,aulas,processos,maquinas,treinamentos,avaliacoes,biblioteca,instrutor}.ts
    repo/{aulas,maquinas,treinamentos,avaliacoes,biblioteca,usuarios}.repo.ts
  lib/perfilAtual.tsx
public/
  manifest.webmanifest, icons/icon-192.png, icon-512.png, maskable-512.png
```

## Conteúdo dos módulos (mockados)

- **Home**: saudação "Olá, {nome}" + papel atual, card "Continuar treinamento", grid 2 colunas: Conceitos Básicos, Processos, Máquinas, Meus Treinamentos, Biblioteca, Avaliações, Área do Instrutor (gated), Gestão (gated admin).
- **Conceitos Básicos — extremamente visuais e simples** para operador iniciante. 13 aulas: ciclo 0–360°, came, mm/ajustes, bar, vácuo, RPM, ppm, temperatura, sensores, IHM, setup, receita, checklist de partida.
  Cada aula renderizada com:
  - Hero com ícone/ilustração grande
  - "O que é" em 1 frase
  - Analogia do dia a dia (ex.: pressão = bomba de encher pneu)
  - Imagem/diagrama mock (placeholder SVG por enquanto)
  - "Como aparece na máquina" (bullet visual)
  - "Cuidado" (callout em destaque)
  - Botão grande "Marcar como visto"
    Linguagem curta, frases de até ~12 palavras, sem jargão técnico sem explicação.
- **Processos**: 3 fluxos verticais numerados — fraldas (11), absorventes (11), lenços (11), com as etapas exatas listadas.
- **Máquinas**: 4 cards (Haina Fralda Baby, Haina Absorvente, Linha Lenços Umedecidos, Italiana Pants) com marca, produto, setor, status de treino, nº operadores habilitados, **QR code** (badge com código curto + ícone), botões Treino/Checklist/Alarmes/Segurança/Docs.
  Detalhe da máquina (tabs):
  1. **Treinamento** — módulos + CTA "Iniciar treinamento"
  2. **Checklist** de partida
  3. **Alarmes** comuns
  4. **Pontos críticos de segurança** — lista de riscos (esmagamento, pontos quentes, lâminas, partes móveis, energia residual) com ícone de alerta, EPI obrigatório e procedimento em caso de incidente. Visual em destaque (vermelho/âmbar) usando `SafetyCallout`.
  5. **Documentos** técnicos
     Topo da página: foto ilustrativa + dados + `QrBadge` (mostra o código e tem botão "Como escanear" explicando o fluxo futuro).
- **QR Code → rota**: `src/routes/m.$codigo.tsx` faz lookup no mock e redireciona via `Navigate` para `/maquinas/$id`. Pronto para um scanner futuro abrir `https://app/m/MQ-001`.
- **Meus Treinamentos**: tabs por status (Não iniciado, Em andamento, Aguardando avaliação prática, Aprovado, Reciclagem).
- **Avaliações**: Quiz teórico (perguntas mock), Avaliação prática, Checklist de liberação, Histórico.
- **Instrutor** (gated): lista de funcionários, botões Avaliar/Aprovar/Reprovar/Observações/Liberar (UI mock).
- **Gestão** (gated admin): listas simples de máquinas, aulas e usuários do mock.
- **Biblioteca**: categorias (PDFs, Manuais, Prints IHM, Fotos, Vídeos, Procedimentos, Checklists) com estado "Em breve".
- **Perfil**: nome, cargo, setor, papel atual, máquinas liberadas (badges), pendências, certificações, progresso geral.

## PWA (instalável)

Manifest-only (sem service worker / sem offline):

- `public/manifest.webmanifest`: name "Evergreen Academy", short_name "Evergreen", `display: standalone`, `theme_color: #0B3D2E`, `background_color: #F8FAFC`, ícones 192/512 + maskable.
- Ícone gerado (logo "EA" sobre verde Evergreen).
- Tags no `__root.tsx`: `manifest`, `theme-color`, `apple-touch-icon`, viewport com `viewport-fit=cover`.

## Imagens geradas

`src/assets/`: 1 ícone do app (maskable + 512 + 192) e 4 fotos ilustrativas industriais (uma por máquina).

## Preparação para Supabase (sem implementar)

- `src/data/types.ts` tipa o domínio (inclui `Perfil`, `Maquina.qrCode`, `PontoSeguranca`).
- `src/data/repo/*.repo.ts` expõem funções `async` que hoje retornam mocks via `Promise.resolve`. Trocar implementação por chamadas Supabase no futuro sem mexer nas telas.
- README curto em `src/data/repo/README.md`.

## Detalhes técnicos

- Mobile-first centralizado em `max-w-md` com fundo neutro em telas grandes.
- BottomNav com `pb-[env(safe-area-inset-bottom)]`.
- `RoleGate` esconde itens de menu/cards e protege rotas restritas (redireciona p/ Home se perfil não autorizado).
- Acessibilidade: `aria-label` em botões de ícone, contraste AA, foco visível.
- Sem Lovable Cloud, sem auth, sem backend.

## Entregáveis

App navegável com todos os módulos, perfis trocáveis (Operador/Instrutor/Líder/Admin), QR mock funcional via rota `/m/$codigo`, seção de Segurança nas máquinas, aulas básicas visuais e simples, instalável no celular.
