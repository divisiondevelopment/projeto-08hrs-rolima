# Exemplos — close-jira-tasks (08HRS de Rolimã / HRR)

## Fechar uma Tarefa após implementação

**Issue:** `HRR-N`  
**Responsável:** `tiago.roglio2112@gmail.com`  
**Data de início:** `2026-09-10` (primeiro dia de trabalho)

### Comentário de entrega

```markdown
## Entrega

CTA de inscrição no hero aponta para o WhatsApp do evento, com a mesma mensagem usada na seção de contato.

## Alterações
- `components/layout/sections/hero.tsx` — botão "Fazer inscrição" com `wa.me` e `rel="noopener noreferrer"`
- `components/layout/sections/contact.tsx` — conferido o mesmo número e texto de inscrição

## Como validar
- [ ] Clicar em "Fazer inscrição" no hero abre o WhatsApp em nova aba
- [ ] A mensagem pré-preenchida menciona o 1º 08HRS de Rolimã
- [ ] Layout do hero ok em desktop e mobile (`npm run dev`)

## Observações
Inscrição continua fora do site (WhatsApp); não há formulário próprio.
```

### Sequência Composio (resumida)

```
JIRA_GET_ISSUE          → issue_key: HRR-N
JIRA_GET_TRANSITIONS    → issue_id_or_key: HRR-N  → id de "Itens concluídos"
JIRA_ASSIGN_ISSUE       → issue_id_or_key: HRR-N, assignee_name: tiago.roglio2112@gmail.com
JIRA_EDIT_ISSUE         → issue_id_or_key: HRR-N, fields: {"customfield_10015": "2026-09-10"}
JIRA_ADD_COMMENT        → issue_id_or_key: HRR-N, comment: <texto acima>
JIRA_TRANSITION_ISSUE   → issue_id_or_key: HRR-N, transition_id_or_name: <id confirmado>
JIRA_GET_ISSUE          → confirmar status.name === "Concluído"
```

**URL final:** https://divisionservices.atlassian.net/browse/HRR-N

---

## Fechar sem alterar data de início

Se `customfield_10015` já estiver preenchida, pule o passo `JIRA_EDIT_ISSUE`.

---

## Issue ainda não em andamento

Se o status for *Tarefas pendentes* e a transição direta para Concluído existir, pode ir direto. Caso contrário:

```
JIRA_TRANSITION_ISSUE → Em andamento
JIRA_TRANSITION_ISSUE → Itens concluídos
```

Sempre confirmar ids via `JIRA_GET_TRANSITIONS` para o status atual. Não reutilizar ids do board DFLW.

---

## Fechar só com comentário mínimo (docs/chore)

Quando a entrega for pequena (ex.: skill recriada, doc):

```markdown
## Entrega

Skill `create-jira-tasks` apontando para o projeto HRR em `.cursor/skills/create-jira-tasks/`.

## Alterações
- `.cursor/skills/create-jira-tasks/SKILL.md`
- `.cursor/skills/create-jira-tasks/examples.md`

## Como validar
- [ ] Anexar skill em prompt de criação de issue e confirmar uso do projeto HRR
```
