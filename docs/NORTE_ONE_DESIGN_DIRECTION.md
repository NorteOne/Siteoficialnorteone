# Norte One - Direcao Visual

Este documento e a fonte de verdade visual do site enquanto nao houver um arquivo de design aprovado no Figma. Mudancas futuras devem preservar esta direcao ou registrar aqui, de forma explicita, a decisao que a substitui.

## 1. Posicionamento

A Norte One deve ser percebida como uma parceira que entende problemas empresariais e operacoes reais. Estrategia, software, automacao, integracoes, dados e IA sao meios para construir a solucao adequada; o resultado empresarial e a finalidade.

O site nao deve parecer uma software house tradicional, um catalogo de tecnologias ou um template SaaS. A comunicacao deve seguir esta ordem:

1. empresa;
2. operacao;
3. problema e impacto;
4. diagnostico;
5. solucao;
6. tecnologia adequada;
7. implementacao;
8. resultado.

Nao inventar clientes, cases, metricas, depoimentos, certificacoes, numeros ou logos.

## 2. Auditoria de base - 25/09/2026

### Pontos que reduziam a percepcao premium

- Hero limitado a uma coluna estreita e centralizada, com grande area vazia sem funcao compositiva.
- Headline generica sobre "solucoes digitais", colocando a categoria tecnica antes do resultado empresarial.
- Dois CTAs com a mesma hierarquia, diluindo a acao principal.
- Gradientes radiais decorativos sem funcao de comunicacao.
- Cabecalho com blur e sombra, aproximando a interface da estetica SaaS.
- Contato duplicado como item de navegacao e como botao.
- Escala tipografica conservadora, com pouca tensao editorial entre titulo, texto e espaco negativo.
- Tokens nomeados a partir de componentes (`card`) em vez de papeis visuais.
- Excesso de cards arredondados, icones genericos e repeticao de grids nas secoes posteriores.
- Espacamentos responsivos repetidos diretamente nas classes, sem uma escala semantica comum.
- No mobile, os CTAs empilhados ocupavam area desproporcional e o botao flutuante de WhatsApp podia competir com o inicio da secao seguinte.

### Elementos preservados

- Paleta oficial ja configurada.
- Manrope para toda a hierarquia tipografica, nos pesos 400, 500, 600 e 700.
- Logo oficial e estrutura semantica de navegacao.
- Contraste azul profundo / off white e suporte a movimento reduzido.
- Estrutura e conteudo das secoes posteriores, fora do escopo desta etapa.

## 3. Sistema visual

### Cores

| Papel | Token | Valor | Uso |
| --- | --- | --- | --- |
| Fundo principal escuro | `--color-azul-profundo` | `#0B1F33` | Navegacao, hero e faixas institucionais |
| Fundo principal claro | `--color-off-white` | `#F4F1EA` | Paginas e secoes editoriais |
| Assinatura | `--color-cobre` | `#B87945` | Linhas, marcadores e enfase rara |
| Texto de apoio escuro | `--color-azul-nevoa` | `#D8E1E8` | Texto secundario sobre azul |
| Texto secundario claro | `--color-cinza-pedra` | `#8A8F98` | Texto de apoio sobre off white |

Azul profundo e off white devem dominar. Cobre nao deve ser usado em grandes superficies nem como cor recorrente de todos os CTAs.

### Tipografia

- Familia unica: Manrope, pesos 400, 500, 600 e 700.
- Display: 48-52 px mobile, 72 px tablet e 80-88 px desktop.
- H1 interno: 44-48 px mobile e ate 68 px desktop.
- H2: 36-40 px mobile e 48-56 px desktop.
- H3: 24-30 px. Corpo grande: 18-21 px. Corpo: 16-18 px. Labels: 11-13 px.
- Letter spacing: zero. A hierarquia vem de escala, peso, alinhamento e espaco.
- Evitar mais de tres escalas tipograficas relevantes na mesma tela.

### Layout e grid

- Container maximo: 88 rem / 1408 px.
- Gutters: 20 px mobile, 40 px tablet e 64 px desktop.
- Desktop: grid de 12 colunas com intervalos de 32 px quando a composicao exigir alinhamento interno.
- Hero nao deve ser uma caixa centralizada; usar assimetria controlada e alinhamentos compartilhados.
- O primeiro viewport deve sugerir o inicio da secao seguinte em desktop e mobile.

### Espacamento

- Escala base: 4, 8, 12, 16, 20, 24, 32, 48, 64, 72, 96 e 128 px.
- Espacamento vertical de secao: 64 px mobile, 96 px tablet e 128 px desktop.
- Nao criar novos valores sem verificar primeiro se a escala resolve o caso.

### Bordas, radius e sombras

- Bordas: 1 px, baixo contraste, usadas para estrutura e separacao.
- Radius: 4 px pequeno, 6 px medio e 8 px grande.
- Sombras nao fazem parte da linguagem principal. Usar apenas quando a elevacao comunicar estado ou sobreposicao real.
- Evitar cards flutuantes, containers aninhados e superficies arredondadas por padrao.

### Botoes e links

- CTA principal: cobre fosco, texto azul noturno e uso limitado aos momentos comerciais prioritarios.
- CTA secundario: contorno de baixo contraste, sem sombra ou efeito de elevacao.
- Cobre e assinatura rara; nao deve dominar superficies, secoes ou sequencias de acoes.
- Botoes usam radius de 4 px e nao usam efeito de escala ou sombra no hover.
- Links textuais devem indicar estado com cor, sublinhado ou linha discreta; nunca depender apenas de animacao.

### Breakpoints de referencia

- Mobile: 320-639 px, com QA prioritario em 390 px.
- Tablet: 640-1023 px, com QA em 768 px.
- Desktop: 1024 px ou mais, com QA prioritario em 1440 px.

## 4. Navegacao, hero e como pensamos

- Navegacao com quatro destinos claros; contato permanece como acao separada. "Insights" so volta ao menu quando houver conteudo editorial real, aprovado e publicado.
- Cabecalho sem vidro, gradiente ou sombra decorativa.
- Hero tipografico e assimetrico, com slot final para fotografia arquitetonica aprovada. Enquanto o ativo nao existe, o slot usa apenas planos estruturais, sem fotografia simulada.
- Hero estatico, sem animacao de entrada; a composicao e a tipografia carregam a hierarquia.
- Headline: "Sua empresa pode funcionar melhor."
- Subheadline: "A Norte One entende processos, identifica gargalos e constroi solucoes para melhorar a operacao — usando tecnologia apenas quando ela realmente faz sentido."
- CTA: "Falar sobre minha operacao".
- Texto principal parte da melhoria empresarial e apresenta tecnologia apenas como criterio de escolha.
- Apenas uma acao principal no hero.
- "Como pensamos" usa um fluxo editorial numerado: Entender, Diagnosticar, Desenhar, Construir, Integrar e Medir.
- A afirmacao de independencia tecnologica deixa explicito que nao propor uma nova ferramenta pode ser a melhor decisao.
- No mobile e tablet, o WhatsApp flutuante so aparece depois que o usuario conclui a secao "Como pensamos".

## 5. Pendencias para a proxima etapa

- Harmonizar Footer, formularios, badges e paginas internas com os tokens normalizados.
- Introduzir fotografia apenas com acervo arquitetonico/material de qualidade e licenca confirmada.
- Atualizar metadata, Footer e paginas internas que ainda lideram com "tecnologia" ou "solucoes digitais".
- Substituir a representacao editorial da Norsey por imagens reais do produto somente quando screenshots oficiais, atuais e aprovados estiverem disponiveis.

## 6. Visual QA desta etapa

Capturas verificadas em navegador real:

- 1440 x 1000: navegacao completa, headline em tres linhas, CTA e texto de apoio alinhados em eixos opostos do grid.
- 768 x 1024: navegacao compacta, headline em quatro linhas e inicio da secao seguinte visivel.
- 390 x 844: hierarquia reordenada para mensagem, explicacao e CTA; nenhuma quebra ou overflow horizontal.
- 320 x 800: escala e espacamento reduzidos; CTA corrigido para permanecer em uma linha e sem overflow horizontal.
- Menu em 390 x 844: cinco destinos, acao de contato separada, foco inicial no botao de fechar e fechamento por Escape.

Problemas encontrados e corrigidos durante o QA:

- O primeiro passe dependia da animacao `Reveal`, causando captura inconsistente do marcador superior. O hero passou a ser estatico.
- A ordem inicial no mobile colocava o CTA antes da explicacao. O texto de contexto agora precede a acao.
- Em 320 px, o CTA quebrava em duas linhas e a headline ocupava altura excessiva. A escala, o gap e o padding foram ajustados apenas para 320-374 px.

## 7. Visual QA - hero e como pensamos

Capturas verificadas em navegador real depois de recarregar a pagina em cada viewport:

- 1440 x 1000: headline em duas linhas, composicao assimetrica preservada e fluxo de seis etapas em uma faixa editorial horizontal.
- 768 x 1024: headline em duas linhas, contexto e CTA sem sobreposicao; WhatsApp ausente no primeiro viewport.
- 390 x 844: headline, subheadline e CTA em fluxo vertical; WhatsApp ausente no hero e durante toda a secao "Como pensamos".
- 320 x 800: CTA em uma linha, texto sem corte e largura da pagina igual a largura do viewport.
- Em todos os quatro viewports, nao houve overflow horizontal.
- No mobile, o WhatsApp reaparece somente depois que o limite inferior de "Como pensamos" sai da tela.
- O console do navegador nao apresentou erros nem avisos no host de desenvolvimento valido.

Problemas encontrados e corrigidos durante o QA desta fase:

- O estado preservado pelo Fast Refresh podia manter o WhatsApp visivel depois de uma mudanca de breakpoint. A verificacao final foi repetida com navegacao limpa em cada largura.
- O bloco flutuante aparecia sobre a primeira etapa em uma versao intermediaria. O criterio final usa o fim real da secao, e o componente deixa de existir no DOM enquanto estiver oculto.
- O destino da ancora "Como pensamos" ficava sob o cabecalho fixo. A secao agora reserva margem de rolagem adequada por breakpoint.

Esta fase nao conclui o redesign integral da homepage. Ela implementa somente Hero, comportamento mobile do WhatsApp, "Como pensamos" e o ajuste imediato de transicao entre essas areas.

## 8. Content Debt

Conteudos e padroes que ainda sustentam uma leitura de software house e devem ser tratados em fases futuras:

- A pagina interna `/sobre` ainda lidera com tecnologia e permanece pendente; esta fase altera somente a camada institucional da homepage.
- As demais paginas internas ainda nao foram revistas segundo a nova arquitetura narrativa.
- A pagina `/solucoes` e suas paginas internas continuam organizadas por categorias tecnicas; a homepage alterou somente a apresentacao de capacidades.
- A pagina `/segmentos` continua organizada como uma lista de mercados com icones; a homepage alterou somente Contextos.
- O repositorio nao contem logo, screenshots ou URL oficial da Norsey; estes ativos permanecem pendentes e nao devem ser recriados.
- O repositorio nao contem fotografia real do fundador.
- A homepage pode receber uma futura fase de polimento depois que assets reais estiverem disponiveis, sem reabrir sua arquitetura narrativa.

## 9. Problemas e capacidades

### Arquitetura narrativa aprovada

O inicio da homepage preserva a ordem:

1. Hero: promessa de melhoria empresarial;
2. Como pensamos: criterio de diagnostico e independencia tecnologica;
3. Problemas: reconhecimento de situacoes concretas e suas consequencias;
4. Capacidades: dimensoes da operacao que podem ser melhoradas;
5. Conteudos posteriores: mantidos ate suas respectivas fases.

"Como pensamos" permanece antes de "Problemas" porque estabelece o criterio da Norte One antes de demonstrar repertorio. A sequencia evita que o reconhecimento pareca apenas uma lista de dores comerciais.

### Problemas

- Quatro observacoes substituem seis cards genericos.
- Cada linha relaciona uma situacao reconhecivel a uma consequencia operacional.
- Numeracao, categorias, tipografia e divisores organizam a leitura; nao ha icones, badges, sombras ou caixas.
- A secao nao inclui CTA. Sua funcao e gerar reconhecimento e conduzir naturalmente a capacidades.
- No mobile, cada observacao permanece compacta e preserva a ordem categoria, situacao e consequencia.

### Capacidades

- A homepage deixa de apresentar tecnologias como produtos a escolher.
- As seis dimensoes sao Operacao, Eficiencia, Conexao, Decisao, Relacionamento e Ferramentas adequadas.
- Software, automacao, integracoes, dados e IA aparecem uma unica vez, como informacao secundaria e condicionada a uma necessidade compreendida.
- A matriz usa linhas e espacamento em vez de cards, icones, links individuais ou efeitos de hover.
- As paginas tecnicas existentes nao foram alteradas nesta fase.

### Metodologia

A secao de Metodologia deixou de ser renderizada na homepage. O componente e seu conteudo foram preservados para uma possivel fase futura sobre como uma solucao entra em operacao, mas nao devem voltar sem assumir uma funcao diferente de "Como pensamos".

### Padroes editoriais

- Comecar por situacao, impacto ou necessidade empresarial.
- Nomear tecnologia apenas depois que a finalidade estiver clara.
- Usar cards somente quando a ideia de objeto ou container tiver funcao real.
- Nao usar icones para repetir um significado ja evidente no titulo e no texto.
- Evitar grades simetricas de dores, catalogos tecnicos e animacao decorativa.

## 10. Visual QA - problemas e capacidades

Capturas verificadas no build de producao:

- 1440 x 1000: Problemas usa linhas editoriais em quatro colunas funcionais; Capacidades organiza seis dimensoes em uma matriz de duas colunas, sem cards ou icones.
- 768 x 1024: a hierarquia tipografica permanece clara e a matriz conserva duas colunas sem colisao ou texto cortado.
- 390 x 844: situacao e consequencia passam a uma leitura vertical; Capacidades usa numero e titulo na primeira linha e descricao na largura completa.
- 320 x 800: nenhuma quebra estrutural ou overflow horizontal; a descricao em largura completa reduz a altura acumulada dos seis itens.
- A secao de Metodologia nao aparece no DOM da homepage.
- A sessao limpa de producao nao apresentou erros nem avisos no console.

Problemas encontrados e corrigidos durante o QA:

- A primeira versao de Capacidades mantinha as descricoes na coluna estreita ao lado dos numeros em 320 e 390 px, alongando a pagina. No mobile, as descricoes passaram a ocupar a largura completa.
- Capturas de elemento faziam o cabecalho fixo cobrir o inicio das secoes. As evidencias finais usam o viewport posicionado com a altura real do cabecalho.
- A sessao de navegador aberta durante a troca entre servidor de desenvolvimento e producao preservou erros antigos de assets. A verificacao de console foi repetida em uma sessao de producao nova e limpa.

Teste de percepcao ate Capacidades: a leitura resultante e "empresa que entende operacoes e resolve problemas empresariais usando diferentes ferramentas". Tecnologia nao lidera nenhuma das quatro primeiras secoes e aparece apenas como mecanismo secundario ao final de Capacidades.

## 11. Contextos e criterios

### Arquitetura narrativa

O trecho intermediario passa a seguir esta ordem:

1. Capacidades: onde a Norte One pode melhorar a operacao;
2. Contextos: em quais situacoes esses desafios aparecem;
3. Criterios: como a Norte One decide o que vale fazer;
4. Prova de execucao: um problema de continuidade em clinicas e a Norsey como resposta construida.

A secao independente "Tecnologia adaptada a realidade de cada operacao" foi eliminada. Sua tese util foi absorvida pelo principio de que a forma da operacao, e nao o nome do setor ou uma tecnologia, define a abordagem.

### Contextos

- "Segmentos" deixa de ser uma lista rigida de mercados e passa a observar quatro contextos: atendimento que precisa de continuidade, processos ainda manuais, ferramentas desconectadas e crescimento operacional.
- A composicao usa uma introducao ampla a esquerda e uma lista linear a direita no desktop; no mobile, a leitura se torna sequencial.
- Badges, pills, icones, CTA para a pagina de segmentos e animacoes foram removidos da homepage.
- Saude e clinicas aparecem somente como um contexto de atencao, sem restringir a Norte One a esse mercado e sem afirmar escala, resultados ou experiencia nao documentada.

### Criterios

- "Diferenciais" deixa de usar adjetivos e passa a apresentar comportamentos de decisao.
- Os tres criterios sao: simplificar antes de automatizar, usar o que ja resolve bem e construir para a rotina real.
- A secao nao repete as etapas de "Como pensamos". Ela responde por que uma escolha e feita, nao qual e a sequencia do trabalho.
- Cards, sombras, animacoes e afirmacoes genericas de qualidade ou inovacao foram removidos.

### Transicao para prova

A frase "Boas escolhas precisam aparecer no que realmente entra em operacao" encerra Criterios e prepara a pergunta por evidencia concreta. `Trabalho selecionado` responde imediatamente a essa passagem, antes do conteudo institucional, com problema, leitura, decisao e produto.

### Padroes aprovados

- Contexto operacional e mais inclusivo do que uma lista de setores.
- Criterios devem ser demonstrados por escolhas concretas, nao por adjetivos.
- Uma ferramenta pronta e uma resposta valida quando resolve bem o processo.
- Simplificar pode ser uma decisao anterior a automatizar ou construir.
- A passagem para prova deve criar expectativa sem prometer resultado ainda nao demonstrado.

## 12. Visual QA - contextos e criterios

Capturas verificadas no build de producao:

- 1440 x 1000: Contextos usa composicao assimetrica, com tese e foco em clinicas a esquerda e quatro situacoes em fluxo vertical a direita; Criterios usa tres colunas editoriais e uma passagem independente para prova.
- 768 x 1024: a estrutura reorganiza o conteudo sem colisao, corte ou aparencia de cards.
- 390 x 844: Contextos e Criterios assumem leitura linear; titulos, textos e divisores preservam escaneabilidade.
- 320 x 800: nao ha overflow horizontal e os titulos permanecem legiveis sem numeros grandes ou caixas acidentais.
- A transicao Capacidades -> Contextos alterna claro e escuro sem introduzir um novo estilo visual.
- Contextos mede aproximadamente 1401 px em 390 e 1573 px em 320; Criterios mede aproximadamente 1144 px em 390 e 1288 px em 320.
- A altura total observada foi 7792 px em 1440, 9503 px em 768, 10637 px em 390 e 11711 px em 320.
- A sessao limpa de producao nao apresentou erros nem avisos no console.

Problemas eliminados nesta fase:

- A frase "Tecnologia adaptada a realidade de cada operacao" recolocava tecnologia como produto logo depois de Capacidades.
- Os badges de mercados criavam uma lista restritiva e uma estetica de catalogo.
- Os cards de Diferenciais repetiam afirmacoes genericas e a linguagem visual de software house.
- O primeiro passe de QA por elemento podia fazer o cabecalho fixo cobrir o inicio da captura; as evidencias finais usam viewport posicionado pela altura real do cabecalho.

### Contagem semantica da homepage

Contagem de palavras visiveis no corpo da homepage, somando singular e plural quando aplicavel:

| Grupo | Palavra | Ocorrencias |
| --- | --- | ---: |
| Tecnologia | tecnologia | 7 |
| Tecnologia | software | 1 |
| Tecnologia | IA | 1 |
| Tecnologia | automacao | 2 |
| Tecnologia | integracao / integracoes | 2 |
| Tecnologia | solucao / solucoes | 10 |
| Empresarial | operacao / operacoes | 18 |
| Empresarial | empresa / empresas | 10 |
| Empresarial | processo / processos | 10 |
| Empresarial | trabalho / trabalhos | 5 |
| Empresarial | informacao / informacoes | 7 |
| Empresarial | resultado / resultados | 1 |
| Empresarial | atendimento / atendimentos | 4 |
| Empresarial | decisao / decisoes | 5 |

Teste de percepcao ate Criterios: a homepage nao apresenta uma lista do que a Norte One sabe construir. A leitura predominante e de uma empresa que entende operacoes, reconhece problemas e escolhe a resposta adequada antes de decidir se algo precisa ser construido.

## 13. Prova de execucao - Norsey

### Papel na narrativa

A prova entra imediatamente depois de Criterios e antes do conteudo institucional. Ela responde a frase "Boas escolhas precisam aparecer no que realmente entra em operacao" com um exemplo concreto de raciocinio convertido em produto.

A Norte One permanece como protagonista. A Norsey nao e apresentada como oferta SaaS isolada, mas como evidencia de que a empresa consegue observar uma operacao, estruturar o problema, tomar uma decisao e construir uma resposta adequada.

### Regra para produtos e projetos

Todo produto ou projeto apresentado nesta area deve seguir a ordem:

1. problema operacional observavel;
2. consequencia para a rotina;
3. leitura ou decisao que orientou a resposta;
4. execucao concreta;
5. produto ou projeto como resultado desse raciocinio.

O nome, a marca e as funcionalidades nunca devem anteceder a compreensao do problema. A historia precisa permanecer clara mesmo quando o nome do produto e removido.

Produtos proprios podem demonstrar capacidade de construcao. Projetos para clientes devem demonstrar a relacao entre contexto, decisao e implementacao. Nenhum dos dois formatos autoriza inventar resultados, metricas, clientes, depoimentos, logos, escala ou impacto comercial.

### Norsey

- A narrativa parte da fragmentacao entre atendimento, agenda, informacoes e relacionamento em clinicas.
- A leitura central e continuidade operacional, nao WhatsApp, CRM ou IA isoladamente.
- A decisao foi conectar diferentes momentos da jornada do paciente em um mesmo fluxo.
- A Norsey aparece somente depois dessa sequencia, como produto desenvolvido no ecossistema Norte One.
- WhatsApp, agenda, CRM, relacionamento e IA sao capacidades subordinadas a necessidade operacional.
- Nao ha CTA porque nenhuma URL oficial da Norsey foi encontrada neste repositorio.

### Evidencia visual e identidade

A secao pertence visualmente a Norte One: azul profundo e off white estruturam a composicao, e o cobre funciona apenas como assinatura. Uma identidade de produto pode aparecer dentro de uma evidencia real, mas nao deve redefinir a paleta ou a hierarquia da homepage.

Screenshots devem ser reais, atuais e legiveis. Nao usar interfaces inventadas, mockups genericos de dispositivos, navegadores falsos ou representacoes que possam ser confundidas com o produto. Na ausencia de assets oficiais, usar somente composicao editorial neutra e manter toda informacao essencial em HTML.

O primeiro registro usa texto, linhas e uma sequencia dos momentos conectados. O repositorio foi auditado e contem apenas logos da Norte One; nao contem logo, mark, screenshots ou URL oficial da Norsey.

### Escalabilidade

`Trabalho selecionado` e a entrada geral da secao, e cada prova deve ser estruturada como um `article`. Novos trabalhos podem ser adicionados futuramente sem transformar a area em carrossel ou catalogo. Cada item deve preservar a mesma disciplina narrativa e ter evidencia verificavel propria.

## 14. Visual QA - prova de execucao

Capturas verificadas no build de producao:

- 1440 x 1000: a secao mede aproximadamente 1199 px; raciocinio e produto dividem o grid sem transformar a Norsey no elemento dominante.
- 768 x 1024: a secao mede aproximadamente 1613 px; os tres momentos aparecem antes do produto e a composicao reorganiza a prova em fluxo vertical.
- 390 x 844: a secao mede aproximadamente 1814 px; narrativa, produto e momentos conectados permanecem legiveis, sem imagem espremida ou interface ficticia.
- 320 x 800: a secao mede aproximadamente 1994 px; titulo, rotulos e textos nao cortam nem produzem overflow horizontal.
- A largura rolavel foi igual a largura do viewport nos quatro tamanhos.
- A homepage mediu aproximadamente 8991 px em 1440, 11088 px em 768, 12247 px em 390 e 13395 px em 320.
- A sessao limpa de producao nao apresentou erros nem avisos no console.

Validacoes de narrativa e peso:

- Ao remover o nome Norsey, permanecem claros o problema fragmentado, a consequencia manual, a leitura de continuidade e a decisao de conectar a jornada.
- O nome do produto aparece somente no quarto momento e ocupa menos area narrativa do que problema, leitura e decisao.
- Nao ha CTA, metricas, clientes, logos de terceiros, depoimentos, lista de features ou promessa de resultado.
- A sequencia `Atendimento`, `Agenda`, `Historico` e `Relacionamento` e um diagrama editorial em HTML, nao uma simulacao da interface do produto.

Problemas encontrados durante o QA:

- A primeira captura isolada da secao incluiu o cabecalho fixo e ocultou parte da abertura; a evidencia foi refeita separando o conteudo da navegacao persistente.
- A primeira captura mobile do produto usou uma coordenada relativa apos a rolagem automatica; o recorte final passou a usar a posicao absoluta do titulo.

Nenhum dos dois problemas exigiu alteracao de interface. Eram artefatos da automacao de captura, e as verificacoes finais foram repetidas em uma sessao limpa.

## 15. Diretriz institucional

### Papel na narrativa

A camada institucional entra depois da Norsey. A prova mostra uma resposta concreta; a secao seguinte apresenta a visao e a responsabilidade que sustentam essa forma de trabalhar. Ela reduz a densidade da pagina e cria proximidade sem interromper a narrativa com um bloco corporativo generico.

A tese central e: `Trabalhar perto do problema muda a qualidade da resposta.` A Norte One e apresentada como uma empresa orientada a ajudar negocios a operar melhor, entendendo a realidade da operacao antes de escolher ou construir tecnologia.

### Estagio atual e limites de claims

- A empresa assume que esta no inicio de sua trajetoria.
- O estagio inicial e comunicado como envolvimento direto, proximidade entre decisao e execucao e responsabilidade pelo que entra em operacao.
- Nao afirmar grande equipe, departamentos, escala nacional, quantidade de clientes, tempo de mercado, credenciais ou resultados nao comprovados.
- Nao usar linguagem de startup, origem epica, paixao por tecnologia ou ambicao de revolucionar mercados.
- A credibilidade deve vir de clareza, criterio, limites honestos e execucao demonstravel.

### Uso do fundador

Fábio Campos Magalhães aparece de forma breve como fundador da Norte One. Sua presenca responde quem assume responsabilidade pelo trabalho, sem transformar a homepage em biografia pessoal.

O fundador pode ser relacionado a diagnostico, decisoes de produto e construcao de solucoes apenas de forma concreta e sem qualificacoes, senioridade, formacao, premios ou historico que nao estejam documentados. A secao nao usa CTA e nao promete atendimento pessoal permanente.

### Fotografia

O repositorio nao contem fotografia real do fundador. A homepage funciona sem imagem nesta fase. Nao usar stock photo, rosto gerado, silhueta generica ou moldura reservada apenas para simular materialidade.

Uma fotografia futura so deve entrar quando for real, atual, autorizada e tiver qualidade editorial suficiente. Ela deve apoiar proximidade e responsabilidade, sem dominar a composicao ou transformar o fundador em heroi da pagina.

### Padroes institucionais

- Falar da empresa por sua visao e por comportamentos observaveis, nao por adjetivos corporativos.
- Diferenciar Institucional de Criterios: Criterios explica como decisoes sao tomadas; Institucional explica que tipo de empresa a Norte One pretende construir.
- Evitar cards de missao, visao e valores, timelines sem fatos, estatisticas institucionais e listas de valores genericos.
- Preservar espaco negativo, menor densidade e uma composicao assimetrica mais calma do que a prova de execucao.

## 16. Visual QA - institucional

Capturas verificadas no build de producao:

- 1440 x 1000: a secao mede aproximadamente 1222 px; a tese ocupa a maior escala, a narrativa usa espaco negativo e o fundador permanece em uma faixa secundaria.
- 768 x 1024: a secao mede aproximadamente 1280 px; titulo e narrativa passam a uma unica coluna sem perder ritmo ou criar um bloco excessivamente denso.
- 390 x 844: a secao mede aproximadamente 1378 px; os paragrafos permanecem curtos e o fundador aparece depois da visao da empresa.
- 320 x 800: a secao mede aproximadamente 1653 px; o titulo reorganiza suas linhas sem corte e nenhum texto ultrapassa o viewport.
- A largura rolavel foi igual a largura do viewport nos quatro tamanhos.
- A homepage mediu aproximadamente 9777 px em 1440, 11871 px em 768, 13151 px em 390 e 14487 px em 320.
- A sessao limpa de producao nao apresentou erros nem avisos no console.

Validacoes de percepcao:

- A secao identifica a Norte One, sua razao de existir, o criterio que orienta o trabalho e quem assume responsabilidade por ele.
- O estagio inicial e declarado sem sugerir equipe, escala, experiencia ou estrutura ainda inexistentes.
- O fundador nao domina a composicao, nao recebe biografia, qualificacoes ou retrato hero e nao e usado como argumento de autoridade.
- Tecnologia aparece como uma escolha condicionada ao problema, nunca como identidade ou paixao da empresa.
- Nao ha CTA, cards de valores, fotografia ficticia, estatisticas, timeline ou narrativa corporativa inventada.

Nenhum defeito visual da secao exigiu correcao depois do primeiro passe. As capturas especificas foram repetidas com posicionamento absoluto para separar o conteudo institucional do cabecalho fixo durante a verificacao.

## 17. Fechamento narrativo e comercial

### CTA final

O Hero afirma `Sua empresa pode funcionar melhor.` O fechamento devolve essa ideia como pergunta: `Existe algo na sua empresa que poderia funcionar melhor?` Esse arco faz o visitante aplicar a tese a propria operacao antes de encontrar a acao.

O apoio final e: `Conte o que esta acontecendo na sua operacao. Antes de propor uma resposta, precisamos entender o contexto.` A versao intermediaria repetia que tecnologia viria depois e foi removida porque Hero, Capacidades e Institucional ja estabelecem esse criterio.

A unica acao do bloco e `Conversar sobre um problema`, com destino `/contato`. A pagina de contato e real e oferece formulario, WhatsApp e e-mail; por isso cria menos friccao sem impor um canal. Nao ha acao secundaria no CTA final.

### Hierarquia de acoes

| Area | Texto | Destino | Classificacao | Peso |
| --- | --- | --- | --- | --- |
| Header desktop | Conversar | `/contato` | CTA secundario persistente | Contorno discreto |
| Menu mobile | Conversar sobre um problema | `/contato` | CTA secundario do menu | Acao clara dentro do painel |
| Hero | Falar sobre minha operacao | `/contato` | CTA primario de abertura | Botao claro sobre azul |
| Final | Conversar sobre um problema | `/contato` | CTA primario de fechamento | Unica acao do bloco |
| WhatsApp flutuante | Falar com a Norte One pelo WhatsApp | URL real `wa.me` | Atalho secundario | Flutuante somente no corpo intermediario |
| Footer | E-mail e WhatsApp | `mailto:` e URL real `wa.me` | Links contextuais | Texto, sem aparencia de CTA |
| Footer | Navegacao institucional, atuacao e legal | Rotas reais | Links contextuais | Baixo peso |

A repeticao de `/contato` em Header, Hero e fechamento atende momentos diferentes da leitura. Nenhuma secao intermediaria possui botao, o que preserva uma acao comercial dominante sem interromper a narrativa.

### WhatsApp no encerramento

No mobile, o atalho flutuante aparece depois de `Como pensamos`; no desktop, fica disponivel desde o inicio. Nos dois casos, ele deixa o DOM quando `Trabalho selecionado` entra na viewport e continua oculto em Norsey, Institucional, CTA final e Footer.

Essa regra evita sobreposicao com a apresentacao do fundador, competicao com o CTA primario e cobertura do e-mail ou dos links finais. O Footer ainda oferece o WhatsApp como link textual acessivel e com destino real.

## 18. Footer, identidade e metadata

### Footer

O Footer deixa de apresentar a Norte One como fornecedora de tecnologia e passa a encerrar com: `A Norte One ajuda empresas a compreender problemas operacionais e construir respostas adequadas ao negocio.`

Sua navegacao foi reduzida a rotas existentes:

- Norte One: Sobre, Como trabalhamos e Contato;
- Atuacao: Solucoes e Contextos;
- Legal: Politica de Privacidade, Termos e Cookies.

Nao existe link para Norsey porque nenhuma URL oficial esta disponivel. Redes sociais placeholder nao sao renderizadas. O contato usa links reais para e-mail e WhatsApp, alem de localizacao e CNPJ ja configurados no projeto.

O e-mail institucional canonico passa a ser `contato@norteone.com.br`. A configuracao central, o Footer, a pagina de contato, a politica de privacidade e o JSON-LD passam a consumir esse mesmo valor.

### Metadata e SEO

Antes desta fase:

- title: `Norte One — Transformamos desafios empresariais em solucoes digitais.`;
- description: `A Norte One une visao de negocio e tecnologia para estruturar processos, automatizar operacoes e desenvolver solucoes sob medida para empresas.`

Depois desta fase:

- title: `Norte One — Solucoes para empresas funcionarem melhor`;
- description: `A Norte One entende processos, identifica gargalos e constroi solucoes para ajudar empresas a operar melhor, usando tecnologia quando ela realmente faz sentido.`

A homepage define title absoluto, description, canonical, Open Graph e Twitter. A configuracao global e o JSON-LD usam a mesma proposta. Nao foi adicionada meta `keywords`: termos tecnicos permanecem no conteudo e nas paginas internas, sem keyword stuffing.

A imagem OG existente foi preservada e reescrita no sistema azul profundo, off white e cobre. Sua headline agora e `Solucoes para empresas funcionarem melhor.` e o apoio e `Entender o negocio vem antes de escolher a tecnologia.`

## 19. Auditoria semantica final

Contagem de palavras visiveis no corpo da homepage em 1440 px, somando singular e plural quando aplicavel. A referencia e a contagem documentada antes das fases de prova, institucional e fechamento.

| Grupo | Palavra | Referencia | Final | Variacao |
| --- | --- | ---: | ---: | ---: |
| Tecnologia | tecnologia | 7 | 4 | -3 |
| Tecnologia | software | 1 | 1 | 0 |
| Tecnologia | IA | 1 | 2 | +1 |
| Tecnologia | automacao | 2 | 1 | -1 |
| Tecnologia | integracao / integracoes | 2 | 1 | -1 |
| Tecnologia | solucao / solucoes | 10 | 9 | -1 |
| Empresarial | operacao / operacoes | 18 | 25 | +7 |
| Empresarial | empresa / empresas | 10 | 11 | +1 |
| Empresarial | processo / processos | 10 | 9 | -1 |
| Empresarial | trabalho / trabalhos | 5 | 9 | +4 |
| Empresarial | informacao / informacoes | 7 | 9 | +2 |
| Empresarial | resultado / resultados | 1 | 1 | 0 |
| Empresarial | atendimento / atendimentos | 4 | 7 | +3 |
| Empresarial | decisao / decisoes | 5 | 8 | +3 |

O vocabulario empresarial domina a leitura. IA cresce uma ocorrencia por aparecer na prova real da Norsey, nao como promessa principal. `Operacao` aparece com frequencia, mas em funcoes diferentes: promessa, diagnostico, contexto, prova e conversa; nao ha repeticao literal que justifique reabrir as secoes consolidadas.

Teste de percepcao final: a Norte One entende problemas e operacoes empresariais e constroi a resposta necessaria para faze-los funcionar melhor. A leitura nao depende de conhecimento tecnico e nao reduz a empresa a software ou automacao.

## 20. Visual QA - homepage concluida

Capturas verificadas no build de producao:

- 1440 x 1000: homepage com aproximadamente 9819 px; CTA com 625 px e Footer com 515 px.
- 768 x 1024: homepage com aproximadamente 11941 px; CTA com 664 px e Footer com 742 px.
- 390 x 844: homepage com aproximadamente 12998 px; CTA com 600 px e Footer com 1070 px.
- 320 x 800: homepage com aproximadamente 14436 px; CTA com 693 px e Footer com 1158 px.
- Nao houve overflow horizontal em nenhum dos quatro viewports.
- A sessao final da homepage nao apresentou erros nem avisos no console.
- O menu mobile move foco para Fechar, permite seguir por Tab ate o primeiro link e fecha por Escape, restaurando o scroll do body.
- O CTA, e-mail, WhatsApp e links do Footer possuem destinos reais e estados de foco visiveis.
- A imagem OG foi renderizada e inspecionada em 1200 x 630.

Problemas encontrados e corrigidos:

- O WhatsApp flutuante podia cobrir conteudo nas areas mais densas do final da pagina. Sua ocultacao foi antecipada para a entrada de `Trabalho selecionado`.
- O apoio inicial do CTA repetia a tese de que tecnologia vem depois. A frase foi condensada para problema, resposta e contexto.
- O Footer antigo repetia o pitch, exibia seis categorias tecnicas e nao transformava e-mail ou WhatsApp em links. A estrutura foi reduzida e os contatos passaram a ser acionaveis.
- O CTA antigo tinha duas acoes concorrentes, gradiente radial e linguagem centrada em impacto da tecnologia. O fechamento passou a ter uma pergunta, uma explicacao e uma acao.

### Avaliacao de design e polimento futuro

A homepage e longa, mas cada secao acrescenta uma funcao: promessa, criterio, reconhecimento, capacidade, contexto, decisao, prova, visao e conversa. Nenhuma secao deve ser removida automaticamente sem uma rodada especifica de pesquisa ou dados de uso.

Linhas horizontais e composicoes assimetricas se repetem como sistema editorial, mas CTA e Footer introduzem um encerramento mais amplo e reduzem a sensacao de modulo repetido. A alternancia azul/off white e previsivel, porem ajuda a marcar mudancas de funcao sem recorrer a decoracao.

O principal polimento futuro depende de material real: telas oficiais da Norsey e fotografia autorizada do fundador. Depois disso, uma rodada de comparacao visual pode avaliar ritmo e comprimento com evidencias de uso, sem reconstruir a narrativa.

## 21. Auditoria final de coerencia e polimento

### Problemas objetivos encontrados

- `Problemas` repetia literalmente o arco `funcionar melhor` ja usado no Hero e no CTA final.
- `Capacidades` numerava seis dimensoes que nao possuem ordem, criando hierarquia falsa, cobre decorativo e mais altura no mobile.
- Os seis passos de `Como pensamos` reservavam mais altura do que o conteudo precisava em 390 e 320 px.
- A abertura de Norsey e os dois primeiros momentos repetiam contexto em frases longas.
- O institucional repetia `operar melhor` e a tese de que tecnologia vem depois, sem acrescentar suficientemente a relacao entre diagnostico e execucao.
- O WhatsApp ainda podia cobrir texto em Norsey no mobile.
- O menu modal nao devolvia foco ao botao de abertura e nao fechava o ciclo de foco entre o primeiro e o ultimo controle.

### Edicoes realizadas

- `Problemas` passou a abrir com `O que limita uma empresa nem sempre parece urgente.`, preservando reconhecimento sem repetir Hero e CTA.
- `Capacidades` passou de lista numerada para uma matriz sem ordem artificial. As seis dimensoes e suas descricoes foram preservadas.
- A altura minima, o padding e a distancia interna dos passos de `Como pensamos` foram reduzidos de forma responsiva.
- A prova Norsey foi condensada sem remover problema, leitura, decisao, produto ou capacidades reais.
- O institucional passou a explicitar `A Norte One trabalha do diagnostico a execucao.` e removeu repeticoes sobre escolha de tecnologia.
- O WhatsApp agora desaparece ao entrar em `Trabalho selecionado`.
- O menu mobile mantem `Tab` dentro do dialogo, fecha por `Escape`, restaura o scroll e devolve foco ao botao de abertura.

### Decisoes preservadas

- Hero, headline principal, criterios, CTA final, Footer, paleta e estrutura de secoes nao tinham defeito objetivo e foram mantidos.
- A alternancia azul profundo/off white continua previsivel, mas as composicoes ja variam entre sequencia, matriz, lista editorial, centro, prova e institucional. Trocar fundos criaria blocos longos do mesmo tom sem resolver um problema de leitura.
- Linhas horizontais permanecem como estrutura de grid, mas a retirada da numeracao em Capacidades reduz a sensacao mecanica.
- A homepage nao usa `Reveal`; o movimento restante pertence ao menu mobile e aos estados de interacao, com `prefers-reduced-motion` respeitado.

### Comparacao com a Fase 7

| Viewport | Fase 7 | Polimento final | Reducao |
| --- | ---: | ---: | ---: |
| 1440 x 1000 | 9819 px | 9723 px | 96 px |
| 768 x 1024 | 11941 px | 11561 px | 380 px |
| 390 x 844 | 12998 px | 12686 px | 312 px |
| 320 x 800 | 14436 px | 14076 px | 360 px |

A reducao veio de densidade interna e copy, nao de um corte global de espaco. Nao houve overflow horizontal nos quatro viewports, e a sessao final de producao permaneceu sem erros ou avisos no console.

### Limites e Content Debt

- A ausencia de telas oficiais, identidade propria e URL publica da Norsey limita a materialidade da principal prova de execucao.
- A ausencia de fotografia real e autorizada do fundador limita a humanidade visual da camada institucional.
- Paginas internas ainda devem adotar esta homepage como referencia visual e verbal, sem copiar mecanicamente todas as suas composicoes.
- Novos claims, cases, metricas, clientes, logos ou resultados continuam proibidos sem evidencia verificavel.

A homepage esta pronta para orientar as paginas internas. O maior ponto fraco visual restante depende de assets reais, nao de mais estrutura; o maior ponto forte e a progressao editorial coerente entre problema empresarial, criterio, prova e conversa.

## 22. Pagina Solucoes - criterio antes da tecnologia

### Funcao da pagina

`/solucoes` nao e um catalogo de servicos. Sua funcao e ajudar uma pessoa de negocio a reconhecer uma dificuldade operacional e entender como a Norte One escolhe uma resposta. A pagina deve ensinar que resolver pode significar simplificar, conectar, automatizar ou construir; adotar uma ferramenta existente tambem e uma decisao valida.

A arquitetura aprovada segue seis momentos:

1. abertura com a tese `A solucao depende do problema.`;
2. sinais operacionais em que a Norte One pode atuar;
3. quatro formas de resposta: Simplificar, Conectar, Automatizar e Construir;
4. tecnologia apresentada apenas como caixa de ferramentas;
5. situacoes hipoteticas identificadas explicitamente como exemplos, nao cases;
6. convite para uma conversa diagnostica sem exigir uma tecnologia escolhida.

### Direcao visual para paginas internas

- A homepage permanece a fonte visual e verbal, mas suas composicoes nao devem ser copiadas mecanicamente.
- Paginas internas podem recombinar grid de 12 colunas, linhas editoriais, alternancia azul profundo/off white e assimetria controlada.
- Headings de pagina interna devem ter escala inferior ao Hero principal da homepage e deixar clara a funcao da pagina.
- Listas de decisao sem ordem natural nao recebem icones, sombras, codigos de servico ou cards de SaaS.
- Cobre atua como sinal de navegacao e hierarquia; nunca como decoracao dominante.
- O ritmo deve vir de tipografia, espacamento, contraste e bordas, sem imagens stock, mockups falsos ou animacoes de entrada previsiveis.
- O conteudo principal deve permanecer completo sem depender de JavaScript ou de elementos `whileInView`.

### Linguagem e hierarquia

O visitante nao deve precisar conhecer software, APIs, automacao ou IA para se localizar. A ordem verbal e sempre:

`problema operacional -> criterio de decisao -> resposta possivel -> ferramenta`

Tecnologias podem aparecer depois da decisao e com funcao concreta. IA fica restrita a tarefas como organizar, classificar, resumir e interpretar informacao dentro de fluxos controlados. Software proprio e apresentado como ultima possibilidade, condicionado a uma lacuna operacional real.

### Metadata especifica

- title: `Solucoes para problemas operacionais | Norte One`;
- description: `Entenda como a Norte One ajuda empresas a simplificar processos, conectar ferramentas, automatizar rotinas e construir software quando o problema realmente exige.`;
- canonical: `https://www.norteone.com.br/solucoes`;
- Open Graph e Twitter usam titulo, descricao e imagem social da marca explicitamente definidos para a rota.

### Visual QA

Build de producao verificado em 1440 x 1100, 768 x 1024, 390 x 844 e 320 x 740. A pagina mede respectivamente 6839 px, 8188 px, 8778 px e 9691 px. Em todos os tamanhos:

- a largura rolavel coincide com a largura do viewport;
- existe um unico H1 e cinco secoes principais;
- o CTA final cabe integralmente;
- nao ha sombras de card nem SVGs no conteudo;
- o menu mobile abre por teclado, move foco para Fechar, fecha por Escape e devolve foco;
- `prefers-reduced-motion` reduz transicoes e remove rolagem suave;
- o WhatsApp fica oculto no topo mobile, aparece no reconhecimento do problema e desaparece ao entrar no bloco de respostas, antes das areas mais densas e do CTA;
- a sessao de producao nao apresentou erros nem avisos no console.

### Diferenca em relacao a homepage

A homepage estabelece posicionamento, criterio, prova e identidade. `/solucoes` aprofunda somente a logica de resposta. Ela e mais analitica, usa uma matriz de decisao e situacoes hipoteticas, e nao repete prova Norsey, fundador, segmentos, manifesto ou todos os movimentos narrativos da pagina inicial.

### Content Debt preservado

- As seis paginas de detalhe continuam com a arquitetura anterior e precisam de uma fase propria antes de herdar esta direcao.
- Situacoes reais, resultados, clientes e metricas nao foram adicionados porque nao ha evidencia publica aprovada.
- A pagina permanece intencionalmente sem imagens: nao existem assets reais necessarios para explicar este raciocinio, e uma imagem stock reduziria a credibilidade.

## 23. Pagina Segmentos - contextos e consequencias

### Funcao da pagina

`/segmentos` nao e uma lista de mercados atendidos. A pagina responde em quais contextos operacionais a Norte One pode gerar valor, independentemente do setor ou do porte da empresa.

Paginas de contexto devem mostrar situacoes e consequencias, nao listas rigidas de mercados. A ordem aprovada e:

`situacao recorrente -> consequencia na operacao -> variacoes por rotina e porte -> sinal para investigar`

A arquitetura segue cinco momentos:

1. abertura com a tese de que empresas diferentes encontram problemas de operacao semelhantes;
2. seis contextos, cada um relacionando situacao e consequencia;
3. exemplos de como o mesmo padrao muda de forma entre rotinas e portes;
4. sinais de quando vale procurar ajuda, seguidos do contexto atual de clinicas;
5. convite para uma conversa diagnostica sem exigir que o setor esteja em uma lista.

### Contextos e mercados

Os seis contextos sao atendimento com muitas pontas, rotina sustentada por trabalho manual, ferramentas sem contexto compartilhado, crescimento antes da estrutura, informacao sem leitura comum e dependencia de pessoas-chave.

Clinicas, empresas de servicos e operacoes comerciais aparecem apenas como exemplos de como a forma do problema muda. Nao constituem uma lista de clientes, mercados comprovados ou limites de atuacao.

Operacoes de clinicas recebem uma mencao especifica porque atendimento, agenda, historico e relacionamento tornam a necessidade de continuidade especialmente visivel. O texto declara esse foco sem transformar a Norte One em empresa exclusiva do setor e sem repetir a prova Norsey da homepage.

### Direcao visual

- Situacao e consequencia permanecem visualmente relacionadas, mas nao dentro de cards.
- Titulos grandes, colunas paralelas, linhas estruturais e espaco negativo organizam a leitura.
- A secao de variacoes usa tres statements paralelos; a secao seguinte muda o ritmo com titulo amplo e lista editorial.
- Nao usar badges, pills, icones de setor, ilustracoes stock ou animacoes de entrada.
- O conteudo principal e um Server Component e permanece completo sem JavaScript.
- O WhatsApp pode aparecer na area inicial de reconhecimento, mas deve desaparecer antes das areas mais densas.

### Linguagem

A pagina fala de operacao, contexto, pessoas, processo, informacao, atendimento, crescimento e decisao. `Software`, `IA`, `automacao`, `integracao` e `API` nao aparecem. `Ferramentas` e `sistemas` sao citados somente como partes de um contexto desconectado, nunca como oferta.

### Metadata especifica

- title: `Contextos operacionais em que podemos ajudar | Norte One`;
- description: `Conheca situacoes em que a Norte One pode ajudar empresas: atendimento fragmentado, processos manuais, ferramentas desconectadas e operacao dependente de pessoas.`;
- canonical: `https://www.norteone.com.br/segmentos`;
- Open Graph e Twitter usam titulo, descricao e imagem social da marca definidos para a rota.

### Visual QA

Build de producao verificado em 1440 x 1100, 768 x 1024, 390 x 844 e 320 x 740. A pagina mede respectivamente 6745 px, 8121 px, 8347 px e 9439 px. Em todos os tamanhos:

- a largura rolavel coincide com a largura do viewport;
- existe um unico H1 e cinco secoes principais;
- o CTA cabe integralmente e possui foco visivel;
- nao ha SVGs, sombras de card ou conteudo dependente de `Reveal`;
- o menu mobile abre por teclado, move foco para Fechar, fecha por Escape e devolve foco;
- `prefers-reduced-motion` reduz transicoes e remove rolagem suave;
- o WhatsApp fica oculto no topo mobile, aparece nos contextos e desaparece antes das variacoes e do fechamento;
- a sessao de producao nao apresentou erros nem avisos no console.

### Diferenca das paginas aprovadas

A homepage apresenta a visao completa da Norte One e usa quatro contextos como parte de uma narrativa maior. `/segmentos` aprofunda reconhecimento, consequencia, variacao por porte e sinais de investigacao. `/solucoes` explica como escolher uma resposta; `/segmentos` mostra onde a necessidade pode aparecer. Nenhuma das duas funcoes deve ser misturada.

### Content Debt preservado

- `/sobre`, `/contato`, paginas de detalhe de solucoes e outras paginas internas ainda precisam de fases proprias.
- A lista em `content/segments.ts` permanece porque alimenta o formulario de contato; revisar esse campo exige uma fase especifica de formulario e contrato de dados.
- Assets oficiais da Norsey e fotografia autorizada do fundador continuam ausentes.
- Casos, clientes, metricas e setores comprovadamente atendidos nao foram adicionados sem evidencia verificavel.

## 24. Pagina Sobre - visao, estagio e responsabilidade

### Funcao da pagina

`/sobre` responde quem e a Norte One, por que ela existe e que tipo de empresa pretende construir. A pagina nao funciona como segundo catalogo de solucoes, repeticao da homepage ou biografia do fundador.

A tese institucional e `Uma empresa que permanece perto do problema.` Proximidade significa compreender a operacao, participar da decisao e acompanhar a resposta ate a pratica. Tecnologia continua subordinada ao contexto e nao define a identidade da empresa.

A arquitetura segue cinco momentos:

1. abertura com a tese institucional e a construcao ainda em curso;
2. origem explicada pelo intervalo entre problema, decisao e ferramenta;
3. visao da empresa que se pretende construir;
4. estagio atual, responsabilidade direta e fundador;
5. ambicao de acompanhar o problema ate a operacao e convite para conversar.

### Realidade e aspiracao

- O presente e descrito apenas por fatos sustentados: a Norte One esta no inicio de sua trajetoria, Fabio Campos Magalhaes e o fundador e participa de diagnostico, decisoes de produto e execucao.
- A visao usa verbos como `queremos`, `estamos formando`, `pretendemos` e `estamos construindo`. Esses enunciados representam direcao, nao capacidade ja comprovada.
- O estagio inicial nao e usado como pedido de desculpas nem transformado em narrativa epica. Ele explica por que direcao, decisao e execucao permanecem proximas hoje.
- Novos fatos institucionais exigem evidencia verificavel antes de entrar no site.

### Uso do fundador

Fabio Campos Magalhaes aparece para identificar quem assume atualmente a direcao e a responsabilidade pelo trabalho. A pagina nao inclui biografia, formacao, senioridade, premios, historico profissional ou promessa de atendimento pessoal permanente.

Nao existe fotografia real e autorizada do fundador no repositorio. A composicao permanece textual; stock photo, rosto gerado, avatar, silhueta e moldura vazia continuam proibidos.

### Claims proibidos

Sem evidencia verificavel, nao afirmar:

- tamanho de equipe, departamentos ou estrutura nacional;
- quantidade de clientes, projetos, usuarios ou mercados atendidos;
- anos de experiencia ou tempo de empresa;
- resultados, metricas, depoimentos, certificacoes ou premios;
- lideranca de mercado, escala, cobertura ou capacidades ainda aspiracionais;
- origem heroica, paixao por tecnologia, disrupcao ou promessa de revolucionar setores.

Credibilidade institucional deve vir de clareza, criterio, responsabilidade assumida e coerencia entre decisao e execucao.

### Direcao visual e interacao

- A pagina usa cinco faixas editoriais, menor densidade e mais espaco de leitura do que as paginas analiticas.
- Nao ha cards, icones, badges, timeline, fotografia, estatisticas ou animacao de entrada.
- Visao e principios sao organizados por tipografia, linhas, grid e contraste, sem transformar clareza, responsabilidade e pragmatismo em cards de valores.
- O conteudo e um Server Component e permanece completo sem JavaScript.
- O WhatsApp deixa de aparecer quando a narrativa de origem entra na viewport, evitando cobrir texto institucional, fundador ou CTA.
- A acao final e `Conversar sobre um problema`, com destino `/contato`.

### Metadata especifica

- title: `Uma empresa proxima do problema | Norte One`;
- description: `Conheca a visao da Norte One: compreender problemas empresariais, decidir com criterio e acompanhar cada resposta ate a execucao.`;
- canonical: `https://www.norteone.com.br/sobre`;
- Open Graph e Twitter usam titulo, descricao e imagem social da marca definidos para a rota.

### Diferenca das paginas aprovadas

A homepage apresenta posicionamento, criterio, prova, visao e conversa em uma narrativa completa. `/sobre` aprofunda somente identidade, origem, ambicao e responsabilidade atual. `/solucoes` explica como uma resposta e escolhida; `/segmentos` mostra em quais contextos a necessidade aparece. Norsey nao e repetida porque sua funcao de prova ja e cumprida pela homepage.

### Content Debt preservado

- `/contato`, paginas de detalhe de solucoes e outras paginas internas ainda precisam de fases proprias.
- Screenshots e identidade oficial da Norsey continuam pendentes.
- Uma fotografia do fundador so pode ser incorporada quando for real, atual, autorizada e editorialmente adequada.
- Historico, clientes, resultados, equipe, metricas e marcos institucionais permanecem ausentes ate haver evidencia publica aprovada.

### Visual QA

Build de producao verificado em 1440 x 1100, 768 x 1024, 390 x 844 e 320 x 740. A pagina mede respectivamente 4964 px, 5446 px, 5796 px e 6534 px. Em todos os tamanhos:

- a largura rolavel coincide com a largura do viewport;
- existe um unico H1, quatro H2, quatro H3 e cinco secoes principais;
- nao ha SVGs, cards, imagens ou conteudo dependente de `Reveal`;
- o CTA final possui destino real, foco visivel e permanece em uma linha a 320 px;
- o WhatsApp nao cobre origem, visao, fundador ou CTA;
- o menu mobile move foco para Fechar, fecha por Escape, restaura o scroll e devolve foco ao botao de abertura;
- `prefers-reduced-motion` remove a rolagem suave e reduz transicoes;
- a metadata especifica, canonical, Open Graph e imagem social foram renderizadas corretamente;
- a sessao de producao nao apresentou erros nem avisos no console.

Problemas encontrados e corrigidos durante o QA:

- O WhatsApp sobrepunha parte do primeiro paragrafo institucional em 1440 px. O limite de ocultacao foi antecipado para a entrada da secao de origem.
- O contêiner flex do fechamento esticava o CTA ate a altura do paragrafo no desktop. O alinhamento passou a preservar a altura natural do botao.
- Em 320 px, o CTA quebrava em duas linhas. Fonte e padding foram reduzidos somente abaixo de 375 px.

## 25. Pagina Contato - primeira conversa diagnostica

### Funcao da pagina

`/contato` e o primeiro passo de uma conversa sobre a operacao. A pagina nao
funciona como pedido de orcamento, selecao de tecnologia ou qualificacao
comercial extensa. O visitante precisa apenas relatar o que esta acontecendo;
a Norte One organiza as perguntas e avalia os caminhos depois.

A arquitetura segue tres momentos:

1. abertura curta com a orientacao `Comece pelo que esta acontecendo.`;
2. formulario editorial dominante, com canais alternativos secundarios;
3. explicacao breve do que acontece depois do envio.

### Formulario e linguagem

Os campos finais sao nome, empresa, e-mail, WhatsApp opcional, contexto e
consentimento. Segmento foi removido. Tecnologia, porte, orcamento e prazo nao
sao solicitados. A acao principal e `Enviar contexto`.

O estado de sucesso confirma `Recebemos seu contexto.` e explica que o relato
sera lido antes da resposta. O estado de erro preserva os dados digitados,
oferece uma mensagem humana e aponta o WhatsApp como alternativa. Durante o
envio, o botao fica desabilitado e comunica `Enviando contexto...`.

Erros de validacao ficam associados aos controles por `aria-describedby` e o
foco segue para o primeiro campo invalido. Ao concluir, o foco segue para a
confirmacao. Labels, autocomplete, `aria-invalid`, foco visivel e regiao viva
sao preservados.

### Hierarquia dos canais

- O formulario e a acao principal e recebe o maior peso visual.
- WhatsApp e alternativa secundaria, apresentada como link textual e sem
  numero exposto.
- O e-mail institucional aparece como alternativa terciaria.
- O WhatsApp flutuante fica desativado em toda a rota `/contato` para nao
  competir com o formulario nem cobrir seus estados.

O e-mail publico canonico e `contato@norteone.com.br`. Nenhum telefone e
publicado na interface ou no JSON-LD. O numero interno permanece somente na
configuracao que monta a URL real do WhatsApp.

### Privacidade e entrega

O texto de consentimento explica o uso dos dados para responder a conversa e
aponta para `/politica-de-privacidade`. A politica lista somente os campos
efetivamente coletados e distingue o WhatsApp opcional.

O endpoint continua usando Resend quando `RESEND_API_KEY` e
`CONTACT_EMAIL_TO` estao configurados. Ausencia de configuracao ou rejeicao do
provedor agora gera erro real em vez de sucesso aparente. Dados do lead nao sao
registrados no console. O honeypot continua permitindo validacao automatizada
sem enviar e-mail real.

### Direcao visual e metadata

A pagina usa grid, tipografia, linhas e espaco negativo. Formulario, canais e
etapas nao sao apresentados como cards. O Hero e curto, e a secao posterior ao
formulario explica o processo sem transformar a conversa em funil comercial.

- title: `Converse sobre sua operacao | Norte One`;
- description: `Conte a Norte One o que esta acontecendo na sua operacao. A primeira conversa comeca pelo contexto, antes de qualquer solucao.`;
- canonical: `https://www.norteone.com.br/contato`;
- Open Graph e Twitter usam titulo, descricao e imagem social da marca
  especificos da rota.

### Content Debt preservado

- A entrega real depende de `RESEND_API_KEY` e `CONTACT_EMAIL_TO` no ambiente
  de publicacao; nenhum envio real foi executado durante o QA.
- O rate limit em memoria continua sendo uma protecao basica por instancia e
  deve migrar para armazenamento distribuido se o volume ou a arquitetura
  exigir.
- O texto legal ainda contem placeholders historicos fora do escopo desta fase.

### Visual QA

Build de producao verificado em 1440 x 1100, 768 x 1024, 390 x 844 e 320 x
740. A pagina mede respectivamente 2887 px, 3766 px, 4155 px e 4537 px. Em
todos os tamanhos:

- largura rolavel e viewport coincidem;
- controles, textos e links permanecem dentro do grid;
- existe um unico H1 e nenhuma acao publica de telefone;
- o numero interno do WhatsApp nao aparece no conteudo;
- o botao flutuante de WhatsApp permanece ausente na rota;
- metadata, canonical, Open Graph, formulario e canais alternativos estao
  presentes;
- o console de producao nao apresenta erros ou avisos.

Os estados de validacao, envio, sucesso e erro foram verificados. O sucesso foi
simulado no navegador e o honeypot foi usado no endpoint; nenhum e-mail real
foi enviado. O erro de configuracao retorna 503 e preserva os dados digitados.

## 26. Aprofundamentos de solucoes - criterios antes de tecnologia

### Arquitetura final

`/solucoes` permanece como hub de decisao. A pagina nao apresenta um catalogo:
ela parte de problemas operacionais e organiza quatro respostas possiveis:
simplificar, conectar, automatizar ou construir. Somente as tres respostas que
pedem aprofundamento possuem links editoriais discretos.

Os aprofundamentos ativos sao:

- `/solucoes/automacao-de-processos`;
- `/solucoes/integracoes`;
- `/solucoes/solucoes-sob-medida`.

As paginas deixaram de ser geradas por `content/solutions.ts` e por um template
unico. Cada rota possui uma pagina explicita porque a sequencia de raciocinio,
a composicao editorial e os criterios sao diferentes. Breadcrumb, Container,
Button, cores, tipografia, grid e espacamentos continuam compartilhados com o
sistema existente. Nao foi criado um novo design system.

### Funcao educacional

As tres paginas devem ajudar uma pessoa a tomar uma decisao melhor mesmo sem
contratar a Norte One. Todas seguem o principio `quando faz e quando nao faz
sentido`, apresentam riscos e terminam convidando o visitante a explicar seu
contexto. A acao e `Conversar sobre um problema`, nunca selecionar ou comprar
um servico.

- Automacao separa repeticao, volume, regras, excecoes e responsabilidade. Um
  processo ruim nao deve ser automatizado antes de ser simplificado. IA e
  tratada como capacidade possivel dentro do fluxo, nao como sinonimo de
  automacao.
- Integracoes partem da perda de continuidade entre ferramentas. Eliminar,
  substituir e simplificar sao avaliados antes de conectar. API e outros meios
  tecnicos aparecem somente depois da definicao de origem, destino, regras e
  falhas.
- Software sob medida comeca pela tentativa de nao construir. A pagina explicita
  quando uma ferramenta pronta e mais responsavel, quando uma necessidade pode
  justificar produto proprio e por que decisao, operacao, manutencao e evolucao
  pertencem ao custo total.

Situacoes descritas nas paginas sao identificadas como hipoteticas. Nao existem
clientes, resultados, metricas ou capacidades inventadas.

### URLs descontinuadas

As paginas abaixo deixaram de representar frentes independentes e redirecionam
diretamente para `/solucoes` por redirect permanente do Next.js:

- `/solucoes/atendimento-inteligente`;
- `/solucoes/gestao-operacional`;
- `/solucoes/experiencias-digitais`.

Atendimento e relacionamento ja estao cobertos no hub como contexto de
continuidade. Gestao operacional ja esta coberta por informacao, decisao e
operacao. Criacao de sites nao foi incorporada artificialmente aos tres
aprofundamentos. As tres URLs foram removidas do sitemap.

### Busca, metadata e semantica

Cada aprofundamento possui title, description, canonical, Open Graph e Twitter
proprios. A imagem social institucional permanece compartilhada, mas `og:url`
aponta para a propria rota. O sitemap contem o hub e somente os tres
aprofundamentos ativos.

`ServiceJsonLd` foi removido dessas paginas. O conteudo explica criterios de
decisao ligados a atuacao da empresa, mas nao descreve um servico comercial
fechado; manter o schema criaria uma afirmacao mais especifica do que a pagina
sustenta. `BreadcrumbList` foi preservado e corresponde ao breadcrumb visivel.

As paginas sao Server Components, nao dependem de `Reveal`, nao adicionam
bibliotecas, animacoes, cards de beneficio, icones decorativos, codigos ou
JavaScript de apresentacao.

### Content Debt atual

- configurar e validar `RESEND_API_KEY` e `CONTACT_EMAIL_TO` no ambiente de
  publicacao;
- substituir o rate limit em memoria por protecao distribuida quando volume ou
  arquitetura exigirem;
- incorporar assets oficiais da Norsey quando houver material aprovado;
- executar auditoria global final e validacao no ambiente de producao;
- revisar os placeholders legais historicos ainda existentes.

Screenshots e artefatos locais de QA ficam em `output/`, agora ignorado pelo
Git, e nao fazem parte do produto final.

### Visual QA

As tres paginas foram verificadas em build de producao a 1440 x 1100, 768 x
1024, 390 x 844 e 320 x 740. Os comprimentos observados foram:

- automacao: 6569, 7367, 8678 e 9542 px;
- integracoes: 5841, 7160, 8190 e 8756 px;
- software sob medida: 6254, 7414, 8398 e 9317 px.

Em todos os doze cenarios, largura rolavel e viewport coincidem, existe um
unico H1, nenhuma secao critica depende de opacidade ou JavaScript, o console
nao apresenta erros ou avisos e o WhatsApp desaparece antes das areas densas e
do CTA. O menu mobile move foco para Fechar, fecha por Escape e devolve foco ao
controle de abertura. `prefers-reduced-motion` remove a rolagem suave.

Um overflow de 2 px foi encontrado em 320 px na palavra `desenvolvimento`, no
bloco de custo total de software sob medida. A tipografia desse heading foi
reduzida apenas abaixo de 375 px e o grid passou a permitir encolhimento; o
segundo passe confirmou largura exata de 320 px.

Foram geradas capturas full page em 1440 e 390 para as tres paginas; Hero,
criterios de decisao e CTA em desktop; e capturas adicionais de automacao em
768 e 320. Os arquivos estao em `output/playwright/solution-final/` e nao sao
rastreados pelo Git.

## 27. Art Direction 3.0 - referencia premium aprovada

### Direcao consolidada

A terceira fase preserva posicionamento, narrativa, copy aprovada, rotas,
metadata e funcionalidades. A evolucao acontece na direcao de arte: linguagem
corporativa premium e internacional, menos editorial de moda e menos proxima de
templates de software. O sistema combina azul noturno, off white aquecido,
cobre fosco raro, grid arquitetonico, linhas finas e espaco negativo util.

Manrope passa a ser a unica familia tipografica, nos pesos 400, 500, 600 e 700.
Displays usam 48-52 px no mobile, 72 px no tablet e 80-88 px no desktop. H1 de
paginas internas chega a 68 px; H2, a 56 px; H3 usa 24-30 px; corpo grande,
18-21 px; corpo regular, 16-18 px; labels, 11-13 px. O letter spacing permanece
zero e a hierarquia depende de escala, peso, alinhamento e respiro.

### Paleta

- Deep Navy: `#071522`;
- Norte Navy: `#0B1F33`;
- Secondary Navy: `#122B43`;
- Copper: `#B87945`;
- Copper Light: `#C68A58`;
- Off White: `#F4F1EA`;
- Light: `#F7F4EE`;
- Mist: `#D8E1E8`;
- Stone: `#8A8F98`;
- Graphite: `#25282C`.

Azul e off white dominam. Cobre funciona como joia visual: aparece em poucos
CTAs prioritarios, linhas e marcadores, sem criar uma terceira grande massa de
cor. Gradientes decorativos, brilho, sombras cenograficas e grandes superficies
em cobre nao fazem parte da linguagem.

### Fotografia e hero

A direcao fotografica e `arquitetura + estrutura + luz + materialidade +
silencio visual`. Priorizar interiores corporativos contemporaneos com vidro,
madeira, metal ou concreto, luz lateral aquecida e composicao com area negativa.
Evitar data centers, codigo, robos, apertos de mao e pessoas sorrindo em banco de
imagem.

O Hero usa o ativo aprovado
`public/images/brand/architecture-hero.webp`, convertido do master PNG para
WebP em qualidade 84. O arquivo final preserva 1145 x 1374 px, proporcao exata
de 5:6, e pesa 173302 bytes. No desktop a imagem funciona como plano absoluto:
ocupa 54% da largura, sangra ate a borda direita e cobre toda a altura util do
Hero com `object-position: 56% center`. Uma mascara horizontal curta, derivada
apenas do azul noturno, integra a fotografia ao fundo sem criar moldura ou
efeito decorativo. Em 1024 o split e preservado.

Em 768, 390 e 320 a composicao e propria: headline, apoio e CTA precedem uma
faixa fotografica full bleed de 256, 144 e 112 px. O foco vertical fica em 55%
no tablet e 58% no mobile; um fade superior curto conecta a faixa ao navy. Nao
ha borda, radius ou sombra. A imagem usa `next/image`, `fill`, `sizes`, dimensao
estavel, qualidade 84 e prioridade por estar na primeira dobra.

As fotografias oficiais do fundador permanecem exclusivamente na secao de
Fabio Campos Magalhaes em `/sobre`. Elas nao devem migrar para o Hero, outras
paginas, cards de equipe ou composicoes que transformem a Norte One em marca
pessoal.

### Grid, componentes e movimento

O container maximo e 88 rem, sobre grid de 12 colunas. Composicoes 7/5, 8/4 e
alinhamentos cruzados devem substituir centralizacao automatica. Gutters sao 20
px mobile, 40 px tablet e 64 px desktop. Cards so existem quando agrupamento,
selecao ou estado justificam uma superficie; conteudo institucional usa linhas,
colunas e faixas sem containers aninhados.

Header, Footer, Button, Container, formularios e titulos compartilham os mesmos
tokens. Radius fica entre 4 e 8 px. Sombras sao reservadas a sobreposicoes reais.
Animacoes usam 500-800 ms, deslocamentos pequenos e nunca escondem conteudo
critico com opacidade zero. `prefers-reduced-motion` remove transicoes e
rolagem suave nao essenciais.

### Content Debt

- considerar uma segunda fotografia arquitetonica escura para a secao
  `Tecnologia, quando necessaria`;
- fornecer identidade, screenshots atuais e URL oficial da Norsey;
- resolver os placeholders legais historicos fora desta fase visual.

## 27. Consolidacao editorial e estado atual da Norsey

Esta secao substitui qualquer decisao anterior que apresente a Norsey como
produto pronto, caso concluido ou prova publica de execucao. A Norsey ainda nao
esta pronta para ser apresentada no site. A secao `Trabalho selecionado` foi
retirada da homepage e so deve voltar quando o produto, os claims e os ativos
forem atuais, autorizados e aprovados para divulgacao. Nao substituir essa
prova por mockups, imagens ou resultados hipoteticos.

A homepage foi reduzida a seis secoes: promessa, posicionamento, reconhecimento
do problema, caminhos de resposta, identidade da empresa e conversa. A lista de
seis etapas saiu da homepage porque `/como-trabalhamos` ja explica o processo;
o teaser de contextos saiu porque `/segmentos` aprofunda o tema; e os criterios
repetidos sairam da homepage porque ja estao em Solucoes e Como trabalhamos.
`/solucoes` agora apresenta quatro respostas e exemplos hipoteticos limitados,
sem repetir uma lista separada de tecnologias.

As paginas de aprofundamento preservam os criterios e riscos que ajudam uma
empresa a decidir, mas condensam sinais ou listas que repetiam a mesma ideia.
Cada rota de solucao oferece um acesso textual a Contato desde a abertura. As
paginas Sobre e Contextos foram enxugadas para remover reiteracoes internas.
Essas mudancas sao editoriais: nao criam novas capacidades, cases, metricas ou
promessas.

Para melhorar leitura e acessibilidade, o cobre permanece como assinatura
visual, mas textos pequenos sobre fundos claros usam `--color-cobre-ink`
(`#80502F`). O texto auxiliar `--color-cinza-pedra` passa a `#626971`.
Etiquetas editoriais usam pelo menos 12 px; rotulos do rodape ganharam
contraste. Em larguras abaixo de 375 px, o CTA principal da homepage usa uma
frase mais curta para evitar quebra imprevista.

As imagens do logotipo declaram sua largura renderizada para evitar downloads
desproporcionais. O logotipo do cabecalho e carregado com prioridade normal;
somente a imagem do Hero e pre-carregada. A fotografia do fundador usa o
carregamento lazy por estar abaixo da primeira dobra.

O material de trabalho, capturas do produto e qualquer prova publica da
Norsey continuam pendentes. Esta consolidacao nao autoriza publicacao nem
substitui a revisao visual e de conteudo em desktop, tablet e mobile.
