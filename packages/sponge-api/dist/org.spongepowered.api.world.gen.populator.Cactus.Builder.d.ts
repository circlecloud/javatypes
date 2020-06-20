declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Cactus {
                            /**
                             * A builder for constructing {@link Cactus} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Cactus, org.spongepowered.api.world.gen.populator.Cactus.Builder> {
                                /**
                                 * Sets the number of cacti to spawn per chunk, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of cacti which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new number of cacti to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                cactiPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Cactus.Builder
                                /**
                                 * Sets the number of cacti to spawn per chunk, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of cacti which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new number of cacti to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                cactiPerChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Cactus.Builder
                                /**
                                 * Sets the height of the cacti.
                                 * @param height The new height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Cactus.Builder
                                /**
                                 * Sets the height of the cacti.
                                 * @param height The new height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: number /*int*/): org.spongepowered.api.world.gen.populator.Cactus.Builder
                                /**
                                 * Builds a new instance of a {@link Cactus} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Cactus
                            }
                        }
                    }
                }
            }
        }
    }
}
