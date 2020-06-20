declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity combusts.
                 * <p>
                 * If an Entity Combust event is cancelled, the entity will not combust.
                 */
                // @ts-ignore
                class EntityCombustEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(combustee: org.bukkit.entity.Entity, duration: number /*int*/)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * @return the amount of time (in seconds) the combustee should be alight
                     *      for
                     */
                    // @ts-ignore
                    getDuration(): int
                    /**
                     * The number of seconds the combustee should be alight for.
                     * <p>
                     * This value will only ever increase the combustion time, not decrease
                     * existing combustion times.
                     * @param duration the time in seconds to be alight for.
                     */
                    // @ts-ignore
                    setDuration(duration: number /*int*/): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
