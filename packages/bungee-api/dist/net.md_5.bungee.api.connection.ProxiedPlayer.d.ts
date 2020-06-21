declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    /**
                     * Represents a player who's connection is being connected to somewhere else,
                     * whether it be a remote or embedded server.
                     */
                    // @ts-ignore
                    interface ProxiedPlayer extends net.md_5.bungee.api.connection.Connection, net.md_5.bungee.api.CommandSender {
                        /**
                         * Gets this player's display name.
                         * @return the players current display name
                         */
                        // @ts-ignore
                        getDisplayName(): string
                        /**
                         * Sets this players display name to be used as their nametag and tab list
                         * name.
                         * @param name the name to set
                         */
                        // @ts-ignore
                        setDisplayName(name: java.lang.String | string): void
                        /**
                         * Send a message to the specified screen position of this player.
                         * @param position the screen position
                         * @param message the message to send
                         */
                        // @ts-ignore
                        sendMessage(position: ChatMessageType, ...message: BaseComponent[]): void
                        /**
                         * Send a message to the specified screen position of this player.
                         * @param position the screen position
                         * @param message the message to send
                         */
                        // @ts-ignore
                        sendMessage(position: ChatMessageType, message: BaseComponent): void
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         * @param target the new server to connect to
                         */
                        // @ts-ignore
                        connect(target: net.md_5.bungee.api.config.ServerInfo): void
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         * @param target the new server to connect to
                         * @param reason the reason for connecting to the new server
                         */
                        // @ts-ignore
                        connect(target: net.md_5.bungee.api.config.ServerInfo, reason: net.md_5.bungee.api.event.ServerConnectEvent.Reason): void
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         * @param target the new server to connect to
                         * @param callback the method called when the connection is complete, or
                         *  when an exception is encountered. The boolean parameter denotes success
                         *  (true) or failure (false).
                         */
                        // @ts-ignore
                        connect(target: net.md_5.bungee.api.config.ServerInfo, callback: net.md_5.bungee.api.Callback<java.lang.Boolean>): void
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         * @param target the new server to connect to
                         * @param callback the method called when the connection is complete, or
                         *  when an exception is encountered. The boolean parameter denotes success
                         *  (true) or failure (false).
                         * @param reason the reason for connecting to the new server
                         */
                        // @ts-ignore
                        connect(target: net.md_5.bungee.api.config.ServerInfo, callback: net.md_5.bungee.api.Callback<java.lang.Boolean>, reason: net.md_5.bungee.api.event.ServerConnectEvent.Reason): void
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         * @param request request to connect with
                         */
                        // @ts-ignore
                        connect(request: net.md_5.bungee.api.ServerConnectRequest): void
                        /**
                         * Gets the server this player is connected to.
                         * @return the server this player is connected to
                         */
                        // @ts-ignore
                        getServer(): net.md_5.bungee.api.connection.Server
                        /**
                         * Gets the ping time between the proxy and this connection.
                         * @return the current ping time
                         */
                        // @ts-ignore
                        getPing(): number /*int*/
                        /**
                         * Send a plugin message to this player.
                         * In recent Minecraft versions channel names must contain a colon separator
                         * and consist of [a-z0-9/._-]. This will be enforced in a future version.
                         * The "BungeeCord" channel is an exception and may only take this form.
                         * @param channel the channel to send this data via
                         * @param data the data to send
                         */
                        // @ts-ignore
                        sendData(channel: java.lang.String | string, data: number /*byte*/[]): void
                        /**
                         * Get the pending connection that belongs to this player.
                         * @return the pending connection that this player used
                         */
                        // @ts-ignore
                        getPendingConnection(): net.md_5.bungee.api.connection.PendingConnection
                        /**
                         * Make this player chat (say something), to the server he is currently on.
                         * @param message the message to say
                         */
                        // @ts-ignore
                        chat(message: java.lang.String | string): void
                        /**
                         * Get the server which this player will be sent to next time the log in.
                         * @return the server, or null if default
                         */
                        // @ts-ignore
                        getReconnectServer(): net.md_5.bungee.api.config.ServerInfo
                        /**
                         * Set the server which this player will be sent to next time the log in.
                         * @param server the server to set
                         */
                        // @ts-ignore
                        setReconnectServer(server: net.md_5.bungee.api.config.ServerInfo): void
                        /**
                         * Get this connection's UUID, if set.
                         * @return the UUID
                         * @deprecated In favour of {#link #getUniqueId()}
                         */
                        // @ts-ignore
                        getUUID(): string
                        /**
                         * Get this connection's UUID, if set.
                         * @return the UUID
                         */
                        // @ts-ignore
                        getUniqueId(): java.util.UUID
                        /**
                         * Gets this player's locale.
                         * @return the locale
                         */
                        // @ts-ignore
                        getLocale(): java.util.Locale
                        /**
                         * Gets this player's view distance.
                         * @return the view distance, or a reasonable default
                         */
                        // @ts-ignore
                        getViewDistance(): number /*byte*/
                        /**
                         * Gets this player's chat mode.
                         * @return the chat flags set, or a reasonable default
                         */
                        // @ts-ignore
                        getChatMode(): net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode
                        /**
                         * Gets if this player has chat colors enabled or disabled.
                         * @return if chat colors are enabled
                         */
                        // @ts-ignore
                        hasChatColors(): boolean
                        /**
                         * Gets this player's skin settings.
                         * @return the players skin setting
                         */
                        // @ts-ignore
                        getSkinParts(): net.md_5.bungee.api.SkinConfiguration
                        /**
                         * Gets this player's main hand setting.
                         * @return main hand setting
                         */
                        // @ts-ignore
                        getMainHand(): net.md_5.bungee.api.connection.ProxiedPlayer.MainHand
                        /**
                         * Set the header and footer displayed in the tab player list.
                         * @param header The header for the tab player list, null to clear it.
                         * @param footer The footer for the tab player list, null to clear it.
                         */
                        // @ts-ignore
                        setTabHeader(header: BaseComponent, footer: BaseComponent): void
                        /**
                         * Set the header and footer displayed in the tab player list.
                         * @param header The header for the tab player list, null to clear it.
                         * @param footer The footer for the tab player list, null to clear it.
                         */
                        // @ts-ignore
                        setTabHeader(header: BaseComponent[], footer: BaseComponent[]): void
                        /**
                         * Clears the header and footer displayed in the tab player list.
                         */
                        // @ts-ignore
                        resetTabHeader(): void
                        /**
                         * Sends a {@link Title} to this player. This is the same as calling
                         * {@link Title#send(ProxiedPlayer)}.
                         * @param title The title to send to the player.
                         * @see Title
                         */
                        // @ts-ignore
                        sendTitle(title: net.md_5.bungee.api.Title): void
                        /**
                         * Gets whether this player is using a FML client.
                         * <p>
                         * This method is only reliable if BungeeCord links Minecraft 1.8 servers
                         * together, as Bungee can pick up whether a user is a Forge user with the
                         * initial handshake. If this is used for a 1.7 network, this might return
                         * <code>false</code> even if the user is a FML user, as Bungee can only
                         * determine this information if a handshake successfully completes.
                         * </p>
                         * @return <code>true</code> if it is known that the user is using a FML
                         *  client, <code>false</code> otherwise.
                         */
                        // @ts-ignore
                        isForgeUser(): boolean
                        /**
                         * Gets this player's Forge Mod List, if the player has sent this
                         * information during the lifetime of their connection to Bungee. There is
                         * no guarantee that information is available at any time, as it is only
                         * sent during a FML handshake. Therefore, this will only contain
                         * information for a user that has attempted joined a Forge server.
                         * <p>
                         * Consumers of this API should be aware that an empty mod list does
                         * <em>not</em> indicate that a user is not a Forge user, and so should not
                         * use this API to check for this. See the {@link #isForgeUser()
                         * isForgeUser} method instead.
                         * </p>
                         * <p>
                         * Calling this when handling a
                         * {@link net.md_5.bungee.api.event.ServerConnectedEvent} may be the best
                         * place to do so as this event occurs after a FML handshake has completed,
                         * if any has occurred.
                         * </p>
                         * @return A {#link Map} of mods, where the key is the name of the mod, and
                         *  the value is the version. Returns an empty list if the FML handshake has
                         *  not occurred for this {@link ProxiedPlayer} yet.
                         */
                        // @ts-ignore
                        getModList(): java.util.Map<java.lang.String | string, java.lang.String | string>
                        /**
                         * Get the {@link Scoreboard} that belongs to this player.
                         * @return this player's {#link Scoreboard}
                         */
                        // @ts-ignore
                        getScoreboard(): net.md_5.bungee.api.score.Scoreboard
                    }
                }
            }
        }
    }
}
