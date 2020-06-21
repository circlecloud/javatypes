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
                            readonly OPEN_URL: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Open a file at the path given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value}
                             */
                            // @ts-ignore
                            readonly OPEN_FILE: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Run the command given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value}
                             */
                            // @ts-ignore
                            readonly RUN_COMMAND: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Inserts the string given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value} into the players
                             * text box
                             */
                            // @ts-ignore
                            readonly SUGGEST_COMMAND: net.md_5.bungee.api.chat.ClickEvent.Action
                            /**
                             * Change to the page number given by
                             * {@link net.md_5.bungee.api.chat.ClickEvent#value} in a book
                             */
                            // @ts-ignore
                            readonly CHANGE_PAGE: net.md_5.bungee.api.chat.ClickEvent.Action
                            // @ts-ignore
                            values(): net.md_5.bungee.api.chat.ClickEvent.Action[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): net.md_5.bungee.api.chat.ClickEvent.Action
                        }
                    }
                }
            }
        }
    }
}
