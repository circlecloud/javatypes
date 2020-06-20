declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace xml {
                    /**
                     * Decodes a {@link DataBuffer} stream into a stream of {@link XMLEvent XMLEvents}.
                     * <p>Given the following XML:
                     * <pre class="code">
                     * &lt;root>
                     * &lt;child&gt;foo&lt;/child&gt;
                     * &lt;child&gt;bar&lt;/child&gt;
                     * &lt;/root&gt;
                     * </pre>
                     * this decoder will produce a {@link Flux} with the following events:
                     * <ol>
                     * <li>{@link javax.xml.stream.events.StartDocument}</li>
                     * <li>{@link javax.xml.stream.events.StartElement} {@code root}</li>
                     * <li>{@link javax.xml.stream.events.StartElement} {@code child}</li>
                     * <li>{@link javax.xml.stream.events.Characters} {@code foo}</li>
                     * <li>{@link javax.xml.stream.events.EndElement} {@code child}</li>
                     * <li>{@link javax.xml.stream.events.StartElement} {@code child}</li>
                     * <li>{@link javax.xml.stream.events.Characters} {@code bar}</li>
                     * <li>{@link javax.xml.stream.events.EndElement} {@code child}</li>
                     * <li>{@link javax.xml.stream.events.EndElement} {@code root}</li>
                     * </ol>
                     * <p>Note that this decoder is not registered by default but is used internally
                     * by other decoders which are registered by default.
                     * @author Arjen Poutsma
                     * @author Sam Brannen
                     * @since 5.0
                     */
                    // @ts-ignore
                    class XmlEventDecoder extends <any> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the max number of bytes that can be buffered by this decoder. This
                         * is either the size the entire input when decoding as a whole, or when
                         * using async parsing via Aalto XML, it is size one top-level XML tree.
                         * When the limit is exceeded, {@link DataBufferLimitException} is raised.
                         * <p>By default this is set to 256K.
                         * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setMaxInMemorySize(byteCount: number /*int*/): void
                        /**
                         * Return the {@link #setMaxInMemorySize configured} byte count limit.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxInMemorySize(): int
                        // @ts-ignore
                        decode(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    }
                }
            }
        }
    }
}
