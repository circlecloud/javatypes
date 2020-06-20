declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface RandomObject extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link RandomObject} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.RandomObject.Builder
                            /**
                             * Gets the number of fires to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getAttemptsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of fires to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setAttemptsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of fires to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setAttemptsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the height range that the object will be placed within.
                             * @return The height range
                             */
                            // @ts-ignore
                            getHeightRange(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height range that the object will be placed within.
                             * @param height The new height range
                             */
                            // @ts-ignore
                            setHeightRange(height: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Gets the {@link PopulatorObject} that this populator will attempt to
                             * place.
                             * @return The populator object
                             */
                            // @ts-ignore
                            getObject(): org.spongepowered.api.world.gen.PopulatorObject
                            /**
                             * Sets the {@link PopulatorObject} for this populator to attempt to place.
                             * @param obj The new populator object
                             */
                            // @ts-ignore
                            setObject(obj: org.spongepowered.api.world.gen.PopulatorObject): void
                            /**
                             * Gets the chance of spawning the object for each attempt. This chance is
                             * applied before the checks for if the placement is valid. This value must
                             * be between zero and one (inclusive) with a chance of zero representing no
                             * chance of the object being placed, and a chance of 1 representing a 100%
                             * chance of the object being placed.
                             * @return The spawn chance
                             */
                            // @ts-ignore
                            getSpawnChance(): double
                            /**
                             * Sets the chance of spawning the object for each attempt. This chance is
                             * applied before the checks for if the placement is valid. This value must
                             * be between zero and one (inclusive) with a chance of zero representing no
                             * chance of the object being placed, and a chance of 1 representing a 100%
                             * chance of the object being placed.
                             * @param chance The new spawn chance
                             */
                            // @ts-ignore
                            setSpawnChance(chance: number /*double*/): void
                        }
                    }
                }
            }
        }
    }
}
