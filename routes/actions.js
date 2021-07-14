import express from 'express'

import actionsHandler from '../controller/google-actions/actions.js'

const router = express.Router()

router.post('/', actionsHandler)

export default router