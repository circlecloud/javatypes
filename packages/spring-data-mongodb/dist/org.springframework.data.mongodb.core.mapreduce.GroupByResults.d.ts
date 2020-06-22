declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapreduce {
                        /**
                         * Collects the results of executing a group operation.
                         * @author Mark Pollack
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T> The class in which the results are mapped onto, accessible via an {#link Iterator}.
                         */
                        // @ts-ignore
                        class GroupByResults<T> extends java.lang.Object implements java.lang.Iterable<T> {
                            // @ts-ignore
                            constructor(mappedResults: java.util.List<T> | Array<T>, rawResults: Document)
                            // @ts-ignore
                            public getCount(): number /*double*/
                            // @ts-ignore
                            public getKeys(): number /*int*/
                            // @ts-ignore
                            public getServerUsed(): string
                            // @ts-ignore
                            public iterator(): java.util.Iterator<T>
                            // @ts-ignore
                            public getRawResults(): Document
                        }
                    }
                }
            }
        }
    }
}
