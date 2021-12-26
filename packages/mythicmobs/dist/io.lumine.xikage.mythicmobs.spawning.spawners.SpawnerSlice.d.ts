declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace spawners {
                        // @ts-ignore
                        class SpawnerSlice extends java.lang.Object {
                            // @ts-ignore
                            constructor(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner, base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation)
                            // @ts-ignore
                            spawner: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                            // @ts-ignore
                            origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            offset_x: number /*int*/
                            // @ts-ignore
                            offset_y: number /*int*/
                            // @ts-ignore
                            offset_z: number /*int*/
                            // @ts-ignore
                            public static CutBuffer: java.util.List<io.lumine.xikage.mythicmobs.spawning.spawners.SpawnerSlice> | Array<io.lumine.xikage.mythicmobs.spawning.spawners.SpawnerSlice>
                            // @ts-ignore
                            public static cut: boolean
                            // @ts-ignore
                            public static CutSpawners(msl: java.util.List<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>, base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public static PasteSpawners(base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public static Undo(): boolean
                            // @ts-ignore
                            public getSpawner(): io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                            // @ts-ignore
                            public getOriginalLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public getRelativeLocation(base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        }
                    }
                }
            }
        }
    }
}
