declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Extension of {@link CodecConfigurer} for HTTP message reader and writer
                 * options relevant on the server side.
                 * <p>HTTP message readers for the following are registered by default:
                 * <ul>{@code byte[]}
                 * <li>{@link java.nio.ByteBuffer}
                 * <li>{@link org.springframework.core.io.buffer.DataBuffer DataBuffer}
                 * <li>{@link org.springframework.core.io.Resource Resource}
                 * <li>{@link String}
                 * <li>{@link org.springframework.util.MultiValueMap
                 * MultiValueMap&lt;String,String&gt;} for form data
                 * <li>{@link org.springframework.util.MultiValueMap
                 * MultiValueMap&lt;String,Object&gt;} for multipart data
                 * <li>JSON and Smile, if Jackson is present
                 * <li>XML, if JAXB2 is present
                 * </ul>
                 * <p>HTTP message writers registered by default:
                 * <ul>{@code byte[]}
                 * <li>{@link java.nio.ByteBuffer}
                 * <li>{@link org.springframework.core.io.buffer.DataBuffer DataBuffer}
                 * <li>{@link org.springframework.core.io.Resource Resource}
                 * <li>{@link String}
                 * <li>{@link org.springframework.util.MultiValueMap
                 * MultiValueMap&lt;String,String&gt;} for form data
                 * <li>JSON and Smile, if Jackson is present
                 * <li>XML, if JAXB2 is present
                 * <li>Server-Sent Events
                 * </ul>
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface ServerCodecConfigurer extends org.springframework.http.codec.CodecConfigurer {
                    /**
                     * {@inheritDoc}
                     * <p>On the server side, built-in default also include customizations
                     * related to the encoder for SSE.
                     */
                    // @ts-ignore
                    defaultCodecs(): org.springframework.http.codec.ServerCodecConfigurer.ServerDefaultCodecs
                    /**
                     * {@inheritDoc}.
                     */
                    // @ts-ignore
                    clone(): org.springframework.http.codec.ServerCodecConfigurer
                    /**
                     * Static factory method for a {@code ServerCodecConfigurer}.
                     */
                    // @ts-ignore
                    create(): org.springframework.http.codec.ServerCodecConfigurer
                }
            }
        }
    }
}
