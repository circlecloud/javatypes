declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace protobuf {
                    /**
                     * Subclass of {@link ProtobufHttpMessageConverter} which enforces the use of Protobuf 3 and
                     * its official library {@code "com.google.protobuf:protobuf-java-util"} for JSON processing.
                     * <p>Most importantly, this class allows for custom JSON parser and printer configurations
                     * through the {@link JsonFormat} utility. If no special parser or printer configuration is
                     * given, default variants will be used instead.
                     * <p>Requires Protobuf 3.x and {@code "com.google.protobuf:protobuf-java-util"} 3.x,
                     * with 3.3 or higher recommended.
                     * @author Juergen Hoeller
                     * @author Sebastien Deleuze
                     * @since 5.0
                     * @see JsonFormat#parser()
                     * @see JsonFormat#printer()
                     * @see #ProtobufJsonFormatHttpMessageConverter(com.google.protobuf.util.JsonFormat.Parser, com.google.protobuf.util.JsonFormat.Printer)
                     */
                    // @ts-ignore
                    class ProtobufJsonFormatHttpMessageConverter extends org.springframework.http.converter.protobuf.ProtobufHttpMessageConverter {
                        /**
                         * Constructor with default instances of
                         * {@link com.google.protobuf.util.JsonFormat.Parser JsonFormat.Parser},
                         * {@link com.google.protobuf.util.JsonFormat.Printer JsonFormat.Printer},
                         * and {@link ExtensionRegistry}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with given instances of
                         * {@link com.google.protobuf.util.JsonFormat.Parser JsonFormat.Parser},
                         * {@link com.google.protobuf.util.JsonFormat.Printer JsonFormat.Printer},
                         * and a default instance of {@link ExtensionRegistry}.
                         */
                        // @ts-ignore
                        constructor(parser: JsonFormat.Parser, printer: JsonFormat.Printer)
                        /**
                         * Constructor with given instances of
                         * {@link com.google.protobuf.util.JsonFormat.Parser JsonFormat.Parser},
                         * {@link com.google.protobuf.util.JsonFormat.Printer JsonFormat.Printer},
                         * and {@link ExtensionRegistry}.
                         */
                        // @ts-ignore
                        constructor(parser: JsonFormat.Parser, printer: JsonFormat.Printer, extensionRegistry: ExtensionRegistry)
                        /**
                         * Construct a new {@code ProtobufJsonFormatHttpMessageConverter} with the given
                         * {@code JsonFormat.Parser} and {@code JsonFormat.Printer} configuration, also
                         * accepting an initializer that allows the registration of message extensions.
                         * @param parser the JSON parser configuration
                         * @param printer the JSON printer configuration
                         * @param registryInitializer an initializer for message extensions
                         * @deprecated as of 5.1, in favor of
                         *  {#link #ProtobufJsonFormatHttpMessageConverter(com.google.protobuf.util.JsonFormat.Parser, com.google.protobuf.util.JsonFormat.Printer, ExtensionRegistry)}
                         */
                        // @ts-ignore
                        constructor(parser: JsonFormat.Parser, printer: JsonFormat.Printer, registryInitializer: org.springframework.http.converter.protobuf.ExtensionRegistryInitializer)
                    }
                }
            }
        }
    }
}
