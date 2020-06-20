declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity is damaged by a block
                 */
                // @ts-ignore
                class EntityDamageByBlockEvent extends org.bukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: org.bukkit.block.Block, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*double*/)
                    // @ts-ignore
                    constructor(damager: org.bukkit.block.Block, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map<org.bukkit.event.entity.EntityDamageEvent.DamageModifier, java.lang.Double>, modifierFunctions: java.util.Map<org.bukkit.event.entity.EntityDamageEvent.DamageModifier, <any>>)
                    /**
                     * Returns the block that damaged the player.
                     * @return Block that damaged the player
                     */
                    // @ts-ignore
                    getDamager(): org.bukkit.block.Block
                }
            }
        }
    }
}
