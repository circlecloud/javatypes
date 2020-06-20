declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    /**
                     * A base class for implementing
                     * {@link org.spongepowered.api.event.game.GameRegistryEvent.Register} events.
                     * @param <T> The catalog type
                     */
                    // @ts-ignore
                    class AbstractGameRegistryRegisterEvent<T extends org.spongepowered.api.CatalogType> extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.game.GameRegistryEvent.Register<T> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        register(catalogType: T extends org.spongepowered.api.CatalogType): void
                    }
                }
            }
        }
    }
}
