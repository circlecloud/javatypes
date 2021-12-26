declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace config {
                // @ts-ignore
                class Config extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static debug: boolean
                    // @ts-ignore
                    public static joinPacketDelay: number /*int*/
                    // @ts-ignore
                    public static password: java.lang.String | string
                    // @ts-ignore
                    public static slotSettings: java.util.Map<java.lang.String | string, eos.moe.dragoncore.config.SlotSetting>
                    // @ts-ignore
                    public static fileMap: java.util.HashMap<java.lang.String | string, YamlConfiguration>
                    // @ts-ignore
                    public static registeredKeys: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>
                    // @ts-ignore
                    public static replaceChatColor: boolean
                    // @ts-ignore
                    public static init(plugin: eos.moe.dragoncore.DragonCore): void
                    // @ts-ignore
                    public static getYamlFiles(folder: java.io.File, list: java.util.List<java.io.File> | Array<java.io.File>): Array<java.io.File>
                    // @ts-ignore
                    public static sendYamlToClient(): void
                    // @ts-ignore
                    public static sendYamlToClient(player: Player): void
                    // @ts-ignore
                    public static loadSettings(): void
                    // @ts-ignore
                    public static getConfig(): YamlConfiguration
                    // @ts-ignore
                    public static getSlotConfig(): YamlConfiguration
                    // @ts-ignore
                    public static loadConfiguration(file: java.io.File): YamlConfiguration
                }
            }
        }
    }
}
