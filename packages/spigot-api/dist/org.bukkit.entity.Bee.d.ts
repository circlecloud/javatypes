declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Bee.
             */
            // @ts-ignore
            interface Bee extends org.bukkit.entity.Animals {
                /**
                 * Get the bee's hive location.
                 * @return hive location or null
                 */
                // @ts-ignore
                getHive(): org.bukkit.Location
                /**
                 * Set the bee's hive location.
                 * @param location or null
                 */
                // @ts-ignore
                setHive(location: org.bukkit.Location): void
                /**
                 * Get the bee's flower location.
                 * @return flower location or null
                 */
                // @ts-ignore
                getFlower(): org.bukkit.Location
                /**
                 * Set the bee's flower location.
                 * @param location or null
                 */
                // @ts-ignore
                setFlower(location: org.bukkit.Location): void
                /**
                 * Get if the bee has nectar.
                 * @return nectar
                 */
                // @ts-ignore
                hasNectar(): boolean
                /**
                 * Set if the bee has nectar.
                 * @param nectar whether the entity has nectar
                 */
                // @ts-ignore
                setHasNectar(nectar: boolean): void
                /**
                 * Get if the bee has stung.
                 * @return has stung
                 */
                // @ts-ignore
                hasStung(): boolean
                /**
                 * Set if the bee has stung.
                 * @param stung has stung
                 */
                // @ts-ignore
                setHasStung(stung: boolean): void
                /**
                 * Get the bee's anger level.
                 * @return anger level
                 */
                // @ts-ignore
                getAnger(): int
                /**
                 * Set the bee's new anger level.
                 * @param anger new anger
                 */
                // @ts-ignore
                setAnger(anger: number /*int*/): void
                /**
                 * Get the amount of ticks the bee cannot enter the hive for.
                 * @return Ticks the bee cannot enter a hive for
                 */
                // @ts-ignore
                getCannotEnterHiveTicks(): int
                /**
                 * Set the amount of ticks the bee cannot enter a hive for.
                 * @param ticks Ticks the bee cannot enter a hive for
                 */
                // @ts-ignore
                setCannotEnterHiveTicks(ticks: number /*int*/): void
            }
        }
    }
}
