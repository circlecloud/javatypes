declare namespace javax {
    namespace tools {
        namespace JavaFileObject {
            /**
             * Kinds of JavaFileObjects.
             */
            // @ts-ignore
            class Kind extends java.lang.Enum<javax.tools.JavaFileObject.Kind> {
                /**
                 * Source files written in the Java programming language.  For
                 * example, regular files ending with {@code .java}.
                 */
                // @ts-ignore
                readonly SOURCE: javax.tools.JavaFileObject.Kind
                /**
                 * Class files for the Java Virtual Machine.  For example,
                 * regular files ending with {@code .class}.
                 */
                // @ts-ignore
                readonly CLASS: javax.tools.JavaFileObject.Kind
                /**
                 * HTML files.  For example, regular files ending with {@code
                 * .html}.
                 */
                // @ts-ignore
                readonly HTML: javax.tools.JavaFileObject.Kind
                /**
                 * Any other kind.
                 */
                // @ts-ignore
                readonly OTHER: javax.tools.JavaFileObject.Kind
                /**
                 * The extension which (by convention) is normally used for
                 * this kind of file object.  If no convention exists, the
                 * empty string ({@code ""}) is used.
                 */
                // @ts-ignore
                readonly extension: java.lang.String | string
                // @ts-ignore
                values(): javax.tools.JavaFileObject.Kind[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.tools.JavaFileObject.Kind
            }
        }
    }
}
