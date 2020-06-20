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
                // @ts-ignore
                values(): java.lang.annotation.RetentionPolicy[]
                // @ts-ignore
                valueOf(name: string): java.lang.annotation.RetentionPolicy
            }
        }
    }
}
