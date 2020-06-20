declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Base class for MBeanInfoAssemblers that support configurable
                     * JMX notification behavior.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class AbstractConfigurableMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractReflectiveMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setNotificationInfos(notificationInfos: org.springframework.jmx.export.metadata.ManagedNotification[]): void
                        // @ts-ignore
                        setNotificationInfoMappings(notificationInfoMappings: java.util.Map<java.lang.String, java.lang.Object>): void
                        // @ts-ignore
                        getNotificationInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanNotificationInfo[]
                    }
                }
            }
        }
    }
}
