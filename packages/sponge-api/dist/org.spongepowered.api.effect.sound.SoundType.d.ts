declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace sound {
                    /**
                     * Represents a sound that can be heard on clients.
                     */
                    // @ts-ignore
                    interface SoundType extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a new {@link Builder} for building SoundTypes.
                         * @return A new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.effect.sound.SoundType.Builder
                        /**
                         * Creates a <i>new</i>SoundType from the given ID. To fetch existing types,
                         * use {@link GameRegistry#getType(Class, String)}.
                         * @param id ID of the sound
                         * @return A new SoundType object
                         */
                        // @ts-ignore
                        of(id: java.lang.String | string): org.spongepowered.api.effect.sound.SoundType
                    }
                }
            }
        }
    }
}
