import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'

const endpoint = prismic.getEndpoint('gbdrone')
const accessToken = 'MC5ZZGdvb3hNQUFDZ0FleHNh.Te-_ve-_vQfvv70t77-977-977-9dzfvv73vv73vv73vv71g77-977-977-977-977-9fe-_vX8BBu-_vULvv70g77-977-9' // Set an access token
const routes = []

export const client = prismic.createClient(endpoint, { routes, accessToken })
