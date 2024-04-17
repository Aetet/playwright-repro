import { Ctx } from "@reatom/framework"
import { hostAtom, blockchainAtom, collectionAtom } from "./environment"

export async function initializeCeloTest(ctx: Ctx) {
  //@FIXME Paste here your host link
  hostAtom(ctx, "")
  blockchainAtom(ctx, "CELO")
  collectionAtom(ctx, "")
}
