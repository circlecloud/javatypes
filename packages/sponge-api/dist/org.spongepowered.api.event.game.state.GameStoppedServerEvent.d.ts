declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents a {@link GameState#SERVER_STOPPED} event.
                         */
                        // @ts-ignore
                        interface GameStoppedServerEvent extends org.spongepowered.api.event.game.state.GameStateEvent {
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
