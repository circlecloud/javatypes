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
                public static readonly DOCUMENTATION_OUTPUT: javax.tools.DocumentationTool.Location
                /**
                 * Location to search for doclets.
                 */
                // @ts-ignore
                public static readonly DOCLET_PATH: javax.tools.DocumentationTool.Location
                /**
                 * Location to search for taglets.
                 */
                // @ts-ignore
                public static readonly TAGLET_PATH: javax.tools.DocumentationTool.Location
                // @ts-ignore
                public static values(): javax.tools.DocumentationTool.Location[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.tools.DocumentationTool.Location
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public isOutputLocation(): boolean
            }
        }
    }
}
