declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Annotation retention policy.  The constants of this enumerated type
             * describe the various policies for retaining annotations.  They are used
             * in conjunction with the {@link Retention} meta-annotation type to specify
             * how long annotations are to be retained.
             * @author Joshua Bloch
             * @since 1.5
             */
            // @ts-ignore
            class RetentionPolicy extends java.lang.Enum<java.lang.annotation.RetentionPolicy> {
                /**
                 * Annotations are to be discarded by the compiler.
                 */
                // @ts-ignore
                readonly SOURCE: java.lang.annotation.RetentionPolicy
                /**
                 * Annotations are to be recorded in the class file by the compiler
                 * but need not be retained by the VM at run time.  This is the default
                 * behavior.
                 */
                // @ts-ignore
                readonly CLASS: java.lang.annotation.RetentionPolicy
                /**
                 * Annotations are to be recorded in the class file by the compiler and
                 * retained by the VM at run time, so they may be read reflectively.
                 * @see java.lang.reflect.AnnotatedElement
                 */
                // @ts-ignore
                readonly RUNTIME: java.lang.annotation.RetentionPolicy
                // @ts-ignore
                values(): java.lang.annotation.RetentionPolicy[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.lang.annotation.RetentionPolicy
            }
        }
    }
}
