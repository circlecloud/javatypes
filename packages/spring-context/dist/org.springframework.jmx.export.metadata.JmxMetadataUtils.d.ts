declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Utility methods for converting Spring JMX metadata into their plain JMX equivalents.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class JmxMetadataUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Convert the supplied {@link ManagedNotification} into the corresponding
                         * {@link javax.management.modelmbean.ModelMBeanNotificationInfo}.
                         */
                        // @ts-ignore
                        public static convertToModelMBeanNotificationInfo(notificationInfo: org.springframework.jmx.export.metadata.ManagedNotification): javax.management.modelmbean.ModelMBeanNotificationInfo
                    }
                }
            }
        }
    }
}
