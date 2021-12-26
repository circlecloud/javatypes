declare namespace io {
    namespace lumine {
        namespace utils {
            namespace gson {
                // @ts-ignore
                class GsonProvider extends java.lang.Object {
                    // @ts-ignore
                    public static standard(): Gson
                    // @ts-ignore
                    public static prettyPrinting(): Gson
                    // @ts-ignore
                    public static parser(): JsonParser
                    // @ts-ignore
                    public static readObject(reader: java.io.Reader): JsonObject
                    // @ts-ignore
                    public static readObject(s: java.lang.String | string): JsonObject
                    // @ts-ignore
                    public static writeObject(writer: java.lang.Appendable, object: JsonObject): void
                    // @ts-ignore
                    public static writeObjectPretty(writer: java.lang.Appendable, object: JsonObject): void
                    // @ts-ignore
                    public static writeElement(writer: java.lang.Appendable, element: JsonElement): void
                    // @ts-ignore
                    public static writeElementPretty(writer: java.lang.Appendable, element: JsonElement): void
                    // @ts-ignore
                    public static toString(element: JsonElement): string
                    // @ts-ignore
                    public static toStringPretty(element: JsonElement): string
                    // @ts-ignore
                    public static get(): Gson
                    // @ts-ignore
                    public static getPrettyPrinting(): Gson
                }
            }
        }
    }
}
