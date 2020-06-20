declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a {@link Zombie} which was once a {@link Villager}.
             */
            // @ts-ignore
            interface ZombieVillager extends org.bukkit.entity.Zombie {
                /**
                 * Sets the villager profession of this zombie.
                 */
                // @ts-ignore
                setVillagerProfession(profession: org.bukkit.entity.Villager.Profession): void
                /**
                 * Returns the villager profession of this zombie.
                 * @return the profession or null
                 */
                // @ts-ignore
                getVillagerProfession(): org.bukkit.entity.Villager.Profession
                /**
                 * Gets the current type of this villager.
                 * @return Current type.
                 */
                // @ts-ignore
                getVillagerType(): org.bukkit.entity.Villager.Type
                /**
                 * Sets the new type of this villager.
                 * @param type New type.
                 */
                // @ts-ignore
                setVillagerType(type: org.bukkit.entity.Villager.Type): void
                /**
                 * Get if this entity is in the process of converting to a Villager as a
                 * result of being cured.
                 * @return conversion status
                 */
                // @ts-ignore
                isConverting(): boolean
                /**
                 * Gets the amount of ticks until this entity will be converted to a
                 * Villager as a result of being cured.
                 * When this reaches 0, the entity will be converted.
                 * @return conversion time
                 * @throws IllegalStateException if {#link #isConverting()} is false.
                 */
                // @ts-ignore
                getConversionTime(): int
                /**
                 * Sets the amount of ticks until this entity will be converted to a
                 * Villager as a result of being cured.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 * @param time new conversion time
                 */
                // @ts-ignore
                setConversionTime(time: number /*int*/): void
                /**
                 * Gets the player who initiated the conversion.
                 * @return the player, or <code>null</code> if the player is unknown or the
                 *  entity isn't converting currently
                 */
                // @ts-ignore
                getConversionPlayer(): org.bukkit.OfflinePlayer
                /**
                 * Sets the player who initiated the conversion.
                 * <p>
                 * This has no effect if this entity isn't converting currently.
                 * @param conversionPlayer the player
                 */
                // @ts-ignore
                setConversionPlayer(conversionPlayer: org.bukkit.OfflinePlayer): void
            }
        }
    }
}
