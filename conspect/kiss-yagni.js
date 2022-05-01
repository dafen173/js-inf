export const kissYagni = 'https://web-creator.ru/articles/kiss'




// Принцип программирования KISS — делайте вещи проще
// Большая часть программных систем необосновано перегружена практически ненужными функциями, что ухудшает удобство их использование конечными пользователями, а также усложняет их поддержку и развитие разработчиками. Следование принципу «KISS» позволяет разрабатывать решения, которые просты в использовании и в сопровождении.

// KISS — это принцип проектирования и программирования, при котором простота системы декларируется в качестве основной цели или ценности. Есть два варианта расшифровки аббревиатуры: «keep it simple, stupid» и более корректный «keep it short and simple».

// В проектировании следование принципу KISS выражается в том, что:

// не имеет смысла реализовывать дополнительные функции, которые не будут использоваться вовсе или их использование крайне маловероятно, как правило, большинству пользователей достаточно базового функционала, а усложнение только вредит удобству приложения;
// не стоит перегружать интерфейс теми опциями, которые не будут нужны большинству пользователей, гораздо проще предусмотреть для них отдельный «расширенный» интерфейс (или вовсе отказаться от данного функционала);
// бессмысленно делать реализацию сложной бизнес-логики, которая учитывает абсолютно все возможные варианты поведения системы, пользователя и окружающей среды, — во-первых, это просто невозможно, а во-вторых, такая фанатичность заставляет собирать «звездолёт», что чаще всего иррационально с коммерческой точки зрения.
// В программировании следование принципу KISS можно описать так:

// не имеет смысла беспредельно увеличивать уровень абстракции, надо уметь вовремя остановиться;
// бессмысленно закладывать в проект избыточные функции «про запас», которые может быть когда-нибудь кому-либо понадобятся (тут скорее правильнее подход согласно принципу YAGNI);
// не стоит подключать огромную библиотеку, если вам от неё нужна лишь пара функций;
// декомпозиция чего-то сложного на простые составляющие — это архитектурно верный подход (тут KISS перекликается с DRY);
// абсолютная математическая точность или предельная детализация нужны не всегда — большинство систем создаются не для запуска космических шаттлов, данные можно и нужно обрабатывать с той точностью, которая достаточна для качественного решения задачи, а детализацию выдавать в нужном пользователю объёме, а не в максимально возможном объёме.
// Также KISS имеет много общего c принципом разделения интерфейса из пяти принципов SOLID, сформулированных Робертом Мартином.




//https://techrocks.ru/2020/01/01/10-coding-principles-demystified/
// Начнем с самых популярных. Keep It Stupid Simple («Придерживайся простоты», аббревиатура KISSв качестве отдельного слова означает «поцелуй») это один из самых известных принципов программирования. Значение его довольно понятное, хотя и очень широкое.
// Как не сложно догадаться, этот принцип велит вам следить за тем, чтобы код оставался как можно более простым. Чем код проще, тем легче в нем разобраться, как вам, так и другим людям, занимающимся его поддержкой. Под простотой главным образом имеется в виду отказ от использования хитроумных приемов и ненужного усложнения.

// В качестве примеров нарушения этого принципа можно назвать написание отдельной функции только лишь для 
//осуществления операции сложения или использование побитового оператора (right shift >> 1) для деления целых чисел на 2. 
//Последнее, безусловно, более эффективно, чем обычное (/2), но при этом очень сильно снижается понятность кода. 
//Применяя такой подход, вы осуществляете clever coding («заумный» кодинг») и over-optimization (чрезмерную оптимизацию). 
//И то, и другое в долгосрочной перспективе не слишком хорошо сказывается на здоровье вашего кода.



//https://web-creator.ru/articles/yagni
// Принцип программирования YAGNI — «Вам это не понадобится». You Ain't Gonna Need It.
// Если упрощенно, то следование данному принципу заключается в том, что возможности, которые не описаны в требованиях к системе, просто не должны реализовываться. Это позволяет вести разработку, руководствуясь экономическими критериями — Заказчик не должен оплачивать ненужные ему функции, а разработчики не должны тратить своё оплачиваемое время на реализацию того, что не требуется.
// Основная проблема, которую решает принцип YAGNI — это устранение тяги программистов к излишней абстракции, к экспериментам «из интереса» и к реализации функционала, который сейчас не нужен, но, по мнению разработчика, может либо вскоре понадобиться, либо просто будет полезен, хотя в реальности такого очень часто не происходит.
// «Бесплатных» функций в программных продуктах просто не бывает. Если рассматривать материальную сторону, то любые ненужные, но фактически реализованные «фичи» оплачиваются либо Заказчиком (в бюджет закладываются расходы на те функции, которые не нужны), либо Исполнителем из прибыли по проекту. И тот, и другой варианты с точки зрения бизнеса неверны. Если же говорить о нематериальных затратах, то любые «бонусные» возможности усложняют сопровождение, увеличивают вероятность ошибок и усложняют взаимодействие с продуктом, — между объёмом кодовой базы и описанными характеристиками есть прямая зависимость. Больше написанного кода — труднее сопровождать и выше вероятность появления «багов», тут очень уместна поговорка: «лучший код — это ненаписанный код».
// Принципы YAGNI и KISS очень похожи, если KISS нацелен на упрощение и полезен в плане работы с теми требованиями, которые имеют место быть, то YAGNI более категоричен и применяется для ограждения проектов по разработке ПО от «размывания» их рамок.
// Подход к реализации проектов строго по ТЗ верен с нескольких ракурсов. Заказчик не должен платить за то, что ему не надо, а продукт должен быть максимально сопровождаем и его качество не должно страдать от интеграции ненужных функций.



//https://techrocks.ru/2020/01/01/10-coding-principles-demystified/
// YAGNI это определенно самая длинная аббревиатура в нашем списке. Принцип You Aren’t Gonna Need It («Тебе это не понадобится», YAGNI) может противоречить точке зрения некоторых программистов.
// Готовность к будущему обычно считается делом хорошим, но не в программировании. Оставлять любой код, предназначенный только для расширяемости программы в будущем, это неправильно. Но если это противоречит вашим убеждениям, давайте разберем подробнее.
// Проекты программного обеспечения не имеют четкого конца. Если только создатель проекта не забрасывает свою идею вообще (и при этом даже не передает ее кому-то еще), проект, по сути, постоянно развивается. Но при этом нет никакой точки, где можно было бы признать проект «достаточно хорошим» и остановиться. Всегда будет возможность что-то улучшить.
// Пытаться спрогнозировать будущее и представлять, как должен выглядеть ваш код, это не плохо. Но нежелательно оставлять в продакшене «точки расширения» (места, предназначенные только для того, чтобы позволить вам в будущем легко добавить новый функционал). Конечно, мы не говорим о случаях, когда речь идет об уже заказанном функционале. Такие точки расширения вносят ненужную сложность и увеличивают размер вашей кодовой базы. Если задуматься, это также противоречит описанному выше принципу KISS.


