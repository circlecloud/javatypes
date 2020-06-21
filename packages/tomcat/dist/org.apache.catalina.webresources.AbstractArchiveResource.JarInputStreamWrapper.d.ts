declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                namespace AbstractArchiveResource {
                    /**
                     * This wrapper assumes that the InputStream was created from a JarFile
                     * obtained from a call to getArchiveResourceSet().openJarFile(). If this is
                     * not the case then the usage counting in AbstractArchiveResourceSet will
                     * break and the JarFile may be unexpectedly closed.
                     */
                    // @ts-ignore
                    class JarInputStreamWrapper extends java.io.InputStream {
                        // @ts-ignore
                        constructor(jarEntry: java.util.jar.JarEntry, jis: java.io.InputStream)
                        // @ts-ignore
                        public read(): number /*int*/
                        // @ts-ignore
                        public read(b: number /*byte*/[]): number /*int*/
                        // @ts-ignore
                        public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        public skip(n: number /*long*/): number /*long*/
                        // @ts-ignore
                        public available(): number /*int*/
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public mark(readlimit: number /*int*/): void
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public markSupported(): boolean
                        // @ts-ignore
                        public getCertificates(): java.security.cert.Certificate[]
                    }
                }
            }
        }
    }
}
