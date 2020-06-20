declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace NetherFire {
                            /**
                             * A builder for constructing {@link NetherFire} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.NetherFire, org.spongepowered.api.world.gen.populator.NetherFire.Builder> {
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.NetherFire.Builder
                                /**
                                 * Sets the number of clusters to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.NetherFire.Builder
                                /**
                                 * Sets the number of fire to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 * @param count The new number to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perCluster(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.NetherFire.Builder
                                /**
                                 * Sets the number of fire to attempt to spawn per cluster, must be
                                 * greater than zero.
                                 * @param count The new number to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perCluster(count: number /*int*/): org.spongepowered.api.world.gen.populator.NetherFire.Builder
                                /**
                                 * Builds a new instance of a {@link NetherFire} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.NetherFire
                            }
                        }
                    }
                }
            }
        }
    }
}
