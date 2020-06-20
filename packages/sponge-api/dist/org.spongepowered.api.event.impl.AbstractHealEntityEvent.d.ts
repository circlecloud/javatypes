declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    class AbstractHealEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent<org.spongepowered.api.event.cause.entity.health.HealthFunction, org.spongepowered.api.event.cause.entity.health.HealthModifier> implements org.spongepowered.api.event.entity.HealEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        originalHealAmount: number /*double*/
                        // @ts-ignore
                        originalFunctions: Array<org.spongepowered.api.event.cause.entity.health.HealthFunction>
                        // @ts-ignore
                        baseHealAmount: number /*double*/
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        getOriginalHealingModifierAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): double
                        // @ts-ignore
                        getOriginalFinalHealAmount(): double
                        // @ts-ignore
                        getOriginalHealingAmounts(): java.util.Map<org.spongepowered.api.event.cause.entity.health.HealthModifier, java.lang.Double>
                        // @ts-ignore
                        getFinalHealAmount(): double
                        // @ts-ignore
                        isModifierApplicable(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): boolean
                        // @ts-ignore
                        getHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): double
                        // @ts-ignore
                        setHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator): void
                        // @ts-ignore
                        getBaseHealAmount(): double
                        // @ts-ignore
                        setBaseHealAmount(baseHealAmount: number /*double*/): void
                        // @ts-ignore
                        convertTuple(obj: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.health.HealthFunction
                    }
                }
            }
        }
    }
}
