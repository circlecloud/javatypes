declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                // @ts-ignore
                                interface BlockDamageSource extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource {
                                    /**
                                     * Creates a new {@link Builder builder} for building a
                                     * {@link BlockDamageSource}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder
                                    /**
                                     * Gets the location of the {@link BlockSnapshot}.
                                     * @return The location of the block
                                     */
                                    // @ts-ignore
                                    getLocation(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                                    /**
                                     * Gets the {@link BlockSnapshot} of the source.
                                     * @return The block snapshot of the source
                                     */
                                    // @ts-ignore
                                    getBlockSnapshot(): org.spongepowered.api.block.BlockSnapshot
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
