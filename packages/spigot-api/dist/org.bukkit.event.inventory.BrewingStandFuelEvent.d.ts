declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when an ItemStack is about to increase the fuel level of a brewing
                 * stand.
                 */
                // @ts-ignore
                class BrewingStandFuelEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(brewingStand: org.bukkit.block.Block, fuel: org.bukkit.inventory.ItemStack, fuelPower: number /*int*/)
                    /**
                     * Gets the ItemStack of the fuel before the amount was subtracted.
                     * @return the fuel ItemStack
                     */
                    // @ts-ignore
                    getFuel(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the fuel power for this fuel. Each unit of power can fuel one
                     * brewing operation.
                     * @return the fuel power for this fuel
                     */
                    // @ts-ignore
                    getFuelPower(): int
                    /**
                     * Sets the fuel power for this fuel. Each unit of power can fuel one
                     * brewing operation.
                     * @param fuelPower the fuel power for this fuel
                     */
                    // @ts-ignore
                    setFuelPower(fuelPower: number /*int*/): void
                    /**
                     * Gets whether the brewing stand's fuel will be reduced / consumed or not.
                     * @return whether the fuel will be reduced or not
                     */
                    // @ts-ignore
                    isConsuming(): boolean
                    /**
                     * Sets whether the brewing stand's fuel will be reduced / consumed or not.
                     * @param consuming whether the fuel will be reduced or not
                     */
                    // @ts-ignore
                    setConsuming(consuming: boolean): void
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
