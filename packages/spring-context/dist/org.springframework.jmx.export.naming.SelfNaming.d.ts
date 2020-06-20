declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace naming {
                    /**
                     * Interface that allows infrastructure components to provide their own
                     * {@code ObjectName}s to the {@code MBeanExporter}.
                     * <p><b>Note:</b> This interface is mainly intended for internal usage.
                     * @author Rob Harrop
                     * @since 1.2.2
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    interface SelfNaming {
                        /**
                         * Return the {@code ObjectName} for the implementing object.
                         * @throws MalformedObjectNameException if thrown by the ObjectName constructor
                         * @see javax.management.ObjectName#ObjectName(String)
                         * @see javax.management.ObjectName#getInstance(String)
                         * @see org.springframework.jmx.support.ObjectNameManager#getInstance(String)
                         */
                        // @ts-ignore
                        getObjectName(): javax.management.ObjectName
                    }
                }
            }
        }
    }
}
