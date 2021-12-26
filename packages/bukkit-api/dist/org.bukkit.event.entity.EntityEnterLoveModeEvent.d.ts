declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity enters love mode.
                 * <br>
                 * This can be cancelled but the item will still be consumed that was used to
                 * make the entity enter into love mode.
                 */
                // @ts-ignore
                class EntityEnterLoveModeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(animalInLove: org.bukkit.entity.Animals, humanEntity: org.bukkit.entity.HumanEntity, ticksInLove: number /*int*/)
                    /**
                     * Gets the animal that is entering love mode.
                     * @return The animal that is entering love mode
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Animals
                    /**
                     * Gets the Human Entity that caused the animal to enter love mode.
                     * @return The Human entity that caused the animal to enter love mode, or
                     *  null if there wasn't one.
                     */
                    // @ts-ignore
                    public getHumanEntity(): org.bukkit.entity.HumanEntity
                    /**
                     * Gets the amount of ticks that the animal will fall in love for.
                     * @return The amount of ticks that the animal will fall in love for
                     */
                    // @ts-ignore
                    public getTicksInLove(): number /*int*/
                    /**
                     * Sets the amount of ticks that the animal will fall in love for.
                     * @param ticksInLove The amount of ticks that the animal will fall in love
                     *  for
                     */
                    // @ts-ignore
                    public setTicksInLove(ticksInLove: number /*int*/): void
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
