import './AboutMe.css';

function AboutMe() {
    return (
        <div id="container">
            <div id="img-eu">
                <img id="eu" src="/src/assets/eu.png" alt="Yago" />
            </div>
            <h1 id="ola">Olá!</h1>
            <div id="resumo">
                <p>Meu nome é Yago Almeida Melo, tenho 21 anos e sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes e intuitivas. Com habilidades em HTML, CSS, JavaScript e frameworks modernos como React, estou sempre em busca de novas tecnologias e tendências para aprimorar meus projetos. Adoro transformar ideias em realidade através do código e estou animado para contribuir com soluções inovadoras no mundo do desenvolvimento web.</p>
            </div>
            <div id="skills">
                <h2 id="skills-title">Hard Skills</h2>
                <div id="skills-content">
                    <div class="skill">
                        <i class="fa-brands fa-html5 fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-brands fa-css3-alt fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-brands fa-js fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-brands fa-python fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-brands fa-java fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-solid fa-c fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-solid fa-database fa-xl"></i>
                    </div>
                    <div class="skill">
                        <i class="fa-brands fa-git-alt fa-xl"></i>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;