declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace parser {
                        /**
                         * <p>Cookie header parser based on RFC6265 and RFC2109.</p>
                         * <p>The parsing of cookies using RFC6265 is more relaxed that the
                         * specification in the following ways:</p>
                         * <ul>
                         * <li>Values 0x80 to 0xFF are permitted in cookie-octet to support the use of
                         * UTF-8 in cookie values as used by HTML 5.</li>
                         * <li>For cookies without a value, the '=' is not required after the name as
                         * some browsers do not sent it.</li>
                         * </ul>
                         * <p>The parsing of cookies using RFC2109 is more relaxed that the
                         * specification in the following ways:</p>
                         * <ul>
                         * <li>Values for the path attribute that contain a / character do not have to
                         * be quoted even though / is not permitted in a token.</li>
                         * </ul>
                         * <p>Implementation note:<br>
                         * This class has been carefully tuned to ensure that it has equal or better
                         * performance than the original Netscape/RFC2109 cookie parser. Before
                         * committing and changes, ensure that the TesterCookiePerformance unit test
                         * continues to give results within 1% for the old and new parsers.</p>
                         */
                        // @ts-ignore
                        class Cookie extends java.lang.Object {
                            // @ts-ignore
                            public static parseCookie(bytes: number /*byte*/[], offset: number /*int*/, len: number /*int*/, serverCookies: org.apache.tomcat.util.http.ServerCookies): void
                            // @ts-ignore
                            public static unescapeCookieValueRfc2109(input: java.lang.String | string): string
                        }
                    }
                }
            }
        }
    }
}
