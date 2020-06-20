declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a type of instrument.
                     */
                    // @ts-ignore
                    interface InstrumentType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link SoundType} that is used by
                         * this {@link InstrumentType}.
                         * @return The sound
                         */
                        // @ts-ignore
                        getSound(): org.spongepowered.api.effect.sound.SoundType
                    }
                }
            }
        }
    }
}
