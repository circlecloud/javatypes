declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Indicates how long annotations with the annotated type are to
             * be retained.  If no Retention annotation is present on
             * an annotation type declaration, the retention policy defaults to
             * {@code RetentionPolicy.CLASS}.
             * <p>A Retention meta-annotation has effect only if the
             * meta-annotated type is used directly for annotation.  It has no
             * effect if the meta-annotated type is used as a member type in
             * another annotation type.
             * @author Joshua Bloch
             * @since 1.5
             * @jls 9.6.3.2 #Retention
             */
            // @ts-ignore
            abstract class Retention implements java.lang.annotation.Annotation {
            }
        }
    }
}
