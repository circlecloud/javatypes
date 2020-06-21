declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * This class extracts the SNI host name and ALPN protocols from a TLS
                     * client-hello message.
                     */
                    // @ts-ignore
                    class TLSClientHelloExtractor extends java.lang.Object {
                        /**
                         * Creates the instance of the parser and processes the provided buffer. The
                         * buffer position and limit will be modified during the execution of this
                         * method but they will be returned to the original values before the method
                         * exits.
                         * @param netInBuffer The buffer containing the TLS data to process
                         * @throws IOException If the client hello message is malformed
                         */
                        // @ts-ignore
                        constructor(netInBuffer: java.nio.ByteBuffer)
                        // @ts-ignore
                        public static USE_TLS_RESPONSE: number /*byte*/[]
                        // @ts-ignore
                        public getResult(): org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                        // @ts-ignore
                        public getSNIValue(): string
                        // @ts-ignore
                        public getClientRequestedCiphers(): Array<org.apache.tomcat.util.net.openssl.ciphers.Cipher>
                        // @ts-ignore
                        public getClientRequestedApplicationProtocols(): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
