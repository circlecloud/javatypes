declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * The ChatPaginator takes a raw string of arbitrary length and breaks it down
             * into an array of strings appropriate for displaying on the Minecraft player
             * console.
             */
            // @ts-ignore
            class ChatPaginator extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: number /*int*/
                // @ts-ignore
                public static readonly AVERAGE_CHAT_PAGE_WIDTH: number /*int*/
                // @ts-ignore
                public static readonly UNBOUNDED_PAGE_WIDTH: number /*int*/
                // @ts-ignore
                public static readonly OPEN_CHAT_PAGE_HEIGHT: number /*int*/
                // @ts-ignore
                public static readonly CLOSED_CHAT_PAGE_HEIGHT: number /*int*/
                // @ts-ignore
                public static readonly UNBOUNDED_PAGE_HEIGHT: number /*int*/
                /**
                 * Breaks a raw string up into pages using the default width and height.
                 * @param unpaginatedString The raw string to break.
                 * @param pageNumber The page number to fetch.
                 * @return A single chat page.
                 */
                // @ts-ignore
                public static paginate(unpaginatedString: java.lang.String | string, pageNumber: number /*int*/): org.bukkit.util.ChatPaginator.ChatPage
                /**
                 * Breaks a raw string up into pages using a provided width and height.
                 * @param unpaginatedString The raw string to break.
                 * @param pageNumber The page number to fetch.
                 * @param lineLength The desired width of a chat line.
                 * @param pageHeight The desired number of lines in a page.
                 * @return A single chat page.
                 */
                // @ts-ignore
                public static paginate(unpaginatedString: java.lang.String | string, pageNumber: number /*int*/, lineLength: number /*int*/, pageHeight: number /*int*/): org.bukkit.util.ChatPaginator.ChatPage
                /**
                 * Breaks a raw string up into a series of lines. Words are wrapped using
                 * spaces as decimeters and the newline character is respected.
                 * @param rawString The raw string to break.
                 * @param lineLength The length of a line of text.
                 * @return An array of word-wrapped lines.
                 */
                // @ts-ignore
                public static wordWrap(rawString: java.lang.String | string, lineLength: number /*int*/): string[]
            }
        }
    }
}
