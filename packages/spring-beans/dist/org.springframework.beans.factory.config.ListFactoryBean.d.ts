declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple factory for shared List instances. Allows for central setup
                     * of Lists via the "list" element in XML bean definitions.
                     * @author Juergen Hoeller
                     * @since 09.12.2003
                     * @see SetFactoryBean
                     * @see MapFactoryBean
                     */
                    // @ts-ignore
                    class ListFactoryBean extends org.springframework.beans.factory.config.AbstractFactoryBean<java.util.List<java.lang.Object | any> | Array<java.lang.Object | any>> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the source List, typically populated via XML "list" elements.
                         */
                        // @ts-ignore
                        public setSourceList(sourceList: java.util.List<any> | Array<any>): void
                        /**
                         * Set the class to use for the target List. Can be populated with a fully
                         * qualified class name when defined in a Spring application context.
                         * <p>Default is a {@code java.util.ArrayList}.
                         * @see java.util.ArrayList
                         */
                        // @ts-ignore
                        public setTargetListClass(targetListClass: java.lang.Class<any>): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<java.util.List<any> | Array<any>>
                        // @ts-ignore
                        createInstance(): Array<java.lang.Object | any>
                    }
                }
            }
        }
    }
}
