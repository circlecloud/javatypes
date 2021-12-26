declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                // @ts-ignore
                class CoreAPI extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static setPlayerWorldTexture(player: Player, key: java.lang.String | string, location: Location, rotateX: number /*float*/, rotateY: number /*float*/, rotateZ: number /*float*/, path: java.lang.String | string, width: number /*float*/, height: number /*float*/, alpha: number /*float*/, follow: boolean, glow: boolean): void
                    // @ts-ignore
                    public static setPlayerWorldTexture(player: Player, key: java.lang.String | string, location: Location, rotateX: number /*float*/, rotateY: number /*float*/, rotateZ: number /*float*/, path: java.lang.String | string, width: number /*float*/, height: number /*float*/, alpha: number /*float*/, followPlayer: boolean, glow: boolean, entity: java.util.UUID, followEntity: boolean, x: number /*float*/, y: number /*float*/, z: number /*float*/): void
                    // @ts-ignore
                    public static setPlayerWorldTextureItem(player: Player, key: java.lang.String | string, location: Location, rotateX: number /*float*/, rotateY: number /*float*/, rotateZ: number /*float*/, itemStack: ItemStack, scale: number /*float*/, followPlayer: boolean): void
                    // @ts-ignore
                    public static setPlayerWorldTextureItem(player: Player, key: java.lang.String | string, location: Location, rotateX: number /*float*/, rotateY: number /*float*/, rotateZ: number /*float*/, itemStack: ItemStack, scale: number /*float*/, followPlayer: boolean, entity: java.util.UUID, followEntity: boolean, x: number /*double*/, y: number /*double*/, z: number /*double*/): void
                    // @ts-ignore
                    public static setPlayerWorldTextureItem(player: Player, key: java.lang.String | string, worldTexture: eos.moe.dragoncore.api.worldtexture.WorldTexture): void
                    // @ts-ignore
                    public static removePlayerWorldTexture(player: Player, key: java.lang.String | string): void
                    // @ts-ignore
                    public static registerKey(key: java.lang.String | string): void
                    // @ts-ignore
                    public static unregisterKey(key: java.lang.String | string): void
                    // @ts-ignore
                    public static setPlayerChatBox(player: Player, text: java.lang.String | string): void
                    // @ts-ignore
                    public static setEntityModel(player: Player, uuid: java.util.UUID, name: java.lang.String | string): void
                    // @ts-ignore
                    public static removeEntityModel(player: Player, uuid: java.util.UUID): void
                    // @ts-ignore
                    public static setEntityModel(uuid: java.util.UUID, name: java.lang.String | string): void
                    // @ts-ignore
                    public static removeEntityModel(uuid: java.util.UUID): void
                    // @ts-ignore
                    public static setEntityAnimation(entity: LivingEntity, animation: java.lang.String | string, transitionTime: number /*int*/): void
                    // @ts-ignore
                    public static removeEntityAnimation(entity: LivingEntity, animation: java.lang.String | string, transitionTime: number /*int*/): void
                    // @ts-ignore
                    public static parseGradientText(text: java.lang.String | string): string
                }
            }
        }
    }
}
