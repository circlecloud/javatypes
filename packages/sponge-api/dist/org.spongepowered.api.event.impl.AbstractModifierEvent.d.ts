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
                    class AbstractModifierEvent<T extends org.spongepowered.api.event.cause.entity.ModifierFunction<M>, M> extends org.spongepowered.api.event.impl.AbstractEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        originalFinalAmount: number /*double*/
                        // @ts-ignore
                        originalModifiers: Array<org.spongepowered.api.util.Tuple<M, java.lang.Double>>
                        // @ts-ignore
                        originalModifierMap: java.util.Map<M, java.lang.Double>
                        // @ts-ignore
                        readonly modifiers: java.util.LinkedHashMap<M, java.lang.Double>
                        // @ts-ignore
                        readonly modifierFunctions: Array<T>
                        // @ts-ignore
                        init(originalValue: number /*double*/, originalFunctions: Array<T>): <any>
                        // @ts-ignore
                        abstract convertTuple(obj: M, func: java.util.function.DoubleUnaryOperator | java.util.function$.DoubleUnaryOperator): T
                        // @ts-ignore
                        recalculateDamages(baseAmount: number /*double*/): void
                        // @ts-ignore
                        getFinalAmount(baseAmount: number /*double*/): double
                        /**
                         * Gets the modifiers affecting this event.
                         * @return The list of modifiers
                         */
                        // @ts-ignore
                        getModifiers(): java.util.List<T>
                    }
                }
            }
        }
    }
}
