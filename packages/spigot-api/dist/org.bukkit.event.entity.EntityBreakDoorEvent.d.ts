declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an {@link Entity} breaks a door
                 * <p>
                 * Cancelling the event will cause the event to be delayed
                 */
                // @ts-ignore
                class EntityBreakDoorEvent extends org.bukkit.event.entity.EntityChangeBlockEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, targetBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.LivingEntity
                }
            }
        }
    }
}
