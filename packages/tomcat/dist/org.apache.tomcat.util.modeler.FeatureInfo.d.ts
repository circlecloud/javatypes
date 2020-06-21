declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Convenience base class for <code>AttributeInfo</code> and
                     * <code>OperationInfo</code> classes that will be used to collect configuration
                     * information for the <code>ModelMBean</code> beans exposed for management.</p>
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class FeatureInfo extends java.lang.Object implements java.io.Serializable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        description: java.lang.String | string
                        // @ts-ignore
                        name: java.lang.String | string
                        // @ts-ignore
                        info: javax.management.MBeanFeatureInfo
                        // @ts-ignore
                        type: java.lang.String | string
                        /**
                         * @return the human-readable description of this feature.
                         */
                        // @ts-ignore
                        public getDescription(): string
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        /**
                         * @return the name of this feature, which must be unique among features
                         *   in the same collection.
                         */
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * @return the fully qualified Java class name of this element.
                         */
                        // @ts-ignore
                        public getType(): string
                        // @ts-ignore
                        public setType(type: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
