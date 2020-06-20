declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Represents an event that is called when a player right clicks an entity.
                 */
                // @ts-ignore
                class PlayerInteractEntityEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    clickedEntity: org.bukkit.entity.Entity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the entity that was right-clicked by the player.
                     * @return entity right clicked by player
                     */
                    // @ts-ignore
                    getRightClicked(): org.bukkit.entity.Entity
                    /**
                     * The hand used to perform this interaction.
                     * @return the hand used to interact
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
