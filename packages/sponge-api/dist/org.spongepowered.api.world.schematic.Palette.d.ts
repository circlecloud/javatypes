declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    /**
                     * Represents a mapping for types to a local identifier. Can be used for
                     * mapping {@link CatalogType}s to {@code int} id's for storage purposes,
                     * or for converting stored information to a representable format back into
                     * {@link CatalogType}s.
                     * @param <T> The type this palette will maintain
                     */
                    // @ts-ignore
                    interface Palette<T extends org.spongepowered.api.CatalogType> {
                        /**
                         * Gets the type of this palette.
                         * @return The palette type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.world.schematic.PaletteType<T>
                        /**
                         * Gets the highest identifier in this palette.
                         * @return The highest id
                         */
                        // @ts-ignore
                        getHighestId(): int
                        /**
                         * Gets the {@code type} represented by the given identifier from the mapping.
                         * @param id The identifier
                         * @return The type, if found
                         */
                        // @ts-ignore
                        get(id: number /*int*/): java.util.Optional<T>
                        /**
                         * Gets the identifier for the given {@code type T} if it exists within the
                         * mapping.
                         * @param type The type
                         * @return The identifier, if found
                         */
                        // @ts-ignore
                        get(type: T extends org.spongepowered.api.CatalogType): java.util.Optional<java.lang.Integer>
                        /**
                         * Gets the identifier for the given {@code type T} from the mapping. If the
                         * {@code type T} is not yet registered in the mapping then it is registered and
                         * given the next available identifier.
                         * @param type The type
                         * @return The identifier
                         */
                        // @ts-ignore
                        getOrAssign(type: T extends org.spongepowered.api.CatalogType): int
                        /**
                         * Removes the given {@code type T} from the mapping.
                         * <p>Note that if this palette is considered a global palette, removal is not supported.</p>
                         * @param type The type to remove
                         * @return If the type existed in the mapping
                         */
                        // @ts-ignore
                        remove(type: T extends org.spongepowered.api.CatalogType): boolean
                        /**
                         * Gets all {@code type T}s contained in this palette.
                         * @return All contained types
                         */
                        // @ts-ignore
                        getEntries(): java.util.Collection<T>
                    }
                }
            }
        }
    }
}
