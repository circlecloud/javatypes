declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace BlockDamageSource {
                                    // @ts-ignore
                                    interface Builder extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource, org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder> {
                                        /**
                                         * Sets the {@link Location} to use as a "source".
                                         * @param location The location of the block as the damage source
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        block(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder
                                        /**
                                         * Sets the {@link BlockSnapshot} to act as the "damage source".
                                         * @param blockState The block snapshot to use as the damage source
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        block(blockState: org.spongepowered.api.block.BlockSnapshot): org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
