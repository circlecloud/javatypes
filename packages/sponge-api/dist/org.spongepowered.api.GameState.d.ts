declare namespace org {
    namespace spongepowered {
        namespace api {
            /**
             * Top to bottom order of the lifecycle.
             */
            // @ts-ignore
            class GameState extends java.lang.Enum<org.spongepowered.api.GameState> {
                /**
                 * During this state, each {@link Plugin} instance
                 * has been created.
                 */
                // @ts-ignore
                readonly CONSTRUCTION: org.spongepowered.api.GameState
                /**
                 * Plugins are able to access a default logger instance and access
                 * configuration files.
                 */
                // @ts-ignore
                readonly PRE_INITIALIZATION: org.spongepowered.api.GameState
                /**
                 * Plugins should finish any work needed to become functional. Commands
                 * should be registered at this stage.
                 */
                // @ts-ignore
                readonly INITIALIZATION: org.spongepowered.api.GameState
                /**
                 * Plugins have been initialized and should be ready for action. Loggers,
                 * configurations, and third party plugin APIs should be prepared for
                 * interaction.
                 */
                // @ts-ignore
                readonly POST_INITIALIZATION: org.spongepowered.api.GameState
                /**
                 * All plugin initialization and registration should be completed. The
                 * server is now ready to start.
                 */
                // @ts-ignore
                readonly LOAD_COMPLETE: org.spongepowered.api.GameState
                /**
                 * The {@link Server} instance exists, but worlds have not yet loaded.
                 */
                // @ts-ignore
                readonly SERVER_ABOUT_TO_START: org.spongepowered.api.GameState
                /**
                 * The server instance exists and worlds are loaded.
                 */
                // @ts-ignore
                readonly SERVER_STARTING: org.spongepowered.api.GameState
                /**
                 * The server is fully loaded and ready to accept clients. All worlds are
                 * loaded and all plugins have been loaded.
                 */
                // @ts-ignore
                readonly SERVER_STARTED: org.spongepowered.api.GameState
                /**
                 * Server is stopping for any reason. This occurs prior to world saving.
                 */
                // @ts-ignore
                readonly SERVER_STOPPING: org.spongepowered.api.GameState
                /**
                 * The server has stopped saving and no players are connected. Any changes
                 * to the worlds are not saved.
                 */
                // @ts-ignore
                readonly SERVER_STOPPED: org.spongepowered.api.GameState
                /**
                 * The game is stopping, all network connections should be closed, all
                 * plugins should prepare for shutdown, closing all files.
                 * <p>Note: In the case that the JVM is terminated, this state may never
                 * be reached.</p>
                 */
                // @ts-ignore
                readonly GAME_STOPPING: org.spongepowered.api.GameState
                /**
                 * The game has stopped and the JVM will exit. Plugins shouldn't expect to
                 * receive this event as all files and connections should be terminated.
                 * <p>Note: In the case that the JVM is terminated, this state may never
                 * be reached.</p>
                 */
                // @ts-ignore
                readonly GAME_STOPPED: org.spongepowered.api.GameState
                // @ts-ignore
                values(): org.spongepowered.api.GameState[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.spongepowered.api.GameState
            }
        }
    }
}
