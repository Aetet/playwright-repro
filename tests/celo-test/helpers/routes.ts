import pkg from "@reatom/core"
const { action, atom } = pkg

import { hostAtom } from "../environment"

export const navigateToMainPage = () =>
  atom(ctx => {
    const host = ctx.get(hostAtom)
    return `https://${host}`
  }, "navigateToMainPage")

export const navigateToToken = (blockchatin: string, collectionId: string, tokenId: string) =>
  atom(ctx => {
    const host = ctx.get(hostAtom)
    return `https://${host}/token/${blockchatin}:${collectionId}:${tokenId}`
  }, "navigateToToken")
