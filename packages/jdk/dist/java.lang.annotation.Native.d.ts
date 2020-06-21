declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Indicates that a field defining a constant value may be referenced
             * from native code.
             * The annotation may be used as a hint by tools that generate native
             * header files to determine whether a header file is required, and
             * if so, what declarations it should contain.
             * @since 1.8
             */
            // @ts-ignore
            abstract class Native implements java.lang.annotation.Annotation {
            }
        }
    }
}
