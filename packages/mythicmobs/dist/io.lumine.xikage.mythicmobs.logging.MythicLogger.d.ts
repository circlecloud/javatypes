declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace logging {
                    // @ts-ignore
                    class MythicLogger extends java.lang.Object {
                        // @ts-ignore
                        public static log(message: java.lang.String | string): void
                        // @ts-ignore
                        public static log(message: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                        // @ts-ignore
                        public static log(level: java.util.logging.Level, message: java.lang.String | string): void
                        // @ts-ignore
                        public static log(level: java.util.logging.Level, message: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                        // @ts-ignore
                        public static error(message: java.lang.String | string): void
                        // @ts-ignore
                        public static error(message: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                        // @ts-ignore
                        public static errorGenericConfig(error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorGenericConfig(config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorConditionConfig(condition: io.lumine.xikage.mythicmobs.skills.SkillCondition, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorDropConfig(drop: io.lumine.xikage.mythicmobs.drops.Drop, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorDropTableConfig(drop: io.lumine.xikage.mythicmobs.drops.DropTable, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorEntityConfig(entity: io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity, config: io.lumine.xikage.mythicmobs.io.MythicConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorItemConfig(item: io.lumine.xikage.mythicmobs.items.MythicItem, config: io.lumine.xikage.mythicmobs.io.MythicConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorMechanicConfig(mechanic: io.lumine.xikage.mythicmobs.skills.SkillMechanic, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorMobConfig(mob: io.lumine.xikage.mythicmobs.mobs.MythicMob, config: io.lumine.xikage.mythicmobs.io.MythicConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorTargeterConfig(targeter: io.lumine.xikage.mythicmobs.skills.SkillTargeter, config: io.lumine.xikage.mythicmobs.io.MythicLineConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorSpawnConfig(spawner: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner, config: io.lumine.xikage.mythicmobs.io.MythicConfig, error: java.lang.String | string): void
                        // @ts-ignore
                        public static errorCompatibility(plugin: java.lang.String | string, error: java.lang.String | string): void
                        // @ts-ignore
                        public static debug(level: io.lumine.xikage.mythicmobs.logging.MythicLogger.DebugLevel, message: java.lang.String | string, ...params: java.lang.Object[] | any[]): void
                    }
                }
            }
        }
    }
}
