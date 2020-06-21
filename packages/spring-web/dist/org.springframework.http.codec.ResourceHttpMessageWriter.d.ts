declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * {@code HttpMessageWriter} that can write a {@link Resource}.
                 * <p>Also an implementation of {@code HttpMessageWriter} with support for writing one
                 * or more {@link ResourceRegion}'s based on the HTTP ranges specified in the request.
                 * <p>For reading to a Resource, use {@link ResourceDecoder} wrapped with
                 * {@link DecoderHttpMessageReader}.
                 * @author Arjen Poutsma
                 * @author Brian Clozel
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see ResourceEncoder
                 * @see ResourceRegionEncoder
                 * @see HttpRange
                 */
                // @ts-ignore
                class ResourceHttpMessageWriter extends java.lang.Object implements org.springframework.http.codec.HttpMessageWriter<Resource> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(bufferSize: number /*int*/)
                    // @ts-ignore
                    public canWrite(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public getWritableMediaTypes(): Array<org.springframework.http.MediaType>
                    // @ts-ignore
                    public write(inputStream: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, message: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    // @ts-ignore
                    public write(inputStream: object, actualType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                }
            }
        }
    }
}
