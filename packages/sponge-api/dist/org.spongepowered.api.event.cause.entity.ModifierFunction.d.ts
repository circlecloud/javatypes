declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        /**
                         * A function associating either a {@link HealthModifier} or a
                         * {@link DamageModifier} with a {@link DoubleUnaryOperator} of the resultant
                         * effect.
                         * @param <M> The modifier type
                         */
                        // @ts-ignore
                        interface ModifierFunction<M> {
                            /**
                             * Gets the modifier used by this modifier function.
                             * @return The modifier
                             */
                            // @ts-ignore
                            getModifier(): M
                            /**
                             * Gets the double unary operator used by this function.
                             * @return The unary operator
                             */
                            // @ts-ignore
                            getFunction(): java.util.function$.DoubleUnaryOperator
                        }
                    }
                }
            }
        }
    }
}
