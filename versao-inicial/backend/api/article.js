module.exports = (app) => {
  const { existsOrError, notExistsOrError } = app.api.validation;

  const save = (req, res) => {
    const article = {...req.body}
    if(req.params.id) article.id = req.params.id

    try {
        existsOrError(article.name, 'Nome não informado')
        existsOrError(article.description, 'Descrição não informada')
        existsOrError(article.categoryId, 'Categoria não informada')
        existsOrError(article.content, 'Conteúdo não informado')
    } catch(msg){
        
    }
  }
};
