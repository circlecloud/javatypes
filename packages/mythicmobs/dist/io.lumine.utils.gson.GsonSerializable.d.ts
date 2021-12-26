declare namespace io {
    namespace lumine {
        namespace utils {
            namespace gson {
                // @ts-ignore
                interface GsonSerializable {
                    // @ts-ignore
                    deserialize<T extends io.lumine.utils.gson.GsonSerializable>(clazz: java.lang.Class<T>, element: JsonElement): T
                    // @ts-ignore
                    deserializeRaw(clazz: java.lang.Class<any>, element: JsonElement): io.lumine.utils.gson.GsonSerializable
                    // @ts-ignore
                    getDeserializeMethod(clazz: java.lang.Class<any>): java.lang.reflect.Method
                    // @ts-ignore
                    serialize(): JsonElement
                }
            }
        }
    }
}
