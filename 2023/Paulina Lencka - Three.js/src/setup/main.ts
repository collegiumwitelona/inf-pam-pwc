import { defineAppSetup } from '@slidev/types'
import Tres from '@tresjs/core'

export default defineAppSetup(({ app, router }) => {
    app.use(Tres)
})
