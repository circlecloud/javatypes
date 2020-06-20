declare namespace org {
    namespace springframework {
        namespace lang {
            /**
             * A common Spring annotation to declare that parameters and return values
             * are to be considered as non-nullable by default for a given package.
             * <p>Leverages JSR-305 meta-annotations to indicate nullability in Java to common
             * tools with JSR-305 support and used by Kotlin to infer nullability of Spring API.
             * <p>Should be used at package level in association with {@link Nullable}
             * annotations at parameter and return value level.
             * @author Sebastien Deleuze
             * @author Juergen Hoeller
             * @since 5.0
             * @see NonNullFields
             * @see Nullable
             * @see NonNull
             */
            // @ts-ignore
            class NonNullApi implements java.lang.annotation.Annotation {
            }
        }
    }
}
