declare namespace org {
    namespace bukkit {
        namespace projectiles {
            // @ts-ignore
            interface BlockProjectileSource extends org.bukkit.projectiles.ProjectileSource {
                /**
                 * Gets the block this projectile source belongs to.
                 * @return Block for the projectile source
                 */
                // @ts-ignore
                getBlock(): org.bukkit.block.Block
            }
        }
    }
}
