declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which spawns patches of fire randomly within chunks.
                         */
                        // @ts-ignore
                        interface NetherFire extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link NetherFire} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.NetherFire.Builder
                            /**
                             * Gets the number of clusters to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getClustersPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of clusters to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setClustersPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of clusters to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setClustersPerChunk(count: number /*int*/): void
                            /**
                             * Gets the number of fire to attempt to spawn per patch, must be greater
                             * than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getFirePerCluster(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of fire to attempt to spawn per patch, must be greater
                             * than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setFirePerCluster(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of Fire to attempt to spawn per patch, must be greater
                             * than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setFirePerCluster(count: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
