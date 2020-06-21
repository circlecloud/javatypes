declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace SeededVariableAmount {
                        /**
                         * A {@link SeededVariableAmount} which wraps another {@link VariableAmount}
                         * and defers all operations to the inner VariableAmount without the seed.
                         * @param <T> The seed type
                         */
                        // @ts-ignore
                        class WrappedVariableAmount<T> extends java.lang.Object implements org.spongepowered.api.util.weighted.SeededVariableAmount<T> {
                            /**
                             * Creates a new WrappedVariableAmount wrapping the given
                             * {@link VariableAmount}.
                             * @param inner The inner variable amount
                             */
                            // @ts-ignore
                            constructor(inner: org.spongepowered.api.util.weighted.VariableAmount)
                            // @ts-ignore
                            public getAmount(rand: java.util.Random, seed: T): number /*double*/
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
