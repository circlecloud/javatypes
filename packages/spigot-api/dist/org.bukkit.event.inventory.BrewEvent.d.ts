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
                    public getContents(): org.bukkit.inventory.BrewerInventory
                    /**
                     * Gets the remaining fuel level.
                     * @return the remaining fuel
                     */
                    // @ts-ignore
                    public getFuelLevel(): number /*int*/
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
