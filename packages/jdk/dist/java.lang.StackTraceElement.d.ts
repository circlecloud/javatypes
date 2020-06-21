declare namespace java {
    namespace lang {
        /**
         * StackTraceElement represents a stack frame.
         * @see Throwable#getStackTrace()
         */
        // @ts-ignore
        class StackTraceElement extends java.lang.Object implements java.io.Serializable {
            /**
             * Create a StackTraceElement from the parameters.
             * @param cls The class name
             * @param method The method name
             * @param file The file name
             * @param line The line number
             */
            // @ts-ignore
            constructor(cls: java.lang.String | string, method: java.lang.String | string, file: java.lang.String | string, line: number /*int*/)
            /**
             * Returns true if the specified object is another StackTraceElement instance
             * representing the same execution point as this instance.
             * @param obj the object to compare to
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the full name (i.e. including package) of the class where this
             * stack trace element is executing.
             * @return the name of the class where this stack trace element is
             *          executing.
             */
            // @ts-ignore
            public getClassName(): string
            /**
             * If available, returns the name of the file containing the Java code
             * source which was compiled into the class where this stack trace element
             * is executing.
             * @return the name of the Java code source file which was compiled into the
             *          class where this stack trace element is executing. If not
             *          available, a <code>null</code> value is returned.
             */
            // @ts-ignore
            public getFileName(): string
            /**
             * Returns the source file line number for the class where this stack trace
             * element is executing.
             * @return the line number in the source file corresponding to where this
             *          stack trace element is executing.
             */
            // @ts-ignore
            public getLineNumber(): number /*int*/
            /**
             * Returns the name of the method where this stack trace element is
             * executing.
             * @return the method in which this stack trace element is executing.
             *          Returns &lt;<code>unknown method</code>&gt; if the name of the
             *          method cannot be determined.
             */
            // @ts-ignore
            public getMethodName(): string
            /**
             * Returns a hash code value for this stack trace element.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns <code>true</code> if the method name returned by
             * {@link #getMethodName()} is implemented as a native method.
             * @return true if the method is a native method
             */
            // @ts-ignore
            public isNativeMethod(): boolean
            /**
             * Returns a string representation of this stack trace element.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
