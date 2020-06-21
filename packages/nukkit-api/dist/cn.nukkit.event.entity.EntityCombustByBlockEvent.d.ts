declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: Box
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityCombustByBlockEvent extends cn.nukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: cn.nukkit.block.Block, combustee: cn.nukkit.entity.Entity, duration: number /*int*/)
                    // @ts-ignore
                    readonly combuster: cn.nukkit.block.Block
                    // @ts-ignore
                    public getCombuster(): cn.nukkit.block.Block
                }
            }
        }
    }
}
