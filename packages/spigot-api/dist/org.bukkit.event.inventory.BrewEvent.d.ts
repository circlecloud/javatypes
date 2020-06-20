declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when the brewing of the contents inside the Brewing Stand is
                 * complete.
                 */
                // @ts-ignore
                class BrewEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(brewer: org.bukkit.block.Block, contents: org.bukkit.inventory.BrewerInventory, fuelLevel: number /*int*/)
                    /**
                     * Gets the contents of the Brewing Stand.
                     * @return the contents
                     */
                    // @ts-ignore
                    getContents(): org.bukkit.inventory.BrewerInventory
                    /**
                     * Gets the remaining fuel level.
                     * @return the remaining fuel
                     */
                    // @ts-ignore
                    getFuelLevel(): int
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
