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
                    constructor(entity: org.bukkit.entity.LivingEntity, drops: Array<org.bukkit.inventory.ItemStack>)
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.LivingEntity, drops: Array<org.bukkit.inventory.ItemStack>, droppedExp: number /*int*/)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     * @return Amount of EXP to drop.
                     */
                    // @ts-ignore
                    getDroppedExp(): int
                    /**
                     * Sets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     * @param exp Amount of EXP to drop.
                     */
                    // @ts-ignore
                    setDroppedExp(exp: number /*int*/): void
                    /**
                     * Gets all the items which will drop when the entity dies
                     * @return Items to drop when the entity dies
                     */
                    // @ts-ignore
                    getDrops(): java.util.List<org.bukkit.inventory.ItemStack>
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
