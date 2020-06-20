declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface PropertyHolder {
                        /**
                         * Attempts to retrieve a specific {@link Property} type of this
                         * {@link PropertyHolder}. If the property is not applicable,
                         * {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         * @param propertyClass The property class
                         * @param <T> The type of property
                         * @return The property, if available
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(propertyClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets an immutable collection of all known {@link Property}s pertaining
                         * to this {@link PropertyHolder}.
                         * <p>{@link Property}s can not be changed such that the property is
                         * attached to the instance of the residing {@link PropertyHolder}.</p>
                         * @return An immutable collection of all known {#link Property}s
                         */
                        // @ts-ignore
                        getApplicableProperties(): java.util.Collection<org.spongepowered.api.data.Property<?, ?>>
                    }
                }
            }
        }
    }
}
