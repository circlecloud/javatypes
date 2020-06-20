declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places in a pseudo path of ice.
                         */
                        // @ts-ignore
                        interface IcePath extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link IcePath} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.IcePath.Builder
                            /**
                             * Gets the radius of the path to spawn.
                             * @return The path radius
                             */
                            // @ts-ignore
                            getRadius(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the radius of the path to spawn, cannot be negative.
                             * @param radius The new path radius
                             */
                            // @ts-ignore
                            setRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the radius of the path to spawn, cannot be negative.
                             * @param radius The new path radius
                             */
                            // @ts-ignore
                            setRadius(radius: number /*double*/): void
                            /**
                             * Gets the number of sections to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getSectionsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of sections to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param sections The new amount to spawn
                             */
                            // @ts-ignore
                            setSectionsPerChunk(sections: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of sections to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param sections The new amount to spawn
                             */
                            // @ts-ignore
                            setSectionsPerChunk(sections: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
