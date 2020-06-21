declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace sound {
                    namespace SoundType {
                        /**
                         * Builds a SoundType, primarily for sending custom sounds to the client.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.effect.sound.SoundType, org.spongepowered.api.effect.sound.SoundType.Builder> {
                            /**
                             * Builds a new instance of a {@link SoundType}.
                             * <p>Note: If no domain (indicated by the string before ':') is present
                             * in the id, the default "minecraft" domain will be used.</p>
                             * @param id ID of the sound
                             * @return A new instance of the sound type
                             */
                            // @ts-ignore
                            build(id: java.lang.String | string): org.spongepowered.api.effect.sound.SoundType
                        }
                    }
                }
            }
        }
    }
}
