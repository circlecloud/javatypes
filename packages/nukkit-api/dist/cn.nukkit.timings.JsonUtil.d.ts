declare namespace cn {
    namespace nukkit {
        namespace timings {
            /**
             * @author Tee7even
             *          <p>
             *          Various methods for more compact JSON object constructing
             */
            // @ts-ignore
            class JsonUtil extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static toArray(...objects: java.lang.Object[] | any[]): JsonArray
                // @ts-ignore
                public static toObject(object: java.lang.Object | any): JsonObject
                // @ts-ignore
                public static mapToObject<E>(collection: java.lang.Iterable<E>, mapper: java.util.function$.Function<E, cn.nukkit.timings.JsonUtil.JSONPair>): JsonObject
                // @ts-ignore
                public static mapToArray<E>(elements: E[], mapper: java.util.function$.Function<E, java.lang.Object | any>): JsonArray
                // @ts-ignore
                public static mapToArray<E>(collection: java.lang.Iterable<E>, mapper: java.util.function$.Function<E, java.lang.Object | any>): JsonArray
            }
        }
    }
}
