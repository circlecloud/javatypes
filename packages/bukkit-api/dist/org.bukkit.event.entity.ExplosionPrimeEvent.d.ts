declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity has made a decision to explode.
                 */
                // @ts-ignore
                class ExplosionPrimeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, radius: number /*float*/, fire: boolean)
                    // @ts-ignore
                    constructor(explosive: org.bukkit.entity.Explosive)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the radius of the explosion
                     * @return returns the radius of the explosion
                     */
                    // @ts-ignore
                    public getRadius(): number /*float*/
                    /**
                     * Sets the radius of the explosion
                     * @param radius the radius of the explosion
                     */
                    // @ts-ignore
                    public setRadius(radius: number /*float*/): void
                    /**
                     * Gets whether this explosion will create fire or not
                     * @return true if this explosion will create fire
                     */
                    // @ts-ignore
                    public getFire(): boolean
                    /**
                     * Sets whether this explosion will create fire or not
                     * @param fire true if you want this explosion to create fire
                     */
                    // @ts-ignore
                    public setFire(fire: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
