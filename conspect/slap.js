export const slap = 'https://techrocks.ru/2020/01/01/10-coding-principles-demystified/'


// Single Level of Abstraction Principle («Принцип единого уровня абстракций», SLAP) диктует нам, как мы 
//должны организовывать свой код (в частности, функции), чтобы он оставался поддерживаемым.

// С длинными и сложными функциями тяжело ужиться. В них сложно разобраться непосвященному человеку, 
//их тяжело тестировать и, зачастую, даже чтобы их увидеть полностью, приходится пользоваться прокруткой.
// Если у вас возникают подобные проблемы, следует немедленно задуматься о реструктуризации функции и 
//создании вместо нее нескольких функций поменьше. Помните, что

// «Функции должны выполнять только одно действие, но выполнять его хорошо» (Роберт Мартин).
// Но как именно следует организовывать эти более мелкие функции? Какое именно «одно действие» должна 
//выполнять каждая из них? Ну, когда вы приобретете больше опыта в программировании, вы начнете чувствовать, 
//где и что следует располагать, а SLAP поможет вам в этом.

// Ваши функции должны делать что-то одно или, если применять принцип SLAP, они должны иметь единый уровень 
//абстракции. Скажем, функция, читающая input, не должна также обрабатывать полученные данные. 
//Для этого она должна задействовать отдельную функцию, находящуюся на другом, более низком уровне абстракции. 
//Чем более общей является функция и чем больше других функций она использует, тем выше она располагается 
//в абстракционной иерархии.






