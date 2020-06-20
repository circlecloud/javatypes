declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a boat entity.
             */
            // @ts-ignore
            interface Boat extends org.bukkit.entity.Vehicle {
                /**
                 * Gets the wood type of the boat.
                 * @return the wood type
                 */
                // @ts-ignore
                getWoodType(): org.bukkit.TreeSpecies
                /**
                 * Sets the wood type of the boat.
                 * @param species the new wood type
                 */
                // @ts-ignore
                setWoodType(species: org.bukkit.TreeSpecies): void
                /**
                 * Gets the maximum speed of a boat. The speed is unrelated to the
                 * velocity.
                 * @return The max speed.
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                getMaxSpeed(): double
                /**
                 * Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D.
                 * @param speed The max speed.
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                setMaxSpeed(speed: number /*double*/): void
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. The default is 0.2.
                 * @return The rate of deceleration
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                getOccupiedDeceleration(): double
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. Setting this to a higher value allows for quicker acceleration.
                 * The default is 0.2.
                 * @param rate deceleration rate
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                setOccupiedDeceleration(rate: number /*double*/): void
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. The default is -1. Values below 0 indicate that no additional
                 * deceleration is imposed.
                 * @return The rate of deceleration
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                getUnoccupiedDeceleration(): double
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. Setting this to a higher value allows for quicker deceleration
                 * of boats when a player disembarks. The default is -1. Values below 0
                 * indicate that no additional deceleration is imposed.
                 * @param rate deceleration rate
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                setUnoccupiedDeceleration(rate: number /*double*/): void
                /**
                 * Get whether boats can work on land.
                 * @return whether boats can work on land
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                getWorkOnLand(): boolean
                /**
                 * Set whether boats can work on land.
                 * @param workOnLand whether boats can work on land
                 * @deprecated boats are complex and many of these methods do not work correctly across multiple versions.
                 */
                // @ts-ignore
                setWorkOnLand(workOnLand: boolean): void
            }
        }
    }
}
