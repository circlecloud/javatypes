declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player shears an entity
                 */
                // @ts-ignore
                class PlayerShearEntityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, what: org.bukkit.entity.Entity, item: org.bukkit.inventory.ItemStack, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, what: org.bukkit.entity.Entity)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the entity the player is shearing
                     * @return the entity the player is shearing
                     */
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    /**
                     * Gets the item used to shear the entity.
                     * @return the shears
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the hand used to shear the entity.
                     * @return the hand
                     */
                    // @ts-ignore
                    getHand(): org.bukkit.inventory.EquipmentSlot
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
