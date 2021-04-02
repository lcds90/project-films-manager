export interface Film {
    id?: number,
    titulo: string;
    urlFoto? : string;
    dtLancamento: Date;
    descricao?: string;
    nota: number;
    urlIMdb?: string;
    genero: string;
}