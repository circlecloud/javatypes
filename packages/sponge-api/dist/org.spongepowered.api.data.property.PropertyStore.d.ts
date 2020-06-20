declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    /**
                     * Represents a handler for a {@link PropertyHolder} such that if a
                     * {@link PropertyHolder} cannot properly provide the {@link Property}
                     * instances natively, a {@link PropertyStore} can optionally provide
                     * an "override" or "customized" support of a particular {@link Property}
                     * for any variants of {@link PropertyHolder}s.
                     * @param <T> The type of property that this store can handle
                     */
                    // @ts-ignore
                    interface PropertyStore<T extends org.spongepowered.api.data.Property<?, ?>> {
                        /**
                         * Gets the desired property for the provided {@link PropertyHolder} at
                         * present time. A property may not be the same throughout the course of
                         * the lifetime of the {@link PropertyHolder}.
                         * @param propertyHolder The data holder to get a property from
                         * @return The type of property
                         */
                        // @ts-ignore
                        getFor(propertyHolder: org.spongepowered.api.data.property.PropertyHolder): java.util.Optional<T>
                        /**
                         * Gets the desired property for the provided {@link Location} at present
                         * time. A property may not be the same throughout the course of the
                         * lifetime of the {@link Location}.
                         * @param location The location of the block
                         * @return The type of property
                         */
                        // @ts-ignore
                        getFor(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<T>
                        /**
                         * Gets the desired property for the provided {@link Location} at present
                         * time, in relation to the provided {@link Direction}.
                         * @param location The location of the block
                         * @param direction The direction in relation to
                         * @return The type of property
                         */
                        // @ts-ignore
                        getFor(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, direction: org.spongepowered.api.util.Direction): java.util.Optional<T>
                        /**
                         * Gets the priority of which this {@link PropertyStore} is used for
                         * handling a particular {@link PropertyHolder}. This is useful for
                         * multiple possible handlers of a {@link Property} being available
                         * in customized {@link PropertyHolder}s.
                         * <p>The priority is a measurement where the higher the priority, the
                         * sooner this {@link PropertyStore} is queried such that if
                         * {@link #getFor(PropertyHolder)} is called and returns a present value,
                         * that present value is returned. Usually, Sponge implemented
                         * {@link PropertyStore}s have a priority of <code>100</code>.</p>
                         * @return The priority
                         */
                        // @ts-ignore
                        getPriority(): int
                    }
                }
            }
        }
    }
}
