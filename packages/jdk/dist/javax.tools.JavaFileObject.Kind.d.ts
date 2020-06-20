declare namespace javax {
    namespace tools {
        namespace JavaFileObject {
            /**
             * Kinds of JavaFileObjects.
             */
            // @ts-ignore
            class Kind extends java.lang.Enum<javax.tools.JavaFileObject.Kind> {
                /**
                 * The extension which (by convention) is normally used for
                 * this kind of file object.  If no convention exists, the
                 * empty string ({@code ""}) is used.
                 */
                // @ts-ignore
                readonly extension: string
                // @ts-ignore
                values(): javax.tools.JavaFileObject.Kind[]
                // @ts-ignore
                valueOf(name: string): javax.tools.JavaFileObject.Kind
            }
        }
    }
}
