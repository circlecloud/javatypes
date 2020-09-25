declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    namespace ClickEvent {
                        // @ts-ignore
                        class Action extends java.lang.Enum<net.md_5.bungee.api.chat.ClickEvent.Action> {
                            /**
                             * Open a url at the path given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value}
                             */
                            // @ts-ignore
                            public static readonly OPEN_URL: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Open a file at the path given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value}
                             */
                            // @ts-ignore
                            public static readonly OPEN_FILE: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Run the command given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value}
                             */
                            // @ts-ignore
                            public static readonly RUN_COMMAND: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Inserts the string given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value} into the players
                             * text box
                             */
                            // @ts-ignore
                            public static readonly SUGGEST_COMMAND: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Change to the page number given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value} in a book
                             */
                            // @ts-ignore
                            public static readonly CHANGE_PAGE: net.md_5.bungee.api.chat.ClickEvent.Action
                            // @ts-ignore
                            public static values(): net.md_5.bungee.api.chat.ClickEvent.Action[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): net.md_5.bungee.api.chat.ClickEvent.Action
                        }
                    }
                }
            }
        }
    }
}
