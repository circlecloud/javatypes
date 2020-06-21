declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractDamageEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent<org.spongepowered.api.event.cause.entity.damage.DamageFunction, org.spongepowered.api.event.cause.entity.damage.DamageModifier> implements org.spongepowered.api.event.entity.DamageEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        originalDamage: number /*double*/
                        // @ts-ignore
                        originalFunctions: java.util.List<org.spongepowered.api.event.cause.entity.damage.DamageFunction> | Array<org.spongepowered.api.event.cause.entity.damage.DamageFunction>
                        // @ts-ignore
                        baseDamage: number /*double*/
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        public getOriginalModifierDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number /*double*/
                        // @ts-ignore
                        public getOriginalFinalDamage(): number /*double*/
                        // @ts-ignore
                        public getOriginalDamages(): java.util.Map<org.spongepowered.api.event.cause.entity.damage.DamageModifier, java.lang.Double | number>
                        // @ts-ignore
                        public getFinalDamage(): number /*double*/
                        // @ts-ignore
                        public isModifierApplicable(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): boolean
                        // @ts-ignore
                        public getDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number /*double*/
                        // @ts-ignore
                        public setDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): void
                        // @ts-ignore
                        public addDamageModifierBefore(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, before: java.util.Set<org.spongepowered.api.event.cause.entity.damage.DamageModifierType> | Array<org.spongepowered.api.event.cause.entity.damage.DamageModifierType>): void
                        // @ts-ignore
                        public addModifierAfter(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, after: java.util.Set<org.spongepowered.api.event.cause.entity.damage.DamageModifierType> | Array<org.spongepowered.api.event.cause.entity.damage.DamageModifierType>): void
                        // @ts-ignore
                        convertTuple(obj: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.damage.DamageFunction
                        // @ts-ignore
                        public getModifiers(): Array<org.spongepowered.api.event.cause.entity.damage.DamageFunction>
                        // @ts-ignore
                        public getBaseDamage(): number /*double*/
                        // @ts-ignore
                        public setBaseDamage(baseDamage: number /*double*/): void
                        // @ts-ignore
                        public willCauseDeath(): boolean
                    }
                }
            }
        }
    }
}
