declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace io {
                    // @ts-ignore
                    class ConfigManager extends java.lang.Object {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        public static ClockInterval: number /*int*/
                        // @ts-ignore
                        public static debugLevel: number /*int*/
                        // @ts-ignore
                        public static debugMode: boolean
                        // @ts-ignore
                        public static debugSpawners: boolean
                        // @ts-ignore
                        public static errorLogging: boolean
                        // @ts-ignore
                        public static SaveInteval: number /*int*/
                        // @ts-ignore
                        public static SpawningInterval: number /*int*/
                        // @ts-ignore
                        public static timerupdate: number /*int*/
                        // @ts-ignore
                        public static walkupdate: number /*int*/
                        // @ts-ignore
                        public static ShowHealthRadius: number /*int*/
                        // @ts-ignore
                        public static ScanInterval: number /*int*/
                        // @ts-ignore
                        public static ClnrInterval: number /*int*/
                        // @ts-ignore
                        public static AllowMetrics: boolean
                        // @ts-ignore
                        public static UseCompatibilityMode: boolean
                        // @ts-ignore
                        public static UseVolatileFeatures: boolean
                        // @ts-ignore
                        public static ShowHealthFormat: java.lang.String | string
                        // @ts-ignore
                        public static KillMessagePrefix: java.lang.String | string
                        // @ts-ignore
                        public static AllowUpdateChecking: boolean
                        // @ts-ignore
                        public static SpawnerRange: number /*int*/
                        // @ts-ignore
                        public static EnableAIModifiers: boolean
                        // @ts-ignore
                        public static EnableTimerSkills: boolean
                        // @ts-ignore
                        public static EnableThreatTables: boolean
                        // @ts-ignore
                        public static EnablePlayerFactions: boolean
                        // @ts-ignore
                        public static EnableLegacySkills: boolean
                        // @ts-ignore
                        public static defaultLevelModifierHealth: java.lang.String | string
                        // @ts-ignore
                        public static defaultLevelModifierDamage: java.lang.String | string
                        // @ts-ignore
                        public static defaultLevelModifierPower: java.lang.String | string
                        // @ts-ignore
                        public static defaultLevelModifierArmor: java.lang.String | string
                        // @ts-ignore
                        public static defaultLevelModifierKBR: java.lang.String | string
                        // @ts-ignore
                        public static apiUseDeathEvent: boolean
                        // @ts-ignore
                        public static apiUseSkillEvent: boolean
                        // @ts-ignore
                        public static apiUseCustomSkillEvent: boolean
                        // @ts-ignore
                        public static compatHeroesXPEnable: boolean
                        // @ts-ignore
                        public static compatHeroesShowXPMessage: boolean
                        // @ts-ignore
                        public static compatHeroesXPMessageFormat: java.lang.String | string
                        // @ts-ignore
                        public static compatSkillAPIShowXPMessage: boolean
                        // @ts-ignore
                        public static compatSkillAPIXPMessageFormat: java.lang.String | string
                        // @ts-ignore
                        public static compatVaultShowMoneyMessage: boolean
                        // @ts-ignore
                        public static compatVaultMoneyMessageFormat: java.lang.String | string
                        // @ts-ignore
                        public static compatMcMMOShowXPMessage: boolean
                        // @ts-ignore
                        public static compatMcMMOXPMessageFormat: java.lang.String | string
                        // @ts-ignore
                        public SaveAll(): void
                        // @ts-ignore
                        public ResetAll(): void
                        // @ts-ignore
                        public LoadAll(msg: boolean): void
                        // @ts-ignore
                        public loadSettings(): void
                        // @ts-ignore
                        public getConfig(): io.lumine.xikage.mythicmobs.io.MythicConfig
                        // @ts-ignore
                        public loadLegacySettings(): void
                        // @ts-ignore
                        public static generateRSPoints(): boolean
                        // @ts-ignore
                        public static getRSMaxMobsPerChunk(): number /*int*/
                        // @ts-ignore
                        public static getRSPlayerRadius(): number /*int*/
                        // @ts-ignore
                        public static getRSPlayerRadiusY(): number /*int*/
                        // @ts-ignore
                        public static getRSPointsPerSecondLand(): number /*int*/
                        // @ts-ignore
                        public static getRSPointsPerSecondAir(): number /*int*/
                        // @ts-ignore
                        public static getRSPointsPerSecondSea(): number /*int*/
                        // @ts-ignore
                        public static getRSPointsPerSecondLava(): number /*int*/
                        // @ts-ignore
                        public static getRSPointsPerSecondGround(): number /*int*/
                        // @ts-ignore
                        public static getRSMaxGenerationTimeMillis(): number /*int*/
                        // @ts-ignore
                        public static getRSDespawnVanillaOutsideRadius(): boolean
                        // @ts-ignore
                        public getDespawnMobsByDefault(): boolean
                        // @ts-ignore
                        public getPreventOtherDropsByDefault(): boolean
                        // @ts-ignore
                        public getTransparentBlocks(): java.util.HashSet<Material>
                        // @ts-ignore
                        public static isVanillaSpawnsDisabled(): boolean
                    }
                }
            }
        }
    }
}
