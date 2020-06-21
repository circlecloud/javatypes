declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace GameRegistryEvent {
                        /**
                         * This event is called to allow additional registrations for
                         * specific {@link CatalogType}s.
                         * <p>When creating custom {@link CatalogRegistryModule}s, implementing the
                         * {@link AdditionalCatalogRegistryModule} allows this event to be called
                         * for the target {@link CatalogType}. All the {@link CatalogType}s will
                         * be registered through the {@link AdditionalCatalogRegistryModule#registerAdditionalCatalog(CatalogType)}
                         * method.</p>
                         * @param <T> The type of the catalog type
                         */
                        // @ts-ignore
                        interface Register<T extends org.spongepowered.api.CatalogType> extends org.spongepowered.api.event.game.GameRegistryEvent, org.spongepowered.api.event.GenericEvent<T> {
                            /**
                             * Gets the {@link CatalogType} that
                             * is allowing registrations.
                             * @return The catalog type
                             */
                            // @ts-ignore
                            getCatalogType(): java.lang.Class<T>
                            /**
                             * Gets the registry module.
                             * @return The registry module
                             */
                            // @ts-ignore
                            getRegistryModule(): org.spongepowered.api.registry.CatalogRegistryModule<T>
                            /**
                             * Registers the {@link CatalogType}.
                             * @param catalogType The catalog type
                             * @throws IllegalArgumentException If there is an id conflict with the
                             *      given type and an existing type
                             * @throws UnsupportedOperationException If registration for the given
                             *      type is not supported
                             * @throws CatalogTypeAlreadyRegisteredException If the type cannot be
                             *      registered because a matching type was already registered
                             */
                            // @ts-ignore
                            register(catalogType: T): void
                        }
                    }
                }
            }
        }
    }
}
