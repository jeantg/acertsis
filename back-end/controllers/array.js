const array = [
    {
        "codigo": "3fde36a6-c9a1-4d27-9f0f-7c12ab0d1cdd",
        "data": "19-02-2019",
        "cliente": "000.000.000-01",
        "itens": [
            {
                "produto": "Regada Coral",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 79
            },
        ],
        "valorTotal": 158
    },
    {
        "codigo": "4a7c9be2-5231-4dff-b8e7-9a639286726e",
        "data": "22-10-2018",
        "cliente": "000.000.000-02",
        "itens": [
            {
                "produto": "Regada Coral",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 278
    },
    {
        "codigo": "4a7c9be2-5231-4dff-b8e7-9a639286726e",
        "data": "20-08-2017",
        "cliente": "000.000.000-03",
        "itens": [
            {
                "produto": "Bermuda Rosa",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Vestido Preto",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 59.9
            },
            {
                "produto": "Regata Laranja",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 59.9
            },
            {
                "produto": "Regata Laranja",
                "tamanho": "M",
                "marca": "Luna",
                "preco": 59.9
            }
        ],
        "valorTotal": 297.7
    },
    {
        "codigo": "b25433d4-366d-4cc7-8e21-2f6d9a4b8b51",
        "data": "04-12-2019",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "produto": "Vestido Verde",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 98
            },
            {
                "codigo": "67e6a4e2-4f77-4602-b8b0-f3fc98c5419b",
                "produto": "Saia Azul",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 55
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            }
        ],
        "valorTotal": 208
    },
    {
        "codigo": "7f33cbdc-e7d5-4e3b-ab96-e4d940c9710a",
        "data": "08-05-2018",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            }
        ],
        "valorTotal": 155
    },
    {
        "codigo": "918b08fa-402b-4eaf-acc3-ebf8ecd864dc",
        "data": "10-10-2019",
        "cliente": "000.000.000-05",
        "itens": [
            {
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            },
            {
                "produto": "Maius Priorat",
                "tamanho": "G",
                "marca": "Mia",
                "preco": 158
            }
        ],
        "valorTotal": 566
    },
    {
        "codigo": "d71b54eb-1182-468e-9512-bda1ea8cb35d",
        "data": "08-05-2017",
        "cliente": "000.000.000-06",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            }
        ],
        "valorTotal": 622.8
    },
    {
        "codigo": "30769c65-2c2d-4e59-9ed6-29f11851f993",
        "data": "07-10-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            }
        ],
        "valorTotal": 324.8
    },
    {
        "codigo": "0eed7137-26ae-4c94-94db-9211083c4d61",
        "data": "08-11-2019",
        "cliente": "000.000.000-09",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            }
        ],
        "valorTotal": 324.8
    },
    {
        "codigo": "fb5c14ac-6659-4693-b766-3f60a4e5518b",
        "data": "12-07-2018",
        "cliente": "000.000.000-10",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            }
        ],
        "valorTotal": 428.8
    },
    {
        "codigo": "c32e8495-4a81-4264-a7c6-873dc9412c00",
        "data": "07-02-2018",
        "cliente": "000.000.000-03",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            },
            {
                "produto": "Regada Coral",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 79
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Mia",
                "preco": 79
            }
        ],
        "valorTotal": 640.8
    },
    {
        "codigo": "138e8089-3b89-48e9-8ed1-ee937b598596",
        "data": "08-08-2019",
        "cliente": "000.000.000-05",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 265.8
    },
    {
        "codigo": "da9026e6-a6da-4a63-ab1d-606ca74b40be",
        "data": "15-06-2019",
        "cliente": "000.000.000-02",
        "itens": [
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            }
        ],
        "valorTotal": 418
    },
    {
        "codigo": "e7c58b49-1707-49f7-af0c-0d99ed1c0498",
        "data": "17-08-2018",
        "cliente": "000.000.000-09",
        "itens": [
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            }
        ],
        "valorTotal": 444.8
    },
    {
        "codigo": "570d1b25-8d21-4ea4-ab65-c35bb2dd8ec9",
        "data": "11-04-2019",
        "cliente": "000.000.000-03",
        "itens": [
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "67e6a4e2-4f77-4602-b8b0-f3fc98c5419b",
                "produto": "Saia Azul",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 55
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            }
        ],
        "valorTotal": 434.8
    },
    {
        "codigo": "c9bffa65-3d05-4fa3-9e19-b33f9eeb1254",
        "data": "10-04-2019",
        "cliente": "000.000.000-07",
        "itens": [
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "67e6a4e2-4f77-4602-b8b0-f3fc98c5419b",
                "produto": "Saia Azul",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 55
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            }
        ],
        "valorTotal": 368
    },
    {
        "codigo": "e996a81a-961a-47b7-8ba9-bdf16294c9eb",
        "data": "08-06-2019",
        "cliente": "000.000.000-07",
        "itens": [
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            }
        ],
        "valorTotal": 313
    },
    {
        "codigo": "1e571b0e-c09b-40ec-8191-cf1ef55fe1b1",
        "data": "03-06-2019",
        "cliente": "000.000.000-02",
        "itens": [
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            }
        ],
        "valorTotal": 423
    },
    {
        "codigo": "f838c843-9eab-4b4d-bf7e-b2d2f472dfb2",
        "data": "01-06-2019",
        "cliente": "000.000.000-05",
        "itens": [
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Camisa Xadrez",
                "tamanho": "G",
                "marca": "Luna",
                "preco": 66.8
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            }
        ],
        "valorTotal": 647.8
    },
    {
        "codigo": "c99f065b-5596-4e13-a745-9c713331a814",
        "data": "02-10-2019",
        "cliente": "000.000.000-05",
        "itens": [
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            },
            {
                "produto": "Maius Priorat",
                "tamanho": "G",
                "marca": "Mia",
                "preco": 158
            }
        ],
        "valorTotal": 566
    },
    {
        "codigo": "a657fc5a-10d0-48ca-ac97-100ba13c6f72",
        "data": "04-08-2019",
        "cliente": "000.000.000-03",
        "itens": [
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            },
            {
                "produto": "Vestido Floral",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 158
            }
        ],
        "valorTotal": 408
    },
    {
        "codigo": "d18c1086-e9ef-4936-a239-050fc485ff43",
        "data": "07-12-2018",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            }
        ],
        "valorTotal": 250
    },
    {
        "codigo": "4b517823-8ac9-47f2-80c9-651e2e396d73",
        "data": "15-07-2019",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            },
            {
                "produto": "Vestido Preto",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 59.9
            },
            {
                "produto": "Regata Laranja",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 59.9
            }
        ],
        "valorTotal": 369.8
    },
    {
        "codigo": "e1d37861-24b7-458f-a00d-efcf96d3d0d1",
        "data": "11-03-2019",
        "cliente": "000.000.000-07",
        "itens": [
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            }
        ],
        "valorTotal": 250
    },
    {
        "codigo": "0b83c705-216a-4e7c-9947-9b702edcce1a",
        "data": "02-04-2019",
        "cliente": "000.000.000-07",
        "itens": [
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            },
            {
                "produto": "Moletom Cinza",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 140
            }
        ],
        "valorTotal": 390
    },
    {
        "codigo": "f74f5755-ca62-4d67-86ee-fa557f1cc347",
        "data": "10-06-2019",
        "cliente": "000.000.000-03",
        "itens": [
            {
                "codigo": "67e6a4e2-4f77-4602-b8b0-f3fc98c5419b",
                "produto": "Saia Azul",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 55
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 230
    },
    {
        "codigo": "64ed4243-8a51-4d28-be67-909319e99c4e",
        "data": "08-07-2019",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "codigo": "67e6a4e2-4f77-4602-b8b0-f3fc98c5419b",
                "produto": "Saia Azul",
                "tamanho": "PP",
                "marca": "Mia",
                "preco": 55
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            }
        ],
        "valorTotal": 368
    },
    {
        "codigo": "dc5d468b-5d16-451b-865a-0265228e8610",
        "data": "10-08-2019",
        "cliente": "000.000.000-07",
        "itens": [
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 512
    },
    {
        "codigo": "39130632-90f6-452a-9236-91d815ea7fdb",
        "data": "28-06-2019",
        "cliente": "000.000.000-06",
        "itens": [
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 443
    },
    {
        "codigo": "8d38d75f-e612-4d65-b597-2ff92b574a88",
        "data": "18-07-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 175
    },
    {
        "codigo": "ce42787a-05da-4701-a33e-aef56ee8cc2a",
        "data": "18-07-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "codigo": "a1f76d0e-c516-43c7-abe3-d3fa29d8eab4",
                "produto": "Camiseta Listrada",
                "tamanho": "GG",
                "marca": "Mia",
                "preco": 258
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 488
    },
    {
        "codigo": "beae2d56-7ca3-4280-ae36-ad3b2a1f742c",
        "data": "18-07-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 230
    },
    {
        "codigo": "e00f8cd0-94ff-4b29-bfd9-539e35e2cd75",
        "data": "18-07-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 230
    },
    {
        "codigo": "b503fbff-96c6-4da7-a3ff-daa03291c0b9",
        "data": "22-08-2019",
        "cliente": "000.000.000-10",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 350
    },
    {
        "codigo": "1194a8cb-b693-40dd-a3d2-23f9f343d36c",
        "data": "15-09-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 230
    },
    {
        "codigo": "517ec2b6-1d3d-48a1-9ed4-a51e20ce18df",
        "data": "15-11-2019",
        "cliente": "000.000.000-09",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 110
    },
    {
        "codigo": "52e58136-4116-4b37-8559-b4006aa58285",
        "data": "10-11-2019",
        "cliente": "000.000.000-06",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            }
        ],
        "valorTotal": 189
    },
    {
        "codigo": "70a1b917-d457-478b-a075-fba5554d6362",
        "data": "12-11-2019",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 309
    },
    {
        "codigo": "e8cab51e-d4b3-43ce-84dc-1c6d360f4c0a",
        "data": "14-10-2019",
        "cliente": "000.000.000-05",
        "itens": [
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 254
    },
    {
        "codigo": "d1339fc3-5a2d-4cc3-be74-a2e4ed2e72fa",
        "data": "07-10-2019",
        "cliente": "000.000.000-10",
        "itens": [
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            }
        ],
        "valorTotal": 199
    },
    {
        "codigo": "603fce5f-4c78-40f8-b212-d7ed1e27571a",
        "data": "11-07-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "produto": "Bermuda Rosa",
                "tamanho": "XG",
                "marca": "Mia",
                "preco": 120
            },
            {
                "codigo": "8c76af8e-cde8-45aa-8aae-14e040080371",
                "produto": "Camiseta Preta",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 110
            }
        ],
        "valorTotal": 309
    },
    {
        "codigo": "6f0bee3e-4988-4e23-83f6-c28af6ba0464",
        "data": "15-08-2019",
        "cliente": "000.000.000-03",
        "itens": [
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            }
        ],
        "valorTotal": 79
    },
    {
        "codigo": "89f59951-1312-4f6f-8851-ef0b9c7c4d52",
        "data": "05-05-2018",
        "cliente": "000.000.000-02",
        "itens": [
            {
                "produto": "Regada Coral",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 79
            },
            {
                "codigo": "e9eee4af-13d0-4da1-9a91-36b100e1c98e",
                "produto": "Saia Azul",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 55
            },
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 189
    },
    {
        "codigo": "fc41d3a1-1eef-49c5-905c-d19e747eb6c5",
        "data": "06-08-2018",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            }
        ],
        "valorTotal": 55
    },
    {
        "codigo": "7405ad98-ca99-4fd3-994f-85be49633141",
        "data": "18-05-2018",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "produto": "Saia Azul",
                "tamanho": "G",
                "marca": "Sid",
                "preco": 55
            },
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            }
        ],
        "valorTotal": 353
    },
    {
        "codigo": "b0d17108-5b79-41f2-a31c-77f2d05775d3",
        "data": "17-06-2018",
        "cliente": "000.000.000-04",
        "itens": [
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            }
        ],
        "valorTotal": 298
    },
    {
        "codigo": "17f00e57-cc0c-4d5f-ac92-367855eb64a1",
        "data": "11-08-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            },
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            }
        ],
        "valorTotal": 596
    },
    {
        "codigo": "38ef8665-61df-4402-94f8-3c9b28ab7123",
        "data": "17-09-2019",
        "cliente": "000.000.000-06",
        "itens": [
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            },
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            },
            {
                "produto": "Regata Laranja",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 59.9
            }
        ],
        "valorTotal": 655.9
    },
    {
        "codigo": "7a6aeaec-18db-4339-b87a-500dac29e1cb",
        "data": "03-11-2019",
        "cliente": "000.000.000-08",
        "itens": [
            {
                "codigo": "449cb4e2-67d1-4087-9192-4ac6bd018727",
                "produto": "Camiseta Branca",
                "tamanho": "M",
                "marca": "Mia",
                "preco": 298
            },
            {
                "produto": "Regata Laranja",
                "tamanho": "P",
                "marca": "Sid",
                "preco": 59.9
            }
        ],
        "valorTotal": 357.9
    }
]
module.exports = array;