declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                /**
                 * Represents a minecart that can have certain {@link
                 * org.bukkit.entity.Entity entities} as passengers. Normal passengers
                 * include all {@link org.bukkit.entity.LivingEntity living entities} with
                 * the exception of {@link org.bukkit.entity.IronGolem iron golems}.
                 * Non-player entities that meet normal passenger criteria automatically
                 * mount these minecarts when close enough.
                 */
                // @ts-ignore
                interface RideableMinecart extends org.bukkit.entity.Minecart {
                }
            }
        }
    }
}
