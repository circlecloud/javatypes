declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                namespace converter {
                    namespace GenericConverter {
                        /**
                         * Holder for a source-to-target class pair.
                         */
                        // @ts-ignore
                        class ConvertiblePair extends java.lang.Object {
                            /**
                             * Create a new source-to-target pair.
                             * @param sourceType the source type
                             * @param targetType the target type
                             */
                            // @ts-ignore
                            constructor(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>)
                            // @ts-ignore
                            public getSourceType(): java.lang.Class<any>
                            // @ts-ignore
                            public getTargetType(): java.lang.Class<any>
                            // @ts-ignore
                            public equals(other: java.lang.Object | any): boolean
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
