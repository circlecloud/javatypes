declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Thrown by the {@code JmxAttributeSource} when it encounters
                     * incorrect metadata on a managed resource or one of its methods.
                     * @author Rob Harrop
                     * @since 1.2
                     * @see JmxAttributeSource
                     * @see org.springframework.jmx.export.assembler.MetadataMBeanInfoAssembler
                     */
                    // @ts-ignore
                    class InvalidMetadataException extends org.springframework.jmx.JmxException {
                        /**
                         * Create a new {@code InvalidMetadataException} with the supplied
                         * error message.
                         * @param msg the detail message
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                    }
                }
            }
        }
    }
}
