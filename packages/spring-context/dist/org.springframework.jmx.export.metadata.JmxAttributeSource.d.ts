declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Interface used by the {@code MetadataMBeanInfoAssembler} to
                     * read source-level metadata from a managed resource's class.
                     * @author Rob Harrop
                     * @author Jennifer Hickey
                     * @since 1.2
                     * @see org.springframework.jmx.export.assembler.MetadataMBeanInfoAssembler#setAttributeSource
                     * @see org.springframework.jmx.export.MBeanExporter#setAssembler
                     */
                    // @ts-ignore
                    interface JmxAttributeSource {
                        /**
                         * Implementations should return an instance of {@code ManagedResource}
                         * if the supplied {@code Class} has the appropriate metadata.
                         * Otherwise should return {@code null}.
                         * @param clazz the class to read the attribute data from
                         * @return the attribute, or {#code null} if not found
                         * @throws InvalidMetadataException in case of invalid attributes
                         */
                        // @ts-ignore
                        getManagedResource(clazz: java.lang.Class<any>): org.springframework.jmx.export.metadata.ManagedResource
                        /**
                         * Implementations should return an instance of {@code ManagedAttribute}
                         * if the supplied {@code Method} has the corresponding metadata.
                         * Otherwise should return {@code null}.
                         * @param method the method to read the attribute data from
                         * @return the attribute, or {#code null} if not found
                         * @throws InvalidMetadataException in case of invalid attributes
                         */
                        // @ts-ignore
                        getManagedAttribute(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedAttribute
                        /**
                         * Implementations should return an instance of {@code ManagedMetric}
                         * if the supplied {@code Method} has the corresponding metadata.
                         * Otherwise should return {@code null}.
                         * @param method the method to read the attribute data from
                         * @return the metric, or {#code null} if not found
                         * @throws InvalidMetadataException in case of invalid attributes
                         */
                        // @ts-ignore
                        getManagedMetric(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedMetric
                        /**
                         * Implementations should return an instance of {@code ManagedOperation}
                         * if the supplied {@code Method} has the corresponding metadata.
                         * Otherwise should return {@code null}.
                         * @param method the method to read the attribute data from
                         * @return the attribute, or {#code null} if not found
                         * @throws InvalidMetadataException in case of invalid attributes
                         */
                        // @ts-ignore
                        getManagedOperation(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedOperation
                        /**
                         * Implementations should return an array of {@code ManagedOperationParameter}
                         * if the supplied {@code Method} has the corresponding metadata. Otherwise
                         * should return an empty array if no metadata is found.
                         * @param method the {#code Method} to read the metadata from
                         * @return the parameter information.
                         * @throws InvalidMetadataException in the case of invalid attributes.
                         */
                        // @ts-ignore
                        getManagedOperationParameters(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedOperationParameter[]
                        /**
                         * Implementations should return an array of {@link ManagedNotification ManagedNotifications}
                         * if the supplied the {@code Class} has the corresponding metadata. Otherwise
                         * should return an empty array.
                         * @param clazz the {#code Class} to read the metadata from
                         * @return the notification information
                         * @throws InvalidMetadataException in the case of invalid metadata
                         */
                        // @ts-ignore
                        getManagedNotifications(clazz: java.lang.Class<any>): org.springframework.jmx.export.metadata.ManagedNotification[]
                    }
                }
            }
        }
    }
}
