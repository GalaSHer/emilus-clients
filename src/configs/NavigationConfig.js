import { 
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'основные',
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-catalog-products',
          path: `${APP_PREFIX_PATH}/main/catalog/products`,
          title: 'Товары',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [{
        key: 'main-clients-list',
        path: `${APP_PREFIX_PATH}/main/clients/list`,
        title: 'Список клиентов',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-clients-groups',
        path: `${APP_PREFIX_PATH}/main/clients/groups`,
        title: 'Группы клиентов',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
    ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promo',
      path: `${APP_PREFIX_PATH}/main/promo`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offline',
      path: `${APP_PREFIX_PATH}/main/offline`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-offline-adresses',
          path: `${APP_PREFIX_PATH}/main/offline/adresses`,
          title: 'Адреса',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-offline-geozones',
          path: `${APP_PREFIX_PATH}/main/offline/geozones`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-staff',
      path: `${APP_PREFIX_PATH}/main/staff`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mails',
      path: `${APP_PREFIX_PATH}/main/mails`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]


const systemBoardNavTree = [{
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'Системные',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-mopileApp',
        path: `${APP_PREFIX_PATH}/system/mobileapp`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
  ]
  


const navigationConfig = [
  ...mainNavTree,
  ...systemBoardNavTree
]

export default navigationConfig;
