declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a firework explodes.
                 */
                // @ts-ignore
                class FireworkExplodeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Firework)
                    // @ts-ignore
                    isCancelled(): boolean
                    /**
                     * Set the cancelled state of this event. If the firework explosion is
                     * cancelled, the firework will still be removed, but no particles will be
                     * displayed.
                     * @param cancel whether to cancel or not.
                     */
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Firework
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
