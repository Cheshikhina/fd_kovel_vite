import Mock from 'mockjs';

Mock.mock('/productlist', {
    'products': {
        'Pizza': [
            {
                'id': 'pizza_001',
                'img': '/src/assets/pizza-1.png',
                'title': 'Quattro formaggi',
                'info': '32cm',
                'desc': 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'pizza_002',
                'img': '/src/assets/pizza-2.png',
                'title': 'Карбонара',
                'info': '32cm',
                'desc': 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
                'price': '15 USD',
                'isInCart': false
            }, {
                'id': 'pizza_003',
                'label': 'Хіт',
                'img': '/src/assets/pizza-3.png',
                'title': 'Філадельфія селмон',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'pizza_004',
                'img': '/src/assets/pizza-4.png',
                'title': 'Ді маре',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'pizza_005',
                'img': '/src/assets/pizza-5.png',
                'title': 'Кватро формаджіо',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '13 USD',
                'isInCart': false
            }, {
                'id': 'pizza_006',
                'img': '/src/assets/pizza-6.png',
                'title': 'Кватро формаджіо',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'pizza_007',
                'img': '/src/assets/pizza-7.png',
                'title': 'Кватро формаджіо',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '8 USD',
                'isInCart': false
            }, {
                'id': 'pizza_008',
                'img': '/src/assets/pizza-8.png',
                'title': 'Кватро формаджіо',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'pizza_009',
                'img': '/src/assets/pizza-3.png',
                'title': 'Філадельфія селмон',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '12 USD',
                'isInCart': false
            }, {
                'id': 'pizza_010',
                'img': '/src/assets/pizza-1.png',
                'title': 'Філадельфія селмон',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'pizza_011',
                'label': 'Хіт',
                'img': '/src/assets/pizza-2.png',
                'title': 'Філадельфія селмон',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '11 USD',
                'isInCart': false
            }, {
                'id': 'pizza_012',
                'img': '/src/assets/pizza-4.png',
                'title': 'Філадельфія селмон',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '14 USD',
                'isInCart': false
            }, {
                'id': 'pizza_013',
                'img': '/src/assets/pizza-7.png',
                'title': 'Філадельфія селмон',
                'info': '32cm',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '9 USD',
                'isInCart': false
            }
        ],
        'Sushi': [
            {
                'id': 'sushi_001',
                'img': '/src/assets/sushi-1.png',
                'title': 'Rainbow Roll',
                'info': '140g',
                'desc': 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'sushi_002',
                'img': '/src/assets/sushi-2.png',
                'title': 'California Roll',
                'info': '450g',
                'desc': 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
                'price': '15 USD',
                'isInCart': false
            }, {
                'id': 'sushi_003',
                'label': 'Хіт',
                'img': '/src/assets/sushi-3.png',
                'title': 'Spicy Tuna roll',
                'info': '240g',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'sushi_004',
                'img': '/src/assets/sushi-4.png',
                'title': 'Spider Roll',
                'info': '140g',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'sushi_005',
                'img': '/src/assets/sushi-5.png',
                'title': 'Shrimp Tempura Roll',
                'info': '140g',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '20 USD',
                'isInCart': false
            }, {
                'id': 'sushi_006',
                'img': '/src/assets/sushi-6.png',
                'title': 'King Crab Roll',
                'info': '140g',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '5 USD',
                'isInCart': false
            }, {
                'id': 'sushi_007',
                'img': '/src/assets/sushi-7.png',
                'title': 'Dragon Roll',
                'info': '140g',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '15 USD',
                'isInCart': false
            }, {
                'id': 'sushi_008',
                'img': '/src/assets/sushi-8.png',
                'title': 'Boston Roll',
                'info': '140g',
                'desc': 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
                'price': '21 USD',
                'isInCart': false
            }
        ],
        'Salad': [
            {
                'id': 'salad_001',
                'label': 'Хіт',
                'img': '/src/assets/salad-1.png',
                'title': 'Bazar',
                'info': '350g',
                'desc': 'Quinoa, Pollo Braseado, Fresas, Picatoste Pan, Manzana, Aguacate',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'salad_002',
                'img': '/src/assets/salad-2.png',
                'title': 'Boquería',
                'info': '450g',
                'desc': 'Lechuga Romana, Atún, Espárragos Blancos, Zanahoria, Granada, Huevo',
                'price': '15 USD',
                'isInCart': false
            }, {
                'id': 'salad_003',
                'label': 'Хіт',
                'img': '/src/assets/salad-3.png',
                'title': 'Camden',
                'info': '240g',
                'desc': 'Arroz Integral, Maíz Cocido, Aguacate, Tomate Cherry, Brotes de Soja, Zanahoria',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'salad_004',
                'img': '/src/assets/salad-4.png',
                'title': 'Chelsea',
                'info': '280g',
                'desc': 'Arroz Blanco, Rúcula, Pollo Braseado, Nueces, Tomate Cherry, Aceitunas Negras',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'salad_005',
                'img': '/src/assets/salad-5.png',
                'title': 'Galvany',
                'info': '350g',
                'desc': 'Pasta Lazos, Aceitunas Negras, Maíz Cocido, Tomate Cherry, Queso Feta, Zanahoria',
                'price': '20 USD',
                'isInCart': false
            }, {
                'id': 'salad_006',
                'img': '/src/assets/salad-6.png',
                'title': 'Go Vegan',
                'info': '140g',
                'desc': 'Quinoa, Brócoli Cocido, Garbanzos, Zanahoria, Pipas de Calabaza, Tomate Cherry',
                'price': '5 USD',
                'isInCart': false
            }, {
                'id': 'salad_007',
                'img': '/src/assets/salad-7.png',
                'title': 'La Merced',
                'info': '140g',
                'desc': 'Arroz integral, Aguacate, Brotes de Soja, Maíz, Tomate Cherry, Zanahoria',
                'price': '15 USD',
                'isInCart': false
            }, {
                'id': 'salad_008',
                'label': 'Хіт',
                'img': '/src/assets/salad-8.png',
                'title': 'La Pepa',
                'info': '140g',
                'desc': 'Mezclum, Atún, Lentejas, Aguacate, Tomate Cherry, Pipas de Girasol',
                'price': '21 USD',
                'isInCart': false
            }, {
                'id': 'salad_009',
                'label': 'Хіт',
                'img': '/src/assets/salad-8.png',
                'title': 'La Pepa',
                'info': '140g',
                'desc': 'Mezclum, Atún, Lentejas, Aguacate, Tomate Cherry, Pipas de Girasol',
                'price': '21 USD',
                'isInCart': false
            }
        ],
        'Dessert': [            
            {
                'id': 'desert_001',
                'img': '/src/assets/desert-1.png',
                'title': 'Butterscotch Pudding',
                'desc': 'House Made Waffle Cup with Whipped Cream',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'desert_002',
                'img': '/src/assets/desert-2.png',
                'title': 'Black Mission Fig Galette',
                'desc': 'Organic Vanilla Bean Ice Cream',
                'price': '15 USD',
                'isInCart': false
            }, {
                'id': 'desert_003',
                'label': 'Хіт',
                'img': '/src/assets/desert-3.png',
                'title': 'Homemade Cognac Espresso Tiramisu',
                'price': '9 USD',
                'isInCart': false
            }, {
                'id': 'desert_004',
                'img': '/src/assets/desert-4.png',
                'title': 'Molten Chocolate Lava Cake',
                'desc': 'Vanilla Ice Cream',
                'price': '10 USD',
                'isInCart': false
            }, {
                'id': 'desert_005',
                'img': '/src/assets/desert-5.png',
                'title': 'S`Mores',
                'desc': 'Mini-campfire with Marshmallows, Homemade Graham Crackers, Chocolate and Peanut Butter Ganache',
                'price': '20 USD',
                'isInCart': false
            }, {
                'id': 'desert_006',
                'img': '/src/assets/desert-6.png',
                'title': 'Peach and Raspberry Cheesecake',
                'desc': 'with Wild Mixed Berry Compote ',
                'price': '5 USD',
                'isInCart': false
            }
        ],
        'Drinks': [            
            {
                'id': 'drink_001',
                'label': 'Хіт',
                'img': '/src/assets/drink-1.png',
                'title': 'Espresso',
                'info': '100mg',
                'price': '3 USD',
                'isInCart': false
            }, {
                'id': 'drink_002',
                'img': '/src/assets/drink-2.png',
                'title': 'Americano',
                'info': '200mg',
                'price': '2 USD',
                'isInCart': false
            }, {
                'id': 'drink_003',
                'label': 'Хіт',
                'img': '/src/assets/drink-7.png',
                'title': 'Cappuccino',
                'info': '225mg',
                'price': '3 USD',
                'isInCart': false
            }, {
                'id': 'drink_004',
                'img': '/src/assets/drink-4.png',
                'title': 'Late',
                'info': '300mg',
                'price': '3 USD',
                'isInCart': false
            }, {
                'id': 'drink_005',
                'img': '/src/assets/drink-2.png',
                'title': 'Macchiato',
                'info': '350mg',
                'price': '2 USD',
                'isInCart': false
            }, {
                'id': 'drink_006',
                'img': '/src/assets/drink-6.png',
                'title': 'Mocha',
                'info': '450mg',
                'price': '2 USD',
                'isInCart': false
            }, {
                'id': 'drink_007',
                'img': '/src/assets/drink-4.png',
                'title': 'Hot chocolate',
                'info': '400mg',
                'price': '3 USD',
                'isInCart': false
            }
        ]
    }
});
