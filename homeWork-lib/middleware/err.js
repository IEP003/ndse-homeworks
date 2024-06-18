module.exports = ((req, res) => {
    res.render('err/err404', {
        title: '404 | Страница не найдена'
    })
});