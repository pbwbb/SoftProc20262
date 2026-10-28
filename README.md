# Portal do Processo Vértice de Desenvolvimento

Portal em [Docusaurus](https://docusaurus.io/) com o processo organizacional de desenvolvimento de software da Vértice Sistemas (disciplina Processo de Software, UNISINOS, 2026/2).

## Rodar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm start          # servidor de desenvolvimento em http://localhost:3000
npm run build      # gera o site estático em build/ (falha se houver link quebrado)
npm run serve      # serve o build localmente
```

## Estrutura

```
docs/
  index.md                       página inicial (rota /)
  00-Gestao-do-Trabalho/         termo de abertura, sprints, papéis, glossário, retrospectivas
  01-Contexto-e-Diagnostico/     diagnóstico organizacional (Sprint 1)
  02-Estrutura-do-Processo/      ciclo de vida, fases, atividades, RACI, artefatos, customização (Sprint 2)
  03-Consolidacao/               proposta consolidada, aderência, implantação, indicadores (Sprint 3)
scripts/migrar-wiki.py           conversor da Wiki do Azure DevOps para docs/
```

- O menu lateral é gerado a partir das pastas. A ordem vem de `sidebar_position` no topo de cada página e de `_category_.json` em cada pasta.
- O prefixo numérico (`02-`) ordena as pastas e não aparece na URL: `docs/02-Estrutura-do-Processo/Matriz-RACI.md` vira `/Estrutura-do-Processo/Matriz-RACI`.
- Os diagramas usam blocos ` ```mermaid `.
- Os arquivos `.md` são lidos como Markdown puro, sem JSX, então `<placeholder>` nos templates não quebra o build. Use `.mdx` só se precisar de componentes React.
- Links entre páginas usam o caminho relativo do arquivo (`./Fases-e-Marcos.md`). O build falha se algum link estiver quebrado.

## Atualizar a partir da Wiki

O conteúdo de `docs/` foi gerado da Wiki do Azure DevOps. Se a Wiki continuar sendo editada, regenere com:

```bash
git clone https://dev.azure.com/SoftProc20262/Processo%20de%20Software%202026-2/_git/Processos-de-Software-2026-2.wiki wiki
python3 scripts/migrar-wiki.py wiki docs
```

O script sobrescreve as páginas migradas. Se o portal virar a fonte oficial, edite direto em `docs/` e pare de usar o script.

## Publicar no GitHub Pages

O workflow `.github/workflows/deploy.yml` compila e publica o site a cada push na branch `main`. A URL e o caminho base vêm do próprio repositório, então não é preciso editar `docusaurus.config.js`.

1. Crie o repositório no GitHub e faça o push deste projeto para a branch `main`
2. Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**
3. Acompanhe a execução na aba **Actions**. O site fica em `https://<usuario>.github.io/<repositorio>/`

Para congelar a Release 1.0 do processo, use o versionamento de docs do Docusaurus: `npm run docusaurus docs:version 1.0`.
