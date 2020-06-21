declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityDamageByBlockEvent extends cn.nukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: cn.nukkit.block.Block, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*float*/)
                    // @ts-ignore
                    public getDamager(): cn.nukkit.block.Block
                }
            }
        }
    }
}
