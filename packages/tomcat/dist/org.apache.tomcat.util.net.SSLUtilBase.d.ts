declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Common base class for {@link SSLUtil} implementations.
                     */
                    // @ts-ignore
                    abstract class SSLUtilBase extends java.lang.Object implements org.apache.tomcat.util.net.SSLUtil {
                        // @ts-ignore
                        constructor(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate)
                        // @ts-ignore
                        constructor(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate, warnTls13: boolean)
                        // @ts-ignore
                        readonly certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate
                        // @ts-ignore
                        public getEnabledProtocols(): string[]
                        // @ts-ignore
                        public getEnabledCiphers(): string[]
                        // @ts-ignore
                        abstract getImplementedProtocols(): Array<java.lang.String | string>
                        // @ts-ignore
                        abstract getImplementedCiphers(): Array<java.lang.String | string>
                        // @ts-ignore
                        abstract getLog(): org.apache.juli.logging.Log
                        // @ts-ignore
                        abstract isTls13Available(): boolean
                        // @ts-ignore
                        abstract isTls13RenegAuthAvailable(): boolean
                    }
                }
            }
        }
    }
}
