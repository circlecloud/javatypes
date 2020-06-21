declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Indicates that annotations with a type are to be documented by javadoc
             * and similar tools by default.  This type should be used to annotate the
             * declarations of types whose annotations affect the use of annotated
             * elements by their clients.  If a type declaration is annotated with
             * Documented, its annotations become part of the public API
             * of the annotated elements.
             * @author Joshua Bloch
             * @since 1.5
             */
            // @ts-ignore
            abstract class Documented implements java.lang.annotation.Annotation {
            }
        }
    }
}
