declare namespace org {
    namespace bukkit {
        /**
         * Annotation for types, whose nullability is not well defined, so
         * {@link org.jetbrains.annotations.NotNull} nor
         * {@link org.jetbrains.annotations.Nullable} is applicable. For example when
         * interface defines a method, whose nullability depends on the implementation.
         * @deprecated This should generally not be used in any new API code as it
         *  suggests a bad API design.
         */
        // @ts-ignore
        abstract class UndefinedNullability implements java.lang.annotation.Annotation {
        }
    }
}
