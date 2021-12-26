declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface AbstractSkillAdapter {
                        // @ts-ignore
                        strikeLightning(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        doDamage(p0: io.lumine.xikage.mythicmobs.skills.damage.DamageMetadata, p1: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        throwSkill(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, p2: number /*float*/, p3: number /*float*/): void
                        // @ts-ignore
                        itemSprayEffect(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: ItemStack, p2: number /*int*/, p3: number /*int*/, p4: number /*double*/, p5: number /*double*/, p6: number /*double*/, p7: number /*double*/, p8: boolean): void
                        // @ts-ignore
                        strikeLightningEffect(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        playSmokeEffect(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*int*/): void
                        // @ts-ignore
                        shootFireball(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p2: number /*float*/, p3: number /*float*/, p4: boolean, p5: number /*int*/, p6: boolean, p7: boolean): void
                        // @ts-ignore
                        pushButton(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        toggleLever(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p2: number /*int*/): void
                        // @ts-ignore
                        shootProjectile(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p2: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p3: java.lang.Class<any>, p4: number /*float*/, p5: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileData, p6: boolean): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        shootArcProjectile(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p2: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p3: java.lang.Class<any>, p4: number /*float*/, p5: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileData, p6: boolean): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        executeVolley(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p2: number /*int*/, p3: number /*float*/, p4: number /*float*/, p5: number /*int*/, p6: number /*int*/): void
                        // @ts-ignore
                        rainProjectile(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p2: java.lang.Class<any>, p3: number /*float*/, p4: io.lumine.xikage.mythicmobs.skills.mechanics.ShootMechanic.ProjectileData): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                    }
                }
            }
        }
    }
}
