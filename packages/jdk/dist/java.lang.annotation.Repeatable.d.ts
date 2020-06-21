declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * The annotation type {@code java.lang.annotation.Repeatable} is
             * used to indicate that the annotation type whose declaration it
             * (meta-)annotates is <em>repeatable</em>. The value of
             * {@code @Repeatable} indicates the <em>containing annotation
             * type</em> for the repeatable annotation type.
             * @since 1.8
             * @jls 9.6 Annotation Types
             * @jls 9.7 Annotations
             */
            // @ts-ignore
            abstract class Repeatable implements java.lang.annotation.Annotation {
            }
        }
    }
}
