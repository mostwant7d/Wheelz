export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  image: string;
  gallery: string[];
  price: number;
  description: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
    drivetrain: string;
    fuelType: string;
    fuelConsumption: string;
  };
  available: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: "bmw-m5-competition",
    brand: "BMW",
    model: "M5 Competition",
    year: 2023,
    category: "sport",
    image: "https://optim.tildacdn.com/tild3466-6263-4531-b330-653639626335/-/format/webp/57367346.jpg.webp",
    gallery: [
      "https://optim.tildacdn.com/tild3466-6263-4531-b330-653639626335/-/format/webp/57367346.jpg.webp",
      "https://optim.tildacdn.com/tild3334-3364-4734-a435-396532383864/-/contain/610x915/center/center/-/format/webp/10429357.jpg.webp",
      "https://optim.tildacdn.com/tild3439-6664-4634-a363-666632316536/-/format/webp/15089191.jpg.webp",
      "https://optim.tildacdn.com/tild6331-3937-4439-b535-356461666439/-/contain/610x915/center/center/-/format/webp/44569501.jpg.webp"
    ],
    price: 42000,
    description: "BMW M5 Competition — это высокопроизводительный спортивный седан, сочетающий роскошь, технологии и невероятную динамику. Мощный двигатель, полный привод M xDrive и агрессивный дизайн делают этот автомобиль идеальным для ценителей скорости и комфорта.",
    features: [
      "Система полного привода M xDrive",
      "Адаптивная подвеска M",
      "Аудиосистема Bowers & Wilkins",
      "Массажные сиденья",
      "Карбон-керамические тормоза",
      "Пакет Competition"
    ],
    specifications: {
      engine: "4.4L V8 Twin-Turbo",
      power: "625 л.с.",
      acceleration: "3.3 сек до 100 км/ч",
      topSpeed: "305 км/ч",
      transmission: "8-ступенчатый автомат",
      drivetrain: "Полный привод M xDrive",
      fuelType: "Бензин",
      fuelConsumption: "10.6 л/100 км"
    },
    available: true
  },
  {
    id: "bmw-540i-black",
    brand: "BMW",
    model: "540i Black",
    year: 2023,
    category: "luxury",
    image: "https://optim.tildacdn.com/tild3135-3534-4935-b466-656663636538/-/format/webp/11221430-min.jpg.webp",
    gallery: [
      "https://optim.tildacdn.com/tild3135-3534-4935-b466-656663636538/-/format/webp/11221430-min.jpg.webp",
      "https://optim.tildacdn.com/tild6137-3361-4233-b861-636631646139/-/format/webp/IMG_1685-min.JPG.webp",
      "https://optim.tildacdn.com/tild3561-3935-4662-b539-386232303266/-/format/webp/IMG_1690-min.JPG.webp",
      "https://optim.tildacdn.com/tild6232-6565-4265-b931-383930326566/-/format/webp/IMG_1689-min.JPG.webp",
      "https://optim.tildacdn.com/tild3537-3233-4238-b234-303363363334/-/format/webp/IMG_1688-min.JPG.webp",
      "https://optim.tildacdn.com/tild3263-6630-4664-b533-303763373730/-/format/webp/IMG_1691-min.JPG.webp",
      "https://optim.tildacdn.com/tild3466-6461-4638-a533-313863623339/-/format/webp/IMG_1683-min.JPG.webp",
      "https://optim.tildacdn.com/tild3132-6663-4431-b138-303939306438/-/format/webp/IMG_1687-min.JPG.webp",
      "https://optim.tildacdn.com/tild3961-3931-4131-b634-656133646664/-/contain/610x915/center/center/-/format/webp/IMG_1684-min.JPG.webp",
      "https://optim.tildacdn.com/tild3234-3062-4461-b131-313236646630/-/contain/610x915/center/center/-/format/webp/IMG_1686-min.JPG.webp",
      "https://optim.tildacdn.com/tild6232-3530-4436-b839-313830613430/-/format/webp/IMG_1682-min.JPG.webp"
    ],
    price: 25000,
    description: "Аренда BMW 540i Black — это сочетание элегантности, мощности и современных технологий. Черный BMW 540i выделяется своим агрессивным стилем, комфортом и динамикой, идеально подходит для деловых поездок и особых случаев.",
    features: [
      "Полноприводная система xDrive",
      "Премиальная аудиосистема Harman/Kardon",
      "Панорамная крыша",
      "Кожаный салон",
      "Адаптивный круиз-контроль",
      "Система кругового обзора"
    ],
    specifications: {
      engine: "3.0L I6 TwinPower Turbo",
      power: "340 л.с.",
      acceleration: "4.8 сек до 100 км/ч",
      topSpeed: "250 км/ч (ограничено)",
      transmission: "8-ступенчатый автомат",
      drivetrain: "Полный привод xDrive",
      fuelType: "Бензин",
      fuelConsumption: "7.5 л/100 км"
    },
    available: true
  },
  {
    id: "mercedes-g63-amg",
    brand: "Mercedes-Benz",
    model: "G63 AMG",
    year: 2023,
    category: "suv",
    image: "https://optim.tildacdn.com/tild3833-6263-4162-b534-333265313362/-/format/webp/96981599.jpg.webp",
    gallery: [
      "https://optim.tildacdn.com/tild3833-6263-4162-b534-333265313362/-/format/webp/96981599.jpg.webp",
      "https://optim.tildacdn.com/tild3038-3639-4163-b833-616465306466/-/contain/610x915/center/center/-/format/webp/95046379.jpg.webp",
      "https://optim.tildacdn.com/tild6432-3234-4632-a335-613861643862/-/format/webp/37448044.jpg.webp",
      "https://optim.tildacdn.com/tild6437-6438-4933-b331-633730303232/-/contain/610x915/center/center/-/format/webp/47723497.jpg.webp"
    ],
    price: 60000,
    description: "Mercedes Benz G63 AMG — легендарный внедорожник с мощным двигателем, роскошным интерьером и выдающейся проходимостью. Идеален для города и бездорожья, сочетает в себе статус, комфорт и динамику.",
    features: [
      "Полный привод 4MATIC",
      "Пневмоподвеска",
      "Аудиосистема Burmester",
      "Премиальная кожа Nappa",
      "Пакет AMG Night",
      "Система кругового обзора"
    ],
    specifications: {
      engine: "4.0L V8 Biturbo",
      power: "585 л.с.",
      acceleration: "4.5 сек до 100 км/ч",
      topSpeed: "220 км/ч (ограничено)",
      transmission: "9-ступенчатый автомат",
      drivetrain: "Полный привод 4MATIC",
      fuelType: "Бензин",
      fuelConsumption: "13.1 л/100 км"
    },
    available: true
  },
  {
    id: "rolls-royce-ghost",
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2023,
    category: "luxury",
    image: "https://optim.tildacdn.com/tild6335-6137-4030-a531-653335356336/-/format/webp/94912110.jpg.webp",
    gallery: [
      "https://optim.tildacdn.com/tild6335-6137-4030-a531-653335356336/-/format/webp/94912110.jpg.webp",
      "https://optim.tildacdn.com/tild3334-3136-4235-b538-613861396466/-/contain/610x915/center/center/-/format/webp/82626850.jpg.webp",
      "https://optim.tildacdn.com/tild3737-3430-4239-a565-353063356637/-/contain/610x915/center/center/-/format/webp/84655245.jpg.webp",
      "https://optim.tildacdn.com/tild3136-3865-4465-b137-363339373430/-/contain/610x915/center/center/-/format/webp/19645793.jpg.webp",
      "https://optim.tildacdn.com/tild6534-3932-4062-a638-316632316537/-/contain/610x915/center/center/-/format/webp/21819958.jpg.webp",
      "https://optim.tildacdn.com/tild6562-3465-4161-b334-333265303238/-/contain/610x915/center/center/-/format/webp/97735398.jpg.webp",
      "https://optim.tildacdn.com/tild6135-3838-4764-a234-373966666237/-/contain/610x915/center/center/-/format/webp/84792665.jpg.webp",
      "https://optim.tildacdn.com/tild3131-6539-4263-b662-343236333734/-/format/webp/86958995.jpg.webp"
    ],
    price: 85000,
    description: "Rolls-Royce Ghost — это воплощение абсолютной роскоши и комфорта. Легендарный британский автомобиль с безупречным качеством отделки, тишиной в салоне и плавностью хода. Идеальный выбор для тех, кто ценит исключительность и престиж.",
    features: [
      "Полный привод",
      "Пневмоподвеска",
      "Премиальная аудиосистема Bespoke",
      "Кожаный салон премиум-класса",
      "Система кругового обзора",
      "Панорамная крыша"
    ],
    specifications: {
      engine: "6.75L V12 Twin-Turbo",
      power: "571 л.с.",
      acceleration: "4.8 сек до 100 км/ч",
      topSpeed: "250 км/ч (ограничено)",
      transmission: "8-ступенчатый автомат",
      drivetrain: "Полный привод",
      fuelType: "Бензин",
      fuelConsumption: "14.7 л/100 км"
    },
    available: true
  },
  {
    id: "porsche-taycan-turbo",
    brand: "Porsche",
    model: "Taycan Turbo",
    year: 2023,
    category: "sport",
    image: "https://optim.tildacdn.com/tild6666-3662-4166-b238-393338343662/-/format/webp/55859150.jpg.webp",
    gallery: [
      "https://optim.tildacdn.com/tild6666-3662-4166-b238-393338343662/-/format/webp/55859150.jpg.webp",
      "https://optim.tildacdn.com/tild3465-6632-4266-b036-626636306131/-/contain/610x915/center/center/-/format/webp/43120450.jpg.webp",
      "https://optim.tildacdn.com/tild3734-3538-4838-a531-666666623065/-/contain/610x915/center/center/-/format/webp/78415993.jpg.webp",
      "https://optim.tildacdn.com/tild3434-3564-4464-a662-353539643832/-/contain/610x915/center/center/-/format/webp/24562399.jpg.webp"
    ],
    price: 35000,
    description: "Аренда Porsche Taycan Turbo — это электроспорткар нового поколения с мгновенным разгоном, роскошным интерьером и передовыми технологиями. Идеальный выбор для тех, кто ценит экологичность, стиль и динамику.",
    features: [
      "Полный привод",
      "Пневмоподвеска",
      "Премиальная аудиосистема BOSE",
      "Панорамная крыша",
      "Электрический запас хода до 450 км",
      "Система быстрой зарядки"
    ],
    specifications: {
      engine: "Электромотор 625 л.с. (680 л.с. с Overboost)",
      power: "680 л.с.",
      acceleration: "3.2 сек до 100 км/ч",
      topSpeed: "260 км/ч",
      transmission: "2-ступенчатая автоматическая",
      drivetrain: "Полный привод",
      fuelType: "Электро",
      fuelConsumption: "0 л/100 км"
    },
    available: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Александр Петров",
    position: "Генеральный директор",
    comment: "Превосходный сервис! Арендовал Mercedes S-Class на свадьбу дочери. Автомобиль был в идеальном состоянии, сервис на высшем уровне. Буду рекомендовать всем своим коллегам.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    id: 2,
    name: "Екатерина Смирнова",
    position: "Маркетолог",
    comment: "Великолепный опыт аренды Ferrari Roma. Автомобиль превзошел все мои ожидания. Персонал очень вежливый и профессиональный. Обязательно вернусь снова!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    id: 3,
    name: "Дмитрий Иванов",
    position: "Предприниматель",
    comment: "Регулярно арендую автомобили для деловых поездок. Премиум Авто - лучший сервис в Москве. Большой выбор автомобилей, отличное состояние и конкурентные цены.",
    rating: 4,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];

export const services = [
  {
    id: 1,
    title: "Аренда с водителем",
    description: "Профессиональные водители с многолетним опытом вождения премиальных автомобилей. Идеально для деловых встреч, свадеб и особых случаев.",
    icon: "chauffeur"
  },
  {
    id: 2,
    title: "Долгосрочная аренда",
    description: "Специальные условия при аренде автомобиля на срок от одного месяца. Выгодные тарифы и индивидуальный подход к каждому клиенту.",
    icon: "calendar"
  },
  {
    id: 3,
    title: "VIP-обслуживание",
    description: "Персонализированный сервис для самых требовательных клиентов. Доставка автомобиля в любую точку города, круглосуточная поддержка и индивидуальные условия.",
    icon: "star"
  },
  {
    id: 4,
    title: "Трансфер в аэропорт",
    description: "Встреча и проводы в аэропорт на премиальном автомобиле. Комфорт, пунктуальность и безопасность гарантированы.",
    icon: "plane"
  }
];