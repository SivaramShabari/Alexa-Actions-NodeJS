import express from 'express'

import apiHandler from '../controller/api/api.js'

const router = express.Router()

router.post('/', apiHandler)

export default router