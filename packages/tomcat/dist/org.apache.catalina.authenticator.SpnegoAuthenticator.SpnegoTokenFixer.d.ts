declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace SpnegoAuthenticator {
                    /**
                     * This class implements a hack around an incompatibility between the
                     * SPNEGO implementation in Windows and the SPNEGO implementation in Java 8
                     * update 40 onwards. It was introduced by the change to fix this bug:
                     * https://bugs.openjdk.java.net/browse/JDK-8048194
                     * (note: the change applied is not the one suggested in the bug report)
                     * <p>
                     * It is not clear to me if Windows, Java or Tomcat is at fault here. I
                     * think it is Java but I could be wrong.
                     * <p>
                     * This hack works by re-ordering the list of mechTypes in the NegTokenInit
                     * token.
                     */
                    // @ts-ignore
                    class SpnegoTokenFixer extends java.lang.Object {
                        // @ts-ignore
                        public static fix(token: number /*byte*/[]): void
                    }
                }
            }
        }
    }
}
