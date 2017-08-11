'use strict';

/**
 * @ngdoc overview
 * @name marniEngineeringApp
 * @description
 * # marniEngineeringApp
 *
 * Main module of the application.
 */
var marniEngineeringApp = angular.module('marniEngineeringApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'ngSanitize', 'ngTouch', 'angular-nicescroll', 'angular-fotorama']);

marniEngineeringApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $urlRouterProvider.otherwise('/about');

  $stateProvider
    .state('about', {
      url: '/about',
      views: {
        '': { templateUrl: 'views/about.html' }
      }
    })
    .state('products', {
      url: '/products',
      views: {
        '': { templateUrl: 'views/products.html' }
      }
    })
    .state('partners', {
      url: '/partners',
      views: {
        '': { templateUrl: 'views/partners.html' }
      }
    })
    .state('services', {
      url: '/services',
      views: {
        '': { templateUrl: 'views/services.html' }
      }
    })
    .state('contacts', {
      url: '/contacts',
      views: {
        '': { templateUrl: 'views/contacts.html' }
      }
    });

  $translateProvider
    .translations('en', {
      ABOUT: 'About',
      MESSAGE: 'This website supports your language',
      PRODUCT: 'Products',
      PARTNERS_TITLE: 'Partners',
      SERVICE: 'Services',
      CONTACT: 'Contacts',
      ABOUT_HISTORY: 'The company was established in 2000. Started its operation with manufacturing of electronic MB-series devices, used for emergency stop of asynchronous motors.',
      ABOUT_TEAM_1: 'Екипът на фирмата се състои от квалифицирани електроинжинери с над дългогодишен опит в проектирането и изработката на металорежещи машини с ЦПУ.',
      ABOUT_TEAM_1: 'The team consists of highly qualified electrical engineers with many years of experience in designing and manufacturing of metal cuttin machines using lathes.',
      ABOUT_TEAM_2: 'Team members have master degree in electrical engineering with over 20 years of experience in',
      ABOUT_TEAM_3: 'has specialists in design, manufacture, retrofit and service of metal cutting machines using lathe',
      MASHSTROY: 'MASHSTROY JSC',
      MARNI: 'MARNI Engineering',
      CNC_SYSTEMS_DRIVES: 'CNC systems and drives',
      CNC_SYSTEMS: 'CNC systems',
      DRIVES: 'Drives',
      CONVERTERS: 'Frequency converters',
      ABOUT_FANUC_SUB: '6T, 3T, 0T, 0i-TB, 0i-T, 0iMateTC',
      ABOUT_SIEMENS_SUB: 'SINUMERIK 810 Dsl, SINUMERIK 802 Dsl, SINUMERIK 840 Dsl, SIMODRIVE and SINAMICS',
      ABOUT_HEIDENHAIN_SUB: 'ManualPLUS M, ManualPLUS 4110',
      ABOUT_FAGOR_SUB: '800T, 8010T, 8055T, 8040TC, 8055i/A-TC, DDS, MCP',
      ABOUT_BOSH_SUB: 'CC100, CC120, SERVODYN',
      ABOUT_GRUNDIG_SUB: 'ELTROPILOT - L4',
      ABOUT_LENZE_SUB: '8200 Vector, SMD',
      ABOUT_SCHEIDER_ELECTRIC_SUB: 'ATV11, ATV12, ATV28, ATV312, ATV31, ATV58, ATV71',
      ABOUT_OMRON_SUB: 'V7',
      ABOUT_GENERAL_ELECTRIC_SUB: 'VAT20, VAT200, VAT300, VAT2000',
      ABOUT_CNC_BG_TITLE: 'CNC systems made in Bulgaria',
      ABOUT_CNC_BG: 'CNC systems of ETA - 17, TIKSI 300 Т',
      ABOUT_INFO: 'The company manufactures electronic devices for emergency stop of asynchronous motors with nominal supply up to 3x415V and nominal power - up to 22kW.',
      SERVICES_INFO_1: 'Design and manufacture of electronic boards, using systems elemenets created by General Electric, Schneider Electric, Phoenix Contact, Weidmuller, Siemens and others',
      SERVICES_INFO_2: 'Service, complex subscription service, upgrading, automation of machinery and equipment.',
      SERVICES_INFO_3: 'Delivery equipment, switches, sensors, cables, instruments from European manufacturers such as: General Electric power protection, Pizzato, Phoenix Contact, Lapp Kabel, Circutor, Klauke, Merz, PCE and others. The company offers everything needed for power distribution and automation.',
      SERVICES_INFO_LABEL_1: 'Design and manufacture',
      SERVICES_INFO_LABEL_2: 'Repair',
      SERVICES_INFO_LABEL_3: 'Delivery',
      CONTACTS_INFO_1: 'Contact us',
      CONTACTS_INFO_2: '????????????????????',
      CONTACTS_NAME: 'Marni-Mariela Naydenova ЕТ',
      CONTACTS_ADDRESS_TITLE: 'Address',
      CONTACTS_ADDRESS: 'Troyan, 5 Angel Balevski str.',
      CONTACTS_PHONE_TITLE: 'Phones',
      CONTACTS_PHONE_STATIOARY: 'Stationary',
      PARTNERS: 'Our Partners',
      PRODUCT_CONTENT: 'Emergency electro-dynamic stop MB',
      FAGOR_REP: 'Authorized representative of'
    })
    .translations('bg', {
      ABOUT: 'За нас',
      MESSAGE: 'Този сайт поддържа вашия език',
      PRODUCT: 'Продукти',
      PRODUCT_STOP: 'Спирачки',
      PARTNERS_TITLE: 'Партньори',
      SERVICE: 'Услуги',
      CONTACT: 'Контакти',
      ABOUT_HISTORY: 'Фирмата е създадена през 2000г. Стартира дейността си с изработката на електронни устройства MB-серия за аварийно eлектродинамично спиране на асинхронни двигатели.',
      ABOUT_TEAM_1: 'Екипът на фирмата се състои от квалифицирани електроинжинери с дългогодишен опит в проектирането и изработката на металорежещи машини с ЦПУ.',
      ABOUT_TEAM_2: 'Членовете на екипа имат магистърска степен в електроинженерството с над 20-годишна практика в',
      ABOUT_TEAM_3: 'разполага със специалисти в проектирането, изработката, ретрофита и сервиза на металорежещи машини с ЦПУ',
      MASHSTROY: 'МАШСТРОЙ АД',
      MARNI: 'МАРНИ Инженеринг',
      CNC_SYSTEMS_DRIVES: 'CNC системи и задвижвания',
      CNC_SYSTEMS: 'CNC системи',
      DRIVES: 'Задвижвания',
      CONVERTERS: 'Честотни преобразуватели',
      ABOUT_FANUC_SUB: '6T, 3T, 0T, 0i-TB, 0i-T, 0iMateTC',
      ABOUT_SIEMENS_SUB: 'SINUMERIK 810 Dsl, SINUMERIK 802 Dsl, SINUMERIK 840 Dsl, SIMODRIVE и SINAMICS',
      ABOUT_HEIDENHAIN_SUB: 'ManualPLUS M, ManualPLUS 4110',
      ABOUT_FAGOR_SUB: '800T, 8010T, 8055T, 8040TC, 8055i/A-TC, DDS, MCP',
      ABOUT_BOSH_SUB: 'CC100, CC120, SERVODYN',
      ABOUT_GRUNDIG_SUB: 'ELTROPILOT - L4',
      ABOUT_LENZE_SUB: '8200 Vector, SMD',
      ABOUT_SCHEIDER_ELECTRIC_SUB: 'ATV11, ATV12, ATV28, ATV312, ATV31, ATV58, ATV71',
      ABOUT_OMRON_SUB: 'V7',
      ABOUT_GENERAL_ELECTRIC_SUB: 'VAT20, VAT200, VAT300, VAT2000',
      ABOUT_CNC_BG_TITLE: 'CNC системи българско производство',
      ABOUT_CNC_BG: 'Системи на ETA - 17, ТИКСИ 300 Т',
      ABOUT_INFO: 'Фирмата произвежда устройства за аварийно електродинамично спиране на асинхронни двигатели с номинално захранване до 3x415V и номинална мощност - до 22kW.',
      SERVICES_INFO_1: 'Проектиране и изработка на ел.табла, използвайки елементи на фирмите General Electric, Schneider Electric, Phoenix Contact, Weidmuller, Siemens и др.',
      SERVICES_INFO_2: 'Сервиз, комлексно абонаментно обслужване, обновяване, автоматизиране на машини и съоръжения.',
      SERVICES_INFO_3: 'Доставяне апаратура, изключватели, датчици, кабели, инструменти от европейски производители като: General Electric power protection, Pizzato, Phoenix Contact, Lapp Kabel, Circutor, Klauke, Merz, PCE и други. Фирмата предлага всичко необходимо за електроразпределение и автоматизация.',
      SERVICES_INFO_LABEL_1: 'Проектиране и изработка',
      SERVICES_INFO_LABEL_2: 'Сервиз',
      SERVICES_INFO_LABEL_3: 'Доставка',
      CONTACTS_INFO_1: 'Свържете се с нас',
      CONTACTS_INFO_2: '????????????????????',
      CONTACTS_NAME: 'МАРНИ-Мариела Найденова ЕТ',
      CONTACTS_ADDRESS_TITLE: 'Адрес',
      CONTACTS_ADDRESS: 'гр.Троян, ул.Ангел Балевски 5',
      CONTACTS_PHONE_TITLE: 'Телефони',
      CONTACTS_PHONE_STATIOARY: 'Стационарен',
      PARTNERS: 'Нашите партньори',
      PRODUCT_CONTENT: 'Спирачки тип MB',
      PRODUCT_PURPOSE_TITLE: 'Предназначение',
      PRODUCT_PURPOSE_CONTENT: 'Гама устройства за електродинамично спиране на АС двигатели с максимален ток 150A, ' + 'максимално напрежение 440V и време нза работа от 1 до 15 сек.',
      PRODUCT_ACTION_TITLE: 'Принцип на действие',
      PRODUCT_ACTION_CONTENT_1: 'Пропускане на постоянен ток през две от намотките на двигателя по време на единия полупериод на ' + 'захранващото напрежение и свързване накъсо на напотките през другия полупериод. Стойността на тока зависи от положението ' + 'на тримера',
      PRODUCT_ACTION_CONTENT_2: 'и мощността на двигателя. Времето за работа на спирачките се определя от тримера',
      PRODUCT_ACTION_CONTENT_3: 'и може да се настройва в обхват от 1 до 15 секунди /в зависимост от типа спирачка/.',
      PRODUCT_WORK_TITLE: 'Условия за работа',
      PRODUCT_WORK_CONTENT_1: 'При настъпването на аварийно събитие, релейно-контакторната схема трябва да изключи трифазното захранване на двигателя. ' +
        'След това да свърже мотора и захранването с високо напрежение (100-440V) към клеми L,M и LM, а към клеми A1 и A2 да подаде 24V AC за ' +
        'захранване и синхронизация с високото напрежение. Около 100msec. след захранването с 24V спирачката започва да работи. След изтичане на ' +
        'времето, определено с тримера ',
      PRODUCT_WORK_CONTENT_2: ', спирачката рекъсва тока през двигателя, а след още около 100msec. отваря контакта между клеми 11 и 12.',
      PRODUCT_INSTALLATION_TITLE: 'Монтаж',
      PRODUCT_INSTALLATION_CONTENT_1: 'Монтира се върху шина с профил:',
      PRODUCT_CONNECTION_TITLE:'Свързване',
      PRODUCT_TECHNICAL_DATA_TITLE:'Технически данни',
      PRODUCT_TECHNICAL_DATA_CONTENT_1: 'Оперативно напрежение',
      PRODUCT_TECHNICAL_DATA_CONTENT_2:'Изход "край на работа"',
      PRODUCT_TECHNICAL_DATA_CONTENT_3: 'Честота',
      PRODUCT_TECHNICAL_DATA_CONTENT_4:'Монтаж върху шина',
      FAGOR_REP: 'Оторизиран представител на'
    });

  $translateProvider.preferredLanguage('bg');

  $translateProvider.useSanitizeValueStrategy('escaped');
});

marniEngineeringApp.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});
