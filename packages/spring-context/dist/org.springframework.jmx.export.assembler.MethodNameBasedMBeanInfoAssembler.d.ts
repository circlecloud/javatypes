declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Subclass of {@code AbstractReflectiveMBeanInfoAssembler} that allows
                     * to specify method names to be exposed as MBean operations and attributes.
                     * JavaBean getters and setters will automatically be exposed as JMX attributes.
                     * <p>You can supply an array of method names via the {@code managedMethods}
                     * property. If you have multiple beans and you wish each bean to use a different
                     * set of method names, then you can map bean keys (that is the name used to pass
                     * the bean to the {@code MBeanExporter}) to a list of method names using the
                     * {@code methodMappings} property.
                     * <p>If you specify values for both {@code methodMappings} and
                     * {@code managedMethods}, Spring will attempt to find method names in the
                     * mappings first. If no method names for the bean are found, it will use the
                     * method names defined by {@code managedMethods}.
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see #setManagedMethods
                     * @see #setMethodMappings
                     * @see InterfaceBasedMBeanInfoAssembler
                     * @see SimpleReflectiveMBeanInfoAssembler
                     * @see MethodExclusionMBeanInfoAssembler
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    class MethodNameBasedMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractConfigurableMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the array of method names to use for creating the management info.
                         * These method names will be used for a bean if no entry corresponding to
                         * that bean is found in the {@code methodMappings} property.
                         * @param methodNames an array of method names indicating the methods to use
                         * @see #setMethodMappings
                         */
                        // @ts-ignore
                        public setManagedMethods(...methodNames: java.lang.String[] | string[]): void
                        /**
                         * Set the mappings of bean keys to a comma-separated list of method names.
                         * The property key should match the bean key and the property value should match
                         * the list of method names. When searching for method names for a bean, Spring
                         * will check these mappings first.
                         * @param mappings the mappings of bean keys to method names
                         */
                        // @ts-ignore
                        public setMethodMappings(mappings: java.util.Properties): void
                        // @ts-ignore
                        includeReadAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        // @ts-ignore
                        includeWriteAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        // @ts-ignore
                        includeOperation(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        // @ts-ignore
                        isMatch(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
