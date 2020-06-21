declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityDamageByEntityEvent extends cn.nukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*float*/)
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map<cn.nukkit.event.entity.EntityDamageEvent.DamageModifier, java.lang.Float | number>)
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*float*/, knockBack: number /*float*/)
                    // @ts-ignore
                    constructor(damager: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map<cn.nukkit.event.entity.EntityDamageEvent.DamageModifier, java.lang.Float | number>, knockBack: number /*float*/)
                    // @ts-ignore
                    addAttackerModifiers(damager: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public getDamager(): cn.nukkit.entity.Entity
                    // @ts-ignore
                    public getKnockBack(): number /*float*/
                    // @ts-ignore
                    public setKnockBack(knockBack: number /*float*/): void
                }
            }
        }
    }
}
