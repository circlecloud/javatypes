declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace DamageSource {
                                    // @ts-ignore
                                    interface DamageSourceBuilder<T extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource, B extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<T, B>> extends org.spongepowered.api.util.ResettableBuilder<T, B> {
                                        /**
                                         * Sets this {@link DamageSource}'s damage to be scaled
                                         * by {@link Difficulty}.
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        scalesWithDifficulty(): B
                                        /**
                                         * Sets this {@link DamageSource} as dealing damage that
                                         * bypasses armor modifiers.
                                         * <p>This sets the exhaustion increase caused
                                         * by this source to 0. You can override this
                                         * with {@link #exhaustion(double)}.</p>
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        bypassesArmor(): B
                                        /**
                                         * Sets this {@link DamageSource} as an explosion.
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        explosion(): B
                                        /**
                                         * Sets whether this {@link DamageSource}'s damage is absolute and
                                         * will ignore potion effects and enchantments.
                                         * <p>This sets the exhaustion increase caused
                                         * by this source to 0. You can override this
                                         * with {@link #exhaustion(double)}.</p>
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        absolute(): B
                                        /**
                                         * Sets this {@link DamageSource} as considered to be magical
                                         * damage. An example is potions.
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        magical(): B
                                        /**
                                         * Sets this {@link DamageSource} as considered to damage creative, or
                                         * otherwise "normally unharmable" players.
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        creative(): B
                                        /**
                                         * Sets the amount of exhaustion this {@link DamageSource} will
                                         * add to the entity, generally only to players.
                                         * <p>In vanilla gameplay, the default is 0.1, unless if the damage
                                         * is absolute or bypasses armor, where the exhaustion gets set to 0.
                                         * This builder follows this mechanic, but if you set the exhaustion
                                         * through this method that will be overridden.</p>
                                         * <p>If you don't set this exhaustion manually, calling
                                         * {@link #absolute()} or {@link #bypassesArmor()} will
                                         * set this 0 and if you don't this will default to 0.1.</p>
                                         * @param exhaustion The amount of exhaustion to add to the entity
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        exhaustion(exhaustion: number /*double*/): B
                                        /**
                                         * Sets the {@link DamageType} of this source.
                                         * <p>This is required to be set.</p>
                                         * @param damageType The desired damage type
                                         * @return This builder
                                         */
                                        // @ts-ignore
                                        type(damageType: org.spongepowered.api.event.cause.entity.damage.DamageType): B
                                        /**
                                         * Builds an instance of this damage source, based on
                                         * the values you inputted into the builder.
                                         * @return The resulting damage source
                                         * @throws IllegalStateException If a value required to be set
                                         *      is not set
                                         */
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
