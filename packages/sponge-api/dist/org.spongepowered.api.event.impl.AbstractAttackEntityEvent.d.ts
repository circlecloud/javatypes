declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    class AbstractAttackEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent<org.spongepowered.api.event.cause.entity.damage.DamageFunction, org.spongepowered.api.event.cause.entity.damage.DamageModifier> implements org.spongepowered.api.event.entity.AttackEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        originalDamage: number /*double*/
                        // @ts-ignore
                        originalFunctions: Array<org.spongepowered.api.event.cause.entity.damage.DamageFunction>
                        // @ts-ignore
                        baseDamage: number /*double*/
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        getOriginalModifierDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): double
                        // @ts-ignore
                        getOriginalFinalDamage(): double
                        // @ts-ignore
                        getOriginalDamages(): java.util.Map<org.spongepowered.api.event.cause.entity.damage.DamageModifier, java.lang.Double>
                        // @ts-ignore
                        getFinalOutputDamage(): double
                        // @ts-ignore
                        isModifierApplicable(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): boolean
                        // @ts-ignore
                        getOutputDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): double
                        // @ts-ignore
                        setOutputDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator): void
                        // @ts-ignore
                        addDamageModifierBefore(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator, before: Array<org.spongepowered.api.event.cause.entity.damage.DamageModifierType>): void
                        // @ts-ignore
                        addDamageModifierAfter(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator, after: Array<org.spongepowered.api.event.cause.entity.damage.DamageModifierType>): void
                        // @ts-ignore
                        getBaseOutputDamage(): double
                        // @ts-ignore
                        setBaseOutputDamage(baseDamage: number /*double*/): void
                        // @ts-ignore
                        convertTuple(obj: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.damage.DamageFunction
                        // @ts-ignore
                        getModifiers(): java.util.List<org.spongepowered.api.event.cause.entity.damage.DamageFunction>
                    }
                }
            }
        }
    }
}
