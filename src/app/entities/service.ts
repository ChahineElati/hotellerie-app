import { Client } from "./client";

export class Service {
    id_srv!: number;
    label!: string;
    prix!: number;
    categorie!: string;
    clients!: Client[];
}
