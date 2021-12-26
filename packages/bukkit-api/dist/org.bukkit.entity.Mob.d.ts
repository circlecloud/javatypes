declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Mob. Mobs are living entities with simple AI.
             */
            // @ts-ignore
            interface Mob extends org.bukkit.entity.LivingEntity, org.bukkit.loot.Lootable {
                /**
                 * Instructs this Mob to set the specified LivingEntity as its target.
                 * <p>
                 * Hostile creatures may attack their target, and friendly creatures may
                 * follow their target.
                 * @param target New LivingEntity to target, or null to clear the target
                 */
                // @ts-ignore
                setTarget(target: org.bukkit.entity.LivingEntity): void
                /**
                 * Gets the current target of this Mob
                 * @return Current target of this creature, or null if none exists
                 */
                // @ts-ignore
                getTarget(): org.bukkit.entity.LivingEntity
                /**
                 * Sets whether this mob is aware of its surroundings.
                 * Unaware mobs will still move if pushed, attacked, etc. but will not move
                 * or perform any actions on their own. Unaware mobs may also have other
                 * unspecified behaviours disabled, such as drowning.
                 * @param aware whether the mob is aware
                 */
                // @ts-ignore
                setAware(aware: boolean): void
                /**
                 * Gets whether this mob is aware of its surroundings.
                 * Unaware mobs will still move if pushed, attacked, etc. but will not move
                 * or perform any actions on their own. Unaware mobs may also have other
                 * unspecified behaviours disabled, such as drowning.
                 * @return whether the mob is aware
                 */
                // @ts-ignore
                isAware(): boolean
            }
        }
    }
}
