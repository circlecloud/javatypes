declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Firework extends org.bukkit.entity.Projectile {
                /**
                 * Get a copy of the fireworks meta
                 * @return A copy of the current Firework meta
                 */
                // @ts-ignore
                getFireworkMeta(): org.bukkit.inventory.meta.FireworkMeta
                /**
                 * Apply the provided meta to the fireworks
                 * @param meta The FireworkMeta to apply
                 */
                // @ts-ignore
                setFireworkMeta(meta: org.bukkit.inventory.meta.FireworkMeta): void
                /**
                 * Cause this firework to explode at earliest opportunity, as if it has no
                 * remaining fuse.
                 */
                // @ts-ignore
                detonate(): void
                /**
                 * Gets if the firework was shot at an angle (i.e. from a crossbow).
                 * A firework which was not shot at an angle will fly straight upwards.
                 * @return shot at angle status
                 */
                // @ts-ignore
                isShotAtAngle(): boolean
                /**
                 * Sets if the firework was shot at an angle (i.e. from a crossbow).
                 * A firework which was not shot at an angle will fly straight upwards.
                 * @param shotAtAngle the new shotAtAngle
                 */
                // @ts-ignore
                setShotAtAngle(shotAtAngle: boolean): void
            }
        }
    }
}
