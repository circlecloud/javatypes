declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when an equippable item is dispensed from a block and equipped on a
                 * nearby entity.
                 * <p>
                 * If a Block Dispense Armor event is cancelled, the equipment will not be
                 * equipped on the target entity.
                 */
                // @ts-ignore
                class BlockDispenseArmorEvent extends org.bukkit.event.block.BlockDispenseEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, dispensed: org.bukkit.inventory.ItemStack, target: org.bukkit.entity.LivingEntity)
                    /**
                     * Get the living entity on which the armor was dispensed.
                     * @return the target entity
                     */
                    // @ts-ignore
                    getTargetEntity(): org.bukkit.entity.LivingEntity
                }
            }
        }
    }
}
