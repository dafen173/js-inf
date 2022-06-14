export const oop = ''

// Инкапсуляция

// Инкапсуляция – сокрытие поведения объекта внутри него. Объекту «водитель» не нужно знать,
// что происходит в объекте «машина», чтобы она ехала. Это ключевой принцип ООП.

// Инкапсуляция — способ спрятать сложную логику внутри класса, предоставив 
//программисту лаконичный и понятный интерфейс для взаимодействия с сущностью.

// Представим на минутку, что мы оказались в конце позапрошлого века, когда Генри Форд ещё не придумал конвейер, а первые попытки 
//создать автомобиль сталкивались с критикой властей по поводу того, что эти коптящие монстры загрязняют воздух и пугают лошадей. 
//Представим, что для управления первым паровым автомобилем необходимо было знать, как устроен паровой котёл, постоянно подбрасывать уголь, 
//следить за температурой, уровнем воды. При этом для поворота колёс использовать два рычага, каждый из которых поворачивает одно 
//колесо в отдельности. Думаю, можно согласиться с тем, что вождение автомобиля того времени было весьма неудобным и трудным занятием.

// Теперь вернёмся в сегодняшний день к современным чудесам автопрома с коробкой-автоматом. На самом деле, по сути, ничего не 
//изменилось. Бензонасос всё так же поставляет бензин в двигатель, дифференциалы обеспечивают поворот колёс на различающиеся углы, 
//коленвал превращает поступательное движение поршня во вращательное движение колёс. Прогресс в другом. Сейчас все эти действия 
//скрыты от пользователя и позволяют ему крутить руль и нажимать на педаль газа, не задумываясь, что в это время происходит с 
//инжектором, дроссельной заслонкой и распредвалом. Именно сокрытие внутренних процессов, происходящих в автомобиле, позволяет 
//эффективно его использовать даже тем, кто не является профессионалом-автомехаником с двадцатилетним стажем. Это сокрытие в ООП носит 
//название инкапсуляции.

// Инкапсуляция – это свойство системы, позволяющее объединить данные и методы, работающие с ними, в классе и скрыть детали
// реализации от пользователя.

// Инкапсуляция неразрывно связана с понятием интерфейса класса. 
//По сути, всё то, что не входит в интерфейс, инкапсулируется в классе.

// Например, инкапсуляцию удобно объяснять с помощь магазина, где есть
// витрина, на которой все видно и красиво расставлено и есть склад, куда обычного покупателя не пускают.

// Зарплату сотрудника знает он сам, его руководитель и бухгалтер, остальные — нет. 
//Такое сокрытие данных называется инкапсуляция. Какие свойства и 
//поведение будет доступно другим объектам обычно определяется на уровне класса.



// Полиморфизм

//Полиморфизм – это переопределение поведения. Можно снова рассмотреть 
//«человека» и «водителя», но теперь добавить «пешехода». 

//Человек умеет как-то передвигаться, но как именно, зависит от того,
//********************************************************************* */
// водитель он или пешеход. То есть у пешехода и водителя схожее поведение,
// но реализованное по-разному: один перемещается ногами, другой – на машине.
//****************************************************************************** */

// Полиморфизм — принцип «один интерфейс — множество реализаций». 
//Например, метод print может вывести текст на экран, распечатать
// его на бумаге или вовсе записать в файл.

// Любое обучение вождению не имело бы смысла, если бы человек, 
//научившийся водить, скажем, ВАЗ 2106 не мог потом водить ВАЗ 2110 или 
//BMW X3. С другой стороны, трудно представить человека, который смог бы 
//нормально управлять автомобилем, в котором педаль газа находится левее 
//педали тормоза, а вместо руля – джойстик.

// Всё дело в том, что основные элементы управления автомобиля имеют одну и 
//ту же конструкцию и принцип действия. Водитель точно знает, что для того, 
//чтобы повернуть налево, он должен повернуть руль, независимо от того, есть там гидроусилитель или нет.
// Если человеку надо доехать с работы до дома, то он сядет за руль 
//автомобиля и будет выполнять одни и те же действия, независимо от того,
// какой именно тип автомобиля он использует. По сути, можно сказать,
// что все автомобили имеют один и тот же интерфейс, а водитель, абстрагируясь 
//от сущности автомобиля, работает именно с этим интерфейсом. Если 
//водителю предстоит ехать по немецкому автобану, он, вероятно выберет 
//быстрый автомобиль с низкой посадкой, а если предстоит возвращаться
// из отдалённого маральника в Горном Алтае после дождя, скорее всего,
// будет выбран УАЗ с армейскими мостами. Но, независимо от того, каким 
//образом будет реализовываться движение и внутреннее функционирование 
//машины, интерфейс останется прежним.

// Полиморфизм – это свойство системы использовать объекты с одинаковым 
//интерфейсом без информации о типе и внутренней структуре объекта.

// Например, если вы читаете данные из файла, то, очевидно, в классе, 
//реализующем файловый поток, будет присутствовать метод 
//похожий на следующий: byte[] readBytes( int n );
// Предположим теперь, что вам необходимо считывать те же данные из 
//сокета. В классе, реализующем сокет, также будет присутствовать метод readBytes. 
//Достаточно заменить в вашей системе объект одного класса на объект 
//другого класса, и результат будет достигнут.

// При этом логика системы может быть реализована независимо от того, 
//будут ли данные прочитаны из файла или получены по сети. Таким 
//образом, мы абстрагируемся от конкретной специализации получения 
//данных и работаем на уровне интерфейса. Единственное требование 
//при этом – чтобы каждый используемый объект имел метод readBytes.



// Наследование. 

// Есть объекты «человек» и «водитель». У них есть явно что-то общее. Наследование 
//позволяет выделить это общее в один объект (в данном случае более общим будет 
//человек), а водителя — определить как человека, но с дополнительными свойствами 
//и/или поведением. Например, у водителя есть водительские права, а у человека их может не быть.

//Наследование — способ легко и просто расширить существующий класс, 
//дополнив его функциональностью.

// Представим себя, на минуту, инженерами автомобильного завода. Нашей задачей является 
//разработка современного автомобиля. У нас уже есть предыдущая модель, которая 
//отлично зарекомендовала себя в течение многолетнего использования. 
//Всё бы хорошо, но времена и технологии меняются, а наш современный 
//завод должен стремиться повышать удобство и комфорт выпускаемой 
//продукции и соответствовать современным стандартам.

// Нам необходимо выпустить целый модельный ряд автомобилей: седан, 
//универсал и малолитражный хэтч-бэк. Очевидно, что мы не собираемся 
//проектировать новый автомобиль с нуля, а, взяв за основу предыдущее 
//поколение, внесём ряд конструктивных изменений. Например, добавим 
//гидроусилитель руля и уменьшим зазоры между крыльями и крышкой капота,
// поставим противотуманные фонари. Кроме того, в каждой модели будет изменена форма кузова.

// Очевидно, что все три модификации будут иметь большинство свойств
// прежней модели (старый добрый двигатель 1970 года, непробиваемая 
//ходовая часть, зарекомендовавшая себя отличным образом на отечественных 
//дорогах, коробку передач и т.д.). При этом каждая из моделей будет реализовать 
//некоторую новую функциональность или конструктивную особенность. 
//В данном случае, мы имеем дело с наследованием.

// Наследование – это свойство системы, позволяющее описать новый класс 
//на основе уже существующего с частично или полностью заимствующейся функциональностью. 
//Класс, от которого производится наследование, называется базовым или родительским. 
//Новый класс – потомком, наследником или производным классом.

// Необходимо отметить, что производный класс полностью удовлетворяет 
//спецификации родительского, однако может иметь дополнительную функциональность. 
//С точки зрения интерфейсов, каждый производный класс полностью реализует 
//интерфейс родительского класса. Обратное не верно.

// Действительно, в нашем примере мы могли бы произвести с новыми
// автомобилями все те же действия, что и со старым: увеличить или уменьшить 
//скорость, повернуть, включить сигнал поворота. Однако, дополнительно у нас 
//бы появилась возможность, например, включить противотуманные фонари.

// Отсутствие обратной совместимости означает, что мы не должны 
//ожидать от старой модели корректной реакции на такие действия, 
//как включения противотуманок (которых просто нет в данной модели).



// Абстракция
// Представьте, что водитель едет в автомобиле по оживлённому участку движения.
// Понятно, что в этот момент он не будет задумываться о химическом составе 
//краски автомобиля, особенностях взаимодействия шестерён в коробке передач 
//или влияния формы кузова на скорость (разве что, автомобиль стоит в глухой 
//пробке и водителю абсолютно нечем заняться). Однако, руль, педали, указатель 
//поворота (ну и, возможно, пепельницу) он будет использовать регулярно.

// Абстрагирование – это способ выделить набор значимых характеристик объекта, 
//исключая из рассмотрения незначимые. Соответственно, 
//абстракция – это набор всех таких характеристик.

// Если бы для моделирования поведения автомобиля приходилось учитывать 
//химический состав краски кузова и удельную теплоёмкость лампочки 
//подсветки номеров, мы никогда бы не узнали, что такое NFS.


// Если резюмировать: ООП даёт контроль над зависимостями в коде. Это способ сделать
// так, чтобы высокоуровневый код не зависел от низкоуровневой реализации. 
//ООП позволяет вести разработку раздельно, поскольку взаимодействие между 
//сущностями определено интерфейсами.


