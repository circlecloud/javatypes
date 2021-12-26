declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    namespace entities {
                        // @ts-ignore
                        abstract class MythicEntity extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public abstract instantiate(p0: io.lumine.xikage.mythicmobs.io.MythicConfig): void
                            // @ts-ignore
                            public abstract spawn(p0: io.lumine.xikage.mythicmobs.mobs.MythicMob, p1: Location): Entity
                            // @ts-ignore
                            public abstract spawn(p0: Location): Entity
                            // @ts-ignore
                            public abstract applyOptions(p0: Entity): Entity
                            // @ts-ignore
                            public abstract compare(p0: Entity): boolean
                            // @ts-ignore
                            public getHeight(): number /*int*/
                            // @ts-ignore
                            public getHealthbarOffset(): number /*double*/
                            // @ts-ignore
                            public static getMythicEntity(mm: io.lumine.xikage.mythicmobs.mobs.MythicMob): io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity
                            // @ts-ignore
                            public static getMythicEntity(s: java.lang.String | string): io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity
                            // @ts-ignore
                            public static getMythicEntity(entityType: io.lumine.xikage.mythicmobs.mobs.entities.MythicEntityType): io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity
                        }
                    }
                }
            }
        }
    }
}
