declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface PropertyRegistry {
                        /**
                         * Registers the provided {@link PropertyStore} for the given
                         * {@link Property} {@link Class}. Note that only a single
                         * {@link PropertyStore} can be registered per {@link Property}. Multiple
                         * registrations will result in exceptions being thrown.
                         * @param propertyClass The property class
                         * @param propertyStore The property store
                         * @param <T> The type of property
                         */
                        // @ts-ignore
                        register<T extends org.spongepowered.api.data.Property<?, ?>>(propertyClass: java.lang.Class<T>, propertyStore: org.spongepowered.api.data.property.PropertyStore<T>): void
                        /**
                         * Retrieves the {@link PropertyStore} associated for the provided
                         * {@link Property} class.
                         * @param propertyClass The property class
                         * @param <T> The type of property
                         * @return The property store, if available
                         */
                        // @ts-ignore
                        getStore<T extends org.spongepowered.api.data.Property<?, ?>>(propertyClass: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.data.property.PropertyStore<T>>
                    }
                }
            }
        }
    }
}
