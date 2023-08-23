import { Client } from "./client";

export class Chambre {

        public id_chmb!: number;
        public num!: string;
        public type_chmb!: string;
        public prix_par_jr!: number;
        public dt_lct!: Date;
        public nb_jours!: number;
        public client!: Client;

    constructor() {

    }
}
