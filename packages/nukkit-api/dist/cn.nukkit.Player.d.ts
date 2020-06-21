declare namespace cn {
    namespace nukkit {
        /**
         * @author MagicDroidX &amp; Box
         *  Nukkit Project
         */
        // @ts-ignore
        class Player extends cn.nukkit.entity.EntityHuman implements cn.nukkit.command.CommandSender, cn.nukkit.inventory.InventoryHolder, cn.nukkit.level.ChunkLoader, cn.nukkit.IPlayer {
            // @ts-ignore
            constructor(interfaz: cn.nukkit.network.SourceInterface, clientID: java.lang.Long | number, ip: java.lang.String | string, port: number /*int*/)
            // @ts-ignore
            public static readonly SURVIVAL: number /*int*/
            // @ts-ignore
            public static readonly CREATIVE: number /*int*/
            // @ts-ignore
            public static readonly ADVENTURE: number /*int*/
            // @ts-ignore
            public static readonly SPECTATOR: number /*int*/
            // @ts-ignore
            public static readonly VIEW: number /*int*/
            // @ts-ignore
            public static readonly SURVIVAL_SLOTS: number /*int*/
            // @ts-ignore
            public static readonly CREATIVE_SLOTS: number /*int*/
            // @ts-ignore
            public static readonly CRAFTING_SMALL: number /*int*/
            // @ts-ignore
            public static readonly CRAFTING_BIG: number /*int*/
            // @ts-ignore
            public static readonly CRAFTING_ANVIL: number /*int*/
            // @ts-ignore
            public static readonly CRAFTING_ENCHANT: number /*int*/
            // @ts-ignore
            public static readonly CRAFTING_BEACON: number /*int*/
            // @ts-ignore
            public static readonly DEFAULT_SPEED: number /*float*/
            // @ts-ignore
            public static readonly MAXIMUM_SPEED: number /*float*/
            // @ts-ignore
            public static readonly PERMISSION_CUSTOM: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_OPERATOR: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_MEMBER: number /*int*/
            // @ts-ignore
            public static readonly PERMISSION_VISITOR: number /*int*/
            // @ts-ignore
            public static readonly ANVIL_WINDOW_ID: number /*int*/
            // @ts-ignore
            public static readonly ENCHANT_WINDOW_ID: number /*int*/
            // @ts-ignore
            public static readonly BEACON_WINDOW_ID: number /*int*/
            // @ts-ignore
            readonly interfaz: cn.nukkit.network.SourceInterface
            // @ts-ignore
            public playedBefore: boolean
            // @ts-ignore
            public spawned: boolean
            // @ts-ignore
            public loggedIn: boolean
            // @ts-ignore
            public gamemode: number /*int*/
            // @ts-ignore
            public lastBreak: number /*long*/
            // @ts-ignore
            windowCnt: number /*int*/
            // @ts-ignore
            readonly windows: object
            // @ts-ignore
            readonly windowIndex: object
            // @ts-ignore
            readonly permanentWindows: java.util.Set<java.lang.Integer | number> | Array<java.lang.Integer | number>
            // @ts-ignore
            messageCounter: number /*int*/
            // @ts-ignore
            public speed: cn.nukkit.math.Vector3
            // @ts-ignore
            public readonly achievements: java.util.HashSet<java.lang.String | string>
            // @ts-ignore
            public craftingType: number /*int*/
            // @ts-ignore
            playerUIInventory: cn.nukkit.inventory.PlayerUIInventory
            // @ts-ignore
            craftingGrid: cn.nukkit.inventory.CraftingGrid
            // @ts-ignore
            craftingTransaction: cn.nukkit.inventory.transaction.CraftingTransaction
            // @ts-ignore
            public creationTime: number /*long*/
            // @ts-ignore
            randomClientId: number /*long*/
            // @ts-ignore
            forceMovement: cn.nukkit.math.Vector3
            // @ts-ignore
            teleportPosition: cn.nukkit.math.Vector3
            // @ts-ignore
            connected: boolean
            // @ts-ignore
            readonly ip: java.lang.String | string
            // @ts-ignore
            removeFormat: boolean
            // @ts-ignore
            readonly port: number /*int*/
            // @ts-ignore
            username: java.lang.String | string
            // @ts-ignore
            iusername: java.lang.String | string
            // @ts-ignore
            displayName: java.lang.String | string
            // @ts-ignore
            sleeping: cn.nukkit.math.Vector3
            // @ts-ignore
            clientID: java.lang.Long | number
            // @ts-ignore
            stepHeight: number /*float*/
            // @ts-ignore
            public readonly usedChunks: java.util.Map<java.lang.Long | number, java.lang.Boolean>
            // @ts-ignore
            chunkLoadCount: number /*int*/
            // @ts-ignore
            readonly loadQueue: object
            // @ts-ignore
            nextChunkOrderRun: number /*int*/
            // @ts-ignore
            readonly hiddenPlayers: java.util.Map<java.util.UUID, cn.nukkit.Player>
            // @ts-ignore
            newPosition: cn.nukkit.math.Vector3
            // @ts-ignore
            chunkRadius: number /*int*/
            // @ts-ignore
            viewDistance: number /*int*/
            // @ts-ignore
            readonly chunksPerTick: number /*int*/
            // @ts-ignore
            readonly spawnThreshold: number /*int*/
            // @ts-ignore
            spawnPosition: cn.nukkit.level.Position
            // @ts-ignore
            inAirTicks: number /*int*/
            // @ts-ignore
            startAirTicks: number /*int*/
            // @ts-ignore
            adventureSettings: cn.nukkit.AdventureSettings
            // @ts-ignore
            checkMovement: boolean
            // @ts-ignore
            foodData: cn.nukkit.PlayerFood
            // @ts-ignore
            enableClientCommand: boolean
            // @ts-ignore
            lastEnderPearl: number /*int*/
            // @ts-ignore
            lastChorusFruitTeleport: number /*int*/
            // @ts-ignore
            public breakingBlock: cn.nukkit.block.Block
            // @ts-ignore
            public pickedXPOrb: number /*int*/
            // @ts-ignore
            formWindowCount: number /*int*/
            // @ts-ignore
            formWindows: java.util.Map<java.lang.Integer | number, cn.nukkit.form.window.FormWindow>
            // @ts-ignore
            serverSettings: java.util.Map<java.lang.Integer | number, cn.nukkit.form.window.FormWindow>
            // @ts-ignore
            dummyBossBars: java.util.Map<java.lang.Long | number, cn.nukkit.utils.DummyBossBar>
            // @ts-ignore
            shouldLogin: boolean
            // @ts-ignore
            public fishing: cn.nukkit.entity.item.EntityFishingHook
            // @ts-ignore
            public lastSkinChange: number /*long*/
            // @ts-ignore
            lastRightClickTime: number /*double*/
            // @ts-ignore
            lastRightClickPos: cn.nukkit.math.Vector3
            // @ts-ignore
            public getStartActionTick(): number /*int*/
            // @ts-ignore
            public startAction(): void
            // @ts-ignore
            public stopAction(): void
            // @ts-ignore
            public getLastEnderPearlThrowingTick(): number /*int*/
            // @ts-ignore
            public onThrowEnderPearl(): void
            // @ts-ignore
            public getLastChorusFruitTeleport(): number /*int*/
            // @ts-ignore
            public onChorusFruitTeleport(): void
            // @ts-ignore
            public getViewingEnderChest(): cn.nukkit.block.BlockEnderChest
            // @ts-ignore
            public setViewingEnderChest(chest: cn.nukkit.block.BlockEnderChest): void
            // @ts-ignore
            public getLeaveMessage(): cn.nukkit.lang.TranslationContainer
            // @ts-ignore
            public getClientSecret(): string
            /**
             * This might disappear in the future.
             * Please use getUniqueId() instead (IP + clientId + name combo, in the future it'll change to real UUID for online auth)
             * @return random client id
             */
            // @ts-ignore
            public getClientId(): number
            // @ts-ignore
            public isBanned(): boolean
            // @ts-ignore
            public setBanned(value: boolean): void
            // @ts-ignore
            public isWhitelisted(): boolean
            // @ts-ignore
            public setWhitelisted(value: boolean): void
            // @ts-ignore
            public getPlayer(): cn.nukkit.Player
            // @ts-ignore
            public getFirstPlayed(): number
            // @ts-ignore
            public getLastPlayed(): number
            // @ts-ignore
            public hasPlayedBefore(): boolean
            // @ts-ignore
            public getAdventureSettings(): cn.nukkit.AdventureSettings
            // @ts-ignore
            public setAdventureSettings(adventureSettings: cn.nukkit.AdventureSettings): void
            // @ts-ignore
            public resetInAirTicks(): void
            // @ts-ignore
            public setAllowFlight(value: boolean): void
            // @ts-ignore
            public getAllowFlight(): boolean
            // @ts-ignore
            public setAllowModifyWorld(value: boolean): void
            // @ts-ignore
            public setAllowInteract(value: boolean): void
            // @ts-ignore
            public setAllowInteract(value: boolean, containers: boolean): void
            // @ts-ignore
            public setAutoJump(value: boolean): void
            // @ts-ignore
            public hasAutoJump(): boolean
            // @ts-ignore
            public spawnTo(player: cn.nukkit.Player): void
            // @ts-ignore
            public getServer(): cn.nukkit.Server
            // @ts-ignore
            public getRemoveFormat(): boolean
            // @ts-ignore
            public setRemoveFormat(): void
            // @ts-ignore
            public setRemoveFormat(remove: boolean): void
            // @ts-ignore
            public canSee(player: cn.nukkit.Player): boolean
            // @ts-ignore
            public hidePlayer(player: cn.nukkit.Player): void
            // @ts-ignore
            public showPlayer(player: cn.nukkit.Player): void
            // @ts-ignore
            public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
            // @ts-ignore
            public resetFallDistance(): void
            // @ts-ignore
            public isOnline(): boolean
            // @ts-ignore
            public isOp(): boolean
            // @ts-ignore
            public setOp(value: boolean): void
            // @ts-ignore
            public isPermissionSet(name: java.lang.String | string): boolean
            // @ts-ignore
            public isPermissionSet(permission: cn.nukkit.permission.Permission): boolean
            // @ts-ignore
            public hasPermission(name: java.lang.String | string): boolean
            // @ts-ignore
            public hasPermission(permission: cn.nukkit.permission.Permission): boolean
            // @ts-ignore
            public addAttachment(plugin: cn.nukkit.plugin.Plugin): cn.nukkit.permission.PermissionAttachment
            // @ts-ignore
            public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: java.lang.String | string): cn.nukkit.permission.PermissionAttachment
            // @ts-ignore
            public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: java.lang.String | string, value: java.lang.Boolean): cn.nukkit.permission.PermissionAttachment
            // @ts-ignore
            public removeAttachment(attachment: cn.nukkit.permission.PermissionAttachment): void
            // @ts-ignore
            public recalculatePermissions(): void
            // @ts-ignore
            public isEnableClientCommand(): boolean
            // @ts-ignore
            public setEnableClientCommand(enable: boolean): void
            // @ts-ignore
            public sendCommandData(): void
            // @ts-ignore
            public getEffectivePermissions(): java.util.Map<java.lang.String | string, cn.nukkit.permission.PermissionAttachmentInfo>
            // @ts-ignore
            initEntity(): void
            // @ts-ignore
            public isPlayer(): boolean
            // @ts-ignore
            public removeAchievement(achievementId: java.lang.String | string): void
            // @ts-ignore
            public hasAchievement(achievementId: java.lang.String | string): boolean
            // @ts-ignore
            public isConnected(): boolean
            // @ts-ignore
            public getDisplayName(): string
            // @ts-ignore
            public setDisplayName(displayName: java.lang.String | string): void
            // @ts-ignore
            public setSkin(skin: cn.nukkit.entity.data.Skin): void
            // @ts-ignore
            public getAddress(): string
            // @ts-ignore
            public getPort(): number /*int*/
            // @ts-ignore
            public getNextPosition(): cn.nukkit.level.Position
            // @ts-ignore
            public isSleeping(): boolean
            // @ts-ignore
            public getInAirTicks(): number /*int*/
            /**
             * Returns whether the player is currently using an item (right-click and hold).
             * @return bool
             */
            // @ts-ignore
            public isUsingItem(): boolean
            // @ts-ignore
            public setUsingItem(value: boolean): void
            // @ts-ignore
            public getButtonText(): string
            // @ts-ignore
            public setButtonText(text: java.lang.String | string): void
            // @ts-ignore
            public unloadChunk(x: number /*int*/, z: number /*int*/): void
            // @ts-ignore
            public unloadChunk(x: number /*int*/, z: number /*int*/, level: cn.nukkit.level.Level): void
            // @ts-ignore
            public getSpawn(): cn.nukkit.level.Position
            // @ts-ignore
            public sendChunk(x: number /*int*/, z: number /*int*/, packet: cn.nukkit.network.protocol.DataPacket): void
            // @ts-ignore
            public sendChunk(x: number /*int*/, z: number /*int*/, subChunkCount: number /*int*/, payload: number /*byte*/[]): void
            // @ts-ignore
            sendNextChunk(): void
            // @ts-ignore
            doFirstSpawn(): void
            // @ts-ignore
            orderChunks(): boolean
            // @ts-ignore
            public batchDataPacket(packet: cn.nukkit.network.protocol.DataPacket): boolean
            /**
             * 0 is true
             * -1 is false
             * other is identifer
             * @param packet packet to send
             * @return packet successfully sent
             */
            // @ts-ignore
            public dataPacket(packet: cn.nukkit.network.protocol.DataPacket): boolean
            // @ts-ignore
            public dataPacket(packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): number /*int*/
            /**
             * 0 is true
             * -1 is false
             * other is identifer
             * @param packet packet to send
             * @return packet successfully sent
             */
            // @ts-ignore
            public directDataPacket(packet: cn.nukkit.network.protocol.DataPacket): boolean
            // @ts-ignore
            public directDataPacket(packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): number /*int*/
            // @ts-ignore
            public getPing(): number /*int*/
            // @ts-ignore
            public sleepOn(pos: cn.nukkit.math.Vector3): boolean
            // @ts-ignore
            public setSpawn(pos: cn.nukkit.math.Vector3): void
            // @ts-ignore
            public stopSleep(): void
            // @ts-ignore
            public awardAchievement(achievementId: java.lang.String | string): boolean
            // @ts-ignore
            public getGamemode(): number /*int*/
            // @ts-ignore
            public setGamemode(gamemode: number /*int*/): boolean
            // @ts-ignore
            public setGamemode(gamemode: number /*int*/, clientSide: boolean): boolean
            // @ts-ignore
            public setGamemode(gamemode: number /*int*/, clientSide: boolean, newSettings: cn.nukkit.AdventureSettings): boolean
            // @ts-ignore
            public sendSettings(): void
            // @ts-ignore
            public isSurvival(): boolean
            // @ts-ignore
            public isCreative(): boolean
            // @ts-ignore
            public isSpectator(): boolean
            // @ts-ignore
            public isAdventure(): boolean
            // @ts-ignore
            public getDrops(): cn.nukkit.item.Item[]
            // @ts-ignore
            public setDataProperty(data: cn.nukkit.entity.data.EntityData<any>): boolean
            // @ts-ignore
            public setDataProperty(data: cn.nukkit.entity.data.EntityData<any>, send: boolean): boolean
            // @ts-ignore
            checkGroundState(movX: number /*double*/, movY: number /*double*/, movZ: number /*double*/, dx: number /*double*/, dy: number /*double*/, dz: number /*double*/): void
            // @ts-ignore
            checkBlockCollision(): void
            // @ts-ignore
            checkNearEntities(): void
            // @ts-ignore
            processMovement(tickDiff: number /*int*/): void
            // @ts-ignore
            public addMovement(x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*double*/, pitch: number /*double*/, headYaw: number /*double*/): void
            // @ts-ignore
            public setMotion(motion: cn.nukkit.math.Vector3): boolean
            // @ts-ignore
            public sendAttributes(): void
            // @ts-ignore
            public onUpdate(currentTick: number /*int*/): boolean
            // @ts-ignore
            public checkInteractNearby(): void
            /**
             * Returns the Entity the player is looking at currently
             * @param maxDistance the maximum distance to check for entities
             * @return Entity|null    either NULL if no entity is found or an instance of the entity
             */
            // @ts-ignore
            public getEntityPlayerLookingAt(maxDistance: number /*int*/): cn.nukkit.entity.EntityInteractable
            // @ts-ignore
            public checkNetwork(): void
            // @ts-ignore
            public canInteract(pos: cn.nukkit.math.Vector3, maxDistance: number /*double*/): boolean
            // @ts-ignore
            public canInteract(pos: cn.nukkit.math.Vector3, maxDistance: number /*double*/, maxDiff: number /*double*/): boolean
            // @ts-ignore
            processLogin(): void
            // @ts-ignore
            completeLoginSequence(): void
            // @ts-ignore
            public handleDataPacket(packet: cn.nukkit.network.protocol.DataPacket): void
            /**
             * Sends a chat message as this player. If the message begins with a / (forward-slash) it will be treated
             * as a command.
             * @param message message to send
             * @return successful
             */
            // @ts-ignore
            public chat(message: java.lang.String | string): boolean
            // @ts-ignore
            public kick(): boolean
            // @ts-ignore
            public kick(reason: java.lang.String | string, isAdmin: boolean): boolean
            // @ts-ignore
            public kick(reason: java.lang.String | string): boolean
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason): boolean
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason, reasonString: java.lang.String | string): boolean
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason, isAdmin: boolean): boolean
            // @ts-ignore
            public kick(reason: cn.nukkit.event.player.PlayerKickEvent.Reason, reasonString: java.lang.String | string, isAdmin: boolean): boolean
            // @ts-ignore
            public setViewDistance(distance: number /*int*/): void
            // @ts-ignore
            public getViewDistance(): number /*int*/
            // @ts-ignore
            public sendMessage(message: java.lang.String | string): void
            // @ts-ignore
            public sendMessage(message: cn.nukkit.lang.TextContainer): void
            // @ts-ignore
            public sendTranslation(message: java.lang.String | string): void
            // @ts-ignore
            public sendTranslation(message: java.lang.String | string, parameters: java.lang.String[] | string[]): void
            // @ts-ignore
            public sendChat(message: java.lang.String | string): void
            // @ts-ignore
            public sendChat(source: java.lang.String | string, message: java.lang.String | string): void
            // @ts-ignore
            public sendPopup(message: java.lang.String | string): void
            // @ts-ignore
            public sendPopup(message: java.lang.String | string, subtitle: java.lang.String | string): void
            // @ts-ignore
            public sendTip(message: java.lang.String | string): void
            // @ts-ignore
            public clearTitle(): void
            /**
             * Resets both title animation times and subtitle for the next shown title
             */
            // @ts-ignore
            public resetTitleSettings(): void
            // @ts-ignore
            public setSubtitle(subtitle: java.lang.String | string): void
            // @ts-ignore
            public setTitleAnimationTimes(fadein: number /*int*/, duration: number /*int*/, fadeout: number /*int*/): void
            // @ts-ignore
            public sendTitle(title: java.lang.String | string): void
            // @ts-ignore
            public sendTitle(title: java.lang.String | string, subtitle: java.lang.String | string): void
            // @ts-ignore
            public sendTitle(title: java.lang.String | string, subtitle: java.lang.String | string, fadeIn: number /*int*/, stay: number /*int*/, fadeOut: number /*int*/): void
            // @ts-ignore
            public sendActionBar(title: java.lang.String | string): void
            // @ts-ignore
            public sendActionBar(title: java.lang.String | string, fadein: number /*int*/, duration: number /*int*/, fadeout: number /*int*/): void
            // @ts-ignore
            public close(): void
            // @ts-ignore
            public close(message: java.lang.String | string): void
            // @ts-ignore
            public close(message: java.lang.String | string, reason: java.lang.String | string): void
            // @ts-ignore
            public close(message: java.lang.String | string, reason: java.lang.String | string, notify: boolean): void
            // @ts-ignore
            public close(message: cn.nukkit.lang.TextContainer): void
            // @ts-ignore
            public close(message: cn.nukkit.lang.TextContainer, reason: java.lang.String | string): void
            // @ts-ignore
            public close(message: cn.nukkit.lang.TextContainer, reason: java.lang.String | string, notify: boolean): void
            // @ts-ignore
            public save(): void
            // @ts-ignore
            public save(async: boolean): void
            // @ts-ignore
            public getName(): string
            // @ts-ignore
            public kill(): void
            // @ts-ignore
            respawn(): void
            // @ts-ignore
            public setHealth(health: number /*float*/): void
            // @ts-ignore
            public setMaxHealth(maxHealth: number /*int*/): void
            // @ts-ignore
            public getExperience(): number /*int*/
            // @ts-ignore
            public getExperienceLevel(): number /*int*/
            // @ts-ignore
            public addExperience(add: number /*int*/): void
            // @ts-ignore
            public static calculateRequireExperience(level: number /*int*/): number /*int*/
            // @ts-ignore
            public setExperience(exp: number /*int*/): void
            // @ts-ignore
            public setExperience(exp: number /*int*/, level: number /*int*/): void
            // @ts-ignore
            public sendExperience(): void
            // @ts-ignore
            public sendExperience(exp: number /*int*/): void
            // @ts-ignore
            public sendExperienceLevel(): void
            // @ts-ignore
            public sendExperienceLevel(level: number /*int*/): void
            // @ts-ignore
            public setAttribute(attribute: cn.nukkit.entity.Attribute): void
            // @ts-ignore
            public setMovementSpeed(speed: number /*float*/): void
            // @ts-ignore
            public setMovementSpeed(speed: number /*float*/, send: boolean): void
            // @ts-ignore
            public getKiller(): cn.nukkit.entity.Entity
            // @ts-ignore
            public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
            /**
             * Drops an item on the ground in front of the player. Returns if the item drop was successful.
             * @param item to drop
             * @return bool if the item was dropped or if the item was null
             */
            // @ts-ignore
            public dropItem(item: cn.nukkit.item.Item): boolean
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3): void
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number /*double*/): void
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number /*double*/, pitch: number /*double*/): void
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number /*double*/, pitch: number /*double*/, mode: number /*int*/): void
            // @ts-ignore
            public sendPosition(pos: cn.nukkit.math.Vector3, yaw: number /*double*/, pitch: number /*double*/, mode: number /*int*/, targets: cn.nukkit.Player[]): void
            // @ts-ignore
            checkChunks(): void
            // @ts-ignore
            checkTeleportPosition(): boolean
            // @ts-ignore
            sendPlayStatus(status: number /*int*/): void
            // @ts-ignore
            sendPlayStatus(status: number /*int*/, immediate: boolean): void
            // @ts-ignore
            public teleport(location: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean
            // @ts-ignore
            forceSendEmptyChunks(): void
            // @ts-ignore
            public teleportImmediate(location: cn.nukkit.level.Location): void
            // @ts-ignore
            public teleportImmediate(location: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): void
            /**
             * Shows a new FormWindow to the player
             * You can find out FormWindow result by listening to PlayerFormRespondedEvent
             * @param window to show
             * @return form id to use in {#link PlayerFormRespondedEvent}
             */
            // @ts-ignore
            public showFormWindow(window: cn.nukkit.form.window.FormWindow): number /*int*/
            /**
             * Shows a new FormWindow to the player
             * You can find out FormWindow result by listening to PlayerFormRespondedEvent
             * @param window to show
             * @param id form id
             * @return form id to use in {#link PlayerFormRespondedEvent}
             */
            // @ts-ignore
            public showFormWindow(window: cn.nukkit.form.window.FormWindow, id: number /*int*/): number /*int*/
            /**
             * Shows a new setting page in game settings
             * You can find out settings result by listening to PlayerFormRespondedEvent
             * @param window to show on settings page
             * @return form id to use in {#link PlayerFormRespondedEvent}
             */
            // @ts-ignore
            public addServerSettings(window: cn.nukkit.form.window.FormWindow): number /*int*/
            /**
             * Creates and sends a BossBar to the player
             * @param text   The BossBar message
             * @param length The BossBar percentage
             * @return bossBarId  The BossBar ID, you should store it if you want to remove or update the BossBar later
             */
            // @ts-ignore
            public createBossBar(text: java.lang.String | string, length: number /*int*/): number /*long*/
            /**
             * Creates and sends a BossBar to the player
             * @param dummyBossBar DummyBossBar Object (Instantiate it by the Class Builder)
             * @return bossBarId  The BossBar ID, you should store it if you want to remove or update the BossBar later
             * @see DummyBossBar.Builder
             */
            // @ts-ignore
            public createBossBar(dummyBossBar: cn.nukkit.utils.DummyBossBar): number /*long*/
            /**
             * Get a DummyBossBar object
             * @param bossBarId The BossBar ID
             * @return DummyBossBar object
             * @see DummyBossBar#setText(String) Set BossBar text
             * @see DummyBossBar#setLength(float) Set BossBar length
             * @see DummyBossBar#setColor(BlockColor) Set BossBar color
             */
            // @ts-ignore
            public getDummyBossBar(bossBarId: number /*long*/): cn.nukkit.utils.DummyBossBar
            /**
             * Get all DummyBossBar objects
             * @return DummyBossBars Map
             */
            // @ts-ignore
            public getDummyBossBars(): java.util.Map<java.lang.Long | number, cn.nukkit.utils.DummyBossBar>
            /**
             * Updates a BossBar
             * @param text      The new BossBar message
             * @param length    The new BossBar length
             * @param bossBarId The BossBar ID
             */
            // @ts-ignore
            public updateBossBar(text: java.lang.String | string, length: number /*int*/, bossBarId: number /*long*/): void
            /**
             * Removes a BossBar
             * @param bossBarId The BossBar ID
             */
            // @ts-ignore
            public removeBossBar(bossBarId: number /*long*/): void
            // @ts-ignore
            public getWindowId(inventory: cn.nukkit.inventory.Inventory): number /*int*/
            // @ts-ignore
            public getWindowById(id: number /*int*/): cn.nukkit.inventory.Inventory
            // @ts-ignore
            public addWindow(inventory: cn.nukkit.inventory.Inventory): number /*int*/
            // @ts-ignore
            public addWindow(inventory: cn.nukkit.inventory.Inventory, forceId: java.lang.Integer | number): number /*int*/
            // @ts-ignore
            public addWindow(inventory: cn.nukkit.inventory.Inventory, forceId: java.lang.Integer | number, isPermanent: boolean): number /*int*/
            // @ts-ignore
            public getTopWindow(): java.util.Optional<cn.nukkit.inventory.Inventory>
            // @ts-ignore
            public removeWindow(inventory: cn.nukkit.inventory.Inventory): void
            // @ts-ignore
            public sendAllInventories(): void
            // @ts-ignore
            addDefaultWindows(): void
            // @ts-ignore
            public getUIInventory(): cn.nukkit.inventory.PlayerUIInventory
            // @ts-ignore
            public getCursorInventory(): cn.nukkit.inventory.PlayerCursorInventory
            // @ts-ignore
            public getCraftingGrid(): cn.nukkit.inventory.CraftingGrid
            // @ts-ignore
            public setCraftingGrid(grid: cn.nukkit.inventory.CraftingGrid): void
            // @ts-ignore
            public resetCraftingGridType(): void
            // @ts-ignore
            public removeAllWindows(): void
            // @ts-ignore
            public removeAllWindows(permanent: boolean): void
            // @ts-ignore
            public setMetadata(metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
            // @ts-ignore
            public getMetadata(metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
            // @ts-ignore
            public hasMetadata(metadataKey: java.lang.String | string): boolean
            // @ts-ignore
            public removeMetadata(metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
            // @ts-ignore
            public onChunkChanged(chunk: cn.nukkit.level.format.FullChunk): void
            // @ts-ignore
            public onChunkLoaded(chunk: cn.nukkit.level.format.FullChunk): void
            // @ts-ignore
            public onChunkPopulated(chunk: cn.nukkit.level.format.FullChunk): void
            // @ts-ignore
            public onChunkUnloaded(chunk: cn.nukkit.level.format.FullChunk): void
            // @ts-ignore
            public onBlockChanged(block: cn.nukkit.math.Vector3): void
            // @ts-ignore
            public getLoaderId(): number /*int*/
            // @ts-ignore
            public isLoaderActive(): boolean
            // @ts-ignore
            public static getChunkCacheFromData(chunkX: number /*int*/, chunkZ: number /*int*/, subChunkCount: number /*int*/, payload: number /*byte*/[]): cn.nukkit.network.protocol.BatchPacket
            // @ts-ignore
            public isFoodEnabled(): boolean
            // @ts-ignore
            public setFoodEnabled(foodEnabled: boolean): void
            // @ts-ignore
            public getFoodData(): cn.nukkit.PlayerFood
            // @ts-ignore
            public switchLevel(level: cn.nukkit.level.Level): boolean
            // @ts-ignore
            public setCheckMovement(checkMovement: boolean): void
            // @ts-ignore
            public setLocale(locale: java.util.Locale): void
            // @ts-ignore
            public getLocale(): java.util.Locale
            // @ts-ignore
            public setSprinting(value: boolean): void
            // @ts-ignore
            public transfer(address: java.net.InetSocketAddress): void
            // @ts-ignore
            public getLoginChainData(): cn.nukkit.utils.LoginChainData
            // @ts-ignore
            public pickupEntity(entity: cn.nukkit.entity.Entity, near: boolean): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Notifies an ACK response from the client
             * @param identification packet identity
             */
            // @ts-ignore
            public notifyACK(identification: number /*int*/): void
            // @ts-ignore
            public isBreakingBlock(): boolean
            /**
             * Show a window of a XBOX account's profile
             * @param xuid XUID
             */
            // @ts-ignore
            public showXboxProfile(xuid: java.lang.String | string): void
            // @ts-ignore
            public startFishing(fishingRod: cn.nukkit.item.Item): void
            // @ts-ignore
            public stopFishing(click: boolean): void
            // @ts-ignore
            public toString(): string
        }
    }
}
