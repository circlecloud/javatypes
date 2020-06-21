declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a bat attempts to sleep or wake up from its slumber.
                 * <p>
                 * If a Bat Toggle Sleep event is cancelled, the Bat will not toggle its sleep
                 * state.
                 */
                // @ts-ignore
                class BatToggleSleepEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Bat, awake: boolean)
                    /**
                     * Get whether or not the bat is attempting to awaken.
                     * @return true if trying to awaken, false otherwise
                     */
                    // @ts-ignore
                    public isAwake(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
