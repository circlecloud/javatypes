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
                            getSourceType(): java.lang.Class<?>
                            // @ts-ignore
                            getTargetType(): java.lang.Class<?>
                            // @ts-ignore
                            equals(other: any): boolean
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
