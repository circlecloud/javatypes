declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when an ItemStack is successfully smelted in a furnace.
                 */
                // @ts-ignore
                class FurnaceSmeltEvent extends org.bukkit.event.block.BlockCookEvent {
                    // @ts-ignore
                    constructor(furnace: org.bukkit.block.Block, source: org.bukkit.inventory.ItemStack, result: org.bukkit.inventory.ItemStack)
                }
            }
        }
    }
}
