declare namespace javax {
    namespace tools {
        namespace DocumentationTool {
            /**
             * Locations specific to {@link DocumentationTool}.
             * @see StandardLocation
             */
            // @ts-ignore
            class Location extends java.lang.Enum<javax.tools.DocumentationTool.Location> implements javax.tools.JavaFileManager.Location {
                /**
                 * Location of new documentation files.
                 */
                // @ts-ignore
                readonly DOCUMENTATION_OUTPUT: javax.tools.DocumentationTool.Location
                /**
                 * Location to search for doclets.
                 */
                // @ts-ignore
                readonly DOCLET_PATH: javax.tools.DocumentationTool.Location
                /**
                 * Location to search for taglets.
                 */
                // @ts-ignore
                readonly TAGLET_PATH: javax.tools.DocumentationTool.Location
                // @ts-ignore
                values(): javax.tools.DocumentationTool.Location[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.tools.DocumentationTool.Location
                // @ts-ignore
                getName(): string
                // @ts-ignore
                isOutputLocation(): boolean
            }
        }
    }
}
