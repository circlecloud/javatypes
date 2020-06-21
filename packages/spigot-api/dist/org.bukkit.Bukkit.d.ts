declare namespace org {
    namespace bukkit {
        /**
         * Represents the Bukkit core, for version and Server singleton handling
         */
        // @ts-ignore
        class Bukkit extends java.lang.Object {
            /**
             * Gets the current {@link Server} singleton
             * @return Server instance being ran
             */
            // @ts-ignore
            public static getServer(): org.bukkit.Server
            /**
             * Attempts to set the {@link Server} singleton.
             * <p>
             * This cannot be done if the Server is already set.
             * @param server Server instance
             */
            // @ts-ignore
            public static setServer(server: org.bukkit.Server): void
            /**
             * Gets the name of this server implementation.
             * @return name of this server implementation
             */
            // @ts-ignore
            public static getName(): string
            /**
             * Gets the version string of this server implementation.
             * @return version of this server implementation
             */
            // @ts-ignore
            public static getVersion(): string
            /**
             * Gets the Bukkit version that this server is running.
             * @return version of Bukkit
             */
            // @ts-ignore
            public static getBukkitVersion(): string
            /**
             * Gets a view of all currently logged in players. This {@linkplain
             * Collections#unmodifiableCollection(Collection) view} is a reused
             * object, making some operations like {@link Collection#size()}
             * zero-allocation.
             * <p>
             * The collection is a view backed by the internal representation, such
             * that, changes to the internal state of the server will be reflected
             * immediately. However, the reuse of the returned collection (identity)
             * is not strictly guaranteed for future or all implementations. Casting
             * the collection, or relying on interface implementations (like {@link
             * Serializable} or {@link List}), is deprecated.
             * <p>
             * Iteration behavior is undefined outside of self-contained main-thread
             * uses. Normal and immediate iterator use without consequences that
             * affect the collection are fully supported. The effects following
             * (non-exhaustive) {@link Entity#teleport(Location) teleportation},
             * {@link Player#setHealth(double) death}, and {@link Player#kickPlayer(
             * String) kicking} are undefined. Any use of this collection from
             * asynchronous threads is unsafe.
             * <p>
             * For safe consequential iteration or mimicking the old array behavior,
             * using {@link Collection#toArray(Object[])} is recommended. For making
             * snapshots, {@link ImmutableList#copyOf(Collection)} is recommended.
             * @return a view of currently online players.
             */
            // @ts-ignore
            public static getOnlinePlayers(): Array<any>
            /**
             * Get the maximum amount of players which can login to this server.
             * @return the amount of players this server allows
             */
            // @ts-ignore
            public static getMaxPlayers(): number /*int*/
            /**
             * Get the game port that the server runs on.
             * @return the port number of this server
             */
            // @ts-ignore
            public static getPort(): number /*int*/
            /**
             * Get the view distance from this server.
             * @return the view distance from this server.
             */
            // @ts-ignore
            public static getViewDistance(): number /*int*/
            /**
             * Get the IP that this server is bound to, or empty string if not
             * specified.
             * @return the IP string that this server is bound to, otherwise empty
             *      string
             */
            // @ts-ignore
            public static getIp(): string
            /**
             * Get world type (level-type setting) for default world.
             * @return the value of level-type (e.g. DEFAULT, FLAT, DEFAULT_1_1)
             */
            // @ts-ignore
            public static getWorldType(): string
            /**
             * Get generate-structures setting.
             * @return true if structure generation is enabled, false otherwise
             */
            // @ts-ignore
            public static getGenerateStructures(): boolean
            /**
             * Gets whether this server allows the End or not.
             * @return whether this server allows the End or not
             */
            // @ts-ignore
            public static getAllowEnd(): boolean
            /**
             * Gets whether this server allows the Nether or not.
             * @return whether this server allows the Nether or not
             */
            // @ts-ignore
            public static getAllowNether(): boolean
            /**
             * Gets whether this server has a whitelist or not.
             * @return whether this server has a whitelist or not
             */
            // @ts-ignore
            public static hasWhitelist(): boolean
            /**
             * Sets if the server is whitelisted.
             * @param value true for whitelist on, false for off
             */
            // @ts-ignore
            public static setWhitelist(value: boolean): void
            /**
             * Gets a list of whitelisted players.
             * @return a set containing all whitelisted players
             */
            // @ts-ignore
            public static getWhitelistedPlayers(): Array<org.bukkit.OfflinePlayer>
            /**
             * Reloads the whitelist from disk.
             */
            // @ts-ignore
            public static reloadWhitelist(): void
            /**
             * Broadcast a message to all players.
             * <p>
             * This is the same as calling {@link #broadcast(java.lang.String,
             * java.lang.String)} to {@link Server#BROADCAST_CHANNEL_USERS}
             * @param message the message
             * @return the number of players
             */
            // @ts-ignore
            public static broadcastMessage(message: java.lang.String | string): number /*int*/
            /**
             * Gets the name of the update folder. The update folder is used to safely
             * update plugins at the right moment on a plugin load.
             * <p>
             * The update folder name is relative to the plugins folder.
             * @return the name of the update folder
             */
            // @ts-ignore
            public static getUpdateFolder(): string
            /**
             * Gets the update folder. The update folder is used to safely update
             * plugins at the right moment on a plugin load.
             * @return the update folder
             */
            // @ts-ignore
            public static getUpdateFolderFile(): java.io.File
            /**
             * Gets the value of the connection throttle setting.
             * @return the value of the connection throttle setting
             */
            // @ts-ignore
            public static getConnectionThrottle(): number /*long*/
            /**
             * Gets default ticks per animal spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, animal spawning will be disabled. We
             * recommend using spawn-animals to control this instead.
             * <p>
             * Minecraft default: 400.
             * @return the default ticks per animal spawns value
             */
            // @ts-ignore
            public static getTicksPerAnimalSpawns(): number /*int*/
            /**
             * Gets the default ticks per monster spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn monsters
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn monsters
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, monsters spawning will be disabled. We
             * recommend using spawn-monsters to control this instead.
             * <p>
             * Minecraft default: 1.
             * @return the default ticks per monsters spawn value
             */
            // @ts-ignore
            public static getTicksPerMonsterSpawns(): number /*int*/
            /**
             * Gets the default ticks per water mob spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn water mobs
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn water mobs
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, water mobs spawning will be disabled.
             * <p>
             * Minecraft default: 1.
             * @return the default ticks per water mobs spawn value
             */
            // @ts-ignore
            public static getTicksPerWaterSpawns(): number /*int*/
            /**
             * Gets the default ticks per ambient mob spawns value.
             * <p>
             * <b>Example Usage:</b>
             * <ul>
             * <li>A value of 1 will mean the server will attempt to spawn ambient mobs
             * every tick.
             * <li>A value of 400 will mean the server will attempt to spawn ambient mobs
             * every 400th tick.
             * <li>A value below 0 will be reset back to Minecraft's default.
             * </ul>
             * <p>
             * <b>Note:</b> If set to 0, ambient mobs spawning will be disabled.
             * <p>
             * Minecraft default: 1.
             * @return the default ticks per ambient mobs spawn value
             */
            // @ts-ignore
            public static getTicksPerAmbientSpawns(): number /*int*/
            /**
             * Gets a player object by the given username.
             * <p>
             * This method may not return objects for offline players.
             * @param name the name to look up
             * @return a player if one was found, null otherwise
             */
            // @ts-ignore
            public static getPlayer(name: java.lang.String | string): org.bukkit.entity.Player
            /**
             * Gets the player with the exact given name, case insensitive.
             * @param name Exact name of the player to retrieve
             * @return a player object if one was found, null otherwise
             */
            // @ts-ignore
            public static getPlayerExact(name: java.lang.String | string): org.bukkit.entity.Player
            /**
             * Attempts to match any players with the given name, and returns a list
             * of all possibly matches.
             * <p>
             * This list is not sorted in any particular order. If an exact match is
             * found, the returned list will only contain a single result.
             * @param name the (partial) name to match
             * @return list of all possible players
             */
            // @ts-ignore
            public static matchPlayer(name: java.lang.String | string): Array<org.bukkit.entity.Player>
            /**
             * Gets the player with the given UUID.
             * @param id UUID of the player to retrieve
             * @return a player object if one was found, null otherwise
             */
            // @ts-ignore
            public static getPlayer(id: java.util.UUID): org.bukkit.entity.Player
            /**
             * Gets the plugin manager for interfacing with plugins.
             * @return a plugin manager for this Server instance
             */
            // @ts-ignore
            public static getPluginManager(): org.bukkit.plugin.PluginManager
            /**
             * Gets the scheduler for managing scheduled events.
             * @return a scheduling service for this server
             */
            // @ts-ignore
            public static getScheduler(): org.bukkit.scheduler.BukkitScheduler
            /**
             * Gets a services manager.
             * @return s services manager
             */
            // @ts-ignore
            public static getServicesManager(): org.bukkit.plugin.ServicesManager
            /**
             * Gets a list of all worlds on this server.
             * @return a list of worlds
             */
            // @ts-ignore
            public static getWorlds(): Array<org.bukkit.World>
            /**
             * Creates or loads a world with the given name using the specified
             * options.
             * <p>
             * If the world is already loaded, it will just return the equivalent of
             * getWorld(creator.name()).
             * @param creator the options to use when creating the world
             * @return newly created or loaded world
             */
            // @ts-ignore
            public static createWorld(creator: org.bukkit.WorldCreator): org.bukkit.World
            /**
             * Unloads a world with the given name.
             * @param name Name of the world to unload
             * @param save whether to save the chunks before unloading
             * @return true if successful, false otherwise
             */
            // @ts-ignore
            public static unloadWorld(name: java.lang.String | string, save: boolean): boolean
            /**
             * Unloads the given world.
             * @param world the world to unload
             * @param save whether to save the chunks before unloading
             * @return true if successful, false otherwise
             */
            // @ts-ignore
            public static unloadWorld(world: org.bukkit.World, save: boolean): boolean
            /**
             * Gets the world with the given name.
             * @param name the name of the world to retrieve
             * @return a world with the given name, or null if none exists
             */
            // @ts-ignore
            public static getWorld(name: java.lang.String | string): org.bukkit.World
            /**
             * Gets the world from the given Unique ID.
             * @param uid a unique-id of the world to retrieve
             * @return a world with the given Unique ID, or null if none exists
             */
            // @ts-ignore
            public static getWorld(uid: java.util.UUID): org.bukkit.World
            /**
             * Gets the map from the given item ID.
             * @param id the id of the map to get
             * @return a map view if it exists, or null otherwise
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getMap(id: number /*int*/): org.bukkit.map.MapView
            /**
             * Create a new map with an automatically assigned ID.
             * @param world the world the map will belong to
             * @return a newly created map view
             */
            // @ts-ignore
            public static createMap(world: org.bukkit.World): org.bukkit.map.MapView
            /**
             * Create a new explorer map targeting the closest nearby structure of a
             * given {@link StructureType}.
             * <br>
             * This method uses implementation default values for radius and
             * findUnexplored (usually 100, true).
             * @param world the world the map will belong to
             * @param location the origin location to find the nearest structure
             * @param structureType the type of structure to find
             * @return a newly created item stack
             * @see World#locateNearestStructure(org.bukkit.Location,
             *       org.bukkit.StructureType, int, boolean)
             */
            // @ts-ignore
            public static createExplorerMap(world: org.bukkit.World, location: org.bukkit.Location, structureType: org.bukkit.StructureType): org.bukkit.inventory.ItemStack
            /**
             * Create a new explorer map targeting the closest nearby structure of a
             * given {@link StructureType}.
             * <br>
             * This method uses implementation default values for radius and
             * findUnexplored (usually 100, true).
             * @param world the world the map will belong to
             * @param location the origin location to find the nearest structure
             * @param structureType the type of structure to find
             * @param radius radius to search, see World#locateNearestStructure for more
             *                information
             * @param findUnexplored whether to find unexplored structures
             * @return the newly created item stack
             * @see World#locateNearestStructure(org.bukkit.Location,
             *       org.bukkit.StructureType, int, boolean)
             */
            // @ts-ignore
            public static createExplorerMap(world: org.bukkit.World, location: org.bukkit.Location, structureType: org.bukkit.StructureType, radius: number /*int*/, findUnexplored: boolean): org.bukkit.inventory.ItemStack
            /**
             * Reloads the server, refreshing settings and plugin information.
             */
            // @ts-ignore
            public static reload(): void
            /**
             * Reload only the Minecraft data for the server. This includes custom
             * advancements and loot tables.
             */
            // @ts-ignore
            public static reloadData(): void
            /**
             * Returns the primary logger associated with this server instance.
             * @return Logger associated with this server
             */
            // @ts-ignore
            public static getLogger(): java.util.logging.Logger
            /**
             * Gets a {@link PluginCommand} with the given name or alias.
             * @param name the name of the command to retrieve
             * @return a plugin command if found, null otherwise
             */
            // @ts-ignore
            public static getPluginCommand(name: java.lang.String | string): org.bukkit.command.PluginCommand
            /**
             * Writes loaded players to disk.
             */
            // @ts-ignore
            public static savePlayers(): void
            /**
             * Dispatches a command on this server, and executes it if found.
             * @param sender the apparent sender of the command
             * @param commandLine the command + arguments. Example: <code>test abc
             *      123</code>
             * @return returns false if no target is found
             * @throws CommandException thrown when the executor for the given command
             *      fails with an unhandled exception
             */
            // @ts-ignore
            public static dispatchCommand(sender: org.bukkit.command.CommandSender, commandLine: java.lang.String | string): boolean
            /**
             * Adds a recipe to the crafting manager.
             * @param recipe the recipe to add
             * @return true if the recipe was added, false if it wasn't for some
             *      reason
             */
            // @ts-ignore
            public static addRecipe(recipe: org.bukkit.inventory.Recipe): boolean
            /**
             * Get a list of all recipes for a given item. The stack size is ignored
             * in comparisons. If the durability is -1, it will match any data value.
             * @param result the item to match against recipe results
             * @return a list of recipes with the given result
             */
            // @ts-ignore
            public static getRecipesFor(result: org.bukkit.inventory.ItemStack): Array<org.bukkit.inventory.Recipe>
            /**
             * Get an iterator through the list of crafting recipes.
             * @return an iterator
             */
            // @ts-ignore
            public static recipeIterator(): java.util.Iterator<org.bukkit.inventory.Recipe>
            /**
             * Clears the list of crafting recipes.
             */
            // @ts-ignore
            public static clearRecipes(): void
            /**
             * Resets the list of crafting recipes to the default.
             */
            // @ts-ignore
            public static resetRecipes(): void
            /**
             * Remove a recipe from the server.
             * <b>Note that removing a recipe may cause permanent loss of data
             * associated with that recipe (eg whether it has been discovered by
             * players).</b>
             * @param key NamespacedKey of recipe to remove.
             * @return True if recipe was removed
             */
            // @ts-ignore
            public static removeRecipe(key: org.bukkit.NamespacedKey): boolean
            /**
             * Gets a list of command aliases defined in the server properties.
             * @return a map of aliases to command names
             */
            // @ts-ignore
            public static getCommandAliases(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
            /**
             * Gets the radius, in blocks, around each worlds spawn point to protect.
             * @return spawn radius, or 0 if none
             */
            // @ts-ignore
            public static getSpawnRadius(): number /*int*/
            /**
             * Sets the radius, in blocks, around each worlds spawn point to protect.
             * @param value new spawn radius, or 0 if none
             */
            // @ts-ignore
            public static setSpawnRadius(value: number /*int*/): void
            /**
             * Gets whether the Server is in online mode or not.
             * @return true if the server authenticates clients, false otherwise
             */
            // @ts-ignore
            public static getOnlineMode(): boolean
            /**
             * Gets whether this server allows flying or not.
             * @return true if the server allows flight, false otherwise
             */
            // @ts-ignore
            public static getAllowFlight(): boolean
            /**
             * Gets whether the server is in hardcore mode or not.
             * @return true if the server mode is hardcore, false otherwise
             */
            // @ts-ignore
            public static isHardcore(): boolean
            /**
             * Shutdowns the server, stopping everything.
             */
            // @ts-ignore
            public static shutdown(): void
            /**
             * Broadcasts the specified message to every user with the given
             * permission name.
             * @param message message to broadcast
             * @param permission the required permission {#link Permissible
             *      permissibles} must have to receive the broadcast
             * @return number of message recipients
             */
            // @ts-ignore
            public static broadcast(message: java.lang.String | string, permission: java.lang.String | string): number /*int*/
            /**
             * Gets the player by the given name, regardless if they are offline or
             * online.
             * <p>
             * This method may involve a blocking web request to get the UUID for the
             * given name.
             * <p>
             * This will return an object even if the player does not exist. To this
             * method, all players will exist.
             * @deprecated Persistent storage of users should be by UUID as names are no longer
             *              unique past a single session.
             * @param name the name the player to retrieve
             * @return an offline player
             * @see #getOfflinePlayer(java.util.UUID)
             */
            // @ts-ignore
            public static getOfflinePlayer(name: java.lang.String | string): org.bukkit.OfflinePlayer
            /**
             * Gets the player by the given UUID, regardless if they are offline or
             * online.
             * <p>
             * This will return an object even if the player does not exist. To this
             * method, all players will exist.
             * @param id the UUID of the player to retrieve
             * @return an offline player
             */
            // @ts-ignore
            public static getOfflinePlayer(id: java.util.UUID): org.bukkit.OfflinePlayer
            /**
             * Gets a set containing all current IPs that are banned.
             * @return a set containing banned IP addresses
             */
            // @ts-ignore
            public static getIPBans(): Array<java.lang.String | string>
            /**
             * Bans the specified address from the server.
             * @param address the IP address to ban
             */
            // @ts-ignore
            public static banIP(address: java.lang.String | string): void
            /**
             * Unbans the specified address from the server.
             * @param address the IP address to unban
             */
            // @ts-ignore
            public static unbanIP(address: java.lang.String | string): void
            /**
             * Gets a set containing all banned players.
             * @return a set containing banned players
             */
            // @ts-ignore
            public static getBannedPlayers(): Array<org.bukkit.OfflinePlayer>
            /**
             * Gets a ban list for the supplied type.
             * <p>
             * Bans by name are no longer supported and this method will return
             * null when trying to request them. The replacement is bans by UUID.
             * @param type the type of list to fetch, cannot be null
             * @return a ban list of the specified type
             */
            // @ts-ignore
            public static getBanList(type: org.bukkit.BanList.Type): org.bukkit.BanList
            /**
             * Gets a set containing all player operators.
             * @return a set containing player operators
             */
            // @ts-ignore
            public static getOperators(): Array<org.bukkit.OfflinePlayer>
            /**
             * Gets the default {@link GameMode} for new players.
             * @return the default game mode
             */
            // @ts-ignore
            public static getDefaultGameMode(): org.bukkit.GameMode
            /**
             * Sets the default {@link GameMode} for new players.
             * @param mode the new game mode
             */
            // @ts-ignore
            public static setDefaultGameMode(mode: org.bukkit.GameMode): void
            /**
             * Gets a {@link ConsoleCommandSender} that may be used as an input source
             * for this server.
             * @return a console command sender
             */
            // @ts-ignore
            public static getConsoleSender(): org.bukkit.command.ConsoleCommandSender
            /**
             * Gets the folder that contains all of the various {@link World}s.
             * @return folder that contains all worlds
             */
            // @ts-ignore
            public static getWorldContainer(): java.io.File
            /**
             * Gets every player that has ever played on this server.
             * @return an array containing all previous players
             */
            // @ts-ignore
            public static getOfflinePlayers(): org.bukkit.OfflinePlayer[]
            /**
             * Gets the {@link Messenger} responsible for this server.
             * @return messenger responsible for this server
             */
            // @ts-ignore
            public static getMessenger(): org.bukkit.plugin.messaging.Messenger
            /**
             * Gets the {@link HelpMap} providing help topics for this server.
             * @return a help map for this server
             */
            // @ts-ignore
            public static getHelpMap(): org.bukkit.help.HelpMap
            /**
             * Creates an empty inventory with the specified type. If the type
             * is {@link InventoryType#CHEST}, the new inventory has a size of 27;
             * otherwise the new inventory has the normal size for its type.
             * <br>
             * {@link InventoryType#WORKBENCH} will not process crafting recipes if
             * created with this method. Use
             * {@link Player#openWorkbench(Location, boolean)} instead.
             * <br>
             * {@link InventoryType#ENCHANTING} will not process {@link ItemStack}s
             * for possible enchanting results. Use
             * {@link Player#openEnchanting(Location, boolean)} instead.
             * @param owner the holder of the inventory, or null to indicate no holder
             * @param type the type of inventory to create
             * @return a new inventory
             * @throws IllegalArgumentException if the {#link InventoryType} cannot be
             *  viewed.
             * @see InventoryType#isCreatable()
             */
            // @ts-ignore
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, type: org.bukkit.event.inventory.InventoryType): org.bukkit.inventory.Inventory
            /**
             * Creates an empty inventory with the specified type and title. If the type
             * is {@link InventoryType#CHEST}, the new inventory has a size of 27;
             * otherwise the new inventory has the normal size for its type.<br>
             * It should be noted that some inventory types do not support titles and
             * may not render with said titles on the Minecraft client.
             * <br>
             * {@link InventoryType#WORKBENCH} will not process crafting recipes if
             * created with this method. Use
             * {@link Player#openWorkbench(Location, boolean)} instead.
             * <br>
             * {@link InventoryType#ENCHANTING} will not process {@link ItemStack}s
             * for possible enchanting results. Use
             * {@link Player#openEnchanting(Location, boolean)} instead.
             * @param owner The holder of the inventory; can be null if there's no holder.
             * @param type The type of inventory to create.
             * @param title The title of the inventory, to be displayed when it is viewed.
             * @return The new inventory.
             * @throws IllegalArgumentException if the {#link InventoryType} cannot be
             *  viewed.
             * @see InventoryType#isCreatable()
             */
            // @ts-ignore
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, type: org.bukkit.event.inventory.InventoryType, title: java.lang.String | string): org.bukkit.inventory.Inventory
            /**
             * Creates an empty inventory of type {@link InventoryType#CHEST} with the
             * specified size.
             * @param owner the holder of the inventory, or null to indicate no holder
             * @param size a multiple of 9 as the size of inventory to create
             * @return a new inventory
             * @throws IllegalArgumentException if the size is not a multiple of 9
             */
            // @ts-ignore
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, size: number /*int*/): org.bukkit.inventory.Inventory
            /**
             * Creates an empty inventory of type {@link InventoryType#CHEST} with the
             * specified size and title.
             * @param owner the holder of the inventory, or null to indicate no holder
             * @param size a multiple of 9 as the size of inventory to create
             * @param title the title of the inventory, displayed when inventory is
             *      viewed
             * @return a new inventory
             * @throws IllegalArgumentException if the size is not a multiple of 9
             */
            // @ts-ignore
            public static createInventory(owner: org.bukkit.inventory.InventoryHolder, size: number /*int*/, title: java.lang.String | string): org.bukkit.inventory.Inventory
            /**
             * Creates an empty merchant.
             * @param title the title of the corresponding merchant inventory, displayed
             *  when the merchant inventory is viewed
             * @return a new merchant
             */
            // @ts-ignore
            public static createMerchant(title: java.lang.String | string): org.bukkit.inventory.Merchant
            /**
             * Gets user-specified limit for number of monsters that can spawn in a
             * chunk.
             * @return the monster spawn limit
             */
            // @ts-ignore
            public static getMonsterSpawnLimit(): number /*int*/
            /**
             * Gets user-specified limit for number of animals that can spawn in a
             * chunk.
             * @return the animal spawn limit
             */
            // @ts-ignore
            public static getAnimalSpawnLimit(): number /*int*/
            /**
             * Gets user-specified limit for number of water animals that can spawn in
             * a chunk.
             * @return the water animal spawn limit
             */
            // @ts-ignore
            public static getWaterAnimalSpawnLimit(): number /*int*/
            /**
             * Gets user-specified limit for number of ambient mobs that can spawn in
             * a chunk.
             * @return the ambient spawn limit
             */
            // @ts-ignore
            public static getAmbientSpawnLimit(): number /*int*/
            /**
             * Checks the current thread against the expected primary thread for the
             * server.
             * <p>
             * <b>Note:</b> this method should not be used to indicate the current
             * synchronized state of the runtime. A current thread matching the main
             * thread indicates that it is synchronized, but a mismatch <b>does not
             * preclude</b> the same assumption.
             * @return true if the current thread matches the expected primary thread,
             *      false otherwise
             */
            // @ts-ignore
            public static isPrimaryThread(): boolean
            /**
             * Gets the message that is displayed on the server list.
             * @return the servers MOTD
             */
            // @ts-ignore
            public static getMotd(): string
            /**
             * Gets the default message that is displayed when the server is stopped.
             * @return the shutdown message
             */
            // @ts-ignore
            public static getShutdownMessage(): string
            /**
             * Gets the current warning state for the server.
             * @return the configured warning state
             */
            // @ts-ignore
            public static getWarningState(): org.bukkit.Warning.WarningState
            /**
             * Gets the instance of the item factory (for {@link ItemMeta}).
             * @return the item factory
             * @see ItemFactory
             */
            // @ts-ignore
            public static getItemFactory(): org.bukkit.inventory.ItemFactory
            /**
             * Gets the instance of the scoreboard manager.
             * <p>
             * This will only exist after the first world has loaded.
             * @return the scoreboard manager or null if no worlds are loaded.
             */
            // @ts-ignore
            public static getScoreboardManager(): org.bukkit.scoreboard.ScoreboardManager
            /**
             * Gets an instance of the server's default server-icon.
             * @return the default server-icon; null values may be used by the
             *      implementation to indicate no defined icon, but this behavior is
             *      not guaranteed
             */
            // @ts-ignore
            public static getServerIcon(): org.bukkit.util.CachedServerIcon
            /**
             * Loads an image from a file, and returns a cached image for the specific
             * server-icon.
             * <p>
             * Size and type are implementation defined. An incompatible file is
             * guaranteed to throw an implementation-defined {@link Exception}.
             * @param file the file to load the from
             * @throws IllegalArgumentException if image is null
             * @throws Exception if the image does not meet current server server-icon
             *      specifications
             * @return a cached server-icon that can be used for a {#link
             *      ServerListPingEvent#setServerIcon(CachedServerIcon)}
             */
            // @ts-ignore
            public static loadServerIcon(file: java.io.File): org.bukkit.util.CachedServerIcon
            /**
             * Creates a cached server-icon for the specific image.
             * <p>
             * Size and type are implementation defined. An incompatible file is
             * guaranteed to throw an implementation-defined {@link Exception}.
             * @param image the image to use
             * @throws IllegalArgumentException if image is null
             * @throws Exception if the image does not meet current server
             *      server-icon specifications
             * @return a cached server-icon that can be used for a {#link
             *      ServerListPingEvent#setServerIcon(CachedServerIcon)}
             */
            // @ts-ignore
            public static loadServerIcon(image: java.awt.image.BufferedImage): org.bukkit.util.CachedServerIcon
            /**
             * Set the idle kick timeout. Any players idle for the specified amount of
             * time will be automatically kicked.
             * <p>
             * A value of 0 will disable the idle kick timeout.
             * @param threshold the idle timeout in minutes
             */
            // @ts-ignore
            public static setIdleTimeout(threshold: number /*int*/): void
            /**
             * Gets the idle kick timeout.
             * @return the idle timeout in minutes
             */
            // @ts-ignore
            public static getIdleTimeout(): number /*int*/
            /**
             * Create a ChunkData for use in a generator.
             * See {@link ChunkGenerator#generateChunkData(org.bukkit.World, java.util.Random, int, int, org.bukkit.generator.ChunkGenerator.BiomeGrid)}
             * @param world the world to create the ChunkData for
             * @return a new ChunkData for the world
             */
            // @ts-ignore
            public static createChunkData(world: org.bukkit.World): org.bukkit.generator.ChunkGenerator.ChunkData
            /**
             * Creates a boss bar instance to display to players. The progress
             * defaults to 1.0
             * @param title the title of the boss bar
             * @param color the color of the boss bar
             * @param style the style of the boss bar
             * @param flags an optional list of flags to set on the boss bar
             * @return the created boss bar
             */
            // @ts-ignore
            public static createBossBar(title: java.lang.String | string, color: org.bukkit.boss.BarColor, style: org.bukkit.boss.BarStyle, ...flags: org.bukkit.boss.BarFlag[]): org.bukkit.boss.BossBar
            /**
             * Creates a boss bar instance to display to players. The progress defaults
             * to 1.0.
             * <br>
             * This instance is added to the persistent storage of the server and will
             * be editable by commands and restored after restart.
             * @param key the key of the boss bar that is used to access the boss bar
             * @param title the title of the boss bar
             * @param color the color of the boss bar
             * @param style the style of the boss bar
             * @param flags an optional list of flags to set on the boss bar
             * @return the created boss bar
             */
            // @ts-ignore
            public static createBossBar(key: org.bukkit.NamespacedKey, title: java.lang.String | string, color: org.bukkit.boss.BarColor, style: org.bukkit.boss.BarStyle, ...flags: org.bukkit.boss.BarFlag[]): org.bukkit.boss.KeyedBossBar
            /**
             * Gets an unmodifiable iterator through all persistent bossbars.
             * <ul>
             * <li><b>not</b> bound to a {@link org.bukkit.entity.Boss}</li>
             * <li>
             * <b>not</b> created using
             * {@link #createBossBar(String, BarColor, BarStyle, BarFlag...)}
             * </li>
             * </ul>
             * e.g. bossbars created using the bossbar command
             * @return a bossbar iterator
             */
            // @ts-ignore
            public static getBossBars(): java.util.Iterator<org.bukkit.boss.KeyedBossBar>
            /**
             * Gets the {@link KeyedBossBar} specified by this key.
             * <ul>
             * <li><b>not</b> bound to a {@link org.bukkit.entity.Boss}</li>
             * <li>
             * <b>not</b> created using
             * {@link #createBossBar(String, BarColor, BarStyle, BarFlag...)}
             * </li>
             * </ul>
             * e.g. bossbars created using the bossbar command
             * @param key unique bossbar key
             * @return bossbar or null if not exists
             */
            // @ts-ignore
            public static getBossBar(key: org.bukkit.NamespacedKey): org.bukkit.boss.KeyedBossBar
            /**
             * Removes a {@link KeyedBossBar} specified by this key.
             * <ul>
             * <li><b>not</b> bound to a {@link org.bukkit.entity.Boss}</li>
             * <li>
             * <b>not</b> created using
             * {@link #createBossBar(String, BarColor, BarStyle, BarFlag...)}
             * </li>
             * </ul>
             * e.g. bossbars created using the bossbar command
             * @param key unique bossbar key
             * @return true if removal succeeded or false
             */
            // @ts-ignore
            public static removeBossBar(key: org.bukkit.NamespacedKey): boolean
            /**
             * Gets an entity on the server by its UUID
             * @param uuid the UUID of the entity
             * @return the entity with the given UUID, or null if it isn't found
             */
            // @ts-ignore
            public static getEntity(uuid: java.util.UUID): org.bukkit.entity.Entity
            /**
             * Get the advancement specified by this key.
             * @param key unique advancement key
             * @return advancement or null if not exists
             */
            // @ts-ignore
            public static getAdvancement(key: org.bukkit.NamespacedKey): org.bukkit.advancement.Advancement
            /**
             * Get an iterator through all advancements. Advancements cannot be removed
             * from this iterator,
             * @return an advancement iterator
             */
            // @ts-ignore
            public static advancementIterator(): java.util.Iterator<org.bukkit.advancement.Advancement>
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults.
             * @param material the material
             * @return new data instance
             */
            // @ts-ignore
            public static createBlockData(material: org.bukkit.Material): org.bukkit.block.data.BlockData
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults.
             * @param material the material
             * @param consumer consumer to run on new instance before returning
             * @return new data instance
             */
            // @ts-ignore
            public static createBlockData(material: org.bukkit.Material, consumer: java.util.function$.Consumer<org.bukkit.block.data.BlockData>): org.bukkit.block.data.BlockData
            /**
             * Creates a new {@link BlockData} instance with material and properties
             * parsed from provided data.
             * @param data data string
             * @return new data instance
             * @throws IllegalArgumentException if the specified data is not valid
             */
            // @ts-ignore
            public static createBlockData(data: java.lang.String | string): org.bukkit.block.data.BlockData
            /**
             * Creates a new {@link BlockData} instance for the specified Material, with
             * all properties initialized to unspecified defaults, except for those
             * provided in data.
             * @param material the material
             * @param data data string
             * @return new data instance
             * @throws IllegalArgumentException if the specified data is not valid
             */
            // @ts-ignore
            public static createBlockData(material: org.bukkit.Material, data: java.lang.String | string): org.bukkit.block.data.BlockData
            /**
             * Gets a tag which has already been defined within the server. Plugins are
             * suggested to use the concrete tags in {@link Tag} rather than this method
             * which makes no guarantees about which tags are available, and may also be
             * less performant due to lack of caching.
             * <br>
             * Tags will be searched for in an implementation specific manner, but a
             * path consisting of namespace/tags/registry/key is expected.
             * <br>
             * Server implementations are allowed to handle only the registries
             * indicated in {@link Tag}.
             * @param <T> type of the tag
             * @param registry the tag registry to look at
             * @param tag the name of the tag
             * @param clazz the class of the tag entries
             * @return the tag or null
             */
            // @ts-ignore
            public static getTag<T extends org.bukkit.Keyed>(registry: java.lang.String | string, tag: org.bukkit.NamespacedKey, clazz: java.lang.Class<T>): org.bukkit.Tag<T>
            /**
             * Gets a all tags which have been defined within the server.
             * <br>
             * Server implementations are allowed to handle only the registries
             * indicated in {@link Tag}.
             * <br>
             * No guarantees are made about the mutability of the returned iterator.
             * @param <T> type of the tag
             * @param registry the tag registry to look at
             * @param clazz the class of the tag entries
             * @return all defined tags
             */
            // @ts-ignore
            public static getTags<T extends org.bukkit.Keyed>(registry: java.lang.String | string, clazz: java.lang.Class<T>): java.lang.Iterable<org.bukkit.Tag<T>>
            /**
             * Gets the specified {@link LootTable}.
             * @param key the name of the LootTable
             * @return the LootTable, or null if no LootTable is found with that name
             */
            // @ts-ignore
            public static getLootTable(key: org.bukkit.NamespacedKey): org.bukkit.loot.LootTable
            /**
             * Selects entities using the given Vanilla selector.
             * <br>
             * No guarantees are made about the selector format, other than they match
             * the Vanilla format for the active Minecraft version.
             * <br>
             * Usually a selector will start with '@', unless selecting a Player in
             * which case it may simply be the Player's name or UUID.
             * <br>
             * Note that in Vanilla, elevated permissions are usually required to use
             * '@' selectors, but this method should not check such permissions from the
             * sender.
             * @param sender the sender to execute as, must be provided
             * @param selector the selection string
             * @return a list of the selected entities. The list will not be null, but
             *  no further guarantees are made.
             * @throws IllegalArgumentException if the selector is malformed in any way
             *  or a parameter is null
             */
            // @ts-ignore
            public static selectEntities(sender: org.bukkit.command.CommandSender, selector: java.lang.String | string): Array<org.bukkit.entity.Entity>
            /**
             * @see UnsafeValues
             * @return the unsafe values instance
             */
            // @ts-ignore
            public static getUnsafe(): org.bukkit.UnsafeValues
            // @ts-ignore
            public static spigot(): org.bukkit.Server.Spigot
        }
    }
}
