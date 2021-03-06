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
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the entity that was right-clicked by the player.
                     * @return entity right clicked by player
                     */
                    // @ts-ignore
                    public getRightClicked(): org.bukkit.entity.Entity
                    /**
                     * The hand used to perform this interaction.
                     * @return the hand used to interact
                     */
                    // @ts-ignore
                    public getHand(): org.bukkit.inventory.EquipmentSlot
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
