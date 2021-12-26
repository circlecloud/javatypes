declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace placeholders {
                        // @ts-ignore
                        class PlaceholderManager extends java.lang.Object implements io.lumine.utils.terminable.Terminable {
                            // @ts-ignore
                            constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                            // @ts-ignore
                            readonly core: io.lumine.xikage.mythicmobs.MythicMobs
                            // @ts-ignore
                            public terminate(): boolean
                            // @ts-ignore
                            public initialize(): void
                            // @ts-ignore
                            public register(key: java.lang.String | string, transformer: io.lumine.xikage.mythicmobs.skills.placeholders.Placeholder): void
                            // @ts-ignore
                            public getPlaceholder(key: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderManager.PlaceholderEntry
                            // @ts-ignore
                            public checkForVariables(string: java.lang.String | string): boolean
                            // @ts-ignore
                            public matcher(string: java.lang.String | string): java.util.regex.Matcher
                            // @ts-ignore
                            public registerParser(placeholderParser: io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderParser): void
                            // @ts-ignore
                            public recheckForPlaceholders(): void
                        }
                    }
                }
            }
        }
    }
}
