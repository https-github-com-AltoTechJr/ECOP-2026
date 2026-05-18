interface IRoutes {
  name: string;
  route: string;
}

interface Schedule {
  day: number;
  time: string;
  title: string;
  description?: string;
  local: string;
}

export type { IRoutes, Schedule };
