declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Zombie.
             */
            // @ts-ignore
            interface Zombie extends org.bukkit.entity.Monster {
                /**
                 * Gets whether the zombie is a baby
                 * @return Whether the zombie is a baby
                 */
                // @ts-ignore
                isBaby(): boolean
                /**
                 * Sets whether the zombie is a baby
                 * @param flag Whether the zombie is a baby
                 */
                // @ts-ignore
                setBaby(flag: boolean): void
                /**
                 * Gets whether the zombie is a villager
                 * @return Whether the zombie is a villager
                 * @deprecated check if instanceof {#link ZombieVillager}.
                 */
                // @ts-ignore
                isVillager(): boolean
                /**
                 * @param flag flag
                 * @deprecated must spawn {#link ZombieVillager}.
                 */
                // @ts-ignore
                setVillager(flag: boolean): void
                /**
                 * @param profession profession
                 * @see ZombieVillager#getVillagerProfession()
                 */
                // @ts-ignore
                setVillagerProfession(profession: org.bukkit.entity.Villager.Profession): void
                /**
                 * @return profession
                 * @see ZombieVillager#getVillagerProfession()
                 */
                // @ts-ignore
                getVillagerProfession(): org.bukkit.entity.Villager.Profession
                /**
                 * Get if this entity is in the process of converting to a Drowned as a
                 * result of being underwater.
                 * @return conversion status
                 */
                // @ts-ignore
                isConverting(): boolean
                /**
                 * Gets the amount of ticks until this entity will be converted to a Drowned
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted.
                 * @return conversion time
                 * @throws IllegalStateException if {#link #isConverting()} is false.
                 */
                // @ts-ignore
                getConversionTime(): number /*int*/
                /**
                 * Sets the amount of ticks until this entity will be converted to a Drowned
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 * @param time new conversion time
                 */
                // @ts-ignore
                setConversionTime(time: number /*int*/): void
            }
        }
    }
}
