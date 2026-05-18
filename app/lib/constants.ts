import { IRoutes } from "./types";

const ROUTES: IRoutes[] = [
  { name: "Início", route: "/" },
  { name: "Sobre", route: "/sobre" },
  { name: "Programação", route: "/programacao" },
  // { name: "Eventos", route: "/" },
  {
    name: "Maratona de Programação",
    route:
      "https://docs.google.com/document/d/1KQ2JO64xvO2yZUDy3WFGZcJtznJAY7_le2S34osTdTE/edit?usp=sharing",
  },
  {
    name: "Artigos",
    route: "https://periodicos.ufersa.edu.br/index.php/ecop/about/submissions",
  },
];

export { ROUTES };
