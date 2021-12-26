declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                // @ts-ignore
                class MythicMobs extends JavaPlugin {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static menu_header: java.lang.String | string
                    // @ts-ignore
                    public static r: java.util.Random
                    // @ts-ignore
                    public onEnable(): void
                    // @ts-ignore
                    public onDisable(): void
                    // @ts-ignore
                    public static inst(): io.lumine.xikage.mythicmobs.MythicMobs
                    // @ts-ignore
                    public static p(): boolean
                    // @ts-ignore
                    public server(): io.lumine.xikage.mythicmobs.adapters.ServerInterface
                    // @ts-ignore
                    public static throwSevere(key: java.lang.String | string, default_text: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public static throwWarning(key: java.lang.String | string, default_text: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public static throwInfo(key: java.lang.String | string, default_text: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public static debug(message: java.lang.String | string): void
                    // @ts-ignore
                    public static debug(level: number /*int*/, message: java.lang.String | string): void
                    // @ts-ignore
                    public static log(message: java.lang.String | string): void
                    // @ts-ignore
                    public static log(level: java.util.logging.Level, message: java.lang.String | string): void
                    // @ts-ignore
                    public static error(message: java.lang.String | string): void
                    // @ts-ignore
                    public static skillConfigError(skill: java.lang.String | string, line: java.lang.String | string, message: java.lang.String | string): void
                    // @ts-ignore
                    public static targeterConfigError(skill: java.lang.String | string, line: java.lang.String | string, message: java.lang.String | string): void
                    // @ts-ignore
                    public getVolatileCodeHandler(): io.lumine.xikage.mythicmobs.volatilecode.VolatileCodeHandler
                    // @ts-ignore
                    public handleException(ex: java.lang.Exception): void
                    // @ts-ignore
                    public handleError(ex: java.lang.Error): void
                    // @ts-ignore
                    public getMinecraftVersion(): number /*int*/
                    // @ts-ignore
                    public getVersion(): string
                    // @ts-ignore
                    public getBuildNumber(): string
                    // @ts-ignore
                    public getIsUpdateAvailable(): boolean
                    // @ts-ignore
                    public getBaseCommand(): io.lumine.xikage.mythicmobs.commands.BaseCommand
                    // @ts-ignore
                    public getConfigManager(): io.lumine.xikage.mythicmobs.io.ConfigManager
                    // @ts-ignore
                    public getEntityManager(): io.lumine.xikage.mythicmobs.mobs.EntityManager
                    // @ts-ignore
                    public getWorldManager(): io.lumine.xikage.mythicmobs.adapters.WorldManager
                    // @ts-ignore
                    public getRandomSpawningManager(): io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnerManager
                    // @ts-ignore
                    public getMobManager(): io.lumine.xikage.mythicmobs.mobs.MobManager
                    // @ts-ignore
                    public getPlayerManager(): io.lumine.xikage.mythicmobs.players.PlayerManager
                    // @ts-ignore
                    public getSkillManager(): io.lumine.xikage.mythicmobs.skills.SkillManager
                    // @ts-ignore
                    public getDropManager(): io.lumine.xikage.mythicmobs.drops.DropManager
                    // @ts-ignore
                    public getItemManager(): io.lumine.xikage.mythicmobs.items.ItemManager
                    // @ts-ignore
                    public getSpawnerManager(): io.lumine.xikage.mythicmobs.spawning.spawners.SpawnerManager
                    // @ts-ignore
                    public getVariableManager(): io.lumine.xikage.mythicmobs.skills.variables.VariableManager
                    // @ts-ignore
                    public getPlaceholderManager(): io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderManager
                    // @ts-ignore
                    public getHologramManager(): io.lumine.xikage.mythicmobs.holograms.HologramManager
                    // @ts-ignore
                    public getCompatibility(): io.lumine.xikage.mythicmobs.compatibility.CompatibilityManager
                    // @ts-ignore
                    public getTimingsHandler(): io.lumine.xikage.mythicmobs.clock.TimingsHandler
                    // @ts-ignore
                    public getAPIHelper(): io.lumine.xikage.mythicmobs.api.bukkit.BukkitAPIHelper
                }
            }
        }
    }
}
