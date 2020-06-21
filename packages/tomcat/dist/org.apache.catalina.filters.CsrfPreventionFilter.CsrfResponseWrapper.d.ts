declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace CsrfPreventionFilter {
                    // @ts-ignore
                    class CsrfResponseWrapper extends javax.servlet.http.HttpServletResponseWrapper {
                        // @ts-ignore
                        constructor(response: javax.servlet.http.HttpServletResponse, nonce: java.lang.String | string)
                        // @ts-ignore
                        public encodeRedirectUrl(url: java.lang.String | string): string
                        // @ts-ignore
                        public encodeRedirectURL(url: java.lang.String | string): string
                        // @ts-ignore
                        public encodeUrl(url: java.lang.String | string): string
                        // @ts-ignore
                        public encodeURL(url: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
