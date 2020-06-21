declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace VariableAmount {
                        /**
                         * Represents a base amount with a random addition, the final amount will be
                         * the base amount plus a random amount between zero (inclusive) and the
                         * addition (exclusive).
                         */
                        // @ts-ignore
                        class BaseAndAddition extends java.lang.Object implements org.spongepowered.api.util.weighted.VariableAmount {
                            // @ts-ignore
                            public getAmount(rand: java.util.Random): number /*double*/
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toContainer(): org.spongepowered.api.data.DataContainer
                            // @ts-ignore
                            public getContentVersion(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
