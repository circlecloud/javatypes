declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents {@link GameState#POST_INITIALIZATION} event.
                         */
                        // @ts-ignore
                        interface GamePostInitializationEvent extends org.spongepowered.api.event.game.state.GameStateEvent {
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
