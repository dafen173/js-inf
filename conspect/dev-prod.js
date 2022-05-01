export const devProd = 'https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-webpack-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-6cafbf562386'




// Режимы Webpack
// Данные режимы (появившиеся в 4-й версии Webpack) настраивают среду, в которой будет работать Webpack. Режим может быть настроен на development или production (по умолчанию стоит production).
// module.exports = {
//   entry: './index.js',
//   mode: 'development',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'app.js'
//   }
// }
// Режим development:
// менее оптимизирован, чем production
// работает быстрее
// не удаляет комментарии
// предоставляет более подробные сообщения об ошибках и способы их решения
// сильно облегчает отладку
// Режим production работает медленнее, чем development, так как ему нужно создать более оптимизированный бандл. Полученный JavaScript файл меньше по размеру, поскольку многое из режима development в нем отсутствует.
// Я написал небольшое приложение, которое выводит содержимое console.log.




