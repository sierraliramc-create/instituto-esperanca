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
                src="imagens/ong.jpg"
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

            <form id="form-cadastro">

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >

                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >

                    <label for="nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >

                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        required
                    >

                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        required
                    >

                </fieldset>

                <fieldset>

                    <legend>Endereço</legend>

                    <label for="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >

                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        required
                    >

                    <label for="cidade">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >

                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required>

                        <option value="">
                            Selecione
                        </option>

                        <option value="SP">São Paulo</option>
                        <option value="PR">Paraná</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="BA">Bahia</option>
                        <option value="PE">Pernambuco</option>

                    </select>

                </fieldset>

                <button type="submit">
                    Enviar cadastro
                </button>

                <p id="mensagem-cadastro"></p>

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

function configurarFormulario() {

    const formulario = document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const dados = new FormData(formulario);

        const cadastro = {
            nome: dados.get("nome"),
            email: dados.get("email"),
            nascimento: dados.get("nascimento"),
            cpf: dados.get("cpf"),
            telefone: dados.get("telefone"),
            endereco: dados.get("endereco"),
            cep: dados.get("cep"),
            cidade: dados.get("cidade"),
            estado: dados.get("estado")
        };

        localStorage.setItem(
            "cadastroInstitutoEsperanca",
            JSON.stringify(cadastro)
        );

        const mensagem = document.getElementById("mensagem-cadastro");

        mensagem.textContent =
            "Cadastro realizado com sucesso!";

        mensagem.className = "alert alert-sucesso";

        formulario.reset();
    });
}

function atualizarPagina() {
    renderizarPagina();
    configurarFormulario();
}

window.addEventListener("hashchange", atualizarPagina);

atualizarPagina();
