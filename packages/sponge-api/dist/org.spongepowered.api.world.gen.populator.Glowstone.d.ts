declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which spawns clusters of glowstone.
                         */
                        // @ts-ignore
                        interface Glowstone extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Glowstone} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Glowstone.Builder
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
                             * Gets the amount of glowstone to attempt to spawn per cluster, must be
                             * greater than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getAttemptsPerCluster(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the amount of glowstone to attempt to spawn per cluster, must be
                             * greater than zero.
                             * @param attempts The new amount to spawn
                             */
                            // @ts-ignore
                            setAttemptsPerCluster(attempts: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the amount of glowstone to attempt to spawn per cluster, must be
                             * greater than zero.
                             * @param attempts The new amount to spawn
                             */
                            // @ts-ignore
                            setAttemptsPerCluster(attempts: number /*int*/): void
                            /**
                             * Gets the height of the glowstone cluster.
                             * @return The cluster height
                             */
                            // @ts-ignore
                            getClusterHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height of the glowstone cluster.
                             * @param height The new cluster height
                             */
                            // @ts-ignore
                            setClusterHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the height of the glowstone cluster.
                             * @param height The new cluster height
                             */
                            // @ts-ignore
                            setClusterHeight(height: number /*int*/): void
                            /**
                             * Gets the height that the cluster may generate at.
                             * @return The height
                             */
                            // @ts-ignore
                            getHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height that the cluster may generate at.
                             * @param height The new height
                             */
                            // @ts-ignore
                            setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                        }
                    }
                }
            }
        }
    }
}
