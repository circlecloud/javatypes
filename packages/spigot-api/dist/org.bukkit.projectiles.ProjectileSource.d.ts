declare namespace org {
    namespace bukkit {
        namespace projectiles {
            /**
             * Represents a valid source of a projectile.
             */
            // @ts-ignore
            interface ProjectileSource {
                /**
                 * Launches a {@link Projectile} from the ProjectileSource.
                 * @param <T> a projectile subclass
                 * @param projectile class of the projectile to launch
                 * @return the launched projectile
                 */
                // @ts-ignore
                launchProjectile<T extends org.bukkit.entity.Projectile>(projectile: java.lang.Class<T>): T
                /**
                 * Launches a {@link Projectile} from the ProjectileSource with an
                 * initial velocity.
                 * @param <T> a projectile subclass
                 * @param projectile class of the projectile to launch
                 * @param velocity the velocity with which to launch
                 * @return the launched projectile
                 */
                // @ts-ignore
                launchProjectile<T extends org.bukkit.entity.Projectile>(projectile: java.lang.Class<T>, velocity: org.bukkit.util.Vector): T
            }
        }
    }
}
