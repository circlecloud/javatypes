declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ShulkerBullet extends org.bukkit.entity.Projectile {
                /**
                 * Retrieve the target of this bullet.
                 * @return the targeted entity
                 */
                // @ts-ignore
                getTarget(): org.bukkit.entity.Entity
                /**
                 * Sets the target of this bullet
                 * @param target the entity to target
                 */
                // @ts-ignore
                setTarget(target: org.bukkit.entity.Entity): void
            }
        }
    }
}
