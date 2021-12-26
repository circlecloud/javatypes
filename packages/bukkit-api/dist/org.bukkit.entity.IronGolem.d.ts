declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * An iron Golem that protects Villages.
             */
            // @ts-ignore
            interface IronGolem extends org.bukkit.entity.Golem {
                /**
                 * Gets whether this iron golem was built by a player.
                 * @return Whether this iron golem was built by a player
                 */
                // @ts-ignore
                isPlayerCreated(): boolean
                /**
                 * Sets whether this iron golem was built by a player or not.
                 * @param playerCreated true if you want to set the iron golem as being
                 *      player created, false if you want it to be a natural village golem.
                 */
                // @ts-ignore
                setPlayerCreated(playerCreated: boolean): void
            }
        }
    }
}
