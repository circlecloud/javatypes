declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when an item used by the player takes durability damage as a result of
                 * being used.
                 */
                // @ts-ignore
                class PlayerItemDamageEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, what: org.bukkit.inventory.ItemStack, damage: number /*int*/)
                    /**
                     * Gets the item being damaged.
                     * @return the item
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the amount of durability damage this item will be taking.
                     * @return durability change
                     */
                    // @ts-ignore
                    public getDamage(): number /*int*/
                    // @ts-ignore
                    public setDamage(damage: number /*int*/): void
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
