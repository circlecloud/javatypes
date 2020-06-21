declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-13.
                 */
                // @ts-ignore
                class StartGamePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly GAME_PUBLISH_SETTING_NO_MULTI_PLAY: number /*int*/
                    // @ts-ignore
                    public static readonly GAME_PUBLISH_SETTING_INVITE_ONLY: number /*int*/
                    // @ts-ignore
                    public static readonly GAME_PUBLISH_SETTING_FRIENDS_ONLY: number /*int*/
                    // @ts-ignore
                    public static readonly GAME_PUBLISH_SETTING_FRIENDS_OF_FRIENDS: number /*int*/
                    // @ts-ignore
                    public static readonly GAME_PUBLISH_SETTING_PUBLIC: number /*int*/
                    // @ts-ignore
                    public entityUniqueId: number /*long*/
                    // @ts-ignore
                    public entityRuntimeId: number /*long*/
                    // @ts-ignore
                    public playerGamemode: number /*int*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public yaw: number /*float*/
                    // @ts-ignore
                    public pitch: number /*float*/
                    // @ts-ignore
                    public seed: number /*int*/
                    // @ts-ignore
                    public dimension: number /*byte*/
                    // @ts-ignore
                    public generator: number /*int*/
                    // @ts-ignore
                    public worldGamemode: number /*int*/
                    // @ts-ignore
                    public difficulty: number /*int*/
                    // @ts-ignore
                    public spawnX: number /*int*/
                    // @ts-ignore
                    public spawnY: number /*int*/
                    // @ts-ignore
                    public spawnZ: number /*int*/
                    // @ts-ignore
                    public hasAchievementsDisabled: boolean
                    // @ts-ignore
                    public dayCycleStopTime: number /*int*/
                    // @ts-ignore
                    public eduEditionOffer: number /*int*/
                    // @ts-ignore
                    public hasEduFeaturesEnabled: boolean
                    // @ts-ignore
                    public rainLevel: number /*float*/
                    // @ts-ignore
                    public lightningLevel: number /*float*/
                    // @ts-ignore
                    public hasConfirmedPlatformLockedContent: boolean
                    // @ts-ignore
                    public multiplayerGame: boolean
                    // @ts-ignore
                    public broadcastToLAN: boolean
                    // @ts-ignore
                    public xblBroadcastIntent: number /*int*/
                    // @ts-ignore
                    public platformBroadcastIntent: number /*int*/
                    // @ts-ignore
                    public commandsEnabled: boolean
                    // @ts-ignore
                    public isTexturePacksRequired: boolean
                    // @ts-ignore
                    public gameRules: cn.nukkit.level.GameRules
                    // @ts-ignore
                    public bonusChest: boolean
                    // @ts-ignore
                    public hasStartWithMapEnabled: boolean
                    // @ts-ignore
                    public permissionLevel: number /*int*/
                    // @ts-ignore
                    public serverChunkTickRange: number /*int*/
                    // @ts-ignore
                    public hasLockedBehaviorPack: boolean
                    // @ts-ignore
                    public hasLockedResourcePack: boolean
                    // @ts-ignore
                    public isFromLockedWorldTemplate: boolean
                    // @ts-ignore
                    public isUsingMsaGamertagsOnly: boolean
                    // @ts-ignore
                    public isFromWorldTemplate: boolean
                    // @ts-ignore
                    public isWorldTemplateOptionLocked: boolean
                    // @ts-ignore
                    public isOnlySpawningV1Villagers: boolean
                    // @ts-ignore
                    public vanillaVersion: java.lang.String | string
                    // @ts-ignore
                    public levelId: java.lang.String | string
                    // @ts-ignore
                    public worldName: java.lang.String | string
                    // @ts-ignore
                    public premiumWorldTemplateId: java.lang.String | string
                    // @ts-ignore
                    public isTrial: boolean
                    // @ts-ignore
                    public isMovementServerAuthoritative: boolean
                    // @ts-ignore
                    public currentTick: number /*long*/
                    // @ts-ignore
                    public enchantmentSeed: number /*int*/
                    // @ts-ignore
                    public multiplayerCorrelationId: java.lang.String | string
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
