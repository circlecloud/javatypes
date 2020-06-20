declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            /**
                             * Called when a {@link Humanoid} changes {@link GameMode}.
                             */
                            // @ts-ignore
                            interface ChangeGameModeEvent extends org.spongepowered.api.event.entity.living.humanoid.TargetHumanoidEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the original {@link GameMode}.
                                 * @return The original {#link GameMode}.
                                 */
                                // @ts-ignore
                                getOriginalGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode
                                /**
                                 * Gets the new {@link GameMode}.
                                 * @return The new {#link GameMode}.
                                 */
                                // @ts-ignore
                                getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode
                                /**
                                 * Sets the new {@link GameMode}.
                                 * @param gameMode The new {#link GameMode} value.
                                 */
                                // @ts-ignore
                                setGameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): void
                            }
                        }
                    }
                }
            }
        }
    }
}
