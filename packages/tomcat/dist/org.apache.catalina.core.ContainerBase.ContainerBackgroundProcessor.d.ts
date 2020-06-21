declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                namespace ContainerBase {
                    /**
                     * Private runnable class to invoke the backgroundProcess method
                     * of this container and its children after a fixed delay.
                     */
                    // @ts-ignore
                    class ContainerBackgroundProcessor extends java.lang.Object implements java.lang.Runnable {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public run(): void
                        // @ts-ignore
                        processChildren(container: org.apache.catalina.Container): void
                    }
                }
            }
        }
    }
}
