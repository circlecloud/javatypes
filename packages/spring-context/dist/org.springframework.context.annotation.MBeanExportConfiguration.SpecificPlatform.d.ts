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
                        /**
                         * Weblogic.
                         */
                        // @ts-ignore
                        public static readonly WEBLOGIC: org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform
                        /**
                         * Websphere.
                         */
                        // @ts-ignore
                        public static readonly WEBSPHERE: org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform
                        // @ts-ignore
                        public static values(): org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform
                        // @ts-ignore
                        public getMBeanServer(): javax.management.MBeanServer
                        // @ts-ignore
                        public static get(): org.springframework.context.annotation.MBeanExportConfiguration.SpecificPlatform
                    }
                }
            }
        }
    }
}
