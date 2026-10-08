export type Product = {
  id: string;
  brand: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  salePrice: number;
  discount: number;
  image: string;
  hoverImage: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  likeCount: number;
  isNew: boolean;
  isSale: boolean;
  freeShipping: boolean;
  description: string;
  detailImages?: string[];
};

export const products: Product[] = [
  {
    "id": "1",
    "brand": "Urban Code",
    "name": "미니멀 스퀘어 메신저백",
    "category": "가방",
    "subcategory": "백팩",
    "price": 70000,
    "salePrice": 70000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Black",
      "Navy",
      "Brown"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.7,
    "reviewCount": 508,
    "likeCount": 843,
    "isNew": true,
    "isSale": false,
    "freeShipping": false,
    "description": "Urban Code의 미니멀 스퀘어 메신저백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1600857125164-499a823272b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1724862979245-71e659b98366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "2",
    "brand": "Studio 4910",
    "name": "경량 메쉬 트레킹화",
    "category": "신발",
    "subcategory": "부츠",
    "price": 110000,
    "salePrice": 110000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1641997465126-c73cc4070337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1682125167475-694419f57ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4.4,
    "reviewCount": 785,
    "likeCount": 3001,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Studio 4910의 경량 메쉬 트레킹화입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1788029011405-b7e732ed6b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBzbmVha2VycyUyMHNob2VzJTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "3",
    "brand": "Basic Standard",
    "name": "나일론 스트링 백팩",
    "category": "가방",
    "subcategory": "토트백",
    "price": 70000,
    "salePrice": 56000,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Blue",
      "Black",
      "Gray"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.9,
    "reviewCount": 345,
    "likeCount": 1899,
    "isNew": false,
    "isSale": true,
    "freeShipping": false,
    "description": "Basic Standard의 나일론 스트링 백팩입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1724862979245-71e659b98366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "4",
    "brand": "Unic",
    "name": "워싱 코튼 팔찌",
    "category": "액세서리",
    "subcategory": "아이웨어",
    "price": 55000,
    "salePrice": 55000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1631832725617-d28dbbb3a29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Khaki"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4,
    "reviewCount": 114,
    "likeCount": 2194,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Unic의 워싱 코튼 팔찌입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1708958117373-5d354f07a61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1708958142067-f52023835f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "5",
    "brand": "Vanguard",
    "name": "클래식 더블 자켓",
    "category": "아우터",
    "subcategory": "가디건",
    "price": 130000,
    "salePrice": 130000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1640937341066-3a9393d48975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1787075042047-64dbc5a04509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.7,
    "reviewCount": 171,
    "likeCount": 3950,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Vanguard의 클래식 더블 자켓입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1767679456819-9921c2bd7275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1622114684497-a9820f5ebc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "6",
    "brand": "Unic",
    "name": "오버사이즈 호보 토트백",
    "category": "가방",
    "subcategory": "메신저백",
    "price": 55000,
    "salePrice": 55000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Khaki",
      "Navy"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.7,
    "reviewCount": 88,
    "likeCount": 3387,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Unic의 오버사이즈 호보 토트백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1600857125164-499a823272b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640901555365-cbbb76b0009b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBiYWclMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "7",
    "brand": "Archive",
    "name": "와이드 코튼 스웨트 팬츠",
    "category": "하의",
    "subcategory": "코튼팬츠",
    "price": 60000,
    "salePrice": 48000,
    "discount": 20,
    "image": "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Olive",
      "Brown",
      "Gray",
      "Navy"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.8,
    "reviewCount": 633,
    "likeCount": 2792,
    "isNew": true,
    "isSale": true,
    "freeShipping": true,
    "description": "Archive의 와이드 코튼 스웨트 팬츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1721637286605-ae9be19d681f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1721637222188-fa7bf56ceaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBqZWFucyUyMHBhbnRzJTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "8",
    "brand": "Vanguard",
    "name": "울 발마칸 코트",
    "category": "아우터",
    "subcategory": "코트",
    "price": 110000,
    "salePrice": 110000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1765207885441-6a31cf94cca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1670421102344-c19b30c471f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Olive",
      "Gray"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.6,
    "reviewCount": 496,
    "likeCount": 2429,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Vanguard의 울 발마칸 코트입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1671826911688-55736aec0dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1609089985901-cb7b5193288a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBjb2F0JTIwamFja2V0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "9",
    "brand": "Minimalist",
    "name": "오버사이즈 덕다운 트렌치 코트",
    "category": "아우터",
    "subcategory": "코트",
    "price": 130000,
    "salePrice": 130000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1778375306691-ed95a3191e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1670421102344-c19b30c471f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown",
      "Beige",
      "Olive"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.7,
    "reviewCount": 138,
    "likeCount": 2535,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Minimalist의 오버사이즈 덕다운 트렌치 코트입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1612889002991-fbfaf775d231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1760395451194-1d582052f914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "10",
    "brand": "Maison",
    "name": "코듀라 나일론 더플백",
    "category": "가방",
    "subcategory": "토트백",
    "price": 50000,
    "salePrice": 25000,
    "discount": 50,
    "image": "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Olive"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.5,
    "reviewCount": 500,
    "likeCount": 230,
    "isNew": true,
    "isSale": true,
    "freeShipping": true,
    "description": "Maison의 코듀라 나일론 더플백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1746880223690-359948154c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640901555365-cbbb76b0009b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBiYWclMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "11",
    "brand": "Raw Denim",
    "name": "루즈핏 로고 셔츠",
    "category": "상의",
    "subcategory": "니트/스웨터",
    "price": 55000,
    "salePrice": 49500,
    "discount": 10,
    "image": "https://images.unsplash.com/photo-1562572159-4efc207f5aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1765397256624-596c03f98b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Beige"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.8,
    "reviewCount": 216,
    "likeCount": 310,
    "isNew": true,
    "isSale": true,
    "freeShipping": true,
    "description": "Raw Denim의 루즈핏 로고 셔츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1723826752624-f9af1bf7fd73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1787478086985-6b0c3e060b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjB0b3AlMjBzaGlydCUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "12",
    "brand": "Archive",
    "name": "울 발마칸 바시티 자켓",
    "category": "아우터",
    "subcategory": "코트",
    "price": 110000,
    "salePrice": 99000,
    "discount": 10,
    "image": "https://plus.unsplash.com/premium_photo-1765207885441-6a31cf94cca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1583846552345-d2aa9d764209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Blue",
      "Beige"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.9,
    "reviewCount": 130,
    "likeCount": 779,
    "isNew": false,
    "isSale": true,
    "freeShipping": true,
    "description": "Archive의 울 발마칸 바시티 자켓입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1760395451511-74096b293013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1753730159294-7953bbf9c6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "13",
    "brand": "Studio 4910",
    "name": "생지 데님 코튼 팬츠",
    "category": "하의",
    "subcategory": "코튼팬츠",
    "price": 90000,
    "salePrice": 90000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Blue",
      "Brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.1,
    "reviewCount": 148,
    "likeCount": 4560,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Studio 4910의 생지 데님 코튼 팬츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1721637286605-ae9be19d681f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "14",
    "brand": "Noir",
    "name": "티타늄 무테 선글라스",
    "category": "액세서리",
    "subcategory": "벨트",
    "price": 50000,
    "salePrice": 50000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1652340155004-6d2c829709bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Blue",
      "Brown",
      "Khaki"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 3.7,
    "reviewCount": 306,
    "likeCount": 2000,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Noir의 티타늄 무테 선글라스입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1561060511-78b14b799fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1769116416517-594639a769a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "15",
    "brand": "Basic Standard",
    "name": "스퀘어토 샌들",
    "category": "신발",
    "subcategory": "스니커즈",
    "price": 80000,
    "salePrice": 80000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1665413642308-c5c1ed052d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Brown",
      "Khaki"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4.9,
    "reviewCount": 199,
    "likeCount": 447,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Basic Standard의 스퀘어토 샌들입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1682125167475-694419f57ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1779449605024-36beede81c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "16",
    "brand": "Archive",
    "name": "스트라이프 하프넥 하프집업",
    "category": "상의",
    "subcategory": "니트/스웨터",
    "price": 60000,
    "salePrice": 60000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1689977743847-75edbea25a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1529635457390-aa69ba54d77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.7,
    "reviewCount": 198,
    "likeCount": 2701,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Archive의 스트라이프 하프넥 하프집업입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1723826752624-f9af1bf7fd73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1628318470370-3772c38451a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "17",
    "brand": "Minimalist",
    "name": "레트로 러닝 더비 슈즈",
    "category": "신발",
    "subcategory": "스니커즈",
    "price": 95000,
    "salePrice": 95000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1645106281638-79585657aa4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4.5,
    "reviewCount": 362,
    "likeCount": 36,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Minimalist의 레트로 러닝 더비 슈즈입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1779449605024-36beede81c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "18",
    "brand": "Archive",
    "name": "미니멀 스웨이드 스니커즈",
    "category": "신발",
    "subcategory": "스니커즈",
    "price": 105000,
    "salePrice": 105000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1645106281638-79585657aa4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1682125167475-694419f57ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Gray",
      "Charcoal",
      "Navy",
      "Beige"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 3.9,
    "reviewCount": 164,
    "likeCount": 2728,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Archive의 미니멀 스웨이드 스니커즈입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1542219550-37153d387c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "19",
    "brand": "Basic Standard",
    "name": "오가닉 코튼 하프집업",
    "category": "상의",
    "subcategory": "맨투맨/후디",
    "price": 40000,
    "salePrice": 40000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1689977743847-75edbea25a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1529635457390-aa69ba54d77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Khaki",
      "Gray",
      "Charcoal"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.8,
    "reviewCount": 197,
    "likeCount": 393,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Basic Standard의 오가닉 코튼 하프집업입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770734982651-5a6d7854aa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1670044658549-0f513915e2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "20",
    "brand": "Archive",
    "name": "크롭 숏 니트",
    "category": "상의",
    "subcategory": "티셔츠",
    "price": 75000,
    "salePrice": 75000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1689977743847-75edbea25a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1529635457390-aa69ba54d77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "White",
      "Charcoal",
      "Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.2,
    "reviewCount": 291,
    "likeCount": 4810,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Archive의 크롭 숏 니트입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770734982651-5a6d7854aa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1615206929539-11fda5303654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "21",
    "brand": "Vanguard",
    "name": "니트 비니 안경",
    "category": "액세서리",
    "subcategory": "아이웨어",
    "price": 40000,
    "salePrice": 32000,
    "discount": 20,
    "image": "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1631832725617-d28dbbb3a29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Navy",
      "Khaki",
      "Beige",
      "Gray"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.1,
    "reviewCount": 516,
    "likeCount": 4946,
    "isNew": false,
    "isSale": true,
    "freeShipping": false,
    "description": "Vanguard의 니트 비니 안경입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1666800715562-a7859650f782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "22",
    "brand": "Vanguard",
    "name": "워싱 코튼 안경",
    "category": "액세서리",
    "subcategory": "주얼리",
    "price": 35000,
    "salePrice": 35000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1652340155004-6d2c829709bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Khaki",
      "Charcoal"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.6,
    "reviewCount": 685,
    "likeCount": 3058,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Vanguard의 워싱 코튼 안경입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1668365179846-3333fe14f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1631832725617-d28dbbb3a29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "23",
    "brand": "Maison",
    "name": "미니멀 싱글 자켓",
    "category": "아우터",
    "subcategory": "가디건",
    "price": 95000,
    "salePrice": 95000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1765207885441-6a31cf94cca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1670421102344-c19b30c471f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4,
    "reviewCount": 776,
    "likeCount": 570,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Maison의 미니멀 싱글 자켓입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1671826911688-55736aec0dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1582462217482-ebebab635b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "24",
    "brand": "Minimalist",
    "name": "에센셜 코튼 셔츠",
    "category": "상의",
    "subcategory": "티셔츠",
    "price": 30000,
    "salePrice": 30000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1760551600855-cbd4fd31d278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Black",
      "Beige",
      "Olive"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.5,
    "reviewCount": 573,
    "likeCount": 1125,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Minimalist의 에센셜 코튼 셔츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770734982651-5a6d7854aa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1652179742793-02d9c2ccd06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "25",
    "brand": "Slow Steady",
    "name": "레귤러핏 원워시 데님 팬츠",
    "category": "하의",
    "subcategory": "데님",
    "price": 50000,
    "salePrice": 50000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.9,
    "reviewCount": 306,
    "likeCount": 3395,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Slow Steady의 레귤러핏 원워시 데님 팬츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715758890151-2c15d5d482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "26",
    "brand": "Raw Denim",
    "name": "미니멀 스웨이드 샌들",
    "category": "신발",
    "subcategory": "샌들",
    "price": 110000,
    "salePrice": 110000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1645106281638-79585657aa4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Navy",
      "Brown"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4,
    "reviewCount": 281,
    "likeCount": 3045,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Raw Denim의 미니멀 스웨이드 샌들입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1682125167475-694419f57ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "27",
    "brand": "Minimalist",
    "name": "프리미엄 캔버스 토트백",
    "category": "가방",
    "subcategory": "토트백",
    "price": 50000,
    "salePrice": 50000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Beige",
      "Navy",
      "Gray",
      "Black"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 5,
    "reviewCount": 288,
    "likeCount": 199,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Minimalist의 프리미엄 캔버스 토트백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1600857125164-499a823272b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1724862979245-71e659b98366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "28",
    "brand": "Raw Denim",
    "name": "캔버스 하이 스니커즈",
    "category": "신발",
    "subcategory": "부츠",
    "price": 115000,
    "salePrice": 115000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Beige",
      "Brown",
      "Olive",
      "Navy"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 3.7,
    "reviewCount": 568,
    "likeCount": 682,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Raw Denim의 캔버스 하이 스니커즈입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1682125167475-694419f57ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "29",
    "brand": "Archive",
    "name": "루즈핏 로고 하프집업",
    "category": "상의",
    "subcategory": "니트/스웨터",
    "price": 30000,
    "salePrice": 30000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1765397256624-596c03f98b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Olive",
      "White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.8,
    "reviewCount": 154,
    "likeCount": 4602,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Archive의 루즈핏 로고 하프집업입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1769201913965-648c78dfd899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1615206929539-11fda5303654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "30",
    "brand": "Basic Standard",
    "name": "리사이클 폴리 메신저백",
    "category": "가방",
    "subcategory": "토트백",
    "price": 90000,
    "salePrice": 90000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Olive"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 5,
    "reviewCount": 400,
    "likeCount": 3979,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Basic Standard의 리사이클 폴리 메신저백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1585298964631-36fd7f7abd94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "31",
    "brand": "Noir",
    "name": "미니멀 스웨이드 스니커즈",
    "category": "신발",
    "subcategory": "부츠",
    "price": 80000,
    "salePrice": 80000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1645106281638-79585657aa4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1615440321519-dda3d4b5ccab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4.5,
    "reviewCount": 634,
    "likeCount": 4799,
    "isNew": true,
    "isSale": false,
    "freeShipping": false,
    "description": "Noir의 미니멀 스웨이드 스니커즈입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1788029011405-b7e732ed6b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBzbmVha2VycyUyMHNob2VzJTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "32",
    "brand": "Minimalist",
    "name": "스퀘어토 첼시 부츠",
    "category": "신발",
    "subcategory": "부츠",
    "price": 90000,
    "salePrice": 90000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1645106281638-79585657aa4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1628012129394-04246f369582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown",
      "Blue",
      "Khaki"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4,
    "reviewCount": 569,
    "likeCount": 941,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Minimalist의 스퀘어토 첼시 부츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1788029011405-b7e732ed6b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBzbmVha2VycyUyMHNob2VzJTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "33",
    "brand": "Urban Code",
    "name": "캔버스 하이 트레킹화",
    "category": "신발",
    "subcategory": "샌들",
    "price": 75000,
    "salePrice": 75000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1641997465126-c73cc4070337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1615440321519-dda3d4b5ccab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Gray",
      "Charcoal",
      "Navy",
      "Beige"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 4.9,
    "reviewCount": 234,
    "likeCount": 2583,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Urban Code의 캔버스 하이 트레킹화입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1682125167475-694419f57ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1631542156377-473540702434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "34",
    "brand": "Raw Denim",
    "name": "나일론 윈드브레이커 패딩",
    "category": "아우터",
    "subcategory": "코트",
    "price": 135000,
    "salePrice": 94500,
    "discount": 30,
    "image": "https://plus.unsplash.com/premium_photo-1765207885441-6a31cf94cca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1787075042047-64dbc5a04509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Beige"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.6,
    "reviewCount": 140,
    "likeCount": 3554,
    "isNew": false,
    "isSale": true,
    "freeShipping": false,
    "description": "Raw Denim의 나일론 윈드브레이커 패딩입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770739886778-ab36c4b55dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1582462217482-ebebab635b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "35",
    "brand": "Slow Steady",
    "name": "투턱 릴렉스드 조거 팬츠",
    "category": "하의",
    "subcategory": "쇼츠",
    "price": 50000,
    "salePrice": 25000,
    "discount": 50,
    "image": "https://images.unsplash.com/photo-1721637286605-ae9be19d681f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Gray"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.7,
    "reviewCount": 23,
    "likeCount": 896,
    "isNew": true,
    "isSale": true,
    "freeShipping": true,
    "description": "Slow Steady의 투턱 릴렉스드 조거 팬츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715758890151-2c15d5d482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "36",
    "brand": "Slow Steady",
    "name": "오버사이즈 호보 백팩",
    "category": "가방",
    "subcategory": "백팩",
    "price": 90000,
    "salePrice": 81000,
    "discount": 10,
    "image": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.2,
    "reviewCount": 332,
    "likeCount": 3379,
    "isNew": false,
    "isSale": true,
    "freeShipping": false,
    "description": "Slow Steady의 오버사이즈 호보 백팩입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1678739395216-d828e97b499a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1585298964631-36fd7f7abd94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "37",
    "brand": "Studio 4910",
    "name": "비건 레더 가디건",
    "category": "아우터",
    "subcategory": "코트",
    "price": 95000,
    "salePrice": 57000,
    "discount": 40,
    "image": "https://plus.unsplash.com/premium_photo-1765207885441-6a31cf94cca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1715536369840-9e314f847d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Khaki"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4,
    "reviewCount": 692,
    "likeCount": 1134,
    "isNew": true,
    "isSale": true,
    "freeShipping": true,
    "description": "Studio 4910의 비건 레더 가디건입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1760395451511-74096b293013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1582462217482-ebebab635b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "38",
    "brand": "Blue Label",
    "name": "로고 자수 반지",
    "category": "액세서리",
    "subcategory": "아이웨어",
    "price": 55000,
    "salePrice": 55000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1631832725617-d28dbbb3a29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "White",
      "Navy"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 5,
    "reviewCount": 347,
    "likeCount": 3691,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Blue Label의 로고 자수 반지입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1668365179846-3333fe14f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1708958142067-f52023835f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "39",
    "brand": "Vanguard",
    "name": "빈티지 피그먼트 롱슬리브",
    "category": "상의",
    "subcategory": "니트/스웨터",
    "price": 50000,
    "salePrice": 30000,
    "discount": 40,
    "image": "https://images.unsplash.com/photo-1562572159-4efc207f5aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1529635457390-aa69ba54d77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.6,
    "reviewCount": 708,
    "likeCount": 1297,
    "isNew": true,
    "isSale": true,
    "freeShipping": false,
    "description": "Vanguard의 빈티지 피그먼트 롱슬리브입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1723826752624-f9af1bf7fd73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1628318470370-3772c38451a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "40",
    "brand": "Slow Steady",
    "name": "투턱 릴렉스드 카고 팬츠",
    "category": "하의",
    "subcategory": "쇼츠",
    "price": 40000,
    "salePrice": 20000,
    "discount": 50,
    "image": "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHN8ZW58MHx8fHwxNzkwODQ0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "Gray",
      "Brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.3,
    "reviewCount": 617,
    "likeCount": 1300,
    "isNew": true,
    "isSale": true,
    "freeShipping": false,
    "description": "Slow Steady의 투턱 릴렉스드 카고 팬츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGplYW5zJTIwcGFudHMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "41",
    "brand": "Raw Denim",
    "name": "나일론 스트링 더플백",
    "category": "가방",
    "subcategory": "백팩",
    "price": 100000,
    "salePrice": 100000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown",
      "Gray"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.8,
    "reviewCount": 592,
    "likeCount": 2074,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Raw Denim의 나일론 스트링 더플백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640901555365-cbbb76b0009b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBiYWclMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "42",
    "brand": "Minimalist",
    "name": "릴렉스드 티셔츠",
    "category": "상의",
    "subcategory": "맨투맨/후디",
    "price": 40000,
    "salePrice": 40000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1589810635657-232948472d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1529635457390-aa69ba54d77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Beige"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.7,
    "reviewCount": 214,
    "likeCount": 2886,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Minimalist의 릴렉스드 티셔츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770734982651-5a6d7854aa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1670044658549-0f513915e2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "43",
    "brand": "Minimalist",
    "name": "경량 메쉬 스니커즈",
    "category": "신발",
    "subcategory": "스니커즈",
    "price": 100000,
    "salePrice": 100000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1641997465126-c73cc4070337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8fHwxNzkwODQ0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown",
      "White",
      "Beige"
    ],
    "sizes": [
      "230",
      "240",
      "250",
      "260",
      "270",
      "280"
    ],
    "rating": 3.8,
    "reviewCount": 460,
    "likeCount": 2905,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Minimalist의 경량 메쉬 스니커즈입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1542219550-37153d387c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzJTIwc2hvZXMlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "44",
    "brand": "Urban Code",
    "name": "프리미엄 캐시미어 티셔츠",
    "category": "상의",
    "subcategory": "니트/스웨터",
    "price": 80000,
    "salePrice": 80000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1760551600855-cbd4fd31d278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.1,
    "reviewCount": 650,
    "likeCount": 4724,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Urban Code의 프리미엄 캐시미어 티셔츠입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770734982651-5a6d7854aa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1787478086985-6b0c3e060b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjB0b3AlMjBzaGlydCUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "45",
    "brand": "Blue Label",
    "name": "나일론 스트링 메신저백",
    "category": "가방",
    "subcategory": "토트백",
    "price": 85000,
    "salePrice": 85000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Beige",
      "White",
      "Navy"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.5,
    "reviewCount": 786,
    "likeCount": 850,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Blue Label의 나일론 스트링 메신저백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1640901555365-cbbb76b0009b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBiYWclMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "46",
    "brand": "Maison",
    "name": "리사이클 폴리 더플백",
    "category": "가방",
    "subcategory": "메신저백",
    "price": 95000,
    "salePrice": 95000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGJhZ3xlbnwwfHx8fDE3OTA4NDQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Gray",
      "Brown"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.9,
    "reviewCount": 84,
    "likeCount": 1438,
    "isNew": true,
    "isSale": false,
    "freeShipping": true,
    "description": "Maison의 리사이클 폴리 더플백입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1759432614301-b75386875a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1585298964631-36fd7f7abd94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGJhZyUyMGRldGFpbHxlbnwwfHx8fDE3OTA4NDc0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "47",
    "brand": "Basic Standard",
    "name": "나일론 윈드브레이커 블루종",
    "category": "아우터",
    "subcategory": "패딩",
    "price": 80000,
    "salePrice": 80000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1730727675716-75a6054266be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1670421102344-c19b30c471f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Black",
      "Blue",
      "Gray",
      "Navy"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.7,
    "reviewCount": 351,
    "likeCount": 4747,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Basic Standard의 나일론 윈드브레이커 블루종입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1671826911688-55736aec0dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1753730159294-7953bbf9c6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "48",
    "brand": "Blue Label",
    "name": "루즈핏 로고 롱슬리브",
    "category": "상의",
    "subcategory": "니트/스웨터",
    "price": 70000,
    "salePrice": 70000,
    "discount": 0,
    "image": "https://images.unsplash.com/photo-1562572159-4efc207f5aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1765397256624-596c03f98b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0fGVufDB8fHx8MTc5MDg0NDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Gray"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 4.4,
    "reviewCount": 566,
    "likeCount": 4061,
    "isNew": false,
    "isSale": false,
    "freeShipping": true,
    "description": "Blue Label의 루즈핏 로고 롱슬리브입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1770734982651-5a6d7854aa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://plus.unsplash.com/premium_photo-1670044658549-0f513915e2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8ZmFzaGlvbiUyMHRvcCUyMHNoaXJ0JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "49",
    "brand": "Unic",
    "name": "플리스 버튼업 코트",
    "category": "아우터",
    "subcategory": "패딩",
    "price": 90000,
    "salePrice": 90000,
    "discount": 0,
    "image": "https://plus.unsplash.com/premium_photo-1765207885441-6a31cf94cca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://plus.unsplash.com/premium_photo-1787075042047-64dbc5a04509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBtZW4lMjB3b21lbnxlbnwwfHx8fDE3OTA4NDQzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Navy",
      "Brown",
      "White",
      "Khaki"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "rating": 3.8,
    "reviewCount": 331,
    "likeCount": 2819,
    "isNew": false,
    "isSale": false,
    "freeShipping": false,
    "description": "Unic의 플리스 버튼업 코트입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://images.unsplash.com/photo-1612889002991-fbfaf775d231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1582462217482-ebebab635b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZmFzaGlvbiUyMGNvYXQlMjBqYWNrZXQlMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    "id": "50",
    "brand": "Blue Label",
    "name": "티타늄 무테 안경",
    "category": "액세서리",
    "subcategory": "벨트",
    "price": 60000,
    "salePrice": 42000,
    "discount": 30,
    "image": "https://images.unsplash.com/photo-1660860547079-fd4845880af9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "hoverImage": "https://images.unsplash.com/photo-1561060511-78b14b799fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzkwODQ0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "colors": [
      "Charcoal",
      "White",
      "Gray"
    ],
    "sizes": [
      "FREE"
    ],
    "rating": 4.1,
    "reviewCount": 274,
    "likeCount": 3884,
    "isNew": false,
    "isSale": true,
    "freeShipping": false,
    "description": "Blue Label의 티타늄 무테 안경입니다. 미니멀한 디자인과 우수한 품질이 특징이며 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    "detailImages": [
      "https://plus.unsplash.com/premium_photo-1708958117373-5d354f07a61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8ZmFzaGlvbiUyMGpld2VscnklMjBhY2Nlc3NvcnklMjBkZXRhaWx8ZW58MHx8fHwxNzkwODQ3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1766560361090-631fc8294b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGZhc2hpb24lMjBqZXdlbHJ5JTIwYWNjZXNzb3J5JTIwZGV0YWlsfGVufDB8fHx8MTc5MDg0NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  }
];
