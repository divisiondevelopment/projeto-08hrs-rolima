---
name: plan-jira-tasks
description: >-
  Planeja a ordem de execução de issues do Jira do 08HRS de Rolimã (projeto HRR,
  board 202): busca cards via Composio (somente leitura), cruza com o repo e
  entrega um plano do Cursor (CreatePlan). Use when the user asks to plan,
  ordenar, priorizar or planejar tasks/issues/cards HRR-N; quando pedir o que
  fazer primeiro; ou quando houver overlap entre issues.
---

# Planejar tasks no Jira (08HRS de Rolimã)

## Quando usar

Sempre que o usuário pedir para **planejar**, **ordenar** ou **priorizar** uma ou mais issues `HRR-N` antes de implementar. Complementa [create-jira-tasks](../create-jira-tasks/SKILL.md) (criar cards) e [close-jira-tasks](../close-jira-tasks/SKILL.md) (fechar cards).

**Não implementa código.** **Não escreve no Jira.** Se o usuário pedir criar/editar/comentar/linkar issues no board, recusar e apontar `create-jira-tasks`.

## Input

O usuário informa **uma ou mais keys** `HRR-N` (ex.: `planeja HRR-1` ou `planeja HRR-1, HRR-2`).

| Situação | Ação |
|----------|------|
| Keys explícitas | Usar diretamente |
| Sem keys | Perguntar ou inferir do contexto da conversa |
| Por fase/label/epic (ex.: "planeja o epic do site") | `JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET` ou `JIRA_SEARCH_ISSUES` com `project_key: HRR` + filtro; depois o mesmo fluxo |
| Escopo ambíguo | Perguntar antes de montar o plano |

## Sempre considerar

1. **Projeto:** key `HRR`, nome `08hrs de rolimã` (next-gen). Board: [HRR board 202](https://divisionservices.atlassian.net/jira/software/projects/HRR/boards/202). Só planejar issues `HRR-*`. **Não** usar os projetos `DFLW` (Division Flow) nem `DS` (division-scraper).
2. **Integração:** Composio MCP (`plugin-composio-composio`) — **somente leitura**
3. **Produto:** site Next.js do 1º 08HRS de Rolimã. Inscrição via WhatsApp; sem API neste repo.
4. **Repo:** paths reais — `app/`, `components/layout/`, `components/layout/sections/`, `components/ui/`, `components/icons/`, `lib/`, `public/`. Não cite `backend/`, `admin/` ou `frontend/` na raiz.
5. **Idioma:** plano final em português (Brasil).

## O que buscar no Jira

Por issue, `JIRA_GET_ISSUE` com:

- `fields`: `summary`, `description`, `status`, `issuetype`, `parent`, `labels`, `subtasks`, `issuelinks`, `priority`
- `expand`: `renderedFields`

Extrair da description (ADF ou rendered): **Objetivo**, **Escopo**, **Acceptance criteria**, **Dependência**, **Referência**.

Não buscar comentários, attachments ou changelog, salvo se a description apontar bloqueio neles.

## Workflow Composio (read-only)

```
1. COMPOSIO_SEARCH_TOOLS — nova sessão (session.generate_id: true)
   use_case em inglês; known_fields: project_key: HRR, issue_keys: HRR-N,...
2. Se Jira sem conexão ACTIVE → COMPOSIO_MANAGE_CONNECTIONS + WAIT
3. COMPOSIO_MULTI_EXECUTE_TOOL — JIRA_GET_ISSUE em paralelo (até ~5 por batch)
4. Reusar session_id em todas as meta-tools da sessão
```

Se o pedido for por fase/epic/label, resolver keys com search **antes** do passo 3.

### Ferramentas permitidas

| Tool | Uso |
|------|-----|
| `COMPOSIO_SEARCH_TOOLS` | Descobrir tools e abrir sessão |
| `COMPOSIO_GET_TOOL_SCHEMAS` | Schema quando necessário |
| `COMPOSIO_MANAGE_CONNECTIONS` / `WAIT` | Auth |
| `COMPOSIO_MULTI_EXECUTE_TOOL` | Executar fetch |
| `JIRA_GET_ISSUE` | Detalhe de cada card |
| `JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET` / `JIRA_SEARCH_ISSUES` | Resolver keys por filtro |

### Ferramentas proibidas

`JIRA_EDIT_ISSUE`, `JIRA_ADD_COMMENT`, `JIRA_CREATE_ISSUE`, `JIRA_BULK_CREATE_ISSUE`, `JIRA_CREATE_ISSUE_LINK`, `JIRA_TRANSITION_ISSUE`, `JIRA_ASSIGN_ISSUE` e qualquer escrita no board.

## Análise (cruzar Jira + repo)

Depois do fetch, **não confiar só** no campo Dependência escrito no card. Validar no repositório:

1. **Paths da Referência** — existem? já foram substituídos? (ex.: seção do template shadcn vs seção real do evento)
2. **Overlap** — mesmo arquivo (`hero.tsx`, `navbar.tsx`, `app/page.tsx`) ou mesma constante (WhatsApp, Instagram, data do evento) em dois cards
3. **Recorte por issue** — o que fazer **agora** nesta issue vs o que **adiar** para a issue dona daquele arquivo
4. **Ordem de execução** — layout/tema/navbar primeiro; seções da landing depois; conteúdo (`public/`) e docs por último
5. **Links existentes** — usar `issuelinks` do Jira como sinal, mas confirmar com o repo

Regras de ordenação (quando aplicável):

- `app/layout.tsx` / tema / navbar antes das seções em `app/page.tsx`
- Constante compartilhada (WhatsApp, data 18/10/2026) extraída antes de duplicar em várias seções
- UI compartilhada em `components/ui/` antes das seções que a consomem

## Entrega = plano do Cursor

1. Se não estiver em Plan mode → `SwitchMode` para `plan`
2. **Obrigatório:** `CreatePlan` — não entregar só texto solto no chat
3. **Não implementar** até o usuário confirmar o plano

### Conteúdo do plano (PT-BR)

- **Ordem clara:** o que vem primeiro e o que vem depois (numerada)
- **Por issue:** o que fazer / o que **não** fazer (evitar retrabalho)
- **Overlap e dependências reais** (repo + links), não só o texto do card
- Links `https://divisionservices.atlassian.net/browse/HRR-N` para cada issue
- Todos os todos do plano na ordem de execução

### Formato

- Usar **listas** — evitar tabelas markdown no corpo do `CreatePlan` (renderer do Cursor quebra)
- Citar paths do repo com links quando útil: `` [`components/layout/sections/hero.tsx`](components/layout/sections/hero.tsx) ``
- Diagrama mermaid opcional para dependências entre issues (IDs sem espaços)

## Relação com outras skills

| Pedido do usuário | Skill |
|-------------------|-------|
| Planejar ordem / o que fazer primeiro | **plan-jira-tasks** (esta) |
| Criar Tarefa no board | [create-jira-tasks](../create-jira-tasks/SKILL.md) |
| Fechar / concluir issue | [close-jira-tasks](../close-jira-tasks/SKILL.md) |

## Fora do padrão (não fazer)

- Editar Jira, comentar, criar ou linkar issues
- Entregar plano só no chat sem `CreatePlan`
- Inventar issues fora das keys pedidas (ou do resultado do JQL)
- Implementar código das issues durante o planejamento
- Citar `.cursor/plans/*` como entrega no board Jira
- Planejar ou citar issues dos projetos `DFLW` ou `DS` — este repositório usa `HRR`

## Exemplo

Ver [examples.md](examples.md).
