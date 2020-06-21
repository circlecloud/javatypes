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
                    abstract class AbstractConfigurableMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractReflectiveMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setNotificationInfos(notificationInfos: org.springframework.jmx.export.metadata.ManagedNotification[]): void
                        // @ts-ignore
                        public setNotificationInfoMappings(notificationInfoMappings: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        getNotificationInfo(managedBean: java.lang.Object | any, beanKey: java.lang.String | string): javax.management.modelmbean.ModelMBeanNotificationInfo[]
                    }
                }
            }
        }
    }
}
