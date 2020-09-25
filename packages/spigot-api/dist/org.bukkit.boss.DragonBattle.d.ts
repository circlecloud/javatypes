declare namespace org {
    namespace bukkit {
        namespace boss {
            /**
             * Represents a dragon battle state for a world with an end environment.
             */
            // @ts-ignore
            interface DragonBattle {
                /**
                 * Get the {@link EnderDragon} active in this battle.
                 * Will return null if the dragon has been slain.
                 * @return the ender dragon. null if dead
                 */
                // @ts-ignore
                getEnderDragon(): org.bukkit.entity.EnderDragon
                /**
                 * Get the boss bar to be displayed for this dragon battle.
                 * @return the boss bar
                 */
                // @ts-ignore
                getBossBar(): org.bukkit.boss.BossBar
                /**
                 * Get the location of the end portal.
                 * This location will be at the center of the base (bottom) of the portal.
                 * @return the end portal location or null if not generated
                 */
                // @ts-ignore
                getEndPortalLocation(): org.bukkit.Location
                /**
                 * Generate the end portal.
                 * @param withPortals whether or not end portal blocks should be generated
                 * @return true if generated, false if already present
                 */
                // @ts-ignore
                generateEndPortal(withPortals: boolean): boolean
                /**
                 * Check whether or not the first dragon has been killed already.
                 * @return true if killed before, false otherwise
                 */
                // @ts-ignore
                hasBeenPreviouslyKilled(): boolean
                /**
                 * Initiate a respawn sequence to summon the dragon as though a player has
                 * placed 4 end crystals on the portal.
                 */
                // @ts-ignore
                initiateRespawn(): void
                /**
                 * Get this battle's current respawn phase.
                 * @return the current respawn phase.
                 */
                // @ts-ignore
                getRespawnPhase(): org.bukkit.boss.DragonBattle.RespawnPhase
                /**
                 * Set the dragon's respawn phase.
                 * This method will is unsuccessful if a dragon respawn is not in progress.
                 * @param phase the phase to set
                 * @return true if successful, false otherwise
                 * @see #initiateRespawn()
                 */
                // @ts-ignore
                setRespawnPhase(phase: org.bukkit.boss.DragonBattle.RespawnPhase): boolean
                /**
                 * Reset the crystals located on the obsidian pillars (remove their beam
                 * targets and invulnerability).
                 */
                // @ts-ignore
                resetCrystals(): void
            }
        }
    }
}
