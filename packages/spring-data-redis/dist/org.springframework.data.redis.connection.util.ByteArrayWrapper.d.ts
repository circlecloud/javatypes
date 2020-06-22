declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace util {
                        /**
                         * Simple wrapper class used for wrapping arrays so they can be used as keys inside maps.
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        class ByteArrayWrapper extends java.lang.Object {
                            // @ts-ignore
                            constructor(array: number /*byte*/[])
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            /**
                             * Returns the array.
                             * @return Returns the array
                             */
                            // @ts-ignore
                            public getArray(): number /*byte*/[]
                        }
                    }
                }
            }
        }
    }
}
