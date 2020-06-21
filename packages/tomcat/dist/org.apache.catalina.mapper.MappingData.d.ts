declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                /**
                 * Mapping data.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class MappingData extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public host: org.apache.catalina.Host
                    // @ts-ignore
                    public context: org.apache.catalina.Context
                    // @ts-ignore
                    public contextSlashCount: number /*int*/
                    // @ts-ignore
                    public contexts: org.apache.catalina.Context[]
                    // @ts-ignore
                    public wrapper: org.apache.catalina.Wrapper
                    // @ts-ignore
                    public jspWildCard: boolean
                    // @ts-ignore
                    public readonly contextPath: org.apache.tomcat.util.buf.MessageBytes
                    // @ts-ignore
                    public readonly requestPath: org.apache.tomcat.util.buf.MessageBytes
                    // @ts-ignore
                    public readonly wrapperPath: org.apache.tomcat.util.buf.MessageBytes
                    // @ts-ignore
                    public readonly pathInfo: org.apache.tomcat.util.buf.MessageBytes
                    // @ts-ignore
                    public readonly redirectPath: org.apache.tomcat.util.buf.MessageBytes
                    // @ts-ignore
                    public matchType: javax.servlet.http.MappingMatch
                    // @ts-ignore
                    public recycle(): void
                }
            }
        }
    }
}
