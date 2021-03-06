declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        namespace tab {
                            /**
                             * Represents the information attached to an entry in a {@link TabList}.
                             */
                            // @ts-ignore
                            interface TabListEntry {
                                /**
                                 * Creates a new {@link Builder} to create {@link TabListEntry}s.
                                 * @return The new builder
                                 */
                                // @ts-ignore
                                builder(): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder
                                /**
                                 * Gets the {@link TabList} that owns this entry.
                                 * @return The tab list that owns this entry
                                 */
                                // @ts-ignore
                                getList(): org.spongepowered.api.entity.living.player.tab.TabList
                                /**
                                 * Gets the {@link GameProfile} associated with this entry.
                                 * @return The profile associated with this entry
                                 */
                                // @ts-ignore
                                getProfile(): org.spongepowered.api.profile.GameProfile
                                /**
                                 * Gets this entry's display name.
                                 * @return This entry's display name
                                 */
                                // @ts-ignore
                                getDisplayName(): java.util.Optional<org.spongepowered.api.text.Text>
                                /**
                                 * Sets this entry's display name.
                                 * @param displayName The new display name
                                 * @return This entry, for chaining
                                 */
                                // @ts-ignore
                                setDisplayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabListEntry
                                /**
                                 * Gets the latency for this entry.
                                 * @return The latency for this entry
                                 */
                                // @ts-ignore
                                getLatency(): number /*int*/
                                /**
                                 * Sets the latency for this entry.
                                 * <p>The client displays connection bars based on this number.</p>
                                 * <table summary="">
                                 * <thead>
                                 * <tr>
                                 * <th>Bars</th>
                                 * <th>Time</th>
                                 * </tr>
                                 * </thead>
                                 * <tbody>
                                 * <tr>
                                 * <td>0</td>
                                 * <td>Less than 0</td>
                                 * </tr>
                                 * <tr>
                                 * <td>1</td>
                                 * <td>1000+</td>
                                 * </tr>
                                 * <tr>
                                 * <td>2</td>
                                 * <td>600 - 999</td>
                                 * </tr>
                                 * <tr>
                                 * <td>3</td>
                                 * <td>300 - 599</td>
                                 * </tr>
                                 * <tr>
                                 * <td>4</td>
                                 * <td>150 - 299</td>
                                 * </tr>
                                 * <tr>
                                 * <td>5</td>
                                 * <td>0 - 149</td>
                                 * </tr>
                                 * </tbody>
                                 * </table>
                                 * @param latency The new latency, in milliseconds
                                 * @return This entry, for chaining
                                 */
                                // @ts-ignore
                                setLatency(latency: number /*int*/): org.spongepowered.api.entity.living.player.tab.TabListEntry
                                /**
                                 * Gets the {@link GameMode} this entry is in.
                                 * @return The gamemode this entry is in
                                 */
                                // @ts-ignore
                                getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode
                                /**
                                 * Sets this entry's gamemode.
                                 * <p>When using {@link GameModes#SPECTATOR} and this entry is of an
                                 * online {@link Player}, the player will have "spectator effects". Such
                                 * effects can include invisibility and noclip.</p>
                                 * @param gameMode The new gamemode
                                 * @return This entry, for chaining
                                 */
                                // @ts-ignore
                                setGameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): org.spongepowered.api.entity.living.player.tab.TabListEntry
                            }
                        }
                    }
                }
            }
        }
    }
}
