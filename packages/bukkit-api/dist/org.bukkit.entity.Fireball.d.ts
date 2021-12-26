declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Fireball.
             */
            // @ts-ignore
            interface Fireball extends org.bukkit.entity.Projectile, org.bukkit.entity.Explosive {
                /**
                 * Fireballs fly straight and do not take setVelocity(...) well.
                 * @param direction the direction this fireball is flying toward
                 */
                // @ts-ignore
                setDirection(direction: org.bukkit.util.Vector): void
                /**
                 * Retrieve the direction this fireball is heading toward
                 * @return the direction
                 */
                // @ts-ignore
                getDirection(): org.bukkit.util.Vector
            }
        }
    }
}
