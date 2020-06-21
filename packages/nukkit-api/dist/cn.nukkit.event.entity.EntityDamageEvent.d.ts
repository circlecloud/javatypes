declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityDamageEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*float*/)
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map<cn.nukkit.event.entity.EntityDamageEvent.DamageModifier, java.lang.Float | number>)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getCause(): cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                    // @ts-ignore
                    public getOriginalDamage(): number /*float*/
                    // @ts-ignore
                    public getOriginalDamage(type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): number /*float*/
                    // @ts-ignore
                    public getDamage(): number /*float*/
                    // @ts-ignore
                    public getDamage(type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): number /*float*/
                    // @ts-ignore
                    public setDamage(damage: number /*float*/): void
                    // @ts-ignore
                    public setDamage(damage: number /*float*/, type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): void
                    // @ts-ignore
                    public isApplicable(type: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier): boolean
                    // @ts-ignore
                    public getFinalDamage(): number /*float*/
                    // @ts-ignore
                    public getAttackCooldown(): number /*int*/
                    // @ts-ignore
                    public setAttackCooldown(attackCooldown: number /*int*/): void
                    // @ts-ignore
                    public canBeReducedByArmor(): boolean
                }
            }
        }
    }
}
