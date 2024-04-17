import { expect } from "@playwright/test"
import pkg from "@reatom/testing"
const { createTestCtx } = pkg

import { initializeCeloTest } from "./initialize-celo-test"

import { MetaMask, testWithSynpress, unlockForFixture } from "@synthetixio/synpress"
import BasicSetup from "./wallet-setup/basic-wallets.setup"
import { navigateToMainPage } from "./helpers/routes"

const test = testWithSynpress(BasicSetup, unlockForFixture)

test("has title", async ({ page, extensionId, context }) => {
  const metamask = new MetaMask(context, page, BasicSetup.walletPassword, extensionId)

  const ctx = createTestCtx()
  await initializeCeloTest(ctx)

  await page.goto(ctx.get(navigateToMainPage()))

  await metamask.connectToDapp()

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Krapopolis/)
})
