declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace TLSClientHelloExtractor {
                        // @ts-ignore
                        class ExtractorResult extends java.lang.Enum<org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult> {
                            // @ts-ignore
                            readonly COMPLETE: org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                            // @ts-ignore
                            readonly NOT_PRESENT: org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                            // @ts-ignore
                            readonly UNDERFLOW: org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                            // @ts-ignore
                            readonly NEED_READ: org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                            // @ts-ignore
                            readonly NON_SECURE: org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                            // @ts-ignore
                            values(): org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.TLSClientHelloExtractor.ExtractorResult
                        }
                    }
                }
            }
        }
    }
}
