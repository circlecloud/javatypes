declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitAPIHelper extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getMythicMob(type: java.lang.String | string): io.lumine.xikage.mythicmobs.mobs.MythicMob
                            // @ts-ignore
                            public spawnMythicMob(type: io.lumine.xikage.mythicmobs.mobs.MythicMob, location: Location, level: number /*int*/): Entity
                            // @ts-ignore
                            public spawnMythicMob(type: java.lang.String | string, location: Location): Entity
                            // @ts-ignore
                            public spawnMythicMob(type: java.lang.String | string, location: Location, level: number /*int*/): Entity
                            // @ts-ignore
                            public isMythicMob(l: Entity): boolean
                            // @ts-ignore
                            public getMythicMobInstance(e: Entity): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                            // @ts-ignore
                            public castSkill(e: Entity, skillName: java.lang.String | string): boolean
                            // @ts-ignore
                            public castSkill(e: Entity, skillName: java.lang.String | string, power: number /*float*/): boolean
                            // @ts-ignore
                            public castSkill(e: Entity, skillName: java.lang.String | string, origin: Location): boolean
                            // @ts-ignore
                            public castSkill(e: Entity, skillName: java.lang.String | string, origin: Location, power: number /*float*/): boolean
                            // @ts-ignore
                            public castSkill(e: Entity, skillName: java.lang.String | string, origin: Location, eTargets: java.util.Collection<Entity> | Array<Entity>, lTargets: java.util.Collection<Location> | Array<Location>, power: number /*float*/): boolean
                            // @ts-ignore
                            public castSkill(e: Entity, skillName: java.lang.String | string, trigger: Entity, origin: Location, eTargets: java.util.Collection<Entity> | Array<Entity>, lTargets: java.util.Collection<Location> | Array<Location>, power: number /*float*/): boolean
                            // @ts-ignore
                            public addThreat(mob: Entity, target: LivingEntity, amount: number /*double*/): boolean
                            // @ts-ignore
                            public reduceThreat(mob: Entity, target: LivingEntity, amount: number /*double*/): boolean
                            // @ts-ignore
                            public taunt(mob: Entity, target: LivingEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
