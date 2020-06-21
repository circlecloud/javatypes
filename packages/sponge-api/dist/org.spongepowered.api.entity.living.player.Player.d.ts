declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        /**
                         * A Player represents the in-game entity of a human playing on a server.
                         * This is in contrast to User which represents the storage and data
                         * associated with a Player.
                         * <p>Any methods called on Player that are not on User do not store any data
                         * that persists across server restarts.</p>
                         */
                        // @ts-ignore
                        interface Player extends org.spongepowered.api.entity.living.Humanoid, org.spongepowered.api.entity.living.player.User, org.spongepowered.api.command.source.RemoteSource, org.spongepowered.api.effect.Viewer, org.spongepowered.api.text.channel.ChatTypeMessageReceiver {
                            /**
                             * Returns whether this player has an open inventory at the moment
                             * or not.
                             * @return Whether this player is viewing an inventory or not
                             */
                            // @ts-ignore
                            isViewingInventory(): boolean
                            /**
                             * Gets the currently viewed inventory of this player, if it is
                             * currently viewing one.
                             * @return An inventory if this player is viewing one, otherwise
                             *  {#link Optional#empty()}
                             */
                            // @ts-ignore
                            getOpenInventory(): java.util.Optional<org.spongepowered.api.item.inventory.Container>
                            /**
                             * Opens the given Inventory for the player to view.
                             * @param inventory The inventory to view
                             * @return The opened Container if the inventory was opened, otherwise
                             *       {#link Optional#empty()}
                             * @throws IllegalArgumentException if a {#link PluginContainer} is not the
                             *       root of the cause
                             */
                            // @ts-ignore
                            openInventory(inventory: org.spongepowered.api.item.inventory.Inventory): java.util.Optional<org.spongepowered.api.item.inventory.Container>
                            /**
                             * Opens a given Inventory for the player to view with a custom displayName.
                             * <p>Note that not all inventories support a custom display name.</p>
                             * @param inventory The inventory to view
                             * @param displayName The display name to set
                             * @return The opened Container if the inventory was opened, otherwise {#link Optional#empty()}
                             */
                            // @ts-ignore
                            openInventory(inventory: org.spongepowered.api.item.inventory.Inventory, displayName: org.spongepowered.api.text.Text): java.util.Optional<org.spongepowered.api.item.inventory.Container>
                            /**
                             * Closes the currently viewed entity of this player, if it is currently
                             * viewing one.
                             * @return whether or not closing the inventory succeeded
                             * @throws IllegalArgumentException if a {#link PluginContainer} is not the
                             *          root of the cause
                             */
                            // @ts-ignore
                            closeInventory(): boolean
                            /**
                             * Gets the view distance setting of the player. This value represents the
                             * radius (around the player) in unit chunks.
                             * @return The player's view distance
                             */
                            // @ts-ignore
                            getViewDistance(): number /*int*/
                            /**
                             * Gets the current player chat visibility setting.
                             * @return Chat visibility setting
                             */
                            // @ts-ignore
                            getChatVisibility(): org.spongepowered.api.text.chat.ChatVisibility
                            /**
                             * Gets whether the player has colors enabled in chat.
                             * @return True if colors are enabled in chat
                             */
                            // @ts-ignore
                            isChatColorsEnabled(): boolean
                            /**
                             * Simulates a chat message from a player.
                             * <p>This method sends a message as if it came from this player.
                             * To send a message to this player instead, see
                             * {@link MessageReceiver#sendMessage(Text)} or
                             * {@link ChatTypeMessageReceiver#sendMessage(ChatType, Text)}.</p>
                             * <p>Commands cannot be sent using this method. To send commands, use
                             * {@link CommandManager#process(CommandSource, String)}.</p>
                             * <p>If text formatting is not supported in the implementation
                             * it will be displayed as plain text.</p>
                             * @param message The message to send
                             * @param cause The cause for the message
                             * @return The event that was thrown from sending the message
                             */
                            // @ts-ignore
                            simulateChat(message: org.spongepowered.api.text.Text, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.message.MessageChannelEvent.Chat
                            /**
                             * Gets the skin parts that this player has allowed to render.
                             * @return A set of skin parts displayed
                             */
                            // @ts-ignore
                            getDisplayedSkinParts(): Array<org.spongepowered.api.data.type.SkinPart>
                            /**
                             * Gets the appropriate {@link PlayerConnection} linking this Player
                             * to a client.
                             * @return The connection
                             */
                            // @ts-ignore
                            getConnection(): org.spongepowered.api.network.PlayerConnection
                            /**
                             * Sends a given {@link ResourcePack} to this player.
                             * @param pack The ResourcePack to send
                             */
                            // @ts-ignore
                            sendResourcePack(pack: org.spongepowered.api.resourcepack.ResourcePack): void
                            /**
                             * Gets this player's {@link TabList}.
                             * @return This player's TabList
                             */
                            // @ts-ignore
                            getTabList(): org.spongepowered.api.entity.living.player.tab.TabList
                            /**
                             * Kicks the player, showing the default kick reason (the translation key
                             * {@code disconnect.disconnected}).
                             */
                            // @ts-ignore
                            kick(): void
                            /**
                             * Kicks the player given a reason.
                             * @param reason The reason for the kick
                             */
                            // @ts-ignore
                            kick(reason: org.spongepowered.api.text.Text): void
                            /**
                             * Gets the {@link Scoreboard} displayed to the player.
                             * @return The scoreboard displayed to the player
                             */
                            // @ts-ignore
                            getScoreboard(): org.spongepowered.api.scoreboard.Scoreboard
                            /**
                             * Sets the {@link Scoreboard} displayed to the player.
                             * @param scoreboard The scoreboard to display
                             */
                            // @ts-ignore
                            setScoreboard(scoreboard: org.spongepowered.api.scoreboard.Scoreboard): void
                            /**
                             * Gets a copy of the current {@link JoinData}.
                             * <p>Since a {@link Player} is already online, it means that the player
                             * has joined the server at least once, meaning there is a guaranteed
                             * initial join {@link Instant}. Users may not have ever joined a server
                             * before.</p>
                             * @return A copy of the join data
                             */
                            // @ts-ignore
                            getJoinData(): org.spongepowered.api.data.manipulator.mutable.entity.JoinData
                            /**
                             * Gets the {@link Value} of the {@link Instant} that a {@link Player}
                             * joined the {@link Server} the first time.
                             * @return The value for the first time a player joined
                             */
                            // @ts-ignore
                            firstPlayed(): org.spongepowered.api.data.value.mutable.Value<java.time.Instant>
                            /**
                             * Gets the {@link Value} of the {@link Instant} that a {@link Player}
                             * joined the {@link Server} the last time.
                             * @return The value for the last time a player joined
                             */
                            // @ts-ignore
                            lastPlayed(): org.spongepowered.api.data.value.mutable.Value<java.time.Instant>
                            /**
                             * Gets if the {@link Player} has played on the {@link Server} before. Added
                             * as a utility.
                             * @return True if played before, false otherwise
                             */
                            // @ts-ignore
                            hasPlayedBefore(): boolean
                            /**
                             * Gets a copy of the current {@link DisplayNameData} for this
                             * {@link Player}.
                             * @return A copy of the current display name data
                             */
                            // @ts-ignore
                            getDisplayNameData(): org.spongepowered.api.data.manipulator.mutable.DisplayNameData
                            /**
                             * Gets a copy of the current {@link GameModeData} for this {@link Player}.
                             * @return A copy of the current game mode data
                             */
                            // @ts-ignore
                            getGameModeData(): org.spongepowered.api.data.manipulator.mutable.entity.GameModeData
                            /**
                             * Gets the current {@link GameMode} for this {@link Player}.
                             * @return The current game mode value
                             */
                            // @ts-ignore
                            gameMode(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.living.player.gamemode.GameMode>
                            /**
                             * Gets whether this {@link Player} will be ignored when checking whether to
                             * skip the night due to players sleeping. The time in a world will be
                             * advanced to day if all players in it either are sleeping or have this
                             * tag.
                             * @return Whether this {#link Player} will be ignored when checking whether
                             *      to skip the night
                             */
                            // @ts-ignore
                            isSleepingIgnored(): boolean
                            /**
                             * Sets whether this {@link Player} will be ignored when checking whether
                             * to skip the night due to players sleeping. The time in a world will be
                             * advanced to day if all players in it either are sleeping or have this
                             * tag.
                             * @param sleepingIgnored Whether this {#link Player} will be ignored when
                             *      checking whether to skip the night
                             */
                            // @ts-ignore
                            setSleepingIgnored(sleepingIgnored: boolean): void
                            /**
                             * Gets the {@link Inventory} available for this Player's shared {@link EnderChest}
                             * contents.
                             * @return The ender chest inventory
                             */
                            // @ts-ignore
                            getEnderChestInventory(): org.spongepowered.api.item.inventory.Inventory
                            /**
                             * Manually respawns the player.
                             * <p>If the player is not dead, this method will return <tt>false</tt></p>
                             * @return Whether the respawn was successful
                             */
                            // @ts-ignore
                            respawnPlayer(): boolean
                            /**
                             * Gets the {@link Entity} followed by the camera when in the
                             * {@link GameModes#SPECTATOR spectator gamemode}.
                             * @return The followed entity, if present, empty otherwise
                             */
                            // @ts-ignore
                            getSpectatorTarget(): java.util.Optional<org.spongepowered.api.entity.Entity>
                            /**
                             * Sets the {@link Entity} followed by the camera when in the
                             * {@link GameModes#SPECTATOR spectator gamemode}.
                             * @param entity The entity to spectate
                             */
                            // @ts-ignore
                            setSpectatorTarget(entity: org.spongepowered.api.entity.Entity): void
                            /**
                             * Gets the {@link WorldBorder} for this player, if present. If no border is
                             * set, an empty {@code Optional} is returned.
                             * @return The {#code WorldBorder} of this player as an {@code Optional}, if
                             *      present
                             */
                            // @ts-ignore
                            getWorldBorder(): java.util.Optional<org.spongepowered.api.world.WorldBorder>
                            /**
                             * Sets the {@link WorldBorder} instance for this player to the given world
                             * border. If {@code null} is passed, the world border is unset.
                             * @param border The world border to be used, may be {#code null}
                             * @param cause The cause of the border's change
                             */
                            // @ts-ignore
                            setWorldBorder(border: org.spongepowered.api.world.WorldBorder, cause: org.spongepowered.api.event.cause.Cause): void
                            /**
                             * Gets the {@link CooldownTracker} for this player, allowing control
                             * over the player's item cooldowns.
                             * @return This player's cooldown tracker
                             */
                            // @ts-ignore
                            getCooldownTracker(): org.spongepowered.api.entity.living.player.CooldownTracker
                            /**
                             * Gets the {@link AdvancementProgress} for the
                             * specified {@link Advancement}.
                             * @param advancement The advancement
                             * @return The advancement progress
                             */
                            // @ts-ignore
                            getProgress(advancement: org.spongepowered.api.advancement.Advancement): org.spongepowered.api.advancement.AdvancementProgress
                            /**
                             * Gets all the {@link AdvancementTree}s that this
                             * {@link Player} already unlocked.
                             * @return The advancement trees
                             */
                            // @ts-ignore
                            getUnlockedAdvancementTrees(): Array<org.spongepowered.api.advancement.AdvancementTree>
                        }
                    }
                }
            }
        }
    }
}
