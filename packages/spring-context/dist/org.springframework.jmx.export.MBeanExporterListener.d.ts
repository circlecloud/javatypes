declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                /**
                 * A listener that allows application code to be notified when an MBean is
                 * registered and unregistered via an {@link MBeanExporter}.
                 * @author Rob Harrop
                 * @since 1.2.2
                 * @see org.springframework.jmx.export.MBeanExporter#setListeners
                 */
                // @ts-ignore
                interface MBeanExporterListener {
                    /**
                     * Called by {@link MBeanExporter} after an MBean has been <i>successfully</i>
                     * registered with an {@link javax.management.MBeanServer}.
                     * @param objectName the {#code ObjectName} of the registered MBean
                     */
                    // @ts-ignore
                    mbeanRegistered(objectName: javax.management.ObjectName): void
                    /**
                     * Called by {@link MBeanExporter} after an MBean has been <i>successfully</i>
                     * unregistered from an {@link javax.management.MBeanServer}.
                     * @param objectName the {#code ObjectName} of the unregistered MBean
                     */
                    // @ts-ignore
                    mbeanUnregistered(objectName: javax.management.ObjectName): void
                }
            }
        }
    }
}
