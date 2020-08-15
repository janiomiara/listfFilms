import Api from '../services'
const language = 'pr-BR'

export const getFilme = async (params) =>
  Api.get('', { params: { language, page: params.toString() } })
