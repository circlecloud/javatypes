declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown whenever a LivingEntity dies
                 */
                // @ts-ignore
                class EntityDeathEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, drops: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>)
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.LivingEntity, drops: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>, droppedExp: number /*int*/)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     * @return Amount of EXP to drop.
                     */
                    // @ts-ignore
                    public getDroppedExp(): number /*int*/
                    /**
                     * Sets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     * @param exp Amount of EXP to drop.
                     */
                    // @ts-ignore
                    public setDroppedExp(exp: number /*int*/): void
                    /**
                     * Gets all the items which will drop when the entity dies
                     * @return Items to drop when the entity dies
                     */
                    // @ts-ignore
                    public getDrops(): Array<org.bukkit.inventory.ItemStack>
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
