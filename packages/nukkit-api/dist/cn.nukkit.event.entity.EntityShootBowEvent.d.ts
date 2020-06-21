declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: Box
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityShootBowEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(shooter: cn.nukkit.entity.EntityLiving, bow: cn.nukkit.item.Item, projectile: cn.nukkit.entity.projectile.EntityProjectile, force: number /*double*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.EntityLiving
                    // @ts-ignore
                    public getBow(): cn.nukkit.item.Item
                    // @ts-ignore
                    public getProjectile(): cn.nukkit.entity.projectile.EntityProjectile
                    // @ts-ignore
                    public setProjectile(projectile: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public getForce(): number /*double*/
                    // @ts-ignore
                    public setForce(force: number /*double*/): void
                }
            }
        }
    }
}
