declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace postprocessor {
                    /**
                     * A post processor that uses a {@link ZipInputStream} to decompress the
                     * message body.
                     * @author Gary Russell
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    class UnzipPostProcessor extends org.springframework.amqp.support.postprocessor.AbstractDecompressingPostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(alwaysDecompress: boolean)
                        // @ts-ignore
                        getDecompressorStream(zipped: java.io.InputStream): java.io.InputStream
                        // @ts-ignore
                        getEncoding(): java.lang.String
                    }
                }
            }
        }
    }
}
