declare namespace java {
    namespace lang {
        /**
         * Thrown when an application tries to access an enum constant by name
         * and the enum type contains no constant with the specified name.
         * This exception can be thrown by the {@linkplain
         * java.lang.reflect.AnnotatedElement API used to read annotations
         * reflectively}.
         * @author Josh Bloch
         * @see java.lang.reflect.AnnotatedElement
         * @since 1.5
         */
        // @ts-ignore
        class EnumConstantNotPresentException extends java.lang.RuntimeException {
            /**
             * Constructs an <tt>EnumConstantNotPresentException</tt> for the
             * specified constant.
             * @param enumType the type of the missing enum constant
             * @param constantName the name of the missing enum constant
             */
            // @ts-ignore
            constructor(enumType: java.lang.Class<any>, constantName: java.lang.String | string)
            /**
             * Returns the type of the missing enum constant.
             * @return the type of the missing enum constant
             */
            // @ts-ignore
            enumType(): java.lang.Class<any>
            /**
             * Returns the name of the missing enum constant.
             * @return the name of the missing enum constant
             */
            // @ts-ignore
            constantName(): string
        }
    }
}
