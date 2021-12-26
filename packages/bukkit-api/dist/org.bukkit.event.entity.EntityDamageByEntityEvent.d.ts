declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity is damaged by an entity
                 */
                // @ts-ignore
                class EntityDamageByEntityEvent extends org.bukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: org.bukkit.entity.Entity, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*double*/)
                    // @ts-ignore
                    constructor(damager: org.bukkit.entity.Entity, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map<org.bukkit.event.entity.EntityDamageEvent.DamageModifier, java.lang.Double | number>, modifierFunctions: java.util.Map<org.bukkit.event.entity.EntityDamageEvent.DamageModifier, any>)
                    /**
                     * Returns the entity that damaged the defender.
                     * @return Entity that damaged the defender.
                     */
                    // @ts-ignore
                    public getDamager(): org.bukkit.entity.Entity
                }
            }
        }
    }
}
