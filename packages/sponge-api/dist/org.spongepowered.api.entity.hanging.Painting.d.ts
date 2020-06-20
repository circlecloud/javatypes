declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace hanging {
                    /**
                     * Represents a Painting.
                     */
                    // @ts-ignore
                    interface Painting extends org.spongepowered.api.entity.hanging.Hanging {
                        /**
                         * Gets a copy of the {@link ArtData} represented by this {@link Painting}.
                         * @return A copy of the art data
                         */
                        // @ts-ignore
                        getArtData(): org.spongepowered.api.data.manipulator.mutable.entity.ArtData
                        /**
                         * Gets the current {@link Art} value represented by this {@link Painting}.
                         * @return The current art value
                         */
                        // @ts-ignore
                        art(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.Art>
                    }
                }
            }
        }
    }
}
