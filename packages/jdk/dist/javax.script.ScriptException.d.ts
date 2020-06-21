declare namespace javax {
    namespace script {
        /**
         * The generic <code>Exception</code> class for the Scripting APIs.  Checked
         * exception types thrown by underlying scripting implementations must be wrapped in instances of
         * <code>ScriptException</code>.  The class has members to store line and column numbers and
         * filenames if this information is available.
         * @author Mike Grogan
         * @since 1.6
         */
        // @ts-ignore
        class ScriptException extends java.lang.Exception {
            /**
             * Creates a <code>ScriptException</code> with a String to be used in its message.
             * Filename, and line and column numbers are unspecified.
             * @param s The String to use in the message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Creates a <code>ScriptException</code> wrapping an <code>Exception</code> thrown by an underlying
             * interpreter.  Line and column numbers and filename are unspecified.
             * @param e The wrapped <code>Exception</code>.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception)
            /**
             * Creates a <code>ScriptException</code> with message, filename and linenumber to
             * be used in error messages.
             * @param message The string to use in the message
             * @param fileName The file or resource name describing the location of a script error
             *  causing the <code>ScriptException</code> to be thrown.
             * @param lineNumber A line number describing the location of a script error causing
             *  the <code>ScriptException</code> to be thrown.
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, fileName: java.lang.String | string, lineNumber: number /*int*/)
            /**
             * <code>ScriptException</code> constructor specifying message, filename, line number
             * and column number.
             * @param message The message.
             * @param fileName The filename
             * @param lineNumber the line number.
             * @param columnNumber the column number.
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, fileName: java.lang.String | string, lineNumber: number /*int*/, columnNumber: number /*int*/)
            /**
             * Returns a message containing the String passed to a constructor as well as
             * line and column numbers and filename if any of these are known.
             * @return The error message.
             */
            // @ts-ignore
            getMessage(): string
            /**
             * Get the line number on which an error occurred.
             * @return The line number.  Returns -1 if a line number is unavailable.
             */
            // @ts-ignore
            getLineNumber(): number /*int*/
            /**
             * Get the column number on which an error occurred.
             * @return The column number.  Returns -1 if a column number is unavailable.
             */
            // @ts-ignore
            getColumnNumber(): number /*int*/
            /**
             * Get the source of the script causing the error.
             * @return The file name of the script or some other string describing the script
             *  source.  May return some implementation-defined string such as <i>&lt;unknown&gt;</i>
             *  if a description of the source is unavailable.
             */
            // @ts-ignore
            getFileName(): string
        }
    }
}
