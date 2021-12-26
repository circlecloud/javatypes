declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a bee hive.
             */
            // @ts-ignore
            interface Beehive extends org.bukkit.block.EntityBlockStorage<org.bukkit.entity.Bee> {
                /**
                 * Get the hive's flower location.
                 * @return flower location or null
                 */
                // @ts-ignore
                getFlower(): org.bukkit.Location
                /**
                 * Set the hive's flower location.
                 * @param location or null
                 */
                // @ts-ignore
                setFlower(location: org.bukkit.Location): void
                /**
                 * Check if the hive is sedated due to smoke from a nearby campfire.
                 * @return True if hive is sedated
                 */
                // @ts-ignore
                isSedated(): boolean
            }
        }
    }
}
