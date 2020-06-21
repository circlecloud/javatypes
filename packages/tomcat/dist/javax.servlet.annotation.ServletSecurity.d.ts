declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * Declare this annotation on a {@link javax.servlet.Servlet} implementation
             * class to enforce security constraints on HTTP protocol requests.<br>
             * The container applies constraints to the URL patterns mapped to each Servlet
             * which declares this annotation.<br>
             * <br>
             * @since Servlet 3.0
             */
            // @ts-ignore
            abstract class ServletSecurity implements java.lang.annotation.Annotation {
            }
        }
    }
}
