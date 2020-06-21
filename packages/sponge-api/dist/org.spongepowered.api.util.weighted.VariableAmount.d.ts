declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * Represents a value which may vary randomly.
                     * <p>Implementors of this interface using it in a fashion in which may ever be
                     * serialized <strong>must</strong> implement the {@link #toContainer()}
                     * method.</p>
                     */
                    // @ts-ignore
                    interface VariableAmount extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new 'fixed' variable amount, calls to {@link #getAmount} will
                         * always return the fixed value.
                         * @param value The fixed value
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        fixed(value: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable amount which return values between the given min
                         * (inclusive) and max (exclusive).
                         * @param min The minimum of the range (inclusive)
                         * @param max The maximum of the range (exclusive)
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        range(min: number /*double*/, max: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable about which has a base and variance. The final
                         * amount will be the base amount plus or minus a random amount between zero
                         * (inclusive) and the variance (exclusive).
                         * @param base The base value
                         * @param variance The variance
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithVariance(base: number /*double*/, variance: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable about which has a base and variance. The final
                         * amount will be the base amount plus or minus a random amount between zero
                         * (inclusive) and the variance (exclusive).
                         * @param base The base value
                         * @param variance The variance
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithVariance(base: number /*double*/, variance: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable amount which has a base and an additional amount.
                         * The final amount will be the base amount plus a random amount between
                         * zero (inclusive) and the additional amount (exclusive).
                         * @param base The base value
                         * @param addition The additional amount
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithRandomAddition(base: number /*double*/, addition: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable amount which has a base and an additional amount.
                         * The final amount will be the base amount plus a random amount between
                         * zero (inclusive) and the additional amount (exclusive).
                         * @param base The base value
                         * @param addition The additional amount
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithRandomAddition(base: number /*double*/, addition: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random variance. The chance should be between zero and one with a chance
                         * of one signifying that the variance will always be applied. If the chance
                         * succeeds then the final amount will be the base amount plus or minus a
                         * random amount between zero (inclusive) and the variance (exclusive). If
                         * the chance fails then the final amount will just be the base value.
                         * @param base The base value
                         * @param variance The variance
                         * @param chance The chance to apply the variance
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithOptionalVariance(base: number /*double*/, variance: number /*double*/, chance: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random variance. The chance should be between zero and one with a chance
                         * of one signifying that the variance will always be applied. If the chance
                         * succeeds then the final amount will be the base amount plus or minus a
                         * random amount between zero (inclusive) and the variance (exclusive). If
                         * the chance fails then the final amount will just be the base value.
                         * @param base The base value
                         * @param variance The variance
                         * @param chance The chance to apply the variance
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithOptionalVariance(base: number /*double*/, variance: org.spongepowered.api.util.weighted.VariableAmount, chance: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random additional amount. The chance should be between zero and one with
                         * a chance of one signifying that the additional amount will always be
                         * applied. If the chance succeeds then the final amount will be the base
                         * amount plus a random amount between zero (inclusive) and the additional
                         * amount (exclusive). If the chance fails then the final amount will just
                         * be the base value.
                         * @param base The base value
                         * @param addition The additional amount
                         * @param chance The chance to apply the additional amount
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithOptionalAddition(base: number /*double*/, addition: number /*double*/, chance: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random additional amount. The chance should be between zero and one with
                         * a chance of one signifying that the additional amount will always be
                         * applied. If the chance succeeds then the final amount will be the base
                         * amount plus a random amount between zero (inclusive) and the additional
                         * amount (exclusive). If the chance fails then the final amount will just
                         * be the base value.
                         * @param base The base value
                         * @param addition The additional amount
                         * @param chance The chance to apply the additional amount
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        baseWithOptionalAddition(base: number /*double*/, addition: org.spongepowered.api.util.weighted.VariableAmount, chance: number /*double*/): org.spongepowered.api.util.weighted.VariableAmount
                        /**
                         * Gets an instance of the variable amount depending on the given random
                         * object.
                         * @param rand The random object
                         * @return The amount
                         */
                        // @ts-ignore
                        getAmount(rand: java.util.Random): number /*double*/
                        /**
                         * Gets the amount as if from {@link #getAmount(Random)} but floored to the
                         * nearest integer equivalent.
                         * @param rand The random object
                         * @return The floored amount
                         */
                        // @ts-ignore
                        getFlooredAmount(rand: java.util.Random): number /*int*/
                        // @ts-ignore
                        toContainer(): org.spongepowered.api.data.DataContainer
                        // @ts-ignore
                        getContentVersion(): number /*int*/
                    }
                }
            }
        }
    }
}
