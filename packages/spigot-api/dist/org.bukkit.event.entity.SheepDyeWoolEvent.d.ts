declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a sheep's wool is dyed
                 */
                // @ts-ignore
                class SheepDyeWoolEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sheep: org.bukkit.entity.Sheep, color: org.bukkit.DyeColor)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Sheep
                    /**
                     * Gets the DyeColor the sheep is being dyed
                     * @return the DyeColor the sheep is being dyed
                     */
                    // @ts-ignore
                    getColor(): org.bukkit.DyeColor
                    /**
                     * Sets the DyeColor the sheep is being dyed
                     * @param color the DyeColor the sheep will be dyed
                     */
                    // @ts-ignore
                    setColor(color: org.bukkit.DyeColor): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
