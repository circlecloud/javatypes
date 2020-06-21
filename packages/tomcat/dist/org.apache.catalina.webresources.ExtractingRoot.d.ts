declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * If the main resources are packaged as a WAR file then any JARs will be
                 * extracted to the work directory and used from there.
                 */
                // @ts-ignore
                class ExtractingRoot extends org.apache.catalina.webresources.StandardRoot {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    processWebInfLib(): void
                    // @ts-ignore
                    isPackedWarFile(): boolean
                    // @ts-ignore
                    stopInternal(): void
                }
            }
        }
    }
}
