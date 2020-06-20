declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Pig.
             */
            // @ts-ignore
            interface Pig extends org.bukkit.entity.Animals, org.bukkit.entity.Vehicle {
                /**
                 * Check if the pig has a saddle.
                 * @return if the pig has been saddled.
                 */
                // @ts-ignore
                hasSaddle(): boolean
                /**
                 * Sets if the pig has a saddle or not
                 * @param saddled set if the pig has a saddle or not.
                 */
                // @ts-ignore
                setSaddle(saddled: boolean): void
            }
        }
    }
}
