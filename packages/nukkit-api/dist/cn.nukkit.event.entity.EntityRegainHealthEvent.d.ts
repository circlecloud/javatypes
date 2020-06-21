declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityRegainHealthEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, amount: number /*float*/, regainReason: number /*int*/)
                    // @ts-ignore
                    public static readonly CAUSE_REGEN: number /*int*/
                    // @ts-ignore
                    public static readonly CAUSE_EATING: number /*int*/
                    // @ts-ignore
                    public static readonly CAUSE_MAGIC: number /*int*/
                    // @ts-ignore
                    public static readonly CAUSE_CUSTOM: number /*int*/
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getAmount(): number /*float*/
                    // @ts-ignore
                    public setAmount(amount: number /*float*/): void
                    // @ts-ignore
                    public getRegainReason(): number /*int*/
                }
            }
        }
    }
}
