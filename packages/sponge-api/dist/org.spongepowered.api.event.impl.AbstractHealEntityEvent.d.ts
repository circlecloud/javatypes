declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractHealEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent<org.spongepowered.api.event.cause.entity.health.HealthFunction, org.spongepowered.api.event.cause.entity.health.HealthModifier> implements org.spongepowered.api.event.entity.HealEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        originalHealAmount: number /*double*/
                        // @ts-ignore
                        originalFunctions: java.util.List<org.spongepowered.api.event.cause.entity.health.HealthFunction> | Array<org.spongepowered.api.event.cause.entity.health.HealthFunction>
                        // @ts-ignore
                        baseHealAmount: number /*double*/
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        public getOriginalHealingModifierAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number /*double*/
                        // @ts-ignore
                        public getOriginalFinalHealAmount(): number /*double*/
                        // @ts-ignore
                        public getOriginalHealingAmounts(): java.util.Map<org.spongepowered.api.event.cause.entity.health.HealthModifier, java.lang.Double | number>
                        // @ts-ignore
                        public getFinalHealAmount(): number /*double*/
                        // @ts-ignore
                        public isModifierApplicable(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): boolean
                        // @ts-ignore
                        public getHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number /*double*/
                        // @ts-ignore
                        public setHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator): void
                        // @ts-ignore
                        public getBaseHealAmount(): number /*double*/
                        // @ts-ignore
                        public setBaseHealAmount(baseHealAmount: number /*double*/): void
                        // @ts-ignore
                        convertTuple(obj: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.health.HealthFunction
                    }
                }
            }
        }
    }
}
