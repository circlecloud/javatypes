declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace protobuf {
                    /**
                     * Base class providing support methods for Protobuf encoding and decoding.
                     * @author Sebastien Deleuze
                     * @since 5.1
                     */
                    // @ts-ignore
                    abstract class ProtobufCodecSupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        supportsMimeType(mimeType: MimeType): boolean
                        // @ts-ignore
                        getMimeTypes(): Array<MimeType>
                    }
                }
            }
        }
    }
}
