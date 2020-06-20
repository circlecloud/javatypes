declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace state {
                        /**
                         * Represents a {@link GameState#GAME_STOPPING} event. The game is stopping,
                         * all network connections should be closed, all plugins should prepare for
                         * shutdown, closing all files.
                         * <p>Note: In the case that the JVM is terminated, this state may never
                         * be reached.</p>
                         */
                        // @ts-ignore
                        interface GameStoppingEvent extends org.spongepowered.api.event.game.state.GameStateEvent {
                            // @ts-ignore
                            getState(): org.spongepowered.api.GameState
                        }
                    }
                }
            }
        }
    }
}
