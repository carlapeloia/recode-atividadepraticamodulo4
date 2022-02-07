import CardsDestinos from '../componentes/cards/CardsDestinos'
import moscou from '../imagens/moscou.jpg'
import zuriquec from '../imagens/zuriquec.jpg'
import sctenerife from '../imagens/sctenerife.jpg'
import siracusa from '../imagens/siracusa.jpg'
import jalapao from '../imagens/jalapao.jpg'
import gramado from '../imagens/gramado.jpg'

function Destinos() {
    return (
        <div>
            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-5">Destinos disponíveis</h1>
            <div>
                <div className="card-deck mb-4 m-auto">
                    <CardsDestinos imagem={moscou} nome="Moscou" descricao="É a megacidade mais ao norte na Terra, a segunda cidade mais populosa da Europa e possui a segunda maior comunidade de milionários do mundo. Seu clima é frio e temperado, com temperatura média de  5.7 °C." atualizacao="Atualizado em 26 de Janeiro de 2022" />
                    <CardsDestinos imagem={zuriquec} nome="Zurique" descricao="A origem do nome Zurique está provavelmente nas línguas celtas com a palavra Turus. Em Zurique, o verão é agradável e com precipitação; o inverno é muito frio. Durante o ano inteiro, o tempo é de céu parcialmente encoberto." atualizacao="Atualizado em 26 de Janeiro de 2022" />
                    <CardsDestinos imagem={sctenerife} nome="Santa Cruz de Tenerife" descricao="É a maior das ilhas ocidentais do arquipélago canário. Seu verão é morno, úmido e árido e o inverno é longo, agradável e seco. Sua temperatura varia de 15 °C a 28 °C e raramente é inferior a 13 °C ou superior a 31 °C." atualizacao="Atualizado em 26 de Janeiro de 2022" />
                </div>
            </div>

            <div>
                <div className="card-deck mb-4 m-auto">
                    <CardsDestinos imagem={siracusa} nome="Siracusa" descricao="Está localizada na Costa Leste da Sicília. A quase totalidade do contorno do seu território é banhada pelo mar Jônico (Ionico). As ruínas gregas e romanas que existem em Siracusa estão entre as melhores do Mundo." atualizacao="Atualizado em 26 de Janeiro de 2022" />
                    <CardsDestinos imagem={jalapao} nome="Jalapão" descricao="Está localizado no leste do Estado do Tocantins, fazendo divisa com os Estados do Maranhão, Piauí e Bahia. Seu  clima é predominantemente tropical, sua temperatura média é de 26ºC e no verão varia entre 30ºC e 35ºC." atualizacao="Atualizado em 26 de Janeiro de 2022" />
                    <CardsDestinos imagem={gramado} nome="Gramado" descricao="É uma cidade marcada pelas colonizações alemã, italiana e portuguesa. Conhecida como 'Suíça Brasileira', assim chamada por seu clima temperado, arquitetura típica e manifestações culturais." atualizacao="Atualizado em 26 de Janeiro de 2022" />
                </div>
            </div>
        </div>
    )
}

export default Destinos