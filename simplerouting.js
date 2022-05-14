const http = require('http')
const port = process.env.PORT || 3000

const home = `
    <body style="background-color:#6A5ACD; max-width: 100vw; height: 100vh; margin:0; padding:0;">
        <div style="color:white; text-align: center; text-shadow: 2px 2px 5px black; margin-top:40px;" >
            <h1>Oiee, seja bem-vinde </h1>
            <h3> 
                Meu nome é Rebehk, sou estudante de Análise e Desenvolvimento de sistemas no IFPB,<br>
                sou vegetariana, amo animais, series e filmes. 
            </h3>
            <div style="display: flex; justify-content: center; margin-top: 35px; ">
                <img src="http://tecgirl.com.br/wp-content/uploads/2016/06/lindinha-programadora-min.png" alt="lidinha no computador" style="width:500px; border-radius: 200px;"> 
            </div>
            <p>Para mudar de pagina altere a rota para:</p>
            <p>localhost:3000/curriculo  ou localhost:3000/blog</p>

        </div>
        
    </body>
`;

const curriculo = `
    <body style="background-color:#6A5ACD; max-width: 100vw; height: 100vh; margin:0; padding:0;">
        <div style="display: flex; justify-content: center; margin-top: 7%; flex-direction: column; color:white; text-align: center; text-shadow: 2px 2px 5px black;">
            <h2>Curriculo</h2>
            <div>
                <h3>Formação e Experiências Acadêmicas</h3>
                <h4>Cursando ADS no IFPB, Fui monitora de algoritmos e lógica de programação.<br>
                Estou partipando de um projeto de extensão no qual estou desenvolvendo aplicativo com React Native <br> para criar um ambiente gamificado Crealit como ferramenta de incentivo à leitura, de livros clássicos da literatura brasileira. 
                </h4>
            </div>
            <div>
                <h3>Experiências Profissionais</h3>
                <h4>Em busca do primiero emprego na área de TI, desenvolvedora font-end <br>
                Trabalhei dois anos como Assistente Financeiro, cursei dois semestres de Contabilidade na Unopar </h4>
            </div>

            <div>
                <p style="margin-top: 10%; padding-top: 25px;">Para mudar de pagina altere a rota para:
                <br>localhost:3000/blog  ou localhost:3000/</p>
            </div>
                
        </div>
    </body>
`;

const blog = `
    <body style="background-color:#6A5ACD; max-width: 100vw; height: 100vh; margin:0; padding:0;">  
        <div style="display: flex; justify-content: center; margin-top: 10%; flex-direction: column; color:white; text-align: center;">
            
                <h1>
                    <a style="text-decoration: none; color:white; text-shadow: 3px 3px 6px black;" href="https://semiaridodevisu.ifsertao-pe.edu.br/index.php/rsdv/article/view/303"
                    title="Gamificando clássicos literários com o jogo Crealit "> Gamificando clássicos literários com o jogo Crealit </a>
                </h1>
                <h1>
                    <a style="text-decoration: none; color:white; text-shadow: 3px 3px 6px black;" href="https://blog.brkambiental.com.br/consumo-de-carne/"
                    title="Consumo de carne: construir diálogos sobre a redução é fundamental "> Consumo de carne: construir diálogos sobre a redução é fundamental </a>
                </h1>
                <h1>
                    <a style="text-decoration: none; color:white; text-shadow: 3px 3px 6px black;" href="https://canaltech.com.br/entretenimento/series-mais-assistidas-semana-08052022/"
                    title="As 10 séries mais assistidas da semana (08/05/2022) "> As 10 séries mais assistidas da semana (08/05/2022) </a>
                </h1>
                    <div>
                        <p style="margin-top: 10%; padding-top: 25px; text-shadow: 2px 2px 5px black;">Para mudar de pagina altere a rota para:
                        <br>localhost:3000/curriculo  ou localhost:3000/</p>
                </div>
            
        </div>
    </body>
    
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