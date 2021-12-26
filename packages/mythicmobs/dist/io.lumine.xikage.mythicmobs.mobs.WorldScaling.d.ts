declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    // @ts-ignore
                    class WorldScaling extends java.lang.Object {
                        // @ts-ignore
                        constructor(world: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig)
                        // @ts-ignore
                        constructor(world: java.lang.String | string)
                        // @ts-ignore
                        public static worldSettings: java.util.concurrent.ConcurrentHashMap<java.lang.String | string, io.lumine.xikage.mythicmobs.mobs.WorldScaling>
                        // @ts-ignore
                        public isEnabled(): boolean
                        // @ts-ignore
                        public getWorldName(): string
                        // @ts-ignore
                        public getScaleFactor_BlocksFromSpawn(): number /*double*/
                        // @ts-ignore
                        public static initialize(world: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig): void
                        // @ts-ignore
                        public static get(world: java.lang.String | string): io.lumine.xikage.mythicmobs.mobs.WorldScaling
                        // @ts-ignore
                        public static reset(): void
                        // @ts-ignore
                        public static getLevelBonus(l: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*int*/
                    }
                }
            }
        }
    }
}
