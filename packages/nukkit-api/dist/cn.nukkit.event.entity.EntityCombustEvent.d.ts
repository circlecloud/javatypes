declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityCombustEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(combustee: cn.nukkit.entity.Entity, duration: number /*int*/)
                    // @ts-ignore
                    duration: number /*int*/
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getDuration(): number /*int*/
                    // @ts-ignore
                    public setDuration(duration: number /*int*/): void
                }
            }
        }
    }
}
