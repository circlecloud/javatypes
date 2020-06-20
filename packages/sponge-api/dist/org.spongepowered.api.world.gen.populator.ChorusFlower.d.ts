declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which will chorus flowers as in the end.
                         */
                        // @ts-ignore
                        interface ChorusFlower extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link ChorusFlower} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.ChorusFlower.Builder
                            /**
                             * Gets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p> This is used to prevent the islands from generating around the ender
                             * dragon fight area. </p>
                             * @return The radius
                             */
                            // @ts-ignore
                            getExclusionRadius(): int
                            /**
                             * Sets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p> This must be a positive value or zero. </p>
                             * @param radius The exclusion radius
                             */
                            // @ts-ignore
                            setExclusionRadius(radius: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
