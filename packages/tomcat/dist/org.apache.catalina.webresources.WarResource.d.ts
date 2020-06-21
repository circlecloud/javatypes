declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Represents a single resource (file or directory) that is located within a
                 * WAR.
                 */
                // @ts-ignore
                class WarResource extends org.apache.catalina.webresources.AbstractSingleArchiveResource {
                    // @ts-ignore
                    constructor(archiveResourceSet: org.apache.catalina.webresources.AbstractArchiveResourceSet, webAppPath: java.lang.String | string, baseUrl: java.lang.String | string, jarEntry: java.util.jar.JarEntry)
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
