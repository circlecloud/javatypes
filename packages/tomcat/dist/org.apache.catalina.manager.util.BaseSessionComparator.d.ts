declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                namespace util {
                    /**
                     * Comparator which permits to compare on a session's content.
                     * @param <T> The type of the session content to be compared
                     * @author C&eacute;drik LIME
                     */
                    // @ts-ignore
                    abstract class BaseSessionComparator<T> extends java.lang.Object implements java.util.Comparator<org.apache.catalina.Session> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public abstract getComparableObject(session: org.apache.catalina.Session): java.lang.Comparable<T>
                        // @ts-ignore
                        public compare(s1: org.apache.catalina.Session, s2: org.apache.catalina.Session): number /*int*/
                    }
                }
            }
        }
    }
}
