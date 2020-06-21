declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * Created on 15-10-27.
                 */
                // @ts-ignore
                class EntityExplosionPrimeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, force: number /*double*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getForce(): number /*double*/
                    // @ts-ignore
                    public setForce(force: number /*double*/): void
                    // @ts-ignore
                    public isBlockBreaking(): boolean
                    // @ts-ignore
                    public setBlockBreaking(blockBreaking: boolean): void
                }
            }
        }
    }
}
