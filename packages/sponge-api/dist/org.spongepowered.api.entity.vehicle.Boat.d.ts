declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    /**
                     * Represents a Boat entity.
                     */
                    // @ts-ignore
                    interface Boat extends org.spongepowered.api.entity.Entity {
                        /**
                         * Gets whether this boat is currently in water.
                         * @return If the boat is in water
                         */
                        // @ts-ignore
                        isInWater(): boolean
                        /**
                         * Gets the maximum speed that this boat is allowed to travel at.
                         * <p>The Default value is 0.4.</p>
                         * @return The maximum speed
                         */
                        // @ts-ignore
                        getMaxSpeed(): number /*double*/
                        /**
                         * Sets the maximum speed that this boat is allowed to travel at.
                         * <p>The Default value is 0.4.</p>
                         * @param maxSpeed The new max speed
                         */
                        // @ts-ignore
                        setMaxSpeed(maxSpeed: number /*double*/): void
                        /**
                         * Gets whether or not the boat is able to move freely on land.
                         * @return If the boat can move on land
                         */
                        // @ts-ignore
                        canMoveOnLand(): boolean
                        /**
                         * Gets whether or not the boat is able to move freely on land.
                         * @param moveOnLand If the boat can move on land
                         */
                        // @ts-ignore
                        setMoveOnLand(moveOnLand: boolean): void
                        /**
                         * Gets the rate at which occupied boats decelerate.
                         * @return The occupied deceleration rate
                         */
                        // @ts-ignore
                        getOccupiedDeceleration(): number /*double*/
                        /**
                         * Sets the rate at which occupied boats decelerate.
                         * @param occupiedDeceleration The new occupied deceleration rate
                         */
                        // @ts-ignore
                        setOccupiedDeceleration(occupiedDeceleration: number /*double*/): void
                        /**
                         * Gets the rate at which unoccupied boats decelerate.
                         * @return The unoccupied deceleration rate
                         */
                        // @ts-ignore
                        getUnoccupiedDeceleration(): number /*double*/
                        /**
                         * Sets the rate at which unoccupied boats decelerate.
                         * @param unoccupiedDeceleration The new unoccupied deceleration rate
                         */
                        // @ts-ignore
                        setUnoccupiedDeceleration(unoccupiedDeceleration: number /*double*/): void
                    }
                }
            }
        }
    }
}
