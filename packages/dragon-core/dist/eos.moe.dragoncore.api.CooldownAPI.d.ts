declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                // @ts-ignore
                class CooldownAPI extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static setPlayerCooldown(player: Player, itemStack: ItemStack, milliseconds: number /*int*/): void
                    // @ts-ignore
                    public static setPlayerCooldown(player: Player, material: java.lang.String | string, name: java.lang.String | string, lore: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, nbts: java.util.Map<java.lang.String | string, java.lang.String | string>, milliseconds: number /*int*/): void
                    // @ts-ignore
                    public static getPlayerCooldown(player: Player, itemStack: ItemStack): number /*int*/
                    // @ts-ignore
                    public static getPlayerCooldown(player: Player, material: java.lang.String | string, name: java.lang.String | string, lore: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, nbts: java.util.Map<java.lang.String | string, java.lang.String | string>): number /*int*/
                }
            }
        }
    }
}
