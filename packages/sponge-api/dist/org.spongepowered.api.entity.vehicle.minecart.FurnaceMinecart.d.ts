declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        /**
                         * Represents a minecart with a furnace inside it.
                         */
                        // @ts-ignore
                        interface FurnaceMinecart extends org.spongepowered.api.entity.vehicle.minecart.Minecart {
                            /**
                             * Gets the current fuel time in ticks.
                             * <p>Usually, the fuel time will decay until reaching 0. At zero, the fuel
                             * minecart will decelerate to a stop.</p>
                             * @return The current fuel time in ticks
                             */
                            // @ts-ignore
                            getFuel(): int
                            /**
                             * Sets the fuel time in ticks.
                             * <p>Usually, the fuel time will decay until reaching 0. At zero, the fuel
                             * minecart will decelerate to a stop.</p>
                             * @param fuel The fuel time in ticks
                             */
                            // @ts-ignore
                            setFuel(fuel: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
