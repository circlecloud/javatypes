declare namespace org {
    namespace springframework {
        namespace lang {
            /**
             * A common Spring annotation to declare that annotated elements cannot be {@code null}.
             * <p>Leverages JSR-305 meta-annotations to indicate nullability in Java to common
             * tools with JSR-305 support and used by Kotlin to infer nullability of Spring API.
             * <p>Should be used at parameter, return value, and field level. Method overrides should
             * repeat parent {@code @NonNull} annotations unless they behave differently.
             * <p>Use {@code @NonNullApi} (scope = parameters + return values) and/or {@code @NonNullFields}
             * (scope = fields) to set the default behavior to non-nullable in order to avoid annotating
             * your whole codebase with {@code @NonNull}.
             * @author Sebastien Deleuze
             * @author Juergen Hoeller
             * @since 5.0
             * @see NonNullApi
             * @see NonNullFields
             * @see Nullable
             */
            // @ts-ignore
            class NonNull implements java.lang.annotation.Annotation {
            }
        }
    }
}
