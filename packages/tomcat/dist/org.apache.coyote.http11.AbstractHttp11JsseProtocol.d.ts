declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                // @ts-ignore
                abstract class AbstractHttp11JsseProtocol<S> extends org.apache.coyote.http11.AbstractHttp11Protocol<S> {
                    // @ts-ignore
                    constructor(endpoint: org.apache.tomcat.util.net.AbstractJsseEndpoint<S, any>)
                    // @ts-ignore
                    getEndpoint(): org.apache.tomcat.util.net.AbstractJsseEndpoint<S, any>
                    // @ts-ignore
                    getSslImplementationShortName(): string
                    // @ts-ignore
                    public getSslImplementationName(): string
                    // @ts-ignore
                    public setSslImplementationName(s: java.lang.String | string): void
                    // @ts-ignore
                    public getSniParseLimit(): number /*int*/
                    // @ts-ignore
                    public setSniParseLimit(sniParseLimit: number /*int*/): void
                }
            }
        }
    }
}
