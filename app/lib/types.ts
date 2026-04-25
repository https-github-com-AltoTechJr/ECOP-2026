import { Route } from "next";

interface IRoutes {
    name: string;
    route: string;
}

interface Schedule {
    day: number,
    time: string,
    description: string,
    local: string
}

export type { IRoutes, Schedule }