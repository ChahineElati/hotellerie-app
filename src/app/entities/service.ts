import { Client } from "./client";

export class Service {
    id_serv!: number;
    label!: string;
    prix!: number;
    categorie!: string;
    clients!: Client[];
}
