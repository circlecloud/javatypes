declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace protobuf {
                    /**
                     * An {@code HttpMessageConverter} that reads and writes
                     * {@link com.google.protobuf.Message com.google.protobuf.Messages} using
                     * <a href="https://developers.google.com/protocol-buffers/">Google Protocol Buffers</a>.
                     * <p>To generate {@code Message} Java classes, you need to install the {@code protoc} binary.
                     * <p>This converter supports by default {@code "application/x-protobuf"} and {@code "text/plain"}
                     * with the official {@code "com.google.protobuf:protobuf-java"} library. Other formats can be
                     * supported with one of the following additional libraries on the classpath:
                     * <ul>
                     * <li>{@code "application/json"}, {@code "application/xml"}, and {@code "text/html"} (write-only)
                     * with the {@code "com.googlecode.protobuf-java-format:protobuf-java-format"} third-party library
                     * <li>{@code "application/json"} with the official {@code "com.google.protobuf:protobuf-java-util"}
                     * for Protobuf 3 (see {@link ProtobufJsonFormatHttpMessageConverter} for a configurable variant)
                     * </ul>
                     * <p>Requires Protobuf 2.6 or higher (and Protobuf Java Format 1.4 or higher for formatting).
                     * This converter will auto-adapt to Protobuf 3 and its default {@code protobuf-java-util} JSON
                     * format if the Protobuf 2 based {@code protobuf-java-format} isn't present; however, for more
                     * explicit JSON setup on Protobuf 3, consider {@link ProtobufJsonFormatHttpMessageConverter}.
                     * @author Alex Antonov
                     * @author Brian Clozel
                     * @author Juergen Hoeller
                     * @author Sebastien Deleuze
                     * @since 4.1
                     * @see FormatFactory
                     * @see JsonFormat
                     * @see ProtobufJsonFormatHttpMessageConverter
                     */
                    // @ts-ignore
                    class ProtobufHttpMessageConverter extends org.springframework.http.converter.AbstractHttpMessageConverter<Message> {
                        /**
                         * Construct a new {@code ProtobufHttpMessageConverter}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code ProtobufHttpMessageConverter} with an
                         * initializer that allows the registration of message extensions.
                         * @param registryInitializer an initializer for message extensions
                         * @deprecated as of Spring Framework 5.1, use {#link #ProtobufHttpMessageConverter(ExtensionRegistry)} instead
                         */
                        // @ts-ignore
                        constructor(registryInitializer: org.springframework.http.converter.protobuf.ExtensionRegistryInitializer)
                        /**
                         * Construct a new {@code ProtobufHttpMessageConverter} with a registry that specifies
                         * protocol message extensions.
                         * @param extensionRegistry the registry to populate
                         */
                        // @ts-ignore
                        constructor(extensionRegistry: ExtensionRegistry)
                        /**
                         * The default charset used by the converter.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        /**
                         * The media-type for protobuf {@code application/x-protobuf}.
                         */
                        // @ts-ignore
                        public static readonly PROTOBUF: org.springframework.http.MediaType
                        /**
                         * The HTTP header containing the protobuf schema.
                         */
                        // @ts-ignore
                        public static readonly X_PROTOBUF_SCHEMA_HEADER: java.lang.String | string
                        /**
                         * The HTTP header containing the protobuf message.
                         */
                        // @ts-ignore
                        public static readonly X_PROTOBUF_MESSAGE_HEADER: java.lang.String | string
                        // @ts-ignore
                        supports(clazz: java.lang.Class<any>): boolean
                        // @ts-ignore
                        getDefaultContentType(message: Message): org.springframework.http.MediaType
                        // @ts-ignore
                        readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): Message
                        // @ts-ignore
                        canWrite(mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        writeInternal(message: Message, outputMessage: org.springframework.http.HttpOutputMessage): void
                    }
                }
            }
        }
    }
}
