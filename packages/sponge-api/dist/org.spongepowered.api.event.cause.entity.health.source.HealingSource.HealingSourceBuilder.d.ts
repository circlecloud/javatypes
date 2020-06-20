declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                namespace HealingSource {
                                    /**
                                     * An abstract builder to build an extension of {@link HealingSource}.
                                     * @param <T> The type of HealingSource
                                     * @param <B> The builder type
                                     */
                                    // @ts-ignore
                                    interface HealingSourceBuilder<T extends org.spongepowered.api.event.cause.entity.health.source.HealingSource, B extends org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder<T, B>> extends org.spongepowered.api.util.ResettableBuilder<T, B> {
                                        /**
                                         * Sets for the built {@link HealingSource} to have scaled with
                                         * difficulty, usually meaning that the amount is scaled.
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        scalesWithDifficulty(): B
                                        /**
                                         * Sets that the built {@link HealingSource} to have been a "magical"
                                         * source.
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        magical(): B
                                        /**
                                         * Sets the {@link HealingType}.
                                         * @param healingType The healing type
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        type(healingType: org.spongepowered.api.event.cause.entity.health.HealingType): B
                                        // @ts-ignore
                                        build(): T
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
