declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace VariableAmount {
                        /**
                         * Represents a variable amount which has a base and a chance of varying.
                         * This wraps another {@link VariableAmount} which it refers to if the
                         * chance succeeds.
                         */
                        // @ts-ignore
                        class OptionalAmount extends java.lang.Object implements org.spongepowered.api.util.weighted.VariableAmount {
                            // @ts-ignore
                            getAmount(rand: java.util.Random): double
                            // @ts-ignore
                            toString(): java.lang.String
                            // @ts-ignore
                            equals(obj: any): boolean
                            // @ts-ignore
                            hashCode(): int
                            // @ts-ignore
                            toContainer(): org.spongepowered.api.data.DataContainer
                            // @ts-ignore
                            getContentVersion(): int
                        }
                    }
                }
            }
        }
    }
}
