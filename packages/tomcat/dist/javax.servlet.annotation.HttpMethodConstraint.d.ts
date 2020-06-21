declare namespace javax {
    namespace servlet {
        namespace annotation {
            /**
             * Specific security constraints can be applied to different types of request,
             * differentiated by the HTTP protocol method type by using this annotation
             * inside the {@link javax.servlet.annotation.ServletSecurity} annotation.
             * @since Servlet 3.0
             */
            // @ts-ignore
            abstract class HttpMethodConstraint implements java.lang.annotation.Annotation {
            }
        }
    }
}
