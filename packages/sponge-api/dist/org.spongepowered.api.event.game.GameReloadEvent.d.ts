declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    /**
                     * Fired when the {@link Game} triggers a reload.
                     * <p>
                     * The definition of a reload is purely left up to the implementation.
                     * For the default implementation from Sponge, this is fired when
                     * executing the plugins' reload command and acts as a simple callback for
                     * plugin use.
                     * </p>
                     */
                    // @ts-ignore
                    interface GameReloadEvent extends org.spongepowered.api.event.Event {
                    }
                }
            }
        }
    }
}
