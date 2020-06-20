declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when the amount of air an entity has remaining changes.
                 */
                // @ts-ignore
                class EntityAirChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, amount: number /*int*/)
                    /**
                     * Gets the amount of air the entity has left (measured in ticks).
                     * @return amount of air remaining
                     */
                    // @ts-ignore
                    getAmount(): int
                    /**
                     * Sets the amount of air remaining for the entity (measured in ticks.
                     * @param amount amount of air remaining
                     */
                    // @ts-ignore
                    setAmount(amount: number /*int*/): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
