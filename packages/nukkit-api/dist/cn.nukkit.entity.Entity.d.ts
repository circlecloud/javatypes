declare namespace cn {
    namespace nukkit {
        namespace entity {
            /**
             * @author MagicDroidX
             */
            // @ts-ignore
            abstract class Entity extends cn.nukkit.level.Location implements cn.nukkit.metadata.Metadatable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                public static readonly NETWORK_ID: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_BYTE: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_SHORT: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_INT: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_FLOAT: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_STRING: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_NBT: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_POS: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_LONG: number /*int*/
                // @ts-ignore
                public static readonly DATA_TYPE_VECTOR3F: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAGS: number /*int*/
                // @ts-ignore
                public static readonly DATA_HEALTH: number /*int*/
                // @ts-ignore
                public static readonly DATA_VARIANT: number /*int*/
                // @ts-ignore
                public static readonly DATA_COLOR: number /*int*/
                // @ts-ignore
                public static readonly DATA_COLOUR: number /*int*/
                // @ts-ignore
                public static readonly DATA_NAMETAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_OWNER_EID: number /*int*/
                // @ts-ignore
                public static readonly DATA_TARGET_EID: number /*int*/
                // @ts-ignore
                public static readonly DATA_AIR: number /*int*/
                // @ts-ignore
                public static readonly DATA_POTION_COLOR: number /*int*/
                // @ts-ignore
                public static readonly DATA_POTION_AMBIENT: number /*int*/
                // @ts-ignore
                public static readonly DATA_JUMP_DURATION: number /*int*/
                // @ts-ignore
                public static readonly DATA_HURT_TIME: number /*int*/
                // @ts-ignore
                public static readonly DATA_HURT_DIRECTION: number /*int*/
                // @ts-ignore
                public static readonly DATA_PADDLE_TIME_LEFT: number /*int*/
                // @ts-ignore
                public static readonly DATA_PADDLE_TIME_RIGHT: number /*int*/
                // @ts-ignore
                public static readonly DATA_EXPERIENCE_VALUE: number /*int*/
                // @ts-ignore
                public static readonly DATA_DISPLAY_ITEM: number /*int*/
                // @ts-ignore
                public static readonly DATA_DISPLAY_OFFSET: number /*int*/
                // @ts-ignore
                public static readonly DATA_HAS_DISPLAY: number /*int*/
                // @ts-ignore
                public static readonly DATA_ENDERMAN_HELD_RUNTIME_ID: number /*int*/
                // @ts-ignore
                public static readonly DATA_ENTITY_AGE: number /*int*/
                // @ts-ignore
                public static readonly DATA_PLAYER_FLAGS: number /*int*/
                // @ts-ignore
                public static readonly DATA_PLAYER_BED_POSITION: number /*int*/
                // @ts-ignore
                public static readonly DATA_FIREBALL_POWER_X: number /*int*/
                // @ts-ignore
                public static readonly DATA_FIREBALL_POWER_Y: number /*int*/
                // @ts-ignore
                public static readonly DATA_FIREBALL_POWER_Z: number /*int*/
                // @ts-ignore
                public static readonly DATA_POTION_AUX_VALUE: number /*int*/
                // @ts-ignore
                public static readonly DATA_LEAD_HOLDER_EID: number /*int*/
                // @ts-ignore
                public static readonly DATA_SCALE: number /*int*/
                // @ts-ignore
                public static readonly DATA_INTERACTIVE_TAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_NPC_SKIN_ID: number /*int*/
                // @ts-ignore
                public static readonly DATA_URL_TAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_MAX_AIR: number /*int*/
                // @ts-ignore
                public static readonly DATA_MARK_VARIANT: number /*int*/
                // @ts-ignore
                public static readonly DATA_CONTAINER_TYPE: number /*int*/
                // @ts-ignore
                public static readonly DATA_CONTAINER_BASE_SIZE: number /*int*/
                // @ts-ignore
                public static readonly DATA_CONTAINER_EXTRA_SLOTS_PER_STRENGTH: number /*int*/
                // @ts-ignore
                public static readonly DATA_BLOCK_TARGET: number /*int*/
                // @ts-ignore
                public static readonly DATA_WITHER_INVULNERABLE_TICKS: number /*int*/
                // @ts-ignore
                public static readonly DATA_WITHER_TARGET_1: number /*int*/
                // @ts-ignore
                public static readonly DATA_WITHER_TARGET_2: number /*int*/
                // @ts-ignore
                public static readonly DATA_WITHER_TARGET_3: number /*int*/
                // @ts-ignore
                public static readonly DATA_BOUNDING_BOX_WIDTH: number /*int*/
                // @ts-ignore
                public static readonly DATA_BOUNDING_BOX_HEIGHT: number /*int*/
                // @ts-ignore
                public static readonly DATA_FUSE_LENGTH: number /*int*/
                // @ts-ignore
                public static readonly DATA_RIDER_SEAT_POSITION: number /*int*/
                // @ts-ignore
                public static readonly DATA_RIDER_ROTATION_LOCKED: number /*int*/
                // @ts-ignore
                public static readonly DATA_RIDER_MAX_ROTATION: number /*int*/
                // @ts-ignore
                public static readonly DATA_RIDER_MIN_ROTATION: number /*int*/
                // @ts-ignore
                public static readonly DATA_AREA_EFFECT_CLOUD_RADIUS: number /*int*/
                // @ts-ignore
                public static readonly DATA_AREA_EFFECT_CLOUD_WAITING: number /*int*/
                // @ts-ignore
                public static readonly DATA_AREA_EFFECT_CLOUD_PARTICLE_ID: number /*int*/
                // @ts-ignore
                public static readonly DATA_SHULKER_ATTACH_FACE: number /*int*/
                // @ts-ignore
                public static readonly DATA_SHULKER_ATTACH_POS: number /*int*/
                // @ts-ignore
                public static readonly DATA_TRADING_PLAYER_EID: number /*int*/
                // @ts-ignore
                public static readonly DATA_COMMAND_BLOCK_COMMAND: number /*int*/
                // @ts-ignore
                public static readonly DATA_COMMAND_BLOCK_LAST_OUTPUT: number /*int*/
                // @ts-ignore
                public static readonly DATA_COMMAND_BLOCK_TRACK_OUTPUT: number /*int*/
                // @ts-ignore
                public static readonly DATA_CONTROLLING_RIDER_SEAT_NUMBER: number /*int*/
                // @ts-ignore
                public static readonly DATA_STRENGTH: number /*int*/
                // @ts-ignore
                public static readonly DATA_MAX_STRENGTH: number /*int*/
                // @ts-ignore
                public static readonly DATA_LIMITED_LIFE: number /*int*/
                // @ts-ignore
                public static readonly DATA_ARMOR_STAND_POSE_INDEX: number /*int*/
                // @ts-ignore
                public static readonly DATA_ENDER_CRYSTAL_TIME_OFFSET: number /*int*/
                // @ts-ignore
                public static readonly DATA_ALWAYS_SHOW_NAMETAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_COLOR_2: number /*int*/
                // @ts-ignore
                public static readonly DATA_SCORE_TAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_BALLOON_ATTACHED_ENTITY: number /*int*/
                // @ts-ignore
                public static readonly DATA_PUFFERFISH_SIZE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAGS_EXTENDED: number /*int*/
                // @ts-ignore
                public static readonly DATA_SKIN_ID: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ONFIRE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SNEAKING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_RIDING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SPRINTING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ACTION: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_INVISIBLE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_TEMPTED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_INLOVE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SADDLED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_POWERED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_IGNITED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_BABY: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CONVERTING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CRITICAL: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CAN_SHOW_NAMETAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ALWAYS_SHOW_NAMETAG: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_IMMOBILE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_NO_AI: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SILENT: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_WALLCLIMBING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CAN_CLIMB: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SWIMMER: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CAN_FLY: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_WALKER: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_RESTING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SITTING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ANGRY: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_INTERESTED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CHARGED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_TAMED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ORPHANED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_LEASHED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SHEARED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_GLIDING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ELDER: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_MOVING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_BREATHING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CHESTED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_STACKABLE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SHOWBASE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_REARING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_VIBRATING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_IDLING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_EVOKER_SPELL: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CHARGE_ATTACK: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_WASD_CONTROLLED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CAN_POWER_JUMP: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_LINGER: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_HAS_COLLISION: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_GRAVITY: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_FIRE_IMMUNE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_DANCING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_ENCHANTED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SHOW_TRIDENT_ROPE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_CONTAINER_PRIVATE: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SPIN_ATTACK: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_SWIMMING: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_BRIBED: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_PREGNANT: number /*int*/
                // @ts-ignore
                public static readonly DATA_FLAG_LAYING_EGG: number /*int*/
                // @ts-ignore
                public static entityCount: number /*long*/
                // @ts-ignore
                readonly hasSpawned: java.util.Map<java.lang.Integer | number, cn.nukkit.Player>
                // @ts-ignore
                readonly effects: java.util.Map<java.lang.Integer | number, cn.nukkit.potion.Effect>
                // @ts-ignore
                id: number /*long*/
                // @ts-ignore
                readonly dataProperties: cn.nukkit.entity.data.EntityMetadata
                // @ts-ignore
                public readonly passengers: java.util.List<cn.nukkit.entity.Entity> | Array<cn.nukkit.entity.Entity>
                // @ts-ignore
                public riding: cn.nukkit.entity.Entity
                // @ts-ignore
                public chunk: cn.nukkit.level.format.FullChunk
                // @ts-ignore
                lastDamageCause: cn.nukkit.event.entity.EntityDamageEvent
                // @ts-ignore
                public blocksAround: java.util.List<cn.nukkit.block.Block> | Array<cn.nukkit.block.Block>
                // @ts-ignore
                public collisionBlocks: java.util.List<cn.nukkit.block.Block> | Array<cn.nukkit.block.Block>
                // @ts-ignore
                public lastX: number /*double*/
                // @ts-ignore
                public lastY: number /*double*/
                // @ts-ignore
                public lastZ: number /*double*/
                // @ts-ignore
                public firstMove: boolean
                // @ts-ignore
                public motionX: number /*double*/
                // @ts-ignore
                public motionY: number /*double*/
                // @ts-ignore
                public motionZ: number /*double*/
                // @ts-ignore
                public temporalVector: cn.nukkit.math.Vector3
                // @ts-ignore
                public lastMotionX: number /*double*/
                // @ts-ignore
                public lastMotionY: number /*double*/
                // @ts-ignore
                public lastMotionZ: number /*double*/
                // @ts-ignore
                public lastYaw: number /*double*/
                // @ts-ignore
                public lastPitch: number /*double*/
                // @ts-ignore
                public pitchDelta: number /*double*/
                // @ts-ignore
                public yawDelta: number /*double*/
                // @ts-ignore
                public entityCollisionReduction: number /*double*/
                // @ts-ignore
                public boundingBox: cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public onGround: boolean
                // @ts-ignore
                public inBlock: boolean
                // @ts-ignore
                public positionChanged: boolean
                // @ts-ignore
                public motionChanged: boolean
                // @ts-ignore
                public deadTicks: number /*int*/
                // @ts-ignore
                age: number /*int*/
                // @ts-ignore
                health: number /*float*/
                // @ts-ignore
                absorption: number /*float*/
                // @ts-ignore
                ySize: number /*float*/
                // @ts-ignore
                public keepMovement: boolean
                // @ts-ignore
                public fallDistance: number /*float*/
                // @ts-ignore
                public ticksLived: number /*int*/
                // @ts-ignore
                public lastUpdate: number /*int*/
                // @ts-ignore
                public maxFireTicks: number /*int*/
                // @ts-ignore
                public fireTicks: number /*int*/
                // @ts-ignore
                public inPortalTicks: number /*int*/
                // @ts-ignore
                public scale: number /*float*/
                // @ts-ignore
                public namedTag: cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                isStatic: boolean
                // @ts-ignore
                public isCollided: boolean
                // @ts-ignore
                public isCollidedHorizontally: boolean
                // @ts-ignore
                public isCollidedVertically: boolean
                // @ts-ignore
                public noDamageTicks: number /*int*/
                // @ts-ignore
                public justCreated: boolean
                // @ts-ignore
                public fireProof: boolean
                // @ts-ignore
                public invulnerable: boolean
                // @ts-ignore
                server: cn.nukkit.Server
                // @ts-ignore
                public highestPosition: number /*double*/
                // @ts-ignore
                public closed: boolean
                // @ts-ignore
                timing: co.aikar.timings.Timing
                // @ts-ignore
                isPlayer: boolean
                // @ts-ignore
                public abstract getNetworkId(): number /*int*/
                // @ts-ignore
                public getHeight(): number /*float*/
                // @ts-ignore
                public getEyeHeight(): number /*float*/
                // @ts-ignore
                public getWidth(): number /*float*/
                // @ts-ignore
                public getLength(): number /*float*/
                // @ts-ignore
                getStepHeight(): number /*double*/
                // @ts-ignore
                public canCollide(): boolean
                // @ts-ignore
                getGravity(): number /*float*/
                // @ts-ignore
                getDrag(): number /*float*/
                // @ts-ignore
                getBaseOffset(): number /*float*/
                // @ts-ignore
                initEntity(): void
                // @ts-ignore
                init(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag): void
                // @ts-ignore
                public hasCustomName(): boolean
                // @ts-ignore
                public getNameTag(): string
                // @ts-ignore
                public isNameTagVisible(): boolean
                // @ts-ignore
                public isNameTagAlwaysVisible(): boolean
                // @ts-ignore
                public setNameTag(name: java.lang.String | string): void
                // @ts-ignore
                public setNameTagVisible(): void
                // @ts-ignore
                public setNameTagVisible(value: boolean): void
                // @ts-ignore
                public setNameTagAlwaysVisible(): void
                // @ts-ignore
                public setNameTagAlwaysVisible(value: boolean): void
                // @ts-ignore
                public setScoreTag(score: java.lang.String | string): void
                // @ts-ignore
                public getScoreTag(): string
                // @ts-ignore
                public isSneaking(): boolean
                // @ts-ignore
                public setSneaking(): void
                // @ts-ignore
                public setSneaking(value: boolean): void
                // @ts-ignore
                public isSwimming(): boolean
                // @ts-ignore
                public setSwimming(): void
                // @ts-ignore
                public setSwimming(value: boolean): void
                // @ts-ignore
                public isSprinting(): boolean
                // @ts-ignore
                public setSprinting(): void
                // @ts-ignore
                public setSprinting(value: boolean): void
                // @ts-ignore
                public isGliding(): boolean
                // @ts-ignore
                public setGliding(): void
                // @ts-ignore
                public setGliding(value: boolean): void
                // @ts-ignore
                public isImmobile(): boolean
                // @ts-ignore
                public setImmobile(): void
                // @ts-ignore
                public setImmobile(value: boolean): void
                // @ts-ignore
                public canClimb(): boolean
                // @ts-ignore
                public setCanClimb(): void
                // @ts-ignore
                public setCanClimb(value: boolean): void
                // @ts-ignore
                public canClimbWalls(): boolean
                // @ts-ignore
                public setCanClimbWalls(): void
                // @ts-ignore
                public setCanClimbWalls(value: boolean): void
                // @ts-ignore
                public setScale(scale: number /*float*/): void
                // @ts-ignore
                public getScale(): number /*float*/
                // @ts-ignore
                public getPassengers(): Array<cn.nukkit.entity.Entity>
                // @ts-ignore
                public getPassenger(): cn.nukkit.entity.Entity
                // @ts-ignore
                public isPassenger(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                public isControlling(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                public hasControllingPassenger(): boolean
                // @ts-ignore
                public getRiding(): cn.nukkit.entity.Entity
                // @ts-ignore
                public getEffects(): java.util.Map<java.lang.Integer | number, cn.nukkit.potion.Effect>
                // @ts-ignore
                public removeAllEffects(): void
                // @ts-ignore
                public removeEffect(effectId: number /*int*/): void
                // @ts-ignore
                public getEffect(effectId: number /*int*/): cn.nukkit.potion.Effect
                // @ts-ignore
                public hasEffect(effectId: number /*int*/): boolean
                // @ts-ignore
                public addEffect(effect: cn.nukkit.potion.Effect): void
                // @ts-ignore
                public recalculateBoundingBox(): void
                // @ts-ignore
                public recalculateBoundingBox(send: boolean): void
                // @ts-ignore
                recalculateEffectColor(): void
                // @ts-ignore
                public static createEntity(name: java.lang.String | string, pos: cn.nukkit.level.Position, ...args: java.lang.Object[] | any[]): cn.nukkit.entity.Entity
                // @ts-ignore
                public static createEntity(type: number /*int*/, pos: cn.nukkit.level.Position, ...args: java.lang.Object[] | any[]): cn.nukkit.entity.Entity
                // @ts-ignore
                public static createEntity(name: java.lang.String | string, chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, ...args: java.lang.Object[] | any[]): cn.nukkit.entity.Entity
                // @ts-ignore
                public static createEntity(type: number /*int*/, chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, ...args: java.lang.Object[] | any[]): cn.nukkit.entity.Entity
                // @ts-ignore
                public static registerEntity(name: java.lang.String | string, clazz: java.lang.Class<any>): boolean
                // @ts-ignore
                public static registerEntity(name: java.lang.String | string, clazz: java.lang.Class<any>, force: boolean): boolean
                // @ts-ignore
                public static getDefaultNBT(pos: cn.nukkit.math.Vector3): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static getDefaultNBT(pos: cn.nukkit.math.Vector3, motion: cn.nukkit.math.Vector3): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public static getDefaultNBT(pos: cn.nukkit.math.Vector3, motion: cn.nukkit.math.Vector3, yaw: number /*float*/, pitch: number /*float*/): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public saveNBT(): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getSaveId(): string
                // @ts-ignore
                public spawnTo(player: cn.nukkit.Player): void
                // @ts-ignore
                createAddEntityPacket(): cn.nukkit.network.protocol.DataPacket
                // @ts-ignore
                public getViewers(): java.util.Map<java.lang.Integer | number, cn.nukkit.Player>
                // @ts-ignore
                public sendPotionEffects(player: cn.nukkit.Player): void
                // @ts-ignore
                public sendData(player: cn.nukkit.Player): void
                // @ts-ignore
                public sendData(player: cn.nukkit.Player, data: cn.nukkit.entity.data.EntityMetadata): void
                // @ts-ignore
                public sendData(players: cn.nukkit.Player[]): void
                // @ts-ignore
                public sendData(players: cn.nukkit.Player[], data: cn.nukkit.entity.data.EntityMetadata): void
                // @ts-ignore
                public despawnFrom(player: cn.nukkit.Player): void
                // @ts-ignore
                public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                // @ts-ignore
                public attack(damage: number /*float*/): boolean
                // @ts-ignore
                public heal(source: cn.nukkit.event.entity.EntityRegainHealthEvent): void
                // @ts-ignore
                public heal(amount: number /*float*/): void
                // @ts-ignore
                public getHealth(): number /*float*/
                // @ts-ignore
                public isAlive(): boolean
                // @ts-ignore
                public isClosed(): boolean
                // @ts-ignore
                public setHealth(health: number /*float*/): void
                // @ts-ignore
                public setLastDamageCause(type: cn.nukkit.event.entity.EntityDamageEvent): void
                // @ts-ignore
                public getLastDamageCause(): cn.nukkit.event.entity.EntityDamageEvent
                // @ts-ignore
                public getMaxHealth(): number /*int*/
                // @ts-ignore
                public setMaxHealth(maxHealth: number /*int*/): void
                // @ts-ignore
                public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                checkObstruction(x: number /*double*/, y: number /*double*/, z: number /*double*/): boolean
                // @ts-ignore
                public entityBaseTick(): boolean
                // @ts-ignore
                public entityBaseTick(tickDiff: number /*int*/): boolean
                // @ts-ignore
                public updateMovement(): void
                // @ts-ignore
                public addMovement(x: number /*double*/, y: number /*double*/, z: number /*double*/, yaw: number /*double*/, pitch: number /*double*/, headYaw: number /*double*/): void
                // @ts-ignore
                public addMotion(motionX: number /*double*/, motionY: number /*double*/, motionZ: number /*double*/): void
                // @ts-ignore
                public getDirectionVector(): cn.nukkit.math.Vector3
                // @ts-ignore
                public getDirectionPlane(): cn.nukkit.math.Vector2
                // @ts-ignore
                public getHorizontalFacing(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public onUpdate(currentTick: number /*int*/): boolean
                // @ts-ignore
                public mountEntity(entity: cn.nukkit.entity.Entity): boolean
                /**
                 * Mount or Dismounts an Entity from a/into vehicle
                 * @param entity The target Entity
                 * @return {#code true} if the mounting successful
                 */
                // @ts-ignore
                public mountEntity(entity: cn.nukkit.entity.Entity, mode: number /*byte*/): boolean
                // @ts-ignore
                public dismountEntity(entity: cn.nukkit.entity.Entity): boolean
                // @ts-ignore
                broadcastLinkPacket(rider: cn.nukkit.entity.Entity, type: number /*byte*/): void
                // @ts-ignore
                public updatePassengers(): void
                // @ts-ignore
                updatePassengerPosition(passenger: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public setSeatPosition(pos: cn.nukkit.math.Vector3f): void
                // @ts-ignore
                public getSeatPosition(): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getMountedOffset(entity: cn.nukkit.entity.Entity): cn.nukkit.math.Vector3f
                // @ts-ignore
                public scheduleUpdate(): void
                // @ts-ignore
                public isOnFire(): boolean
                // @ts-ignore
                public setOnFire(seconds: number /*int*/): void
                // @ts-ignore
                public getAbsorption(): number /*float*/
                // @ts-ignore
                public setAbsorption(absorption: number /*float*/): void
                // @ts-ignore
                public getDirection(): cn.nukkit.math.BlockFace
                // @ts-ignore
                public extinguish(): void
                // @ts-ignore
                public canTriggerWalking(): boolean
                // @ts-ignore
                public resetFallDistance(): void
                // @ts-ignore
                updateFallState(onGround: boolean): void
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB
                // @ts-ignore
                public fall(fallDistance: number /*float*/): void
                // @ts-ignore
                public handleLavaMovement(): void
                // @ts-ignore
                public moveFlying(strafe: number /*float*/, forward: number /*float*/, friction: number /*float*/): void
                // @ts-ignore
                public onCollideWithPlayer(entityPlayer: cn.nukkit.entity.EntityHuman): void
                // @ts-ignore
                public applyEntityCollision(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public onStruckByLightning(entity: cn.nukkit.entity.Entity): void
                // @ts-ignore
                public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item): boolean
                // @ts-ignore
                switchLevel(targetLevel: cn.nukkit.level.Level): boolean
                // @ts-ignore
                public getPosition(): cn.nukkit.level.Position
                // @ts-ignore
                public getLocation(): cn.nukkit.level.Location
                // @ts-ignore
                public isInsideOfWater(): boolean
                // @ts-ignore
                public isInsideOfSolid(): boolean
                // @ts-ignore
                public isInsideOfFire(): boolean
                // @ts-ignore
                public isOnLadder(): boolean
                // @ts-ignore
                public fastMove(dx: number /*double*/, dy: number /*double*/, dz: number /*double*/): boolean
                // @ts-ignore
                public move(dx: number /*double*/, dy: number /*double*/, dz: number /*double*/): boolean
                // @ts-ignore
                checkGroundState(movX: number /*double*/, movY: number /*double*/, movZ: number /*double*/, dx: number /*double*/, dy: number /*double*/, dz: number /*double*/): void
                // @ts-ignore
                public getBlocksAround(): Array<cn.nukkit.block.Block>
                // @ts-ignore
                public getCollisionBlocks(): Array<cn.nukkit.block.Block>
                /**
                 * Returns whether this entity can be moved by currents in liquids.
                 * @return boolean
                 */
                // @ts-ignore
                public canBeMovedByCurrents(): boolean
                // @ts-ignore
                checkBlockCollision(): void
                // @ts-ignore
                public setPositionAndRotation(pos: cn.nukkit.math.Vector3, yaw: number /*double*/, pitch: number /*double*/): boolean
                // @ts-ignore
                public setRotation(yaw: number /*double*/, pitch: number /*double*/): void
                /**
                 * Whether the entity can active pressure plates.
                 * Used for {@link cn.nukkit.entity.passive.EntityBat}s only.
                 * @return triggers pressure plate
                 */
                // @ts-ignore
                public doesTriggerPressurePlate(): boolean
                // @ts-ignore
                public canPassThrough(): boolean
                // @ts-ignore
                checkChunks(): void
                // @ts-ignore
                public setPosition(pos: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public getMotion(): cn.nukkit.math.Vector3
                // @ts-ignore
                public setMotion(motion: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public isOnGround(): boolean
                // @ts-ignore
                public kill(): void
                // @ts-ignore
                public teleport(pos: cn.nukkit.math.Vector3): boolean
                // @ts-ignore
                public teleport(pos: cn.nukkit.math.Vector3, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean
                // @ts-ignore
                public teleport(pos: cn.nukkit.level.Position): boolean
                // @ts-ignore
                public teleport(pos: cn.nukkit.level.Position, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean
                // @ts-ignore
                public teleport(location: cn.nukkit.level.Location): boolean
                // @ts-ignore
                public teleport(location: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean
                // @ts-ignore
                public getId(): number /*long*/
                // @ts-ignore
                public respawnToAll(): void
                // @ts-ignore
                public spawnToAll(): void
                // @ts-ignore
                public despawnFromAll(): void
                // @ts-ignore
                public close(): void
                // @ts-ignore
                public setDataProperty(data: cn.nukkit.entity.data.EntityData<any>): boolean
                // @ts-ignore
                public setDataProperty(data: cn.nukkit.entity.data.EntityData<any>, send: boolean): boolean
                // @ts-ignore
                public getDataProperties(): cn.nukkit.entity.data.EntityMetadata
                // @ts-ignore
                public getDataProperty(id: number /*int*/): cn.nukkit.entity.data.EntityData<any>
                // @ts-ignore
                public getDataPropertyInt(id: number /*int*/): number /*int*/
                // @ts-ignore
                public getDataPropertyShort(id: number /*int*/): number /*int*/
                // @ts-ignore
                public getDataPropertyByte(id: number /*int*/): number /*int*/
                // @ts-ignore
                public getDataPropertyBoolean(id: number /*int*/): boolean
                // @ts-ignore
                public getDataPropertyLong(id: number /*int*/): number /*long*/
                // @ts-ignore
                public getDataPropertyString(id: number /*int*/): string
                // @ts-ignore
                public getDataPropertyFloat(id: number /*int*/): number /*float*/
                // @ts-ignore
                public getDataPropertyNBT(id: number /*int*/): cn.nukkit.nbt.tag.CompoundTag
                // @ts-ignore
                public getDataPropertyPos(id: number /*int*/): cn.nukkit.math.Vector3
                // @ts-ignore
                public getDataPropertyVector3f(id: number /*int*/): cn.nukkit.math.Vector3f
                // @ts-ignore
                public getDataPropertyType(id: number /*int*/): number /*int*/
                // @ts-ignore
                public setDataFlag(propertyId: number /*int*/, id: number /*int*/): void
                // @ts-ignore
                public setDataFlag(propertyId: number /*int*/, id: number /*int*/, value: boolean): void
                // @ts-ignore
                public getDataFlag(propertyId: number /*int*/, id: number /*int*/): boolean
                // @ts-ignore
                public setMetadata(metadataKey: java.lang.String | string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void
                // @ts-ignore
                public getMetadata(metadataKey: java.lang.String | string): Array<cn.nukkit.metadata.MetadataValue>
                // @ts-ignore
                public hasMetadata(metadataKey: java.lang.String | string): boolean
                // @ts-ignore
                public removeMetadata(metadataKey: java.lang.String | string, owningPlugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public getServer(): cn.nukkit.Server
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
