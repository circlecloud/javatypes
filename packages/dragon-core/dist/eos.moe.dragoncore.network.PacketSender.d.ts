declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace network {
                // @ts-ignore
                class PacketSender extends eos.moe.dragoncore.network.PluginMessageSender {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static removeModelEntityAnimation(entity: LivingEntity, animation: java.lang.String | string, transitionTime: number /*int*/): void
                    // @ts-ignore
                    public static setModelEntityAnimation(entity: LivingEntity, animation: java.lang.String | string, transitionTime: number /*int*/): void
                    // @ts-ignore
                    public static sendYaml(player: Player, fileName: java.lang.String | string, yaml: YamlConfiguration): void
                    // @ts-ignore
                    public static sendPlayerWorld(player: Player): void
                    // @ts-ignore
                    public static setChatBoxText(player: Player, text: java.lang.String | string): void
                    // @ts-ignore
                    public static setEntityModel(player: Player, uuid: java.util.UUID, name: java.lang.String | string): void
                    // @ts-ignore
                    public static sendZipPassword(player: Player): void
                    // @ts-ignore
                    public static sendClearCache(player: Player): void
                    // @ts-ignore
                    public static setPlayerWorldTexture(player: Player, key: java.lang.String | string, location: Location, rotateX: number /*float*/, rotateY: number /*float*/, rotateZ: number /*float*/, path: java.lang.String | string, width: number /*float*/, height: number /*float*/, alpha: number /*float*/, followPlayer: boolean, glow: boolean, entity: java.util.UUID, followEntity: boolean, x: number /*double*/, y: number /*double*/, z: number /*double*/): void
                    // @ts-ignore
                    public static setPlayerWorldTexture(player: Player, key: java.lang.String | string, location: Location, rotateX: number /*float*/, rotateY: number /*float*/, rotateZ: number /*float*/, itemStack: ItemStack, scale: number /*float*/, followPlayer: boolean, glow: boolean, entity: java.util.UUID, followEntity: boolean, x: number /*double*/, y: number /*double*/, z: number /*double*/): void
                    // @ts-ignore
                    public static setPlayerWorldTexture(player: Player, key: java.lang.String | string, worldTexture: eos.moe.dragoncore.api.worldtexture.WorldTexture): void
                    // @ts-ignore
                    public static removePlayerWorldTexture(player: Player, key: java.lang.String | string): void
                    // @ts-ignore
                    public static sendKeyRegister(player: Player): void
                    // @ts-ignore
                    public static sendSyncPlaceholder(player: Player, map: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    // @ts-ignore
                    public static sendFinished(player: Player): void
                    // @ts-ignore
                    public static sendOpenGui(player: Player, guiName: java.lang.String | string): void
                    // @ts-ignore
                    public static sendUpdateGui(player: Player, yaml: YamlConfiguration): void
                    // @ts-ignore
                    public static sendOpenHud(player: Player, guiName: java.lang.String | string): void
                    // @ts-ignore
                    public static sendRunFunction(player: Player, guiName: java.lang.String | string, func: java.lang.String | string, async: boolean): void
                    // @ts-ignore
                    public static putClientSlotItem(player: Player, slotIdentity: java.lang.String | string, itemStack: ItemStack): void
                    // @ts-ignore
                    public static sendPlaySound(player: Player, sound: java.lang.String | string, volume: number /*float*/, pitch: number /*float*/, loop: boolean, x: number /*float*/, y: number /*float*/, z: number /*float*/): void
                    // @ts-ignore
                    public static sendPlaySound(player: Player, key: java.lang.String | string, sound: java.lang.String | string, volume: number /*float*/, pitch: number /*float*/, loop: boolean, x: number /*float*/, y: number /*float*/, z: number /*float*/): void
                    // @ts-ignore
                    public static sendStopSound(player: Player, sound: java.lang.String | string): void
                    // @ts-ignore
                    public static sendCooldown(player: Player, startTime: number /*long*/, endTime: number /*long*/, material: java.lang.String | string, name: java.lang.String | string, lore: java.lang.String | string, nbts: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    // @ts-ignore
                    public static sendDeleteItemStackCache(player: Player, key: java.lang.String | string, isStartWith: boolean): void
                    // @ts-ignore
                    public static sendDeletePlaceholderCache(player: Player, key: java.lang.String | string, isStartWith: boolean): void
                    // @ts-ignore
                    public static setThirdPersonView(player: Player, val: number /*int*/): void
                    // @ts-ignore
                    public static setWindowTitle(player: Player, title: java.lang.String | string): void
                    // @ts-ignore
                    public static getNearPlayers(entity: Entity): Array<Player>
                    // @ts-ignore
                    public static getNearPlayers(entity: Entity, range: number /*int*/): Array<Player>
                }
            }
        }
    }
}
