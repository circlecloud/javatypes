declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * {@code HttpMessageReader} that wraps and delegates to a {@link ResourceDecoder}
                 * that extracts the filename from the {@code "Content-Disposition"} header, if
                 * available, and passes it as the {@link ResourceDecoder#FILENAME_HINT}.
                 * @author Rossen Stoyanchev
                 * @since 5.2
                 */
                // @ts-ignore
                class ResourceHttpMessageReader extends org.springframework.http.codec.DecoderHttpMessageReader<Resource> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(resourceDecoder: ResourceDecoder)
                    // @ts-ignore
                    getReadHints(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
