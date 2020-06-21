declare namespace org {
    namespace springframework {
        namespace lang {
            /**
             * A common Spring annotation to declare that fields are to be considered as
             * non-nullable by default for a given package.
             * <p>Leverages JSR-305 meta-annotations to indicate nullability in Java to common
             * tools with JSR-305 support and used by Kotlin to infer nullability of Spring API.
             * <p>Should be used at package level in association with {@link Nullable}
             * annotations at field level.
             * @author Sebastien Deleuze
             * @since 5.0
             * @see NonNullApi
             * @see Nullable
             * @see NonNull
             */
            // @ts-ignore
            abstract class NonNullFields implements java.lang.annotation.Annotation {
            }
        }
    }
}
