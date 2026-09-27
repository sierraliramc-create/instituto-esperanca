const app = document.getElementById("app");

const paginas = {
    inicio: `
        <section id="inicio">

            <h2>Sobre o Instituto Esperança</h2>

            <p>
                O Instituto Esperança é uma organização sem fins lucrativos
                que trabalha para promover ações sociais e melhorar a qualidade
                de vida de pessoas em situação de vulnerabilidade.
            </p>

            <img
                src="../imagens/ong.jpg"
                alt="Voluntários do Instituto Esperança realizando uma ação social"
            >

        </section>

        <section>

            <h2>Sobre nossa atuação</h2>

            <p>
                Desenvolvemos projetos voltados à educação, inclusão social
                e apoio às comunidades, contando com a participação de
                voluntários e doadores.
            </p>

        </section>

        <section>

            <h2>Entre em contato</h2>

            <address>
                <p>E-mail: contato@institutoesperanca.org</p>
                <p>Telefone: (11) 99999-9999</p>
                <p>Endereço: Rua da Esperança, 100 - São Paulo, SP</p>
            </address>

        </section>
    `,

    projetos: `
        <section>
            <h1>Nossos Projetos</h1>

            <div class="projeto">
                <h2>Projeto Educação</h2>

                <p>
                    Oferecemos apoio educacional para crianças
                    e adolescentes.
                </p>

                <span class="badge badge-ativo">
                    Ativo
                </span>
            </div>

            <div class="projeto">
                <h2>Projeto Alimentação</h2>

                <p>
                    Realizamos ações para ajudar famílias
                    em situação de vulnerabilidade.
                </p>

                <span class="badge badge-andamento">
                    Em andamento
                </span>
            </div>
        </section>
    `,

    cadastro: `
        <section>
            <h1>Participe</h1>

            <p>
                Cadastre-se para participar das ações
                do Instituto Esperança.
            </p>

            <form>
                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" required>

                <button type="submit">
                    Enviar cadastro
                </button>
            </form>
        </section>
    `
};

function renderizarPagina() {

    const rota = window.location.hash.replace("#", "") || "inicio";

    if (paginas[rota]) {
        app.innerHTML = paginas[rota];
    } else {
        app.innerHTML = paginas.inicio;
    }
}

window.addEventListener("hashchange", renderizarPagina);

renderizarPagina();