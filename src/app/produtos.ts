export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos:IProduto[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", quantidadeEstoque: 15, imagem: "./assets/mouse-3.jpg" },
    { id: 2, descricao: "Monitor", preco: 1200.50, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/monitor-1.jpg" },
    { id: 3, descricao: "Teclado", preco: 749.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/teclado-1.jpg" },
    { id: 4, descricao: "Fone bluetooth", preco: 599.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/fone-de-ouvido-2.jpg" },
    { id: 5, descricao: "AirPods", preco: 299.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/fone-de-ouvido-1.jpg" },
    { id: 6, descricao: "Fone c/ fio", preco: 399.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/fone-de-ouvido-3.jpg" },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/hd.jpg" },
    { id: 8, descricao: "Combo de placa de vídeo", preco: 1449.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "../assets/placa-video.jpg" },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/processador.jpg" },
    { id: 10, descricao: "Notebook", preco: 2500, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/laptop-1.jpg" },
    { id: 11, descricao: "MacBook", preco: 4500, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/laptop-2.jpg" },
    { id: 12, descricao: "Mouse escritório", preco: 20, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-1.png" },
    { id: 13, descricao: "Mouse Logitech s/ fio", preco: 200, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-2.jpg" },
    { id: 14, descricao: "Mouse s/ fio", preco: 50, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-4.jpg" },
    { id: 15, descricao: "Teclado s/fio", preco: 159.99, descricaoPreco: "À vista no PIX", quantidadeEstoque: 10, imagem: "./assets/teclado-2.jpg" }
]