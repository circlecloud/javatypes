declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace hanging {
                    /**
                     * Represents a hanging entity, such as a {@link Painting}.
                     */
                    // @ts-ignore
                    interface Hanging extends org.spongepowered.api.entity.Entity {
                        /**
                         * Gets a copy of the {@link DirectionalData} being used for this
                         * {@link Hanging} entity.
                         * @return A copy of the directional data
                         */
                        // @ts-ignore
                        getDirectionalData(): org.spongepowered.api.data.manipulator.mutable.block.DirectionalData
                        /**
                         * Gets the {@link Value} for the current "facing" {@link Direction}.
                         * @return The current "facing" direction value
                         */
                        // @ts-ignore
                        direction(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Direction>
                    }
                }
            }
        }
    }
}
