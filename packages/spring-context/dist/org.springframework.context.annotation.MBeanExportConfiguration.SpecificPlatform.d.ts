declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                namespace MBeanExportConfiguration {
                    /**
                     * Specific platforms that might need custom MBean handling.
                     */
                    // @ts-ignore
                    class SpecificPlatform extends java.lang.Enum<org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform> {
                        // @ts-ignore
                        values(): org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform[]
                        // @ts-ignore
                        valueOf(name: string): org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform
                        // @ts-ignore
                        getMBeanServer(): javax.management.MBeanServer
                        // @ts-ignore
                        get(): org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform
                    }
                }
            }
        }
    }
}
