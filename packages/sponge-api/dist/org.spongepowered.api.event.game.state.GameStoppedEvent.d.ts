declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents a {@link GameState#GAME_STOPPED} event. Plugins shouldn't expect
                         * to receive this event as all files and connections should be terminated.
                         * <p>Note: In the case that the JVM is terminated, this state may never
                         * be reached.</p>
                         */
                        // @ts-ignore
                        interface GameStoppedEvent extends org.spongepowered.api.event.game.state.GameStateEvent {
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
