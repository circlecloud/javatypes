declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which spawns desert wells. The wells will be created
                         * according to the spawn probability of {@link #getSpawnProbability} and if the
                         * spawn conditions are met (that the block its spawning on is sand).
                         */
                        // @ts-ignore
                        interface DesertWell extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link DesertWell} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.DesertWell.Builder
                            /**
                             * Gets the probability of a desert well spawning.
                             * @return The spawn chance of a well
                             */
                            // @ts-ignore
                            getSpawnProbability(): number /*double*/
                            /**
                             * Sets the probability of a desert well spawning.
                             * @param p The new spawn probability
                             */
                            // @ts-ignore
                            setSpawnProbability(p: number /*double*/): void
                            /**
                             * Gets the {@link PopulatorObject} representing the well.
                             * @return The populator object
                             */
                            // @ts-ignore
                            getWellObject(): org.spongepowered.api.world.gen.PopulatorObject
                            /**
                             * Sets the {@link PopulatorObject} representing the well.
                             * @param obj The new populator object
                             */
                            // @ts-ignore
                            setWellObject(obj: org.spongepowered.api.world.gen.PopulatorObject): void
                        }
                    }
                }
            }
        }
    }
}
