declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityCombustByEntityEvent extends cn.nukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: cn.nukkit.entity.Entity, combustee: cn.nukkit.entity.Entity, duration: number /*int*/)
                    // @ts-ignore
                    readonly combuster: cn.nukkit.entity.Entity
                    // @ts-ignore
                    public getCombuster(): cn.nukkit.entity.Entity
                }
            }
        }
    }
}
