declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace IceSpike {
                            /**
                             * A builder for constructing {@link IceSpike} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.IceSpike, org.spongepowered.api.world.gen.populator.IceSpike.Builder> {
                                /**
                                 * Sets the number of spikes to generate per chunk.
                                 * @param count The new number of spikes
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                spikesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Sets the number of spikes to generate per chunk.
                                 * @param count The new number of spikes
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                spikesPerChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Sets the base height of the spike.
                                 * @param height The new base height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Sets the base height of the spike.
                                 * @param height The new base height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: number /*int*/): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Gets the probability of the spike much larger than normal.
                                 * @param p The new spawn probability
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                extremeSpikeProbability(p: number /*double*/): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Sets the base height increase of the extreme spikes.
                                 * @param increase The new base height increase
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                extremeSpikeIncrease(increase: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Sets the base height increase of the extreme spikes.
                                 * @param increase The new base height increase
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                extremeSpikeIncrease(increase: number /*int*/): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                                /**
                                 * Builds a new instance of a {@link IceSpike} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.IceSpike
                            }
                        }
                    }
                }
            }
        }
    }
}
