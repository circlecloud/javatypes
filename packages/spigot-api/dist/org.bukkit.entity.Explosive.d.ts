declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * A representation of an explosive entity
             */
            // @ts-ignore
            interface Explosive extends org.bukkit.entity.Entity {
                /**
                 * Set the radius affected by this explosive's explosion
                 * @param yield The explosive yield
                 */
                // @ts-ignore
                setYield(yield: number /*float*/): void
                /**
                 * Return the radius or yield of this explosive's explosion
                 * @return the radius of blocks affected
                 */
                // @ts-ignore
                getYield(): float
                /**
                 * Set whether or not this explosive's explosion causes fire
                 * @param isIncendiary Whether it should cause fire
                 */
                // @ts-ignore
                setIsIncendiary(isIncendiary: boolean): void
                /**
                 * Return whether or not this explosive creates a fire when exploding
                 * @return true if the explosive creates fire, false otherwise
                 */
                // @ts-ignore
                isIncendiary(): boolean
            }
        }
    }
}
