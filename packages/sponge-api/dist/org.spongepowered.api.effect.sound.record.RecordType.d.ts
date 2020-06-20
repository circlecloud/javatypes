declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace sound {
                    namespace record {
                        /**
                         * Represents the type of record that can be
                         * played by a {@link Jukebox}.
                         */
                        // @ts-ignore
                        interface RecordType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                            /**
                             * Gets the {@link SoundType} that is used
                             * by this {@link RecordType}.
                             * @return The sound type
                             */
                            // @ts-ignore
                            getSound(): org.spongepowered.api.effect.sound.SoundType
                        }
                    }
                }
            }
        }
    }
}
