declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an instance of a lightning strike. May or may not do damage.
             */
            // @ts-ignore
            interface LightningStrike extends org.bukkit.entity.Entity {
                /**
                 * Returns whether the strike is an effect that does no damage.
                 * @return whether the strike is an effect
                 */
                // @ts-ignore
                isEffect(): boolean
                // @ts-ignore
                spigot(): org.bukkit.entity.LightningStrike.Spigot
            }
        }
    }
}
