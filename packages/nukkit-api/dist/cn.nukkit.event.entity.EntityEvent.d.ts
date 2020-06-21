declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class EntityEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    entity: cn.nukkit.entity.Entity
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity
                }
            }
        }
    }
}
