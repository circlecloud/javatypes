declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Endermite extends org.bukkit.entity.Monster {
                /**
                 * Gets whether this Endermite was spawned by a player.
                 * An Endermite spawned by a player will be attacked by nearby Enderman.
                 * @return player spawned status
                 */
                // @ts-ignore
                isPlayerSpawned(): boolean
                /**
                 * Sets whether this Endermite was spawned by a player.
                 * An Endermite spawned by a player will be attacked by nearby Enderman.
                 * @param playerSpawned player spawned status
                 */
                // @ts-ignore
                setPlayerSpawned(playerSpawned: boolean): void
            }
        }
    }
}
