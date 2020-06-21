declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Reader that supports a stream of {@link ServerSentEvent ServerSentEvents} and also plain
                 * {@link Object Objects} which is the same as an {@link ServerSentEvent} with data only.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ServerSentEventHttpMessageReader extends java.lang.Object implements org.springframework.http.codec.HttpMessageReader<java.lang.Object | any> {
                    /**
                     * Constructor without a {@code Decoder}. In this mode only {@code String}
                     * is supported as the data of an event.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructor with JSON {@code Decoder} for decoding to Objects.
                     * Support for decoding to {@code String} event data is built-in.
                     */
                    // @ts-ignore
                    constructor(decoder: object)
                    /**
                     * Return the configured {@code Decoder}.
                     */
                    // @ts-ignore
                    public getDecoder(): object
                    /**
                     * Configure a limit on the maximum number of bytes per SSE event which are
                     * buffered before the event is parsed.
                     * <p>Note that the {@link #getDecoder() data decoder}, if provided, must
                     * also be customized accordingly to raise the limit if necessary in order
                     * to be able to parse the data portion of the event.
                     * <p>By default this is set to 256K.
                     * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                     * @since 5.1.13
                     */
                    // @ts-ignore
                    public setMaxInMemorySize(byteCount: number /*int*/): void
                    /**
                     * Return the {@link #setMaxInMemorySize configured} byte count limit.
                     * @since 5.1.13
                     */
                    // @ts-ignore
                    public getMaxInMemorySize(): number /*int*/
                    // @ts-ignore
                    public getReadableMediaTypes(): Array<org.springframework.http.MediaType>
                    // @ts-ignore
                    public canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    public readMono(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                }
            }
        }
    }
}
