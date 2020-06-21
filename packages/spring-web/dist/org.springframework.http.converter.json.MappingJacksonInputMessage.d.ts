declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * {@link HttpInputMessage} that can eventually stores a Jackson view that will be used
                     * to deserialize the message.
                     * @author Sebastien Deleuze
                     * @since 4.2
                     */
                    // @ts-ignore
                    class MappingJacksonInputMessage extends java.lang.Object implements org.springframework.http.HttpInputMessage {
                        // @ts-ignore
                        constructor(body: java.io.InputStream, headers: org.springframework.http.HttpHeaders)
                        // @ts-ignore
                        constructor(body: java.io.InputStream, headers: org.springframework.http.HttpHeaders, deserializationView: java.lang.Class<any>)
                        // @ts-ignore
                        public getBody(): java.io.InputStream
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public setDeserializationView(deserializationView: java.lang.Class<any>): void
                        // @ts-ignore
                        public getDeserializationView(): java.lang.Class<any>
                    }
                }
            }
        }
    }
}
