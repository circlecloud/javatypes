declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        namespace ciphers {
                            /**
                             * Class in charge with parsing openSSL expressions to define a list of ciphers.
                             */
                            // @ts-ignore
                            class OpenSSLCipherConfigurationParser extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static parse(expression: java.lang.String | string): java.util.LinkedHashSet<org.apache.tomcat.util.net.openssl.ciphers.Cipher>
                                // @ts-ignore
                                public static convertForJSSE(ciphers: java.util.Collection<org.apache.tomcat.util.net.openssl.ciphers.Cipher> | Array<org.apache.tomcat.util.net.openssl.ciphers.Cipher>): Array<java.lang.String | string>
                                /**
                                 * Parse the specified expression according to the OpenSSL syntax and
                                 * returns a list of standard JSSE cipher names.
                                 * @param expression the openssl expression to define a list of cipher.
                                 * @return the corresponding list of ciphers.
                                 */
                                // @ts-ignore
                                public static parseExpression(expression: java.lang.String | string): Array<java.lang.String | string>
                                /**
                                 * Converts a JSSE cipher name to an OpenSSL cipher name.
                                 * @param jsseCipherName The JSSE name for a cipher
                                 * @return The OpenSSL name for the specified JSSE cipher
                                 */
                                // @ts-ignore
                                public static jsseToOpenSSL(jsseCipherName: java.lang.String | string): string
                                /**
                                 * Converts an OpenSSL cipher name to a JSSE cipher name.
                                 * @param opensslCipherName The OpenSSL name for a cipher
                                 * @return The JSSE name for the specified OpenSSL cipher. If none is known,
                                 *          the IANA standard name will be returned instead
                                 */
                                // @ts-ignore
                                public static openSSLToJsse(opensslCipherName: java.lang.String | string): string
                                // @ts-ignore
                                public static usage(): void
                                // @ts-ignore
                                public static main(args: java.lang.String[] | string[]): void
                            }
                        }
                    }
                }
            }
        }
    }
}
