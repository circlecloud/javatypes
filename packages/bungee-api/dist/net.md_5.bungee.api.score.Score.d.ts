declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace score {
                    /**
                     * Represents a scoreboard score entry.
                     */
                    // @ts-ignore
                    class Score extends java.lang.Object {
                        // @ts-ignore
                        constructor(itemName: java.lang.String | string, scoreName: java.lang.String | string, value: number /*int*/)
                        /**
                         * Name to be displayed in the list.
                         */
                        // @ts-ignore
                        public getItemName(): string
                        /**
                         * Unique name of the score.
                         */
                        // @ts-ignore
                        public getScoreName(): string
                        /**
                         * Value of the score.
                         */
                        // @ts-ignore
                        public getValue(): number /*int*/
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
