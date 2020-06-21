declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * Represents a value which may vary depending on a seed object.
                     * @param <T> The seed object type
                     */
                    // @ts-ignore
                    interface SeededVariableAmount<T> {
                        /**
                         * Creates a new 'fixed' variable amount, calls to {@link #getAmount} will
                         * always return the fixed value.
                         * @param value The fixed value
                         * @param <T> The seed object type
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        fixed<T>(value: number /*double*/): org.spongepowered.api.util.weighted.SeededVariableAmount<T>
                        /**
                         * Creates a new variable amount wrapping the given {@link VariableAmount},
                         * calls to {@link #getAmount} will always return wrapped amounts value.
                         * @param value The wrapped variable amount
                         * @param <T> The seed object type
                         * @return A variable amount representation
                         */
                        // @ts-ignore
                        wrapped<T>(value: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.util.weighted.SeededVariableAmount<T>
                        /**
                         * Gets an instance of the variable amount depending on the given random
                         * object and the seed object.
                         * @param rand The random object
                         * @param seed The seed object
                         * @return The amount
                         */
                        // @ts-ignore
                        getAmount(rand: java.util.Random, seed: T): number /*double*/
                        /**
                         * Gets the amount as if from {@link #getAmount(Random, Object)} but floored
                         * to the nearest integer equivalent.
                         * @param rand The random object
                         * @param seed The seed object
                         * @return The floored amount
                         */
                        // @ts-ignore
                        getFlooredAmount(rand: java.util.Random, seed: T): number /*int*/
                    }
                }
            }
        }
    }
}
