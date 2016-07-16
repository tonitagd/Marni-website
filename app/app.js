'use strict';

/**
 * @ngdoc overview
 * @name marniEngineeringApp
 * @description
 * # marniEngineeringApp
 *
 * Main module of the application.
 */
var marniEngineeringApp = angular
    .module('marniEngineeringApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'pascalprecht.translate',
        'ngSanitize',
        'ngTouch',
    ]);

marniEngineeringApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/about');

    $stateProvider
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'views/about.html' }
            }
        })
        .state('product', {
            url: '/product',
            views: {
                '': { templateUrl: 'views/product.html' }
            }
        }).state('services', {
            url: '/services',
            views: {
                '': { templateUrl: 'views/services.html' }
            }
        }).state('contacts', {
            url: '/contacts',
            views: {
                '': { templateUrl: 'views/contacts.html' }
            }
        });


    $translateProvider
        .translations('en', {
            ABOUT: 'About',
            MESSAGE: 'This app supports your language!',
            PRODUCT: 'Products',
            SERVICE: 'Services',
            CONTACT: 'Contacts',
            ABOUT_HISTORY: 'The company was established in year 2000. Started its operation with manufacturing of electronic devices, MB-series, used for emergency stop of asynchronous motors.',
            ABOUT_TEAM: 'Company team consists of highly qualified electrical engineers with over 20 years of experience in designing and manufacturing of metal cutting machines using lathes in Mashstroу JSC, modernization and technical services of such и сервиз на такива for more than 20 years:',
            ABOUT_FANUC: 'CNC systems and drives - FANUC 6T, 3T,0T, 0i-TB, 0i-T, 0iMateTC.',
            ABOUT_SIEMENS_1: 'CNC systems - SINUMERIK 810 Dsl - SINUMERIK 802 Dsl, SINUMERIK 840 Dsl',
            ABOUT_SIEMENS_2: 'drives - SIMODRIVE и SINAMICS',
            ABOUT_HEIDENHAIN: 'CNC systems - ManualPLUS M, ManualPLUS 4110',
            ABOUT_FAGOR_1: 'CNC systems - 800T, 8010T, 8055T, 8040TC, 8055i/A-TC',
            ABOUT_FAGOR_2: 'Drives - DDS, MCP',
            ABOUT_BOSH_1: 'CNC systems - CC100, CC120',
            ABOUT_BOSH_2: 'Drives - SERVODYN',
            ABOUT_INDRAMAT: 'Drives',
            ABOUT_GRUNDIG: 'CNC system ELTROPILOT - L4',
            ABOUT_LENZE: 'Frequency converters - 8200 Vector, SMD',
            ABOUT_SCHEIDER_ELECTRIC: 'frequency converters - ATV11, ATV12, ATV28, ATV312, ATV31, ATV58, ATV71',
            ABOUT_OMRON: 'Frequency converters - V7',
            ABOUT_GENERAL_ELECTRIC: 'Frequency converters - VAT20, VAT200, VAT300, VAT2000',
            ABOUT_CNC_BG_TITLE: 'CNC systems made in Bulgaria',
            ABOUT_CNC_BG: 'CNC systems of ETA - 17, TIKSI 300 Т',
            PRODUCT_INFO: ' We manufacture electronic devices for emergency stop of asynchronous motors with nominal supply up to 3x415V and nominal power - up to 22kW.',
            SERVICES_INFO_1: 'Service, Complex subscription service, upgrading, automation of machinery and equipment.',
            SERVICES_INFO_2: 'Design and manufacture of electronic boards, using systems elemenets created by General Electric, Schneider Electric, Phoenix Contact, Weidmuller, Siemens and others',
            SERVICES_INFO_3: 'Delivery equipment, switches, sensors, cables, instruments from European manufacturers such as: General Electric power protection, Pizzato, Phoenix Contact, Lapp Kabel, Circutor, Klauke, Merz, PCE and others. The company offers everything needed for power distribution and automation.',
            CONTACTS_INFO_1: 'Contact us',
            CONTACTS_INFO_2: '???????????????',
            CONTACTS_NAME: 'Marni-Mariela Naydenova ЕТ',
            CONTACTS_ADDRESS_TITLE: 'Address',
            CONTACTS_ADDRESS: 'Troyan, 10 Zahari Stoyanov str.',
            CONTACTS_PHONE_TITLE: 'Phone',
            PARTNERS: 'Our Partners',

        })
        .translations('bg', {
            ABOUT: 'За Нас',
            MESSAGE: 'Този сайт поддържа вашия език',
            PRODUCT: 'Продукти',
            SERVICE: 'Услуги',
            CONTACT: 'Контакти',
            ABOUT_HISTORY: 'Фирмата е създадена през 2000г. Стартира дейността си с изработката на електронни устройства MB-серия за аварийно eлектродинамично спиране на асинхронни двигатели.',
            ABOUT_TEAM: 'Екипът на фирмата се състои от квалифицирани електроинжинери с над 20-годишен опит в проектирането и  изработката на металорежещи машини с ЦПУ (в МАШСТРОЙ АД), ретрофит и сервиз на такива в течение на повече от 20 години:',
            ABOUT_FANUC: 'CNC системи и задвижвания - FANUC 6T, 3T,0T, 0i-TB, 0i-T, 0iMateTC.',
            ABOUT_SIEMENS_1: 'CNC системи - SINUMERIK 810 Dsl - SINUMERIK 802 Dsl, SINUMERIK 840 Dsl',
            ABOUT_SIEMENS_2: 'Задвижвания - SIMODRIVE и SINAMICS',
            ABOUT_HEIDENHAIN: 'CNC системи - ManualPLUS M, ManualPLUS 4110',
            ABOUT_FAGOR_1: 'CNC системи - 800T, 8010T, 8055T, 8040TC, 8055i/A-TC',
            ABOUT_FAGOR_2: 'Задвижвания - DDS, MCP',
            ABOUT_BOSH_1: 'CNC системи - CC100, CC120',
            ABOUT_BOSH_2: 'Задвижвания - SERVODYN',
            ABOUT_INDRAMAT: 'Задвижвания',
            ABOUT_GRUNDIG: 'CNC системa ELTROPILOT - L4',
            ABOUT_LENZE: 'Честотни преобразуватели - 8200 Vector, SMD',
            ABOUT_SCHEIDER_ELECTRIC: 'Честотни преобразуватели - ATV11, ATV12, ATV28, ATV312, ATV31, ATV58, ATV71',
            ABOUT_OMRON: 'Честотни преобразуватели - V7',
            ABOUT_GENERAL_ELECTRIC: 'Честотни преобразуватели - VAT20, VAT200, VAT300, VAT2000',
            ABOUT_CNC_BG_TITLE: 'CNC системи българско производство',
            ABOUT_CNC_BG: 'CNC системи на ETA - 17, ТИКСИ 300 Т',
            PRODUCT_INFO: ' Произвеждаме устройства за аварийно електродинамично спиране на асинхронни двигатели с номинално захранване до 3x415V и номинална мощност - до 22kW.',
            SERVICES_INFO_1: 'Сервиз, комлексно абонаментно обслужване, обновяване, автоматизиране на машини и съоръжения.',
            SERVICES_INFO_2: 'Проектиране и изработка на ел.табла, използвайки елементи на фирмите General Electric, Schneider Electric, Phoenix Contact, Weidmuller, Siemens и др., документация.',
            SERVICES_INFO_3: 'Доставяне апаратура, изключватели, датчици, кабели, инструменти от европейски производители като: General Electric power protection, Pizzato, Phoenix Contact, Lapp Kabel, Circutor, Klauke, Merz, PCE и други. Фирмата предлага всичко необходимо за електроразпределение и автоматизация.',
            CONTACTS_INFO_1: 'Свържете се с нас',
            CONTACTS_INFO_2: '????????????????????',
            CONTACTS_NAME: 'МАРНИ-Мариела Найденова ЕТ',
            CONTACTS_ADDRESS_TITLE: 'Адрес',
            CONTACTS_ADDRESS: 'гр.Троян, ул.Захари Стоянов 10',
            CONTACTS_PHONE_TITLE: 'Телефон',
            PARTNERS: 'Нашите партньори',
        });

    $translateProvider.preferredLanguage('bg');

});

marniEngineeringApp.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});
