const http = require('http')
const port = process.env.PORT || 3000

const home = `
    <h2>Oiee, seja bem-vinde </h2>
    <h3> 
        Meu nome é Rebehk, sou estudante de Análise e Desenvolvimento de sistemas no IFPB, <br>
        sou vegetariana, amo animais, series e filmes. 

    </h3>
    
`;

const curriculo =`
    <h4>Curriculo</h4>
  
    <ul>
        <h5>Formação e experiencias academicas</h5>
        <li>Cursando ADS no IFPB, Fui monitora de algoritmos e lógica de programação.<br>
         Estou partipando de um projeto de extensão no qual estou desenvolvendo aplicativo com React Native para criar um aambiente gamificado Crealit como ferramenta de incentivo à leitura, de livros clássicos da literatura brasileira  
        </li>
        <h5>Experincias profissionais</h5>
        <li>Em busca do primiero emprego na area de TI</li>
        
    </ul>

`;




const server = http.createServer((req,res) => {
    // normaliza a url removendo a querystring e a barra final
    // opcional e usando letras minúsculas
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(home)
            break
        case '/curriculo':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(curriculo)
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain; charset= utf-8' })
            res.end('Not Found')
            break
    }
})
server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'))