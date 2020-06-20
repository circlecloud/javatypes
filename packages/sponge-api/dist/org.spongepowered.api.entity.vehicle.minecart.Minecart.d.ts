declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        /**
                         * Represents a Minecart entity.
                         */
                        // @ts-ignore
                        interface Minecart extends org.spongepowered.api.entity.Entity {
                            /**
                             * Gets whether or not the minecart is currently on a valid rail block.
                             * @return If the cart is on a rail
                             */
                            // @ts-ignore
                            isOnRail(): boolean
                            /**
                             * Gets the absolute maximum speed that this cart is allowed to travel at.
                             * <p>The default value is 0.4.</p>
                             * @return The maximum speed
                             */
                            // @ts-ignore
                            getSwiftness(): double
                            /**
                             * Sets the absolute maximum speed that this cart is allowed to travel at.
                             * <p>The default value is 0.4.</p>
                             * @param swiftness The new maximum speed
                             */
                            // @ts-ignore
                            setSwiftness(swiftness: number /*double*/): void
                            /**
                             * Gets the maximum speed that this cart is allowed to travel at the instant
                             * this method is called.
                             * <p>This differs from {@link Minecart#getSwiftness()} in that its value is
                             * affected by the block/rail beneath the cart. However, it is still
                             * impacted and limited by the cart's swiftness.</p>
                             * @return The maximum speed at which the minecart may travel at the instant
                             *      this method is called
                             */
                            // @ts-ignore
                            getPotentialMaxSpeed(): double
                            /**
                             * Gets whether or not the minecart slows down faster without a passenger.
                             * @return If the cart slows when empty
                             */
                            // @ts-ignore
                            doesSlowWhenEmpty(): boolean
                            /**
                             * Sets whether or not the minecart slows down faster without a passenger.
                             * @param slowWhenEmpty If the cart should slow when empty
                             */
                            // @ts-ignore
                            setSlowWhenEmpty(slowWhenEmpty: boolean): void
                            /**
                             * Gets the velocity modifier applied when the minecart is airborne.
                             * @return Airborne velocity modifier
                             */
                            // @ts-ignore
                            getAirborneVelocityMod(): Vector3d
                            /**
                             * Sets the velocity modifier applied when the minecart is airborne.
                             * @param airborneVelocityMod The new airborne velocity modifier
                             */
                            // @ts-ignore
                            setAirborneVelocityMod(airborneVelocityMod: Vector3d): void
                            /**
                             * Gets the velocity modifier applied when the minecart is not on rails.
                             * @return Derailed velocity modifier
                             */
                            // @ts-ignore
                            getDerailedVelocityMod(): Vector3d
                            /**
                             * Sets the velocity modifier applied when the minecart is not on rails.
                             * @param derailedVelocityMod The new derailed velocity modifier
                             */
                            // @ts-ignore
                            setDerailedVelocityMod(derailedVelocityMod: Vector3d): void
                        }
                    }
                }
            }
        }
    }
}
