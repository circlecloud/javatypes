declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a villager NPC
             */
            // @ts-ignore
            interface Villager extends org.bukkit.entity.AbstractVillager {
                /**
                 * Gets the current profession of this villager.
                 * @return Current profession.
                 */
                // @ts-ignore
                getProfession(): org.bukkit.entity.Villager.Profession
                /**
                 * Sets the new profession of this villager.
                 * @param profession New profession.
                 */
                // @ts-ignore
                setProfession(profession: org.bukkit.entity.Villager.Profession): void
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
                 * Gets the level of this villager.
                 * A villager with a level of 1 and no experience is liable to lose its
                 * profession.
                 * @return this villager's level
                 */
                // @ts-ignore
                getVillagerLevel(): number /*int*/
                /**
                 * Sets the level of this villager.
                 * A villager with a level of 1 and no experience is liable to lose its
                 * profession.
                 * @param level the new level
                 * @throws IllegalArgumentException if level not between [1, 5]
                 */
                // @ts-ignore
                setVillagerLevel(level: number /*int*/): void
                /**
                 * Gets the trading experience of this villager.
                 * @return trading experience
                 */
                // @ts-ignore
                getVillagerExperience(): number /*int*/
                /**
                 * Sets the trading experience of this villager.
                 * @param experience new experience
                 * @throws IllegalArgumentException if experience &lt; 0
                 */
                // @ts-ignore
                setVillagerExperience(experience: number /*int*/): void
                /**
                 * Attempts to make this villager sleep at the given location.
                 * <br>
                 * The location must be in the current world and have a bed placed at the
                 * location. The villager will put its head on the specified block while
                 * sleeping.
                 * @param location the location of the bed
                 * @return whether the sleep was successful
                 */
                // @ts-ignore
                sleep(location: org.bukkit.Location): boolean
                /**
                 * Causes this villager to wake up if he's currently sleeping.
                 * @throws IllegalStateException if not sleeping
                 */
                // @ts-ignore
                wakeup(): void
            }
        }
    }
}
