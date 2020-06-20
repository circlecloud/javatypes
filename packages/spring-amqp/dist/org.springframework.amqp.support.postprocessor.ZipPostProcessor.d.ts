declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace postprocessor {
                    /**
                     * A post processor that uses a {@link ZipOutputStream} to compress the message body. Sets
                     * {@link org.springframework.amqp.core.MessageProperties#SPRING_AUTO_DECOMPRESS} to true
                     * by default.
                     * @author Gary Russell
                     * @since 1.4.2
                     */
                    // @ts-ignore
                    class ZipPostProcessor extends org.springframework.amqp.support.postprocessor.AbstractDeflaterPostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(autoDecompress: boolean)
                        // @ts-ignore
                        getCompressorStream(zipped: java.io.OutputStream): java.io.OutputStream
                        // @ts-ignore
                        getEncoding(): java.lang.String
                    }
                }
            }
        }
    }
}
