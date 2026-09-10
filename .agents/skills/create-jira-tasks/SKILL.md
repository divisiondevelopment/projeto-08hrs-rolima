---
name: create-jira-tasks
description: >-
  Cria Tarefas (nunca História/Story; nunca Epic novo) no Jira do 08HRS de
  Rolimã (projeto HRR) via Composio, com summary, categorias Frontend/Backend e
  descrição no padrão do time. Use when the user asks to create Jira issues,
  tasks, stories, backlog items, ou abrir cards no Jira/HRR; também quando
  planejar e registrar próximos passos no board. Para planejar ordem de
  execução sem escrever no board, use plan-jira-tasks.
---

# Criar tasks no Jira (08HRS de Rolimã)

## Quando usar

Sempre que o usuário pedir para criar, abrir ou registrar issues no Jira deste projeto. Complementa [plan-jira-tasks](../plan-jira-tasks/SKILL.md) (planejar ordem) e [close-jira-tasks](../close-jira-tasks/SKILL.md) (fechar cards).

Se o pedido for só planejar/ordenar tasks sem criar cards, use `plan-jira-tasks` — não esta skill.

Não invente issues fora do pedido; confirme escopo se não estiver claro.

## Sempre considerar

1. **Projeto:** key `HRR`, nome `08hrs de rolimã` (next-gen, project id `10334`). Board: [HRR board 202](https://divisionservices.atlassian.net/jira/software/projects/HRR/boards/202). Confirme com `JIRA_GET_ALL_PROJECTS` se a conexão mudar.
2. **Integração:** Composio MCP (`plugin-composio-composio`). Fluxo obrigatório:
   - `COMPOSIO_SEARCH_TOOLS` (nova sessão: `session.generate_id: true`)
   - `COMPOSIO_MULTI_EXECUTE_TOOL` com o `session_id` retornado
   - Tool de criação: `JIRA_CREATE_ISSUE`
3. **Tipo obrigatório do card de trabalho:** sempre **Tarefa**, nunca História/Story. Ver [Tipo de issue (Jira)](#tipo-de-issue-jira).
4. **Hierarquia:** **nunca crie EPICs**. Use sempre um Epic já existente e relacionado; se não houver nenhum relacionado, deixe a Tarefa sem Epic (`parent` omitido). Não use `parent` em Subtarefa apontando para Epic; só Tarefa (e Subtarefa sob Tarefa). Não crie História como filho.
5. **Produto:** site Next.js do 1º 08HRS de Rolimã (Esteio/RS, 18/10/2026). Inscrição hoje é WhatsApp; Instagram `@08hrsderolimaesteio`. Não assuma API/backend neste repo.
6. **Repo:** paths reais — `app/`, `components/layout/`, `components/layout/sections/`, `components/ui/`, `components/icons/`, `lib/`, `public/`. Não cite `backend/`, `admin/` ou `frontend/` como no Division Flow.
7. **Stack:** Next.js 14 + React + Tailwind + shadcn. Scripts: `npm run dev`, `npm run build`, `npm run lint`.
8. **Idioma:** português (Brasil) na descrição do summary e no corpo da issue. O **tipo** do summary fica em inglês (`feat`, `fix`, …), como nos Conventional Commits.
9. **Camada:** o Backend/Frontend deve ser setado sempre pelos badges (categorias) `Frontend` `Backend`. A skill **nunca** deve incluir o prefixo BE/FE no nome das tasks. **NUNCA** `frontend` (tudo minúsculo). **Nunca crie novos badges (categorias).**
10. **Entrega:** ao terminar, liste keys + URLs `https://divisionservices.atlassian.net/browse/HRR-N`, agrupadas sob o Epic existente quando houver.
11. **Anexos / imagens:** o padrão é **não tentar o upload**. Crie a Tarefa, descreva as referências no corpo e **peça para o usuário anexar na issue**. `JIRA_ADD_ATTACHMENT` não aceita path local (404). Hosts públicos e pasta temp (`.tmp-jira-refs`) estão fora. O único caminho técnico que já anexou um arquivo está em [Como o anexo chegou a subir](#como-o-anexo-chegou-a-subir) — use só se o usuário insistir depois do aviso; senão, não execute.

## Padrão de linguagem (summary)

O título **sempre** segue Conventional Commits (tipos do [padroes-de-commits](https://github.com/iuricode/padroes-de-commits)). **Sem** prefixo de camada (`[BE]`, `[FE]`, `[FE/BE]`, `[BE/FE]`).

### Formato obrigatório

```
<tipo>: <descrição curta>
```

| Peça | Regra |
|------|--------|
| `<tipo>` | Um dos tipos abaixo, em minúsculas, seguido de `:` e espaço. **Sem emoji** no título do Jira. |
| `<descrição>` | PT-BR, imperativo/infinitivo curto, sem ponto final. |
| Camada | **Proibido** no summary. Vá só no badge (categoria) `Frontend` ou `Backend`. |

| Issue | Formato | Exemplo |
|-------|---------|---------|
| Tarefa de UI / site | `<tipo>: <ação>` | `feat: CTA de inscrição via WhatsApp no hero` |
| Tarefa de servidor (raro neste repo) | `<tipo>: <ação>` | `feat: endpoint de inscrição no formulário de contato` |

### Tipos permitidos (obrigatório escolher um)

| Tipo | Quando usar na task |
|------|---------------------|
| `feat` | Novo recurso / incremento de produto (MAJOR path = MINOR semântico) |
| `fix` | Correção de bug |
| `docs` | Só documentação (README, etc.), sem código |
| `test` | Só testes (criar/alterar/excluir), sem código de prod |
| `build` | Build e dependências |
| `perf` | Mudança de código focada em performance |
| `style` | Formatação/lint (sem mudança de comportamento) |
| `refactor` | Refatoração sem mudar comportamento observável |
| `chore` | Tarefas de config/admin/pacotes (ex.: gitignore), sem código de prod |
| `ci` | Integração contínua |
| `raw` | Arquivos de configuração, dados, parâmetros |
| `cleanup` | Remover código morto/comentado, limpeza |
| `remove` | Excluir arquivos, diretórios ou funcionalidades obsoletas |

Escolha o tipo pela **intenção dominante** da issue. Nova seção/CTA → `feat`. Bug visual/link quebrado → `fix`. Só README → `docs`. Não invente tipos fora da tabela.

Regras extras:
- Summary curto o bastante para ler no board; detalhes ficam na description.
- Componentes, âncoras (`#contact`) e rotas em backticks na description; no summary só se couber naturalmente.
- O tipo do commit **não** vira badge/categoria.

## Badges (categorias) — Frontend / Backend

A camada **nunca** vai no summary. Sempre pelos badges (categorias) já existentes no board:

| Badge (categoria) | Quando usar |
|-------------------|-------------|
| `Frontend` | Tarefa de UI / Next.js (`app/`, `components/`) — o caso comum deste repo |
| `Backend` | Tarefa de API / servidor. Só use se o pedido realmente criar código de backend; este repo hoje é só o site |

Regras:
- Grafia **exata**: `Frontend` e `Backend`. **NUNCA** `frontend`, `backend`, `FRONTEND`, `BE`, `FE`.
- **Nunca crie novos badges (categorias).** Só reutilize `Frontend` e `Backend`. Não invente `landing`, `evento`, `fase-N`, `frontend`, etc.
- Uma Tarefa recebe **um** badge: `Frontend` **ou** `Backend` (não ambos). Se o pedido misturar camadas, fatie em duas Tarefas.
- Tarefa sem camada clara (só `docs` transversal): omita o badge; não invente outro.
- No Composio, passe o badge existente no campo de labels/categorias da issue (`labels: ["Frontend"]` ou `labels: ["Backend"]`). Se o create falhar por campo de categoria, leia o metadata (`JIRA_GET_CREATE_METADATA_ISSUE_TYPE_FIELDS`) e reutilize o valor **já existente** — não crie opção nova.

## Tópicos obrigatórios na description

Use markdown nesta ordem. Omita só `Dependência` quando não houver.

```markdown
## Objetivo
<1–2 frases: o porquê / valor>

## Escopo
- <bullet do que entra>
- <seções, componentes, âncoras ou arquivos>

## Acceptance criteria
- [ ] <critério verificável>
- [ ] <critério verificável>

## Dependência
<key ou nome da issue/prereq>

## Referência
`<paths do repo>`, CLIs ou contratos existentes
```

Regras dos tópicos:
- **Objetivo:** porquê, não lista de arquivos.
- **Escopo:** o que implementar; bullets; cite seções (`Hero`, `Contact`), âncoras (`#contact`) e componentes.
- **Acceptance criteria:** checkboxes `- [ ]`, testáveis, sem vaguidade (“funciona bem”).
- **Dependência:** bloqueios reais (navbar antes de novas âncoras).
- **Referência:** paths existentes no repo; não invente arquivos.

## Tipo de issue (Jira)

Cards de trabalho no HRR são **sempre Tarefa**. Nunca criar História / User Story, mesmo se o usuário pedir “story”, “user story” ou “história”. Nunca criar Bug como tipo — um `fix:` continua sendo Tarefa.

**Nunca crie EPICs.** Se o usuário pedir um Epic, recuse a criação e ofereça: buscar Epics existentes e criar Tarefas sob o relacionado (ou sem Epic).

Confirmado em `JIRA_GET_PROJECT` (`project_id_or_key: HRR`, `expand: issueTypes`):

| Nome na UI (PT) | `untranslatedName` | `id` | `hierarchyLevel` | `subtask` | Quando usar |
|-----------------|--------------------|------|------------------|-----------|-------------|
| Tarefa | `Task` | `10415` | `0` | `false` | **Sempre** — único tipo a criar |
| Epic | Epic | `10412` | `1` | `false` | **Só vincular** se já existir e for relacionado. **Proibido criar.** |
| Subtask | Subtask | `10411` | `-1` | `true` | Só filha de uma Tarefa (nunca de Epic) |
| História | `História` | `10413` | `0` | `false` | **Proibido** — não passar este id nem o nome |
| Bug | Bug | `10414` | `0` | `false` | **Proibido** — correção vira Tarefa com `fix:` |

Campo do Composio `JIRA_CREATE_ISSUE` / `JIRA_BULK_CREATE_ISSUE`:

- Parâmetro: **`issue_type`** (string). Aceita id ou nome localizado.
- **Obrigatório nos cards de trabalho:** `issue_type: "10415"` (preferir o id; alternativa aceita: `"Tarefa"`).
- **Proibido:** `issue_type: "10413"`, `"História"`, `"Story"`, `"User Story"`, `"10414"`, `"Bug"`.
- **Proibido criar Epic:** nunca `issue_type: "10412"` nem `"Epic"`.
- Subtarefa: `issue_type: "10411"` + `parent` = key da Tarefa.

Se os ids mudarem, revalidar com `JIRA_GET_PROJECT` (scope project id `10334`) — não adivinhar pelo nome em inglês (`Task` vs `Tarefa`).

## Workflow Composio

```
1. COMPOSIO_SEARCH_TOOLS — use_case em inglês, known_fields: project_key: HRR
2. Se toolkit jira sem conexão ACTIVE → COMPOSIO_MANAGE_CONNECTIONS + WAIT
3. Buscar Epics já existentes (JQL: project = HRR AND issuetype = Epic). Vincular só se houver um claramente relacionado; senão, Tarefa sem parent.
4. Criar Tarefas (issue_type 10415) em paralelo (até ~5 por MULTI_EXECUTE); parent = key do Epic existente ou omitir
5. Badge: labels exatamente "Frontend" ou "Backend" (nunca criar categoria nova)
6. Se create falhar por campo obrigatório → JIRA_GET_CREATE_METADATA_ISSUE_TYPE_FIELDS (issueTypeId 10415) → retry
7. Reportar keys + browser_url ao usuário
8. Se o pedido incluir imagens/prints: **não anexar**. Avisar o usuário para subir os arquivos na issue
```

Parâmetros mínimos de `JIRA_CREATE_ISSUE`:
- `project_key`: `HRR`
- `issue_type`: `"10415"` (Tarefa) — **nunca** `"10412"`
- `summary`, `description`
- `labels`: `["Frontend"]` **ou** `["Backend"]` (grafia exata; omitir se sem camada)
- `parent`: key de um Epic **já existente** e relacionado — omitir se não houver

Não passe `assignee` sem pedido explícito.

## Como o anexo chegou a subir

Memória do fluxo que **já anexou** um JPEG no Division Flow (DFLW-363). **Não é o caminho padrão** — o padrão continua sendo o usuário anexar na mão. Isto existe para o próximo agente não redescobrir o mesmo labirinto.

### Por que o upload direto falha

| Tentativa | Resultado |
|-----------|-----------|
| Path local em `file_to_upload.s3key` | HTTP 404 — o Jira/Composio não lê o disco da máquina |
| Host público (`0x0.st`, `transfer.sh`, catbox, file.io) | Bloqueado (exposição) ou host recusou upload |
| `COMPOSIO_REMOTE_BASH_TOOL` só para gravar/explorar dirs | Auto-review bloqueia; permissões no sandbox podem diferir do workbench |
| Workbench só “preparar buffer” / listar / `mkdir` | Auto-review bloqueia — cada célula precisa **completar o anexo** |
| `mcpDetails` como string | Erro de formato — tem de ser objeto |
| Base64 partido em chunks incompletos | Anexa JPEG truncado |

`JIRA_ADD_ATTACHMENT` exige os três campos:

```
issue_key: "HRR-N"
file_to_upload:
  name: "ref-01-hero.jpg"
  mimetype: "image/jpeg"
  s3key: "<chave retornada pelo upload_local_file>"
```

Não existe campo de path local nem de `content_b64` nesse tool.

### Fluxo que funcionou (uma célula só)

Mesma sessão Composio (`session_id` do `COMPOSIO_SEARCH_TOOLS`). No `COMPOSIO_REMOTE_WORKBENCH`, helpers já estão carregados — **não** reimportar `upload_local_file` / `run_composio_tool`.

Numa única célula (gravar + S3 + Jira; senão o auto-review corta):

```python
import base64, os

os.makedirs("/home/user/jira-refs", exist_ok=True)
path = "/home/user/jira-refs/ref-01-hero.jpg"
open(path, "wb").write(base64.b64decode(B64_COMPLETO))

up, err = upload_local_file(path)
if err:
    print("UPLOAD_FAIL", err)
else:
    res, err2 = run_composio_tool(
        "JIRA_ADD_ATTACHMENT",
        {
            "issue_key": "HRR-N",
            "file_to_upload": {
                "name": "ref-01-hero.jpg",
                "mimetype": "image/jpeg",
                "s3key": up["s3key"],
            },
        },
    )
    print("attach", res, err2)
```

`upload_local_file` devolve `s3key` no formato `project/.../tool_router_session/.../<id>`. Esse valor é o que vai em `file_to_upload.s3key` (não use o `s3_url` de redirect).

Conferir com `JIRA_GET_ISSUE` (`fields: ["attachment"]`) e checar `size` — se estiver muito menor que o arquivo local, o JPEG veio truncado.

### Regras se o usuário insistir

- Um arquivo por célula; JPEG pequeno e **base64 inteiro** (padding válido, termina em `FF D9`).
- Não criar `.tmp-jira-refs` no repo.
- Não hospedar o print em site público.
- Se o auto-review bloquear de novo, **parar** e pedir para o usuário anexar na issue.

## Como fatiar o backlog

1. Este repo é o **site** do evento. Quase tudo é `Frontend`. Só fatie `Backend` se o pedido criar servidor/API.
2. Não crie Epic para agrupar. Procure Epic existente; se nenhum servir, deixe sem Epic.
3. Uma **Tarefa** ≈ um incremento entregável (uma seção, um CTA, um ajuste de layout) **ou** item menor (chore/config).
4. Fundação (`app/layout.tsx`, tema, navbar) antes das seções que dependem dela.
5. Não misture “nova seção” e “mudar CTA de inscrição” na mesma Tarefa, salvo pedido explícito de issue única.

## Fora do padrão (não fazer)

- Criar História / User Story (`issue_type` `10413`, `"História"`, `"Story"`)
- Criar Bug (`issue_type` `10414`) — use Tarefa com `fix:`
- Criar Epic (`issue_type` `10412` / `"Epic"`), mesmo se o usuário pedir iniciativa/fase
- Prefixar o summary com `[BE]`, `[FE]`, `[FE/BE]` ou `[BE/FE]`
- Summary sem `<tipo>:` Conventional Commits (ex.: `countdown no hero` — falta `feat:`)
- Tipo inventado ou emoji no título do Jira
- Description só com um parágrafo solto (faltando Objetivo / Escopo / AC)
- Description do summary em inglês sem necessidade (o tipo continua em inglês)
- Badge/categoria em minúsculo (`frontend`, `backend`) ou grafia diferente de `Frontend` / `Backend`
- Criar novos badges (categorias) — inclusive `landing`, `evento`, `fase-N` ou qualquer outro
- Citar plano `.cursor/plans/*` como entrega (plan files não são o board)
- Citar paths `backend/`, `admin/` ou `frontend/` deste repositório — aqui o site vive em `app/` e `components/`
- Criar issues no projeto `DFLW` ou `DS` — esse repositório usa `HRR`
- Tentar anexar imagem como primeiro recurso. Padrão: usuário anexa na mão. O labirinto workbench + `upload_local_file` + `s3key` está documentado em [Como o anexo chegou a subir](#como-o-anexo-chegou-a-subir) — não reinventar, não usar host público, não deixar JPEG truncado.

## Exemplo mínimo

Ver [examples.md](examples.md).
