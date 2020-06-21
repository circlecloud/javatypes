declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                namespace HostConfig {
                    /**
                     * This class represents the state of a deployed application, as well as
                     * the monitored resources.
                     */
                    // @ts-ignore
                    class DeployedApplication extends java.lang.Object {
                        // @ts-ignore
                        constructor(name: java.lang.String | string, hasDescriptor: boolean)
                        /**
                         * Application context path. The assertion is that
                         * (host.getChild(name) != null).
                         */
                        // @ts-ignore
                        public readonly name: java.lang.String | string
                        /**
                         * Does this application have a context.xml descriptor file on the
                         * host's configBase?
                         */
                        // @ts-ignore
                        public readonly hasDescriptor: boolean
                        /**
                         * Any modification of the specified (static) resources will cause a
                         * redeployment of the application. If any of the specified resources is
                         * removed, the application will be undeployed. Typically, this will
                         * contain resources like the context.xml file, a compressed WAR path.
                         * The value is the last modification time.
                         */
                        // @ts-ignore
                        public readonly redeployResources: java.util.LinkedHashMap<java.lang.String | string, java.lang.Long | number>
                        /**
                         * Any modification of the specified (static) resources will cause a
                         * reload of the application. This will typically contain resources
                         * such as the web.xml of a webapp, but can be configured to contain
                         * additional descriptors.
                         * The value is the last modification time.
                         */
                        // @ts-ignore
                        public readonly reloadResources: java.util.HashMap<java.lang.String | string, java.lang.Long | number>
                        /**
                         * Instant where the application was last put in service.
                         */
                        // @ts-ignore
                        public timestamp: number /*long*/
                        /**
                         * In some circumstances, such as when unpackWARs is true, a directory
                         * may be added to the appBase that is ignored. This flag indicates that
                         * the user has been warned so that the warning is not logged on every
                         * run of the auto deployer.
                         */
                        // @ts-ignore
                        public loggedDirWarning: boolean
                    }
                }
            }
        }
    }
}
