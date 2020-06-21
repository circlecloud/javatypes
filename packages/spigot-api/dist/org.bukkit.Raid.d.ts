declare namespace org {
    namespace bukkit {
        /**
         * Represents a raid event.
         */
        // @ts-ignore
        interface Raid {
            /**
             * Get whether this raid started.
             * @return whether raid is started
             */
            // @ts-ignore
            isStarted(): boolean
            /**
             * Gets the amount of ticks this raid has existed.
             * @return active ticks
             */
            // @ts-ignore
            getActiveTicks(): number /*long*/
            /**
             * Gets the Bad Omen level of this raid.
             * @return Bad Omen level (between 0 and 5)
             */
            // @ts-ignore
            getBadOmenLevel(): number /*int*/
            /**
             * Sets the Bad Omen level.
             * <br>
             * If the level is higher than 1, there will be an additional wave that as
             * strong as the final wave.
             * @param badOmenLevel new Bad Omen level (from 0-5)
             * @throws IllegalArgumentException if invalid Bad Omen level
             */
            // @ts-ignore
            setBadOmenLevel(badOmenLevel: number /*int*/): void
            /**
             * Gets the center location where the raid occurs.
             * @return location
             */
            // @ts-ignore
            getLocation(): org.bukkit.Location
            /**
             * Gets the current status of the raid.
             * <br>
             * Do not use this method to check if the raid has been started, call
             * {@link #isStarted()} instead.
             * @return Raids status
             */
            // @ts-ignore
            getStatus(): org.bukkit.Raid.RaidStatus
            /**
             * Gets the number of raider groups which have spawned.
             * @return total spawned groups
             */
            // @ts-ignore
            getSpawnedGroups(): number /*int*/
            /**
             * Gets the number of raider groups which would spawn.
             * <br>
             * This also includes the group which spawns in the additional wave (if
             * present).
             * @return total groups
             */
            // @ts-ignore
            getTotalGroups(): number /*int*/
            /**
             * Gets the number of waves in this raid (exclude the additional wave).
             * @return number of waves
             */
            // @ts-ignore
            getTotalWaves(): number /*int*/
            /**
             * Gets the sum of all raider's health.
             * @return total raiders health
             */
            // @ts-ignore
            getTotalHealth(): number /*float*/
            /**
             * Get the UUID of all heroes in this raid.
             * @return a set of unique ids
             */
            // @ts-ignore
            getHeroes(): Array<java.util.UUID>
            /**
             * Gets all remaining {@link Raider} in the present wave.
             * @return a list of current raiders
             */
            // @ts-ignore
            getRaiders(): Array<org.bukkit.entity.Raider>
        }
    }
}
