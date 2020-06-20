declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents a {@link GameState#SERVER_STARTING} event.
                         */
                        // @ts-ignore
                        interface GameStartingServerEvent extends org.spongepowered.api.event.game.state.GameStateEvent {
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
