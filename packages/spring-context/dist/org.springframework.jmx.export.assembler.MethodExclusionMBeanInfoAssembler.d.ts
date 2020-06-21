declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * {@code AbstractReflectiveMBeanInfoAssembler} subclass that allows
                     * method names to be explicitly excluded as MBean operations and attributes.
                     * <p>Any method not explicitly excluded from the management interface will be exposed to
                     * JMX. JavaBean getters and setters will automatically be exposed as JMX attributes.
                     * <p>You can supply an array of method names via the {@code ignoredMethods}
                     * property. If you have multiple beans and you wish each bean to use a different
                     * set of method names, then you can map bean keys (that is the name used to pass
                     * the bean to the {@code MBeanExporter}) to a list of method names using the
                     * {@code ignoredMethodMappings} property.
                     * <p>If you specify values for both {@code ignoredMethodMappings} and
                     * {@code ignoredMethods}, Spring will attempt to find method names in the
                     * mappings first. If no method names for the bean are found, it will use the
                     * method names defined by {@code ignoredMethods}.
                     * @author Rob Harrop
                     * @author Seth Ladd
                     * @since 1.2.5
                     * @see #setIgnoredMethods
                     * @see #setIgnoredMethodMappings
                     * @see InterfaceBasedMBeanInfoAssembler
                     * @see SimpleReflectiveMBeanInfoAssembler
                     * @see MethodNameBasedMBeanInfoAssembler
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    class MethodExclusionMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractConfigurableMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the array of method names to be <b>ignored</b> when creating the management info.
                         * <p>These method names will be used for a bean if no entry corresponding to
                         * that bean is found in the {@code ignoredMethodsMappings} property.
                         * @see #setIgnoredMethodMappings(java.util.Properties)
                         */
                        // @ts-ignore
                        public setIgnoredMethods(...ignoredMethodNames: java.lang.String[] | string[]): void
                        /**
                         * Set the mappings of bean keys to a comma-separated list of method names.
                         * <p>These method names are <b>ignored</b> when creating the management interface.
                         * <p>The property key must match the bean key and the property value must match
                         * the list of method names. When searching for method names to ignore for a bean,
                         * Spring will check these mappings first.
                         */
                        // @ts-ignore
                        public setIgnoredMethodMappings(mappings: java.util.Properties): void
                        // @ts-ignore
                        includeReadAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        // @ts-ignore
                        includeWriteAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        // @ts-ignore
                        includeOperation(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        /**
                         * Determine whether the given method is supposed to be included,
                         * that is, not configured as to be ignored.
                         * @param method the operation method
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         */
                        // @ts-ignore
                        isNotIgnored(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
