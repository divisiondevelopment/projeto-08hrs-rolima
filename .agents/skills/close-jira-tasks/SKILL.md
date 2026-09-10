---
name: close-jira-tasks
description: >-
  Fecha issues no Jira do 08HRS de Rolimã (projeto HRR) via Composio: comentário
  de entrega, data de início, responsável e transição para Concluído. Use when
  the user asks to close, finish, concluir or fechar tasks/issues/cards no
  Jira/HRR.
---

# Fechar tasks no Jira (08HRS de Rolimã)

## Quando usar

Sempre que o usuário pedir para **fechar**, **concluir** ou **finalizar** uma ou mais issues do board 08HRS de Rolimã. Não feche issues sem confirmação implícita (pedido explícito ou contexto claro de entrega concluída).

Complementa [create-jira-tasks](../create-jira-tasks/SKILL.md) (criar cards) e [plan-jira-tasks](../plan-jira-tasks/SKILL.md) (planejar ordem).

## Sempre considerar

1. **Projeto:** key `HRR`, nome `08hrs de rolimã`. Board: [HRR board 202](https://divisionservices.atlassian.net/jira/software/projects/HRR/boards/202). Só feche issues com key `HRR-*`.
2. **Integração:** Composio MCP (`plugin-composio-composio`). Fluxo obrigatório:
   - `COMPOSIO_SEARCH_TOOLS` (nova sessão: `session.generate_id: true`)
   - `COMPOSIO_MULTI_EXECUTE_TOOL` com o `session_id` retornado
3. **Idioma:** comentário de entrega em português (Brasil).
4. **Entrega:** ao terminar, informe key, status final e URL `https://divisionservices.atlassian.net/browse/HRR-N`.

## Workflow do board HRR

Status final alvo: **Concluído** (categoria *Itens concluídos*).

Transições globais mais usadas no site Atlassian (confirmar **sempre** com `JIRA_GET_TRANSITIONS` — ids podem variar por status atual e **não** copiar os ids do DFLW sem checar):

| Nome da transição | Status destino |
|-------------------|----------------|
| Itens concluídos | Concluído |
| Em andamento | Em andamento |
| Itens Pendentes | Tarefas pendentes |
| BACKLOG | BACKLOG |

**Nunca** hardcode transition id sem consultar `JIRA_GET_TRANSITIONS` para a issue específica.

## Ordem de execução (fechar issue)

```
1. JIRA_GET_ISSUE — validar key, status atual e campos (assignee, customfield_10015)
2. JIRA_GET_TRANSITIONS — obter id da transição para Concluído
3. JIRA_ASSIGN_ISSUE — definir responsável (se pedido ou ainda vazio)
4. JIRA_EDIT_ISSUE — definir data de início (customfield_10015) se ausente
5. JIRA_ADD_COMMENT — comentário de entrega
6. JIRA_TRANSITION_ISSUE — mover para Concluído (preferir id numérico da transição)
7. JIRA_GET_ISSUE — confirmar status final
```

Se a transição exigir resolution, passe `resolution` em `JIRA_TRANSITION_ISSUE` (ex.: `Done`). Use `JIRA_GET_ISSUE_RESOLUTIONS` se necessário.

## Campos obrigatórios ao fechar

### 1. Comentário de entrega

Adicionar via `JIRA_ADD_COMMENT` **antes** da transição (ou via parâmetro `comment` em `JIRA_TRANSITION_ISSUE` se preferir um único passo).

Estrutura sugerida:

```markdown
## Entrega

<1–3 frases: o que foi feito e resultado>

## Alterações
- `<path>` — <resumo>
- `<path>` — <resumo>

## Como validar
- [ ] <passo verificável>

## Observações
<opcional: limitações, follow-ups, PR/commit>
```

Regras:
- Cite paths reais do repo (`app/`, `components/layout/`, `components/ui/`, `lib/`, `public/`).
- Não invente commits ou PRs; mencione só se o usuário informou ou existir no contexto.
- Se a entrega foi só documentação/planejamento, deixe claro.

### 2. Data de início

Campo Jira: `customfield_10015` (*Start date* / *Data de início*). Confirme com `JIRA_GET_ISSUE_EDIT_METADATA` se o id mudar.

- Se já preenchida, **não sobrescreva** salvo pedido explícito.
- Se vazia, use a data informada pelo usuário ou a data de início do trabalho inferível do contexto (ex.: data do primeiro commit/PR citado).
- Formato: `YYYY-MM-DD` via `JIRA_EDIT_ISSUE`:

```json
{"customfield_10015": "2026-09-10"}
```

### 3. Responsável

- Definir via `JIRA_ASSIGN_ISSUE` com email ou display name do usuário.
- Se o usuário não indicar responsável, use quem entregou (email/display name do contexto) ou mantenha o assignee atual.
- Lead do projeto: Tiago da Cunha Roglio — `tiago.roglio2112@gmail.com`.
- Não altere assignee sem motivo se já estiver correto.

### 4. Transição para Concluído

```text
JIRA_TRANSITION_ISSUE
  issue_id_or_key: HRR-N
  transition_id_or_name: <id de "Itens concluídos">
```

Preferir **id numérico** retornado por `JIRA_GET_TRANSITIONS`.

## Workflow Composio

```
1. COMPOSIO_SEARCH_TOOLS — use_case em inglês, known_fields: project_key: HRR
2. Se toolkit jira sem conexão ACTIVE → COMPOSIO_MANAGE_CONNECTIONS + WAIT
3. JIRA_GET_ISSUE (issue_key: HRR-N)
4. JIRA_GET_TRANSITIONS (issue_id_or_key: HRR-N)
5. JIRA_ASSIGN_ISSUE (se necessário)
6. JIRA_EDIT_ISSUE (customfield_10015 se vazio)
7. JIRA_ADD_COMMENT (comentário de entrega)
8. JIRA_TRANSITION_ISSUE → Concluído
9. Reportar key + browser_url + status final
```

## Fechar múltiplas issues

- Processe em lote (até ~5 por `COMPOSIO_MULTI_EXECUTE_TOOL`) quando independentes.
- Epic + filhos: feche filhos primeiro; Epic só se o usuário pedir e todos os filhos relevantes estiverem concluídos.
- Não feche issues de outros projetos (`DFLW`, `DS`, etc.) neste fluxo.

## Fora do padrão (não fazer)

- Fechar sem comentário de entrega
- Transicionar sem checar `JIRA_GET_TRANSITIONS` (status atual pode não permitir ir direto a Concluído)
- Sobrescrever data de início já preenchida sem pedido
- Fechar issue errada ou de projeto errado
- Assumir que `DFLW` ou `DS` é o board deste repositório — use `HRR`
- Citar paths `backend/`, `admin/` ou `frontend/` — neste repo o site vive em `app/` e `components/`
- Marcar como concluída issue que claramente não foi implementada/entregue

## Exemplo mínimo

Ver [examples.md](examples.md).
