declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a Slime splits into smaller Slimes upon death
                 */
                // @ts-ignore
                class SlimeSplitEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(slime: org.bukkit.entity.Slime, count: number /*int*/)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Slime
                    /**
                     * Gets the amount of smaller slimes to spawn
                     * @return the amount of slimes to spawn
                     */
                    // @ts-ignore
                    getCount(): int
                    /**
                     * Sets how many smaller slimes will spawn on the split
                     * @param count the amount of slimes to spawn
                     */
                    // @ts-ignore
                    setCount(count: number /*int*/): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
