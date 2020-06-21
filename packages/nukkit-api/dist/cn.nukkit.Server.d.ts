declare namespace cn {
    namespace nukkit {
        /**
         * @author MagicDroidX
         * @author Box
         */
        // @ts-ignore
        class Server extends java.lang.Object {
            // @ts-ignore
            public static readonly BROADCAST_CHANNEL_ADMINISTRATIVE: java.lang.String | string
            // @ts-ignore
            public static readonly BROADCAST_CHANNEL_USERS: java.lang.String | string
            // @ts-ignore
            public networkCompressionLevel: number /*int*/
            // @ts-ignore
            public broadcastMessage(message: java.lang.String | string): number /*int*/
            // @ts-ignore
            public broadcastMessage(message: cn.nukkit.lang.TextContainer): number /*int*/
            // @ts-ignore
            public broadcastMessage(message: java.lang.String | string, recipients: cn.nukkit.command.CommandSender[]): number /*int*/
            // @ts-ignore
            public broadcastMessage(message: java.lang.String | string, recipients: java.util.Collection<any> | Array<any>): number /*int*/
            // @ts-ignore
            public broadcastMessage(message: cn.nukkit.lang.TextContainer, recipients: java.util.Collection<any> | Array<any>): number /*int*/
            // @ts-ignore
            public broadcast(message: java.lang.String | string, permissions: java.lang.String | string): number /*int*/
            // @ts-ignore
            public broadcast(message: cn.nukkit.lang.TextContainer, permissions: java.lang.String | string): number /*int*/
            // @ts-ignore
            public static broadcastPacket(players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>, packet: cn.nukkit.network.protocol.DataPacket): void
            // @ts-ignore
            public static broadcastPacket(players: cn.nukkit.Player[], packet: cn.nukkit.network.protocol.DataPacket): void
            // @ts-ignore
            public batchPackets(players: cn.nukkit.Player[], packets: cn.nukkit.network.protocol.DataPacket[]): void
            // @ts-ignore
            public batchPackets(players: cn.nukkit.Player[], packets: cn.nukkit.network.protocol.DataPacket[], forceSync: boolean): void
            // @ts-ignore
            public broadcastPacketsCallback(data: number /*byte*/[], identifiers: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
            // @ts-ignore
            public enablePlugins(type: cn.nukkit.plugin.PluginLoadOrder): void
            // @ts-ignore
            public enablePlugin(plugin: cn.nukkit.plugin.Plugin): void
            // @ts-ignore
            public disablePlugins(): void
            // @ts-ignore
            public dispatchCommand(sender: cn.nukkit.command.CommandSender, commandLine: java.lang.String | string): boolean
            // @ts-ignore
            public getConsoleSender(): cn.nukkit.command.ConsoleCommandSender
            // @ts-ignore
            public reload(): void
            // @ts-ignore
            public shutdown(): void
            // @ts-ignore
            public forceShutdown(): void
            // @ts-ignore
            public start(): void
            // @ts-ignore
            public handlePacket(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
            // @ts-ignore
            public tickProcessor(): void
            // @ts-ignore
            public onPlayerCompleteLoginSequence(player: cn.nukkit.Player): void
            // @ts-ignore
            public onPlayerLogin(player: cn.nukkit.Player): void
            // @ts-ignore
            public addPlayer(identifier: java.lang.String | string, player: cn.nukkit.Player): void
            // @ts-ignore
            public addOnlinePlayer(player: cn.nukkit.Player): void
            // @ts-ignore
            public removeOnlinePlayer(player: cn.nukkit.Player): void
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin): void
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin, xboxUserId: java.lang.String | string): void
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin, players: cn.nukkit.Player[]): void
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin, xboxUserId: java.lang.String | string, players: cn.nukkit.Player[]): void
            // @ts-ignore
            public updatePlayerListData(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin, xboxUserId: java.lang.String | string, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
            // @ts-ignore
            public removePlayerListData(uuid: java.util.UUID): void
            // @ts-ignore
            public removePlayerListData(uuid: java.util.UUID, players: cn.nukkit.Player[]): void
            // @ts-ignore
            public removePlayerListData(uuid: java.util.UUID, players: java.util.Collection<cn.nukkit.Player> | Array<cn.nukkit.Player>): void
            // @ts-ignore
            public sendFullPlayerListData(player: cn.nukkit.Player): void
            // @ts-ignore
            public sendRecipeList(player: cn.nukkit.Player): void
            // @ts-ignore
            public doAutoSave(): void
            // @ts-ignore
            public getNextTick(): number /*long*/
            // @ts-ignore
            public titleTick(): void
            // @ts-ignore
            public getQueryInformation(): cn.nukkit.event.server.QueryRegenerateEvent
            // @ts-ignore
            public getName(): string
            // @ts-ignore
            public isRunning(): boolean
            // @ts-ignore
            public getNukkitVersion(): string
            // @ts-ignore
            public getCodename(): string
            // @ts-ignore
            public getVersion(): string
            // @ts-ignore
            public getApiVersion(): string
            // @ts-ignore
            public getFilePath(): string
            // @ts-ignore
            public getDataPath(): string
            // @ts-ignore
            public getPluginPath(): string
            // @ts-ignore
            public getMaxPlayers(): number /*int*/
            // @ts-ignore
            public setMaxPlayers(maxPlayers: number /*int*/): void
            // @ts-ignore
            public getPort(): number /*int*/
            // @ts-ignore
            public getViewDistance(): number /*int*/
            // @ts-ignore
            public getIp(): string
            // @ts-ignore
            public getServerUniqueId(): java.util.UUID
            // @ts-ignore
            public getAutoSave(): boolean
            // @ts-ignore
            public setAutoSave(autoSave: boolean): void
            // @ts-ignore
            public getLevelType(): string
            // @ts-ignore
            public getGenerateStructures(): boolean
            // @ts-ignore
            public getGamemode(): number /*int*/
            // @ts-ignore
            public getForceGamemode(): boolean
            // @ts-ignore
            public static getGamemodeString(mode: number /*int*/): string
            // @ts-ignore
            public static getGamemodeString(mode: number /*int*/, direct: boolean): string
            // @ts-ignore
            public static getGamemodeFromString(str: java.lang.String | string): number /*int*/
            // @ts-ignore
            public static getDifficultyFromString(str: java.lang.String | string): number /*int*/
            // @ts-ignore
            public getDifficulty(): number /*int*/
            // @ts-ignore
            public hasWhitelist(): boolean
            // @ts-ignore
            public getSpawnRadius(): number /*int*/
            // @ts-ignore
            public getAllowFlight(): boolean
            // @ts-ignore
            public isHardcore(): boolean
            // @ts-ignore
            public getDefaultGamemode(): number /*int*/
            // @ts-ignore
            public getMotd(): string
            // @ts-ignore
            public getSubMotd(): string
            // @ts-ignore
            public getForceResources(): boolean
            // @ts-ignore
            public getLogger(): cn.nukkit.utils.MainLogger
            // @ts-ignore
            public getEntityMetadata(): cn.nukkit.metadata.EntityMetadataStore
            // @ts-ignore
            public getPlayerMetadata(): cn.nukkit.metadata.PlayerMetadataStore
            // @ts-ignore
            public getLevelMetadata(): cn.nukkit.metadata.LevelMetadataStore
            // @ts-ignore
            public getPluginManager(): cn.nukkit.plugin.PluginManager
            // @ts-ignore
            public getCraftingManager(): cn.nukkit.inventory.CraftingManager
            // @ts-ignore
            public getResourcePackManager(): cn.nukkit.resourcepacks.ResourcePackManager
            // @ts-ignore
            public getScheduler(): cn.nukkit.scheduler.ServerScheduler
            // @ts-ignore
            public getTick(): number /*int*/
            // @ts-ignore
            public getTicksPerSecond(): number /*float*/
            // @ts-ignore
            public getTicksPerSecondAverage(): number /*float*/
            // @ts-ignore
            public getTickUsage(): number /*float*/
            // @ts-ignore
            public getTickUsageAverage(): number /*float*/
            // @ts-ignore
            public getCommandMap(): cn.nukkit.command.SimpleCommandMap
            // @ts-ignore
            public getOnlinePlayers(): java.util.Map<java.util.UUID, cn.nukkit.Player>
            // @ts-ignore
            public addRecipe(recipe: cn.nukkit.inventory.Recipe): void
            // @ts-ignore
            public getPlayer(uuid: java.util.UUID): java.util.Optional<cn.nukkit.Player>
            // @ts-ignore
            public lookupName(name: java.lang.String | string): java.util.Optional<java.util.UUID>
            // @ts-ignore
            public getOfflinePlayer(name: java.lang.String | string): cn.nukkit.IPlayer
            // @ts-ignore
            public getOfflinePlayer(uuid: java.util.UUID): cn.nukkit.IPlayer
            // @ts-ignore
            public getOfflinePlayerData(uuid: java.util.UUID): cn.nukkit.nbt.tag.CompoundTag
            // @ts-ignore
            public getOfflinePlayerData(uuid: java.util.UUID, create: boolean): cn.nukkit.nbt.tag.CompoundTag
            // @ts-ignore
            public getOfflinePlayerData(name: java.lang.String | string): cn.nukkit.nbt.tag.CompoundTag
            // @ts-ignore
            public getOfflinePlayerData(name: java.lang.String | string, create: boolean): cn.nukkit.nbt.tag.CompoundTag
            // @ts-ignore
            public saveOfflinePlayerData(uuid: java.util.UUID, tag: cn.nukkit.nbt.tag.CompoundTag): void
            // @ts-ignore
            public saveOfflinePlayerData(name: java.lang.String | string, tag: cn.nukkit.nbt.tag.CompoundTag): void
            // @ts-ignore
            public saveOfflinePlayerData(uuid: java.util.UUID, tag: cn.nukkit.nbt.tag.CompoundTag, async: boolean): void
            // @ts-ignore
            public saveOfflinePlayerData(name: java.lang.String | string, tag: cn.nukkit.nbt.tag.CompoundTag, async: boolean): void
            // @ts-ignore
            public getPlayer(name: java.lang.String | string): cn.nukkit.Player
            // @ts-ignore
            public getPlayerExact(name: java.lang.String | string): cn.nukkit.Player
            // @ts-ignore
            public matchPlayer(partialName: java.lang.String | string): cn.nukkit.Player[]
            // @ts-ignore
            public removePlayer(player: cn.nukkit.Player): void
            // @ts-ignore
            public getLevels(): java.util.Map<java.lang.Integer | number, cn.nukkit.level.Level>
            // @ts-ignore
            public getDefaultLevel(): cn.nukkit.level.Level
            // @ts-ignore
            public setDefaultLevel(defaultLevel: cn.nukkit.level.Level): void
            // @ts-ignore
            public isLevelLoaded(name: java.lang.String | string): boolean
            // @ts-ignore
            public getLevel(levelId: number /*int*/): cn.nukkit.level.Level
            // @ts-ignore
            public getLevelByName(name: java.lang.String | string): cn.nukkit.level.Level
            // @ts-ignore
            public unloadLevel(level: cn.nukkit.level.Level): boolean
            // @ts-ignore
            public unloadLevel(level: cn.nukkit.level.Level, forceUnload: boolean): boolean
            // @ts-ignore
            public loadLevel(name: java.lang.String | string): boolean
            // @ts-ignore
            public generateLevel(name: java.lang.String | string): boolean
            // @ts-ignore
            public generateLevel(name: java.lang.String | string, seed: number /*long*/): boolean
            // @ts-ignore
            public generateLevel(name: java.lang.String | string, seed: number /*long*/, generator: java.lang.Class<any>): boolean
            // @ts-ignore
            public generateLevel(name: java.lang.String | string, seed: number /*long*/, generator: java.lang.Class<any>, options: java.util.Map<java.lang.String | string, java.lang.Object | any>): boolean
            // @ts-ignore
            public generateLevel(name: java.lang.String | string, seed: number /*long*/, generator: java.lang.Class<any>, options: java.util.Map<java.lang.String | string, java.lang.Object | any>, provider: java.lang.Class<any>): boolean
            // @ts-ignore
            public isLevelGenerated(name: java.lang.String | string): boolean
            // @ts-ignore
            public getLanguage(): cn.nukkit.lang.BaseLang
            // @ts-ignore
            public isLanguageForced(): boolean
            // @ts-ignore
            public getNetwork(): cn.nukkit.network.Network
            // @ts-ignore
            public getConfig(): cn.nukkit.utils.Config
            // @ts-ignore
            public getConfig<T>(variable: java.lang.String | string): T
            // @ts-ignore
            public getConfig<T>(variable: java.lang.String | string, defaultValue: T): T
            // @ts-ignore
            public getProperties(): cn.nukkit.utils.Config
            // @ts-ignore
            public getProperty(variable: java.lang.String | string): any
            // @ts-ignore
            public getProperty(variable: java.lang.String | string, defaultValue: java.lang.Object | any): any
            // @ts-ignore
            public setPropertyString(variable: java.lang.String | string, value: java.lang.String | string): void
            // @ts-ignore
            public getPropertyString(variable: java.lang.String | string): string
            // @ts-ignore
            public getPropertyString(variable: java.lang.String | string, defaultValue: java.lang.String | string): string
            // @ts-ignore
            public getPropertyInt(variable: java.lang.String | string): number /*int*/
            // @ts-ignore
            public getPropertyInt(variable: java.lang.String | string, defaultValue: java.lang.Integer | number): number /*int*/
            // @ts-ignore
            public setPropertyInt(variable: java.lang.String | string, value: number /*int*/): void
            // @ts-ignore
            public getPropertyBoolean(variable: java.lang.String | string): boolean
            // @ts-ignore
            public getPropertyBoolean(variable: java.lang.String | string, defaultValue: java.lang.Object | any): boolean
            // @ts-ignore
            public setPropertyBoolean(variable: java.lang.String | string, value: boolean): void
            // @ts-ignore
            public getPluginCommand(name: java.lang.String | string): cn.nukkit.command.PluginIdentifiableCommand
            // @ts-ignore
            public getNameBans(): cn.nukkit.permission.BanList
            // @ts-ignore
            public getIPBans(): cn.nukkit.permission.BanList
            // @ts-ignore
            public addOp(name: java.lang.String | string): void
            // @ts-ignore
            public removeOp(name: java.lang.String | string): void
            // @ts-ignore
            public addWhitelist(name: java.lang.String | string): void
            // @ts-ignore
            public removeWhitelist(name: java.lang.String | string): void
            // @ts-ignore
            public isWhitelisted(name: java.lang.String | string): boolean
            // @ts-ignore
            public isOp(name: java.lang.String | string): boolean
            // @ts-ignore
            public getWhitelist(): cn.nukkit.utils.Config
            // @ts-ignore
            public getOps(): cn.nukkit.utils.Config
            // @ts-ignore
            public reloadWhitelist(): void
            // @ts-ignore
            public getServiceManager(): cn.nukkit.plugin.service.ServiceManager
            // @ts-ignore
            public getCommandAliases(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
            // @ts-ignore
            public shouldSavePlayerData(): boolean
            // @ts-ignore
            public getPlayerSkinChangeCooldown(): number /*int*/
            /**
             * Checks the current thread against the expected primary thread for the
             * server.
             * <p>
             * <b>Note:</b> this method should not be used to indicate the current
             * synchronized state of the runtime. A current thread matching the main
             * thread indicates that it is synchronized, but a mismatch does not
             * preclude the same assumption.
             * @return true if the current thread matches the expected primary thread,
             *  false otherwise
             */
            // @ts-ignore
            public isPrimaryThread(): boolean
            // @ts-ignore
            public getPrimaryThread(): java.lang.Thread
            // @ts-ignore
            public isNetherAllowed(): boolean
            // @ts-ignore
            public getPlayerDataSerializer(): cn.nukkit.utils.PlayerDataSerializer
            // @ts-ignore
            public setPlayerDataSerializer(playerDataSerializer: cn.nukkit.utils.PlayerDataSerializer): void
            // @ts-ignore
            public static getInstance(): cn.nukkit.Server
        }
    }
}
