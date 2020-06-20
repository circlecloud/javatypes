declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * This event is called whenever a player clicks a new trade on the trades
                 * sidebar.
                 * <p>
                 * This event allows the user to get the index of the trade, letting them get
                 * the MerchantRecipe via the Merchant.
                 */
                // @ts-ignore
                class TradeSelectEvent extends org.bukkit.event.inventory.InventoryInteractEvent {
                    // @ts-ignore
                    constructor(transaction: org.bukkit.inventory.InventoryView, newIndex: number /*int*/)
                    /**
                     * Used to get the index of the trade the player clicked on.
                     * @return The index of the trade clicked by the player
                     */
                    // @ts-ignore
                    getIndex(): int
                    // @ts-ignore
                    getInventory(): org.bukkit.inventory.MerchantInventory
                    /**
                     * Get the Merchant involved.
                     * @return the Merchant
                     */
                    // @ts-ignore
                    getMerchant(): org.bukkit.inventory.Merchant
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
