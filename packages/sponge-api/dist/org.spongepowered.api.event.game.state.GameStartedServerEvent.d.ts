declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents a {@link GameState#SERVER_STARTED} event.
                         */
                        // @ts-ignore
                        interface GameStartedServerEvent extends org.spongepowered.api.event.game.state.GameStateEvent {
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
