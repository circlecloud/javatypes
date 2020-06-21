declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents a Llama in the base game. Llamas are unique in that
                         * they can be ridden by players, but not controlled by players. Likewise, they
                         * have colors and styles and can have storage "strength".
                         */
                        // @ts-ignore
                        interface Llama extends org.spongepowered.api.entity.living.animal.Horse, org.spongepowered.api.entity.projectile.ProjectileLauncher {
                            /**
                             * Gets the {@link Value} for the {@link Keys#LLAMA_STRENGTH llama strength}
                             * when attacking.
                             * @return The strength value of the llama
                             */
                            // @ts-ignore
                            strength(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            /**
                             * Gets the {@link Value} for the {@link Keys#LLAMA_VARIANT llama variant}.
                             * @return The variant value of the llama
                             */
                            // @ts-ignore
                            llamaVariant(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.LlamaVariant>
                        }
                    }
                }
            }
        }
    }
}
