# Exemplos — create-jira-tasks (08HRS de Rolimã / HRR)

Todo card de trabalho é **Tarefa** (`issue_type: "10415"`). Nunca História (`10413`). Nunca Bug (`10414`). Nunca criar Epic (`10412`).

A camada vai **só** no badge (categoria) `Frontend` ou `Backend`. O summary **nunca** leva `[BE]`, `[FE]` nem `[FE/BE]`.

## Vincular a um Epic existente (não criar)

Antes de criar Tarefas, busque Epics já no HRR (JQL: `project = HRR AND issuetype = Epic`).

- Se houver um Epic claramente relacionado → `parent` = key dele.
- Se não houver nenhum relacionado → omita `parent`. Deixe sem Epic.

**Não** crie Epic para “abrir a iniciativa”.

## Tarefa frontend (`feat`)

**Summary:** `feat: CTA de inscrição via WhatsApp no hero`  
**Type:** Tarefa (`issue_type: "10415"`)  
**Badge (categoria):** `Frontend`  
**Parent:** key de Epic **já existente** e relacionado, ou omitido

```markdown
## Objetivo
Levar o visitante do hero direto para a inscrição no WhatsApp do evento.

## Escopo
- Botão "Fazer inscrição" no hero apontando para `wa.me`
- Mensagem pré-preenchida em PT-BR
- Abrir em nova aba (`target="_blank"` + `rel="noopener noreferrer"`)

## Acceptance criteria
- [ ] O botão do hero abre o WhatsApp com texto de inscrição
- [ ] O mesmo número usado em `components/layout/sections/contact.tsx`
- [ ] Layout do hero permanece íntegro em desktop e mobile

## Dependência
nenhuma

## Referência
`components/layout/sections/hero.tsx`, `components/layout/sections/contact.tsx`
```

## Tarefa frontend (`fix`)

**Summary:** `fix: âncoras da navbar apontando para as seções do site`  
**Type:** Tarefa (`issue_type: "10415"`)  
**Badge (categoria):** `Frontend`  
**Parent:** key de Epic **já existente** e relacionado, ou omitido

```markdown
## Objetivo
A navegação do header deve levar o usuário às seções corretas da landing.

## Escopo
- Links Informações / Atrações / Apoiadores / Inscrição
- IDs das seções correspondentes (`#benefits`, `#features`, `#sponsors`, `#contact`)

## Acceptance criteria
- [ ] Cada item da navbar rola até a seção certa
- [ ] Menu mobile usa os mesmos hrefs
- [ ] Não há âncora quebrada

## Dependência
nenhuma

## Referência
`components/layout/navbar.tsx`, `app/page.tsx`
```

## Outros tipos de commit (summary only)

O `issue_type` continua `10415`. O que muda é só o prefixo Conventional Commits no summary. A camada continua no badge `Frontend` / `Backend`.

| Summary | Badge | Por quê |
|---------|-------|---------|
| `fix: countdown travado após a data do evento` | `Frontend` | Correção de bug |
| `refactor: extrair URL do WhatsApp para constante compartilhada` | `Frontend` | Sem mudança de comportamento |
| `docs: documentar npm run dev no README` | (omitir) | Só docs, sem camada |
| `chore: atualizar metadados Open Graph do evento` | `Frontend` | Config/conteúdo sem feature nova de UI |
| `cleanup: remover seções do template shadcn não usadas` | `Frontend` | Limpeza após recorte do template |

## Tarefa estreita

**Summary:** `feat: data e horário do evento no card ao lado do countdown`  
**Type:** Tarefa (`issue_type: "10415"`)  
**Badge (categoria):** `Frontend`

Mesma estrutura de tópicos obrigatórios e mesmo formato de summary. Tarefa serve tanto para incremento grande quanto para item estreito.

## Anti-exemplos (não fazer)

| Errado | Certo |
|--------|--------|
| `[FE] feat: CTA de inscrição via WhatsApp no hero` | `feat: CTA de inscrição via WhatsApp no hero` + badge `Frontend` |
| labels `frontend` / `backend` | badges `Frontend` / `Backend` |
| criar Epic `feat: site do 08HRS — …` | buscar Epic existente; se não houver, Tarefa sem Epic |
| criar badge `landing` ou `evento` | só `Frontend` ou `Backend` |
| `issue_type` História / Bug | sempre Tarefa `10415` (`fix:` se for correção) |
| citar `frontend/` ou `admin/` | paths reais: `app/`, `components/` |
| anexar print como primeiro recurso / host público / JPEG truncado | criar a Tarefa e pedir para o usuário anexar; o fluxo workbench→`s3key` está no SKILL.md só como memória |
