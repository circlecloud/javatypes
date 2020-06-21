declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a block causes an entity to combust.
                 */
                // @ts-ignore
                class EntityCombustByBlockEvent extends org.bukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: org.bukkit.block.Block, combustee: org.bukkit.entity.Entity, duration: number /*int*/)
                    /**
                     * The combuster can be lava or a block that is on fire.
                     * <p>
                     * WARNING: block may be null.
                     * @return the Block that set the combustee alight.
                     */
                    // @ts-ignore
                    public getCombuster(): org.bukkit.block.Block
                }
            }
        }
    }
}
