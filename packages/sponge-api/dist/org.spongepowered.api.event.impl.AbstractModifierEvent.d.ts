declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    /**
                     * An abstract base class for implementations of {@link DamageEntityEvent} and {@link HealEntityEvent}.
                     * @param <T> The modifier type to use
                     */
                    // @ts-ignore
                    abstract class AbstractModifierEvent<T extends org.spongepowered.api.event.cause.entity.ModifierFunction<M>, M> extends org.spongepowered.api.event.impl.AbstractEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        originalFinalAmount: number /*double*/
                        // @ts-ignore
                        originalModifiers: java.util.List<org.spongepowered.api.util.Tuple<M, java.lang.Double | number>> | Array<org.spongepowered.api.util.Tuple<M, java.lang.Double | number>>
                        // @ts-ignore
                        originalModifierMap: java.util.Map<M, java.lang.Double | number>
                        // @ts-ignore
                        readonly modifiers: java.util.LinkedHashMap<M, java.lang.Double | number>
                        // @ts-ignore
                        readonly modifierFunctions: java.util.List<T> | Array<T>
                        // @ts-ignore
                        init(originalValue: number /*double*/, originalFunctions: java.util.List<T> | Array<T>): object
                        // @ts-ignore
                        abstract convertTuple(obj: M, func: java.util.function$.DoubleUnaryOperator): T
                        // @ts-ignore
                        recalculateDamages(baseAmount: number /*double*/): void
                        // @ts-ignore
                        getFinalAmount(baseAmount: number /*double*/): number /*double*/
                        /**
                         * Gets the modifiers affecting this event.
                         * @return The list of modifiers
                         */
                        // @ts-ignore
                        public getModifiers(): Array<T>
                    }
                }
            }
        }
    }
}
