declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * SPI interface to implement components that can transfrom an {@link ExpressionTransformationContextSupport} into an
                         * object.
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        interface ExpressionTransformer<T extends org.springframework.data.mongodb.core.spel.ExpressionTransformationContextSupport<?>> {
                            /**
                             * Transforms the given {@link ExpressionTransformationContextSupport} into an Object.
                             * @param context will never be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            transform(context: T): any
                        }
                    }
                }
            }
        }
    }
}
