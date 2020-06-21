declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace score {
                    /**
                     * Represents an objective entry.
                     */
                    // @ts-ignore
                    class Objective extends java.lang.Object {
                        // @ts-ignore
                        constructor(name: java.lang.String | string, value: java.lang.String | string, type: java.lang.String | string)
                        /**
                         * Name of the objective.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Value of the objective.
                         */
                        // @ts-ignore
                        public getValue(): string
                        /**
                         * Type; integer or hearts
                         */
                        // @ts-ignore
                        public getType(): string
                        /**
                         * Value of the objective.
                         */
                        // @ts-ignore
                        public setValue(value: java.lang.String | string): void
                        /**
                         * Type; integer or hearts
                         */
                        // @ts-ignore
                        public setType(type: java.lang.String | string): void
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
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
