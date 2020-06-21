declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: Box
                 * Nukkit Project
                 * <p>
                 * Called when a entity decides to explode
                 */
                // @ts-ignore
                class ExplosionPrimeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, force: number /*double*/)
                    // @ts-ignore
                    force: number /*double*/
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getForce(): number /*double*/
                    // @ts-ignore
                    public setForce(force: number /*double*/): void
                    // @ts-ignore
                    public isBlockBreaking(): boolean
                    // @ts-ignore
                    public setBlockBreaking(affectsBlocks: boolean): void
                }
            }
        }
    }
}
