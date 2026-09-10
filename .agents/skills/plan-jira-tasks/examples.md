# Exemplos — plan-jira-tasks (08HRS de Rolimã / HRR)

## Input do usuário

```
planeja as tasks HRR-1, HRR-2
```

## Fetch Jira (read-only)

`COMPOSIO_SEARCH_TOOLS` com `session.generate_id: true` e `known_fields: project_key: HRR, issue_keys: HRR-1, HRR-2`, depois `JIRA_GET_ISSUE` em paralelo.

Parâmetros por issue:

```json
{
  "issue_key": "HRR-1",
  "fields": ["summary", "description", "status", "issuetype", "parent", "labels", "subtasks", "issuelinks", "priority"],
  "expand": "renderedFields"
}
```

## Resumo extraído (exemplo)

- **Key:** [HRR-1](https://divisionservices.atlassian.net/browse/HRR-1)
- **Summary:** `feat: CTA de inscrição via WhatsApp no hero`
- **Dependência no card:** nenhuma
- **Referências:** `components/layout/sections/hero.tsx`, `components/layout/sections/contact.tsx`

- **Key:** [HRR-2](https://divisionservices.atlassian.net/browse/HRR-2)
- **Summary:** `refactor: extrair URL do WhatsApp para constante compartilhada`
- **Dependência no card:** nenhuma
- **Referências:** `components/layout/sections/hero.tsx`, `components/layout/sections/contact.tsx`

## Cruzamento com o repo

- `hero.tsx` e `contact.tsx` já têm `WHATSAPP_URL` duplicada
- Navbar não usa WhatsApp; Instagram está em `navbar.tsx` e `contact.tsx`
- Data do evento (`18 de outubro de 2026`) aparece no hero; countdown em `countdown.tsx`

## Overlap / recorte

- **HRR-1 + HRR-2:** os dois tocam `hero.tsx` e a URL do WhatsApp
- **Fazer primeiro (HRR-2):** extrair a constante — senão o CTA da HRR-1 duplica de novo
- **Fazer depois (HRR-1):** apontar o botão do hero para a constante já extraída

## Ordem recomendada

1. **HRR-2** — constante compartilhada
2. **HRR-1** — CTA do hero usando a constante

## Trecho do CreatePlan (formato esperado)

```markdown
# HRR-2, HRR-1 — ordem de execução

## Ordem

1. [HRR-2](https://divisionservices.atlassian.net/browse/HRR-2) — extrair URL do WhatsApp
2. [HRR-1](https://divisionservices.atlassian.net/browse/HRR-1) — CTA no hero

## HRR-2 — fazer / não fazer

**Fazer:**
- Extrair `WHATSAPP_URL` de [`hero.tsx`](components/layout/sections/hero.tsx) e [`contact.tsx`](components/layout/sections/contact.tsx)

**Não fazer agora:**
- Mudar o texto do botão do hero (HRR-1)

## HRR-1 — fazer / não fazer

**Fazer:**
- Botão "Fazer inscrição" no hero usando a constante da HRR-2

**Não fazer agora:**
- Formulário próprio de inscrição (não existe neste repo)
```

## Várias keys

```
planeja HRR-1, HRR-2, HRR-3
```

Mesmo fluxo: fetch em paralelo (até ~5), cruzar paths, declarar overlap e ordenar layout/constantes antes das seções. Links sempre `https://divisionservices.atlassian.net/browse/HRR-N`.

## O que NÃO fazer neste fluxo

- `JIRA_EDIT_ISSUE` para atualizar Dependência no board
- `JIRA_CREATE_ISSUE_LINK` para Blocks/Relates
- `JIRA_ADD_COMMENT` com ordem de execução
- Implementar código antes do usuário confirmar o plano
- Buscar ou planejar issues `DFLW-*` ou `DS-*`

Se o usuário pedir gravar dependências no Jira, indicar [create-jira-tasks](../create-jira-tasks/SKILL.md) — fora do escopo de planejamento.
