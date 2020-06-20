declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface LocationBasePropertyHolder {
                        /**
                         * Attempts to retrieve a specific {@link Property} type of the block at the
                         * specific location. If the property is not applicable,
                         * {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         * @param coords The coordinates
                         * @param propertyClass The property class
                         * @param <T> The type of property
                         * @return The property, if available
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(coords: Vector3i, propertyClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Attempts to retrieve a specific {@link Property} type of this
                         * {@link PropertyHolder}. If the property is not applicable,
                         * {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @param propertyClass The property class
                         * @param <T> The type of property
                         * @return The property, if available
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(x: number /*int*/, y: number /*int*/, z: number /*int*/, propertyClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Attempts to retrieve a specific {@link Property} type of the block at the
                         * specific location on the given block face. If the property is not
                         * applicable, {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         * @param coords The coordinates
                         * @param direction The face of the block
                         * @param propertyClass The property class
                         * @param <T> The type of property
                         * @return The property, if available
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(coords: Vector3i, direction: org.spongepowered.api.util.Direction, propertyClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Attempts to retrieve a specific {@link Property} type of the block at the
                         * specific location on the given block face. If the property is not
                         * applicable, {@link Optional#empty()} is returned.
                         * <p>{@link Property}s can define various immutable information about a
                         * {@link PropertyHolder} that is dependent on the instance of the holder.
                         * As {@link Property}s cannot be changed, the {@link PropertyHolder} can
                         * not change the information about it's own properties either.</p>
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @param direction The face of the block
                         * @param propertyClass The property class
                         * @param <T> The type of property
                         * @return The property, if available
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.data.Property<?, ?>>(x: number /*int*/, y: number /*int*/, z: number /*int*/, direction: org.spongepowered.api.util.Direction, propertyClass: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets an immutable collection of all known {@link Property}s pertaining to
                         * this {@link PropertyHolder}.
                         * <p>{@link Property}s can not be changed such that the property is
                         * attached to the instance of the residing {@link PropertyHolder}.</p>
                         * @param coords The coordinates
                         * @return An immutable collection of all known {#link Property}s
                         */
                        // @ts-ignore
                        getProperties(coords: Vector3i): java.util.Collection<org.spongepowered.api.data.Property<?, ?>>
                        /**
                         * Gets an immutable collection of all known {@link Property}s pertaining to
                         * this {@link PropertyHolder}.
                         * <p>{@link Property}s can not be changed such that the property is
                         * attached to the instance of the residing {@link PropertyHolder}.</p>
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @return An immutable collection of all known {#link Property}s
                         */
                        // @ts-ignore
                        getProperties(x: number /*int*/, y: number /*int*/, z: number /*int*/): java.util.Collection<org.spongepowered.api.data.Property<?, ?>>
                        /**
                         * Gets all the faces of this block that have the given property.
                         * @param coords The coordinates
                         * @param propertyClass The property class
                         * @return All faces with the property
                         */
                        // @ts-ignore
                        getFacesWithProperty(coords: Vector3i, propertyClass: java.lang.Class<org.spongepowered.api.data.Property<any, ?>>): java.util.Collection<org.spongepowered.api.util.Direction>
                        /**
                         * Gets all the faces of this block that have the given property.
                         * @param x The x coordinate
                         * @param y The y coordinate
                         * @param z The z coordinate
                         * @param propertyClass The property class
                         * @return All faces with the property
                         */
                        // @ts-ignore
                        getFacesWithProperty(x: number /*int*/, y: number /*int*/, z: number /*int*/, propertyClass: java.lang.Class<org.spongepowered.api.data.Property<any, ?>>): java.util.Collection<org.spongepowered.api.util.Direction>
                    }
                }
            }
        }
    }
}
