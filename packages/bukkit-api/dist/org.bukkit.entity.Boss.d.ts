declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents the Boss Entity.
             */
            // @ts-ignore
            interface Boss extends org.bukkit.entity.Entity {
                /**
                 * Returns the {@link BossBar} of the {@link Boss}
                 * @return the {#link BossBar} of the entity
                 */
                // @ts-ignore
                getBossBar(): org.bukkit.boss.BossBar
            }
        }
    }
}
