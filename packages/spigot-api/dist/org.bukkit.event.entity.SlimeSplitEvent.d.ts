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
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Slime
                    /**
                     * Gets the amount of smaller slimes to spawn
                     * @return the amount of slimes to spawn
                     */
                    // @ts-ignore
                    public getCount(): number /*int*/
                    /**
                     * Sets how many smaller slimes will spawn on the split
                     * @param count the amount of slimes to spawn
                     */
                    // @ts-ignore
                    public setCount(count: number /*int*/): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
