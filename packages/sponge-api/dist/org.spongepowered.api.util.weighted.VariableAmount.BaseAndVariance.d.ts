declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace VariableAmount {
                        /**
                         * Represents a base amount with a variance, the final amount will be the
                         * base amount plus or minus a random amount between zero (inclusive) and
                         * the variance (exclusive).
                         */
                        // @ts-ignore
                        class BaseAndVariance extends java.lang.Object implements org.spongepowered.api.util.weighted.VariableAmount {
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
