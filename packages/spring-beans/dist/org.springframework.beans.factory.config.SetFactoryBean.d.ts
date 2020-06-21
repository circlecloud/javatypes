declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple factory for shared Set instances. Allows for central setup
                     * of Sets via the "set" element in XML bean definitions.
                     * @author Juergen Hoeller
                     * @since 09.12.2003
                     * @see ListFactoryBean
                     * @see MapFactoryBean
                     */
                    // @ts-ignore
                    class SetFactoryBean extends org.springframework.beans.factory.config.AbstractFactoryBean<java.util.Set<java.lang.Object | any> | Array<java.lang.Object | any>> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the source Set, typically populated via XML "set" elements.
                         */
                        // @ts-ignore
                        public setSourceSet(sourceSet: java.util.Set<any> | Array<any>): void
                        /**
                         * Set the class to use for the target Set. Can be populated with a fully
                         * qualified class name when defined in a Spring application context.
                         * <p>Default is a linked HashSet, keeping the registration order.
                         * @see java.util.LinkedHashSet
                         */
                        // @ts-ignore
                        public setTargetSetClass(targetSetClass: java.lang.Class<any>): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<java.util.Set<any> | Array<any>>
                        // @ts-ignore
                        createInstance(): Array<java.lang.Object | any>
                    }
                }
            }
        }
    }
}
