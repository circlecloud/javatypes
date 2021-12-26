declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitSkillAdapter extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.AbstractSkillAdapter {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public doDamage(meta: io.lumine.xikage.mythicmobs.skills.damage.DamageMetadata, aTarget: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                            // @ts-ignore
                            public strikeLightning(source: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public strikeLightningEffect(source: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public shootFireball(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, velocity: number /*float*/, yield: number /*float*/, incendiary: boolean, fireTicks: number /*int*/, small: boolean, playsound: boolean): void
                            // @ts-ignore
                            public shootProjectile(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, projectileClass: java.lang.Class<any>, velocity: number /*float*/, pd: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileData, fromOrigin: boolean): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public shootArcProjectile(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, projectileClass: java.lang.Class<any>, velocity: number /*float*/, pd: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileData, fromOrigin: boolean): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public rainProjectile(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, source: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, projectileClass: java.lang.Class<any>, velocity: number /*float*/, pd: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileData): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public throwSkill(source: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, velocity: number /*float*/, velocityY: number /*float*/): void
                            // @ts-ignore
                            public itemSprayEffect(source: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, item: ItemStack, amount: number /*int*/, duration: number /*int*/, force: number /*double*/, yForce: number /*double*/, radius: number /*double*/, yOffset: number /*double*/, allowPickup: boolean): void
                            // @ts-ignore
                            public playSmokeEffect(source: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, direction: number /*int*/): void
                            // @ts-ignore
                            public pushButton(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public toggleLever(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, duration: number /*int*/): void
                            // @ts-ignore
                            public executeVolley(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, t: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, amount: number /*int*/, velocity: number /*float*/, spread: number /*float*/, fireTicks: number /*int*/, removeDelay: number /*int*/): void
                            // @ts-ignore
                            public sendToastNotification(caster: io.lumine.xikage.mythicmobs.skills.SkillCaster, message: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
