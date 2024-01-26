export type Product = {
    id: number;
    avaliacao: number[],
    avaliacoes: number,
    nome: string,
    descrição: string,
    preco: number,
    detalhe: string,
    desconto?: string | number
}