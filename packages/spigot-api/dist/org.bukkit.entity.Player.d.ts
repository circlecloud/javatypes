declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a player, connected or not
             */
            // @ts-ignore
            interface Player extends org.bukkit.entity.HumanEntity, org.bukkit.conversations.Conversable, org.bukkit.OfflinePlayer, org.bukkit.plugin.messaging.PluginMessageRecipient {
                /**
                 * Gets the "friendly" name to display of this player. This may include
                 * color.
                 * <p>
                 * Note that this name will not be displayed in game, only in chat and
                 * places defined by plugins.
                 * @return the friendly name
                 */
                // @ts-ignore
                getDisplayName(): java.lang.String
                /**
                 * Sets the "friendly" name to display of this player. This may include
                 * color.
                 * <p>
                 * Note that this name will not be displayed in game, only in chat and
                 * places defined by plugins.
                 * @param name The new display name.
                 */
                // @ts-ignore
                setDisplayName(name: string): void
                /**
                 * Gets the name that is shown on the player list.
                 * @return the player list name
                 */
                // @ts-ignore
                getPlayerListName(): java.lang.String
                /**
                 * Sets the name that is shown on the in-game player list.
                 * <p>
                 * If the value is null, the name will be identical to {@link #getName()}.
                 * @param name new player list name
                 */
                // @ts-ignore
                setPlayerListName(name: string): void
                /**
                 * Gets the currently displayed player list header for this player.
                 * @return player list header or null
                 */
                // @ts-ignore
                getPlayerListHeader(): java.lang.String
                /**
                 * Gets the currently displayed player list footer for this player.
                 * @return player list header or null
                 */
                // @ts-ignore
                getPlayerListFooter(): java.lang.String
                /**
                 * Sets the currently displayed player list header for this player.
                 * @param header player list header, null for empty
                 */
                // @ts-ignore
                setPlayerListHeader(header: string): void
                /**
                 * Sets the currently displayed player list footer for this player.
                 * @param footer player list footer, null for empty
                 */
                // @ts-ignore
                setPlayerListFooter(footer: string): void
                /**
                 * Sets the currently displayed player list header and footer for this
                 * player.
                 * @param header player list header, null for empty
                 * @param footer player list footer, null for empty
                 */
                // @ts-ignore
                setPlayerListHeaderFooter(header: string, footer: string): void
                /**
                 * Set the target of the player's compass.
                 * @param loc Location to point to
                 */
                // @ts-ignore
                setCompassTarget(loc: org.bukkit.Location): void
                /**
                 * Get the previously set compass target.
                 * @return location of the target
                 */
                // @ts-ignore
                getCompassTarget(): org.bukkit.Location
                /**
                 * Gets the socket address of this player
                 * @return the player's address
                 */
                // @ts-ignore
                getAddress(): java.net.InetSocketAddress
                /**
                 * Sends this sender a message raw
                 * @param message Message to be displayed
                 */
                // @ts-ignore
                sendRawMessage(message: string): void
                /**
                 * Kicks player with custom kick message.
                 * @param message kick message
                 */
                // @ts-ignore
                kickPlayer(message: string): void
                /**
                 * Says a message (or runs a command).
                 * @param msg message to print
                 */
                // @ts-ignore
                chat(msg: string): void
                /**
                 * Makes the player perform the given command
                 * @param command Command to perform
                 * @return true if the command was successful, otherwise false
                 */
                // @ts-ignore
                performCommand(command: string): boolean
                /**
                 * Returns if the player is in sneak mode
                 * @return true if player is in sneak mode
                 */
                // @ts-ignore
                isSneaking(): boolean
                /**
                 * Sets the sneak mode the player
                 * @param sneak true if player should appear sneaking
                 */
                // @ts-ignore
                setSneaking(sneak: boolean): void
                /**
                 * Gets whether the player is sprinting or not.
                 * @return true if player is sprinting.
                 */
                // @ts-ignore
                isSprinting(): boolean
                /**
                 * Sets whether the player is sprinting or not.
                 * @param sprinting true if the player should be sprinting
                 */
                // @ts-ignore
                setSprinting(sprinting: boolean): void
                /**
                 * Saves the players current location, health, inventory, motion, and
                 * other information into the username.dat file, in the world/player
                 * folder
                 */
                // @ts-ignore
                saveData(): void
                /**
                 * Loads the players current location, health, inventory, motion, and
                 * other information from the username.dat file, in the world/player
                 * folder.
                 * <p>
                 * Note: This will overwrite the players current inventory, health,
                 * motion, etc, with the state from the saved dat file.
                 */
                // @ts-ignore
                loadData(): void
                /**
                 * Sets whether the player is ignored as not sleeping. If everyone is
                 * either sleeping or has this flag set, then time will advance to the
                 * next day. If everyone has this flag set but no one is actually in bed,
                 * then nothing will happen.
                 * @param isSleeping Whether to ignore.
                 */
                // @ts-ignore
                setSleepingIgnored(isSleeping: boolean): void
                /**
                 * Returns whether the player is sleeping ignored.
                 * @return Whether player is ignoring sleep.
                 */
                // @ts-ignore
                isSleepingIgnored(): boolean
                /**
                 * Play a note for a player at a location. This requires a note block
                 * at the particular location (as far as the client is concerned). This
                 * will not work without a note block. This will not work with cake.
                 * @param loc The location of a note block.
                 * @param instrument The instrument ID.
                 * @param note The note ID.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                playNote(loc: org.bukkit.Location, instrument: number /*byte*/, note: number /*byte*/): void
                /**
                 * Play a note for a player at a location. This requires a note block
                 * at the particular location (as far as the client is concerned). This
                 * will not work without a note block. This will not work with cake.
                 * @param loc The location of a note block
                 * @param instrument The instrument
                 * @param note The note
                 */
                // @ts-ignore
                playNote(loc: org.bukkit.Location, instrument: org.bukkit.Instrument, note: org.bukkit.Note): void
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null.
                 * @param location The location to play the sound
                 * @param sound The sound to play
                 * @param volume The volume of the sound
                 * @param pitch The pitch of the sound
                 */
                // @ts-ignore
                playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, volume: number /*float*/, pitch: number /*float*/): void
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null. No
                 * sound will be heard by the player if their client does not have the
                 * respective sound for the value passed.
                 * @param location the location to play the sound
                 * @param sound the internal sound name to play
                 * @param volume the volume of the sound
                 * @param pitch the pitch of the sound
                 */
                // @ts-ignore
                playSound(location: org.bukkit.Location, sound: string, volume: number /*float*/, pitch: number /*float*/): void
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null.
                 * @param location The location to play the sound
                 * @param sound The sound to play
                 * @param category The category of the sound
                 * @param volume The volume of the sound
                 * @param pitch The pitch of the sound
                 */
                // @ts-ignore
                playSound(location: org.bukkit.Location, sound: org.bukkit.Sound, category: org.bukkit.SoundCategory, volume: number /*float*/, pitch: number /*float*/): void
                /**
                 * Play a sound for a player at the location.
                 * <p>
                 * This function will fail silently if Location or Sound are null. No sound
                 * will be heard by the player if their client does not have the respective
                 * sound for the value passed.
                 * @param location the location to play the sound
                 * @param sound the internal sound name to play
                 * @param category The category of the sound
                 * @param volume the volume of the sound
                 * @param pitch the pitch of the sound
                 */
                // @ts-ignore
                playSound(location: org.bukkit.Location, sound: string, category: org.bukkit.SoundCategory, volume: number /*float*/, pitch: number /*float*/): void
                /**
                 * Stop the specified sound from playing.
                 * @param sound the sound to stop
                 */
                // @ts-ignore
                stopSound(sound: org.bukkit.Sound): void
                /**
                 * Stop the specified sound from playing.
                 * @param sound the sound to stop
                 */
                // @ts-ignore
                stopSound(sound: string): void
                /**
                 * Stop the specified sound from playing.
                 * @param sound the sound to stop
                 * @param category the category of the sound
                 */
                // @ts-ignore
                stopSound(sound: org.bukkit.Sound, category: org.bukkit.SoundCategory): void
                /**
                 * Stop the specified sound from playing.
                 * @param sound the sound to stop
                 * @param category the category of the sound
                 */
                // @ts-ignore
                stopSound(sound: string, category: org.bukkit.SoundCategory): void
                /**
                 * Plays an effect to just this player.
                 * @param loc the location to play the effect at
                 * @param effect the {#link Effect}
                 * @param data a data bit needed for some effects
                 * @deprecated Magic value
                 */
                // @ts-ignore
                playEffect(loc: org.bukkit.Location, effect: org.bukkit.Effect, data: number /*int*/): void
                /**
                 * Plays an effect to just this player.
                 * @param <T> the data based based on the type of the effect
                 * @param loc the location to play the effect at
                 * @param effect the {#link Effect}
                 * @param data a data bit needed for some effects
                 */
                // @ts-ignore
                playEffect<T>(loc: org.bukkit.Location, effect: org.bukkit.Effect, data: T): void
                /**
                 * Send a block change. This fakes a block change packet for a user at a
                 * certain location. This will not actually change the world in any way.
                 * @param loc The location of the changed block
                 * @param material The new block
                 * @param data The block data
                 * @deprecated Magic value
                 */
                // @ts-ignore
                sendBlockChange(loc: org.bukkit.Location, material: org.bukkit.Material, data: number /*byte*/): void
                /**
                 * Send a block change. This fakes a block change packet for a user at a
                 * certain location. This will not actually change the world in any way.
                 * @param loc The location of the changed block
                 * @param block The new block
                 */
                // @ts-ignore
                sendBlockChange(loc: org.bukkit.Location, block: org.bukkit.block.data.BlockData): void
                /**
                 * Send a chunk change. This fakes a chunk change packet for a user at a
                 * certain location. The updated cuboid must be entirely within a single
                 * chunk. This will not actually change the world in any way.
                 * <p>
                 * At least one of the dimensions of the cuboid must be even. The size of
                 * the data buffer must be 2.5*sx*sy*sz and formatted in accordance with
                 * the Packet51 format.
                 * @param loc The location of the cuboid
                 * @param sx The x size of the cuboid
                 * @param sy The y size of the cuboid
                 * @param sz The z size of the cuboid
                 * @param data The data to be sent
                 * @return true if the chunk change packet was sent
                 * @deprecated Magic value
                 */
                // @ts-ignore
                sendChunkChange(loc: org.bukkit.Location, sx: number /*int*/, sy: number /*int*/, sz: number /*int*/, data: number /*byte*/[]): boolean
                /**
                 * Send a sign change. This fakes a sign change packet for a user at
                 * a certain location. This will not actually change the world in any way.
                 * This method will use a sign at the location's block or a faked sign
                 * sent via
                 * {@link #sendBlockChange(org.bukkit.Location, org.bukkit.Material, byte)}.
                 * <p>
                 * If the client does not have a sign at the given location it will
                 * display an error message to the user.
                 * @param loc the location of the sign
                 * @param lines the new text on the sign or null to clear it
                 * @throws IllegalArgumentException if location is null
                 * @throws IllegalArgumentException if lines is non-null and has a length less than 4
                 */
                // @ts-ignore
                sendSignChange(loc: org.bukkit.Location, lines: string[]): void
                /**
                 * Send a sign change. This fakes a sign change packet for a user at
                 * a certain location. This will not actually change the world in any way.
                 * This method will use a sign at the location's block or a faked sign
                 * sent via
                 * {@link #sendBlockChange(org.bukkit.Location, org.bukkit.Material, byte)}.
                 * <p>
                 * If the client does not have a sign at the given location it will
                 * display an error message to the user.
                 * @param loc the location of the sign
                 * @param lines the new text on the sign or null to clear it
                 * @param dyeColor the color of the sign
                 * @throws IllegalArgumentException if location is null
                 * @throws IllegalArgumentException if dyeColor is null
                 * @throws IllegalArgumentException if lines is non-null and has a length less than 4
                 */
                // @ts-ignore
                sendSignChange(loc: org.bukkit.Location, lines: string[], dyeColor: org.bukkit.DyeColor): void
                /**
                 * Render a map and send it to the player in its entirety. This may be
                 * used when streaming the map in the normal manner is not desirable.
                 * @param map The map to be sent
                 */
                // @ts-ignore
                sendMap(map: org.bukkit.map.MapView): void
                /**
                 * Forces an update of the player's entire inventory.
                 */
                // @ts-ignore
                updateInventory(): void
                /**
                 * Sets the current time on the player's client. When relative is true the
                 * player's time will be kept synchronized to its world time with the
                 * specified offset.
                 * <p>
                 * When using non relative time the player's time will stay fixed at the
                 * specified time parameter. It's up to the caller to continue updating
                 * the player's time. To restore player time to normal use
                 * resetPlayerTime().
                 * @param time The current player's perceived time or the player's time
                 *      offset from the server time.
                 * @param relative When true the player time is kept relative to its world
                 *      time.
                 */
                // @ts-ignore
                setPlayerTime(time: number /*long*/, relative: boolean): void
                /**
                 * Returns the player's current timestamp.
                 * @return The player's time
                 */
                // @ts-ignore
                getPlayerTime(): long
                /**
                 * Returns the player's current time offset relative to server time, or
                 * the current player's fixed time if the player's time is absolute.
                 * @return The player's time
                 */
                // @ts-ignore
                getPlayerTimeOffset(): long
                /**
                 * Returns true if the player's time is relative to the server time,
                 * otherwise the player's time is absolute and will not change its current
                 * time unless done so with setPlayerTime().
                 * @return true if the player's time is relative to the server time.
                 */
                // @ts-ignore
                isPlayerTimeRelative(): boolean
                /**
                 * Restores the normal condition where the player's time is synchronized
                 * with the server time.
                 * <p>
                 * Equivalent to calling setPlayerTime(0, true).
                 */
                // @ts-ignore
                resetPlayerTime(): void
                /**
                 * Sets the type of weather the player will see.  When used, the weather
                 * status of the player is locked until {@link #resetPlayerWeather()} is
                 * used.
                 * @param type The WeatherType enum type the player should experience
                 */
                // @ts-ignore
                setPlayerWeather(type: org.bukkit.WeatherType): void
                /**
                 * Returns the type of weather the player is currently experiencing.
                 * @return The WeatherType that the player is currently experiencing or
                 *      null if player is seeing server weather.
                 */
                // @ts-ignore
                getPlayerWeather(): org.bukkit.WeatherType
                /**
                 * Restores the normal condition where the player's weather is controlled
                 * by server conditions.
                 */
                // @ts-ignore
                resetPlayerWeather(): void
                /**
                 * Gives the player the amount of experience specified.
                 * @param amount Exp amount to give
                 */
                // @ts-ignore
                giveExp(amount: number /*int*/): void
                /**
                 * Gives the player the amount of experience levels specified. Levels can
                 * be taken by specifying a negative amount.
                 * @param amount amount of experience levels to give or take
                 */
                // @ts-ignore
                giveExpLevels(amount: number /*int*/): void
                /**
                 * Gets the players current experience points towards the next level.
                 * <p>
                 * This is a percentage value. 0 is "no progress" and 1 is "next level".
                 * @return Current experience points
                 */
                // @ts-ignore
                getExp(): float
                /**
                 * Sets the players current experience points towards the next level
                 * <p>
                 * This is a percentage value. 0 is "no progress" and 1 is "next level".
                 * @param exp New experience points
                 */
                // @ts-ignore
                setExp(exp: number /*float*/): void
                /**
                 * Gets the players current experience level
                 * @return Current experience level
                 */
                // @ts-ignore
                getLevel(): int
                /**
                 * Sets the players current experience level
                 * @param level New experience level
                 */
                // @ts-ignore
                setLevel(level: number /*int*/): void
                /**
                 * Gets the players total experience points.
                 * <br>
                 * This refers to the total amount of experience the player has collected
                 * over time and is not currently displayed to the client.
                 * @return Current total experience points
                 */
                // @ts-ignore
                getTotalExperience(): int
                /**
                 * Sets the players current experience points.
                 * <br>
                 * This refers to the total amount of experience the player has collected
                 * over time and is not currently displayed to the client.
                 * @param exp New total experience points
                 */
                // @ts-ignore
                setTotalExperience(exp: number /*int*/): void
                /**
                 * Send an experience change.
                 * This fakes an experience change packet for a user. This will not actually
                 * change the experience points in any way.
                 * @param progress Experience progress percentage (between 0.0 and 1.0)
                 * @see #setExp(float)
                 */
                // @ts-ignore
                sendExperienceChange(progress: number /*float*/): void
                /**
                 * Send an experience change.
                 * This fakes an experience change packet for a user. This will not actually
                 * change the experience points in any way.
                 * @param progress New experience progress percentage (between 0.0 and 1.0)
                 * @param level New experience level
                 * @see #setExp(float)
                 * @see #setLevel(int)
                 */
                // @ts-ignore
                sendExperienceChange(progress: number /*float*/, level: number /*int*/): void
                /**
                 * Gets the players current exhaustion level.
                 * <p>
                 * Exhaustion controls how fast the food level drops. While you have a
                 * certain amount of exhaustion, your saturation will drop to zero, and
                 * then your food will drop to zero.
                 * @return Exhaustion level
                 */
                // @ts-ignore
                getExhaustion(): float
                /**
                 * Sets the players current exhaustion level
                 * @param value Exhaustion level
                 */
                // @ts-ignore
                setExhaustion(value: number /*float*/): void
                /**
                 * Gets the players current saturation level.
                 * <p>
                 * Saturation is a buffer for food level. Your food level will not drop if
                 * you are saturated {@literal >} 0.
                 * @return Saturation level
                 */
                // @ts-ignore
                getSaturation(): float
                /**
                 * Sets the players current saturation level
                 * @param value Saturation level
                 */
                // @ts-ignore
                setSaturation(value: number /*float*/): void
                /**
                 * Gets the players current food level
                 * @return Food level
                 */
                // @ts-ignore
                getFoodLevel(): int
                /**
                 * Sets the players current food level
                 * @param value New food level
                 */
                // @ts-ignore
                setFoodLevel(value: number /*int*/): void
                /**
                 * Determines if the Player is allowed to fly via jump key double-tap like
                 * in creative mode.
                 * @return True if the player is allowed to fly.
                 */
                // @ts-ignore
                getAllowFlight(): boolean
                /**
                 * Sets if the Player is allowed to fly via jump key double-tap like in
                 * creative mode.
                 * @param flight If flight should be allowed.
                 */
                // @ts-ignore
                setAllowFlight(flight: boolean): void
                /**
                 * Hides a player from this player
                 * @param player Player to hide
                 * @deprecated see {#link #hidePlayer(Plugin, Player)}
                 */
                // @ts-ignore
                hidePlayer(player: org.bukkit.entity.Player): void
                /**
                 * Hides a player from this player
                 * @param plugin Plugin that wants to hide the player
                 * @param player Player to hide
                 */
                // @ts-ignore
                hidePlayer(plugin: org.bukkit.plugin.Plugin, player: org.bukkit.entity.Player): void
                /**
                 * Allows this player to see a player that was previously hidden
                 * @param player Player to show
                 * @deprecated see {#link #showPlayer(Plugin, Player)}
                 */
                // @ts-ignore
                showPlayer(player: org.bukkit.entity.Player): void
                /**
                 * Allows this player to see a player that was previously hidden. If
                 * another another plugin had hidden the player too, then the player will
                 * remain hidden until the other plugin calls this method too.
                 * @param plugin Plugin that wants to show the player
                 * @param player Player to show
                 */
                // @ts-ignore
                showPlayer(plugin: org.bukkit.plugin.Plugin, player: org.bukkit.entity.Player): void
                /**
                 * Checks to see if a player has been hidden from this player
                 * @param player Player to check
                 * @return True if the provided player is not being hidden from this
                 *      player
                 */
                // @ts-ignore
                canSee(player: org.bukkit.entity.Player): boolean
                /**
                 * Checks to see if this player is currently flying or not.
                 * @return True if the player is flying, else false.
                 */
                // @ts-ignore
                isFlying(): boolean
                /**
                 * Makes this player start or stop flying.
                 * @param value True to fly.
                 */
                // @ts-ignore
                setFlying(value: boolean): void
                /**
                 * Sets the speed at which a client will fly. Negative values indicate
                 * reverse directions.
                 * @param value The new speed, from -1 to 1.
                 * @throws IllegalArgumentException If new speed is less than -1 or
                 *      greater than 1
                 */
                // @ts-ignore
                setFlySpeed(value: number /*float*/): void
                /**
                 * Sets the speed at which a client will walk. Negative values indicate
                 * reverse directions.
                 * @param value The new speed, from -1 to 1.
                 * @throws IllegalArgumentException If new speed is less than -1 or
                 *      greater than 1
                 */
                // @ts-ignore
                setWalkSpeed(value: number /*float*/): void
                /**
                 * Gets the current allowed speed that a client can fly.
                 * @return The current allowed speed, from -1 to 1
                 */
                // @ts-ignore
                getFlySpeed(): float
                /**
                 * Gets the current allowed speed that a client can walk.
                 * @return The current allowed speed, from -1 to 1
                 */
                // @ts-ignore
                getWalkSpeed(): float
                /**
                 * Request that the player's client download and switch texture packs.
                 * <p>
                 * The player's client will download the new texture pack asynchronously
                 * in the background, and will automatically switch to it once the
                 * download is complete. If the client has downloaded and cached the same
                 * texture pack in the past, it will perform a file size check against
                 * the response content to determine if the texture pack has changed and
                 * needs to be downloaded again. When this request is sent for the very
                 * first time from a given server, the client will first display a
                 * confirmation GUI to the player before proceeding with the download.
                 * <p>
                 * Notes:
                 * <ul>
                 * <li>Players can disable server textures on their client, in which
                 * case this method will have no affect on them. Use the
                 * {@link PlayerResourcePackStatusEvent} to figure out whether or not
                 * the player loaded the pack!
                 * <li>There is no concept of resetting texture packs back to default
                 * within Minecraft, so players will have to relog to do so or you
                 * have to send an empty pack.
                 * <li>The request is send with "null" as the hash. This might result
                 * in newer versions not loading the pack correctly.
                 * </ul>
                 * @param url The URL from which the client will download the texture
                 *      pack. The string must contain only US-ASCII characters and should
                 *      be encoded as per RFC 1738.
                 * @throws IllegalArgumentException Thrown if the URL is null.
                 * @throws IllegalArgumentException Thrown if the URL is too long.
                 * @deprecated Minecraft no longer uses textures packs. Instead you
                 *      should use {#link #setResourcePack(String)}.
                 */
                // @ts-ignore
                setTexturePack(url: string): void
                /**
                 * Request that the player's client download and switch resource packs.
                 * <p>
                 * The player's client will download the new resource pack asynchronously
                 * in the background, and will automatically switch to it once the
                 * download is complete. If the client has downloaded and cached the same
                 * resource pack in the past, it will perform a file size check against
                 * the response content to determine if the resource pack has changed and
                 * needs to be downloaded again. When this request is sent for the very
                 * first time from a given server, the client will first display a
                 * confirmation GUI to the player before proceeding with the download.
                 * <p>
                 * Notes:
                 * <ul>
                 * <li>Players can disable server resources on their client, in which
                 * case this method will have no affect on them. Use the
                 * {@link PlayerResourcePackStatusEvent} to figure out whether or not
                 * the player loaded the pack!
                 * <li>There is no concept of resetting resource packs back to default
                 * within Minecraft, so players will have to relog to do so or you
                 * have to send an empty pack.
                 * <li>The request is send with "null" as the hash. This might result
                 * in newer versions not loading the pack correctly.
                 * </ul>
                 * @param url The URL from which the client will download the resource
                 *      pack. The string must contain only US-ASCII characters and should
                 *      be encoded as per RFC 1738.
                 * @throws IllegalArgumentException Thrown if the URL is null.
                 * @throws IllegalArgumentException Thrown if the URL is too long. The
                 *      length restriction is an implementation specific arbitrary value.
                 */
                // @ts-ignore
                setResourcePack(url: string): void
                /**
                 * Request that the player's client download and switch resource packs.
                 * <p>
                 * The player's client will download the new resource pack asynchronously
                 * in the background, and will automatically switch to it once the
                 * download is complete. If the client has downloaded and cached a
                 * resource pack with the same hash in the past it will not download but
                 * directly apply the cached pack. When this request is sent for the very
                 * first time from a given server, the client will first display a
                 * confirmation GUI to the player before proceeding with the download.
                 * <p>
                 * Notes:
                 * <ul>
                 * <li>Players can disable server resources on their client, in which
                 * case this method will have no affect on them. Use the
                 * {@link PlayerResourcePackStatusEvent} to figure out whether or not
                 * the player loaded the pack!
                 * <li>There is no concept of resetting resource packs back to default
                 * within Minecraft, so players will have to relog to do so or you
                 * have to send an empty pack.
                 * </ul>
                 * @param url The URL from which the client will download the resource
                 *      pack. The string must contain only US-ASCII characters and should
                 *      be encoded as per RFC 1738.
                 * @param hash The sha1 hash sum of the resource pack file which is used
                 *      to apply a cached version of the pack directly without downloading
                 *      if it is available. Hast to be 20 bytes long!
                 * @throws IllegalArgumentException Thrown if the URL is null.
                 * @throws IllegalArgumentException Thrown if the URL is too long. The
                 *      length restriction is an implementation specific arbitrary value.
                 * @throws IllegalArgumentException Thrown if the hash is null.
                 * @throws IllegalArgumentException Thrown if the hash is not 20 bytes
                 *      long.
                 */
                // @ts-ignore
                setResourcePack(url: string, hash: number /*byte*/[]): void
                /**
                 * Gets the Scoreboard displayed to this player
                 * @return The current scoreboard seen by this player
                 */
                // @ts-ignore
                getScoreboard(): org.bukkit.scoreboard.Scoreboard
                /**
                 * Sets the player's visible Scoreboard.
                 * @param scoreboard New Scoreboard for the player
                 * @throws IllegalArgumentException if scoreboard is null
                 * @throws IllegalArgumentException if scoreboard was not created by the
                 *      {#link org.bukkit.scoreboard.ScoreboardManager scoreboard manager}
                 * @throws IllegalStateException if this is a player that is not logged
                 *      yet or has logged out
                 */
                // @ts-ignore
                setScoreboard(scoreboard: org.bukkit.scoreboard.Scoreboard): void
                /**
                 * Gets if the client is displayed a 'scaled' health, that is, health on a
                 * scale from 0-{@link #getHealthScale()}.
                 * @return if client health display is scaled
                 * @see Player#setHealthScaled(boolean)
                 */
                // @ts-ignore
                isHealthScaled(): boolean
                /**
                 * Sets if the client is displayed a 'scaled' health, that is, health on a
                 * scale from 0-{@link #getHealthScale()}.
                 * <p>
                 * Displayed health follows a simple formula <code>displayedHealth =
                 * getHealth() / getMaxHealth() * getHealthScale()</code>.
                 * @param scale if the client health display is scaled
                 */
                // @ts-ignore
                setHealthScaled(scale: boolean): void
                /**
                 * Sets the number to scale health to for the client; this will also
                 * {@link #setHealthScaled(boolean) setHealthScaled(true)}.
                 * <p>
                 * Displayed health follows a simple formula <code>displayedHealth =
                 * getHealth() / getMaxHealth() * getHealthScale()</code>.
                 * @param scale the number to scale health to
                 * @throws IllegalArgumentException if scale is &lt;0
                 * @throws IllegalArgumentException if scale is {#link Double#NaN}
                 * @throws IllegalArgumentException if scale is too high
                 */
                // @ts-ignore
                setHealthScale(scale: number /*double*/): void
                /**
                 * Gets the number that health is scaled to for the client.
                 * @return the number that health would be scaled to for the client if
                 *      HealthScaling is set to true
                 * @see Player#setHealthScale(double)
                 * @see Player#setHealthScaled(boolean)
                 */
                // @ts-ignore
                getHealthScale(): double
                /**
                 * Gets the entity which is followed by the camera when in
                 * {@link GameMode#SPECTATOR}.
                 * @return the followed entity, or null if not in spectator mode or not
                 *  following a specific entity.
                 */
                // @ts-ignore
                getSpectatorTarget(): org.bukkit.entity.Entity
                /**
                 * Sets the entity which is followed by the camera when in
                 * {@link GameMode#SPECTATOR}.
                 * @param entity the entity to follow or null to reset
                 * @throws IllegalStateException if the player is not in
                 *  {#link GameMode#SPECTATOR}
                 */
                // @ts-ignore
                setSpectatorTarget(entity: org.bukkit.entity.Entity): void
                /**
                 * Sends a title and a subtitle message to the player. If either of these
                 * values are null, they will not be sent and the display will remain
                 * unchanged. If they are empty strings, the display will be updated as
                 * such. If the strings contain a new line, only the first line will be
                 * sent. The titles will be displayed with the client's default timings.
                 * @param title Title text
                 * @param subtitle Subtitle text
                 * @deprecated API behavior subject to change
                 */
                // @ts-ignore
                sendTitle(title: string, subtitle: string): void
                /**
                 * Sends a title and a subtitle message to the player. If either of these
                 * values are null, they will not be sent and the display will remain
                 * unchanged. If they are empty strings, the display will be updated as
                 * such. If the strings contain a new line, only the first line will be
                 * sent. All timings values may take a value of -1 to indicate that they
                 * will use the last value sent (or the defaults if no title has been
                 * displayed).
                 * @param title Title text
                 * @param subtitle Subtitle text
                 * @param fadeIn time in ticks for titles to fade in. Defaults to 10.
                 * @param stay time in ticks for titles to stay. Defaults to 70.
                 * @param fadeOut time in ticks for titles to fade out. Defaults to 20.
                 */
                // @ts-ignore
                sendTitle(title: string, subtitle: string, fadeIn: number /*int*/, stay: number /*int*/, fadeOut: number /*int*/): void
                /**
                 * Resets the title displayed to the player. This will clear the displayed
                 * title / subtitle and reset timings to their default values.
                 */
                // @ts-ignore
                resetTitle(): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 * @param particle the particle to spawn
                 * @param location the location to spawn at
                 * @param count the number of particles
                 */
                // @ts-ignore
                spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 * @param particle the particle to spawn
                 * @param x the position on the x axis to spawn at
                 * @param y the position on the y axis to spawn at
                 * @param z the position on the z axis to spawn at
                 * @param count the number of particles
                 */
                // @ts-ignore
                spawnParticle(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the particle to spawn
                 * @param location the location to spawn at
                 * @param count the number of particles
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, data: T): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location.
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the particle to spawn
                 * @param x the position on the x axis to spawn at
                 * @param y the position on the y axis to spawn at
                 * @param z the position on the z axis to spawn at
                 * @param count the number of particles
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, data: T): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param particle the particle to spawn
                 * @param location the location to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 */
                // @ts-ignore
                spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param particle the particle to spawn
                 * @param x the position on the x axis to spawn at
                 * @param y the position on the y axis to spawn at
                 * @param z the position on the z axis to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 */
                // @ts-ignore
                spawnParticle(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the particle to spawn
                 * @param location the location to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, data: T): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the particle to spawn
                 * @param x the position on the x axis to spawn at
                 * @param y the position on the y axis to spawn at
                 * @param z the position on the z axis to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, data: T): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param particle the particle to spawn
                 * @param location the location to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 * @param extra the extra data for this particle, depends on the
                 *               particle used (normally speed)
                 */
                // @ts-ignore
                spawnParticle(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param particle the particle to spawn
                 * @param x the position on the x axis to spawn at
                 * @param y the position on the y axis to spawn at
                 * @param z the position on the z axis to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 * @param extra the extra data for this particle, depends on the
                 *               particle used (normally speed)
                 */
                // @ts-ignore
                spawnParticle(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the particle to spawn
                 * @param location the location to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 * @param extra the extra data for this particle, depends on the
                 *               particle used (normally speed)
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                spawnParticle<T>(particle: org.bukkit.Particle, location: org.bukkit.Location, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/, data: T): void
                /**
                 * Spawns the particle (the number of times specified by count)
                 * at the target location. The position of each particle will be
                 * randomized positively and negatively by the offset parameters
                 * on each axis.
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the particle to spawn
                 * @param x the position on the x axis to spawn at
                 * @param y the position on the y axis to spawn at
                 * @param z the position on the z axis to spawn at
                 * @param count the number of particles
                 * @param offsetX the maximum random offset on the X axis
                 * @param offsetY the maximum random offset on the Y axis
                 * @param offsetZ the maximum random offset on the Z axis
                 * @param extra the extra data for this particle, depends on the
                 *               particle used (normally speed)
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                spawnParticle<T>(particle: org.bukkit.Particle, x: number /*double*/, y: number /*double*/, z: number /*double*/, count: number /*int*/, offsetX: number /*double*/, offsetY: number /*double*/, offsetZ: number /*double*/, extra: number /*double*/, data: T): void
                /**
                 * Return the player's progression on the specified advancement.
                 * @param advancement advancement
                 * @return object detailing the player's progress
                 */
                // @ts-ignore
                getAdvancementProgress(advancement: org.bukkit.advancement.Advancement): org.bukkit.advancement.AdvancementProgress
                /**
                 * Get the player's current client side view distance.
                 * <br>
                 * Will default to the server view distance if the client has not yet
                 * communicated this information,
                 * @return client view distance as above
                 */
                // @ts-ignore
                getClientViewDistance(): int
                /**
                 * Gets the player's current locale.
                 * The value of the locale String is not defined properly.
                 * <br>
                 * The vanilla Minecraft client will use lowercase language / country pairs
                 * separated by an underscore, but custom resource packs may use any format
                 * they wish.
                 * @return the player's locale
                 */
                // @ts-ignore
                getLocale(): java.lang.String
                /**
                 * Update the list of commands sent to the client.
                 * <br>
                 * Generally useful to ensure the client has a complete list of commands
                 * after permission changes are done.
                 */
                // @ts-ignore
                updateCommands(): void
                /**
                 * Open a {@link Material#WRITTEN_BOOK} for a Player
                 * @param book The book to open for this player
                 */
                // @ts-ignore
                openBook(book: org.bukkit.inventory.ItemStack): void
                // @ts-ignore
                spigot(): org.bukkit.entity.Player.Spigot
            }
        }
    }
}
