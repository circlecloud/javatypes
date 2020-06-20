declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Subclass of {@code AbstractReflectiveMBeanInfoAssembler} that allows for
                     * the management interface of a bean to be defined using arbitrary interfaces.
                     * Any methods or properties that are defined in those interfaces are exposed
                     * as MBean operations and attributes.
                     * <p>By default, this class votes on the inclusion of each operation or attribute
                     * based on the interfaces implemented by the bean class. However, you can supply an
                     * array of interfaces via the {@code managedInterfaces} property that will be
                     * used instead. If you have multiple beans and you wish each bean to use a different
                     * set of interfaces, then you can map bean keys (that is the name used to pass the
                     * bean to the {@code MBeanExporter}) to a list of interface names using the
                     * {@code interfaceMappings} property.
                     * <p>If you specify values for both {@code interfaceMappings} and
                     * {@code managedInterfaces}, Spring will attempt to find interfaces in the
                     * mappings first. If no interfaces for the bean are found, it will use the
                     * interfaces defined by {@code managedInterfaces}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see #setManagedInterfaces
                     * @see #setInterfaceMappings
                     * @see MethodNameBasedMBeanInfoAssembler
                     * @see SimpleReflectiveMBeanInfoAssembler
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    class InterfaceBasedMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractConfigurableMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the array of interfaces to use for creating the management info.
                         * These interfaces will be used for a bean if no entry corresponding to
                         * that bean is found in the {@code interfaceMappings} property.
                         * @param managedInterfaces an array of classes indicating the interfaces to use.
                         *  Each entry <strong>MUST</strong> be an interface.
                         * @see #setInterfaceMappings
                         */
                        // @ts-ignore
                        setManagedInterfaces(...managedInterfaces: java.lang.Class[]): void
                        /**
                         * Set the mappings of bean keys to a comma-separated list of interface names.
                         * <p>The property key should match the bean key and the property value should match
                         * the list of interface names. When searching for interfaces for a bean, Spring
                         * will check these mappings first.
                         * @param mappings the mappings of bean keys to interface names
                         */
                        // @ts-ignore
                        setInterfaceMappings(mappings: java.util.Properties): void
                        // @ts-ignore
                        setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Check to see if the {@code Method} is declared in
                         * one of the configured interfaces and that it is public.
                         * @param method the accessor {#code Method}.
                         * @param beanKey the key associated with the MBean in the
                         *  {#code beans} {@code Map}.
                         * @return {#code true} if the {@code Method} is declared in one of the
                         *  configured interfaces, otherwise {@code false}.
                         */
                        // @ts-ignore
                        includeReadAttribute(method: java.lang.reflect.Method, beanKey: string): boolean
                        /**
                         * Check to see if the {@code Method} is declared in
                         * one of the configured interfaces and that it is public.
                         * @param method the mutator {#code Method}.
                         * @param beanKey the key associated with the MBean in the
                         *  {#code beans} {@code Map}.
                         * @return {#code true} if the {@code Method} is declared in one of the
                         *  configured interfaces, otherwise {@code false}.
                         */
                        // @ts-ignore
                        includeWriteAttribute(method: java.lang.reflect.Method, beanKey: string): boolean
                        /**
                         * Check to see if the {@code Method} is declared in
                         * one of the configured interfaces and that it is public.
                         * @param method the operation {#code Method}.
                         * @param beanKey the key associated with the MBean in the
                         *  {#code beans} {@code Map}.
                         * @return {#code true} if the {@code Method} is declared in one of the
                         *  configured interfaces, otherwise {@code false}.
                         */
                        // @ts-ignore
                        includeOperation(method: java.lang.reflect.Method, beanKey: string): boolean
                    }
                }
            }
        }
    }
}
