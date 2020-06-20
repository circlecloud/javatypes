declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace query {
                        namespace QueryServerEvent {
                            // @ts-ignore
                            interface Basic extends org.spongepowered.api.event.server.query.QueryServerEvent {
                                /**
                                 * Gets the MOTD to respond with.
                                 * <p>By default, this is the server's current MOTD</p>
                                 * @return The MOTD to respond with.
                                 */
                                // @ts-ignore
                                getMotd(): java.lang.String
                                /**
                                 * Sets the MOTD to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @param motd The MOTD to respond with
                                 */
                                // @ts-ignore
                                setMotd(motd: string): void
                                /**
                                 * Gets the GameType to respond with.
                                 * <p>By default, this is <code>SMP</code>.
                                 * If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @return The GameType to respond with
                                 */
                                // @ts-ignore
                                getGameType(): java.lang.String
                                /**
                                 * Sets the GameType to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @param gameType The GameType to respond with
                                 */
                                // @ts-ignore
                                setGameType(gameType: string): void
                                /**
                                 * Gets the map (world) to respond with.
                                 * <p>By default, this is the current world on the server.</p>
                                 * @return The map to respond with
                                 */
                                // @ts-ignore
                                getMap(): java.lang.String
                                /**
                                 * Sets the map (world) to respond with.
                                 * <p>If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @param map The map to respond with
                                 */
                                // @ts-ignore
                                setMap(map: string): void
                                /**
                                 * Gets the player count to respond with.
                                 * <p>By default, this is the number of players present on the server.
                                 * If setting the string causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @return The player count to respond with
                                 */
                                // @ts-ignore
                                getPlayerCount(): int
                                /**
                                 * Sets the player count to respond with.
                                 * <p>If setting the int causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @param playerCount The player count to respond with
                                 */
                                // @ts-ignore
                                setPlayerCount(playerCount: number /*int*/): void
                                /**
                                 * Gets the max player count to respond with.
                                 * <p>By default, this is the maximum number of players allowed on the
                                 * server.</p>
                                 * @return The max player count to respond with
                                 */
                                // @ts-ignore
                                getMaxPlayerCount(): int
                                /**
                                 * Sets the max player count to respond with.
                                 * <p>If setting the int causes the message to go over the
                                 * maximum size, the message will be automatically truncated.</p>
                                 * @param maxPlayerCount The max player count to respond with
                                 */
                                // @ts-ignore
                                setMaxPlayerCount(maxPlayerCount: number /*int*/): void
                                /**
                                 * Gets the address to respond with.
                                 * <p>By default, this is the address the server is listening on.</p>
                                 * @return The address to respond with
                                 */
                                // @ts-ignore
                                getAddress(): java.net.InetSocketAddress
                                /**
                                 * Sets the address to respond with.
                                 * @param address The address to respond with
                                 */
                                // @ts-ignore
                                setAddress(address: java.net.InetSocketAddress): void
                                /**
                                 * Gets the current size of the data to respond with.
                                 * <p>This value is implementation-defined - it is only meaningful when
                                 * compared with {@link #getMaxSize()}.</p>
                                 * @return The current size of the data to respond with
                                 */
                                // @ts-ignore
                                getSize(): int
                                /**
                                 * Gets the maximum size of the data to respond with.
                                 * <p>If the size of the data is greater than the returned value,
                                 * it will be automatically truncated.
                                 * This value is implementation-defined - it is only meaningful when
                                 * compared with {@link #getSize()} ()}.</p>
                                 * @return The maximum size of the data to respond with
                                 */
                                // @ts-ignore
                                getMaxSize(): int
                            }
                        }
                    }
                }
            }
        }
    }
}
