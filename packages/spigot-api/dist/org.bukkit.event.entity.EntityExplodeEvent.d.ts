declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity explodes
                 */
                // @ts-ignore
                class EntityExplodeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, location: org.bukkit.Location, blocks: Array<org.bukkit.block.Block>, yield: number /*float*/)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Returns the list of blocks that would have been removed or were removed
                     * from the explosion event.
                     * @return All blown-up blocks
                     */
                    // @ts-ignore
                    blockList(): java.util.List<org.bukkit.block.Block>
                    /**
                     * Returns the location where the explosion happened.
                     * <p>
                     * It is not possible to get this value from the Entity as the Entity no
                     * longer exists in the world.
                     * @return The location of the explosion
                     */
                    // @ts-ignore
                    getLocation(): org.bukkit.Location
                    /**
                     * Returns the percentage of blocks to drop from this explosion
                     * @return The yield.
                     */
                    // @ts-ignore
                    getYield(): float
                    /**
                     * Sets the percentage of blocks to drop from this explosion
                     * @param yield The new yield percentage
                     */
                    // @ts-ignore
                    setYield(yield: number /*float*/): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
