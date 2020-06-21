declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * A populator which generates fossils.
                         */
                        // @ts-ignore
                        interface Fossil extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Fossil} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Fossil.Builder
                            /**
                             * Gets the probability of a fossil being generated.
                             * @return The spawn probability
                             */
                            // @ts-ignore
                            getSpawnProbability(): number /*double*/
                            /**
                             * Sets the spawn probability, must be be between 0 and 1.
                             * @param chance The new spawn probability
                             */
                            // @ts-ignore
                            setSpawnProbability(chance: number /*double*/): void
                        }
                    }
                }
            }
        }
    }
}
