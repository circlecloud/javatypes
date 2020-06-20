declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which generates large spikes of Ice.
                         */
                        // @ts-ignore
                        interface IceSpike extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link IceSpike} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.IceSpike.Builder
                            /**
                             * Gets the number of spikes to generate per chunk.
                             * @return The number of spikes
                             */
                            // @ts-ignore
                            getSpikesPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of spikes to attempt to generate per chunk.
                             * @param count The new number of spikes
                             */
                            // @ts-ignore
                            setSpikesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of spikes to attempt to generate per chunk.
                             * @param count The new number of spikes
                             */
                            // @ts-ignore
                            setSpikesPerChunk(count: number /*int*/): void
                            /**
                             * Gets the base height of the spike.
                             * @return The base height
                             */
                            // @ts-ignore
                            getHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the base height of the spike.
                             * @param height The new base height
                             */
                            // @ts-ignore
                            setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the base height of the spike.
                             * @param height The new base height
                             */
                            // @ts-ignore
                            setHeight(height: number /*int*/): void
                            /**
                             * Gets the probability of the spike much larger than normal.
                             * @return The spawn probability
                             */
                            // @ts-ignore
                            getExtremeSpikeProbability(): double
                            /**
                             * Gets the probability of the spike much larger than normal.
                             * @param p The new spawn probability
                             */
                            // @ts-ignore
                            setExtremeSpikeProbability(p: number /*double*/): void
                            /**
                             * Gets the height increase of the extreme spikes.
                             * @return The height increase
                             */
                            // @ts-ignore
                            getExtremeSpikeIncrease(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height increase of the extreme spikes.
                             * @param increase The new height increase
                             */
                            // @ts-ignore
                            setExtremeSpikeIncrease(increase: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the height increase of the extreme spikes.
                             * @param increase The new height increase
                             */
                            // @ts-ignore
                            setExtremeSpikeIncrease(increase: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
