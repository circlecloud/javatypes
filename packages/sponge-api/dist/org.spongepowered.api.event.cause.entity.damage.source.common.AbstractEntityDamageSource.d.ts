declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace common {
                                    // @ts-ignore
                                    abstract class AbstractEntityDamageSource extends java.lang.Object implements org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource {
                                        // @ts-ignore
                                        constructor(builder: org.spongepowered.api.event.cause.entity.damage.source.common.AbstractEntityDamageSource.AbstractEntityDamageSourceBuilder<any, any>)
                                        // @ts-ignore
                                        public getSource(): org.spongepowered.api.entity.Entity
                                        // @ts-ignore
                                        public getType(): org.spongepowered.api.event.cause.entity.damage.DamageType
                                        // @ts-ignore
                                        public isAbsolute(): boolean
                                        // @ts-ignore
                                        public isBypassingArmor(): boolean
                                        // @ts-ignore
                                        public isScaledByDifficulty(): boolean
                                        // @ts-ignore
                                        public isExplosive(): boolean
                                        // @ts-ignore
                                        public isMagic(): boolean
                                        // @ts-ignore
                                        public doesAffectCreative(): boolean
                                        // @ts-ignore
                                        public getExhaustion(): number /*double*/
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
