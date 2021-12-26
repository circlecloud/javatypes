declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace compatibility {
                    // @ts-ignore
                    class EffectLibSupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static effectlib: EffectLib
                        // @ts-ignore
                        public doAtomEffect(t: Entity, pN: ParticleEffect, psN: number /*int*/, pO: ParticleEffect, psO: number /*int*/, nO: number /*int*/, r: number /*int*/, rN: number /*float*/, velocity: number /*double*/, rotation: number /*int*/, period: number /*int*/, iterations: number /*int*/): void
                        // @ts-ignore
                        public doAtomEffect(t: Location, pN: ParticleEffect, psN: number /*int*/, pO: ParticleEffect, psO: number /*int*/, nO: number /*int*/, r: number /*int*/, rN: number /*float*/, velocity: number /*double*/, rotation: number /*int*/, period: number /*int*/, iterations: number /*int*/): void
                        // @ts-ignore
                        public doBleedEffect(l: LivingEntity, iterations: number /*int*/, period: number /*int*/): void
                        // @ts-ignore
                        public doDNAEffect(l: Location, t: Location, pH: ParticleEffect, psH: number /*int*/, pB1: ParticleEffect, pB2: ParticleEffect, psB: number /*int*/, radials: number /*double*/, r: number /*float*/, length: number /*float*/, growth: number /*float*/, baseInterval: number /*float*/, interval: number /*int*/, ticks: number /*int*/): void
                        // @ts-ignore
                        public doVortexLocationEffect(l: Location, p: java.lang.String | string, h: number /*int*/, hC: number /*int*/, radials: number /*double*/, r: number /*float*/, growth: number /*float*/, interval: number /*int*/, ticks: number /*int*/): void
                        // @ts-ignore
                        public getParticleEffect(s: java.lang.String | string): ParticleEffect
                    }
                }
            }
        }
    }
}
