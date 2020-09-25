declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an arrow enters or exists an entity's body.
                 */
                // @ts-ignore
                class ArrowBodyCountChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, oldAmount: number /*int*/, newAmount: number /*int*/, isReset: boolean)
                    /**
                     * Whether the event was called because the entity was reset.
                     * @return was reset
                     */
                    // @ts-ignore
                    public isReset(): boolean
                    /**
                     * Gets the old amount of arrows in the entity's body.
                     * @return amount of arrows
                     */
                    // @ts-ignore
                    public getOldAmount(): number /*int*/
                    /**
                     * Get the new amount of arrows in the entity's body.
                     * @return amount of arrows
                     */
                    // @ts-ignore
                    public getNewAmount(): number /*int*/
                    /**
                     * Sets the final amount of arrows in the entity's body.
                     * @param newAmount amount of arrows
                     */
                    // @ts-ignore
                    public setNewAmount(newAmount: number /*int*/): void
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity
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
