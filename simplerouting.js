const http = require('http')
const port = process.env.PORT || 3000

const home = `
    <h2>Oiee, seja bem-vinde </h2>
    <h3> 
        Meu nome é Rebehk, sou estudante de Análise e Desenvolvimento de sistemas no IFPB, <br>
        sou vegetariana, amo animais, series e filmes. 

    </h3>
    
`;

const curriculo = `
    <div>
        <h3>Curriculo</h3>
        <div>
            <h4>Formação e Experiências Acadêmicas</h4>
            <p>Cursando ADS no IFPB, Fui monitora de algoritmos e lógica de programação.<br>
            Estou partipando de um projeto de extensão no qual estou desenvolvendo aplicativo com React Native para criar um ambiente gamificado Crealit como ferramenta de incentivo à leitura, de livros clássicos da literatura brasileira. 
            </p>
        </div>
        <div>
            <h4>Experiências Profissionais</h4>
            <p>Em busca do primiero emprego na área de TI, desenvolvedora font-end <br>
            Trabalhei dois anos como Assistente Financeiro, cursei dois semestres de Contabilidade na Unopar </p>
        </div>
            
    </div>

`;

const blog = `
    <div>
        <div>
            <h3>
                <a href="https://semiaridodevisu.ifsertao-pe.edu.br/index.php/rsdv/article/view/303"
                title="Gamificando clássicos literários com o jogo Crealit "> Gamificando clássicos literários com o jogo Crealit </a>
            </h3>
            <h3>
                <a href="https://blog.brkambiental.com.br/consumo-de-carne/"
                title="Consumo de carne: construir diálogos sobre a redução é fundamental ">Consumo de carne: construir diálogos sobre a redução é fundamentalt </a>
            </h3>
            <h3>
                <a href="https://canaltech.com.br/entretenimento/series-mais-assistidas-semana-08052022/"
                title="As 10 séries mais assistidas da semana (08/05/2022) "> As 10 séries mais assistidas da semana (08/05/2022) </a>
            </h3>
        
    </div>
    
`;




const server = http.createServer((req, res) => {
    // normaliza a url removendo a querystring e a barra final
    // opcional e usando letras minúsculas
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(home)
            break
        case '/curriculo':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(curriculo)
            break
        case '/blog':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(blog)
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain; charset= utf-8' })
            res.end('Not Found')
            break
    }
})
server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'))