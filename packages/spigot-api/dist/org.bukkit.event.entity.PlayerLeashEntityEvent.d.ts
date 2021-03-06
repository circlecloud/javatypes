declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called immediately prior to a creature being leashed by a player.
                 */
                // @ts-ignore
                class PlayerLeashEntityEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, leashHolder: org.bukkit.entity.Entity, leasher: org.bukkit.entity.Player)
                    /**
                     * Returns the entity that is holding the leash.
                     * @return The leash holder
                     */
                    // @ts-ignore
                    public getLeashHolder(): org.bukkit.entity.Entity
                    /**
                     * Returns the entity being leashed.
                     * @return The entity
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity
                    /**
                     * Returns the player involved in this event
                     * @return Player who is involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                }
            }
        }
    }
}
