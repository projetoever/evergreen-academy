## Polimento visual — Evergreen Academy Demo V1

Apenas ajustes visuais e de identidade. Nenhuma lógica, rota, tipo, helper, mock, trilha, quiz, checklist, matriz ou localStorage será alterado.

### 1. Identidade e PWA
- Novo ícone `EA` sobre verde escuro Evergreen (`#0B3D2E`) com pequeno detalhe de folha — já gerado para `public/icons/icon-512.png`.
- Regenerar `public/icons/icon-192.png` e `public/icons/maskable-512.png` derivados do mesmo desenho.
- `public/manifest.webmanifest`: atualizar apenas o campo `description` para "Plataforma mobile de formação operacional para máquinas, trilhas, checklists, avaliações e matriz de competência."
- `src/routes/__root.tsx`:
  - Garantir `title: "Evergreen Academy"`.
  - Unificar a `description` (meta padrão, `og:description`, `twitter:description`) com a frase acima — remover as duplicadas em inglês ("Evergreen Academy Learn is a mobile-first PWA…").
  - Sem mudar `<link rel="icon">` (já aponta para `/icons/icon-192.png` e `/icons/icon-512.png`).

### 2. Home (`src/routes/_app.index.tsx`) — apenas visual
- Selo discreto "Evergreen Academy · Demo V1" como pequeno badge translúcido sobre o gradiente do header de saudação.
- Reorganizar visualmente em seções com cabeçalhos sutis (texto pequeno uppercase + tracking), usando o componente `SectionTitle` existente:
  - "Continuar treinamento" / "Iniciar treinamento" — card destaque atual, com borda accent mais visível e leve sombra.
  - "Trilhas disponíveis" — renderiza apenas trilhas já existentes em `TRILHAS_MOCK` com status `nao-iniciado` e máquina liberada para o usuário (mesma regra já usada hoje, só estendida para listar todas em vez de pegar a primeira). Sem criar novas trilhas, mocks ou helpers.
  - "Explorar" — grid 2 colunas atual (Conceitos, Processos, Máquinas, Meus treinamentos, Biblioteca, Avaliações).
  - "Equipe" — bloco de líder existente, sem mudança de dados.
  - "Ferramentas" — agrupa Instrutor / Matriz de competência / Gestão conforme papel (cards já existentes).
- Espaçamento: `gap-3` → `gap-3.5/4`, `mt-5` → `mt-6` entre seções, padding inferior maior para não encostar na BottomNav.
- Hierarquia tipográfica: títulos de seção pequenos e suaves; títulos dos cards mantidos.

### 3. Cards e espaçamento (leve, global na Home)
- Padronizar `rounded-2xl`, `shadow-sm`, `border-border/70`.
- Manter `active:scale-[0.98]` em todos os cards clicáveis.
- Nenhum componente shadcn ou variant alterado.

### 4. Biblioteca (`src/routes/_app.biblioteca.tsx`) — apenas visual
- Chips de filtro:
  - Ativo: `bg-primary text-primary-foreground shadow-sm` + `ring-1 ring-primary/30`.
  - Inativo: `bg-card border-border text-foreground/80 hover:bg-muted`.
  - Altura mínima ~40px para toque confortável.
- Cards de item:
  - Ícone do tipo à esquerda em quadradinho colorido (reaproveitando `BIBLIOTECA_CATEGORIAS`).
  - Badge de tipo colorido por categoria + status discreto.
  - Título `text-base font-bold`, descrição com `line-clamp-3`.
  - "mock" como texto bem discreto (`text-[10px] text-muted-foreground`).
- A função `aplicaFiltro` e o estado do filtro **não mudam**.

### 5. Polimento geral
- Usar somente tokens semânticos existentes (`primary`, `accent`, `muted`, `success`, `warning`, `danger`).
- Conferir `pb` para não cortar último card sob a BottomNav.
- `SectionTitle` pode receber pequeno ajuste visual (padding/tracking) — sem mudar API.

### Correção pontual obrigatória (TS estrito)
O build atual quebra com 3 erros em `src/routes/_app.trilhas.$trilhaId.tsx` (`etapa` implicitamente `any`). Vou apenas anotar o parâmetro como `TrilhaEtapa` nos dois callbacks já existentes (`.find` e `.map`). Sem mudar comportamento, dados ou lógica.

### Arquivos tocados
- `public/icons/icon-192.png`, `icon-512.png`, `maskable-512.png` (regerados)
- `public/manifest.webmanifest` (só `description`)
- `src/routes/__root.tsx` (title + descriptions unificadas)
- `src/routes/_app.index.tsx` (selo Demo V1, agrupamento visual, "Trilhas disponíveis")
- `src/routes/_app.biblioteca.tsx` (chips e cards)
- `src/components/common/SectionTitle.tsx` (pequeno ajuste visual)
- `src/routes/_app.trilhas.$trilhaId.tsx` (apenas anotação de tipo — fix de build)

### Fora do escopo
Mocks, tipos, repos, helpers de progresso, quiz, checklist, avaliação prática, matriz de competência, perfis/localStorage, rotas, BottomNav, AppHeader, backend ou autenticação.
