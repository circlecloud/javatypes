declare namespace java {
    namespace lang {
        namespace ProcessBuilder {
            namespace Redirect {
                /**
                 * The type of a {@link Redirect}.
                 */
                // @ts-ignore
                class Type extends java.lang.Enum<java.lang.ProcessBuilder.Redirect.Type> {
                    /**
                     * The type of {@link Redirect#PIPE Redirect.PIPE}.
                     */
                    // @ts-ignore
                    readonly PIPE: java.lang.ProcessBuilder.Redirect.Type
                    /**
                     * The type of {@link Redirect#INHERIT Redirect.INHERIT}.
                     */
                    // @ts-ignore
                    readonly INHERIT: java.lang.ProcessBuilder.Redirect.Type
                    /**
                     * The type of redirects returned from
                     * {@link Redirect#from Redirect.from(File)}.
                     */
                    // @ts-ignore
                    readonly READ: java.lang.ProcessBuilder.Redirect.Type
                    /**
                     * The type of redirects returned from
                     * {@link Redirect#to Redirect.to(File)}.
                     */
                    // @ts-ignore
                    readonly WRITE: java.lang.ProcessBuilder.Redirect.Type
                    /**
                     * The type of redirects returned from
                     * {@link Redirect#appendTo Redirect.appendTo(File)}.
                     */
                    // @ts-ignore
                    readonly APPEND: java.lang.ProcessBuilder.Redirect.Type
                    // @ts-ignore
                    values(): java.lang.ProcessBuilder.Redirect.Type[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.lang.ProcessBuilder.Redirect.Type
                }
            }
        }
    }
}
