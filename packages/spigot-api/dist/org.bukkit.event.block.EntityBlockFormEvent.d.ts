declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block is formed by entities.
                 * <p>
                 * Examples:
                 * <ul>
                 * <li>Snow formed by a {@link org.bukkit.entity.Snowman}.
                 * <li>Frosted Ice formed by the Frost Walker enchantment.
                 * </ul>
                 */
                // @ts-ignore
                class EntityBlockFormEvent extends org.bukkit.event.block.BlockFormEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, block: org.bukkit.block.Block, blockstate: org.bukkit.block.BlockState)
                    /**
                     * Get the entity that formed the block.
                     * @return Entity involved in event
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity
                }
            }
        }
    }
}
