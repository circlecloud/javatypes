declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace VariableAmount {
                        /**
                         * Represents a fixed amount, calls to {@link #getAmount} will always return
                         * the same fixed value.
                         */
                        // @ts-ignore
                        class Fixed extends java.lang.Object implements org.spongepowered.api.util.weighted.VariableAmount {
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
