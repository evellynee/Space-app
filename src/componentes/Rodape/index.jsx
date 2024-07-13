import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #0010a1;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://www.linkedin.com/in/evellyne-vit%C3%B3ria-b67b6a296/" target='blank'>
                        <img src="/imagens/sociais/linkedin.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/evellynee" target='blank'>
                        <img src="/imagens/sociais/github.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/evellynees/" target='blank'>
                        <img src="/imagens/sociais/instagram.svg" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Evellyne Vitória</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;