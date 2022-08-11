function authMiddleware(req, res, next) {
    // Caso for pegar o token pelo URL
    // const { token } = req.query;
  
    // Caso vá pegar pelo Body
    // nesse caso deve adicionar "token": "nomequalquer" ao Body
    // const { token } = req.body;
  
    //Caso vá pegar do HEADER (Modo mais seguro)
    //Ir em KEY = token e VALUE = tokensupersecretos
    const { token } = req.headers;
    // console.log('token');
    if (token !== 'tokensupersecreto') {
      return res.status(401).send('Usuário não Autorizado')
    }
  
    next();
    // Se der errado vai para NOT FOUND, Se der certo continua como era
  }

  const errorMiddlewares = (err, req, res, next) => {
    res.status(500).json('Internal Server Error');
  }

  module.exports = {
    authMiddleware,
    errorMiddlewares
  }
