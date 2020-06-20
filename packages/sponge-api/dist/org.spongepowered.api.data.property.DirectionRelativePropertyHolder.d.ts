declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface DirectionRelativePropertyHolder {
                        /**
                         * Gets the desired property from this property holder when facing towards
                         * the desired {@link Direction}.
                         * @param direction The direction
                         * @param clazz Property class
                         * @param <T> The type of property
                         * @return The property, if available
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(direction: org.spongepowered.api.util.Direction, clazz: java.lang.Class<T>): java.util.Optional<T>
                    }
                }
            }
        }
    }
}
