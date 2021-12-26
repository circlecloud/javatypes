declare namespace io {
    namespace lumine {
        namespace utils {
            namespace gson {
                namespace converters {
                    // @ts-ignore
                    interface GsonConverter {
                        // @ts-ignore
                        unwrapObject(p0: JsonObject): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        unwrapArray(p0: JsonArray): Array<java.lang.Object | any>
                        // @ts-ignore
                        unwrapArrayToSet(p0: JsonArray): Array<java.lang.Object | any>
                        // @ts-ignore
                        unwarpPrimitive(p0: JsonPrimitive): any
                        // @ts-ignore
                        unwrapElement(p0: JsonElement): any
                        // @ts-ignore
                        wrap(p0: java.lang.Object | any): JsonElement
                    }
                }
            }
        }
    }
}
