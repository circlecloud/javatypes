declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Glowstone {
                            /**
                             * A builder for constructing {@link Glowstone} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Glowstone, org.spongepowered.api.world.gen.populator.Glowstone.Builder> {
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Sets the amount of glowstone to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 * @param attempts The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                blocksPerCluster(attempts: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Sets the amount of glowstone to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 * @param attempts The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                blocksPerCluster(attempts: number /*int*/): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Sets the height of the glowstone cluster.
                                 * @param height The new cluster height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                clusterHeight(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Sets the height of the glowstone cluster.
                                 * @param height The new cluster height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                clusterHeight(height: number /*int*/): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Sets the height that the cluster may generate at.
                                 * @param height The new height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Glowstone.Builder
                                /**
                                 * Builds a new instance of a {@link Glowstone} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Glowstone
                            }
                        }
                    }
                }
            }
        }
    }
}
