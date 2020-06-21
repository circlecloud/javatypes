declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Interface to be implemented by all classes that can
                     * create management interface metadata for a managed resource.
                     * <p>Used by the {@code MBeanExporter} to generate the management
                     * interface for any bean that is not an MBean.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    interface MBeanInfoAssembler {
                        /**
                         * Create the ModelMBeanInfo for the given managed resource.
                         * @param managedBean the bean that will be exposed (might be an AOP proxy)
                         * @param beanKey the key associated with the managed bean
                         * @return the ModelMBeanInfo metadata object
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        getMBeanInfo(managedBean: java.lang.Object | any, beanKey: java.lang.String | string): javax.management.modelmbean.ModelMBeanInfo
                    }
                }
            }
        }
    }
}
