import {
	TeamOutlined,
	CalculatorOutlined,
	CarOutlined,
	PieChartOutlined,
	SmileOutlined,
	ClockCircleOutlined,
	GlobalOutlined,
	WalletOutlined,
	HomeOutlined,
	MessageOutlined,
	BarChartOutlined,
	UserOutlined,
	ToolOutlined,
	FullscreenExitOutlined,
	IdcardOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import mebel from '../components/cardComp/img/mebel.webp'
import kvartira from '../components/cardComp/img/kvartira.webp'
import gruz from '../components/cardComp/img/gruz.webp'
import krupnGruz from '../components/cardComp/img/krupn-gruz.webp'
import musor from '../components/cardComp/img/musor.webp'
import { Tooltip, Badge } from 'antd'
import NewAccount from '../components/header/newAccount/NewAccount'
import BtnItemMobil from '../components/header/headerMenu/itemMobil/BtnItemMobil'
import Profil from '../components/header/headerMenu/itemMobil/Profil'
import Uvedomlenia from '../components/header/headerMenu/itemMobil/Uvedomlenia'



export const content = {
	mebel: {
		title: 'Перевозка мебели',
		text: 'Наша компания предоставляет качественные услуги по перевозке мебели различных размеров. Мы гарантируем сохранность груза и своевременную транспортировку. Несмотря на специфичность груза, наши специалисты сделают свою работу максимально качественно. Команда наших специалистов имеет опыт работы на сложных лестничных площадках, опыт работы с габаритной и требующей деликатного обращения мебелью.',
		title2: 'Особенности перевозки мебели',
		title3: 'Перевозка мебели',
		text2: [`Квартирный переезд отличается большим количеством разнородного груза, который нельзя просто положить упаковать в ящики, погрузить в машину и отвезти на новое место. Большинство предметов быта и интерьера, мебели, одежды важно правильно рассортировать и упаковать, чтобы они доехали до точки назначения без повреждений.
		Мебель имеет большие габариты, хрупкую декоративную отделку и выступающие части. Перед упаковкой ее следует разобрать, а ее составные части отметить таким образом, чтобы ничего не потерять и без проблем выполнить сборку на новом месте. Для этого нужен опыт и наличие специальных инструментов.
		Вещи, мебель и бытовую технику следует упаковать так, чтобы ее было удобно грузить и компактно размещать в кузове автомобиля. Также нужно согласование погрузочно-разгрузочных работ, приезда транспорта и ряд других моментов. Любые ошибки в планировании станут причиной лишних финансовых затрат.`],
	},
	kvartira: {
		title: 'Квартирный переезд',
		text: 'Поможем грамотно организовать квартирный переезд под ключ в Минске и по Беларуси и сэкономить ваши время и деньги. Опытные водители, аккуратные грузчики, вежливые менеджеры аккуратно доставят каждую хрупкую вещь. Мы гарантируем грамотную организацию квартирных переездов, оперативность и безопасность транспортировки, а также сохранность груза. С нами сотрудничать выгодно! Звоните нам и заказывайте услуги переезда!',
		title2: 'Особенности квартирных переездов',
		title3: 'Переезд',
		text2: ['Мебель в большинстве случаев имеет не только крупные габариты, но и нестандартную форму. Если ее не разбирать, то для транспортировки нескольких шкафов придется нанимать большую машину или делать несколько рейсов, что невыгодно. Также переносить и грузить неразобранную мебель без повреждений практически невозможно.Поэтому вся мебель должна быть разобрана полностью или частично. Для этого нужно иметь опыт проведения подобных работ и специальный инструмент. Обязательно нужно рассчитать общую массу и объем, чтобы нанять подходящую машину, не переплачивая. Наша компания рекомендует использовать мебельные фургоны от 2 до 5 тонн.При разборе мебели все детали должны быть промаркированы и тщательным образом упакованы. При погрузке в кузов нужно обеспечить условия, при которых в случае тряски предотвращаются повреждения. Также стоит продумать логистику движения по дорогам Минска для оперативности доставки и сохранности груза.'],
	},
	gruz: {
		title: 'Доставка груза',
		text: 'Доставка груза по РБ могут осуществляться по всей стране. Данная услуга доступна и для владельцев малых грузов, и для тех, кому нужно привезти большой груз. Этой услугой можно воспользоваться и частным лицам, и разнообразным организациям. Более того, в нее могут входить услуги грузчиков с целью реализации переезда офиса или переезда в новую квартиру или дом, разгрузки вагонов или фур, а также с целью выбрасывания строительного мусора.',
		title2: 'Особенности доставки груза в Минске и Беларуси',
		title3: 'Доставка',
		text2: ['В нашей компании действуют самые доступные цены на грузоперевозки по Беларуси. У нас трудятся только опытные и квалифицированные грузчики и водители, которые не допускают промахов в работе. Сразу же после погрузки наши машины отправляются в дорогу, а мы осуществляем мониторинг по всему пути их следования.'],
	},
	krupnGruz: {
		title: 'Перевозка крупногабаритных грузов в Минске и Беларуси',
		text: 'Доставка груза по РБ могут осуществляться по всей стране. Данная услуга доступна и для владельцев малых грузов, и для тех, кому нужно привезти большой груз. Этой услугой можно воспользоваться и частным лицам, и разнообразным организациям. Более того, в нее могут входить услуги грузчиков с целью реализации переезда офиса или переезда в новую квартиру или дом, разгрузки вагонов или фур, а также с целью выбрасывания строительного мусора.',
		title2: 'Особенности перевозки крупногабаритных грузов в Минске и Беларуси',
		title3: 'Крупный груз',
		text2: ['В нашей компании действуют самые доступные цены на грузоперевозки по Беларуси. У нас трудятся только опытные и квалифицированные грузчики и водители, которые не допускают промахов в работе. Сразу же после погрузки наши машины отправляются в дорогу, а мы осуществляем мониторинг по всему пути их следования.'],
	},
	uslugi: {
		title: 'ГРУЗОПЕРЕВОЗКИ В МИНСКЕ и по Беларуси',
		text: 'Важную роль играет обеспечение безопасности, так как груз может быть хрупким и ценным. По этим причинам решение таких задач стоит доверять профессионалам. Грамотные специалисты упакуют и тщательно закрепят перевозимые предметы, а опытные водители аккуратно доставят груз «от двери до двери». Доступна данная услуга как частным лицам, так и различным компаниям, организациям.',
		title2: 'От чего зависит стоимость грузоперевозок',
		title3: 'Зависит от',
		text2: [
			'Масса и объем груза, под которые подбирается определенная машина.',
			'Время работы грузового автомобиля.',
			'Технические особенности груза: нестандартные размеры, хрупкость, сроки хранения и т.д.',
			'Расстояние транспортировки с учетом возможности проезда по конкретным типам дорог грузовиками.',
			'Число занятых грузчиков, необходимость подъема на этаж.'
		],
	},
	musor: {
		title: 'Вывозим строительный мусор В Минске',
		text: 'Мы не только вывозим мусор, мы также осуществляем его погрузку. Более того, наша компания поможет убрать и промышленные отходы. Мы всегда стараемся помочь нашим клиентам, ведь чистота и порядок – это главная задача, которую мы всегда рады предоставить для вас!',
		title2: 'От чего зависит стоимость вывоза строительного мусора',
		title3: 'Зависит от',
		text2: [`Цена на вывоз мусора с грузчиками зависит от количества задействованных грузчиков и от объема мусора, который необходимо перевезти. Стоимость указана при вывозе мусора в пределах Минска. Если мусор находится за пределами МКАД.`],
	},
	ceny: {
		title: 'Стоимость гурозоперевозок по Минску и Беларуси',
		text: 'Предлагаем услуги грузоперевозки по Минску с максимальным комфортом для заказчика, высоким качеством и по лучшим ценам.',
		title2: 'От чего зависит стоимость грузоперевозки',
		title3: 'Зависит от',
		text2: [
			'Места отправления и прибытия груза.',
			'Параметры груза (масса и объем).',
			'Числа грузчиков.',
			'Вида груза.',
		]
	},
}

export const user = [
	{
		user: 'Хомичь Надежда Ивановна',
		id: 1,
		nik: 'jaqueline',
		text: 'Перевозили диван в Минске. Вышла на улицу без телефона к указанному времени, прождала 25 минут, сказали, что звонили предупрудить об пробке на дороге.  А так я очень давольна, вежливые и аккуратные сотрудники, еще и по адекватной цене. Рекомендую!',
		date: '2022-06-22 11:22:33'
	},
	{
		user: 'Сацук Сергей',
		id: 2,
		nik: 'jed',
		text: 'Вывозили строительный мусор, не ожидал, что придут со щёткой. В подьезде и лифте осталось чисто и это круто)) ',
		date: '2022-07-12 09:31:33'
	},
	{
		user: 'Лукашевич Петр',
		id: 3,
		nik: 'jai',
		text: 'Отличная компания. Остались очень довольны. Цены средние. В общем всем рекомендую этих ребят!!!',
		date: '2022-07-25 18:01:33'
	},
	{
		user: 'Окуневич Егор',
		id: 4,
		nik: 'jerry',
		text: 'Заказал переезд на другой офис в Минске, позвонил и в этот же день все было перевезено. Спасибо за сервис!',
		date: '2022-08-01 20:11:13'
	},
	{
		user: 'Корачун Настя',
		id: 5,
		nik: 'jodi',
		text: 'Заказала доставку бытовой техники, предлагали в магазине доставку, надо было долго ждать. Узнала от подруги об этой компании, когда заносили немного ударили холодильник (маленькая вмятина), но это я виновата долго решала куда ставить технику. Очень довольна, рекомендую!',
		date: '2022-08-10 21:22:18'
	},
]

export const descriptions = {
	mebel: {
		mass: 1.5,
		mass2: 12,
		price: '17,00',
		km: '0,65',
		gruz: 8,
		time: 2,
		id: 1,
	},
	kvartira: {
		mass: 1.5,
		mass2: 12,
		price: '17,00',
		km: '0,65',
		gruz: 8,
		time: 2,
		id: 2,
	},
	gruz: {
		mass: 1.5,
		mass2: 12,
		price: '17,00',
		km: '0,65',
		gruz: 8,
		time: 2,
		id: 3,
	},
	krupnGruz: {
		mass: 1.5,
		mass2: 12,
		price: '17,00',
		km: '0,65',
		gruz: 8,
		time: 2,
		id: 3,
	},
	musor: {
		mass: 1.5,
		mass2: 12,
		price: '17,00',
		km: '0,65',
		gruz: 8,
		time: 2,
		id: 3,
	},
}

export const dataFooter = [
	{
		id: 1,
		icon: <TeamOutlined />,
		title: 'О компании',
		text: 'Мы молодая амбициозная компания, у нас индивидуальный подход к заказчику, высокая степень ответственности и слаженный коллектив. Для нас важен каждый клиент, положительный отзыв для нас лучшая награда. В основном работаем по Минску и Минской области, развиваем другие регионы Беларуси и РФ.',
		add: '',
	},
	{
		id: 2,
		icon: <CalculatorOutlined />,
		title: 'Оплата',
		text: 'Принимаем наличный и безналичный расчёт. Для безналичного расчёта звоните по телефону +375 29 333-33-33. Расчёт по банковским картам временно не осуществляем, за что дико извиняемся, мы работаем над этим вопросом.',
		add: '',
	},
	{
		id: 3,
		icon: <CarOutlined />,
		title: 'Регионы Беларуси',
		text: 'Мы осуществляем перевозку в любой регион Беларуси. За более подробной информацией обращайтесь к нашему оператару по телефону 375 29 333-33-33.',
		add: '',
	},
	{
		id: 4,
		icon: <PieChartOutlined />,
		title: 'Скидки',
		text: 'Делаем скидки постоянным клиентам, а также на крупные заказы скидка рассматривается индивидуально.',
		add: '',
	},
	{
		id: 5,
		icon: <SmileOutlined />,
		title: 'Акции',
		text: 'Переодически мы проводим акции, узнать о них можно в лично кабинете (для этого необходимо создать аккаунт или подпишиетсь на рассылку, форма ниже.',
		add: '',
	},
	{
		id: 6,
		icon: <ClockCircleOutlined />,
		title: 'Режим работы',
		text: 'Работаем Понедельник-Суббота с 8:00 до 20:00, выходной Воскресение. В праздничные дни работаем, рабочий день может быть короче, за более подробной информацией обращайтесь к нашему оператару по телефону 375 29 333-33-33.',
		add: '',
	},
	{
		id: 7,
		icon: <GlobalOutlined />,
		title: 'РФ',
		text: 'Перевоз грузов в(из) Россию осуществляем, рассматривается индивидуально.',
		add: '',
	},
	{
		id: 8,
		icon: <WalletOutlined />,
		title: 'Цены',
		text: 'Цены Вы можете посмотреть в меню "Цены" или окроется страница просто нажмите на ссылку ->',
		add: <Tooltip title="Цены Вас порадуют! Жмите!" color='orange'><Link to="/ceny" style={{ color: 'orange' }}>Цены</Link></Tooltip>,
	},
	{
		id: 9,
		icon: <FullscreenExitOutlined />,
		title: 'Упаковка груза',
		text: 'При необходимости упаковываем стреч-пленкой, пузырьковой пленкой, скотчем, картон 120*80 см, коробки 40*40*60 см.',
		add: "",
	},
	{
		id: 10,
		icon: <BarChartOutlined />,
		title: 'Рассрочка',
		text: 'Извините, но мы не осуществляем грузоперевозки в рассрочку.',
		add: "",
	},

]

export const card = [
	{
		image: mebel,
		id: 1,
		title: 'Перевозка мебели',
		description: '1 час 17,00р.',
		url: '/uslugi/perevozka-mebeli',

	},
	{
		image: kvartira,
		id: 2,
		title: 'Квартирный переезд',
		description: '1 час 17,00р.',
		url: '/uslugi/kvartirnyi-pereezd',

	},
	{
		image: gruz,
		id: 3,
		title: 'Доставка грузов',
		description: '1 час 17,00р.',
		url: '/uslugi/dostavka-gruzov',
	},
	{
		image: krupnGruz,
		id: 4,
		title: 'Перевозка крупногабаритных грузов',
		description: '1 час 17,00р.',
		url: '/uslugi/perevozka-krupnogo-gruza',
	},
	{
		image: musor,
		id: 5,
		title: 'Вывоз строительного мусора',
		description: '1 час 17,00р.',
		url: '/uslugi/vyvoz-stroitelnogo-musora',
	},
]

export const items = [
	{
		label: (
			<Link to="/">
				Главная
			</Link>),
		key: 'mail',
		icon: <HomeOutlined />,
	},
	{
		label: <Link to="/uslugi" >
			Услуги
		</Link>,
		key: 'sub',
		icon: <ToolOutlined />,
		children: [
			{
				label: (
					<Link to="/uslugi/perevozka-mebeli" >
						Перевозка мебели в Минске
					</Link>
				),
				key: 'setting:1',
			},
			{
				label: (
					<Link to="/uslugi/kvartirnyi-pereezd">
						Квартирный переезд в Минске
					</Link>),
				key: 'setting:2',
			},
			{
				label: (
					<Link to="/uslugi/dostavka-gruzov">
						Доставка грузов в Минске
					</Link>),
				key: 'setting:3',
			},
			{
				label: (
					<Link to="/uslugi/perevozka-krupnogo-gruza">
						Перевозка крупногабаритных грузов по Минску
					</Link>),
				key: 'setting:4',
			},
			{
				label: (
					<Link to="/uslugi/vyvoz-stroitelnogo-musora">
						Вывоз строительного мусора в Минске
					</Link>),
				key: 'setting:5',
			},
		],
	},
	{
		label: (<Link to="/ceny">
			Цены
		</Link>),
		key: 'ceny',
		icon: <CalculatorOutlined />,
	},
	{
		label: (<Link to="/otzyvy">
			Отзывы
		</Link>),
		key: 'otzyv',
		icon: <MessageOutlined />,
	},
	{
		label: (<Link to="/kontakty">
			Контакты
		</Link>),
		key: 'contact',
		icon: <IdcardOutlined />,
	},
]

export const dataArr = [
	{
		key: 0,
		usluga: 'Перевозка мебели',
		price: 17,
		gruzchik: 8,
		total: 34,
		description: 'Вы можете узнать стоимость как только перевозки, так и перевозка + грузчики (для физических лиц), если Вы юр.лицо, то выберите + юр.лицо. Для юридических лиц добавляется 10%.',
	},
	{
		key: 1,
		usluga: 'Квартирный переезд',
		price: 18,
		gruzchik: 9,
		total: 36,
		description: 'Вы можете узнать стоимость как только перевозки, так и перевозка + грузчики (для физических лиц), если Вы юр.лицо, то выберите + юр.лицо. Для юридических лиц добавляется 10%.',
	},
	{
		key: 2,
		usluga: 'Доставка груза',
		price: 19,
		gruzchik: 10,
		total: 38,
		description: 'Вы можете узнать стоимость как только перевозки, так и перевозка + грузчики (для физических лиц), если Вы юр.лицо, то выберите + юр.лицо. Для юридических лиц добавляется 10%.',
	},
	{
		key: 3,
		usluga: 'Перевозка крупногабаритных грузов',
		price: 20,
		gruzchik: 15,
		total: 40,
		description: 'Вы можете узнать стоимость как только перевозки, так и перевозка + грузчики (для физических лиц), если Вы юр.лицо, то выберите + юр.лицо. Для юридических лиц добавляется 10%.',
	},
	{
		key: 4,
		usluga: 'Вывоз строительного мусора',
		price: 21,
		gruzchik: 13,
		total: 42,
		description: 'Вы можете узнать стоимость как только перевозки, так и перевозка + грузчики (для физических лиц), если Вы юр.лицо, то выберите + юр.лицо. Для юридических лиц добавляется 10%.',
	},
]

export const itemsMobil = [
	{
		label: (
			<Link to="/">
				<HomeOutlined />
			</Link>),
		key: 'mail',
	},
	{
		label: <Link to="/uslugi" >
			<ToolOutlined />
		</Link>,
		key: 'sub',
		children: [
			{
				label: (
					<Link to="/uslugi/perevozka-mebeli" >
						Перевозка мебели в Минске
					</Link>
				),
				key: 'setting:1',
			},
			{
				label: (
					<Link to="/uslugi/kvartirnyi-pereezd">
						Квартирный переезд в Минске
					</Link>),
				key: 'setting:2',
			},
			{
				label: (
					<Link to="/uslugi/dostavka-gruzov">
						Доставка грузов в Минске
					</Link>),
				key: 'setting:3',
			},
			{
				label: (
					<Link to="/uslugi/perevozka-krupnogo-gruza">
						Перевозка крупногабаритных грузов по Минску
					</Link>),
				key: 'setting:4',
			},
			{
				label: (
					<Link to="/uslugi/vyvoz-stroitelnogo-musora">
						Вывоз строительного мусора в Минске
					</Link>),
				key: 'setting:5',
			},
		],
	},
	{
		label: (<Link to="/ceny">
			<CalculatorOutlined />
		</Link>),
		key: 'ceny',
	},
	{
		label: (<Link to="/otzyvy">
			<MessageOutlined />
		</Link>),
		key: 'otzyv',
	},
	{
		label: (<Link to="/kontakty">
			<IdcardOutlined />
		</Link>),
		key: 'contact',
	},
	{
		label: (
			<Badge dot>
				<UserOutlined />
			</Badge>
		),
		key: 'user',
		children: [
			{
				key: '1',
				label: (
					<Profil />
				),
			},
			{
				type: 'divider',
			},
			{
				key: '2',
				label: (
					<Badge dot>
						<Uvedomlenia />
					</Badge>
				),
			},
			{
				type: 'divider',
			},
			{
				key: '3',
				label: (
					<NewAccount />
				),
			},
			{
				type: 'divider',
			},
			{
				key: '4',
				label: (
					<BtnItemMobil />
				),
			},
		]
	},
]