import { IRoutes } from "./types";

const ROUTES: IRoutes[] = [
    { name: 'Início', route: '/' },
    /*
    TODO: Change the routes to the correct ones when the pages are ready
    { name: 'Sobre', route: '/sobre' },
    { name: 'Programação', route: '/programacao' },
    { name: 'Eventos', route: '/eventos' },
    { name: 'Artigos', route: '/artigos' }
    */
    { name: 'Sobre', route: '/' },
    { name: 'Programação', route: '/programacao' },
    { name: 'Eventos', route: '/' },
    { name: 'Artigos', route: 'https://periodicos.ufersa.edu.br/index.php/ecop/about/submissions' }
]

export { ROUTES }