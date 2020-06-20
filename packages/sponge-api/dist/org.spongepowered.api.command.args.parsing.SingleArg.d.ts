declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace parsing {
                        /**
                         * This represents a single argument with its start and end indexes
                         * in the associated raw input string.
                         */
                        // @ts-ignore
                        class SingleArg extends java.lang.Object {
                            /**
                             * Create a new argument.
                             * @param value The argument string
                             * @param startIdx The starting index of {#code value} in an input string
                             * @param endIdx The ending index of {#code value} in an input string
                             */
                            // @ts-ignore
                            constructor(value: string, startIdx: number /*int*/, endIdx: number /*int*/)
                            /**
                             * Gets the string used.
                             * @return The string used
                             */
                            // @ts-ignore
                            getValue(): java.lang.String
                            /**
                             * Gets the starting index.
                             * @return The starting index
                             */
                            // @ts-ignore
                            getStartIdx(): int
                            /**
                             * Gets the ending index.
                             * @return The ending index
                             */
                            // @ts-ignore
                            getEndIdx(): int
                            // @ts-ignore
                            equals(o: any): boolean
                            // @ts-ignore
                            hashCode(): int
                            // @ts-ignore
                            toString(): java.lang.String
                        }
                    }
                }
            }
        }
    }
}
