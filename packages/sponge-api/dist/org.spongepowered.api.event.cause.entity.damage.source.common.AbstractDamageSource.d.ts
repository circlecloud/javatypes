declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace common {
                                    /**
                                     * An abstract implementation of {@link DamageSource} to allow plugins to create
                                     * their own damage sources without having to implement all the required
                                     * methods.
                                     * <p>Note that extending this class at the least is a requirement for custom
                                     * damage sources as not doing so will simply not work.</p>
                                     */
                                    // @ts-ignore
                                    class AbstractDamageSource extends java.lang.Object implements org.spongepowered.api.event.cause.entity.damage.source.DamageSource {
                                        // @ts-ignore
                                        constructor(builder: org.spongepowered.api.event.cause.entity.damage.source.common.AbstractDamageSourceBuilder<any, ?>)
                                        // @ts-ignore
                                        getType(): org.spongepowered.api.event.cause.entity.damage.DamageType
                                        // @ts-ignore
                                        isAbsolute(): boolean
                                        // @ts-ignore
                                        isBypassingArmor(): boolean
                                        // @ts-ignore
                                        isScaledByDifficulty(): boolean
                                        // @ts-ignore
                                        isExplosive(): boolean
                                        // @ts-ignore
                                        isMagic(): boolean
                                        // @ts-ignore
                                        doesAffectCreative(): boolean
                                        // @ts-ignore
                                        getExhaustion(): double
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
