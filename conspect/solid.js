export const solid = ''

//https://webkyrs.info/page/printsipy-solid-vvedenie
// SOLID
// Пять принципов, которые мы уже обсудили — SRP, OCP, LSP, ISP, DIP — вместе составляют набор принципов SOLID, 
//описанный Робертом Мартином. Эти принципы способствуют созданию хорошего объектно-ориентированного (и не только) кода.

// Задача этих принципов - сделать программу, которую вы разрабатываете, чтобы ее можно было легко расширять, добавлять туда новые возможности и легко было поддерживать. 
// Если вы разрабатывали большие приложения, то наверняка вы сталкивались с ситуацией, что вы написали какую-то законченную часть программы и далее происходит ситуация, что вас просят что-то изменить в ней. Если программа сделана неправильно, в этом случае у вас могут быть проблемы. 
// Поэтому важно придерживаться этих SOLID принципов. Их соблюдение может сэкономить вам в дальнейшем очень много времени и сил. 
// В принципе, вы можете писать код и без этих принципов. Их применение не обязательно, но написание кода без этих принципов может создать вам ряд проблем в будущем. 



// Single Responsibility Principle. SRP
//https://techrocks.ru/2020/01/01/10-coding-principles-demystified/
// Single Responsibility Principle («Принцип единой ответственности», SRP) в чем-то похож на SLAP, но направлен на объектно-ориентированное программирование. Этот принцип гласит, что объекты и классы (а также функции и методы) нужно организовывать так, чтобы каждый из них имел только одну зону ответственности.
// Ответственность объектов и классов легко организовывать, когда они отражают более «жизненные» объекты. Но когда мы имеем дело с сущностями, имеющими в названии слова «контроллер» или «сервис», ситуация усложняется. Эти высокоуровневые модули тяжело организовывать, поскольку, теоретически, в них можно поместить что угодно. При этом число ответственностей таких сущностей стремительно растет, а в результате весь код становится более сложным и непонятным.
// Как справиться с этой проблемой? Скажем, наш контроллер отвечает за компьютер. Он должен контролировать температуру CPU, скорость вентилятора, дисковое пространство, внешние устройства и т. п. вещи. Имейте в виду, что это означает не только свойства, но и методы, с которыми мы взаимодействуем. Как насчет того, чтобы создать несколько классов вместо того чтобы хранить все напрямую в одном классе? Так у нас появляются DevicesController, DiskSpaceController и т. д. А после мы можем использовать все эти классы, чтобы составить высокоуровневый класс Controller, который теперь будет куда проще поддерживать. Конечно, в реальности подобный код потребует куда большей организации, но, я надеюсь, идею вы уловили.

//https://web-creator.ru/articles/solid_the_single_responsibility_principle
// Принцип декларирует, что каждый объект должен иметь одну обязанность и эта обязанность должна быть полностью инкапсулирована в класс, а все его сервисы должны быть направлены исключительно на обеспечение этой обязанности.
// Следование принципу заключается обычно в декомпозиции сложных классов, которые делают сразу много вещей, на простые, отвественность которых очень специализирована. Но также и объединении в отдельный класс однотипной функциональности, которая может оказаться распределённой по многим классам, может рассматриваться как следование этому принципу.
// Проектирование классов с направленностью на обеспечение единственной обязанности упрощает дальнейшие модификации и сопровождение, так как проще разобраться в одном блоке функциональности, нежели распутывать сложные взаимосвязи между различными функциональными блоками. Также при модификации логики в одном месте приложения снижаются риски возникновения проблем в других «неожиданных» его местах.
// Следование SRP весьма полезная практика с точки зрения повторного использования кода. Сложные объекты с комплексными зависимостями обычно очень сложно использовать повторно, особенно если нужна только часть реализованного в них функционала. А небольшие классы с чётко очерченным функционалом, напротив, проще использовать повторно, так как они не избыточные и редко тянут за собой существенный объём зависимостей.
// Наиболее ярким анти-паттерном, нарушающим принцип единственной ответственности, является использование God-объектов, которые «слишком много знают» или «слишком много умеют». Возникают такие «божественные объекты» обычно из-за любви разработчиков к абстракции — если возводить абстракцию в абсолют, то вполне можно любой объект реального мира отразить в приложении в виде экзепляра некого универсального класса. На словах это даже может выглядеть логично, но на практике почти всегда это приводит к проблемам сопровождаемости. Обычно такие объекты становятся центральной частью системы, а их модификация крайне сложна, так как становится очень сложно предсказать, как изенение кода для решения текущей задачи может сказаться на ранее реализованной функциональности.
// На самом деле, как и любые другие принципы, SRP требует сознательного и осмысленного применения. Чрезмерная декомпозиция может оказаться и вредной, если она приводит к большей сложности или усложняет сопровождение.
// Например, часто используемый во фреймворках паттерн ActiveRecord нарушает принцип единственной ответственности. ActiveRecord реально объединяет в себе очень много функциональных возможностей и часто смешивает бизнес-логику и работу со слоем хранения. При этом использование ActiveRecord часто является удобным и целесообразным. На этом примере становится ясно, что SRP — это не догма, а нарушение этого принципа вполне может быть логичным и  целесообразным.



// The Open Closed Principle или OCP —  Принцип открытости/закрытости
// один из пяти основных принципов объектно-ориентированного программирования и проектирования, сформулированных Робертом Мартином.
// Принцип декларирует, что программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения. Это означает, что эти сущности могут менять свое поведение без изменения их исходного кода.
// В этом контексте открытость для расширения — это возможность добавить для класса, модуля или функции новое поведение, если необходимость в этом возникнет, а закрытость для изменений — это запрет на изменение исходного кода  программных сущностей. На первый взгляд, это звучит сложно и противоречиво. Но если разобраться, то принцип вполне логичен.
// Следование принципу OCP заключается в том, что программное обеспечение изменяется не через изменение существующего кода, а через добавление нового кода. То есть созданный изначально код остаётся «нетронутым» и стабильным, а новая функциональность внедряется либо через наследование реализации, либо через использование абстрактных интерфейсов и полиморфизм.
// Принцип открытости/закрытости Мейера основывается на идее, что разработанная изначально реализация класса в дальнейшем не модифицируется (разве что исправляются ошибки), а любые изменения производятся через создание нового класса, который обычно наследуется от изначального. Согласно определению Мейера реализация интерфейса может быть унаследована и переиспользована, но интерфейс может и измениться в новой реализации.
// Позже был сформулирован полиморфный принцип открытости/закрытости. Он основывается на строгой реализации интерфейсов и на наследовании от абстрактных базовых классов или на полиморфизме. Созданный изначально интерфейс должен быть закрыт для модификаций, а новые реализации как минимум соответсвуют этому изначальному интерфейсу, но могут поддерживать и другие, более расширенные.


//The Liskov Substitution Principle или LSP 
//https://web-creator.ru/articles/solid_the_liskov_substitution_principle
// Принцип подстановки Барбары Лисков — The Liskov Substitution Principle или LSP 
//— один из пяти основных принципов объектно-ориентированного программирования и проектирования, сформулированных Робертом Мартином.
// Принцип в формулировке Роберта Мартина декларирует, что функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом. Оригинальное определение Барбары Лисков более формальное и заметно сложнее для восприятия: «В том случае, если q(x) — свойство, верное по отношению к объектам х некого типа T, то свойство q(y) тоже будет верным относительно ряда объектов y, которые относятся к типу S, при этом S — подтип некого типа T».
// Следование принципу LSP заключается в том, что при построении иерархий наследования создаваемые наследники должны корректно реализовывать поведение базового типа. То есть если базовый тип реализует определённое поведение, то это поведение должно быть корректно реализовано и для всех его наследников.
// LSP перекликается с контрактным программированием, определяя точные, формальные и верифицируемые описания интерфейсов. И интерфейсы, реализумые наследниками, должны соответствовать контракту интерфейсов базового класса.

//==========================
// Наследник класса дополняет, но не заменяет поведение базового класса. То есть в любом месте программы замена базового класса на класс-наследник не должна вызывать проблем. Если по каким-то причинам так не получается, то вероятнее всего имеет место либо некорректная реализация, либо неверно выбранная абстракция для наследования.
// Соблюдение принципа подстановки Барбары Лисков позволяет гарантировать, что любой созданный нами подкласс будет без проблем использоваться ранее реализованными модулями, которые работали с надклассом. А это существенно упрощает расширение функциональных возможностей системы.
//==========================

// Но LSP, как и любой другой принцип, не является догмой. И иногда следование этому принципу при построении архитектуры может приводить к более ресурсоёмкой реализации, нежели работа с нарушением этого принципа. Но как и с любыми другими правилами — надо осознавать возможные последствия нарушения

//https://habr.com/ru/company/tinkoff/blog/490738/
// Принцип открытости-закрытости говорит нам о том, что в поддерживаемых и переиспользуемых программах новая функциональность вводится путем добавления нового кода, а не изменением уже существующего.
// Принцип подстановки Лисков поясняет нам, как этого добиться, когда мы говорим о построении иерархий классов. Если код, оперирующий ссылками на базовые классы, должен знать обо всех его наследниках и изменяться с появлением каждого нового наследника, то этот код не отвечает принципу подстановки Лисков, а значит, не отвечает и принципу открытости-закрытости.




//The Interface Segregation Principle или ISP
// https://web-creator.ru/articles/solid_the_interface_segregation_principle
// Принцип разделения интерфейса — The Interface Segregation Principle или ISP — один из пяти основных принципов объектно-ориентированного программирования и проектирования, сформулированных Робертом Мартином.
// Принцип в формулировке Роберта Мартина декларирует, что клиенты не должны зависеть от методов, которые они не используют. То есть если какой-то метод интерфейса не используется клиентом, то изменения этого метода не должны приводить к необходимости внесения изменений в клиентский код.
// Следование принципу ISP заключается в создании интерфейсов, которые достаточно специфичны и требуют только необходимый минимум реализаций методов. Избыточные интерфейсы, напротив, могут требовать от реализующего класса создание большого количества методов, причём даже таких, которые не имеют смысла в контексте класса.
// В чём-то принцип разделения интерфейса перекликается с принципом единственной ответственности — интерфейсы не должны быть избыточно «толстыми», если вдруг в приложении формируется слишком объёмный интерфейс, то есть высокая вероятность, что так происходит из-за того, что в этом интерфейсе слишком много разных ответственностей, а значит логичнее всего провести декомпозицию сложного интерфейса на несколько простых.
// Принцип разделения интерфейса снижает сложность поддержки и развития приложения. Чем проще и минималистичнее используемый интерфейс, тем менее ресурсоёмкой является его реализация в новых классах, тем меньше причин его модифицировать, но и в случае модификации она будет значительно проще.




//The Dependency Inversion Principle или DIP
//https://web-creator.ru/articles/solid_the_dependency_inversion_principle
// Принципы SOLID: принцип инверсии зависимостей
// Принцип инверсии зависимостей — The Dependency Inversion Principle или DIP — один из пяти основных принципов объектно-ориентированного программирования и проектирования, сформулированных Робертом Мартином.
// Принцип декларирует, что модули верхних уровней не должны зависеть от модулей нижних уровней, а оба типа модулей должны зависеть от абстракций; сами абстракции не должны зависеть от деталей, а вот детали должны зависеть от абстракций.
// Следование принципу инверсии зависимостей «заставляет» реализовывать высокоуровневые компоненты без встраивания зависимостей от конкретных низкоуровневых классов, что, например, сильно упрощает замену используемых зависимостей как по изнес-требованиям, так и для целей тестирования. При этом зависимость формируется не от конкретной реализации, а от абстракции — реализуемого зависимостью интерфейса.
// Например, мы реализуем хранение документов в веб-приложении. На первый взгляд, кажется логичным добавить зависимость от модулей работы с файловой системой непосредственно в класс, отвечающий за высокоуровневую работу с этими документами. Но в перспективе такая зависимость может создать проблемы — например, нам потребуется хранить данные не только на диске, но и в облаке. Если зависимость внедрена от реализации, то мы столкнёмся с необходимостью её переработки. Если же зависимость выведена на уровень абстракции (интерфейса), то нам будет достаточно реализовать функционал работы с облаком, соответствующий ранее созданному интерфейсу работы с файлами.
// Принцип инверсии зависимостей часто упрощает следованию принципу подстановки Барбары Лисков. Выделение абстракций и встраивание зависимостей от них снижает вероятность того, что в новом классе мы не полностью реализуем контракт базового класса, который мы расширяем в рамках нового.

//https://techrocks.ru/2020/04/13/dependency-inversion-principle/

