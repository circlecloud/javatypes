declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface OfflinePlayer extends org.bukkit.permissions.ServerOperator, org.bukkit.entity.AnimalTamer, org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Checks if this player is currently online
             * @return true if they are online
             */
            // @ts-ignore
            isOnline(): boolean
            /**
             * Returns the name of this player
             * <p>
             * Names are no longer unique past a single game session. For persistent storage
             * it is recommended that you use {@link #getUniqueId()} instead.
             * @return Player name or null if we have not seen a name for this player yet
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Returns the UUID of this player
             * @return Player UUID
             */
            // @ts-ignore
            getUniqueId(): java.util.UUID
            /**
             * Checks if this player is banned or not
             * @return true if banned, otherwise false
             */
            // @ts-ignore
            isBanned(): boolean
            /**
             * Checks if this player is whitelisted or not
             * @return true if whitelisted
             */
            // @ts-ignore
            isWhitelisted(): boolean
            /**
             * Sets if this player is whitelisted or not
             * @param value true if whitelisted
             */
            // @ts-ignore
            setWhitelisted(value: boolean): void
            /**
             * Gets a {@link Player} object that this represents, if there is one
             * <p>
             * If the player is online, this will return that player. Otherwise,
             * it will return null.
             * @return Online player
             */
            // @ts-ignore
            getPlayer(): org.bukkit.entity.Player
            /**
             * Gets the first date and time that this player was witnessed on this
             * server.
             * <p>
             * If the player has never played before, this will return 0. Otherwise,
             * it will be the amount of milliseconds since midnight, January 1, 1970
             * UTC.
             * @return Date of first log-in for this player, or 0
             */
            // @ts-ignore
            getFirstPlayed(): long
            /**
             * Gets the last date and time that this player was witnessed on this
             * server.
             * <p>
             * If the player has never played before, this will return 0. Otherwise,
             * it will be the amount of milliseconds since midnight, January 1, 1970
             * UTC.
             * @return Date of last log-in for this player, or 0
             */
            // @ts-ignore
            getLastPlayed(): long
            /**
             * Checks if this player has played on this server before.
             * @return True if the player has played before, otherwise false
             */
            // @ts-ignore
            hasPlayedBefore(): boolean
            /**
             * Gets the Location where the player will spawn at their bed, null if
             * they have not slept in one or their current bed spawn is invalid.
             * @return Bed Spawn Location if bed exists, otherwise null.
             */
            // @ts-ignore
            getBedSpawnLocation(): org.bukkit.Location
            /**
             * Increments the given statistic for this player.
             * <p>
             * This is equivalent to the following code:
             * <code>incrementStatistic(Statistic, 1)</code>
             * @param statistic Statistic to increment
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if the statistic requires an
             *      additional parameter
             */
            // @ts-ignore
            incrementStatistic(statistic: org.bukkit.Statistic): void
            /**
             * Decrements the given statistic for this player.
             * <p>
             * This is equivalent to the following code:
             * <code>decrementStatistic(Statistic, 1)</code>
             * @param statistic Statistic to decrement
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if the statistic requires an
             *      additional parameter
             */
            // @ts-ignore
            decrementStatistic(statistic: org.bukkit.Statistic): void
            /**
             * Increments the given statistic for this player.
             * @param statistic Statistic to increment
             * @param amount Amount to increment this statistic by
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if amount is negative
             * @throws IllegalArgumentException if the statistic requires an
             *      additional parameter
             */
            // @ts-ignore
            incrementStatistic(statistic: org.bukkit.Statistic, amount: number /*int*/): void
            /**
             * Decrements the given statistic for this player.
             * @param statistic Statistic to decrement
             * @param amount Amount to decrement this statistic by
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if amount is negative
             * @throws IllegalArgumentException if the statistic requires an
             *      additional parameter
             */
            // @ts-ignore
            decrementStatistic(statistic: org.bukkit.Statistic, amount: number /*int*/): void
            /**
             * Sets the given statistic for this player.
             * @param statistic Statistic to set
             * @param newValue The value to set this statistic to
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if newValue is negative
             * @throws IllegalArgumentException if the statistic requires an
             *      additional parameter
             */
            // @ts-ignore
            setStatistic(statistic: org.bukkit.Statistic, newValue: number /*int*/): void
            /**
             * Gets the value of the given statistic for this player.
             * @param statistic Statistic to check
             * @return the value of the given statistic
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if the statistic requires an
             *      additional parameter
             */
            // @ts-ignore
            getStatistic(statistic: org.bukkit.Statistic): int
            /**
             * Increments the given statistic for this player for the given material.
             * <p>
             * This is equivalent to the following code:
             * <code>incrementStatistic(Statistic, Material, 1)</code>
             * @param statistic Statistic to increment
             * @param material Material to offset the statistic with
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if material is null
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            incrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material): void
            /**
             * Decrements the given statistic for this player for the given material.
             * <p>
             * This is equivalent to the following code:
             * <code>decrementStatistic(Statistic, Material, 1)</code>
             * @param statistic Statistic to decrement
             * @param material Material to offset the statistic with
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if material is null
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            decrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material): void
            /**
             * Gets the value of the given statistic for this player.
             * @param statistic Statistic to check
             * @param material Material offset of the statistic
             * @return the value of the given statistic
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if material is null
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            getStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material): int
            /**
             * Increments the given statistic for this player for the given material.
             * @param statistic Statistic to increment
             * @param material Material to offset the statistic with
             * @param amount Amount to increment this statistic by
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if material is null
             * @throws IllegalArgumentException if amount is negative
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            incrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material, amount: number /*int*/): void
            /**
             * Decrements the given statistic for this player for the given material.
             * @param statistic Statistic to decrement
             * @param material Material to offset the statistic with
             * @param amount Amount to decrement this statistic by
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if material is null
             * @throws IllegalArgumentException if amount is negative
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            decrementStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material, amount: number /*int*/): void
            /**
             * Sets the given statistic for this player for the given material.
             * @param statistic Statistic to set
             * @param material Material to offset the statistic with
             * @param newValue The value to set this statistic to
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if material is null
             * @throws IllegalArgumentException if newValue is negative
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            setStatistic(statistic: org.bukkit.Statistic, material: org.bukkit.Material, newValue: number /*int*/): void
            /**
             * Increments the given statistic for this player for the given entity.
             * <p>
             * This is equivalent to the following code:
             * <code>incrementStatistic(Statistic, EntityType, 1)</code>
             * @param statistic Statistic to increment
             * @param entityType EntityType to offset the statistic with
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if entityType is null
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            incrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType): void
            /**
             * Decrements the given statistic for this player for the given entity.
             * <p>
             * This is equivalent to the following code:
             * <code>decrementStatistic(Statistic, EntityType, 1)</code>
             * @param statistic Statistic to decrement
             * @param entityType EntityType to offset the statistic with
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if entityType is null
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            decrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType): void
            /**
             * Gets the value of the given statistic for this player.
             * @param statistic Statistic to check
             * @param entityType EntityType offset of the statistic
             * @return the value of the given statistic
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if entityType is null
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            getStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType): int
            /**
             * Increments the given statistic for this player for the given entity.
             * @param statistic Statistic to increment
             * @param entityType EntityType to offset the statistic with
             * @param amount Amount to increment this statistic by
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if entityType is null
             * @throws IllegalArgumentException if amount is negative
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            incrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType, amount: number /*int*/): void
            /**
             * Decrements the given statistic for this player for the given entity.
             * @param statistic Statistic to decrement
             * @param entityType EntityType to offset the statistic with
             * @param amount Amount to decrement this statistic by
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if entityType is null
             * @throws IllegalArgumentException if amount is negative
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            decrementStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType, amount: number /*int*/): void
            /**
             * Sets the given statistic for this player for the given entity.
             * @param statistic Statistic to set
             * @param entityType EntityType to offset the statistic with
             * @param newValue The value to set this statistic to
             * @throws IllegalArgumentException if statistic is null
             * @throws IllegalArgumentException if entityType is null
             * @throws IllegalArgumentException if newValue is negative
             * @throws IllegalArgumentException if the given parameter is not valid
             *      for the statistic
             */
            // @ts-ignore
            setStatistic(statistic: org.bukkit.Statistic, entityType: org.bukkit.entity.EntityType, newValue: number /*int*/): void
        }
    }
}
