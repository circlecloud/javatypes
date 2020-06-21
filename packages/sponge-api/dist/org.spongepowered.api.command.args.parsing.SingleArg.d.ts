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
                            constructor(value: java.lang.String | string, startIdx: number /*int*/, endIdx: number /*int*/)
                            /**
                             * Gets the string used.
                             * @return The string used
                             */
                            // @ts-ignore
                            public getValue(): string
                            /**
                             * Gets the starting index.
                             * @return The starting index
                             */
                            // @ts-ignore
                            public getStartIdx(): number /*int*/
                            /**
                             * Gets the ending index.
                             * @return The ending index
                             */
                            // @ts-ignore
                            public getEndIdx(): number /*int*/
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
