declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a vehicle entity.
             */
            // @ts-ignore
            interface Vehicle extends org.bukkit.entity.Entity {
                /**
                 * Gets the vehicle's velocity.
                 * @return velocity vector
                 */
                // @ts-ignore
                getVelocity(): org.bukkit.util.Vector
                /**
                 * Sets the vehicle's velocity.
                 * @param vel velocity vector
                 */
                // @ts-ignore
                setVelocity(vel: org.bukkit.util.Vector): void
            }
        }
    }
}
