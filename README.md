# MyReads Project

Este repositório contém minha implementação do aplicativo MyReads, projeto da conclusão do módulo **Fundamentos de React** do [Programa Nanodegree: Desenvolvedor React da Udacity](https://br.udacity.com/course/react-nanodegree--nd019). MyReads é um aplicativo que possibilita que o usuário adicione livros de interesse e categorize-os nas prateleiras: *já li*, *estou lendo* e *desejo ler*.

Você pode ver o [demo aqui](https://hfoletto.github.io/my_reads/).

## TL;DR

* Clone esse repositório
* Instale as dependências com `npm install`
* Inicie o servidor de desenvolvimento com `npm start`

## Funcionalidades do aplicativo

* Ao abrir a página pela primeira vez, a API da Udacity criará um `token` e salvará no **Local Storage**. Com isso alguns livros aparecerão automaticamente.
* Com alguns livros nas estantes, você poderá clicar na seta para abrir um dropdown e então mudar de estante o determinado livro.
* Livros também podem ser removidos por meio da opção **None** no dropdown.
* Ao atualizar a página, os livros continuam nas mesmas posições que antes e também há uma placeholder UI que mostra as posições dos livros enquanto o carregamento é feito no background.
* Clicando no botão `+` no canto inferior direito da página, abre-se a página de pesquisa.
* Nessa nova página, há um campo de pesquisa combinado com uma lista de termos que podemos pesquisar.
* Ao começar a digitar, os termos que não correspondem se apagam, e os correspondentes são destacados.
* Ao pressionar `Enter`, realize-se a pesquisa.
* Caso o usuário digite algo que não corresponde com nenhum dos termos, uma mensagem de erro aparecerá perto do campo de pesquisa e não será realizada a chamada da API.
* Sendo um termo válido, é renderizada uma placeholder UI enquanto é realizada a chamada no background.
* Terminado o carregamento, são apresentados os livros correspondentes, que podem ser adicionados para as estantes desejadas.
* Caso algum livro da pesquisa já esteja em alguma das estantes, ele aparecerá com o mesmo estado, aparecendo o botão de mover em vez de adicionar e também poderá ser movido de estandes ou removido por ali mesmo.
* Nesse momento, caso altere o valor do campo de pesquisa, novamente é apresentada a tabela de termos válidos, para que assim seja possível realizar uma nova pesquisa com facilidade.
* A qualquer momento pode-se clicar no botão `←` no canto superior esquerdo da página para voltar ao início.
* Também pode ser usado o botão de voltar do navegador para a mesma função.
