declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents all {@link GameState} events.
                         */
                        // @ts-ignore
                        interface GameStateEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the {@link GameState} that this event represents.
                             * @return The game state
                             */
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
