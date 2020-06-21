declare namespace javax {
    namespace tools {
        namespace Diagnostic {
            /**
             * Kinds of diagnostics, for example, error or warning.
             * The kind of a diagnostic can be used to determine how the
             * diagnostic should be presented to the user. For example,
             * errors might be colored red or prefixed with the word "Error",
             * while warnings might be colored yellow or prefixed with the
             * word "Warning". There is no requirement that the Kind
             * should imply any inherent semantic meaning to the message
             * of the diagnostic: for example, a tool might provide an
             * option to report all warnings as errors.
             */
            // @ts-ignore
            class Kind extends java.lang.Enum<javax.tools.Diagnostic.Kind> {
                /**
                 * Problem which prevents the tool's normal completion.
                 */
                // @ts-ignore
                readonly ERROR: javax.tools.Diagnostic.Kind
                /**
                 * Problem which does not usually prevent the tool from
                 * completing normally.
                 */
                // @ts-ignore
                readonly WARNING: javax.tools.Diagnostic.Kind
                /**
                 * Problem similar to a warning, but is mandated by the tool's
                 * specification.  For example, the Java&trade; Language
                 * Specification mandates warnings on certain
                 * unchecked operations and the use of deprecated methods.
                 */
                // @ts-ignore
                readonly MANDATORY_WARNING: javax.tools.Diagnostic.Kind
                /**
                 * Informative message from the tool.
                 */
                // @ts-ignore
                readonly NOTE: javax.tools.Diagnostic.Kind
                /**
                 * Diagnostic which does not fit within the other kinds.
                 */
                // @ts-ignore
                readonly OTHER: javax.tools.Diagnostic.Kind
                // @ts-ignore
                values(): javax.tools.Diagnostic.Kind[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.tools.Diagnostic.Kind
            }
        }
    }
}
